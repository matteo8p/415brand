"""Sprag daily brief, 1 September 2026. Deepgram.

One source of truth. Emits:
  clients/sprag/reports/daily-09-01-2026.html   the client-facing report
  webapp/app/samples/briefs/deepgram-daily.ts   the /analysis page data

Written to skills/DAILY_REPORT_GUIDANCE.md, with the section-1 override from
clients/sprag/README.md: the first table is potential customers of a competitor.
"""
import html
import json
import pathlib

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parents[2]
OUT_HTML = HERE / "daily-09-01-2026.html"
OUT_TS = ROOT / "webapp/app/samples/briefs/deepgram-daily.ts"

SLUG = "daily-09-01-2026"
TITLE = "Deepgram daily brief"
SUB = "For Ian and Alex at Sprag, September 1, 2026"

# ---------------------------------------------------------------- content ---

MOVES = (
    "**Today's three moves:** (1) Open a pull request adding Sprag to "
    "[openclaw](https://github.com/openclaw/openclaw). It has 388,284 stars, Deepgram "
    "is already a plug-in extension there, and that extension is a template Sprag can "
    "copy. (2) Write to "
    "[Elios in London](https://www.linkedin.com/posts/americanitsystems_jobopening-hiring-nowhiring-activity-7500226376768106496-Skn0). "
    "Their job ad prints the stack, Deepgram is the transcriber, and they are hiring "
    "the engineer who will own it. (3) Reply to "
    "[Ian Jones on X](https://x.com/pburghdoom/status/2094530719376875723). Flux "
    "returned twelve seconds of a caller as three settled segments and his agent "
    "overwrote each one. Nobody has answered him."
)

OSS_HEADERS = [
    {"text": "Project", "w": "16%"},
    {"text": "Stars", "w": "6%", "nw": True},
    {"text": "The Deepgram dependency", "w": "32%"},
    {"text": "Last push", "w": "9%", "nw": True},
    {"text": "What Sprag can do", "w": "37%"},
]

OSS = [
    [
        "[**openclaw/openclaw**](https://github.com/openclaw/openclaw)",
        "388,284",
        "Deepgram is a first-class extension rather than a hardcoded call: [realtime-transcription-provider.ts](https://github.com/openclaw/openclaw/blob/main/extensions/deepgram/realtime-transcription-provider.ts), a [media-understanding provider](https://github.com/openclaw/openclaw/blob/main/extensions/deepgram/media-understanding-provider.ts), and its own [provider docs page](https://github.com/openclaw/openclaw/blob/main/docs/providers/deepgram.md). Peter Steinberger committed [test(deepgram): observe realtime transcription completion](https://github.com/openclaw/openclaw/commit/2cbc2e59da75e93049bf9dc08aa70839077b7dba) on Aug 31.",
        "Aug 31",
        "Copy the Deepgram extension, point it at api.sprag.ai/v1, open the pull request. 81,517 forks. Do this first.",
    ],
    [
        "[**Natively**](https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant)",
        "2,396",
        "[DeepgramStreamingSTT.ts](https://github.com/Natively-AI-assistant/natively-cluely-ai-assistant/blob/main/electron/audio/DeepgramStreamingSTT.ts) sits behind an STT constants file, and the Deepgram logo is already in the provider-logo folder. Free open-source meeting assistant, interview copilot and note taker.",
        "Aug 31",
        "Open a pull request. Meeting audio runs long, which is where $0.075 an hour bites hardest.",
    ],
    [
        "[**botium-speech-processing**](https://github.com/codeforequity-at/botium-speech-processing)",
        "943",
        "Deepgram is a drop-in module on both sides: [stt/deepgram.js](https://github.com/codeforequity-at/botium-speech-processing/blob/master/frontend/src/stt/deepgram.js) and [tts/deepgram.js](https://github.com/codeforequity-at/botium-speech-processing/blob/master/frontend/src/tts/deepgram.js), plus a docker-compose file that runs the whole stack against it.",
        "Jun 25",
        "Add a sprag.js beside each Deepgram file. A day of work, and it puts Sprag in front of real audio.",
    ],
    [
        "[**joinly-ai/joinly**](https://github.com/joinly-ai/joinly)",
        "564",
        "[services/stt/deepgram.py](https://github.com/joinly-ai/joinly/blob/main/joinly/services/stt/deepgram.py) and [services/tts/deepgram.py](https://github.com/joinly-ai/joinly/blob/main/joinly/services/tts/deepgram.py) in a services folder. Makes meetings accessible to AI agents.",
        "Mar 19",
        "Same job as botium. Open an issue first, five months since the last push.",
    ],
    [
        "[**bakrianoo/mazinger**](https://github.com/bakrianoo/mazinger)",
        "461",
        "End-to-end video dubbing pipeline with Deepgram wired into [cli/_transcribe.py](https://github.com/bakrianoo/mazinger/blob/master/mazinger/cli/_transcribe.py) and named throughout the CLI documentation.",
        "Aug 17",
        "Pitch transcription only. Rhythm does Arabic, Chorus has no Arabic voice. Say the gap out loud.",
    ],
]

