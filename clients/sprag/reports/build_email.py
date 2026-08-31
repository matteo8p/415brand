"""Email-safe copy of the Sprag weekly brief.

Reads the rendered report HTML so the email and the report cannot drift, then
rewrites it as table-only, fully-inlined HTML. Charts cannot survive an email
client, so each figure becomes its caption plus the numbers behind it.

Writes 8-31-2026.email.html and 8-31-2026.email.txt.
"""
import html
import re
import pathlib

HERE = pathlib.Path(__file__).parent
SRC = HERE / "8-31-2026.html"
OUT_HTML = HERE / "8-31-2026.email.html"
OUT_TXT = HERE / "8-31-2026.email.txt"
REPORT_URL = "https://415brand.com/analysis/sprag/weekly-08-31-2026"

FONT = "Arial,sans-serif"
LINK = "color:#3366cc;text-decoration:underline"
BODY = f"font-family:{FONT};font-size:14px;line-height:1.55;color:#202122"
MUTED = f"font-family:{FONT};font-size:12.5px;line-height:1.5;color:#72777d"
CELL = "border:1px solid #c8ccd1"
TBL_FONT = f"font-family:{FONT};font-size:13px;line-height:1.45;color:#202122"
HEAD = CELL + ";background-color:#f8f9fa;font-weight:bold"


