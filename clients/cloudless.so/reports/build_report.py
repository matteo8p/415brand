import html

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
# ---------- 1. Complaining about Wispr ----------
COMPLAINTS = [
 ("X, @michellezfr", "Aug 25",
  "Why is Wispr flow so shit these days? I yapped for 6 minutes straight and it gave me 2 words back. Im switching to Aqua voice",
  "https://x.com/michellezfr/status/2092260979811791105", "5 likes, 1 reply",
  "Lost a 6-minute dictation, already shopping. Reply before she settles on Aqua."),
 ("X, @InfiniteKoenig", "Aug 26",
  "Big fan of the product. Have been using it for many months now. Recently it has been getting worse and slower… Words coming out really wrong. Software change? Cheaper model? Anyone else notice this?",
  "https://x.com/InfiniteKoenig/status/2092662847960482095", "0 likes, no replies yet",
  "Paying user asking if Wispr got worse. No one has answered. Be the first reply."),
 ("X, @manosaie", "Aug 25",
  "I’m annoyed that I got so used to blasting LLMs with WisprFlow when it used to work that I now find everything else too slow and painful",
  "https://x.com/manosaie/status/2092030437459677461", "7 likes, 4 replies",
  "“When it used to work.” Heavy AI-prompting user who feels stuck. Reply: Cloudless does the same job, free."),
 ("X, @RobReichJr", "Aug 26",
  "I love using Wispr Flow, but that iOS update really annoys me and keeps me from using.",
  "https://x.com/RobReichJr/status/2092659711267012850", "3 likes, 2 replies",
  "Quit over the iPhone update. Wispr hasn’t replied. Pitch the Cloudless iOS app."),
 ("X, @JerimiahLee", "Aug 25",
  "I use it exclusively on my Mac. Took it off my phone because it’s comically bad.",
  "https://x.com/JerimiahLee/status/2092081370885427305", "8 likes, 1 reply",
  "Thread started by @CristinCulver about Wispr on iPhone; several pile on. Reply to the thread with the iOS link."),
 ("X, @jasonmok", "Aug 25",
  "I’ve downloaded and uninstalled it multiple times. I keep wanting to be wrong here.",
  "https://x.com/jasonmok/status/2092085684748386763", "2 likes, 1 reply",
  "Same thread. Wants dictation to work, Wispr keeps disappointing him. “Give ours a shot.”"),
 ("X, @yoki_builds", "Aug 26",
  "Wispr flow on my phone works fine, but it’s still not my default keyboard… I prefer to type sometimes when I am in public and Wispr’s keyboard is kind of annoying.",
  "https://x.com/yoki_builds/status/2092670952484249862", "0 likes",
  "Keyboard complaint sent straight to Wispr’s founder. If Cloudless’s iOS keyboard is better to type on, say so."),
 ("X, @marcelolx_", "Aug 26",
  "Hey @WisprFlow, mind fixing this? I don’t want a shortcut for “Join meeting / start Notetaker”, but every time I restart Wispr Flow, you guys set the shortcut again. Please stop.",
  "https://x.com/marcelolx_/status/2092569435236147336", "0 likes",
  "Wispr keeps forcing its Notetaker shortcut on him. Reply: Cloudless just does dictation."),
 ("X, @AndressBolivarr", "Aug 26",
  "Wow thats sick, I literally just subscribed to wispr flow for a year 😭",
  "https://x.com/AndressBolivarr/status/2092722722077835563", "0 likes",
  "Buyer’s remorse after the Google news; also asked “is it better than Wispr?” Tell him Cloudless is free to try."),
 ("X, @just_vitto", "Aug 26",
  "Hot take: you are pretty dumb if you pay any annual subscription in the AI era… Guess who paid for @WisprFlow annual plan? 🤡",
  "https://x.com/just_vitto/status/2092724150750044214", "0 likes",
  "Regrets paying for a year. “Free” is the whole message."),
 ("X, @curiously729", "Aug 26",
  "My hypothesis on why @WisprFlow will not sustain is that they provide 2000 words for free per week. A physical keyboard provides unlimited free words per week.",
  "https://x.com/curiously729/status/2092733839131242562", "0 likes",
  "Hates the 2,000-word weekly cap. Reply: no word limit."),
 ("X, @benjp009 (FR)", "Aug 26",
  "Trop injuste, on est sur iPhone nous… 1,000 mots c’est quoi ? 10 minutes ? (“So unfair for us iPhone users… 1,000 words is what, 10 minutes?”)",
  "https://x.com/benjp009/status/2092652530656313579", "0 likes, 2 replies",
  "iPhone free tier is 1,000 words. Reply in French: iOS, free, no cap."),
 ("X, @shubvastav", "Aug 26",
  "I really, really wanted @WisprFlow to be the magical always-on AI that it has the potential to be, but alas",
  "https://x.com/shubvastav/status/2092711659416752362", "2 likes, 1 reply",
  "Disappointed fan. Soft target for a friendly reply."),
 ("X, @mountbranch", "Aug 25",
  "Been using Wispr flow and Superwhisper for the last couple of days and I’m not impressed. Very unergonomic. I’ll just wait for the integrated dictation tool to get better",
  "https://x.com/mountbranch/status/2092499292640387281", "2 likes, 1 reply",
  "Tried two paid apps, gave up. “One key, free” reply fits."),
 ("X, @adarshsolanki", "Aug 26",
  "wispr flow takes gigabytes???? spokenly uses 60MB and fully local transcription",
  "https://x.com/adarshsolanki/status/2092652667751272518", "1 like, 1 reply",
  "Install size complaint. If Cloudless is small, give the number."),
 ("X, @DrDatta_AIIMS", "Aug 26",
  "I switched from Wispr Flow to Sarvam Kivi just a day back and it has been phenomenal",
  "https://x.com/DrDatta_AIIMS/status/2092687198047109373", "7 likes, 1 repost",
  "Already left for an Indian-language tool. Not worth chasing."),
 ("Reddit, r/WisprFlow", "Aug 26",
  "Love Wispr Flow on Mac, hate it on iPhone. What am I doing wrong?",
  "https://www.reddit.com/r/WisprFlow/comments/1vz0fnk/love_wispr_flow_on_mac_hate_it_on_iphone_what_am/", "11 upvotes, 18 comments",
  "Biggest complaint thread of the week, in Wispr’s own subreddit. iPhone keyboard keeps listening after you tap done; corrections are painful. Comment with how Cloudless on iOS handles it."),
 ("Reddit, r/WisprFlow", "Aug 26",
  "iphone action button user experience",
  "https://www.reddit.com/r/WisprFlow/comments/1vyqltv/iphone_action_button_user_experience/", "5 upvotes, 4 comments",
  "Considering an iPhone 17 just to make Wispr usable. No one has a demo video. If Cloudless works with the Action Button, a 20-second video wins the thread."),
 ("Reddit, r/SaaS", "Aug 26",
  "Why does WisprFlow offer unlimited dictation (free plan) on Android and not iOS/Windows?",
  "https://www.reddit.com/r/SaaS/comments/1vyqbjb/why_does_wisprflow_offer_unlimited_dictation_free/", "3 upvotes, 3 comments",
  "Wispr’s free plan is unlimited on Android, capped on iPhone and Windows. Comment: Cloudless is unlimited on all three."),
 ("Reddit, r/betatesters", "Aug 26",
  "I’ve been pretty frustrated with the performance of Wispr Flow on Windows over the past few months, so I ended up building my own alternative",
  "https://www.reddit.com/r/betatesters/comments/1vyw49s/transcription_tool_like_wispr_flow/", "1 upvote",
  "Windows user unhappy enough to build his own. Cloudless supports Windows; most free alternatives don’t."),
 ("Reddit, r/AIToolsTipsNews", "Aug 26",
  "Wispr raised $280M and shipped Canto. Their own FAQ says free and standard accounts are in the training data by default",
  "https://www.reddit.com/r/AIToolsTipsNews/comments/1vyoopv/wispr_raised_280m_and_shipped_canto_their_own_faq/", "1 upvote, 1 comment",
  "Wispr trains on free and standard users’ dictations unless they opt out. Best privacy talking point for Cloudless; save it for replies."),
 ("Reddit, r/MacOSBeta", "Aug 24",
  "Siri app and Wispr Flow - weird behavior… the Wispr Flow main app screen will launch and grab attention",
  "https://www.reddit.com/r/MacOSBeta/comments/1vx1efz/siri_app_and_wispr_flow_weird_behavior/", "1 upvote",
  "Unanswered bug report in a Mac beta community."),
 ("LinkedIn, Artem Vysotsky", "Aug 26",
  "Wispr Flow and superwhisper don’t get it… Neither does bi-lingual transcription well",
  "https://www.linkedin.com/posts/avysotski_there-are-390-million-of-native-english-speakers-activity-7498477742527676416-LY6I", "1 like, 3 comments",
  "Competitor, don’t pitch. But mixed-language speech is a gap several people raised this week; if Cloudless handles it, say so."),
 ("LinkedIn, Shashank Srivastava (Google)", "Aug 26",
  "5 bills then. 22 now… Desires: Netflix, Prime Video, Hotstar, YouTube Premium, Whoop, Mint, ET Now, Moneycontrol, Wisprflow",
  "https://www.linkedin.com/posts/ishashank1_i-was-comparing-my-monthly-spend-pattern-activity-7498246227684315137-ifMc", "16 likes, 1 comment",
  "Subscription fatigue; Wispr listed as a “desire.” Light comment: “the dictation one can be free.”"),
]