CUSTOMERS_HEADERS = [
    {"text": "Who", "w": "17%"},
    {"text": "Where", "w": "11%", "nw": True},
    {"text": "The signal", "w": "42%"},
    {"text": "What Sprag can do", "w": "30%"},
]

CUSTOMERS = [
    [
        "**Elios**, London. AI receptionists for home services",
        "LinkedIn job ad, Aug 31",
        "The job ad for their Staff Software Engineer prints the stack: [\"Utilizes OpenAI and Gemini for LLMs, Deepgram for speech-to-text, and 11 Labs for text-to-speech.\"](https://www.linkedin.com/posts/americanitsystems_jobopening-hiring-nowhiring-activity-7500226376768106496-Skn0) 14 people, $13M Series A, YC and Blackbird.",
        "Write to Elios, not the staffing firm. Lead on price: Sprag's cost table puts Deepgram at 3.5× Sprag a call-minute.",
    ],
    [
        "**Midam Kim, PhD**, ServiceNow. ML Engineer for Multilingual Voice Agent",
        "LinkedIn, Aug 27",
        "Reacted to Soniox on [Gemini 3.5 Transcribe](https://www.linkedin.com/posts/soniox_googles-new-gemini-35-transcribe-shows-activity-7499122393701990401-N0AT) and on [a voice for everyone in every language](https://www.linkedin.com/posts/soniox_a-voice-for-everyone-in-every-language-activity-7498473022341816320-7_ip). Her own profile title is the job Sprag sells into.",
        "ServiceNow does not buy on price. Open on ISSEN: 90% on code-switched audio against about 70%. Ask for a side-by-side.",
    ],
    [
        "**Himanshu Sharma**, Kore.ai. AI Solutions Engineer",
        "LinkedIn, Aug 31",
        "Reacted to [Cartesia's Aug 31 post](https://www.linkedin.com/posts/cartesia-ai_ia40-activity-7500290087801405440--eHs) the day it went up. His profile lists pre-sales and technical consulting.",
        "One solutions engineer covers many deployments. Send the per-hour rate and the point that speaker labels are included.",
    ],
    [
        "**Pedro Arantes Pedroso**, GetVocal AI. Expansion Manager",
        "LinkedIn, Aug 31",
        "Reacted to [Deepgram's Aug 31 post](https://www.linkedin.com/posts/francisco-sousa-machado_voice-collective-activity-7500205775085101056-QDYo) recruiting voices for expressive text to speech. His profile says GetVocal raised a €26M Series A.",
        "Ask which markets they are opening before promising a voice. Lead on transcription, thirty languages against Chorus's ten.",
    ],
    [
        "**Ophir Samson**, Greenhouse. Head of Voice AI, and founder of Ezra AI Labs",
        "LinkedIn, Aug 30",
        "Commented on [the Aug 30 voice AI roundup](https://www.linkedin.com/posts/sumanyusharma_google-put-speech-recognition-back-at-the-activity-7499879870034800640-ewMT) that named Gemini 3.5 Transcribe, Speechmatics and Deepgram. Everyone else on that thread only tapped a reaction.",
        "Ezra is the cheaper first sale and has no procurement in the way. Offer it the free tier and let Greenhouse follow.",
    ],
]

POST_HEADERS = [
    {"text": "Where", "w": "14%"},
    {"text": "Date", "w": "7%", "nw": True},
    {"text": "Post"},
    {"text": "Reach", "w": "11%"},
    {"text": "What Sprag can do", "w": "24%"},
]

