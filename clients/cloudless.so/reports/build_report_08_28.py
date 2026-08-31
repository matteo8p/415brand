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
# Ten leads, not twenty. Best first. Plain English, no em-dashes.
COMPLAINTS = [
 ("Reddit, r/ClaudeAI", "Aug 27",
  "I'm paranoid about wispr flow stealing my data and I dont want to pay extra, so I just use the built in claude voice feature",
  "https://www.reddit.com/r/ClaudeAI/comments/1vzsgg6/what_microphone_are_you_using_for_your_prompts/", "18 comments",
  "He is worried about his data and he does not want to pay. That is Cloudless in one sentence. He is also right to worry: Wispr's own help page (section 5) says they train on your voice unless you turn it off. Quote it, then tell him about Cloudless."),
 ("Reddit, r/WisprFlow", "Aug 26",
  "Love Wispr Flow on Mac, hate it on iPhone. What am I doing wrong? … I'm constantly switching between keyboards",
  "https://www.reddit.com/r/WisprFlow/comments/1vz0fnk/love_wispr_flow_on_mac_hate_it_on_iphone_what_am/", "26 upvotes, 40 comments",
  "The biggest pile of annoyed iPhone users anywhere this week. It went from 22 comments yesterday to 40 today and nobody from our side has said a word."),
 ("X, @heyamalantony", "Aug 27",
  "@WisprFlow Quality has been terrible lately. FYI, I’ve been using Wispr Flow since you guys launched",
  "https://x.com/heyamalantony/status/2093068822832136511", "4 likes, no replies",
  "He has used it since day one and says it has got worse. Wispr has not answered him. Be the first person who does."),
 ("X, @balaji_ayyappan", "Aug 26",
  "Paid for the whole damn year and now I need to keep correcting it constantly @WisprFlow fix it or refund 😤",
  "https://x.com/balaji_ayyappan/status/2092900275426042275", "1 like, no replies",
  "He paid for a full year and he is asking for his money back in public. The money is already gone, so do not lead with free. Lead with it works and it keeps working."),
 ("X, @HeetShah21", "Aug 27",
  "I’m using @WisprFlow at work via enterprise account and it’s completely unusable right now. There is a noticeably startup lag whenever I press the hotkey.",
  "https://x.com/HeetShah21/status/2093007440577176025", "1 like, no replies",
  "A work account, broken, said out loud. The lag is there because it has to call a server first. Cloudless does not. Worth a reply, and worth writing down for enterprise."),
 ("X, @WeDistill", "Aug 27",
  "WTH my Wispr Flow transcripts got really crappy today",
  "https://x.com/WeDistill/status/2093113896760709160", "0 likes, no replies",
  "Posted a few hours ago and nobody has replied. Short, specific, easy. Start here if you only have five minutes."),
 ("X, @farazpatankar", "Aug 26",
  "Anyone else using @WisprFlow notice it just ignores/eats their first word? Wasn’t happening last week but seems to be happening pretty often today.",
  "https://x.com/farazpatankar/status/2092882617557561469", "1 like, 3 replies",
  "Another it used to work post. Aqua Voice people are already answering in the thread, so get in before they finish."),
 ("X, @thealexbanks", "Aug 26",
  "I’ve recently switched all my dictation from WisprFlow to HeyClicky… I’ve also noticed Wispr recently cuts parts of the transcript",
  "https://x.com/thealexbanks/status/2092948502368170440", "9 likes, 2 replies",
  "He already jumped ship, just to another paid cloud app. He has proved he will move. Free and running on his own laptop is a better place to land."),
 ("X, @charliecoscina", "Aug 27",
  "hey guys, got some issues login in with my apple account since this morning. Been logged out without reason and can’t use the tool since then",
  "https://x.com/charliecoscina/status/2092997348267786451", "0 likes, no replies",
  "He is locked out of something he pays for. Cloudless does not need an account at all. That is the whole reply."),
 ("X, @davidlloayza", "Aug 27",
  "press fn, use wisprflow and then when you want to use the keyboard you have deconfigured the keyboard. It makes the experience with the product very frustrating.",
  "https://x.com/davidlloayza/status/2093069824834351601", "1 like, 1 reply",
  "A real annoyance with a real answer. Holding Caps Lock in Cloudless does not steal his fn key."),
]

