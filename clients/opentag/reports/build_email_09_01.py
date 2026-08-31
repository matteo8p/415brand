"""Email-safe copy of the Sept 1 daily brief.

Reads the same lists as build_report_09_01.py so the email and the report cannot
drift. Every CSS value here is copied from the .analysis stylesheet so the email
renders identically to the page: same font stack, sizes, greys, rules and green
callout bar. Tables only, all styles inline, no <style> block, no class attrs.

Writes 09-01-2026.email.html and 09-01-2026.email.txt.
"""
import html, re, importlib.util, pathlib

spec = importlib.util.spec_from_file_location("br", str(pathlib.Path(__file__).with_name("build_report_09_01.py")))
br = importlib.util.module_from_spec(spec); spec.loader.exec_module(br)

DATE = "09-01-2026"
URL = "https://415brand.com/analysis/opentag/daily-09-01-2026"
SUBJECT = "Claude Tag daily brief, Sep 1"
PREVIEW = "3 unanswered Claude Tag bills, 4 people asking what to use, 5 ads to copy."

# --- values lifted straight from the .analysis stylesheet ---
# Single quotes around Segoe UI on purpose: double quotes would close the style="" attribute.
FONT = ("font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif")
LINK = "color:#3366cc;text-decoration:none"
BODY = f"{FONT};font-size:15.5px;line-height:1.6;color:#202122"
MUTE = f"{FONT};font-size:13.5px;line-height:1.6;color:#72777d"
CELL = f"padding:6px 9px;border:1px solid #c8ccd1;{FONT};font-size:13.5px;line-height:1.4;color:#202122"
HEAD = CELL + ";background-color:#f8f9fa;font-weight:bold"


def inline_links(s):
    """Give every <a> and <b> an inline style, drop attributes email clients strip."""
    s = re.sub(r'<a href="([^"]+)"[^>]*>', lambda m: f'<a href="{m.group(1)}" style="{LINK}">', s)
    return s.replace("<b>", '<b style="font-weight:600">')


def why(inner_html):
    """The green .why callout: 3px #1baf7a rule, bold lead-in in #176f4e."""
    inner = inline_links(inner_html).replace('<b style="font-weight:600">',
                                             '<b style="font-weight:600;color:#176f4e">')
    return ('<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 10px"><tr>'
            '<td width="3" bgcolor="#1baf7a" style="background-color:#1baf7a;font-size:1px;line-height:1px">&nbsp;</td>'
            f'<td style="padding:2px 0 2px 12px;{BODY}">{inner}</td></tr></table>')


def data_table(headers, rows):
    o = ['<table width="100%" cellpadding="0" cellspacing="0" border="0" '
         'style="border-collapse:collapse;border:1px solid #a2a9b1;margin:8px 0 14px"><tr>']
    for h in headers:
        w = f' width="{h["w"]}"' if h.get("w") else ""
        nowrap = ";white-space:nowrap" if h.get("nw") else ""
        o.append(f'<td{w} valign="top" bgcolor="#f8f9fa" style="{HEAD}{nowrap}">{html.escape(h["text"])}</td>')
    o.append("</tr>")
    for r in rows:
        o.append("<tr>")
        for i, c in enumerate(r):
            nowrap = ";white-space:nowrap" if headers[i].get("nw") else ""
            o.append(f'<td valign="top" style="{CELL}{nowrap}">{c}</td>')
        o.append("</tr>")
    o.append("</table>")
    return "".join(o)


POST_HEADERS = [{"text": "Where", "w": "12%"}, {"text": "Date", "w": "7%", "nw": True},
                {"text": "Post"}, {"text": "Reach", "w": "12%"}, {"text": "What to do", "w": "26%"}]
AD_HEADERS = [{"text": "The example", "w": "16%"}, {"text": "Why we know it works", "w": "16%"},
              {"text": "The hook, word for word"}, {"text": "What to brief", "w": "25%"}]


def post_rows(entries):
    out = []
    for where, date, quote, url, reach, todo in entries:
        out.append([html.escape(where), html.escape(date),
                    f'<a href="{html.escape(url)}" style="{LINK}">{html.escape(quote)}</a>',
                    html.escape(reach), html.escape(todo)])
    return out


def ad_rows(entries):
    out = []
    for name, url, evidence, hook, brief in entries:
        out.append([f'<a href="{html.escape(url)}" style="{LINK}">{html.escape(name)}</a>',
                    html.escape(evidence), html.escape(hook), html.escape(brief)])
    return out


def h2(n, text):
    return (f'<p style="{FONT};font-size:21px;line-height:1.3;font-weight:600;color:#202122;'
            f'margin:36px 0 12px;padding-bottom:5px;border-bottom:1px solid #c8ccd1">'
            f'<span style="color:#72777d;font-weight:500">{n}</span>&nbsp;&nbsp;{html.escape(text)}</p>')


def bullet(inner_html):
    return ('<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
            f'<td width="22" valign="top" style="{BODY};color:#72777d;padding-bottom:9px">&bull;</td>'
            f'<td valign="top" style="{BODY};padding-bottom:9px">{inline_links(inner_html)}</td>'
            "</tr></table>")