# ---------- 2. Shopping / on the fence ----------
SHOPPING = [
 ("X, @ammaar (Google)", "Aug 26",
  "Introducing Gemini 3.5 Transcribe… I vibe coded a Wispr Flow like app powered by the model. Demo + open sourcing below!",
  "https://x.com/ammaar/status/2092662017517600823", "399 likes, 40 replies, 23 reposts, 16 quotes",
  "Google’s new speech model, plus a Googler’s Wispr look-alike. Replies are full of people asking what to use now. Reply today: “already works on Mac, Windows and iPhone, and free.”"),
 ("X, @gregisenberg", "Aug 26",
  "Added to my to-do list today: Vibe code a Wispr Flow app using Gemini 3.5 and make it perfect/personalized to me.",
  "https://x.com/gregisenberg/status/2092667749969396208", "27 likes, 5 replies",
  "Big founder audience, about to build his own Wispr. Reply: “don’t bother, Cloudless.”"),
 ("X, @ayuxhtwt", "Aug 26",
  "idk why ppl are paying for wisprflow. i’ve been using an open sourced clone of it which runs locally… works pretty well even if i speak in hindi",
  "https://x.com/ayuxhtwt/status/2092588430098342197", "51 likes, 12 replies, 2 quotes",
  "The “why pay” crowd, 12 replies deep. Cloudless = free and local without setting up a GitHub project. Reply to the thread."),
 ("X, @Zoeillle (FR)", "Aug 26",
  "Branchez vous @WisprFlow c’est incroyable ptdrrr (“Get on Wispr Flow, it’s incredible”)",
  "https://x.com/Zoeillle/status/2092612756058894464", "27 likes, 25 replies",
  "25 replies naming other tools (VoiceInk, superwhisper, Raycast). Nobody has mentioned Cloudless. Reply in French."),
 ("X, @hazan0608", "Aug 25",
  "Trying out wispr flow – will report back.",
  "https://x.com/hazan0608/status/2092428953206010096", "15 likes, 11 replies",
  "Public trial starting. Reply “try Cloudless alongside it” so the follow-up includes you."),
 ("X, @llm_wizard", "Aug 25",
  "All right fine. All you voice people won: I am now using Wispr Flow and we’ll see. I’ll report back with findings.",
  "https://x.com/llm_wizard/status/2092092268131832073", "19 likes, 6 replies, 5 reposts",
  "Sceptic doing a public trial with an audience. Suggest a head-to-head."),
 ("X, @m_saharia", "Aug 26",
  "I would love to have a replacement for Wispr Flow… I will happily pay equivalent for a fully integrated voice to text tool",
  "https://x.com/m_saharia/status/2092679106966196291", "6 likes, 4 replies",
  "Asking for a Wispr replacement, willing to pay. Reply."),
 ("X, @Ollie_hcafc87 / @RaghavRajSah / @heyAIguy / @picogeek06 / @arapilkc", "Aug 26",
  "“How does it compare to @WisprFlow”, “is it better than wisprflow?”, “Is this the end of @WisprFlow?”, “goodbye @WisprFlow?”, “Did it kill those zillions of text to speech startups?”",
  "https://x.com/Ollie_hcafc87/status/2092672266257436725", "0–1 likes each",
  "Five people asking whether to leave Wispr after the Google news. None has an answer yet."),
 ("X, @bakathesussy", "Aug 26",
  "You guys could make a free Wispr Flow killer with this, what are you doing",
  "https://x.com/bakathesussy/status/2092660703933124882", "8 likes",
  "Wants a free Wispr killer. Reply: it exists."),
 ("X, @R1_Apps (FR)", "Aug 26",
  "Surcôté, VoiceInk est mieux, opensource et moins cher… fonctionne en local… licence à vie sans abonnement (“Overrated, VoiceInk is better… works locally… lifetime licence, no subscription”)",
  "https://x.com/R1_Apps/status/2092711136235859994", "0 likes",
  "French users want local and no subscription. Cloudless has both and is free; VoiceInk isn’t."),
 ("X, @fahadidrees", "Aug 26",
  "The real gatekeeper isn’t Wispr Flow. It’s macOS built-in dictation. People try it for free, it mangles their words, and they conclude voice dictation just doesn’t work.",
  "https://x.com/fahadidrees/status/2092693365322105291", "0 likes",
  "Messaging note: people equate “free” with Apple’s bad dictation. Say “free and accurate.”"),
 ("X, @JohnCorcoran", "Aug 25",
  "I think Apple is trying to kill them. Their next iOS update coming out next month supposedly uses Gemini for vastly better speech to text. Have you tried fluid voice?",
  "https://x.com/JohnCorcoran/status/2092117932969169040", "2 likes, 2 replies",
  "Users recommend alternatives to each other in Wispr threads (FluidVoice here). Cloudless only gets named if Tim shows up."),
 ("Reddit, r/osx", "Aug 26",
  "Dictate: A free, local-first alternative to Wispr Flow for macOS",
  "https://www.reddit.com/r/osx/comments/1vyhwgl/dictate_a_free_localfirst_alternative_to_wispr/", "5 upvotes, 4 comments",
  "Competitor launch, but the commenters are Cloudless’s audience. Comment: Cloudless also covers Windows and iPhone."),
 ("Reddit, r/ProductivityApps", "Aug 26",
  "I cut transcription latency from 4s to below 700ms p90. Here’s what I learned from Wispr Flow and superwhisper",
  "https://www.reddit.com/r/ProductivityApps/comments/1vz6jhm/i_cut_transcription_latency_from_4s_to_below/", "2 upvotes",
  "Competitor sharing speed numbers. If Cloudless is fast, this subreddit wants the number."),
 ("Reddit, r/apps", "Aug 24",
  "RMBLR: free, open-source Android dictation that survives switching languages mid-sentence. “I paid for Wispr Flow for months and I still rate it for straight English… my problem is that I don’t talk in one language.”",
  "https://www.reddit.com/r/apps/comments/1vwn8ki/rmblr_free_opensource_android_dictation_that/", "1 upvote",
  "Ex-Wispr payer who left over mixed-language dictation. Second time this gap shows up."),
 ("Reddit, r/IndiaDealsExchange", "Aug 25",
  "[H] Wispr Flow Pro 10 Months [W] ₹900–1000 UPI (three separate listings)",
  "https://www.reddit.com/r/IndiaDealsExchange/comments/1vxqbli/h_wispr_flow_pro_10_months_w_950_upi/", "3 listings, 10 comments",
  "Wispr Pro codes resold for about $11 for 10 months. India is price-sensitive; free wins."),
 ("LinkedIn, Maurizio Blötscher (Superchat)", "Aug 26",
  "We put three colleagues on Raycast Dictate and three on Wispr Flow and let them fight it out",
  "https://www.linkedin.com/posts/maurizio-bl%C3%B6tscher_raycast-activity-7498386293412962304-b8vL", "6 likes, 2 comments",
  "Company running a dictation bake-off. Offer Cloudless as a third option (free, no procurement)."),
 ("LinkedIn, Vikrant Shukla (Adobe)", "Aug 25",
  "Two apps, side by side: Wispr Flow and FluidVoice. I picked up Wispr Flow as part of a discounted deal… FluidVoice…",
  "https://www.linkedin.com/posts/shuklavikrant_ai-productivity-opensource-activity-7497825910965030912-K3IW", "10 likes, 2 comments",
  "Month-long comparison. Ask him to add Cloudless."),
 ("LinkedIn, Johanna Valkonen", "Aug 26",
  "Everyone wanted to talk about Wispr Flow. It lets you speak instead of type inside Claude, and it handles Finnish better than anything else I’ve tried",
  "https://www.linkedin.com/posts/johanna-valkonen_last-week-i-posted-about-voice-control-inside-activity-7498393969840553986-8kze", "7 likes, 5 comments",
  "A Wispr employee showed up in her comments. If Cloudless handles Finnish, join the thread."),
]

