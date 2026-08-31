"""Daily brief for OpenTag, Sept 1 2026. Edit the lists, run it, it writes 09-01-2026.html.

Shares the CSS and table helpers with build_report.py (the Aug 28 brief).
Window is Aug 30 to 31. English-language reply targets only. Cut rows live in
clients/opentag/README.md
under "Seen but not sent".
"""
from build_report import CSS, link, table, rows

POST_HEADERS = ['Where', 'Date', 'Post', 'Reach', 'What to do']
AD_HEADERS = ['The example', 'Why we know it works', 'The hook, word for word', 'What to brief']

# ---------- 1. Paying for Claude Tag and unhappy about the bill ----------
BILL = [
 ("X, @AdrianRusin", "Aug 31",
  "For some completions it was running up to 1700 $ per task. Weekly over 2500$ and we are small org.",
  "https://x.com/AdrianRusin/status/2094415038433968501", "0 likes, no replies",
  "Biggest Claude Tag bill anyone has posted in public. Reply today, and ask if you can quote the numbers without naming his company."),
 ("X, @AdrianRusin", "Aug 31",
  "Similar task completion was running close to 70 $ in Claude tag. With little ability to optimise further cost.",
  "https://x.com/AdrianRusin/status/2094416160657756412", "0 likes, no replies",
  "The screenshot shows the same job run both ways. Ask to use it, then build the comparison page around it."),
 ("X, @AdrianRusin", "Aug 31",
  "We have already setup instance of it with DS harness in the background and DS model. It's much more efficient, but user experience requires much more work to match Claude tag, we are trying to do that since our domain experts are non technical.",
  "https://x.com/AdrianRusin/status/2094415465569264083", "0 likes, no replies",
  "He is building OpenTag himself and cannot do the interface. Tell him that part is finished, and offer to set his non-technical staff up this week."),
 ("X, @temnco", "Aug 29",
  "actually zero cause Anthropic is offering a credit for Claude Tag. but even if I paid for it, I doubt that it would be more than $100.",
  "https://x.com/temnco/status/2093601818312089833", "2 likes, 1 reply",
  "Do not pitch. He pays nothing yet. Come back the week his credit runs out."),
]

BILL_WHY = (
 '<b>One lead, three posts.</b> Every new cost complaint in the last two days came from the same person, and all '
 'three sit unanswered under your own posts. Work him first.'
)

# ---------- 2. Asking what to use ----------
SHOPPING = [
 ("X, @jjl13579", "Aug 31",
  "How would you compare Claude Tag in Slack vs Grok Bot?",
  "https://x.com/jjl13579/status/2094298856406303015", "0 likes, no replies",
  "Nobody has answered him. Reply with the line that covers both: each one is owned by the company selling you the model."),
 ("X, @mrinal", "Aug 31",
  "The human interface layer: A place to have many threads of conversations with the factory (something like slack or github issues). A dashboard like place to see what work is ongoing and what",
  "https://x.com/mrinal/status/2094491564538249255", "1 like, no replies",
  "He is designing OpenTag from scratch in public. Ask what he tried in Slack and why it broke. Do not pitch in the first message."),
 ("X, @fcerullo", "Aug 31",
  "Claude Tag gives the agent its own identity in Slack. That is real progress, and it moves the access question. New 32-min walkthrough: seven risks, what Anthropic has announced but not shipped, and a 30-day pilot plan.",
  "https://x.com/fcerullo/status/2094471070216597828", "0 likes, no replies",
  "Security consultant who runs Claude Tag pilots, so he picks what his clients install. Watch the video first, then ask which of the seven risks you remove."),
 ("X, @oibuildthis", "Aug 30",
  "Anthropic shipped an exciting update to claude tag this week. It now reads the whole Slack channel and picks one of four moves: reply, open a thread, route to a workstream, or stay silent. Validating Multiplayer AI as the frontier. It's also only half built.",
  "https://x.com/oibuildthis/status/2093365529788694900", "1 like, 1 reply",
  "Skip the pitch. He says Claude Tag is half built and people listen to him, so ask which half."),
]