COMPLAINTS = [
    [
        "X, @pburghdoom",
        "Aug 31",
        "[Twelve seconds of somebody talking to my voice agent came back from Deepgram as three settled segments. My code treated everything without the end-of-speech flag as a revisable interim and overwrote it. Each settled segment destroyed the one before it.](https://x.com/pburghdoom/status/2094530719376875723)",
        "0 likes, no replies yet",
        "Zero replies. Be the first, then send the Sprag realtime docs.",
    ],
    [
        "G2, a founding engineer at a mid-market company",
        "Aug 30",
        "[they do not support certain languages at the accuracy that we wanted for our production use cases, like Swedish and Norwegian… I would love if they could give a clarity on how soon they are going to upgrade their models, so I will be able to plan my roadmap accordingly](https://www.g2.com/products/deepgram/reviews?order=most_recent)",
        "5-star review, dislike box",
        "No reply channel on a competitor's review. Rhythm covers Swedish and has no Norwegian. Put the Swedish numbers on a page.",
    ],
    [
        "X, @iPuneetSingh",
        "Aug 31",
        "[eot-bench at 300ms: 9.9% false-cutoff (deepgram flux 12.9%, ultravad 27.7%). at 600ms: 4.5%. 14 langs, hi included.](https://x.com/iPuneetSingh/status/2094414444612948310)",
        "0 likes, 1 reply",
        "Sprag has not run eot-bench, so claim no score. Ask him to add Sprag to the next run.",
    ],
    [
        "LinkedIn, Shubham Thakur",
        "Aug 31",
        "[Turn detection used to be a dumb silence timer bolted onto the transcriber… On LiveKit's own benchmark, generic VAD produces a 27.7% false-cutoff rate at a 300ms latency budget. Their turn detector gets that to 9.9%.](https://www.linkedin.com/posts/shubhamthakur-codes_voiceai-aiengineering-conversationalai-activity-7500209309310529537-TJfl)",
        "0 likes",
        "Comment with Sprag's position, and admit barge-in needs a client patch today. Honest beats absent.",
    ],
]

SHOPPING = [
    [
        "LinkedIn, datalvar.ai (ES)",
        "Aug 31",
        "[Medimos la latencia de 6 stacks de voicebot en español. Solo uno baja del segundo… 780 ms end-to-end con Deepgram Nova-3 + Claude Haiku 4.5 + Cartesia Sonic.](https://www.linkedin.com/posts/datalvarai_latencia-voicebots-y-chatbots-ia-espa%C3%B1ol-activity-7500077595053531136-0AYX) (\"We measured the latency of 6 Spanish voicebot stacks. Only one comes in under a second… 780 ms end to end with Deepgram Nova-3 + Claude Haiku 4.5 + Cartesia Sonic.\") 600 interactions, three scenarios, method published.",
        "0 likes",
        "Reply in Spanish. Offer to run Sprag through the same three scenarios. Spanish is covered both directions.",
    ],
    [
        "LinkedIn, Sumanyu Sharma, Hamming",
        "Aug 30",
        "[Google put speech recognition back at the center of the voice stack this week.](https://www.linkedin.com/posts/sumanyusharma_google-put-speech-recognition-back-at-the-activity-7499879870034800640-ewMT) Weekly roundup naming Gemini 3.5 Transcribe, Speechmatics on LiveKit, and Mavenir with Sanas.",
        "87 likes, 4 comments",
        "Do not pitch in the thread. Write to him and ask to be an item next week. ISSEN is the item.",
    ],
    [
        "LinkedIn, Ivan Mehta",
        "Aug 31",
        "[it is also a price-sensitive market. Businesses would want the lowest prices per minute. Many people in the industry have argued that if startups play that game, it is a race to the bottom, and the one to lose.](https://www.linkedin.com/posts/ivan-mehta_35-the-bull-and-bear-case-for-indias-voice-activity-7500180884080263168-EyNn) Names ElevenLabs, Cartesia, Deepgram and Krisp.",
        "12 likes",
        "He argues price in India is a race to the bottom. Answer it with the call-minute arithmetic and ISSEN.",
    ],
]