SHOPPING = [
 ("X, @ammaar (Google)", "Aug 26",
  "Introducing Gemini 3.5 Transcribe… I vibe coded a Wispr Flow like app powered by the model. Demo + open sourcing below!",
  "https://x.com/ammaar/status/2092662017517600823", "975 likes, 77 replies",
  "Still the busiest room of people asking what to use instead, and we still have not said anything in it. The line to use: Gemini needs the internet, Cloudless does not."),
 ("X, @davidlee", "Aug 27",
  "As a user I just want Apple to buy @WisprFlow or make it the keyboard default. Android experience 10x better and growing reason to stay on Android",
  "https://x.com/davidlee/status/2092990167368040757", "25 likes, 4 replies",
  "He is saying the iPhone keyboard is bad enough that he would change phones over it. Three other dictation founders are already in the replies. Be the fourth."),
 ("X, @hazan0608", "Aug 26",
  "Trying out wispr flow – will report back.",
  "https://x.com/hazan0608/status/2092428953206010096", "16 likes, 13 replies",
  "He is trying it out in public with 13 people waiting to hear how it went. Reply once and you reach all of them."),
 ("X, @Dhananjay_Tech", "Aug 26",
  "If anyone wants Free Wispr Flow Pro to try it out. Even CRED has some offer where you get 10 months Pro for 25000 coins.",
  "https://x.com/Dhananjay_Tech/status/2092921324327080257", "114 likes, 13 replies",
  "A crowd burning credit card points so they do not have to pay for Wispr. They are never going to hand over $15 a month, which makes them the cheapest people on this page to win."),
 ("X, @anwesh_bh", "Aug 27",
  "@amrnth0 would you recommend switching from wisprflow?",
  "https://x.com/anwesh_bh/status/2093119101598040493", "0 likes, no replies",
  "He is asking out loud whether he should switch. Nobody has answered him."),
]

FANS = [
 ("X, @irabukht", "Aug 26",
  "Cursor - 1,100 active ads / 6,400 tested 🤯 | Wispr Flow - 820 / 3,300 | Emergent - 410 / 7,000",
  "https://x.com/irabukht/status/2092743370804171081", "857 likes, 38 replies",
  "Someone counted Wispr's ads from the outside. 820 running at once. That is what you are up against."),
 ("X, @NewsAlgebraIND", "Aug 26",
  "Wispr Flow strikes again: After painting Bengaluru purple with 100 autos, the voice to text app takes over Mumbai & Bangalore airports",
  "https://x.com/NewsAlgebraIND/status/2092525764994617433", "624 likes, 92 reposts",
  "Wispr is buying billboards in India now. With 20 of their 30 new ads pointing at their India page, that is clearly where the money is going."),
 ("X, @rorysutherland", "Aug 26",
  "Wispr Flow *is* occasionally bad, but almost always acceptable - and often *surprisingly good*.",
  "https://x.com/rorysutherland/status/2092567560604520655", "185 likes, 33 replies",
  "A famous ad man saying nice things. But read what he actually said: almost always acceptable. That is the bar. Cloudless does not have to be perfect, just as good."),
 ("X, @WisprFlow", "Aug 27",
  "That vision has always gone beyond dictation. With Notetaker, we’re taking another step toward helping people do more simply by speaking.",
  "https://x.com/WisprFlow/status/2093064881134313804", "71 likes, 9 replies",
  "Wispr is talking about meetings now, not typing. Every day they spend on the notetaker is a day they are not defending the thing you are attacking."),
 ("X, @CandiceRose", "Aug 27",
  "Everyone’s Using This A.I. Dictation App That I Want to Murder With a Hammer (New York Times)",
  "https://x.com/CandiceRose/status/2093017586741002582", "2 replies",
  "The New York Times ran a piece slagging Wispr off. It is the biggest coverage they got all week. Read it before you write any comparison copy."),
]

