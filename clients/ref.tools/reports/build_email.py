"""Email-safe copy of the Ref competitor leads brief. All CSS inlined, tables only.
Imports the same lists and prose from build_report.py so the email and the
report cannot drift. Writes <date>.email.html and <date>.email.txt."""
import html, re, importlib.util, pathlib

DATE = "08-29-2026"
HERE = pathlib.Path(__file__).parent
spec = importlib.util.spec_from_file_location("br", str(HERE / "build_report.py"))
br = importlib.util.module_from_spec(spec); spec.loader.exec_module(br)

LINK = "color:#3366cc"
FONT = "font-family:Arial,Helvetica,sans-serif"
CELL = "border:1px solid #c8ccd1;font:13px Arial,sans-serif"
HEAD = CELL + ";background:#f8f9fa;font-weight:bold"
BODY = f"{FONT};font-size:14px;line-height:1.55;color:#202122;margin:0 0 12px"
NOTE = f"{FONT};font-size:13px;line-height:1.5;color:#72777d;margin:0 0 12px"


def inline(s):
    """Give every <a> an inline style, drop target/rel, and bold <b>/<i>."""
    s = re.sub(r'<a\b[^>]*?href="([^"]+)"[^>]*>', lambda m: f'<a href="{m.group(1)}" style="{LINK}">', s)
    s = s.replace("<b>", '<b style="font-weight:bold">').replace("<i>", '<i style="font-style:italic">')
    s = re.sub(r'<span class="note">(.*?)</span>', r'\1', s)
    return s


def cells(widths, headers):
    return "".join(f'<td width="{w}" valign="top" bgcolor="#f8f9fa" style="{HEAD}">{html.escape(h)}</td>'
                   for w, h in zip(widths, headers))


def post_table(rows_, last_header):
    out = ['<table width="100%" cellpadding="7" cellspacing="0" border="0" '
           'style="border-collapse:collapse;border:1px solid #a2a9b1;line-height:1.45;color:#202122;margin:6px 0 16px"><tr>',
           cells(["14%", "8%", "38%", "13%", "27%"], ["Where", "Date", "Post", "Reach", last_header]), "</tr>"]
    for where, date, quote, url, reach, todo in rows_:
        out.append("<tr>")
        out.append(f'<td valign="top" style="{CELL}">{html.escape(where)}</td>')
        out.append(f'<td valign="top" style="{CELL};white-space:nowrap">{html.escape(date)}</td>')
        out.append(f'<td valign="top" style="{CELL}"><a href="{html.escape(url)}" style="{LINK}">{html.escape(quote)}</a></td>')
        out.append(f'<td valign="top" style="{CELL};white-space:nowrap">{html.escape(reach)}</td>')
        out.append(f'<td valign="top" style="{CELL}">{html.escape(todo)}</td>')
        out.append("</tr>")
    out.append("</table>")
    return "".join(out)


def generic_table(widths, headers, body_rows, nowrap=()):
    out = ['<table width="100%" cellpadding="7" cellspacing="0" border="0" '
           'style="border-collapse:collapse;border:1px solid #a2a9b1;line-height:1.45;color:#202122;margin:6px 0 16px"><tr>',
           cells(widths, headers), "</tr>"]
    for r in body_rows:
        out.append("<tr>")
        for i, c in enumerate(r):
            extra = ";white-space:nowrap" if i in nowrap else ""
            out.append(f'<td valign="top" style="{CELL}{extra}">{inline(c)}</td>')
        out.append("</tr>")
    out.append("</table>")
    return "".join(out)


def h1(text):
    return f'<p style="{FONT};font-size:26px;line-height:1.2;font-weight:bold;color:#202122;margin:0 0 4px">{text}</p>'


def sub(text):
    return (f'<p style="{FONT};font-size:13px;color:#72777d;margin:0 0 18px;padding-bottom:10px;'
            f'border-bottom:1px solid #c8ccd1">{text}</p>')


def h2(n, text):
    return (f'<p style="{FONT};font-size:18px;line-height:1.3;font-weight:bold;color:#202122;'
            f'margin:30px 0 8px;padding-bottom:5px;border-bottom:1px solid #c8ccd1">'
            f'<span style="color:#72777d;font-weight:normal">{n}</span> {text}</p>')


def greenbox(inner):
    return ('<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 14px"><tr>'
            '<td width="3" bgcolor="#1baf7a" style="background-color:#1baf7a;font-size:1px;line-height:1px">&nbsp;</td>'
            f'<td style="padding:2px 0 2px 12px;{FONT};font-size:14px;line-height:1.55;color:#202122">'
            f'{inline(inner)}</td></tr></table>')


def greybox(inner):
    return ('<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 14px"><tr>'
            '<td width="3" bgcolor="#c8ccd1" style="background-color:#c8ccd1;font-size:1px;line-height:1px">&nbsp;</td>'
            f'<td style="padding:2px 0 2px 12px;{FONT};font-size:14px;line-height:1.55;color:#444">'
            f'{inline(inner)}</td></tr></table>')