# ---------- 3. Ads and creator posts that work in your category ----------
ADS = [
 ("Ad: Not a Chatbot. A Coworker., Viktor",
  "https://www.facebook.com/ads/library/?id=939211982444825",
  "Ran 57 days. The same copy has run in 55 different ads since May.",
  '"@Viktor, pause any Meta ad sets with CPA over $40 and shift that budget to the top performers." It pulled live performance data across all your campaigns, paused the underperformers, reallocated the budget, and logged every change to Google Sheets, in one Slack message. "30 seconds. Zero tabs. Nobody told it where to look."',
  "The best-tested ad in your category. Copy the build: a command in quotes, a receipt naming the real tools it touched, three short lines. In yours, name the model OpenTag picked for the job."),
 ("Ad: Model agnostic by design, Viktor",
  "https://www.facebook.com/ads/library/?id=1024084196997130",
  "Ran 32 days. One of four Viktor ads about model choice.",
  '"Whichever model wins next quarter, Viktor already uses it. Delegate the busywork, data pulls, follow-ups, meeting recaps, and get finished output back in Slack. That is how 30 people move like 90."',
  "A company with $75M is buying your idea. Do not fight it on model count. Viktor only ever sells the choice, so brief lock-in and getting your wiki out instead."),
 ("Ad: Tag Claude in and keep all the context, Anthropic",
  "https://www.facebook.com/ads/library/?id=1356135972655784",
  "Launched the day Claude Tag shipped and still live 67 days later.",
  '"Tag Claude in and keep all the context. Introducing @Claude, a new way to move work forward in Slack. It learns as your team works and remembers what matters most."',
  "Anthropic's longest-running ad is about memory. That is your wiki, in their words. Make the same ad and film the page rewriting itself."),
 ("Creator ad: #ClaudePartner, Anthropic",
  "https://www.facebook.com/ads/library/?id=1049172314722524",
  "Live 41 days across 7 copies.",
  '"24/7 content assistant \U0001F47E Comment \'inspo\' to get the exact prompts I used to build this automation \u2728 #ClaudePartner @claudeai"',
  'Anthropic pays creators and hides the payoff behind a comment. Viktor runs the same trick with "Comment VIKTOR for $100 worth of free work". You hand out $100 one reply at a time. Turn it into a comment offer this week.'),
 ("Creator post: @Suryanshti777",
  "https://x.com/Suryanshti777/status/2093434627721711709",
  "33 likes and 10 reposts, and nobody paid him.",
  '"Go pull your Claude Tag bill from last month. Now pull the list of what you actually asked it to do. Monday numbers. Summarize this thread. Chase the invoice. Reformat the doc. All of it ran on Opus 4.8. Because every Claude Tag channel runs on Opus 4.8. There is no second"',
  "The shape your argument wants: an instruction anyone can follow in ten seconds, then the punchline, product last. He writes your best content for free. Message him today."),
]

ADS_WHY = (
 '<b>Takeaway:</b> every ad that ran a long time is built the same way. A quoted command or a real person first, a '
 'receipt naming real tools second, the product last. None of them mentions money. We read <b>400 ads</b> across '
 'Claude Tag, "AI coworker" and Viktor, and the words price, expensive, cheap, per seat, bill and credits appear '
 '<b>zero times</b>, along with lock-in, open source and wiki. Viktor owns model choice already, so take the other '
 'three. Skip security until your SOC 2 lands.'
)