def rows(items):
    return [[html.escape(w), d, link(t, u), html.escape(r), html.escape(s)] for (w, d, t, u, r, s) in items]

# ---------- Filtered out by Tim's rules (IGNORE_RULES.md) ----------
# Retained as this run's filtering record; not rendered. 47 posts dropped:
# 3 just-subscribed, 6 already on a free competitor, 7 deal spam, 5 affiliate,
# 15 Willow astroturf, 2 Linux-only, 9 off-topic search noise.
DROPPED_COUNT = 47


# Wispr's co-branded Meta ads, counted off the advertiser line in the Ad Library:
# 92 ads across 16 creators (brentvonn 18, Brown Chronicle 12, Ace Consulting 11,
# claytonbirk 9, Angel D 9), and not one launched on Aug 27. Cited in the takeaway below.

# ---------- Creators who posted about Wispr in the last few days ----------
# (who, followers, date, post, url, reach, what-to-do). Aug 24 onward only.
TIKTOK = [
 ("@alliekmiller", "113K", "Aug 26",
  "Here are some of the best AI tools for small businesses… Wispr Flow… Tell me your best replacements in the comments (I’ll steal the good ones)",
  "https://www.tiktok.com/@alliekmiller/video/7678404293057203487", "2,150 views, 14 comments",
  "She is asking people to name a replacement. Just answer her. Best thing on this page."),
 ("@ra.dave", "304K", "Aug 25",
  "Nutzt du Diktiersoftware? (German, “do you use dictation software?”)",
  "https://www.tiktok.com/@ra.dave/video/7678010861641813280", "44,200 views, 3,103 likes, 86 comments",
  "Biggest dictation post of the week by a mile, and the comments are full of people naming tools. Worth a reply. Note Cloudless has French, Spanish and Italian pages but nothing in German."),
 ("@celestemariamiller", "24K", "Aug 24",
  "This is not an ad. I just really love Wispr flow 😂",
  "https://www.tiktok.com/@celestemariamiller/video/7677675595068738829", "34,200 views, 1,311 likes",
  "A real unpaid fan with real reach. Do not argue with her. Send her a free build instead and see what happens."),
 ("@lukegarv.ai", "5.3K", "Aug 27",
  "Comment FLOW and I’ll send it to you!",
  "https://www.tiktok.com/@lukegarv.ai/video/7678761327950564630", "229 views",
  "He is farming Wispr referral links. Ignore him, but his comment section is people actively looking for a dictation app."),
 ("@thorpeedo_", "1.0K", "Aug 27",
  "@Wisprflow’s new functionality blows a lot of them out of the water. It highlights a person’s name…",
  "https://www.tiktok.com/@thorpeedo_/video/7678716810572631310", "277 views",
  "Promoting the meeting notetaker. Useful mainly as a sign of what Wispr is asking creators to talk about now."),
 ("@hearflowusa", "1.1K", "Aug 27",
  "ur using wisprflow, trust me and try hearflow bro",
  "https://www.tiktok.com/@hearflowusa/video/7678791320470621472", "263 views",
  "A rival running exactly your play, on TikTok, yesterday. Nobody is contesting that ground and it costs nothing."),
 ("@toolfinderhq", "646", "Aug 27",
  "Wispr Flow vs Typeless: Here’s our take",
  "https://www.tiktok.com/@toolfinderhq/video/7678810202187042080", "87 views",
  "Small, but it is a channel that makes head-to-head videos and will make more. Get Cloudless in front of them."),
]

