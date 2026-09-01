#!/usr/bin/env python3
"""research415 report tool. One entrypoint for everything after the writing is done.

    python3 tools/report.py new    <client> <daily|weekly|leads> [--date MM-DD-YYYY]
    python3 tools/report.py check  <client> <slug>
    python3 tools/report.py last   <client> [daily|weekly|leads]
    python3 tools/report.py html   <client> <slug>
    python3 tools/report.py email  <client> <slug> [--mode full|summary]
    python3 tools/report.py draft  <client> <slug> [--create]
    python3 tools/report.py build  <client> <slug>          # check + html + email

Report data lives at webapp/reports/<client>/<slug>.json in the Brief shape
(webapp/app/samples/briefs/types.ts). Built files land in clients/<client>/reports/.
Client config comes from the YAML frontmatter at the top of clients/<client>/CLIENT.md.
Standard library only. Chrome.app is used for the HTML export when present.
"""
from __future__ import annotations

import datetime as dt
import hashlib
import html
import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / "webapp"
REPORTS = WEB / "reports"
CLIENTS = ROOT / "clients"
CSS_FILE = WEB / "app" / "samples" / "analysis.css"
SITE = "https://415brand.com"
DEV = "http://localhost:3000"
FROM = os.environ.get("RESEND_FROM", "research415 <reports@415brand.com>")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

KINDS = ("daily", "weekly", "leads")
BLOCK_TYPES = {"p", "note", "why", "h3", "ul", "links", "findings", "toggle", "fig", "table",
               "scorecard", "moves", "changes"}


# ----------------------------------------------------------------------------- helpers

def die(msg: str, code: int = 1) -> None:
    print(f"error: {msg}", file=sys.stderr)
    sys.exit(code)


def json_path(client: str, slug: str) -> Path:
    return REPORTS / client / f"{slug}.json"


def out_dir(client: str) -> Path:
    d = CLIENTS / client / "reports"
    d.mkdir(parents=True, exist_ok=True)
    return d


