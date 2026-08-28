"""Compact, phone-first email version of the daily brief.

Why this exists: the wide-table email (build_email.py) renders 5-column tables that
are unreadable on a phone and comes out around 44KB, which is too big to hand into
the Resend connector reliably. This stacks each lead into one block instead. Same
content, same links, roughly a third of the bytes.

Imports its data from build_report_08_28.py so it cannot drift from the report.
Writes <date>.email.compact.html and reuses the existing .email.txt for plain text.
"""
import html, re, importlib.util, pathlib

DATE = "08-28-2026"
HERE = pathlib.Path(__file__).parent
spec = importlib.util.spec_from_file_location("br", str(HERE / "build_report_08_28.py"))
br = importlib.util.module_from_spec(spec); spec.loader.exec_module(br)

A = "color:#3366cc"
F = "font-family:Arial,Helvetica,sans-serif"
P = "margin:0 0 13px"
MUTE = "margin:0 0 13px;font-size:13px;color:#72777d"
H2 = ("font-size:17px;font-weight:bold;margin:26px 0 10px;padding-bottom:5px;"
      "border-bottom:1px solid #c8ccd1")
META = "font-size:13px;color:#72777d"


def il(s):
    """Inline-style every link, strip attributes email clients dislike."""
    s = re.sub(r'<a\b[^>]*?href="([^"]+)"[^>]*>', lambda m: f'<a href="{m.group(1)}" style="{A}">', s)
    return s.replace("<b>", "<b>").replace('<span class="note">', "<span>")


def rule(inner, color="#c8ccd1"):
    """A block with a coloured left rule. Font inherits from the wrapper cell."""
    return f'<p style="margin:0 0 13px;border-left:3px solid {color};padding-left:11px">{il(inner)}</p>' 


def lead(where, date, quote, url, reach, todo):
    """One lead as a single stacked block."""
    return rule(
        f'<b>{html.escape(where)}</b> <span style="{META}">{html.escape(date)} &middot; {html.escape(reach)}</span><br>'
        f'<a href="{html.escape(url)}">{html.escape(quote)}</a><br>'
        f'<span style="color:#176f4e"><b>Do:</b></span> {html.escape(todo)}')


def creator(who, followers, date, quote, url, reach, todo):
    return rule(
        f'<b>{html.escape(who)}</b> <span style="{META}">{html.escape(followers)} followers &middot; '
        f'{html.escape(date)} &middot; {html.escape(reach)}</span><br>'
        f'<a href="{html.escape(url)}">{html.escape(quote)}</a><br>'
        f'<span style="color:#176f4e"><b>Do:</b></span> {html.escape(todo)}')


def h2(n, text):
    return f'<p style="{H2}"><span style="color:#72777d;font-weight:normal">{n}</span> {text}</p>'


b = [f'<p style="font-size:24px;line-height:1.2;font-weight:bold;margin:0 0 4px">'
     "Wispr Flow daily brief</p>",
     f'<p style="font-size:13px;color:#72777d;margin:0 0 20px;padding-bottom:10px;'
     'border-bottom:1px solid #c8ccd1">For Tim at Cloudless, August 28, 2026</p>',
     rule(br.MOVES, "#1baf7a")]

b.append(h2(1, "People complaining about Wispr"))
for row in br.COMPLAINTS:
    b.append(lead(*row))

b.append(h2(2, "People shopping around or on the fence"))
for row in br.SHOPPING:
    b.append(lead(*row))

b.append(h2(3, "People happy with Wispr"))
for where, date, quote, url, reach, why in br.FANS:
    b.append(rule(
        f'<b>{html.escape(where)}</b> <span style="{META}">{html.escape(date)} &middot; {html.escape(reach)}</span><br>'
        f'<a href="{html.escape(url)}">{html.escape(quote)}</a><br>'
        f'<span style="color:#176f4e"><b>Why:</b></span> {html.escape(why)}'))

b.append(h2(4, "Creators posting about Wispr right now"))
b.append(f'<p style="{P}">{il(br.CREATORS_INTRO)}</p>')
for row in br.TIKTOK:
    b.append(creator(*row))
b.append(rule(br.CREATORS_TAKEAWAY, "#1baf7a"))

b.append(h2(5, "What Wispr admits about your data"))
b.append(f'<p style="{P}">{il(br.PRIVACY_INTRO)}</p>')
for head, quote in br.PRIVACY_QUOTES:
    b.append(rule(f"<b>{head}</b><br>{quote}"))
b.append(rule(br.PRIVACY_TAKEAWAY, "#1baf7a"))

b.append(h2(6, "Willow's fake Reddit posts"))
b.append(f'<p style="{P}">{il(br.WILLOW_INTRO)}</p>')
for day in ("Aug 25", "Aug 27"):
    posts = [(sub, t, u) for (d, sub, t, u) in br.WILLOW if d == day]
    links = ", ".join(f'<a href="{html.escape(u)}" style="{A}">{html.escape(sub)}</a>' for sub, t, u in posts)
    b.append(f'<p style="{P}"><b>{day}, {len(posts)} posts:</b> {links}</p>')
b.append(rule(br.WILLOW_TAKEAWAY, "#1baf7a"))

b.append(h2(7, "What happened this week"))
for x in br.BULLETS:
    b.append(f'<p style="{P}">&bull; {il(x)}</p>')

b.append(h2(8, "Where this came from"))
b.append(f'<p style="{MUTE}">{il(br.SOURCES_NOTE)}</p>')
b.append(f'<p style="{MUTE};margin-top:22px;padding-top:12px;border-top:1px solid #c8ccd1">'
         "Sent by 415brand for Cloudless. "
         f'<a href="{{{{{{RESEND_UNSUBSCRIBE_URL}}}}}}" style="{A}">Unsubscribe</a>.</p>')

doc = ('<!DOCTYPE html><html><head><meta charset="utf-8">'
       '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
       '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
       "<title>Wispr Flow daily brief, Aug 28</title></head>"
       '<body style="margin:0;background-color:#ffffff">'
       '<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
       '<td align="center" style="padding:24px 0">'
       '<table width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%">'
       '<tr><td style="padding:0 20px;font-family:Arial,Helvetica,sans-serif;'
       'font-size:15px;line-height:1.5;color:#202122">'
       + "".join(b) +
       "</td></tr></table></td></tr></table></body></html>")

out = HERE / f"{DATE}.email.compact.html"
out.write_text(doc)
print(f"{out.name}  {len(doc)} bytes ({len(doc)/1024:.1f} KB)  links {doc.count('<a href')}")