HAPPY_HEADERS = [
    {"text": "Where", "w": "14%"},
    {"text": "Date", "w": "7%", "nw": True},
    {"text": "Post"},
    {"text": "Reach", "w": "11%"},
    {"text": "Why it matters", "w": "24%"},
]

HAPPY = [
    [
        "LinkedIn, Francisco Sousa Machado, GTM at Deepgram",
        "Aug 31",
        "[At Deepgram we are building the next generation of expressive text to speech, and we need real voices. Every accent. Every dialect. Every language. The ones that never make it into datasets… It pays.](https://www.linkedin.com/posts/francisco-sousa-machado_voice-collective-activity-7500205775085101056-QDYo)",
        "32 likes, 3 comments",
        "Deepgram is buying long-tail accent data. Open weights cannot answer that, and it is Sprag's advantage today.",
    ],
    [
        "LinkedIn, Karan M., Applied Voice AI at Deepgram",
        "Aug 31",
        "Flux TTS restaurant demo, trained on brand names, food words, prices, hours and location. In his own comment: [Build with Flux TTS for free until Sept 12](https://www.linkedin.com/posts/karanbm1999_evals-agent-behavior-accuracy-these-are-activity-7500301162034802688-Z-XB)",
        "10 likes, 2 comments",
        "Free until Sept 12, list price rises Sept 13. Twelve days of free onboarding for Sprag to undo later.",
    ],
    [
        "LinkedIn, Deepgram",
        "Aug 31",
        "[Deepgram is a G2 Leader in the Fall 2026 Grid Reports across voice AI… claimed the #1 spot in Voice Recognition and is the only one of G2's five Voice Recognition Leaders to also earn a Leader position in the Text-to-Speech G2 Grid](https://www.linkedin.com/posts/deepgram_deepgram-is-a-g2-leader-in-the-fall-2026-activity-7500251160000282624-6TBT)",
        "57 likes, 2 comments",
        "481 reviews at 4.6. The badge goes into every deal this quarter. Sprag has no G2 listing at all.",
    ],
]

CHANGES = [
    {"text": "Deepgram shipped nothing on Aug 30 or 31. Its last release was [Aug 28](https://developers.deepgram.com/changelog/2026/8/28): turn-taking control for Flux, and improved Nova-3 models for ten languages including Marathi and Telugu. The language releases are running weekly and they are aimed at Sprag's wedge.", "tone": "neutral"},
    {"text": "Deepgram started paying members of the public for 90-second voice recordings in any accent or dialect, to train expressive text to speech. It is buying the long-tail voice data that open-weight models do not have.", "tone": "bad"},
    {"text": "Flux TTS is free until Sept 12 and Deepgram's list price rises Sept 13. Twelve days of free onboarding land immediately before the number Sprag beats.", "tone": "bad"},
    {"text": "Deepgram named its first DACH sales development rep on Aug 31 and called it the founding Central Europe GTM team. German-speaking accounts are about to get called.", "tone": "bad"},
    {"text": "Language coverage is where Deepgram is being pushed. A paying mid-market customer marked it down on G2 for Swedish and Norwegian on Aug 30, and Deepgram answered the same week with Nova-3 improvements for ten more languages. Rhythm covers Swedish and not Norwegian, so the honest reply is a narrow one.", "tone": "good"},
]

FOLLOW_UP = (
    "Follow up tomorrow: whether anyone answered @pburghdoom, and whether Elios posts "
    "the role on its own page with a named hiring manager."
)

SOURCES = (
    "Pulled Sept 1, 2026. The window is Aug 30 and 31. X search for Deepgram over the "
    "last 48 hours, latest and top. "
    "Reddit search for Deepgram, newest first, back to Aug 29, because this is the first "
    "daily brief and Reddit was not in the Aug 31 weekly. LinkedIn keyword search for "
    "Deepgram over the last week, with every reaction and comment on each post read for "
    "job title and employer, plus every post and engager on the Deepgram, Soniox and "
    "Cartesia company pages. GitHub commit search for Deepgram since Aug 30, and code search for "
    "api.deepgram.com, DEEPGRAM_API_KEY, deepgram-sdk and the Python and realtime "
    "imports, with every repository returned ranked by stars. "
    "G2 reviews of Deepgram, most recent first. Deepgram's "
    "changelog. Hacker News, which had nothing in the window. Reach is likes, replies, "
    "reposts, upvotes and comments as each site reported them at pull time. Job titles "
    "and employers are as written on each person's own profile. LinkedIn does not "
    "publish the date of a reaction, so where a row rests on a reaction the date "
    "shown is the post's. No advertising pull ran "
    "today, so search and display advertising is covered in the Aug 31 weekly instead."
)

