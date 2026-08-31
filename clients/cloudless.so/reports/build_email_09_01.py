"""Email-safe copy of the Sep 1 Wispr Flow daily brief.

Reads the *rendered* report at /analysis/cloudless/daily-09-01-2026 and rewrites it
with all CSS inlined, so the email cannot drift from the report: same rows, same
prose, same order, same look. Writes daily-09-01-2026.email.html and .email.txt.

Usage: python3 build_email_09_01.py [path-to-saved-page.html]
"""
import html, re, sys, pathlib, urllib.request

DATE = "daily-09-01-2026"
URL = "http://localhost:3000/analysis/cloudless/daily-09-01-2026"
HERE = pathlib.Path(__file__).parent

# Same vocabulary as build_email.py so this email looks like the ones already sent.
LINK = "color:#3366cc"
FONT = "font-family:Arial,Helvetica,sans-serif"
CELL = "border:1px solid #c8ccd1;font:13px Arial,sans-serif"
HEAD = CELL + ";background:#f8f9fa;font-weight:bold"
BODY = f"{FONT};font-size:14px;line-height:1.55;color:#202122;margin:0 0 12px"
NOTE = f"{FONT};font-size:13px;line-height:1.5;color:#72777d;margin:0 0 12px"
TBL  = ('border-collapse:collapse;border:1px solid #a2a9b1;line-height:1.45;'
        'color:#202122;margin:6px 0 16px')


def inline(s):
    """Inline-style every link, drop class/target/rel, bold <b>."""
    s = re.sub(r'<a\b[^>]*?href="([^"]+)"[^>]*>', lambda m: f'<a href="{m.group(1)}" style="{LINK}">', s)
    s = s.replace("<b>", '<b style="font-weight:bold">')
    s = re.sub(r'\sclass="[^"]*"', "", s)
    return s


def page_html():
    src = pathlib.Path(sys.argv[1]).read_text() if len(sys.argv) > 1 else \
        urllib.request.urlopen(URL, timeout=30).read().decode()
    i = src.index('<div class="page">')
    depth, j = 0, i
    while True:                       # walk to the matching </div>
        m = re.compile(r'<div\b|</div>').search(src, j)
        depth += 1 if m.group(0) == "<div" else -1
        j = m.end()
        if depth == 0:
            return src[i + len('<div class="page">'):m.start()]


def h1(t):  return f'<p style="{FONT};font-size:26px;line-height:1.2;font-weight:bold;color:#202122;margin:0 0 4px">{t}</p>'
def sub(t): return (f'<p style="{FONT};font-size:13px;color:#72777d;margin:0 0 18px;padding-bottom:10px;'
                    f'border-bottom:1px solid #c8ccd1">{t}</p>')
def h2(n, t): return (f'<p style="{FONT};font-size:18px;line-height:1.3;font-weight:bold;color:#202122;'
                      f'margin:30px 0 8px;padding-bottom:5px;border-bottom:1px solid #c8ccd1">'
                      f'<span style="color:#72777d;font-weight:normal">{n}</span> {t}</p>')
def h3(t): return f'<p style="{FONT};font-size:15px;font-weight:bold;color:#202122;margin:18px 0 6px">{t}</p>'
def greenbox(inner):
    return ('<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 14px"><tr>'
            '<td width="3" bgcolor="#1baf7a" style="background-color:#1baf7a;font-size:1px;line-height:1px">&nbsp;</td>'
            f'<td style="padding:2px 0 2px 12px;{FONT};font-size:14px;line-height:1.55;color:#202122">'
            f'{inline(inner)}</td></tr></table>')
def bullet(inner):
    return ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
            f'<td width="18" valign="top" style="{FONT};font-size:14px;line-height:1.55;color:#72777d">&bull;</td>'
            f'<td style="{FONT};font-size:14px;line-height:1.55;color:#202122;padding-bottom:9px">'
            f'{inline(inner)}</td></tr></table>')


def convert_table(tbl):
    ths = re.findall(r'<th\b([^>]*)>(.*?)</th>', tbl, re.S)   # \b so <thead> does not match
    out = [f'<table width="100%" cellpadding="7" cellspacing="0" border="0" style="{TBL}"><tr>']
    nowrap = []
    for i, (attrs, txt) in enumerate(ths):
        w = re.search(r'width:([\d.]+%)', attrs)
        if 'class="nw"' in attrs:
            nowrap.append(i)
        wa = f' width="{w.group(1)}"' if w else ""
        out.append(f'<td{wa} valign="top" bgcolor="#f8f9fa" style="{HEAD}">{txt}</td>')
    out.append("</tr>")
    for row in re.findall(r'<tr>(.*?)</tr>', tbl.split("<tbody>", 1)[1], re.S):
        out.append("<tr>")
        for i, (attrs, cell) in enumerate(re.findall(r'<td([^>]*)>(.*?)</td>', row, re.S)):
            extra = ";white-space:nowrap" if i in nowrap or 'class="nw"' in attrs else ""
            out.append(f'<td valign="top" style="{CELL}{extra}">{inline(cell)}</td>')
        out.append("</tr>")
    out.append("</table>")
    return "".join(out)


