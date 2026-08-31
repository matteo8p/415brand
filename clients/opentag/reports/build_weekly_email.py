"""Email-safe rendering of the OpenTag weekly brief.
Tables only, every style inline, no <style> block, charts flattened to rows.
Reads brief.json (dumped from opentag-weekly.ts) so email and report cannot drift."""
import json, html, re

B = json.load(open('brief.json'))
S = B['sources']

FONT = ""
BODY = "font-size:14px;line-height:1.6"
MUTE = "font-size:12.5px;line-height:1.5;color:#72777d"
LINK = "color:#3366cc;text-decoration:underline"
CELL = "padding:7px 9px;border:1px solid #c8ccd1;font-size:13px;line-height:1.45;vertical-align:top"
HEAD = CELL + ";background:#f8f9fa;font-weight:bold"
out = []

def esc(s): return html.escape(s, quote=False)

def inline(t):
    """**bold**, [label](url), [[source-id]] and [[id|label]] pills."""
    def pill(m):
        sid, lbl = m.group(1), m.group(2)
        s = S.get(sid)
        if not s: return ''
        return f'<a href="{html.escape(s["href"])}" style="{LINK}">{esc(lbl or s["label"])}</a>'
    t = re.sub(r'\[\[([a-z0-9-]+)(?:\|([^\]]*))?\]\]', pill, t)
    t = re.sub(r'\[([^\]]+)\]\((https?://[^)]+)\)',
               lambda m: f'<a href="{html.escape(m.group(2))}" style="{LINK}">{esc(m.group(1))}</a>', t)
    t = re.sub(r'\*\*(.+?)\*\*', lambda m: f'<b>{esc(m.group(1))}</b>', t)
    # escape anything that is still raw text, leaving our tags intact
    parts = re.split(r'(<[^>]+>)', t)
    return ''.join(p if p.startswith('<') else esc(p) for p in parts)

def p(t, style=BODY, top=12):
    out.append(f'<p style="{style};margin:{top}px 0 0">{inline(t)}</p>')

def rule_block(t, color="#1baf7a"):
    out.append('<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:12px 0 0"><tr>'
               f'<td width="3" bgcolor="{color}" style="background-color:{color};font-size:1px;line-height:1px">&nbsp;</td>'
               f'<td style="padding:2px 0 2px 12px;{BODY}">{inline(t)}</td></tr></table>')

def table(headers, rows):
    o = ['<table width="100%" cellpadding="0" cellspacing="0" border="0" '
         'style="border-collapse:collapse;border:1px solid #a2a9b1;margin:14px 0 4px"><tr>']
    for h in headers:
        w = f' width="{h["w"]}"' if h.get('w') else ''
        o.append(f'<td{w} bgcolor="#f8f9fa" style="{HEAD}">{esc(h["text"])}</td>')
    o.append('</tr>')
    for r in rows:
        o.append('<tr>' + ''.join(f'<td style="{CELL}">{inline(c)}</td>' for c in r) + '</tr>')
    o.append('</table>')
    out.append(''.join(o))

def chart(panel):
    c = panel['chart']
    out.append(f'<p style="{FONT};font-size:13px;font-weight:bold;color:#202122;margin:16px 0 0">{esc(panel["cap"])}</p>')
    if panel.get('sub'):
        out.append(f'<p style="{MUTE};margin:2px 0 0">{esc(panel["sub"])}</p>')
    def fmt(v):
        f = c.get('fmt')
        if f == 'usd': return f"${v:,.0f}"
        if f == 'pct': return f"{v}%"
        return f"{v:,}" if isinstance(v, (int, float)) else str(v)
    rows = []
    if c['kind'] == 'share':
        rows = [[r[0], f"{r[1]}%"] for r in c['rows']]
    elif c['kind'] in ('rows', 'columns'):
        rows = [[str(r[0]), fmt(r[1])] for r in c['rows']]
    if rows:
        table([{"text": "", "w": "70%"}, {"text": "", "w": "30%"}], rows)