def bullet(inner):
    return ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
            f'<td width="18" valign="top" style="{FONT};font-size:14px;line-height:1.55;color:#72777d">&bull;</td>'
            f'<td style="{FONT};font-size:14px;line-height:1.55;color:#202122;padding-bottom:9px">'
            f'{inline(inner)}</td></tr></table>')


b = []
b.append(h1("Competitor leads brief"))
b.append(sub("For Matt at Ref, August 29, 2026"))
b.append('<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;'
         'border:1px solid #a2a9b1;margin:2px 0 12px"><tr><td bgcolor="#f8f9fa" '
         f'style="background:#f8f9fa;padding:8px 18px 8px 14px;{FONT};font-size:14px;line-height:1.5;color:#202122">'
         '<span style="font-weight:bold">Contents</span><br>'
         '1. People stuck between agents (reply first)<br>'
         '2. Docs and context, the Ref Context front<br>'
         '3. The plan layer, and people arguing your thesis<br>'
         '4. What the competition shipped<br>'
         '5. What happened this week<br>'
         '6. Where this came from'
         '</td></tr></table>')
b.append(greenbox(br.MOVES))

b.append(h2(1, "People stuck between agents"))
b.append(post_table(br.STUCK, "What Matt can do"))

b.append(h2(2, "Docs and context, the Ref Context front"))
b.append(post_table(br.DOCS, "What Matt can do"))

b.append(h2(3, "The plan layer, and people arguing your thesis"))
b.append(post_table(br.PLAN, "What Matt can do"))

b.append(h2(4, "What the competition shipped"))
b.append(generic_table(["9%", "13%", "42%", "36%"], ["Date", "Who", "What (click to open)", "Why it matters"],
                       br.shipped_rows(), nowrap=(0,)))
b.append(greenbox(br.SHIPPED_TAKEAWAY))

b.append(h2(5, "What happened this week"))
for x in br.BULLETS:
    b.append(bullet(x))

b.append(h2(6, "Where this came from"))
b.append(f'<p style="{NOTE}">{inline(br.SOURCES_NOTE)}</p>')
b.append(f'<p style="{NOTE};margin-top:26px;padding-top:12px;border-top:1px solid #c8ccd1">'
         'Sent by 415brand. '
         f'<a href="{{{{{{RESEND_UNSUBSCRIBE_URL}}}}}}" style="{LINK}">Unsubscribe</a>.</p>')

DOC_OPEN = ('<!DOCTYPE html><html><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
            '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
            '<title>Competitor leads brief, Aug 29</title></head>'
            '<body style="margin:0;background-color:#ffffff">')

html_out = (DOC_OPEN + '<div style="background-color:#ffffff;padding:24px 0">'
            '<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
            '<td align="center"><table width="900" cellpadding="0" cellspacing="0" border="0" '
            'style="max-width:900px;width:100%"><tr><td style="padding:0 20px">'
            + "".join(b) +
            '</td></tr></table></td></tr></table></div></body></html>')

(HERE / f"{DATE}.email.html").write_text(html_out)

def strip(s):
    s = re.sub(r'<a\b[^>]*?href="([^"]+)"[^>]*>(.*?)</a>', r'\2 (\1)', s, flags=re.S)
    s = re.sub(r"<[^>]+>", "", s)
    return html.unescape(s).strip()

t = ["COMPETITOR LEADS BRIEF", "For Matt at Ref, August 29, 2026", "", strip(br.MOVES), ""]

def txt_posts(title, items):
    global t
    t.append(title.upper()); t.append("-" * len(title))
    for where, date, quote, url, reach, todo in items:
        t += [f"* {where}, {date} ({reach})", f'  "{quote}"', f"  {url}", f"  Do: {todo}", ""]

txt_posts("1. People stuck between agents", br.STUCK)
txt_posts("2. Docs and context, the Ref Context front", br.DOCS)
txt_posts("3. The plan layer, and people arguing your thesis", br.PLAN)

t += ["4. WHAT THE COMPETITION SHIPPED", "------------------------------"]
for d, who, what, u, why in br.SHIPPED:
    t += [f"* {d}, {who}: {what}", f"  {u}", f"  Why: {why}", ""]
t += [strip(br.SHIPPED_TAKEAWAY), ""]

t += ["5. WHAT HAPPENED THIS WEEK", "--------------------------"]
for x in br.BULLETS:
    t += [f"* {strip(x)}", ""]

t += ["6. WHERE THIS CAME FROM", "-----------------------", strip(br.SOURCES_NOTE), "",
      "---", "Sent by 415brand. Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}"]

(HERE / f"{DATE}.email.txt").write_text("\n".join(t))
print(f"{DATE}.email.html {len(html_out)} bytes ({len(html_out)/1024:.1f} KB)")
print(f"{DATE}.email.txt  {len(chr(10).join(t))} bytes")