SECTIONS = [
    {
        "id": "oss",
        "title": "Open source projects running Deepgram",
        "blocks": [{"type": "table", "headers": OSS_HEADERS, "rows": OSS}],
    },
    {
        "id": "customers",
        "title": "Who looks like a competitor's customer today",
        "blocks": [
            {"type": "table", "headers": CUSTOMERS_HEADERS, "rows": CUSTOMERS},
        ],
    },
    {
        "id": "complaints",
        "title": "People complaining about Deepgram",
        "blocks": [{"type": "table", "headers": POST_HEADERS, "rows": COMPLAINTS}],
    },
    {
        "id": "shopping",
        "title": "People shopping around or on the fence",
        "blocks": [{"type": "table", "headers": POST_HEADERS, "rows": SHOPPING}],
    },
    {
        "id": "happy",
        "title": "People happy with Deepgram",
        "blocks": [{"type": "table", "headers": HAPPY_HEADERS, "rows": HAPPY}],
    },
    {
        "id": "week",
        "title": "What happened in the last two days",
        "blocks": [
            {"type": "changes", "items": CHANGES},
            {"type": "note", "text": FOLLOW_UP},
        ],
    },
    {
        "id": "sources",
        "title": "Sources",
        "blocks": [{"type": "note", "text": SOURCES}],
    },
]

BRIEF = {
    "slug": SLUG,
    "title": TITLE,
    "sub": SUB,
    "subject": "Deepgram",
    "client": "Sprag",
    "intro": [{"type": "why", "text": MOVES}],
    "sections": SECTIONS,
    "footer": "",
    "sources": {},
}

# --------------------------------------------------------------- rendering --

CSS = """
.analysis{color-scheme:light;background:#fff;color:#202122;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:15.5px;line-height:1.6;-webkit-font-smoothing:antialiased}
.analysis a{color:#3366cc;text-decoration:none}.analysis a:hover{text-decoration:underline}
.analysis .page{max-width:980px;margin:0 auto;padding:40px 24px 80px}
.analysis h1{font-size:30px;font-weight:600;line-height:1.2;margin:0 0 4px;letter-spacing:-0.01em}
.analysis .sub{color:#72777d;font-size:13.5px;margin:0 0 18px;padding-bottom:10px;border-bottom:1px solid #c8ccd1}
.analysis h2{font-size:21px;font-weight:600;line-height:1.3;margin:36px 0 12px;padding-bottom:5px;border-bottom:1px solid #c8ccd1}
.analysis h2 .num{color:#72777d;font-weight:500;margin-right:8px}
.analysis h3{font-size:16px;font-weight:600;margin:22px 0 8px;color:#202122}
.analysis p{margin:0 0 12px}.analysis .note{color:#72777d;font-size:13.5px}.analysis b{font-weight:600}
.analysis .why{border-left:3px solid #1baf7a;padding:2px 0 2px 12px;margin:6px 0 14px}.analysis .why b{color:#176f4e}
.analysis .tbl{overflow-x:auto;margin:8px 0 14px}
.analysis table.data{border-collapse:collapse;width:100%;font-size:13.5px;line-height:1.45;border:1px solid #a2a9b1}
.analysis table.data th,.analysis table.data td{text-align:left;padding:6px 9px;border:1px solid #c8ccd1;vertical-align:top}
.analysis table.data th{background:#f8f9fa;font-weight:600}
.analysis table.data td.nw,.analysis table.data th.nw{white-space:nowrap}
.analysis ul{list-style:disc;margin:0 0 14px;padding-left:22px}.analysis li{margin:0 0 9px}.analysis li::marker{color:#72777d}
.analysis .contents{display:inline-block;border:1px solid #a2a9b1;background:#f8f9fa;padding:8px 18px 8px 14px;margin:2px 0 8px;font-size:14px}
.analysis .contents .t{font-weight:600;margin-bottom:2px}.analysis .contents ol{list-style:decimal;margin:0;padding-left:22px}.analysis .contents li{margin:1px 0}
.analysis ul.changes{list-style:disc;padding-left:22px}
.analysis ul.changes li.tone-good::marker{color:#1baf7a}
.analysis ul.changes li.tone-bad::marker{color:#c8442a}
.analysis ul.changes li.tone-neutral::marker{color:#72777d}
@media (max-width:640px){.analysis .page{padding:24px 14px 60px}.analysis table.data{font-size:13px}}
"""