def tiktok_rows():
    return [[html.escape(w), html.escape(f), d, link(t, u), html.escape(r), html.escape(todo)]
            for (w, f, d, t, u, r, todo) in TIKTOK]

# Ad counts for Aug 26 and 27, kept for the week-in-review bullets (section removed Aug 28,
# it had no links and nothing to act on): 40 new ads, 32 on Aug 27 and 8 on Aug 26; all 40 from
# Wispr's own account with no creator collabs; 20 of 30 Aug 27 landing pages point at
# wisprflow.ai/india and 8 at /developers; 4 notetaker ads, all on Aug 26; 0 mention accuracy,
# privacy or price.

WILLOW = [
 ("Aug 25", "r/artificialintelligenc", "If agents can act in seconds, why are we still typing tiny prompts?", "https://www.reddit.com/r/artificialintelligenc/comments/1vxwfed/if_agents_can_act_in_seconds_why_are_we_still/"),
 ("Aug 25", "r/artificialintelligenc", "the consultant’s real bottleneck isn’t PowerPoint. it’s turning thinking into text", "https://www.reddit.com/r/artificialintelligenc/comments/1vy068c/the_consultants_real_bottleneck_isnt_powerpoint/"),
 ("Aug 25", "r/careerguidance", "What voice dictation setup works best for freelancers who write all day?", "https://www.reddit.com/r/careerguidance/comments/1vy60yg/what_voice_dictation_setup_works_best_for/"),
 ("Aug 25", "r/AgencyGrowthHacks", "voice workflows for briefs, copy feedback, and AI prompts", "https://www.reddit.com/r/AgencyGrowthHacks/comments/1vy7ojw/voice_workflows_for_briefs_copy_feedback_and_ai/"),
 ("Aug 25", "r/growthmarketing", "best voice-to-text workflow for writing email campaigns faster", "https://www.reddit.com/r/growthmarketing/comments/1vy84fe/best_voicetotext_workflow_for_writing_email/"),
 ("Aug 25", "r/B2BSales", "a faster way to keep Salesforce notes current", "https://www.reddit.com/r/B2BSales/comments/1vy8fvb/a_faster_way_to_keep_salesforce_notes_current/"),
 ("Aug 25", "r/AssistiveTechnology", "the product decision behind free unlimited dictation", "https://www.reddit.com/r/AssistiveTechnology/comments/1vy98lp/the_product_decision_behind_free_unlimited/"),
 ("Aug 27", "r/customerexperience", "can voice dictation actually reduce ticket response time?", "https://www.reddit.com/r/customerexperience/comments/1vzo7g1/can_voice_dictation_actually_reduce_ticket/"),
 ("Aug 27", "r/mac", "Apple Dictation vs Willow vs Superwhisper on macOS", "https://www.reddit.com/r/mac/comments/1vzq0l1/apple_dictation_vs_willow_vs_superwhisper_on_macos/"),
 ("Aug 27", "r/LargeLanguageModels", "evaluating AI dictation for healthcare: speed is the easy part", "https://www.reddit.com/r/LargeLanguageModels/comments/1vzqb4a/evaluating_ai_dictation_for_healthcare_speed_is/"),
 ("Aug 27", "r/lawfirms", "best legal dictation software for a small law firm in 2026", "https://www.reddit.com/r/lawfirms/comments/1vzr0np/best_legal_dictation_software_for_a_small_law/"),
 ("Aug 27", "r/ADHDthriving", "voice prompting helped with the blank-screen problem", "https://www.reddit.com/r/ADHDthriving/comments/1vzre3w/voice_prompting_helped_with_the_blankscreen/"),
 ("Aug 27", "r/artificialintelligenc", "can voice dictation actually reduce ticket response time? (same title as the r/customerexperience one)", "https://www.reddit.com/r/artificialintelligenc/comments/1vzsd0w/can_voice_dictation_actually_reduce_ticket/"),
 ("Aug 27", "r/Learnmusicproduction", "voice capture vs voice composition: a better notes workflow", "https://www.reddit.com/r/Learnmusicproduction/comments/1vzto31/voice_capture_vs_voice_composition_a_better_notes/"),
 ("Aug 27", "r/Notion", "best voice-to-text workflow for writing directly into Notion", "https://www.reddit.com/r/Notion/comments/1vztzam/best_voicetotext_workflow_for_writing_directly/"),
]