def blocks(bl, depth=0):
    for b in bl:
        t = b['type']
        if t == 'p':      p(b['text'])
        elif t == 'note': out.append(f'<p style="{MUTE};margin:10px 0 0">{inline(b["text"])}</p>')
        elif t == 'why':  rule_block(b['text'])
        elif t == 'h3':
            out.append(f'<p style="{FONT};font-size:15px;font-weight:bold;color:#202122;margin:22px 0 0">{esc(b["text"])}</p>')
        elif t == 'ul':
            for i in b['items']:
                out.append(f'<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>'
                           f'<td width="14" style="{BODY};padding:8px 0 0">&bull;</td>'
                           f'<td style="{BODY};padding:8px 0 0">{inline(i)}</td></tr></table>')
        elif t == 'links':
            for i in b['items']:
                out.append(f'<p style="{MUTE};margin:10px 0 0">{inline(i)}</p>')
        elif t == 'table':  table(b['headers'], b['rows'])
        elif t == 'fig':
            for panel in b['panels']: chart(panel)
        elif t == 'moves':
            for n, m in enumerate(b['items'], 1):
                out.append('<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:14px 0 0"><tr>'
                           '<td width="3" bgcolor="#1baf7a" style="background-color:#1baf7a;font-size:1px;line-height:1px">&nbsp;</td>'
                           f'<td style="padding:2px 0 2px 12px">'
                           f'<p style="{FONT};font-size:14.5px;font-weight:bold;color:#202122;margin:0">{n}. {inline(m["action"])}</p>'
                           f'<p style="{BODY};margin:6px 0 0">{inline(m["why"])}</p>'
                           '</td></tr></table>')
        elif t == 'findings':
            for f in b['items']:
                bar = "#1baf7a" if b.get('style') == 'do' else "#c8ccd1"
                out.append('<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:14px 0 0"><tr>'
                           f'<td width="3" bgcolor="{bar}" style="background-color:{bar};font-size:1px;line-height:1px">&nbsp;</td>'
                           f'<td style="padding:0 0 0 12px">'
                           f'<p style="{FONT};font-size:14.5px;font-weight:bold;color:#202122;margin:0">{inline(f["claim"])}</p>'
                           '</td></tr></table>')
                blocks(f['body'], depth + 1)
        elif t == 'toggle':
            out.append(f'<p style="{FONT};font-size:13px;font-weight:bold;color:#72777d;margin:18px 0 0">{esc(b["claim"])}</p>')
            blocks(b['body'], depth + 1)
        elif t == 'changes':
            for i in b['items']:
                out.append(f'<p style="{BODY};margin:8px 0 0">&bull; {inline(i["text"])}</p>')

URL = "https://415brand.com/analysis/opentag/weekly-08-31-2026"
out.append(f'<p style="{FONT};font-size:24px;line-height:1.2;font-weight:bold;color:#202122;margin:0 0 4px">{esc(B["title"])}</p>')
out.append(f'<p style="{MUTE};margin:0 0 14px;padding-bottom:10px;border-bottom:1px solid #c8ccd1">{esc(B["sub"])}</p>')
out.append(f'<p style="{MUTE};margin:0 0 4px">Some email apps cut off long messages. '
           f'<a href="{URL}" style="{LINK}">Read the full report in your browser</a>.</p>')
blocks(B['intro'])
for i, sec in enumerate(B['sections'], 1):
    out.append('<p style="font-size:18px;line-height:1.3;font-weight:bold;margin:32px 0 6px;padding-bottom:5px;border-bottom:1px solid #c8ccd1">'
               f'<span style="color:#72777d;font-weight:normal">{i}</span> {esc(sec["title"])}</p>')
    blocks(sec['blocks'])
out.append(f'<p style="{MUTE};margin:26px 0 0;padding-top:12px;border-top:1px solid #c8ccd1">{inline(B["footer"])}</p>')
out.append(f'<p style="{MUTE};margin:14px 0 0">research415 &middot; '
           f'<a href="{URL}" style="{LINK}">View this report online</a> &middot; '
           '<a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="' + LINK + '">Unsubscribe</a></p>')

doc = ('<!DOCTYPE html>\n<html><head><meta charset="UTF-8">'
       '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
       '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
       f'<title>{esc(B["title"])}</title></head>'
       '<body style="margin:0;padding:0;background-color:#ffffff">'
       '<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" '
       'style="background-color:#ffffff"><tr><td align="center" style="padding:24px 12px">'
       '<table width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%">'
       '<tr><td style="padding:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#202122">' + ''.join(out) + '</td></tr></table>'
       '</td></tr></table></body></html>')
open('opentag-weekly-08-31-2026.email.html', 'w', encoding='utf-8').write(doc)
print("html bytes:", len(doc))