# ---------- 3. Happy with Wispr ----------
FANS = [
 ("X, @NewsAlgebraIND", "Aug 26",
  "Wispr Flow strikes again: after painting Bengaluru purple with 100 autos, the voice to text app takes over Mumbai & Bangalore airports",
  "https://x.com/NewsAlgebraIND/status/2092525764994617433", "746 likes, 95 reposts",
  "Wispr’s biggest post of the week is billboards in India. Wispr is spending heavily there."),
 ("X, @rorysutherland", "Aug 26",
  "Wispr Flow is occasionally bad, but almost always acceptable, and often surprisingly good",
  "https://x.com/rorysutherland/status/2092567560604520655", "118 likes, 24 replies",
  "Famous ad man praising Wispr. The 24 replies include people asking what else to try."),
 ("X, @WisprFlow", "Aug 25",
  "If your music is distracting you while dictating, we’ve got you covered.",
  "https://x.com/WisprFlow/status/2092417179736232383", "93 likes, 20 replies",
  "Shipped a feature one day after a user asked on X. Wispr moves fast when complaints get loud."),
 ("X, @jainmayank_943", "Aug 26",
  "Cancelled @meetgranola. Tried @WisprFlow’s note-taker on a whim… nearly as good, and I imported all my Granola data straight in.",
  "https://x.com/jainmayank_943/status/2092569645975031959", "3 likes",
  "First Granola-to-Wispr switch we’ve seen. Wispr is becoming a bundle; Cloudless’s pitch is one thing, done well, free."),
 ("X, @ronyspark", "Aug 26",
  "I’ve written a whole book 🤯 Apparently that’s how much I have “typed” using @WisprFlow in just the first two weeks",
  "https://x.com/ronyspark/status/2092686685645730064", "1 like",
  "Wispr’s “words dictated” counter makes people post. Cheap feature to copy."),
 ("LinkedIn, Harnidh K.", "Aug 25",
  "No tech will go mainstream till the girlies love it… the dark horse here is wisprflow, the girlies are using it SO MUCH esp when they’re running errands",
  "https://www.linkedin.com/posts/harnidhk_no-tech-will-go-mainstream-till-the-girlies-activity-7497857556841889792-LYkk", "281 likes, 18 comments",
  "Biggest LinkedIn post of the week. Women using Wispr on the go means on the phone, where Wispr is weakest."),
 ("LinkedIn, Kevin “KD” Dorsey", "Aug 25",
  "Working from a lazy boy recliner… with Wisprflow absolutely saving my life",
  "https://www.linkedin.com/posts/kddorsey3_god-i-dont-know-why-it-took-me-so-long-to-activity-7498103690285740032-6_Xh", "29 likes, 32 comments",
  "Injury/accessibility story. These come up weekly and are the warmest way in."),
 ("LinkedIn, Liam Darmody", "Aug 26",
  "I have saved myself nearly 6 days of typing by dictating nearly 600,000 words through Wispr Flow in the last year",
  "https://www.linkedin.com/posts/liamdarmody1_old-habits-die-hard-even-though-i-have-activity-7498399321688588288-vEWY", "11 likes, 28 comments",
  "Power user. The 28 comments are people curious about dictation."),
 ("LinkedIn, How to Talk to AI (96K followers)", "Aug 25",
  "Wisprflow turns your voice into text automatically, so a 10-minute prompt takes you 1 min to say",
  "https://www.linkedin.com/posts/ai-and-me_you-think-youre-getting-the-most-out-of-activity-7497892017499443200-j19u", "57 likes, 8 comments",
  "Big AI-tips page naming Wispr as “the way to talk to Claude.” Getting into lists like this beats any single reply."),
 ("LinkedIn, Sahaj Garg / Lyndall Schreiner / Daniel McCallum (Wispr CTO, Chief of Staff, CMO)", "Aug 26",
  "“— Written with Wispr Flow”; “Lenny put Wispr Flow on his top 100 places to work”; “Our European Evangelist found us because of a sticker on a urinal in Berlin”",
  "https://www.linkedin.com/posts/danielmccallum_our-european-evangelist-found-us-because-activity-7498412698401927168-MIaW", "14–39 likes each",
  "Wispr leadership: three LinkedIn posts, zero on X. The complaints on X and Reddit are unattended."),
]