# ---------- 4. What happened this week ----------
BULLETS = [
 "<b>Your best month may have moved.</b> Two Japanese users reported yesterday that Claude Tag's free credits now "
 'run to Oct 1 (<a href="https://x.com/tyone/status/2094262600200827287">@tyone</a>, '
 '<a href="https://x.com/utamori_/status/2094349490274586867">@utamori_</a>), and that Anthropic did not announce '
 'it. Today was supposed to be the day teams finally saw a bill. If those two are right, September is another '
 'month of people saying what <a href="https://x.com/temnco/status/2093601818312089833">@temnco</a> said on '
 'Saturday, which is that Claude Tag costs him nothing. Check an admin console, then move the push to late '
 'September.',

 '<b>Viktor is buying the words you are named for.</b> It runs four ads on model choice, including '
 '<a href="https://www.facebook.com/ads/library/?id=1024084196997130">"Model agnostic by design"</a> and '
 '<a href="https://www.facebook.com/ads/library/?id=3895007054141398">"Always the best model, automatically"</a>, '
 'backed by a $75M raise and "45,000+ teams". Every one of them sells the choice as a feature. Lock-in and '
 'portability are still open, so take those before it does.',

 '<b>Anthropic published how it uses Claude Tag internally and it spread.</b> The claims: a reviewable document out '
 'of a Slack thread in 45 minutes, weekly reports automated, legal review helped '
 '(<a href="https://x.com/gigazine/status/2094258957770526810">gigazine</a>). They are selling the workflow now. '
 'Price does not answer that. The wiki does.',

 "<b>You worked Friday's list and got one answer back.</b> Tony offered "
 '<a href="https://x.com/kamikariat/status/2093611653820711364">@ptaranat</a> and '
 '<a href="https://x.com/kamikariat/status/2093612171427213661">@farez</a> $100 of credits, Shelden answered '
 '<a href="https://x.com/sheldenshi/status/2093448096453963879">@kamilrextin</a> and '
 '<a href="https://x.com/sheldenshi/status/2093448593621619150">@joesadoski</a>. '
 '<a href="https://x.com/farez/status/2093664830028705949">@farez said no</a>: "already using Hermes now and Slack '
 'integration comes free." Hermes has come up four times this week. Free beats cheap.',

 '<b>Two things from Friday are still open.</b> @jmckenty and @ramoncacho show no reply from you, though we only '
 'see replies that name @TryOpenTag, so check. And tryopentag.com/compare/claude-tag is still a dead page, which is '
 'where <a href="https://x.com/jjl13579/status/2094298856406303015">@jjl13579</a> would have landed yesterday.',
]

MOVES = (
 "<b>Today's three moves:</b> (1) Reply to "
 '<a href="https://x.com/AdrianRusin/status/2094415038433968501">@AdrianRusin</a>. He posted yesterday that Claude Tag '
 'cost him <b>$1,700 for one task</b> and <b>over $2,500 in a week</b>. Nobody has answered him. (2) He also says he is '
 '<a href="https://x.com/AdrianRusin/status/2094415465569264083">building his own version</a> and is stuck on the '
 'interface. Get to him before he finishes it. (3) Claude Tag\'s free credits were supposed to run out today. Two '
 'users say Anthropic quietly pushed the date to Oct 1. Check an admin console this morning, because your September '
 'turns on it.'
)

TITLES = [
 'Paying for Claude Tag and unhappy about the bill',
 'Asking what to use',
 'Ads and creator posts that work in your category, to send your team',
 'What happened this week',
]


def ul(items):
    return '<ul>' + ''.join(f'<li>{i}</li>' for i in items) + '</ul>'


def ad_rows(entries):
    return [(link(name, url), evidence, hook, brief) for name, url, evidence, hook, brief in entries]


def build():
    p = ['<div class="analysis"><div class="page">']
    p.append('<h1>Claude Tag daily brief</h1>')
    p.append('<div class="sub">For the OpenTag founders, September 1, 2026</div>')
    p.append('<div class="contents"><div class="t">Contents</div><ol>')
    for t in TITLES:
        p.append(f'<li>{t}</li>')
    p.append('</ol></div>')
    p.append(f'<div class="why"><p>{MOVES}</p></div>')

    p.append(f'<h2><span class="num">1</span>{TITLES[0]}</h2>')
    p.append(table(POST_HEADERS, rows(BILL)))
    p.append(f'<div class="why"><p>{BILL_WHY}</p></div>')

    p.append(f'<h2><span class="num">2</span>{TITLES[1]}</h2>')
    p.append(table(POST_HEADERS, rows(SHOPPING)))

    p.append(f'<h2><span class="num">3</span>{TITLES[2]}</h2>')
    p.append(table(AD_HEADERS, ad_rows(ADS)))
    p.append(f'<div class="why"><p>{ADS_WHY}</p></div>')

    p.append(f'<h2><span class="num">4</span>{TITLES[3]}</h2>')
    p.append(ul(BULLETS))

    p.append('</div></div>')
    return f'<style>{CSS}</style>\n' + ''.join(p)


if __name__ == '__main__':
    out = build()
    with open('09-01-2026.html', 'w') as f:
        f.write(out)
    print(f'wrote 09-01-2026.html, {len(out)} bytes')