def willow_lines():
    """One line per day, every post linked by its subreddit. Compact but fully sourced."""
    out = []
    for day in ("Aug 25", "Aug 27"):
        posts = [(sub, t, u) for (d, sub, t, u) in WILLOW if d == day]
        links = ", ".join(f'<a href="{html.escape(u)}" title="{html.escape(t)}">{html.escape(sub)}</a>'
                          for sub, t, u in posts)
        out.append(f'<li><b>{day}, {len(posts)} posts:</b> {links}</li>')
    return "".join(out)

FAQ = "https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq"
ADLIB = ("https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL"
         "&view_all_page_id=110864474787474&search_type=page&media_type=all"
         "&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped")
RCLAUDE = "https://www.reddit.com/r/ClaudeAI/comments/1vzsgg6/what_microphone_are_you_using_for_your_prompts/"

def a(text, url):
    return f'<a href="{html.escape(url)}">{text}</a>'

# ---------- Shared prose. The email imports these, so the two cannot drift. ----------
MOVES = (
 f'<b>Three things to do today:</b> (1) Reply in the {a("r/ClaudeAI microphone thread", RCLAUDE)}. '
 'Someone in there says he is “paranoid about wispr flow stealing my data and I dont want to pay extra”, '
 f'which is Cloudless in one sentence, and {a("Wispr’s own help page", FAQ)} now backs him up. '
 '(2) Write up the privacy find yourself (section 5). Wispr says they train on your voice by default on the '
 'free and standard plans, and only leave you alone on enterprise. That is a post, not a reply. '
 '(3) Answer the Aug 27 complaints nobody has replied to yet: '
 + a("@heyamalantony", "https://x.com/heyamalantony/status/2093068822832136511") + ", "
 + a("@WeDistill", "https://x.com/WeDistill/status/2093113896760709160") + ", "
 + a("@HeetShah21", "https://x.com/HeetShah21/status/2093007440577176025") + ", "
 + a("@charliecoscina", "https://x.com/charliecoscina/status/2092997348267786451") + "."
)

CREATORS_INTRO = (
 'Everyone who posted about Wispr in the last few days, newest first. All from Aug 24 onwards, all linked.'
)

CREATORS_TAKEAWAY = (
 '<b>What this means:</b> TikTok is wide open. Wispr has 92 co-branded ads running on Meta across 16 creators, '
 'but they did not put a creator on a single one of the 32 ads they launched on Aug 27. On TikTok right now it is '
 'mostly small accounts chasing referral links, and a rival with 1,092 followers is already running your play '
 'there. Cloudless has almost no presence on TikTok at all.'
)

PRIVACY_INTRO = (
 f'Wispr updated their {a("security help page", FAQ)} on Aug 26. Two bits are worth keeping in your pocket. '
 'Both are word for word.'
)

PRIVACY_QUOTES = [
 ("They train on your voice unless you pay for enterprise.",
  "“Privacy Mode off (standard mode): audio and transcription data may be used to evaluate, train, and improve "
  "Wispr’s models. This is the default for trial and standard accounts.” And then: “Enterprise and HIPAA BAA "
  "customers run with Privacy Mode on by default.”"),
 ("They cancelled their own security certificates in March.",
  "“Both were proactively invalidated in March 2026 due to platform integrity concerns at the original auditor.” "
  "They only hold a SOC 2 Type I now (April 2026). The Type II is “observation period underway; report not yet issued.”"),
]