import re

_LINK = re.compile(r"\[([^\]]+)\]\((https?://[^)]+)\)")
_BOLD = re.compile(r"\*\*([^*]+)\*\*")


def inline(text):
    """**bold** and [label](url) over escaped text."""
    out, last = [], 0
    for m in _LINK.finditer(text):
        out.append(html.escape(text[last:m.start()]))
        out.append(
            '<a href="%s" target="_blank" rel="noopener">%s</a>'
            % (html.escape(m.group(2), quote=True), html.escape(m.group(1)))
        )
        last = m.end()
    out.append(html.escape(text[last:]))
    joined = "".join(out)
    return _BOLD.sub(lambda m: "<b>%s</b>" % m.group(1), joined)


def render_block(b):
    t = b["type"]
    if t in ("p", "note", "why"):
        cls = "" if t == "p" else ' class="%s"' % t
        return "<p%s>%s</p>" % (cls, inline(b["text"]))
    if t == "h3":
        return "<h3>%s</h3>" % html.escape(b["text"])
    if t == "changes":
        items = "".join(
            '<li class="tone-%s">%s</li>' % (i.get("tone", "neutral"), inline(i["text"]))
            for i in b["items"]
        )
        return '<ul class="changes">%s</ul>' % items
    if t == "table":
        head = "".join(
            '<th%s%s>%s</th>'
            % (
                ' class="nw"' if h.get("nw") else "",
                ' style="width:%s"' % h["w"] if h.get("w") else "",
                html.escape(h["text"]),
            )
            for h in b["headers"]
        )
        body = []
        for row in b["rows"]:
            cells = "".join(
                "<td%s>%s</td>"
                % (' class="nw"' if b["headers"][i].get("nw") else "", inline(c))
                for i, c in enumerate(row)
            )
            body.append("<tr>%s</tr>" % cells)
        return (
            '<div class="tbl"><table class="data"><thead><tr>%s</tr></thead>'
            "<tbody>%s</tbody></table></div>" % (head, "".join(body))
        )
    raise ValueError(t)


def render_html():
    out = [
        "<!doctype html>",
        '<html lang="en"><head><meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
        "<title>%s for Sprag, September 1, 2026</title>" % html.escape(TITLE),
        "<style>body{margin:0;background:#fff}%s</style>" % CSS,
        '</head><body><div class="analysis"><div class="page">',
        "<h1>%s</h1>" % html.escape(TITLE),
        '<p class="sub">%s</p>' % html.escape(SUB),
    ]
    for b in BRIEF["intro"]:
        out.append(render_block(b))
    out.append('<div class="contents"><div class="t">Contents</div><ol>')
    for s in SECTIONS:
        out.append('<li><a href="#%s">%s</a></li>' % (s["id"], html.escape(s["title"])))
    out.append("</ol></div>")
    for i, s in enumerate(SECTIONS, 1):
        out.append('<h2 id="%s"><span class="num">%d</span>%s</h2>' % (s["id"], i, html.escape(s["title"])))
        for b in s["blocks"]:
            out.append(render_block(b))
    out.append("</div></div></body></html>")
    return "\n".join(out)


def render_ts():
    body = json.dumps(BRIEF, indent=2, ensure_ascii=False)
    return (
        'import type { Brief } from "./types";\n\n'
        "// Sprag daily brief, 1 September 2026. Generated by\n"
        "// clients/sprag/reports/build_daily_report.py. Edit the builder, not this file.\n"
        "export const deepgramDaily: Brief = %s;\n" % body
    )


if __name__ == "__main__":
    OUT_HTML.write_text(render_html(), encoding="utf-8")
    OUT_TS.write_text(render_ts(), encoding="utf-8")
    print("wrote", OUT_HTML)
    print("wrote", OUT_TS)
