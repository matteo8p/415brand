"""Turn the rendered weekly brief into an email-safe HTML + text pair.

Input is the fully expanded report HTML (all <details> open, charts already
swapped for their aria descriptions). Gmail and Outlook strip <style>, so every
rule here is inlined. Run after capturing /tmp/report-expanded.html.
"""
import re, html, sys, pathlib

SRC = pathlib.Path("/tmp/report-expanded.html")
OUT = pathlib.Path(__file__).parent
s = SRC.read_text(encoding="utf-8")

# 1. drop the logo sprite: it is a third of the bytes and email clients ignore it
s = re.sub(r'<svg width="0" height="0".*?</svg>', '', s, flags=re.S)

# 2. figures become their aria description, which carries every number in the chart
s = re.sub(r'<p data-chart="1">\s*</p>', '', s)
s = re.sub(
    r'<figure aria-label="([^"]*)"[^>]*>.*?</figure>',
    lambda m: '<p style="margin:6px 0 14px;font-size:13px;color:#54595d">%s</p>' % m.group(1),
    s, flags=re.S)

# 3. source pills become small plain links
s = re.sub(
    r'<a class="src" href="([^"]+)"[^>]*>(?:<svg.*?</svg>)?([^<]*)</a>',
    lambda m: '<a href="%s" style="color:#72777d;text-decoration:none;font-size:12px">[%s]</a> '
              % (m.group(1), m.group(2).strip()),
    s, flags=re.S)

# 4. no collapsibles in email: promote the summary to a heading, keep the body
s = s.replace('<span class="tog"></span>', '')
s = re.sub(r'<details[^>]*>\s*<summary>(.*?)</summary>\s*<div class="body">(.*?)</div>\s*</details>',
           lambda m: '<p style="margin:14px 0 4px;font-size:15px;line-height:1.45">%s</p>%s'
                     % (m.group(1).strip(), m.group(2)),
           s, flags=re.S)

# 4b. in-page anchors do not navigate in webmail: drop the evidence jump links
s = re.sub(r'\s*<a class="ev" href="#[^"]*">.*?</a>', '', s, flags=re.S)
s = re.sub(r'\s*<a href="#[^"]*"[^>]*>evidence[^<]*</a>', '', s)

# 4c. keep short date cells on one line (the nw class is stripped later)
s = s.replace('<td class="nw">', '<td class="nw" style="white-space:nowrap">')
s = s.replace('<th class="nw"', '<th class="nw" style="white-space:nowrap"')

# 5. contents box as plain numbered text: in-page anchors do not navigate in webmail
def contents(m):
    items = re.findall(r'<li><a href="#[^"]*">([^<]+)</a></li>', m.group(0))
    body = '<br>'.join('%d. %s' % (i + 1, t) for i, t in enumerate(items))
    return ('<div style="border:1px solid #c8ccd1;background:#f8f9fa;padding:10px 12px;margin:16px 0;'
            'font-size:13.5px;line-height:1.6"><b>Contents</b><br>%s</div>' % body)
s = re.sub(r'<div class="contents">.*?</div>\s*</div>', contents, s, flags=re.S)

# 6. email-safe tables
s = s.replace('<div class="tbl">', '').replace('<table class="data scorecard">', '<table class="data">')
s = re.sub(r'<table class="data"[^>]*>',
           '<table width="100%" cellpadding="6" cellspacing="0" border="0" '
           'style="border-collapse:collapse;font-size:13px;line-height:1.4;margin:10px 0 18px">', s)
s = re.sub(r'<th([^>]*)>',
           lambda m: '<th%s valign="top" align="left" style="border:1px solid #c8ccd1;'
                     'background:#f8f9fa;font-weight:600;padding:6px 9px%s">'
           % (m.group(1), ';white-space:nowrap' if 'nowrap' in m.group(1) else ''), s)
s = re.sub(r'<td([^>]*)>',
           lambda m: '<td%s valign="top" style="border:1px solid #c8ccd1;padding:6px 9px%s">'
           % (m.group(1), ';white-space:nowrap' if 'nowrap' in m.group(1) else ''), s)

# 7. block styles, inlined
STYLE = {
    r'<h2([^>]*)>': '<h2%s style="font-size:19px;font-weight:600;margin:26px 0 8px;padding-bottom:4px;'
                    'border-bottom:1px solid #c8ccd1">',
    r'<h3([^>]*)>': '<h3%s style="font-size:16px;font-weight:600;margin:20px 0 6px">',
    r'<p class="why"([^>]*)>': '<p%s style="margin:8px 0;padding:8px 12px;border-left:3px solid #176f4e;'
                               'background:#f6fbf8;font-size:14px;line-height:1.55">',
    r'<p class="note"([^>]*)>': '<p%s style="margin:8px 0;color:#54595d;font-size:13.5px;line-height:1.55">',
    r'<div class="cap"([^>]*)>': '<div%s style="font-weight:600;font-size:14px;margin-top:10px">',
    r'<div class="s"([^>]*)>': '<div%s style="color:#54595d;font-size:13px;margin-bottom:4px">',
}
for pat, rep in STYLE.items():
    s = re.sub(pat, lambda m, r=rep: r % m.group(1), s)
s = re.sub(r'<p>', '<p style="margin:8px 0;font-size:14px;line-height:1.6">', s)
s = re.sub(r'<li>', '<li style="margin:4px 0;font-size:14px;line-height:1.6">', s)
s = re.sub(r'<ul>', '<ul style="margin:8px 0 8px 18px;padding:0">', s)
s = re.sub(r'<ol([^>]*)>', lambda m: '<ol%s style="margin:8px 0 8px 20px;padding:0">' % m.group(1), s)
s = re.sub(r'<a href="(http[^"]+)"(?![^>]*style)', r'<a href="\1" style="color:#3366cc;text-decoration:none"', s)

# 8. strip attributes email clients do not want
s = re.sub(r'\s(?:class|target|rel|aria-label|aria-hidden|title|open|id)="[^"]*"', '', s)
s = re.sub(r'\sopen(?=[\s>])', '', s)
s = re.sub(r'<div>\s*</div>', '', s)

body = s.strip()
head = ('<div style="max-width:760px;margin:0 auto;padding:18px 20px;color:#202122;background:#ffffff;'
        'font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif">')
foot = ('<p style="margin:26px 0 0;padding-top:12px;border-top:1px solid #c8ccd1;color:#72777d;font-size:12px">'
        'research415 &middot; <a href="mailto:matt@415brand.com" style="color:#3366cc;text-decoration:none">'
        'matt@415brand.com</a><br>Competitor names and prices come from public sources and may have changed. '
        'Trademarks belong to their owners. research415 is not affiliated with any company it analyzes.<br>'
        '<a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#72777d;text-decoration:underline">Unsubscribe</a>'
        '</p></div>')
html_out = head + body + foot
(OUT / "8-31-2026.email.html").write_text(html_out, encoding="utf-8")

# plain text
t = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html_out, flags=re.S)
t = re.sub(r'</(h2|h3|p|tr|div|li)>', '\n', t)
t = re.sub(r'</t[dh]>', '  |  ', t)
t = re.sub(r'<[^>]+>', '', t)
t = html.unescape(t)
t = re.sub(r'[ \t]{2,}(?![|])', ' ', t)
t = re.sub(r'\n{3,}', '\n\n', t).strip()
(OUT / "8-31-2026.email.txt").write_text(t, encoding="utf-8")

print("html %.1f KB   text %.1f KB   words %d"
      % (len(html_out.encode()) / 1024, len(t.encode()) / 1024, len(t.split())))
