import html, os

CSS = """
.analysis{color-scheme:light;background:#fff;color:#202122;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:15.5px;line-height:1.6;-webkit-font-smoothing:antialiased}
.analysis a{color:#3366cc;text-decoration:none}.analysis a:hover{text-decoration:underline}
.analysis .page{max-width:900px;margin:0 auto;padding:40px 24px 80px}
.analysis h1{font-size:30px;font-weight:600;line-height:1.2;margin:0 0 4px;letter-spacing:-0.01em}
.analysis .sub{color:#72777d;font-size:13.5px;margin:0 0 18px;padding-bottom:10px;border-bottom:1px solid #c8ccd1}
.analysis h2{font-size:21px;font-weight:600;line-height:1.3;margin:36px 0 12px;padding-bottom:5px;border-bottom:1px solid #c8ccd1}
.analysis h2 .num{color:#72777d;font-weight:500;margin-right:8px}
.analysis h3{font-size:16px;font-weight:600;margin:20px 0 8px;color:#202122}
.analysis p{margin:0 0 12px}.analysis .note{color:#72777d;font-size:13.5px}.analysis b{font-weight:600}
.analysis .why{border-left:3px solid #1baf7a;padding:2px 0 2px 12px;margin:6px 0 10px}.analysis .why b{color:#176f4e}
.analysis .tbl{overflow-x:auto;margin:8px 0 14px}
.analysis table.data{border-collapse:collapse;width:100%;font-size:13.5px;line-height:1.4;border:1px solid #a2a9b1}
.analysis table.data th,.analysis table.data td{text-align:left;padding:6px 9px;border:1px solid #c8ccd1;vertical-align:top}
.analysis table.data th{background:#f8f9fa;font-weight:600}
.analysis table.data td.n,.analysis table.data th.n{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.analysis table.data td.d{white-space:nowrap}
.analysis table.data td.q{color:#444;font-style:italic}
.analysis ul{list-style:disc;margin:0 0 14px;padding-left:22px}.analysis li{margin:0 0 9px}.analysis li::marker{color:#72777d}
.analysis .contents{display:inline-block;border:1px solid #a2a9b1;background:#f8f9fa;padding:8px 18px 8px 14px;margin:2px 0 8px;font-size:14px}
.analysis .contents .t{font-weight:600;margin-bottom:2px}.analysis .contents ol{list-style:decimal;margin:0;padding-left:22px}.analysis .contents li{margin:1px 0}
.analysis .tag{display:inline-block;font-size:11.5px;font-weight:600;padding:1px 6px;border-radius:3px;margin-right:4px;white-space:nowrap}
.analysis .tag.red{background:#fde8e8;color:#9b1c1c}.analysis .tag.amber{background:#fdf1d8;color:#8a5a00}.analysis .tag.green{background:#e3f5ec;color:#176f4e}.analysis .tag.grey{background:#eef0f2;color:#555}
.analysis blockquote{margin:6px 0 12px;padding:2px 0 2px 12px;border-left:3px solid #c8ccd1;color:#444}
"""

def link(text, url):
    return f'<a href="{html.escape(url)}" target="_blank" rel="noopener">{html.escape(text)}</a>'

def table(headers, rows, numeric=()):
    out = ['<div class="tbl"><table class="data"><thead><tr>']
    for i, h in enumerate(headers):
        out.append(f'<th{" class=n" if i in numeric else ""}>{html.escape(h)}</th>')
    out.append('</tr></thead><tbody>')
    for r in rows:
        out.append('<tr>')
        for i, c in enumerate(r):
            cls = ' class="n"' if i in numeric else (' class="d"' if headers[i] == 'Date' else '')
            out.append(f'<td{cls}>{c}</td>')
        out.append('</tr>')
    out.append('</tbody></table></div>')
    return ''.join(out)

# Each entry: (where, date, quote, url, reach, what-to-do)
# Window: Aug 27 and 28. Lead-first, per clients/ref.tools/README.md.