PRIVACY_TAKEAWAY = (
 '<b>How to use it:</b> this is the best week you have had for the privacy argument, because you are not the one '
 'making it. Wispr wrote it down themselves, quite openly. The same page also admits Flow “is not end-to-end '
 'encrypted… audio must be decrypted to produce a transcription”. That is the whole point. If it runs in the cloud '
 'it has to work that way. If it runs on your laptop it does not. One thing to watch: Cloudless has no SOC 2 either, '
 'so talk about how it is built, not about certificates.'
)

WILLOW_INTRO = (
 'You asked for the links, so here they are. Fifteen posts, fifteen subreddits, fifteen brand new accounts, over '
 'three days. Every one is the same: it opens with “I started researching…”, lists four options with pros and cons, '
 'puts Wispr third with the same complaints copied over each time, puts Willow fourth, then says go with Willow. '
 'Two of them have the exact same title. None got more than 3 upvotes.'
)

WILLOW_TAKEAWAY = (
 '<b>What this means:</b> do not reply to these, there is nobody home. But look at what Willow reckons Wispr is weak '
 'on, because it is your list too: the word limit, privacy, and it has got worse lately. Willow’s own copy admits '
 'they have no Linux and that switching languages is buggy.'
)

BULLETS = [
 '<b>Wispr’s own help page says they train on your voice by default</b> if you are on the free or standard plan, '
 'and only leave you alone on enterprise. The same page says they cancelled their own SOC 2 and ISO certificates in '
 'March because of “platform integrity concerns at the original auditor”. Source: '
 + a("Wispr Flow security and compliance FAQ", FAQ) + ', updated Aug 26.',

 '<b>Wispr’s influencer programme went quiet.</b> They have 92 co-branded ads live across 16 creators, but not '
 'one of the 32 ads they launched on Aug 27 has a creator on it. Meanwhile the biggest Wispr video on TikTok in '
 'the last month is a 507K-follower one called '
 + a("“Free Wispr Flow Alternatives”", "https://www.tiktok.com/@benkaluza/video/7640596377453546774")
 + ' that does not mention Cloudless.',

 '<b>Willow is still faking Reddit posts.</b> Fifteen of them from fifteen new accounts across fifteen subreddits on '
 'Aug 25 and Aug 27, every one pointing at Willow. All the links are in section 6.',

 '<b>Wispr’s ad money moved to India and developers overnight.</b> All 32 ads they launched on Aug 27 come from their '
 'own account with no influencers, 20 of the 30 point at their India page, and the notetaker ads stopped after Aug 26. '
 'Source: ' + a("Meta Ad Library", ADLIB) + '. They are doing it offline too, with '
 + a("takeovers at Mumbai and Bangalore airports", "https://x.com/NewsAlgebraIND/status/2092525764994617433") + '.',

 '<b>The complaints about accuracy kept coming.</b> Six more over Aug 26 and 27, including someone who has used it '
 'since launch (' + a("@heyamalantony", "https://x.com/heyamalantony/status/2093068822832136511")
 + '), someone who paid for a year and wants a refund ('
 + a("@balaji_ayyappan", "https://x.com/balaji_ayyappan/status/2092900275426042275")
 + ') and a work account that is simply broken ('
 + a("@HeetShah21", "https://x.com/HeetShah21/status/2093007440577176025") + ').',

 '<b>The Google thing is still the biggest conversation in the category</b> ('
 + a("975 likes, 77 replies", "https://x.com/ammaar/status/2092662017517600823")
 + '), and the New York Times ran a piece called '
 + a("“the A.I. dictation app that I want to murder with a hammer”", "https://x.com/CandiceRose/status/2093017586741002582")
 + '. Wispr has not answered either one.',
]