def rows(items):
    return [[html.escape(w), d, link(t, u), html.escape(r), html.escape(s)] for (w, d, t, u, r, s) in items]

AD_STATS = [
 ["New ads launched Aug 24–26", "114", "108 on Aug 24, 4 on Aug 25, 2 on Aug 26"],
 ["About the meeting Notetaker", "50", "Almost half. Wispr is now selling meeting notes as hard as dictation"],
 ["Made by influencers", "54", "brentvonn 18, Ace Consulting 11, claytonbirk 9, Brown Chronicle 5"],
 ["Made by Wispr itself", "60", "First batch where Wispr’s own ads outnumber influencer ads"],
 ["Already marked “low impressions” by Meta", "30", "Meta says under 100 views after two days"],
 ["Mention Claude by name", "9", "e.g. “Hey Claude, whose call was it to change the rate limits?”"],
 ["Mention accuracy of dictation", "0", "Not one of the 114 ads claims Wispr is accurate"],
]

ADS = [
 ("Aug 26", "Wispr Flow", "Big Words, Spelled Right",
  "Watch it spell supercalifragilisticexpialidocious. Then decide whether the notetaker you already pay for would have.",
  "https://www.facebook.com/ads/library/?id=4491158611142005"),
 ("Aug 26", "Wispr Flow", "Type at the speed of talk",
  "Hold one key, talk, and it lands as clean text. 4x faster than typing, no joke.",
  "https://www.facebook.com/ads/library/?id=2264268464341704"),
 ("Aug 25", "Wispr Flow", "Get every name right",
  "Meetings are full of names and terms that ordinary notetakers get wrong. Wispr Notetaker captures the hard ones, from SOC 2 to Auth0 to Sentry.",
  "https://www.facebook.com/ads/library/?id=2071978136743534"),
 ("Aug 25", "Wispr Flow with Ace Consulting", "Inbox on the go",
  "Typing professional emails on a plane is brutal. Flow lets you speak them, fully formatted, in any email app.",
  "https://www.facebook.com/ads/library/?id=4734175883484048"),
 ("Aug 24", "Wispr Flow", "Skip the Copy and Paste",
  "Hey Claude, whose call was it to change the rate limits? It can answer, because it can see the meeting.",
  "https://www.facebook.com/ads/library/?id=27914693054860420"),
 ("Aug 24", "Wispr Flow", "(text card, 12 versions)",
  "Do not take our word for it. Run your current notetaker and Wispr on the same call, then read both transcripts side by side.",
  "https://www.facebook.com/ads/library/?id=1025832413771022"),
 ("Aug 24", "Wispr Flow with Ace Consulting", "Woz stopped typing too / The LinkedIn guy quit typing (4 ads)",
  "Steve Wozniak co-founded Apple, and he’s voice-pilled… Reid Hoffman built LinkedIn… he stopped typing everything.",
  "https://www.facebook.com/ads/library/?id=4648962811999304"),
 ("Aug 24", "Wispr Flow with Ace Consulting", "500 hours of typing",
  "The average student types 4 hours a week: 500+ hours over a degree… Flow writes in Gmail, Canvas and Notion.",
  "https://www.facebook.com/ads/library/?id=1362088049468157"),
 ("Aug 24", "itscarissa.zip with Wispr Flow", "Ace your interview prep",
  "I have Claude run a mock interview, then answer out loud with Flow.",
  "https://www.facebook.com/ads/library/?id=1634972664730796"),
 ("Aug 24", "Wispr Flow with brentvonn", "Stop doomscrolling (7 versions)",
  "Want to stop doomscrolling? Do these instead. My go-to: brain dump ideas, journal and clear emails, just by talking to Flow.",
  "https://www.facebook.com/ads/library/?id=2197470944157408"),
 ("Aug 24", "Wispr Flow", "(Tamil, 0:22 video)",
  "I speak Tamil, but typing it? No chance. So I just say it out loud and it comes out perfectly formatted. Over 100 languages.",
  "https://www.facebook.com/ads/library/?id=1717081676183461"),
]