# ---------- 1. People stuck between agents (Ref Plans) ----------
STUCK = [
 ("X, @_jsolly", "Aug 27",
  "Turns out I can't fully migrate to cloud Cursor agents. They don't support plan mode. (what the heck!). Gotta go install the IDE I guess...",
  "https://x.com/_jsolly/status/2093115956620833214", "0 likes, no replies",
  "He wants plan mode in the cloud and Cursor does not have it. Ref Plans is plan mode in the cloud, and it launches Cursor Background Agents. Nothing else on this page is a closer fit. Reply today."),
 ("X, @XixiLi12498", "Aug 28",
  "AGENTS.md feels less like a config file and more like procedural memory for agents. If different tools read different files, the team gets split-brain agents.",
  "https://x.com/XixiLi12498/status/2093164725521785086", "0 likes, no replies",
  "“Split-brain agents” is your alignment problem with a better name than you are using. Reply, then steal the phrase."),
 ("X, @thedoomguy_ai (PT)", "Aug 28",
  "Claude Code só lê CLAUDE.md. Outros agentes leem AGENTS.md. Resultado: cada dev recebe instrução diferente. Um time, dois cérebros. [Claude Code only reads CLAUDE.md. Other agents read AGENTS.md. Result: every dev gets a different instruction. One team, two brains.]",
  "https://x.com/thedoomguy_ai/status/2093149441830048171", "0 likes, no replies",
  "Same point, in Portuguese, and he lands on “one team, two brains.” Reply in Portuguese. The plan lives above the harness, so it does not matter which file each agent reads."),
 ("X, @phongdesigns", "Aug 28",
  "Symlinks make the file portable. They do not make the behaviour portable. Same AGENTS.md, different harness, different result, because what each one can verify differs.",
  "https://x.com/phongdesigns/status/2093167020812743075", "0 likes, no replies",
  "The most technically precise version of this problem anyone posted. He has worked out that config files do not survive a harness change. Good person to get into the beta."),
 ("X, @AsiBy2030", "Aug 28",
  "There should be context standard. We have AGENTS.md, SOUL, MEMORY, SKILL, what else. Should/can everything be easily migrateable?",
  "https://x.com/AsiBy2030/status/2093179143647269013", "0 likes, no replies",
  "He is asking for the thing you sell, out loud, and nobody has answered him."),
 ("X, @lizikk_zhu (ZH)", "Aug 28",
  "Warp 的代码 review agent 老发没用的评论… 后来想通本质：反馈在 session 结束时消失了，根本没进入 agent 循环。 [Warp's code review agent kept posting useless comments… the real problem: the feedback disappears when the session ends, it never enters the agent loop.]",
  "https://x.com/lizikk_zhu/status/2093161322078929082", "0 likes, no replies",
  "He independently arrived at your old tagline: chats disappear, decisions should not. Reply in Chinese if you can, or in English with the essay."),
 ("X, @AiDevCraft", "Aug 28",
  "Six months, zero hand-written lines of code, about 20 agent VMs at peak… everyone running parallel agents climbs the same isolation ladder, and each rung fixes exactly one thing.",
  "https://x.com/AiDevCraft/status/2093155148210323964", "0 likes, 1 reply",
  "Twenty agents at once is the ceiling case for your product. He has solved the git side and not the alignment side. Ask him what he uses to keep track of what each one is doing."),
 ("Hacker News, gherkinnn", "Aug 26",
  "now that I am dabbling in spec-driven development (unsure whether I like it) I have to read a lot of prose and I simply cannot get myself to read a page of claudisms. It is that painful… everything is evenly bombastic and lacks any sense of rhythm.",
  "https://news.ycombinator.com/item?id=49445289", "comment in a 43-point thread",
  "Two days old rather than one, but it is the clearest statement anyone made of the problem your “plans designed to be read” feature exists to solve. He is not sold on SDD, he is sold on the complaint. That is the better opening."),
 ("X, @callumflack", "Aug 27",
  "After a year of taking a global AGENTS.md seriously, here's what I use… What's yours? What am I missing? What could be better?",
  "https://x.com/callumflack/status/2093120046780543156", "2 likes, 2 replies",
  "An open invitation with only two answers so far. Cheap to be the third and most useful one."),
]

# ---------- 2. Docs and context, the Ref Context front ----------
DOCS = [
 ("X, @chasen_liao (ZH)", "Aug 28",
  "很多模型会默认调用 bash 命令，而不用内置的 grep、find… 直接使用这些会导致上下文膨胀的很厉害。bash 里的 grep 是上下文杀手。 [Models default to bash instead of the built-in grep and find, and that bloats the context badly. grep in bash is a context killer.]",
  "https://x.com/chasen_liao/status/2093195857772609862", "71 likes, 10 replies",
  "The biggest context-efficiency thread in the window. Token waste is exactly what Ref Context sells against. Reply with the numbers from your search benchmark post."),
 ("X, @itsandreramon", "Aug 27",
  "context7 and proper docs necessary otherwise your agent doesn't know how to writer proper code though",
  "https://x.com/itsandreramon/status/2093033965711949919", "1 like, no replies",
  "A satisfied Context7 user who has not heard of the alternative. Do not attack Context7. Just say you built the same thing with private repos included and let him check the token count."),
 ("X, @cryptodavidw", "Aug 28",
  "claude saving things to memory instead of AGENTS.md is not ideal",
  "https://x.com/cryptodavidw/status/2093147651885723650", "5 likes, no replies",
  "He wants decisions in a durable, readable place rather than hidden in a model's memory. That is your whole pitch in one line."),
]

