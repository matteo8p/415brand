---
name: weekly-report
description: Run a research415 weekly competitive brief for a client end to end. Use when asked to run the weekly, "weekly report", "weekly brief", "full report" or "deep report" for a client. Reads the client folder, pulls a week of traffic, search, ads, social, reviews and hiring data on one competitor, writes the analysis with recommended actions, builds the page, HTML and summary email, drafts the Resend broadcast, and logs the run.
---

# Running a weekly brief

A weekly is about one competitor, written for one client. Every section answers two questions in this order: what did the competitor do this week, and what should the client do about it. It is a list of moves with the evidence attached, not a description of the competitor.

The reader is a founder. They read the recommended actions, the reply table and the one-line claims, and open the evidence only when they doubt a claim. Write for that reading pattern. The daily's job is the posts of the last two days. The weekly's job is the things a daily cannot see: traffic, search, the ad library as a whole, the objection mix, hiring, and what the competitor's own pages say and contradict.

A run takes half a day. Pull everything on the same day, and do not start writing until the scorecard numbers are in hand.

## 1. Load the client

Same as the daily, in order:

1. `clients/<client>/CLIENT.md`, all of it. The **Report shape** section says how this client's weekly differs (two fronts instead of one competitor, no ads section, the conflict rules).
2. `clients/<client>/NOTES.md`. **Open** items apply to this report. **Standing** items always apply.
3. `clients/<client>/IGNORE_RULES.md`.
4. `clients/<client>/RUNLOG.md`, the top entries, including the dailies since the last weekly. Anything the dailies already told the reader is not repeated in the weekly. The weekly says what changed since the last weekly.
5. The last weekly: `python3 tools/report.py last <client> weekly`. The objection mix, the scorecard and the creative watch list are trended against it.
6. `clients/<client>/research/<client>.md` and `research/competitors.md` (or the competitor's own dossier). If these do not exist, research and write them first (`new-client`).

Then the skills: `research-pulls`, `competitor-customers` (for the account table when the client is lead-first), `ad-swipe-file` (for the ad template analysis), `brief-format`, `report-style`, `publish-report`.

## 2. Pull

Everything on one day. The per-source instructions are in `research-pulls`. The weekly needs, per competitor and per client:

| What | Where |
|---|---|
| Traffic, sources, countries, pages per visit | Similarweb |
| Organic and paid keywords, spend estimate, biggest paid terms | Semrush, SpyFu |
| Search volume and cost per click on the category terms | Google Keyword Planner |
| Google ads on record | Google Ads Transparency Center |
| Every Meta ad, live and retired, with dates, copies, co-brand | Meta Ad Library, both runs |
| X, Reddit, LinkedIn, Hacker News posts for the week | the daily's pulls, seven-day window |
| TikTok, YouTube, Instagram reach, paid versus organic | search scrapers, only where the category has them |
| Reviews and counts, with the dislike themes | G2, Trustpilot, the app stores, Product Hunt |
| Every open job, with the ad text | the job board (Ashby, Greenhouse, Lever), LinkedIn Jobs |
| Pricing, changelog, security page, creator and referral pages, comparison pages | the competitor's own site, crawled |
| The client's own comparison pages, every claim checked | the client's site |

Record the pull date. It goes on one line at the top of the Sources section and in the footer, nowhere else.

## 3. Structure

Fixed order. Do not add, remove or reorder top-level parts.

### Intro, above the contents box

1. `h3` "Recommended actions for [client] from the analysis", then a `moves` block with `collapsed: true`. **Three or four actions, never more.** Each `action` is one imperative sentence in plain words. Each `why` is four to six short sentences: the evidence, then the cost, then a sentence starting "Outcome:" that says what the client gets. `evidence` names the section id that backs it. Order by impact per dollar: the cheapest thing with the biggest payoff first. Cut any action you cannot defend line by line. A weak action costs more trust than it earns.
2. `h3` "Posts worth replying to this week", then a `table` with Where | When | What they said | Status | What to say. Status is the durability tag (Paying and leaving, Shopping, Trialling, Venting, Already gone). What to say is the reply in one or two plain sentences. Every post links to the original. No note under the heading explaining how the list was filtered. If reach cannot be captured, drop the column.

Nothing else goes above the sections. No scorecard up here, no "everything below is collapsed" note.

### 1. Key findings

The `scorecard` first: twelve to fourteen rows, competitor versus client, one short note per row. Value cells hold a number or a two-word value ("$361M", "2,000/week", "14,620", "Type I"), never a sentence. Everything else goes in the note. Every row says something about both companies. A row where one side is blank is noise, drop it. Rows, in this order, dropping only what truly does not exist for either company: monthly website visits, share of visits from free Google results, paid search terms, estimated monthly Google Ads spend, organic keywords, review-site count and average rating, active Facebook and Instagram ads, share of those made by creators, TikTok followers, X posts about it per day, X posts that are complaints or switching, biggest objection this week and its share, Reddit posts since a fixed date, LinkedIn followers and employees, open jobs.

Then five `findings`, one per section below plus one on pricing. This is the summary. A founder who reads only this should know the five things to repeat to their team. Each `why` connects to at least one recommended action.

### 2 to 5. Pricing and product, Search and marketplaces, Advertising and social media, Hiring

Each has the same shape, in order:

- a `fig` with one or two charts that set the scene
- `h3` "What happened", a `findings` block with `style: "did"`, two to four items
- `h3` "What [client] should do", a `findings` block with `style: "do"`, one to three items
- a `toggle` called "Full analysis" with the tables, extra charts and longer paragraphs behind the findings

Drop the "should do" block entirely when the section produces no real action. Hiring usually is intelligence, not instruction. Inventing an action to fill the shape makes the reader distrust the sound ones. Never argue from an absence: a role a competitor has not posted is not a roadmap.

### 6. Sources

A `links` block grouping every source by type: data tools, the competitor's own pages, the client's own pages, reviews and press, social, ads and video. The pull date on the first line.

## 4. How a finding is built

```
claim   one sentence, the whole point, stands on its own
p       the evidence, two to four sentences, the numbers that matter, all source pills together at the end
why     "**Why it matters for [client]:**" then one to three sentences that end on the action
```

The claim works alone. Someone who never expands it still knows what happened.

- Bad: "Viktor's social media reach is a paid machine: creators paid up to $10K a post, referral commissions, paid consultants, and a group of big accounts that cheer each other's posts on launch day."
- Good: "Most of Viktor's social media attention is paid for, through creators, referral commissions, and big accounts that reply to each other on launch day."

The `why` names what to do. A `why` that ends on an observation is unfinished. Do not open every `why` in a section the same way. Findings under "What [client] should do" have a `claim` (the instruction, imperative) and one `p` (how, what it costs, the evidence), no `why`.

## 5. What each section covers

**Pricing and product.** Plans, prices, what is included, how billing works (credits, seats, caps). What changed and when. What the competitor's own pages still say incorrectly and where they contradict each other. What each company shipped this window. Security and compliance in plain words (SOC 2 stage, ISO, SSO, data residency, HIPAA), and what the certificates actually mean. Every claim on the client's own comparison page checked against the competitor's current page, with the rendered page read, not a scrape. A full feature matrix in Full analysis, every cell sourced.

**Search and marketplaces.** Traffic and where it comes from, with the month it covers and a note that it is an estimate. Organic keyword count and trend. Paid keywords, estimated spend, the biggest paid terms, who the competitor bids against. The category searches neither company owns, with volume and cost per click. Brand-name searches and misspellings. App directories and review sites with counts and how fast they grow. AI-assistant citations. Other things that share the name. What people search for that shows doubt.

**Advertising and social media.** The stock of active Meta ads (the daily counts the flow of new ones, say so), launch dates, formats, landing pages, themes, and which ads have the most copies. Google ads on record. Creator, referral and partner programs with exact payouts and conditions. TikTok, YouTube, Instagram, X, LinkedIn: brand-account reach versus creator reach, what share of views is paid, who posts most, what a launch day looks like. X posts split into praise, complaints and hype with counts. Then, in Full analysis:

- **The objection mix.** Sort every complaint in the window into exactly one bucket, the one the person led with, and say how many you sorted. Buckets: price, privacy, accuracy (or quality), latency, workflow, platform gap, account and billing, plus whatever the category needs (delivery and catalog for gifting, language coverage for speech). Show it as a `rows` chart with `labelAll` (a `share` chart cannot label six buckets), with the buckets the client can answer coloured apart from the ones it cannot, and the move since the last weekly ("privacy 8% to 19%"). Never merge these into one negative number. Seven objections need seven different answers. Name the two that grew most and what each implies.
- **Durability.** Tag every complaint: paying and leaving (a year of use, or the words cancel or refund), trialling and unimpressed (days old), venting (annoyed, going nowhere), already gone (they name where they went). The reply table at the top is sorted by this, not by reach.
- **Switch evidence.** Every post where someone says they actually moved, and to what. Trend the count. Where people land is the closest thing to the competitor's retention anyone outside can see.
- **The ad template.** Meta ranks a page's library by total impressions, so the top thirty live ads are the ones that survived the competitor's own testing. Read them in full and name the shape: how many lines, what the first line does, where the product enters, what the close is. By angle, with counts. The negative search: the client's own pitch words across the whole corpus, with the corpus size. Method in `ad-swipe-file`.
- **Paid footprint by channel**, a table with the client's own footprint as the last row, and one paragraph on what actual spend is and is not knowable from outside.
- **What to copy and what to avoid.** What the competitor does that works and should be copied (say what to copy and what to change). What it is getting wrong (say what the mistake costs them). The report must never read as if the client can only work around the competitor.
- **What this is not.** One paragraph saying complaint volume shows customers are available and why they are unhappy, not whether they stay, because activation and retention live in the competitor's own analytics.

**Hiring.** Open jobs by team with a chart. Headcount over time. What the job ads reveal, quoted (job ads say what marketing will not). Salary disclosure. Office rules. Who joined and from where. What the competitor is not hiring for, stated as a fact and not as a prediction. The client's own openings. Every job in a table with a link.

**Recommended actions.** Each is something the client can start this week with the people it has. Good: buy the searches the competitor ignores, fix the client's own pages, get listed where buyers browse, ask existing users for reviews, copy a program that demonstrably works for the competitor and aim it at an audience the competitor misses, sell against a weakness the competitor has admitted in its own words, answer the people who asked a real question and got nothing. Bad: "build brand", anything that needs a hire, anything the evidence does not directly support, telling the client to make a decision, a certificate argument the client cannot make itself.

**Length.** 8,000 to 10,000 words rendered. A key finding about 150 words. A `why` under 80. A move's `why` under 100. A Full analysis paragraph under 150. If a paragraph runs long it is doing two jobs. When cutting, cut Full analysis paragraphs first, then evidence paragraphs. Never cut claims, tables or sources.

## 6. Write, build, hand over

Scaffold with `python3 tools/report.py new <client> weekly --date MM-DD-YYYY`. Write in the JSON. Charts, tables and pills as `brief-format` describes. Prose as `report-style` describes. Fill `description` and `email` (subject "[Subject] weekly brief, Mon D"; preview two short sentences: the headline finding and the count of moves and posts).

```
python3 tools/report.py check <client> <slug>
python3 tools/report.py build <client> <slug>          # html with charts, summary email
python3 tools/report.py draft <client> <slug>          # dry run
python3 tools/report.py draft <client> <slug> --create # Resend DRAFT
```

The weekly email is the summary by default: actions, reply table, the five claims, the link. The full report is the page.

Render the page and read it top to bottom as the founder would: actions, posts, scorecard, claims. If you cannot say what to do after that pass, it is not finished. Then the run log, NOTES.md, and the hand-over as `publish-report` describes.

## 7. Before you finish

- Every `[[id]]` resolves. `report.py check` is clean or every warning has a reason.
- No paragraph, why, claim or cell has a pill anywhere but its end.
- Every post, ad, job and review in a table links to its original.
- Each recommended action links to a section, and that section's "should do" block carries the same move in more detail.
- The scorecard has no one-sided rows and no value longer than a couple of words.
- The objection mix adds up, names the total sorted, and shows the move since last report.
- No sentence implies that complaint volume tells you the competitor's retention.
- Nothing the dailies already said is repeated. What changed since last weekly is stated.
- Three or four actions, each with an Outcome sentence, none padded, none needing a hire.
- No tool is named. The pull date is on one line. No caveat wall.
- Word count is in range.
