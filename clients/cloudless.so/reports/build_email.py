"""Email-safe copy of the Wispr Flow daily brief. All CSS inlined, tables only.
Imports the same lists and prose from build_report_08_28.py so the email and the
report cannot drift. Writes <date>.email.html and <date>.email.txt."""
import html, re, importlib.util, pathlib

DATE = "08-28-2026"
HERE = pathlib.Path(__file__).parent
spec = importlib.util.spec_from_file_location("br", str(HERE / "build_report_08_28.py"))
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
b.append(h1("Wispr Flow daily brief"))
b.append(sub("For Tim at Cloudless, August 28, 2026"))
b.append('<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;'
         'border:1px solid #a2a9b1;margin:2px 0 12px"><tr><td bgcolor="#f8f9fa" '
         f'style="background:#f8f9fa;padding:8px 18px 8px 14px;{FONT};font-size:14px;line-height:1.5;color:#202122">'
         '<span style="font-weight:bold">Contents</span><br>'
         '1. People complaining about Wispr (reply first)<br>'
         '2. People shopping around or on the fence<br>'
         '3. People happy with Wispr<br>'
         '4. Creators posting about Wispr right now<br>'
         '5. What Wispr admits about your data<br>'
         '6. Willow&#x27;s fake Reddit posts<br>'
         '7. What happened this week<br>'
         '8. Where this came from'
         '</td></tr></table>')
b.append(greenbox(br.MOVES))

b.append(h2(1, "People complaining about Wispr"))
b.append(post_table(br.COMPLAINTS, "What Tim can do"))

b.append(h2(2, "People shopping around or on the fence"))
b.append(post_table(br.SHOPPING, "What Tim can do"))

b.append(h2(3, "People happy with Wispr"))
b.append(post_table(br.FANS, "Why it matters"))

b.append(h2(4, "Creators posting about Wispr right now"))
b.append(f'<p style="{BODY}">{inline(br.CREATORS_INTRO)}</p>')
b.append(generic_table(["18%", "8%", "32%", "13%", "29%"],
                       ["Creator", "Date", "Post", "Reach", "What Tim can do"],
                       [[f"{w}<br>{f_} followers", d, post, reach, todo]
                        for w, f_, d, post, reach, todo in br.tiktok_rows()], nowrap=(1,)))
b.append(greenbox(br.CREATORS_TAKEAWAY))

b.append(h2(5, "What Wispr admits about your data"))
b.append(f'<p style="{BODY}">{inline(br.PRIVACY_INTRO)}</p>')
for lead, quote in br.PRIVACY_QUOTES:
    b.append(greybox(f"<b>{lead}</b><br>{quote}"))
b.append(greenbox(br.PRIVACY_TAKEAWAY))

b.append(h2(6, "Willow's fake Reddit posts"))
b.append(f'<p style="{BODY}">{inline(br.WILLOW_INTRO)}</p>')
for _day in ("Aug 25", "Aug 27"):
    _posts = [(sub, t, u) for (d, sub, t, u) in br.WILLOW if d == _day]
    _links = ", ".join(f'<a href="{html.escape(u)}">{html.escape(sub)}</a>' for sub, t, u in _posts)
    b.append(bullet(f"<b>{_day}, {len(_posts)} posts:</b> {_links}"))
b.append(greenbox(br.WILLOW_TAKEAWAY))

b.append(h2(7, "What happened this week"))
for x in br.BULLETS:
    b.append(bullet(x))

b.append(h2(8, "Where this came from"))
b.append(f'<p style="{NOTE}">{inline(br.SOURCES_NOTE)}</p>')

b.append(f'<p style="{NOTE};margin-top:26px;padding-top:12px;border-top:1px solid #c8ccd1">'
         'Sent by research415 for Cloudless. '
         f'<a href="{{{{{{RESEND_UNSUBSCRIBE_URL}}}}}}" style="{LINK}">Unsubscribe</a>.</p>')

DOC_OPEN = ('<!DOCTYPE html><html><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
            '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
            '<title>Wispr Flow daily brief, Aug 28</title></head>'
            '<body style="margin:0;background-color:#ffffff">')

html_out = (DOC_OPEN + '<div style="background-color:#ffffff;padding:24px 0">'
            '<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
            '<td align="center"><table width="900" cellpadding="0" cellspacing="0" border="0" '
            'style="max-width:900px;width:100%"><tr><td style="padding:0 20px">'
            + "".join(b) +
            '</td></tr></table></td></tr></table></div></body></html>')

(HERE / f"{DATE}.email.html").write_text(html_out)

# ---------- plain text ----------
def strip(s):
    s = re.sub(r'<a\b[^>]*?href="([^"]+)"[^>]*>(.*?)</a>', r'\2 (\1)', s, flags=re.S)
    s = re.sub(r"<[^>]+>", "", s)
    return html.unescape(s).replace(" ", " ").strip()


t = ["WISPR FLOW DAILY BRIEF", "For Tim at Cloudless, August 28, 2026", "",
     strip(br.MOVES), ""]


def txt_posts(title, items, verb):
    t.append(title.upper())
    t.append("-" * len(title))
    for where, date, quote, url, reach, todo in items:
        t.append(f"* {where}, {date} ({reach})")
        t.append(f'  "{quote}"')
        t.append(f"  {url}")
        t.append(f"  {verb}: {todo}")
        t.append("")


txt_posts("1. People complaining about Wispr", br.COMPLAINTS, "Do")
txt_posts("2. People shopping around or on the fence", br.SHOPPING, "Do")
txt_posts("3. People happy with Wispr", br.FANS, "Why")

t += ["4. CREATORS POSTING ABOUT WISPR RIGHT NOW", "----------------------------------------",
      strip(br.CREATORS_INTRO), ""]
for who, f_, d, post, url, reach, todo in br.TIKTOK:
    t += [f"* {who} ({f_} followers), {d} ({reach})", f'  "{post}"', f"  {url}", f"  Do: {todo}"]
t += ["", strip(br.CREATORS_TAKEAWAY), ""]

t += ["5. WHAT WISPR ADMITS ABOUT YOUR DATA", "-----------------------------------", strip(br.PRIVACY_INTRO), ""]
for lead, quote in br.PRIVACY_QUOTES:
    t += [f"* {lead}", f"  {quote}", ""]
t += [strip(br.PRIVACY_TAKEAWAY), ""]

t += ["6. WILLOW'S FAKE REDDIT POSTS", "-----------------------------",
      strip(br.WILLOW_INTRO), ""]
for _day in ("Aug 25", "Aug 27"):
    _posts = [(sr, ti, u) for (d, sr, ti, u) in br.WILLOW if d == _day]
    t.append(f"* {_day}, {len(_posts)} posts:")
    for sr, ti, u in _posts:
        t.append(f"    {sr}: {u}")
t += ["", strip(br.WILLOW_TAKEAWAY), ""]

t += ["7. WHAT HAPPENED THIS WEEK", "--------------------------"]
for x in br.BULLETS:
    t += [f"* {strip(x)}", ""]

t += ["8. WHERE THIS CAME FROM", "-----------------------", strip(br.SOURCES_NOTE), "",
      "---", "Sent by research415 for Cloudless. Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}"]

(HERE / f"{DATE}.email.txt").write_text("\n".join(t))

print(f"{DATE}.email.html {len(html_out)} bytes ({len(html_out)/1024:.1f} KB)")
print(f"{DATE}.email.txt  {len('\n'.join(t))} bytes")