SOURCES_NOTE = (
 'We searched X, Reddit and LinkedIn for “wispr flow”, “wisprflow” and @WisprFlow (X twice, once for '
 'newest and once for most popular), read Wispr Flow’s page in the Meta Ad Library, and searched TikTok for “wispr flow”. All pulled Aug 27 around 5pm '
 'PT. The Wispr quotes in section 5 are word for word from ' + a("docs.wisprflow.ai", FAQ) + '. Reach means likes, '
 f'replies and reposts at the time we looked. Another {DROPPED_COUNT} posts were left out under the standing ignore '
 'rules. Everything here links back to where it came from.'
)

def _target(s):
    return s.replace('<a href="', '<a target="_blank" rel="noopener" href="')

page = f"""<title>Wispr Flow daily brief, Aug 28</title>
<style>{CSS}</style>
<div class="analysis"><div class="page">
<h1>Wispr Flow daily brief</h1>
<p class="sub">For Tim at Cloudless, August 28, 2026</p>

<div class="contents"><div class="t">Contents</div><ol>
<li><a href="#complaints">People complaining about Wispr (reply first)</a></li>
<li><a href="#shopping">People shopping around or on the fence</a></li>
<li><a href="#fans">People happy with Wispr</a></li>
<li><a href="#creators">Creators posting about Wispr right now</a></li>
<li><a href="#privacy">What Wispr admits about your data</a></li>
<li><a href="#willow">Willow’s fake Reddit posts</a></li>
<li><a href="#today">What happened this week</a></li>
<li><a href="#method">Where this came from</a></li>
</ol></div>

<p class="why">{_target(MOVES)}</p>

<h2 id="complaints"><span class="num">1</span>People complaining about Wispr</h2>
{table(["Where", "Date", "Post", "Reach", "What Tim can do"], rows(COMPLAINTS))}

<h2 id="shopping"><span class="num">2</span>People shopping around or on the fence</h2>
{table(["Where", "Date", "Post", "Reach", "What Tim can do"], rows(SHOPPING))}

<h2 id="fans"><span class="num">3</span>People happy with Wispr</h2>
{table(["Where", "Date", "Post", "Reach", "Why it matters"], rows(FANS))}

<h2 id="creators"><span class="num">4</span>Creators posting about Wispr right now</h2>
<p>{CREATORS_INTRO}</p>
{table(["Creator", "Followers", "Date", "Post", "Reach", "What Tim can do"], tiktok_rows(), numeric=(1,))}
<p class="why">{CREATORS_TAKEAWAY}</p>

<h2 id="privacy"><span class="num">5</span>What Wispr admits about your data</h2>
<p>{_target(PRIVACY_INTRO)}</p>
{''.join(f'<blockquote><b>{lead}</b><br>{q}</blockquote>' for lead, q in PRIVACY_QUOTES)}
<p class="why">{PRIVACY_TAKEAWAY}</p>

<h2 id="willow"><span class="num">6</span>Willow’s fake Reddit posts</h2>
<p>{WILLOW_INTRO}</p>
<ul>{_target(willow_lines())}</ul>
<p class="why">{WILLOW_TAKEAWAY}</p>

<h2 id="today"><span class="num">7</span>What happened this week</h2>
<ul>
{''.join(f'<li>{_target(b)}</li>' for b in BULLETS)}
</ul>

<h2 id="method"><span class="num">8</span>Where this came from</h2>
<p class="note">{_target(SOURCES_NOTE)}</p>
</div></div>
"""

out = os.path.join(os.path.dirname(os.path.abspath(__file__)), '08-28-2026.html')
with open(out, 'w') as f:
    f.write(page)
import re as _re
_txt = _re.sub(r'<[^>]+>', ' ', page)
print(out, f"{len(page)/1024:.1f} KB", '| complaints', len(COMPLAINTS), 'shopping', len(SHOPPING),
      'fans', len(FANS), 'creators', len(TIKTOK), 'willow', len(WILLOW), '| words', len(_txt.split()))
print('  em/en dashes in rendered text:', _txt.count('—') + _txt.count('–'))
