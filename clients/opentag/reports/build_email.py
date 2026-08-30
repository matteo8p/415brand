"""Email-safe copy of the daily brief. All CSS inlined, tables only.
Reads the same lists as build_report.py so the email and the report cannot drift.
Writes <date>.email.html and <date>.email.txt."""
import html, re, importlib.util, pathlib, sys

spec = importlib.util.spec_from_file_location("br", str(pathlib.Path(__file__).with_name("build_report.py")))
br = importlib.util.module_from_spec(spec); spec.loader.exec_module(br)

DATE = "08-28-2026"
LINK = "color:#3366cc;text-decoration:underline"
CELL = ("padding:7px 9px;border:1px solid #c8ccd1;font-family:Arial,Helvetica,sans-serif;"
        "font-size:13px;line-height:1.45;color:#202122")
HEAD = CELL + ";background-color:#f8f9fa;font-weight:bold"

def inline_links(s):
    """Give every <a> an inline style and strip attributes email clients dislike."""
    s = re.sub(r'<a href="([^"]+)"[^>]*>', lambda m: f'<a href="{m.group(1)}" style="{LINK}">', s)
    return s.replace("<b>", '<b style="font-weight:bold">')

def table(rows):
    out = ['<table width="100%" cellpadding="0" cellspacing="0" border="0" '
           'style="border-collapse:collapse;border:1px solid #a2a9b1;margin:6px 0 16px">',
           '<tr>']
    for h, w in [("Where", "15%"), ("Date", "8%"), ("Post", "39%"), ("Reach", "14%"), ("What to do", "24%")]:
        out.append(f'<td width="{w}" valign="top" bgcolor="#f8f9fa" style="{HEAD}">{h}</td>')
    out.append('</tr>')
    for where, date, quote, url, reach, todo in rows:
        out.append('<tr>')
        out.append(f'<td valign="top" style="{CELL}">{html.escape(where)}</td>')
        out.append(f'<td valign="top" style="{CELL};white-space:nowrap">{html.escape(date)}</td>')
        out.append(f'<td valign="top" style="{CELL}"><a href="{html.escape(url)}" style="{LINK}">{html.escape(quote)}</a></td>')
        out.append(f'<td valign="top" style="{CELL}">{html.escape(reach)}</td>')
        out.append(f'<td valign="top" style="{CELL}">{html.escape(todo)}</td>')
        out.append('</tr>')
    out.append('</table>')
    return "".join(out)

def h2(n, text):
    return (f'<p style="font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;'
            f'font-weight:bold;color:#202122;margin:30px 0 8px;padding-bottom:5px;'
            f'border-bottom:1px solid #c8ccd1"><span style="color:#72777d;font-weight:normal">{n}</span> {text}</p>')

body = []
body.append('<p style="font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.2;'
            'font-weight:bold;color:#202122;margin:0 0 4px">Competitor leads brief</p>')
body.append('<p style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#72777d;'
            'margin:0 0 18px;padding-bottom:10px;border-bottom:1px solid #c8ccd1">'
            'For the OpenTag founders, August 28, 2026</p>')
body.append('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
            '<td width="3" bgcolor="#1baf7a" style="background-color:#1baf7a;font-size:1px;line-height:1px">&nbsp;</td>'
            f'<td style="padding:2px 0 2px 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;'
            f'line-height:1.55;color:#202122">{inline_links(br.MOVES)}</td></tr></table>')

body.append(h2(1, "Paying for Claude Tag and unhappy about the bill"))
body.append(table(br.BILL))
body.append(h2(2, "Asking what to use"))
body.append(table(br.SHOPPING))
body.append(h2(3, "What happened in the category"))
for b in br.BULLETS:
    body.append('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
                '<td width="18" valign="top" style="font-family:Arial,Helvetica,sans-serif;'
                'font-size:14px;line-height:1.55;color:#72777d">&bull;</td>'
                f'<td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;'
                f'color:#202122;padding-bottom:10px">{inline_links(b)}</td></tr></table>')

body.append('<p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;'
            'color:#72777d;margin:28px 0 0;padding-top:14px;border-top:1px solid #c8ccd1">'
            'Compiled Aug 27, 2026. Reach is likes, replies and reposts as X reported them at pull time. '
            'Every row links to the original post.<br><br>'
            'research415 &middot; <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#72777d;'
            'text-decoration:underline">Unsubscribe</a></p>')

doc = ('<!DOCTYPE html><html><head><meta charset="UTF-8">'
       '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
       '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
       '<title>Competitor leads brief</title></head>'
       '<body style="margin:0;padding:0;background-color:#ffffff">'
       '<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" '
       'style="background-color:#ffffff"><tr><td align="center" style="padding:24px 12px 40px">'
       '<table width="700" cellpadding="0" cellspacing="0" border="0" style="max-width:700px;width:100%">'
       '<tr><td>' + "".join(body) + '</td></tr></table></td></tr></table></body></html>')

# ---- plain text ----
def strip(s):
    return html.unescape(re.sub(r"<[^>]+>", "", re.sub(r'<a href="([^"]+)"[^>]*>(.*?)</a>', r"\2 (\1)", s)))

t = ["COMPETITOR LEADS BRIEF", "For the OpenTag founders, August 28, 2026", "",
     strip(br.MOVES), "", "1. PAYING FOR CLAUDE TAG AND UNHAPPY ABOUT THE BILL", ""]
for where, date, quote, url, reach, todo in br.BILL:
    t += [f"{where} | {date} | {reach}", f'"{quote}"', url, f"WHAT TO DO: {todo}", ""]
t += ["2. ASKING WHAT TO USE", ""]
for where, date, quote, url, reach, todo in br.SHOPPING:
    t += [f"{where} | {date} | {reach}", f'"{quote}"', url, f"WHAT TO DO: {todo}", ""]
t += ["3. WHAT HAPPENED IN THE CATEGORY", ""]
for b in br.BULLETS:
    t += ["- " + strip(b), ""]
t += ["--", "Compiled Aug 27, 2026. Every row links to the original post.",
      "research415. Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}"]
text = "\n".join(t)

pathlib.Path(f"{DATE}.email.html").write_text(doc)
pathlib.Path(f"{DATE}.email.txt").write_text(text)
print(f"html {len(doc)} bytes ({len(doc)/1024:.1f}KB), text {len(text)} bytes")
print("style tags:", doc.count("<style"), "| class attrs:", doc.count('class='), "| divs:", doc.count("<div"))