# ---------- 3. The plan layer: rivals' users and people arguing your thesis ----------
PLAN = [
 ("X, @_axtone (ES)", "Aug 28",
  "Hoy termine la fase 1 de mi primer proyecto con harness engineering + spec-driven development… la parte técnica fue lo de menos. Lo difícil (y lo valioso) estuvo en otro lado. [Finished phase 1 of my first project with harness engineering and SDD… the technical part mattered least. The hard and valuable part was elsewhere.]",
  "https://x.com/_axtone/status/2093165505511035212", "266 likes, 8 replies, 9 reposts",
  "The highest-engagement post in the window and it lands on your conclusion: the hard part is human, not technical. Reply in Spanish. This is a room, not a lead."),
 ("X, @inakitajes (ES)", "Aug 27",
  "Asúmelo: has perdido el control del código. Intentar recuperarlo es la batalla equivocada. [Accept it: you have lost control of the code. Trying to get it back is the wrong battle.]",
  "https://x.com/inakitajes/status/2092975925923115359", "115 likes, 3 replies, 9 reposts",
  "Your “agents making critical decisions” bullet, in Spanish, with real reach. Your counter is that you keep control at the plan, not at the diff. That is a better answer than his."),
 ("X, @viettranxuan", "Aug 28",
  "One workflow file makes them argue from the same context, and it costs less than it looks, because they only talk before implementation.",
  "https://x.com/viettranxuan/status/2093141771727622377", "4 likes, 3 replies",
  "He has independently derived your pre-work argument, including the cost case. Agree with him publicly and show him the multiplayer version."),
 ("X, @kristovatlas", "Aug 28",
  "Quoting another tool's docs: “i don't believe in planning. the best spec is code.” His reply was a single 😬",
  "https://x.com/kristovatlas/status/2093162559868203217", "0 likes, 1 reply",
  "Someone else's product shipped an anti-planning stance and he winced at it. Free opening to make the case, and you are not the one starting the fight."),
 ("X, @ludo_zz (PT)", "Aug 28",
  "plan mode com Sol é absolutamente terrível pqp [plan mode with Sol is absolutely terrible]",
  "https://x.com/ludo_zz/status/2093215370735698134", "0 likes, no replies",
  "Built-in plan mode failing is your best possible ad. Ask what broke before you pitch anything."),
 ("X, @MrugeshThesiya", "Aug 28",
  "why does my opencode start editing in plan mode please fix",
  "https://x.com/MrugeshThesiya/status/2093194360263504377", "0 likes, no replies",
  "Plan mode that edits code is not plan mode. Small account, but it is the exact failure that makes people look for a real plan tool."),
 ("X, @yagiryuuu (JA)", "Aug 28",
  "ShopifyのCEOトビが「Claude CodeをShopifyで禁止しようか考えている」… 理由は性能ではなく設定ファイル問題 [Shopify's CEO said he is considering banning Claude Code at Shopify. The reason is not performance, it is the config file problem.]",
  "https://x.com/yagiryuuu/status/2093165167777554813", "5 likes, no replies",
  "Unverified second-hand, so do not repeat it as fact. But if a CEO is weighing a ban over which markdown file an agent reads, that is your argument at enterprise scale. Worth watching, not quoting."),
]

def rows(items):
    return [[html.escape(w), d, link(t, u), html.escape(r), html.escape(s)] for (w, d, t, u, r, s) in items]