def load_brief(client: str, slug: str) -> dict:
    p = json_path(client, slug)
    if not p.exists():
        die(f"no report at {p.relative_to(ROOT)}")
    try:
        return json.loads(p.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        die(f"{p.relative_to(ROOT)} is not valid JSON: {e}")


def client_config(client: str) -> dict:
    """Scalar key: value pairs from the frontmatter of clients/<client>/CLIENT.md."""
    p = CLIENTS / client / "CLIENT.md"
    if not p.exists():
        die(f"no client config at {p.relative_to(ROOT)}. Run the new-client skill first.")
    text = p.read_text(encoding="utf-8")
    m = re.match(r"---\n(.*?)\n---", text, re.S)
    if not m:
        die(f"{p.relative_to(ROOT)} has no YAML frontmatter block")
    cfg: dict[str, str] = {}
    for line in m.group(1).splitlines():
        if ":" in line and not line.lstrip().startswith("#"):
            k, _, v = line.partition(":")
            cfg[k.strip()] = v.strip().strip('"').strip("'")
    return cfg


def slug_date(slug: str) -> dt.date | None:
    m = re.search(r"(\d{2})-(\d{2})-(\d{4})$", slug)
    if not m:
        return None
    mo, d, y = (int(x) for x in m.groups())
    try:
        return dt.date(y, mo, d)
    except ValueError:
        return None


def long_date(d: dt.date) -> str:
    return f"{d.strftime('%B')} {d.day}, {d.year}"


def short_date(d: dt.date) -> str:
    return f"{d.strftime('%b')} {d.day}"


def env_key(name: str) -> str | None:
    if os.environ.get(name):
        return os.environ[name]
    env = ROOT / ".env"
    if env.exists():
        for line in env.read_text().splitlines():
            if line.startswith(f"{name}="):
                return line.split("=", 1)[1].strip().strip('"').strip("'")
    return None


# ----------------------------------------------------------------------------- new

def cmd_new(client: str, kind: str, date: str | None) -> None:
    if kind not in KINDS:
        die(f"kind must be one of {KINDS}")
    cfg = client_config(client)
    d = dt.date.today() if not date else slug_date(f"x-{date}")
    if d is None:
        die("--date must be MM-DD-YYYY")
    slug = f"{kind}-{d.strftime('%m-%d-%Y')}"
    dest = json_path(client, slug)
    if dest.exists():
        die(f"{dest.relative_to(ROOT)} already exists")
    subject, name, readers = cfg.get("subject", "TODO"), cfg.get("client", client), cfg.get("readers", "TODO")
    if kind == "daily":
        title = f"{subject} daily brief"
    elif kind == "weekly":
        title = f"{subject} weekly brief: brand & competitive analysis"
    else:
        title = "Competitor leads brief"
    brief = {
        "slug": f"{client}-{slug}",
        "kind": kind,
        "title": title,
        "sub": f"For {readers}, {long_date(d)}",
        "subject": subject,
        "client": name,
        "description": "TODO one or two sentences for the page description",
        "email": {"subject": f"{title.split(':')[0]}, {short_date(d)}",
                  "preview": "TODO the counts, e.g. 5 complaints to reply to, 4 people shopping around, 5 ads to copy"},
        "intro": [],
        "sections": [],
        "footer": "",
        "sources": {},
    }
    post_headers = [{"text": "Where", "w": "12%"}, {"text": "Date", "w": "7%", "nw": True},
                    {"text": "Post"}, {"text": "Reach", "w": "12%"}, {"text": "What to do", "w": "26%"}]
    if kind == "daily":
        brief["intro"] = [{"type": "why", "text": "**Today's three moves:** (1) TODO (2) TODO (3) TODO"}]
        brief["sections"] = [
            {"id": "complaints", "title": f"People complaining about {subject}",
             "blocks": [{"type": "table", "headers": post_headers, "rows": []}]},
            {"id": "shopping", "title": "People shopping around or on the fence",
             "blocks": [{"type": "table", "headers": post_headers, "rows": []}]},
            {"id": "ads", "title": f"{subject} ads and creator posts that work, to send your team",
             "blocks": [{"type": "table",
                         "headers": [{"text": "The example", "w": "16%"}, {"text": "Why we know it works", "w": "16%"},
                                     {"text": "The hook, word for word"}, {"text": "What to brief", "w": "25%"}],
                         "rows": []},
                        {"type": "why", "text": "**Takeaway:** TODO the shape every winner shares, and the negative search result with its corpus size"}]},
            {"id": "week", "title": "What happened this week", "blocks": [{"type": "ul", "items": []}]},
        ]
    elif kind == "weekly":
        brief["intro"] = [
            {"type": "h3", "text": f"Recommended actions for {name} from the analysis"},
            {"type": "moves", "collapsed": True, "items": []},
            {"type": "h3", "text": "Posts worth replying to this week"},
            {"type": "table", "headers": [{"text": "Where", "w": "16%"}, {"text": "When", "w": "7%", "nw": True},
                                          {"text": "What they said"}, {"text": "Status", "w": "10%"},
                                          {"text": "What to say", "w": "26%"}], "rows": []},
        ]
        shape = lambda: [{"type": "fig", "panels": []},
                         {"type": "h3", "text": "What happened"},
                         {"type": "findings", "style": "did", "items": []},
                         {"type": "h3", "text": f"What {name} should do"},
                         {"type": "findings", "style": "do", "items": []},
                         {"type": "toggle", "claim": "Full analysis", "body": []}]
        brief["sections"] = [
            {"id": "key-findings", "title": "Key findings",
             "blocks": [{"type": "scorecard", "rows": []}, {"type": "findings", "items": []}]},
            {"id": "pricing-and-product", "title": "Pricing and product", "blocks": shape()},
            {"id": "search-and-marketplaces", "title": "Search and marketplaces", "blocks": shape()},
            {"id": "advertising-and-social-media", "title": "Advertising and social media", "blocks": shape()},
            {"id": "hiring", "title": "Hiring", "blocks": shape()},
            {"id": "sources", "title": "Sources", "blocks": [{"type": "links", "items": []}]},
        ]
        brief["footer"] = f"TODO one short line: pull date, window, and what reach means. Data pulled {long_date(d)}."
    else:
        brief["intro"] = [{"type": "why", "text": "**Three things to do today:** (1) TODO (2) TODO (3) TODO"}]
        brief["sections"] = [
            {"id": "leads", "title": "TODO", "blocks": [{"type": "table", "headers": post_headers, "rows": []}]},
        ]
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(brief, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"wrote {dest.relative_to(ROOT)}")
    print(f"page:  /analysis/{client}/{slug}")


# ----------------------------------------------------------------------------- last

def list_reports(client: str, kind: str | None = None) -> list[tuple[dt.date, str]]:
    d = REPORTS / client
    if not d.exists():
        return []
    out = []
    for f in d.glob("*.json"):
        s = f.stem
        if kind and not s.startswith(kind + "-"):
            continue
        dd = slug_date(s)
        if dd:
            out.append((dd, s))
    return sorted(out, reverse=True)


def cmd_last(client: str, kind: str | None) -> None:
    rows = list_reports(client, kind)
    if not rows:
        print(f"no reports for {client}" + (f" of kind {kind}" if kind else ""))
        return
    for i, (d, s) in enumerate(rows):
        mark = "latest " if i == 0 else "       "
        print(f"{mark}{d.isoformat()}  webapp/reports/{client}/{s}.json")


# ----------------------------------------------------------------------------- check

PILL = re.compile(r"\[\[([a-z0-9-]+)(?:\|([^\]]*))?\]\]")
BANNED = ["delve", "underscore", "testament", "pivotal", "leverage", "utilize", "robust", "seamless", "foster",
          "garner", "intricate", "crucial", "tapestry", "landscape", "ecosystem", "moreover", "additionally",
          "furthermore", "it is important to note", "approximately", "in order to", "game-changer",
          "at this point in time"]
TOOLS = ["apify", "scraper", "firecrawl", "playwright", "credit limit", "our pull", "the pull failed"]
STRIP_LINKS = re.compile(r"\]\((https?://[^)]+)\)")


def walk_text(brief: dict):
    """Yield (path, text) for every prose string in the brief."""
    def blocks(bl, path):
        for i, b in enumerate(bl):
            p = f"{path}[{i}]"
            t = b.get("type")
            if t in ("p", "note", "why", "h3"):
                yield f"{p}.text", b.get("text", "")
            elif t == "ul":
                for j, it in enumerate(b.get("items", [])):
                    yield f"{p}.items[{j}]", it
            elif t == "links":
                for j, it in enumerate(b.get("items", [])):
                    yield f"{p}.links[{j}]", it
            elif t == "changes":
                for j, it in enumerate(b.get("items", [])):
                    yield f"{p}.items[{j}].text", it.get("text", "")
            elif t == "moves":
                for j, it in enumerate(b.get("items", [])):
                    yield f"{p}.items[{j}].action", it.get("action", "")
                    yield f"{p}.items[{j}].why", it.get("why", "")
            elif t == "findings":
                for j, it in enumerate(b.get("items", [])):
                    yield f"{p}.items[{j}].claim", it.get("claim", "")
                    yield from blocks(it.get("body", []), f"{p}.items[{j}].body")
            elif t == "toggle":
                yield f"{p}.claim", b.get("claim", "")
                yield from blocks(b.get("body", []), f"{p}.body")
            elif t == "table":
                for r, row in enumerate(b.get("rows", [])):
                    for c, cell in enumerate(row):
                        yield f"{p}.rows[{r}][{c}]", cell
            elif t == "scorecard":
                for r, row in enumerate(b.get("rows", [])):
                    for k in ("metric", "primary", "us", "change", "source"):
                        if row.get(k):
                            yield f"{p}.rows[{r}].{k}", row[k]
            elif t == "fig":
                for j, pan in enumerate(b.get("panels", [])):
                    yield f"{p}.panels[{j}].cap", pan.get("cap", "")
                    if pan.get("sub"):
                        yield f"{p}.panels[{j}].sub", pan["sub"]
    yield "title", brief.get("title", "")
    yield "sub", brief.get("sub", "")
    yield "description", brief.get("description", "")
    if brief.get("email"):
        yield "email.subject", brief["email"].get("subject", "")
        yield "email.preview", brief["email"].get("preview", "")
    yield from blocks(brief.get("intro", []), "intro")
    for i, s in enumerate(brief.get("sections", [])):
        yield f"sections[{i}].title", s.get("title", "")
        yield from blocks(s.get("blocks", []), f"sections[{i}].blocks")
    yield "footer", brief.get("footer", "")


def prose_only(s: str) -> str:
    """Text with link targets and pills removed, for style checks."""
    s = STRIP_LINKS.sub("]", s)
    return PILL.sub("", s)


def words(s: str) -> int:
    return len(re.findall(r"\S+", prose_only(s)))


def cmd_check(client: str, slug: str) -> int:
    brief = load_brief(client, slug)
    errors: list[str] = []
    warns: list[str] = []
    kind = brief.get("kind")

    for k in ("slug", "title", "sub", "subject", "client", "intro", "sections", "footer", "sources"):
        if k not in brief:
            errors.append(f"missing top-level field {k!r}")
    if kind not in KINDS:
        warns.append(f"kind is {kind!r}, expected one of {KINDS}")
    if not brief.get("description") or "TODO" in str(brief.get("description")):
        warns.append("description is missing or still TODO")
    em = brief.get("email") or {}
    if not em.get("subject") or not em.get("preview") or "TODO" in json.dumps(em):
        warns.append("email.subject or email.preview is missing or still TODO")

    sources = brief.get("sources", {})
    used: set[str] = set()

    def check_blocks(bl, path, depth=0):
        if not isinstance(bl, list):
            errors.append(f"{path}: blocks must be a list")
            return
        for i, b in enumerate(bl):
            p = f"{path}[{i}]"
            t = b.get("type")
            if t not in BLOCK_TYPES:
                errors.append(f"{p}: unknown block type {t!r}")
                continue
            if t == "table":
                hs = b.get("headers", [])
                rows = b.get("rows", [])
                cap = 25 if kind in ("daily", "leads") else 45
                for r, row in enumerate(rows):
                    if len(row) != len(hs):
                        errors.append(f"{p}.rows[{r}]: {len(row)} cells for {len(hs)} headers")
                    if not any("](http" in c or "[[" in c for c in row):
                        warns.append(f"{p}.rows[{r}]: row has no link or source pill")
                    if hs and hs[-1].get("text", "").lower().startswith("what") and row:
                        n = words(row[-1])
                        if n > cap:
                            warns.append(f"{p}.rows[{r}]: last cell is {n} words, keep it to {cap}")
                if kind in ("daily", "leads") and rows and not (3 <= len(rows) <= 5):
                    warns.append(f"{p}: table has {len(rows)} rows, dailies run three to five")
            elif t == "findings":
                for j, it in enumerate(b.get("items", [])):
                    if "claim" not in it or "body" not in it:
                        errors.append(f"{p}.items[{j}]: finding needs claim and body")
                    else:
                        check_blocks(it["body"], f"{p}.items[{j}].body", depth + 1)
            elif t == "toggle":
                check_blocks(b.get("body", []), f"{p}.body", depth + 1)
            elif t == "moves":
                n = len(b.get("items", []))
                if kind == "weekly" and not (3 <= n <= 4):
                    warns.append(f"{p}: {n} recommended actions, the weekly runs three or four")
                for j, it in enumerate(b.get("items", [])):
                    if "action" not in it or "why" not in it:
                        errors.append(f"{p}.items[{j}]: move needs action and why")
                    elif words(it["why"]) > 100:
                        warns.append(f"{p}.items[{j}].why is {words(it['why'])} words, keep it under 100")
            elif t == "fig":
                for j, pan in enumerate(b.get("panels", [])):
                    ch = pan.get("chart", {})
                    if not ch.get("aria"):
                        warns.append(f"{p}.panels[{j}]: chart has no aria text")
                    if ch.get("kind") not in ("columns", "rows", "share", "lines"):
                        errors.append(f"{p}.panels[{j}]: chart kind {ch.get('kind')!r} unknown")
            elif t == "scorecard":
                for r, row in enumerate(b.get("rows", [])):
                    for k in ("primary", "us"):
                        if len(str(row.get(k, ""))) > 18:
                            warns.append(f"{p}.rows[{r}].{k}: value longer than 18 characters wraps into a tower")

    check_blocks(brief.get("intro", []), "intro")
    for i, s in enumerate(brief.get("sections", [])):
        if not s.get("id") or not s.get("title"):
            errors.append(f"sections[{i}]: needs id and title")
        check_blocks(s.get("blocks", []), f"sections[{i}].blocks")

    total_words = 0
    for path, text in walk_text(brief):
        if not isinstance(text, str):
            errors.append(f"{path}: not a string")
            continue
        total_words += words(text)
        for m in PILL.finditer(text):
            used.add(m.group(1))
            if m.group(1) not in sources:
                errors.append(f"{path}: source [[{m.group(1)}]] is not defined in sources")
        if "[[" in text and ".links[" not in path:
            tail = re.sub(r"(\s*\[\[[a-z0-9-]+(?:\|[^\]]*)?\]\])+\s*$", "", text)
            if "[[" in tail:
                warns.append(f"{path}: a source pill sits mid-text, move every pill to the end")
        if "TODO" in text:
            errors.append(f"{path}: still contains TODO")
        plain = prose_only(text)
        if "—" in plain:
            warns.append(f"{path}: em dash")
        if "–" in plain:
            warns.append(f"{path}: en dash, write 'to' or a hyphen")
        if re.search(r"[“”‘’]", plain):
            warns.append(f"{path}: curly quote, use straight quotes")
        if re.search(r"[a-z\)\"]; [a-z]", plain):
            warns.append(f"{path}: semicolon, split into two sentences")
        low = plain.lower()
        for w in BANNED:
            if re.search(rf"\b{re.escape(w)}\b", low):
                warns.append(f"{path}: banned word {w!r}")
        for w in TOOLS:
            if w in low:
                warns.append(f"{path}: names the tool ({w.strip()!r}), cite the source instead")
    for sid in sources:
        if sid not in used:
            warns.append(f"sources.{sid}: defined but never used")
    for sid, s in sources.items():
        if not s.get("href") or not s.get("label"):
            errors.append(f"sources.{sid}: needs label and href")

    if kind in ("daily", "leads"):
        if not (1100 <= total_words <= 2100):
            warns.append(f"word count {total_words}, a daily runs 1,200 to 2,000")
        if not any(b.get("type") in ("why", "moves") for b in brief.get("intro", [])):
            warns.append("intro has no green 'why' box for the three moves")
    elif kind == "weekly":
        if not (7500 <= total_words <= 10500):
            warns.append(f"word count {total_words}, a weekly runs 8,000 to 10,000")
        titles = [s.get("title", "") for s in brief.get("sections", [])]
        if titles[:1] != ["Key findings"] or titles[-1:] != ["Sources"]:
            warns.append(f"section order is {titles}, expected Key findings first and Sources last")
        if not any(b.get("type") == "scorecard" for s in brief.get("sections", [])[:1] for b in s.get("blocks", [])):
            warns.append("no scorecard inside Key findings")

    rel = json_path(client, slug).relative_to(ROOT)
    for e in errors:
        print(f"ERROR {e}")
    for w in warns:
        print(f"warn  {w}")
    print(f"{rel}: {len(errors)} errors, {len(warns)} warnings, {total_words} words, "
          f"{len(sources)} sources")
    return 1 if errors else 0


# ----------------------------------------------------------------------------- html

def dev_server_up() -> bool:
    try:
        urllib.request.urlopen(DEV + "/", timeout=3)
        return True
    except Exception:
        return False


def start_dev_server() -> subprocess.Popen:
    log = open(ROOT / ".dev-server.log", "ab")
    proc = subprocess.Popen(["pnpm", "dev"], cwd=WEB, stdout=log, stderr=subprocess.STDOUT,
                            start_new_session=True)
    for _ in range(90):
        if dev_server_up():
            return proc
        time.sleep(1)
    proc.terminate()
    die("dev server did not come up in 90s, see .dev-server.log")


def extract_div(src: str, marker: str) -> str:
    i = src.index(marker)
    depth, j = 0, i
    pat = re.compile(r"<div\b|</div>")
    while True:
        m = pat.search(src, j)
        if not m:
            die("unbalanced <div> while extracting the report")
        depth += 1 if m.group(0) == "<div" else -1
        j = m.end()
        if depth == 0:
            return src[i:j]


def cmd_html(client: str, slug: str) -> None:
    brief = load_brief(client, slug)
    url = f"{DEV}/analysis/{client}/{slug}"
    started = None
    if not dev_server_up():
        print("starting dev server...")
        started = start_dev_server()
    try:
        if Path(CHROME).exists():
            cmd = [CHROME, "--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
                   "--window-size=1100,3000", "--virtual-time-budget=25000", "--dump-dom", url]
            page = subprocess.run(cmd, capture_output=True, text=True, timeout=120).stdout
            if "<div class=\"analysis\"" not in page:
                die(f"Chrome returned no report for {url}. Is the page building? Check the dev server log.")
        else:
            print("warn  Chrome.app not found, exporting without rendered charts")
            page = urllib.request.urlopen(url, timeout=60).read().decode()
    finally:
        if started:
            os.killpg(os.getpgid(started.pid), 15)
    body = extract_div(page, "<div class=\"analysis\"")
    body = re.sub(r"<script\b[^>]*>.*?</script>", "", body, flags=re.S)
    css = CSS_FILE.read_text(encoding="utf-8")
    doc = ("<!doctype html>\n<html lang=\"en\"><head><meta charset=\"utf-8\">"
           "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
           f"<title>{html.escape(brief['title'])}, {html.escape(brief['sub'])}</title>"
           f"<style>{css}</style></head><body style=\"margin:0\">{body}</body></html>")
    dest = out_dir(client) / f"{slug}.html"
    dest.write_text(doc, encoding="utf-8")
    print(f"wrote {dest.relative_to(ROOT)} ({len(doc) / 1024:.1f}KB)")


# ----------------------------------------------------------------------------- email

FONT = "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
LINK = "color:#3366cc;text-decoration:none"
BODY = f"{FONT};font-size:15px;line-height:1.6;color:#202122;margin:0 0 12px"
MUTE = f"{FONT};font-size:13.5px;line-height:1.5;color:#72777d;margin:0 0 12px"
CELL = f"padding:6px 9px;border:1px solid #c8ccd1;{FONT};font-size:13.5px;line-height:1.4;color:#202122"
HEAD = CELL + ";background-color:#f8f9fa;font-weight:bold"
PILLS = f"{FONT};color:#54595d;text-decoration:none;font-size:12px"
TONE = {"good": "#176f4e", "bad": "#b3261e", "neutral": "#54595d"}


class Email:
    def __init__(self, brief: dict, client: str, slug: str):
        self.b = brief
        self.src = brief.get("sources", {})
        self.url = f"{SITE}/analysis/{client}/{slug}"
        self.out: list[str] = []
        self.txt: list[str] = []

    # inline markup -> html
    def pill(self, sid: str, label: str | None = None) -> str:
        d = self.src.get(sid)
        if not d:
            return ""
        text = html.escape(label or d["label"], quote=False)
        return (f'<a href="{html.escape(d["href"])}" style="{PILLS}"><span style="background:#f8f9fa;'
                f'border:1px solid #c8ccd1;padding:1px 6px;border-radius:999px;white-space:nowrap">{text}</span></a>')

    def md(self, s: str) -> str:
        s = html.escape(s, quote=False)
        s = re.sub(r"\[\[([a-z0-9-]+)\|([^\]]+)\]\]", lambda m: self.pill(m.group(1), m.group(2)), s)
        s = re.sub(r"\[\[([a-z0-9-]+)\]\]", lambda m: self.pill(m.group(1)), s)
        s = re.sub(r"\[([^\]]+)\]\((https?://[^)\s]+)\)",
                   lambda m: f'<a href="{m.group(2)}" style="{LINK}">{m.group(1)}</a>', s)
        s = re.sub(r"\*\*(.+?)\*\*", r'<b style="font-weight:600">\1</b>', s)
        s = re.sub(r"`([^`]+)`", r'<code style="font-family:Menlo,monospace;font-size:0.92em">\1</code>', s)
        return s

    def plain(self, s: str) -> str:
        s = re.sub(r"\[\[([a-z0-9-]+)\|([^\]]+)\]\]", r"\2", s)
        s = re.sub(r"\[\[([a-z0-9-]+)\]\]", lambda m: self.src.get(m.group(1), {}).get("label", ""), s)
        s = re.sub(r"\[([^\]]+)\]\((https?://[^)\s]+)\)", r"\1 (\2)", s)
        s = s.replace("**", "").replace("`", "")
        return re.sub(r"[ \t]+", " ", s).strip()

    # building blocks
    def p(self, t: str, style: str = BODY) -> None:
        self.out.append(f'<p style="{style}">{self.md(t)}</p>')

    def h2(self, n: int, t: str) -> None:
        self.out.append(f'<p style="{FONT};font-size:21px;line-height:1.3;font-weight:600;color:#202122;'
                        f'margin:36px 0 12px;padding-bottom:5px;border-bottom:1px solid #c8ccd1">'
                        f'<span style="color:#72777d;font-weight:500">{n}</span>&nbsp;&nbsp;{html.escape(t)}</p>')

    def h3(self, t: str) -> None:
        self.out.append(f'<p style="{FONT};font-size:16px;font-weight:600;color:#202122;margin:20px 0 8px">{self.md(t)}</p>')

    def rule(self, inner: str, color: str = "#1baf7a") -> None:
        self.out.append('<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 12px"><tr>'
                        f'<td width="3" bgcolor="{color}" style="background-color:{color};font-size:1px;line-height:1px">&nbsp;</td>'
                        f'<td style="padding:2px 0 2px 12px;{BODY};margin:0">{inner}</td></tr></table>')

    def bullet(self, inner: str, color: str = "#72777d") -> None:
        self.out.append('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
                        f'<td width="18" valign="top" style="{FONT};font-size:15px;line-height:1.6;color:{color}">&bull;</td>'
                        f'<td valign="top" style="{BODY};padding-bottom:9px;margin:0">{inner}</td></tr></table>')

    def table(self, headers: list[dict], rows: list[list[str]]) -> None:
        o = ['<table width="100%" cellpadding="0" cellspacing="0" border="0" '
             'style="border-collapse:collapse;border:1px solid #a2a9b1;margin:8px 0 14px"><tr>']
        for h in headers:
            w = f' width="{h["w"]}"' if h.get("w") else ""
            nw = ";white-space:nowrap" if h.get("nw") else ""
            o.append(f'<td{w} valign="top" bgcolor="#f8f9fa" style="{HEAD}{nw}">{self.md(h["text"])}</td>')
        o.append("</tr>")
        for r in rows:
            o.append("<tr>")
            for h, c in zip(headers, r):
                nw = ";white-space:nowrap" if h.get("nw") else ""
                o.append(f'<td valign="top" style="{CELL}{nw}">{self.md(c)}</td>')
            o.append("</tr>")
        o.append("</table>")
        self.out.append("".join(o))

    def chart(self, panel: dict) -> None:
        c = panel.get("chart", {})
        self.out.append(f'<p style="{FONT};font-size:14px;font-weight:600;color:#202122;margin:12px 0 2px">{html.escape(panel.get("cap", ""))}</p>')
        if panel.get("sub"):
            self.out.append(f'<p style="{MUTE};margin:0 0 6px">{html.escape(panel["sub"])}</p>')
        fmt = c.get("fmt", "num")

        def f(v):
            if isinstance(v, (int, float)):
                if fmt == "usd":
                    return f"${v:,.0f}"
                if fmt == "pct":
                    return f"{v}%"
                if fmt == "k$":
                    return f"${v}K"
                return f"{v:,}"
            return str(v)
        kind = c.get("kind")
        if kind == "share":
            rows = [[str(r[0]), f"{r[1]}%"] for r in c.get("rows", [])]
            self.table([{"text": ""}, {"text": "", "w": "22%"}], rows)
        elif kind in ("rows", "columns"):
            rows = []
            for r in c.get("rows", []):
                nums = [x for x in r if isinstance(x, (int, float))]
                val = f"{f(nums[0])} to {f(nums[1])}" if len(nums) == 2 else f(nums[0]) if nums else ""
                rows.append([str(r[0]), val])
            self.table([{"text": ""}, {"text": "", "w": "22%"}], rows)
        elif kind == "lines":
            series = c.get("series", [])
            xs: list[str] = []
            for s in series:
                for x, _ in s.get("points", []):
                    if x not in xs:
                        xs.append(x)
            rows = []
            for x in xs:
                row = [str(x)]
                for s in series:
                    v = next((v for px, v in s.get("points", []) if px == x), None)
                    row.append(f(v) if v is not None else "")
                rows.append(row)
            self.table([{"text": ""}] + [{"text": s.get("label", "")} for s in series], rows)
        self.txt.append(self.plain(panel.get("cap", "")))
        if c.get("aria"):
            self.txt.append(self.plain(c["aria"]))
        self.txt.append("")

    def blocks(self, bl: list[dict], summary: bool = False) -> None:
        for b in bl:
            t = b.get("type")
            if t == "p":
                self.p(b["text"]); self.txt += [self.plain(b["text"]), ""]
            elif t == "note":
                self.p(b["text"], MUTE); self.txt += [self.plain(b["text"]), ""]
            elif t == "why":
                inner = self.md(b["text"]).replace('<b style="font-weight:600">', '<b style="font-weight:600;color:#176f4e">')
                self.rule(inner); self.txt += [self.plain(b["text"]), ""]
            elif t == "h3":
                self.h3(b["text"]); self.txt += [self.plain(b["text"]).upper(), ""]
            elif t == "ul":
                for it in b.get("items", []):
                    self.bullet(self.md(it)); self.txt += ["- " + self.plain(it), ""]
            elif t == "links":
                for it in b.get("items", []):
                    self.p(it, MUTE); self.txt.append(self.plain(it))
                self.txt.append("")
            elif t == "changes":
                for it in b.get("items", []):
                    self.bullet(self.md(it["text"]), TONE.get(it.get("tone", "neutral"), "#54595d"))
                    self.txt += ["- " + self.plain(it["text"]), ""]
            elif t == "table":
                self.table(b["headers"], b["rows"])
                hs = [h["text"] for h in b["headers"]]
                for r in b["rows"]:
                    self.txt.append("* " + self.plain(r[0]))
                    for h, c in zip(hs[1:], r[1:]):
                        self.txt.append(f"  {h}: {self.plain(c)}")
                    self.txt.append("")
            elif t == "scorecard":
                hs = [{"text": "Metric", "w": "30%"}, {"text": self.b["subject"], "w": "14%"},
                      {"text": self.b["client"], "w": "14%"}, {"text": "Notes"}]
                rows = [[r["metric"], r.get("primary", ""), r.get("us", ""), r.get("change", "")] for r in b["rows"]]
                self.table(hs, rows)
                for r in rows:
                    self.txt.append(f"* {self.plain(r[0])}: {self.b['subject']} {self.plain(r[1])}, "
                                    f"{self.b['client']} {self.plain(r[2])}. {self.plain(r[3])}")
                self.txt.append("")
            elif t == "moves":
                for i, m in enumerate(b.get("items", []), 1):
                    inner = (f'<b style="font-weight:600">{i}. {self.md(m["action"])}</b>'
                             f'<br><span style="{BODY};margin:0">{self.md(m["why"])}</span>')
                    self.rule(inner)
                    self.txt += [f'{i}. {self.plain(m["action"])}', f'   {self.plain(m["why"])}', ""]
            elif t == "findings":
                color = "#1baf7a" if b.get("style") == "do" else "#3366cc"
                for it in b.get("items", []):
                    self.rule(f'<b style="font-weight:600">{self.md(it["claim"])}</b>', color)
                    self.txt.append("* " + self.plain(it["claim"]))
                    if not summary:
                        self.out.append('<div style="padding-left:15px">')
                        self.blocks(it.get("body", []))
                        self.out.append("</div>")
                    else:
                        self.txt.append("")
            elif t == "toggle":
                if summary:
                    continue
                self.out.append(f'<p style="{FONT};font-size:14px;font-weight:600;color:#72777d;margin:16px 0 6px">{self.md(b["claim"])}</p>')
                self.txt += [self.plain(b["claim"]).upper(), ""]
                self.blocks(b.get("body", []))
            elif t == "fig":
                if summary:
                    continue
                for pan in b.get("panels", []):
                    self.chart(pan)

    def build(self, mode: str) -> tuple[str, str]:
        b = self.b
        title, sub = b["title"], b["sub"]
        em = b.get("email") or {}
        preview = em.get("preview", "")
        self.out.append(f'<p style="{FONT};font-size:30px;line-height:1.2;font-weight:600;color:#202122;'
                        f'letter-spacing:-0.01em;margin:0 0 4px">{html.escape(title)}</p>')
        self.out.append(f'<p style="{MUTE};margin:0 0 18px;padding-bottom:10px;border-bottom:1px solid #c8ccd1">{html.escape(sub)}</p>')
        self.out.append(f'<p style="{MUTE};margin:0 0 14px">Some email apps cut off long messages. '
                        f'<a href="{self.url}" style="{LINK}">Read the full report in your browser</a>.</p>')
        self.txt += [title.upper(), sub, "", f"Full report: {self.url}", ""]
        sections = b.get("sections", [])
        if mode == "full":
            items = "<br>".join(f"{i}. {html.escape(s['title'])}" for i, s in enumerate(sections, 1))
            self.out.append('<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;'
                            'border:1px solid #a2a9b1;margin:2px 0 12px"><tr><td bgcolor="#f8f9fa" '
                            f'style="background:#f8f9fa;padding:8px 18px 8px 14px;{FONT};font-size:14px;line-height:1.5;color:#202122">'
                            f'<span style="font-weight:600">Contents</span><br>{items}</td></tr></table>')
        self.blocks(b.get("intro", []), summary=(mode == "summary"))
        if mode == "full":
            for i, s in enumerate(sections, 1):
                self.h2(i, s["title"])
                self.txt += [f"{i}. {s['title'].upper()}", ""]
                self.blocks(s["blocks"])
            if b.get("footer", "").strip():
                self.p(b["footer"], MUTE); self.txt += [self.plain(b["footer"]), ""]
        else:
            # summary: the key findings claims, then a pointer to the rest
            first = sections[0] if sections else None
            if first:
                self.h2(1, first["title"])
                self.txt += [f"1. {first['title'].upper()}", ""]
                self.blocks([x for x in first["blocks"] if x.get("type") == "findings"], summary=True)
            rest = ", ".join(s["title"].lower() for s in sections[1:])
            self.p(f"The rest of the report covers {rest}. [Read it here]({self.url}).", MUTE)
            self.txt += [f"The rest of the report covers {rest}. Read it here: {self.url}", ""]
            if b.get("footer", "").strip():
                self.p(b["footer"], MUTE); self.txt += [self.plain(b["footer"]), ""]
        self.out.append(f'<p style="{MUTE};margin:28px 0 0;padding-top:14px;border-top:1px solid #c8ccd1">'
                        f'research415 &middot; <a href="{self.url}" style="color:#72777d;text-decoration:underline">View this report online</a>'
                        ' &middot; <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#72777d;text-decoration:underline">Unsubscribe</a></p>')
        self.txt += ["--", f"research415. View online: {self.url}", "Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}"]
        doc = ('<!DOCTYPE html><html><head><meta charset="UTF-8">'
               '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
               '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
               f"<title>{html.escape(em.get('subject') or title)}</title></head>"
               '<body style="margin:0;padding:0;background-color:#ffffff">'
               '<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;'
               f'max-width:0;opacity:0;overflow:hidden">{html.escape(preview)}</div>'
               '<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" '
               'style="background-color:#ffffff"><tr><td align="center" style="padding:32px 20px 60px">'
               '<table width="900" cellpadding="0" cellspacing="0" border="0" style="max-width:900px;width:100%">'
               "<tr><td>" + "".join(self.out) + "</td></tr></table></td></tr></table></body></html>")
        return doc, "\n".join(self.txt)


def cmd_email(client: str, slug: str, mode: str | None) -> None:
    brief = load_brief(client, slug)
    if mode is None:
        mode = "summary" if brief.get("kind") == "weekly" else "full"
    if mode not in ("full", "summary"):
        die("--mode must be full or summary")
    doc, txt = Email(brief, client, slug).build(mode)
    d = out_dir(client)
    (d / f"{slug}.email.html").write_text(doc, encoding="utf-8")
    (d / f"{slug}.email.txt").write_text(txt, encoding="utf-8")
    kb = len(doc.encode()) / 1024
    print(f"wrote clients/{client}/reports/{slug}.email.html ({kb:.1f}KB, {mode}) and .email.txt")
    if kb > 100:
        print("ERROR email is over 100KB, Gmail will clip it. Use --mode summary or cut content.")
    elif kb > 55:
        print("warn  email is over 55KB, aim lower")
    checks = {"<style": doc.count("<style"), "class=": doc.count("class="), "target=": doc.count("target=")}
    bad = {k: v for k, v in checks.items() if v}
    if bad:
        print(f"warn  email contains attributes clients strip: {bad}")


# ----------------------------------------------------------------------------- draft

def cmd_draft(client: str, slug: str, create: bool) -> None:
    brief = load_brief(client, slug)
    cfg = client_config(client)
    seg = cfg.get("resend_segment", "none")
    if seg in ("", "none", "None"):
        die(f"{client} has no Resend segment in CLIENT.md (status {cfg.get('status')!r}). Nothing to draft.")
    em = brief.get("email") or {}
    if not em.get("subject"):
        die("brief.email.subject is missing")
    d = out_dir(client)
    hp, tp = d / f"{slug}.email.html", d / f"{slug}.email.txt"
    if not hp.exists() or not tp.exists():
        die(f"build the email first: python3 tools/report.py email {client} {slug}")
    body_html = hp.read_bytes()
    if len(body_html) >= 100_000:
        die(f"{hp.name} is {len(body_html)}b, Gmail clips at about 102KB")
    spec = {
        "name": f"{em['subject']} ({cfg.get('client', client)})",
        "segmentId": seg,
        "from": FROM,
        "replyTo": [cfg.get("reply_to", "matt@415brand.com")],
        "subject": em["subject"],
        "previewText": em.get("preview", ""),
        "html": f"<filled from {hp.name} at send time>",
        "text": f"<filled from {tp.name} at send time>",
    }
    (d / f"{slug}.broadcast.json").write_text(json.dumps(spec, indent=2) + "\n", encoding="utf-8")
    print(f"Name:     {spec['name']}\nSegment:  {seg}\nFrom:     {FROM}\nReply-to: {spec['replyTo'][0]}"
          f"\nSubject:  {spec['subject']}\nPreview:  {spec['previewText'][:110]}"
          f"\nBody:     {hp.relative_to(ROOT)} ({len(body_html)}b, md5 {hashlib.md5(body_html).hexdigest()})")
    if not create:
        print("\nDry run. Nothing created. Re-run with --create to make the Resend draft. A human sends it.")
        return
    key = env_key("RESEND_API_KEY")
    if not key:
        die("RESEND_API_KEY is not set. Put it in .env at the repo root (gitignored) or export it.")
    payload = {"name": spec["name"], "segment_id": seg, "from": FROM, "reply_to": spec["replyTo"],
               "subject": spec["subject"], "preview_text": spec["previewText"],
               "html": body_html.decode("utf-8"), "text": tp.read_text(encoding="utf-8")}
    req = urllib.request.Request("https://api.resend.com/broadcasts", data=json.dumps(payload).encode(),
                                 headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
                                 method="POST")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            created = json.loads(r.read())
    except urllib.error.HTTPError as e:
        die(f"Resend returned {e.code}: {e.read().decode()[:400]}")
    bid = created.get("id")
    if not bid:
        die(f"no broadcast id returned: {created}")
    req = urllib.request.Request(f"https://api.resend.com/broadcasts/{bid}", headers={"Authorization": f"Bearer {key}"})
    with urllib.request.urlopen(req, timeout=60) as r:
        remote = json.loads(r.read())
    same = hashlib.md5((remote.get("html") or "").encode()).hexdigest() == hashlib.md5(body_html).hexdigest()
    spec["broadcastId"] = bid
    spec["status"] = remote.get("status")
    (d / f"{slug}.broadcast.json").write_text(json.dumps(spec, indent=2) + "\n", encoding="utf-8")
    print(f"\nstatus:   {remote.get('status')}  sent_at: {remote.get('sent_at')}")
    print("body:     " + ("IDENTICAL to the file, nothing was reformatted." if same else "DIFFERS. Do not send. Inspect the draft."))
    print(f"preview:  https://resend.com/broadcasts/{bid}")
    if remote.get("status") != "draft":
        print("ERROR status is not draft. Check the Resend dashboard now.")


# ----------------------------------------------------------------------------- main

def main(argv: list[str]) -> int:
    if len(argv) < 2 or argv[1] in ("-h", "--help"):
        print(__doc__)
        return 0
    cmd, args = argv[1], argv[2:]
    opts = {a.split("=", 1)[0]: (a.split("=", 1)[1] if "=" in a else True) for a in args if a.startswith("--")}
    pos = [a for a in args if not a.startswith("--")]

    def opt(name: str, default=None):
        v = opts.get(name, default)
        if v is True and name in opts:  # --date MM-DD-YYYY form
            i = args.index(name)
            return args[i + 1] if i + 1 < len(args) else default
        return v

    if cmd == "new" and len(pos) >= 2:
        cmd_new(pos[0], pos[1], opt("--date"))
    elif cmd == "last" and len(pos) >= 1:
        cmd_last(pos[0], pos[1] if len(pos) > 1 else None)
    elif cmd == "check" and len(pos) == 2:
        return cmd_check(*pos)
    elif cmd == "html" and len(pos) == 2:
        cmd_html(*pos)
    elif cmd == "email" and len(pos) == 2:
        cmd_email(pos[0], pos[1], opt("--mode"))
    elif cmd == "draft" and len(pos) == 2:
        cmd_draft(pos[0], pos[1], "--create" in opts)
    elif cmd == "build" and len(pos) == 2:
        rc = cmd_check(*pos)
        if rc:
            print("fix the errors above before building")
            return rc
        cmd_html(*pos)
        cmd_email(pos[0], pos[1], None)
    else:
        print(__doc__)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