BLOCK = re.compile(
    r'<h1>(?P<h1>.*?)</h1>'
    r'|<p class="sub">(?P<sub>.*?)</p>'
    r'|<p class="why">(?P<why>.*?)</p>'
    r'|<div class="contents">(?P<contents>.*?)</ol></div>'
    r'|<h2 id="[^"]*"><span class="num">(?P<num>\d+)</span>(?P<h2>.*?)</h2>'
    r'|<h3>(?P<h3>.*?)</h3>'
    r'|<div class="tbl">(?P<tbl>.*?)</div>'
    r'|<ul>(?P<ul>.*?)</ul>', re.S)

src, body, titles = page_html(), [], []
for m in BLOCK.finditer(src):
    if m.group("h1"):        body.append(h1(m.group("h1")))
    elif m.group("sub"):     body.append(sub(m.group("sub")))
    elif m.group("why"):     body.append(greenbox(m.group("why")))
    elif m.group("contents") is not None:
        titles = re.findall(r'<a href="#[^"]*">(.*?)</a>', m.group("contents"))
        rows = "<br>".join(f"{i}. {t}" for i, t in enumerate(titles, 1))
        body.append('<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;'
                    'border:1px solid #a2a9b1;margin:2px 0 12px"><tr><td bgcolor="#f8f9fa" '
                    f'style="background:#f8f9fa;padding:8px 18px 8px 14px;{FONT};font-size:14px;'
                    'line-height:1.5;color:#202122">'
                    f'<span style="font-weight:bold">Contents</span><br>{rows}</td></tr></table>')
    elif m.group("h2"):      body.append(h2(m.group("num"), m.group("h2")))
    elif m.group("h3"):      body.append(h3(m.group("h3")))
    elif m.group("tbl"):     body.append(convert_table(m.group("tbl")))
    elif m.group("ul"):
        for li in re.findall(r'<li>(.*?)</li>', m.group("ul"), re.S):
            body.append(bullet(li))

body.append(f'<p style="{NOTE};margin-top:26px;padding-top:12px;border-top:1px solid #c8ccd1">'
            'Sent by research415 for Cloudless. '
            f'<a href="{{{{{{RESEND_UNSUBSCRIBE_URL}}}}}}" style="{LINK}">Unsubscribe</a>.</p>')

doc = ('<!DOCTYPE html><html><head><meta charset="utf-8">'
       '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
       '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
       '<title>Wispr Flow daily brief, Sep 1</title></head>'
       '<body style="margin:0;background-color:#ffffff">'
       '<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" '
       'style="background-color:#ffffff"><tr><td align="center" style="padding-top:24px;'
       'padding-bottom:24px;padding-left:0;padding-right:0">'
       '<table width="900" cellpadding="0" cellspacing="0" border="0" '
       'style="max-width:900px;width:100%"><tr><td style="padding-left:20px;padding-right:20px">'
       + "".join(body) +
       '</td></tr></table></td></tr></table></body></html>')
(HERE / f"{DATE}.email.html").write_text(doc)

# ---------- plain text ----------
def strip(s):
    s = re.sub(r'<a\b[^>]*?href="([^"]+)"[^>]*>(.*?)</a>', r'\2 (\1)', s, flags=re.S)
    return html.unescape(re.sub(r"<[^>]+>", "", s)).replace(" ", " ").strip()

t, n = ["WISPR FLOW DAILY BRIEF", "For Tim at Cloudless, September 1, 2026", ""], 0
for m in BLOCK.finditer(src):
    if m.group("why"):    t += [strip(m.group("why")), ""]
    elif m.group("h2"):
        n += 1; title = f'{n}. {strip(m.group("h2"))}'
        t += [title.upper(), "-" * len(title)]
    elif m.group("h3"):   t += [strip(m.group("h3")).upper(), ""]
    elif m.group("tbl"):
        hdrs = [strip(x) for x in re.findall(r'<th\b[^>]*>(.*?)</th>', m.group("tbl"), re.S)]
        for row in re.findall(r'<tr>(.*?)</tr>', m.group("tbl").split("<tbody>", 1)[1], re.S):
            cells = re.findall(r'<td[^>]*>(.*?)</td>', row, re.S)
            t.append(f"* {strip(cells[0])}")
            for hdr, cell in zip(hdrs[1:], cells[1:]):
                t.append(f"  {hdr}: {strip(cell)}")
            t.append("")
    elif m.group("ul"):
        for li in re.findall(r'<li>(.*?)</li>', m.group("ul"), re.S):
            t += [f"* {strip(li)}", ""]
t += ["", "Sent by research415 for Cloudless. Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}"]
(HERE / f"{DATE}.email.txt").write_text("\n".join(t))

print(f"html {(HERE / f'{DATE}.email.html').stat().st_size/1024:.1f}KB, "
      f"txt {(HERE / f'{DATE}.email.txt').stat().st_size/1024:.1f}KB, sections: {titles}")