# ---------- 4. What the competition shipped ----------
SHIPPED = [
 ("Aug 28", "Traycer",
  "Mobile confirmed as “coming very soon”, after remote headless host landed in 1.2.0",
  "https://x.com/TraycerAI/status/2093165703746797608",
  "Second shipping announcement in two days. They are moving off the IDE and onto every surface."),
 ("Aug 27", "Traycer",
  "Bring your own HuggingFace API and run open models directly inside Traycer",
  "https://x.com/TraycerAI/status/2092955704621715910",
  "Open-model support is a cost and privacy play at the same time. You have no equivalent answer published."),
 ("Aug 26", "Anthropic",
  "The AI-Native SDLC Playbook, from the Applied AI team. Six stages, Plan through Maintain, every stage committing an artifact to git",
  "https://claude.com/blog/the-ai-native-sdlc-playbook",
  "The most important thing that happened this week. See the takeaway below."),
 ("Aug 26", "Academic",
  "“Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?”",
  "https://x.com/MaineFrameworks/status/2093132770482549033",
  "Someone is now measuring whether the repo-markdown approach works at all. Watch for the result, whichever way it goes."),
 ("Aug 25", "Research",
  "SPECMINE, a large-scale corpus of spec-driven development artifacts (Agarwal and Vasilescu)",
  "https://x.com/ComputerPapers/status/2092959191828730297",
  "Academia is building datasets on this category. It is becoming a real field, which raises the ceiling and the noise."),
]

def shipped_rows():
    return [[d, html.escape(who), link(what, u), html.escape(why)] for (d, who, what, u, why) in SHIPPED]

PLAYBOOK = "https://claude.com/blog/the-ai-native-sdlc-playbook"
JSOLLY = "https://x.com/_jsolly/status/2093115956620833214"

def a(text, url):
    return f'<a href="{html.escape(url)}">{text}</a>'

MOVES = (
 '<b>Three things to do today:</b> (1) Reply to '
 + a("@_jsolly", JSOLLY) + ', who just found out cloud Cursor agents do not support plan mode. '
 'You are cloud plan mode that launches Cursor Background Agents. Closest fit on the page. '
 f'(2) Write about {a("Anthropic’s AI-Native SDLC Playbook", PLAYBOOK)} (section 4). It says your thesis '
 'back to you with a bigger logo on it, and it prescribes the one approach you already have a rebuttal for. '
 'Post while it is still this week. (3) Answer the four AGENTS.md split-brain posts sitting at zero replies: '
 + a("@XixiLi12498", "https://x.com/XixiLi12498/status/2093164725521785086") + ", "
 + a("@thedoomguy_ai", "https://x.com/thedoomguy_ai/status/2093149441830048171") + ", "
 + a("@phongdesigns", "https://x.com/phongdesigns/status/2093167020812743075") + ", "
 + a("@AsiBy2030", "https://x.com/AsiBy2030/status/2093179143647269013") + "."
)

SHIPPED_TAKEAWAY = (
 '<b>What this means:</b> Anthropic just published your argument. The playbook opens with "code is no longer the '
 'bottleneck, your SDLC is" and moves human attention "from reading every line to judging intent and risk at the '
 'gates." That is your essay with Anthropic\'s name on it, and it is the single best piece of third-party air cover '
 'you will get this year. <b>But read the second half.</b> Their prescribed answer is markdown artifacts committed '
 'to git: intent.md, spec.md, plan.md. That is exactly the "markdown in the repo" approach you already wrote a '
 'comparison page against. Anthropic has told the whole market to do the thing you argue is not enough. Your move '
 'is not to disagree with the playbook. It is to say yes, and here is what happens when plan.md gets to 4,000 lines '
 'and your designer cannot open it. One more gift buried in there: the playbook asks teams to measure "how often '
 'the merged diff still matches the committed plan.md." That is plan blame, which is already on your roadmap, now '
 'an Anthropic-recommended metric.'
)