def strip_tags(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", s)).strip()


def inline_inner(s):
    """Inline-style the tags that survive inside a paragraph."""
    s = re.sub(r'<a class="src"[^>]*href="([^"]+)"[^>]*>', lambda m: f'<a href="{m.group(1)}" style="{LINK}">', s)
    s = re.sub(r'<a class="ev"[^>]*>.*?</a>', "", s)
    s = re.sub(r'<a href="#[^"]*"[^>]*>(.*?)</a>', r"\1", s)
    s = re.sub(r'<a href="([^"]+)"[^>]*>', lambda m: f'<a href="{m.group(1)}" style="{LINK}">', s)
    s = s.replace("<b>", '<b style="font-weight:bold">')
    s = s.replace("<code>", '<code style="font-family:Courier New,monospace;font-size:12.5px">')
    s = re.sub(r"<!--.*?-->", "", s)
    return s


def p(text, style=BODY, space="0 0 12px"):
    return f'<p style="{style};margin:{space}">{text}</p>'


def why_block(inner):
    return (
        '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 14px"><tr>'
        '<td width="3" bgcolor="#1baf7a" style="background-color:#1baf7a;font-size:1px;line-height:1px">&nbsp;</td>'
        f'<td style="padding:2px 0 2px 12px;{BODY}">{inner}</td></tr></table>'
    )


def convert_table(block):
    heads = re.findall(r"<th(?:\s[^>]*)?>(.*?)</th>", block, re.S)
    rows = re.findall(r"<tr>(?!.*?<th)(.*?)</tr>", block, re.S)
    out = [
        '<table width="100%" cellpadding="7" cellspacing="0" border="0" '
        f'style="border-collapse:collapse;border:1px solid #a2a9b1;margin:6px 0 18px;{TBL_FONT}">'
    ]
    widths = re.findall(r'<th style="width:([^"]+)"[^>]*>|<th>', block)
    out.append("<tr>")
    for i, h in enumerate(heads):
        w = f' width="{widths[i]}"' if i < len(widths) and widths[i] else ""
        out.append(f'<td{w} valign="top" bgcolor="#f8f9fa" style="{HEAD}">{inline_inner(h)}</td>')
    out.append("</tr>")
    for r in rows:
        cells = re.findall(r"<td[^>]*>(.*?)</td>", r, re.S)
        if not cells:
            continue
        out.append("<tr>")
        for c in cells:
            out.append(f'<td valign="top" style="{CELL}">{inline_inner(c)}</td>')
        out.append("</tr>")
    out.append("</table>")
    return "".join(out)


def convert_fig(block):
    """A chart cannot render in email. Keep the caption and the numbers."""
    parts = []
    for panel in re.findall(r'<div class="cap">(.*?)</div>(?:<div class="s">(.*?)</div>)?.*?aria-label="([^"]*)"', block, re.S):
        cap, sub, aria = panel
        line = f'<b style="font-weight:bold">{strip_tags(cap)}.</b> {html.escape(aria)}'
        if sub:
            line += f" {strip_tags(sub)}"
        parts.append(p(line, MUTED, "0 0 10px"))
    return "".join(parts)


def build():
    raw = SRC.read_text(encoding="utf-8")
    b = raw[raw.index("<body>"):]
    b = re.sub(r"<svg.*?</svg>", "", b, flags=re.S)
    b = re.sub(r'<div class="contents">.*?</div>\s*(?=<h2)', "", b, flags=re.S)

    out = []
    out.append(p("Deepgram weekly brief &amp; analysis", f"font-family:{FONT};font-size:26px;line-height:1.2;font-weight:bold;color:#202122", "0 0 4px"))
    out.append(p("For Sprag, August 31, 2026", MUTED + ";padding-bottom:10px;border-bottom:1px solid #c8ccd1", "0 0 18px"))

    # Walk the document in order, converting each block we recognise.
    pattern = re.compile(
        r'(?P<h2><h2 id="[^"]*"><span class="num">(?P<num>\d+)</span>(?P<h2t>.*?)</h2>)'
        r'|(?P<h3><h3[^>]*>(?P<h3t>.*?)</h3>)'
        r'|(?P<fig><div class="fig">.*?</div></div></div>)'
        r'|(?P<tbl><div class="tbl"><table class="data">.*?</table></div>)'
        r'|(?P<det><details><summary><b>(?P<claim>.*?)</b>.*?</summary><div class="body">(?P<dbody>.*?)</div></details>)'
        r'|(?P<note><p class="note">(?P<notet>.*?)</p>)'
        r'|(?P<why><p class="why">(?P<whyt>.*?)</p>)'
        r'|(?P<par><p>(?P<part>.*?)</p>)'
        r'|(?P<links><ul class="plain">(?P<linkst>.*?)</ul>)',
        re.S,
    )

    def emit(m, depth=0):
        g = m.groupdict()
        if g["h2"]:
            out.append(p(f'<span style="color:#72777d;font-weight:normal">{g["num"]}</span> {strip_tags(g["h2t"])}',
                         f"font-family:{FONT};font-size:19px;line-height:1.3;font-weight:bold;color:#202122;padding-bottom:5px;border-bottom:1px solid #c8ccd1", "32px 0 10px"))
        elif g["h3"]:
            out.append(p(strip_tags(g["h3t"]), f"font-family:{FONT};font-size:15.5px;line-height:1.35;font-weight:bold;color:#202122", "20px 0 8px"))
        elif g["fig"]:
            out.append(convert_fig(g["fig"]))
        elif g["tbl"]:
            out.append(convert_table(g["tbl"]))
        elif g["det"]:
            out.append(p(f'<b style="font-weight:bold">{inline_inner(g["claim"])}</b>', BODY, "14px 0 6px"))
            for sub in pattern.finditer(g["dbody"]):
                emit(sub, depth + 1)
        elif g["note"]:
            out.append(p(inline_inner(g["notet"]), MUTED, "0 0 12px"))
        elif g["why"]:
            out.append(why_block(inline_inner(g["whyt"])))
        elif g["par"]:
            out.append(p(inline_inner(g["part"])))
        elif g["links"]:
            for li in re.findall(r"<li>(.*?)</li>", g["linkst"], re.S):
                out.append(p("&bull;&nbsp; " + inline_inner(li), MUTED, "0 0 6px"))

    COLLAPSED_NOTE = "Everything below is collapsed"
    for m in pattern.finditer(b):
        if m.group("note") and COLLAPSED_NOTE in m.group("notet"):
            continue  # web-only affordance, meaningless in an email
        emit(m)

    out.append(p(
        f'Full report with charts: <a href="{REPORT_URL}" style="{LINK}">{REPORT_URL}</a><br><br>'
        'research415 &middot; <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#72777d;text-decoration:underline">unsubscribe</a>',
        MUTED + ";padding-top:14px;border-top:1px solid #c8ccd1", "28px 0 0"))

    body_html = "\n".join(out)
    doc = (
        '<!DOCTYPE html>\n<html><head><meta charset="UTF-8">'
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
        "<title>Deepgram weekly brief for Sprag, August 31, 2026</title></head>"
        '<body style="margin:0;padding:0;background-color:#ffffff">'
        '<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color:#ffffff"><tr>'
        '<td align="center" style="padding:24px 12px">'
        '<table width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px">'
        f'<tr><td align="left">{body_html}</td></tr></table>'
        "</td></tr></table></body></html>\n"
    )
    OUT_HTML.write_text(doc, encoding="utf-8")

    txt = re.sub(r"<br\s*/?>", "\n", body_html)
    txt = re.sub(r"</t[dh]>\s*<t[dh][^>]*>", "  |  ", txt)   # cell separator
    txt = re.sub(r"</tr>", "\n", txt)                        # one row per line
    txt = re.sub(r"</p>|</td></tr></table>", "\n\n", txt)
    txt = html.unescape(re.sub(r"<[^>]+>", "", txt))
    txt = re.sub(r"\n{3,}", "\n\n", txt).strip()
    OUT_TXT.write_text(txt + "\n", encoding="utf-8")
    print(f"html {len(doc):,} bytes -> {OUT_HTML.name}")
    print(f"text {len(txt.split()):,} words -> {OUT_TXT.name}")


if __name__ == "__main__":
    build()