def ad_rows():
    return [[d, html.escape(a), link(h, u), html.escape(b)] for (d, a, h, b, u) in ADS]

page = f"""<title>Wispr Flow daily brief, Aug 27</title>
<style>{CSS}</style>
<div class="analysis"><div class="page">
<h1>Wispr Flow daily brief</h1>
<p class="sub">For Tim at Cloudless, August 27, 2026</p>

<div class="contents"><div class="t">Contents</div><ol>
<li><a href="#complaints">People complaining about Wispr (reply first)</a></li>
<li><a href="#shopping">People shopping around or on the fence</a></li>
<li><a href="#fans">People happy with Wispr</a></li>
<li><a href="#ads">New Wispr ads</a></li>
<li><a href="#today">What happened this week</a></li>
<li><a href="#method">Sources</a></li>
</ol></div>

<p class="why"><b>Today’s three moves:</b> (1) Reply in the <a href="https://x.com/ammaar/status/2092662017517600823" target="_blank" rel="noopener">Google Gemini Transcribe thread</a>; dozens of people there are asking what to switch to. (2) Comment on the <a href="https://www.reddit.com/r/WisprFlow/comments/1vz0fnk/love_wispr_flow_on_mac_hate_it_on_iphone_what_am/" target="_blank" rel="noopener">“hate it on iPhone” thread</a> in r/WisprFlow. (3) Reply to the Aug 26 posts with zero replies: @InfiniteKoenig, @marcelolx_, @curiously729, @just_vitto, @AndressBolivarr, @yoki_builds.</p>

<h2 id="complaints"><span class="num">1</span>People complaining about Wispr</h2>
{table(["Where", "Date", "Post", "Reach", "What Tim can do"], rows(COMPLAINTS))}

<h2 id="shopping"><span class="num">2</span>People shopping around or on the fence</h2>
{table(["Where", "Date", "Post", "Reach", "What Tim can do"], rows(SHOPPING))}

<h2 id="fans"><span class="num">3</span>People happy with Wispr</h2>
{table(["Where", "Date", "Post", "Reach", "Why it matters"], rows(FANS))}

<h2 id="ads"><span class="num">4</span>New Wispr ads</h2>
{table(["", "Count", "What it means"], [[html.escape(a), html.escape(b), html.escape(c)] for a, b, c in AD_STATS], numeric=(1,))}
<h3>The new ads worth seeing</h3>
{table(["Launched", "Advertiser", "Headline (click to open)", "What the ad says"], ad_rows())}
<p class="why"><b>Takeaway:</b> 114 new ads and not one mentions accuracy, privacy or price, the three things people complain about above. Wispr’s money is going to meeting notes, celebrity name-drops, students and India. Ad volume is up (51 in the Aug 21 batch, 114 now).</p>

<h2 id="today"><span class="num">5</span>What happened this week</h2>
<ul>
<li>Google launched a rival speech model on Aug 26; a Googler built a free Wispr look-alike on it. X is full of “is Wispr dead?”</li>
<li>iPhone is Wispr’s weak spot: the biggest Reddit thread and several X posts are about the iOS keyboard and the latest update.</li>
<li>Long-time users say Wispr got worse (lost dictations, wrong words). Two named where they went: Aqua Voice, Sarvam Kivi.</li>
<li>Willow is planting fake Reddit posts: 11 identical “I started researching…” posts from 11 new accounts, all ending on Willow. Zero upvotes.</li>
<li>Wispr’s team posts on LinkedIn, not on X or Reddit where the complaints are.</li>
</ul>

<h2 id="method"><span class="num">6</span>Sources</h2>
<p class="note">X, Reddit and LinkedIn searches for “wispr flow” / “wisprflow” / @WisprFlow via Apify, and Wispr Flow’s page in the Meta Ad Library, all pulled Aug 26 around 3pm PT. Reach = likes / replies / reposts at pull time. Every row links to its source.</p>
</div></div>
"""

with open('/home/claude/08-27-2026.html', 'w') as f:
    f.write(page)
print(len(page), len(COMPLAINTS), len(SHOPPING), len(FANS))