BULLETS = [
 '<b>Anthropic validated the category and picked a different answer.</b> The AI-Native SDLC Playbook landed Aug 26 '
 'and is being picked apart all week. It is a tailwind and a threat in the same document. Full reasoning in section 4. '
 'Source: ' + a("claude.com", PLAYBOOK) + ', and '
 + a("Waydev's breakdown", "https://waydev.co/anthropics-ai-native-sdlc-playbook-has-a-missing-layer-measurement/")
 + ', which is a competitor for the measurement layer but useful reading.',

 '<b>The AGENTS.md versus CLAUDE.md split is now the loudest complaint in the category.</b> Nine separate posts in '
 'two days, in five languages, all describing the same thing: different agents read different files, so one team '
 'ends up with two sets of instructions. Nobody is selling the obvious answer, which is that the plan should live '
 'above the harness. That is an open lane and it is yours.',

 '<b>Traycer shipped twice more.</b> HuggingFace open models on Aug 27, mobile confirmed on Aug 28, on top of last '
 'week\'s Desktop and headless host. Their founders replied to individual users on both days. They are not out-'
 'thinking you, they are out-appearing you.',

 '<b>Your own reach is the problem, and here is the number.</b> Your Hacker News submission of '
 + a("“How I design with AI”", "https://news.ycombinator.com/item?id=49458339")
 + ' on Aug 27 got 1 point and 0 comments. Across 196 posts pulled this window about exactly your problem space, '
 'Ref was named by nobody except you. The thinking is landing. The product is not being mentioned.',

 '<b>Two follow-ups from Aug 26 that are still open.</b> '
 + a("@akbrouwer4", "https://x.com/akbrouwer4/status/2092658340434182579")
 + ' ("Memory doesn\'t carry across any of them. I\'m still the router") got a reply from Traycer\'s founder and '
 'nothing from you. '
 + a("@caiopizzol", "https://x.com/caiopizzol/status/2092721310648455255")
 + ' hit Context7\'s quota wall and is still unanswered. Both are outside today\'s window and both are still worth a reply.',
]

SOURCES_NOTE = (
 'X searched via Apify `scraper_one/x-posts-search` on two queries, one for competitor names (`context7`, `traycer`, '
 '`ref.tools`, `spec-driven`) and one for the problem space (`plan mode`, `AGENTS.md`, `lost context`), both `latest` '
 'over 48 hours, 196 posts total. Reddit via `harshmaur/reddit-scraper` across `context7`, `traycer`, `spec kit` and '
 '`plan mode claude`, which returned heavy noise and one useful thread. Hacker News via the Algolia API. All pulled '
 'Aug 28 around 6am PT. Reach means likes, replies and reposts as the tools reported them at pull time. Translations '
 'in square brackets are ours. No ads section: neither Ref nor its competitors run paid social, so there is nothing '
 'to report there.'
)

def _t(s):
    return s.replace('<a href="', '<a target="_blank" rel="noopener" href="')

page = f"""<title>Competitor leads brief, Aug 29</title>
<style>{CSS}</style>
<div class="analysis"><div class="page">
<h1>Competitor leads brief</h1>
<p class="sub">For Matt at Ref, August 29, 2026</p>

<div class="contents"><div class="t">Contents</div><ol>
<li><a href="#stuck">People stuck between agents (reply first)</a></li>
<li><a href="#docs">Docs and context, the Ref Context front</a></li>
<li><a href="#plan">The plan layer, and people arguing your thesis</a></li>
<li><a href="#shipped">What the competition shipped</a></li>
<li><a href="#week">What happened this week</a></li>
<li><a href="#method">Where this came from</a></li>
</ol></div>

<p class="why">{_t(MOVES)}</p>

<h2 id="stuck"><span class="num">1</span>People stuck between agents</h2>
{table(["Where", "Date", "Post", "Reach", "What Matt can do"], rows(STUCK))}

<h2 id="docs"><span class="num">2</span>Docs and context, the Ref Context front</h2>
{table(["Where", "Date", "Post", "Reach", "What Matt can do"], rows(DOCS))}

<h2 id="plan"><span class="num">3</span>The plan layer, and people arguing your thesis</h2>
{table(["Where", "Date", "Post", "Reach", "What Matt can do"], rows(PLAN))}

<h2 id="shipped"><span class="num">4</span>What the competition shipped</h2>
{table(["Date", "Who", "What (click to open)", "Why it matters"], shipped_rows())}
<p class="why">{_t(SHIPPED_TAKEAWAY)}</p>

<h2 id="week"><span class="num">5</span>What happened this week</h2>
<ul>
{''.join(f'<li>{_t(b)}</li>' for b in BULLETS)}
</ul>

<h2 id="method"><span class="num">6</span>Where this came from</h2>
<p class="note">{_t(SOURCES_NOTE)}</p>
</div></div>
"""

out = os.path.join(os.path.dirname(os.path.abspath(__file__)), '08-29-2026.html')
with open(out, 'w') as f:
    f.write(page)
import re as _re
_txt = _re.sub(r'<[^>]+>', ' ', page)
print(out, f"{len(page)/1024:.1f} KB", '| stuck', len(STUCK), 'docs', len(DOCS), 'plan', len(PLAN), 'shipped', len(SHIPPED))
print('  words', len(_txt.split()), '| em/en dashes', _txt.count(chr(8212)) + _txt.count(chr(8211)))