body = []
body.append(f'<p style="{FONT};font-size:30px;line-height:1.2;font-weight:600;color:#202122;'
            'letter-spacing:-0.01em;margin:0 0 4px">Claude Tag daily brief</p>')
body.append(f'<p style="{MUTE};margin:0 0 18px;padding-bottom:10px;border-bottom:1px solid #c8ccd1">'
            'For the OpenTag founders, September 1, 2026</p>')
body.append(f'<p style="{MUTE};margin:0 0 10px">Some email apps cut off long messages. '
            f'<a href="{URL}" style="{LINK}">Read the full report in your browser</a>.</p>')

# contents box
items = "".join(f'<tr><td valign="top" width="18" style="{FONT};font-size:14px;line-height:1.5;color:#202122">'
                f'{i}.</td><td style="{FONT};font-size:14px;line-height:1.5;color:#202122">{html.escape(t)}</td></tr>'
                for i, t in enumerate(br.TITLES, 1))
body.append('<table cellpadding="0" cellspacing="0" border="0" bgcolor="#f8f9fa" '
            'style="background-color:#f8f9fa;border:1px solid #a2a9b1;margin:2px 0 8px"><tr>'
            '<td style="padding:8px 18px 8px 14px">'
            f'<p style="{FONT};font-size:14px;font-weight:600;color:#202122;margin:0 0 2px">Contents</p>'
            f'<table cellpadding="0" cellspacing="0" border="0">{items}</table>'
            "</td></tr></table>")

body.append(why(br.MOVES))

body.append(h2(1, br.TITLES[0]))
body.append(data_table(POST_HEADERS, post_rows(br.BILL)))
body.append(why(br.BILL_WHY))

body.append(h2(2, br.TITLES[1]))
body.append(data_table(POST_HEADERS, post_rows(br.SHOPPING)))

body.append(h2(3, br.TITLES[2]))
body.append(data_table(AD_HEADERS, ad_rows(br.ADS)))
body.append(why(br.ADS_WHY))

body.append(h2(4, br.TITLES[3]))
for b in br.BULLETS:
    body.append(bullet(b))

body.append(f'<p style="{FONT};font-size:12.5px;line-height:1.5;color:#72777d;margin:28px 0 0;'
            'padding-top:14px;border-top:1px solid #c8ccd1">'
            f'research415 &middot; <a href="{URL}" style="color:#72777d;text-decoration:underline">'
            "View this report online</a> &middot; "
            '<a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#72777d;text-decoration:underline">'
            "Unsubscribe</a></p>")

doc = ('<!DOCTYPE html><html><head><meta charset="UTF-8">'
       '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
       '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
       f"<title>{SUBJECT}</title></head>"
       '<body style="margin:0;padding:0;background-color:#ffffff">'
       '<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;'
       f'max-width:0;opacity:0;overflow:hidden">{html.escape(PREVIEW)}</div>'
       '<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" '
       'style="background-color:#ffffff"><tr><td align="center" style="padding:40px 24px 80px">'
       '<table width="900" cellpadding="0" cellspacing="0" border="0" style="max-width:900px;width:100%">'
       "<tr><td>" + "".join(body) + "</td></tr></table></td></tr></table></body></html>")


# ---- plain text ----
def strip(s):
    s = re.sub(r'<a href="([^"]+)"[^>]*>(.*?)</a>', r"\2 (\1)", s)
    return html.unescape(re.sub(r"<[^>]+>", "", s))


t = ["CLAUDE TAG DAILY BRIEF", "For the OpenTag founders, September 1, 2026", "",
     strip(br.MOVES), "", f"Full report: {URL}", "",
     "1. " + br.TITLES[0].upper(), ""]
for where, date, quote, url, reach, todo in br.BILL:
    t += [f"{where} | {date} | {reach}", f'"{quote}"', url, f"WHAT TO DO: {todo}", ""]
t += [strip(br.BILL_WHY), "", "2. " + br.TITLES[1].upper(), ""]
for where, date, quote, url, reach, todo in br.SHOPPING:
    t += [f"{where} | {date} | {reach}", f'"{quote}"', url, f"WHAT TO DO: {todo}", ""]
t += ["3. " + br.TITLES[2].upper(), ""]
for name, url, evidence, hook, brief in br.ADS:
    t += [f"{name}", url, f"WHY IT WORKS: {evidence}", f"HOOK: {hook}", f"BRIEF: {brief}", ""]
t += [strip(br.ADS_WHY), "", "4. " + br.TITLES[3].upper(), ""]
for b in br.BULLETS:
    t += ["- " + strip(b), ""]
t += ["--", f"research415. View online: {URL}",
      "Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}"]
text = "\n".join(t)

pathlib.Path(f"{DATE}.email.html").write_text(doc, encoding="utf-8")
pathlib.Path(f"{DATE}.email.txt").write_text(text, encoding="utf-8")
print(f"html {len(doc)} bytes ({len(doc)/1024:.1f}KB), text {len(text)} bytes")
print("style tags:", doc.count("<style"), "| class attrs:", doc.count("class="),
      "| target attrs:", doc.count("target="), "| divs:", doc.count("<div"))
print("subject:", SUBJECT)
print("preview:", PREVIEW)
