# Cloudless.so

Cloudless.so is a free, on-device voice dictation app (Mac, Windows, iOS). Their competitor is Wispr Flow. The CEO is Tim (tim.lenardo@gmail.com, @telenardo on X). Business summary lives in `CLOUDLESSSO.md`.

## The daily brief

Every day we send Tim one email: the Wispr Flow posts from the last two days that he can reply to, plus Wispr's new ads. The goal is simple: Tim replies to people complaining about Wispr and converts them to Cloudless. Everything in the brief serves that.

Reports live in `reports/MM-DD-2026.html` (dated for the day it is sent, covering the two days before). The Aug 27 report is the reference for format and tone.

## Workflow

Run this in a fresh session. Total time is about 30 minutes.

### 1. Pull mentions (Apify)

Use the Apify connector. Run all three at once with `waitSecs: 0`, then poll with `get-actor-run`.

| Source | Actor | Input |
|---|---|---|
| X | `scraper_one/x-posts-search` | `query: "\"wispr flow\" OR wisprflow OR @WisprFlow"`, `searchType: "latest"`, `resultsCount: 100`, `timeWindowHours: 48`. Run it a second time with `searchType: "top"` to catch high-reach posts the "latest" cap misses (it caps at 100 and can fill up in a few hours on a busy day). |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["wispr flow", "wisprflow"]`, `searchPosts: true`, `searchComments: true`, `searchSort: "new"`, `searchTime: "week"`, `postedAfter: <two days ago>`, `maxPostsCount: 50`, `fastMode: true` |
| LinkedIn | `harvestapi/linkedin-post-search` | `searchQueries: ["wispr flow", "wisprflow"]`, `maxPosts: 40`, `postedLimit: "week"`, `sortBy: "date"` |
| TikTok | `clockworks/tiktok-scraper` | `searchQueries: ["wispr flow"]`, `resultsPerPage: 40`. Pair with `apidojo/tiktok-scraper` (`keywords`, `sortType: "DATE_POSTED"`, `dateRange: "THIS_MONTH"`, `location: "US"`) — the two return different sets. |

Fetch results with `get-dataset-items`, projecting only the fields you need (X: `timestamp,author.screenName,postText,postUrl,replyCount,repostCount,favouriteCount,quoteCount`; Reddit: `dataType,createdAt,parsedCommunityName,title,body,postUrl,upVotes,commentsCount,authorName`; LinkedIn: `postedAt.date,author.name,author.info,content,linkedinUrl,engagement.likes,engagement.comments`). Large results get saved to a file; filter them with Python rather than reading everything.

Things that bite:
- Apify has a monthly usage cap. If every call fails with "Monthly usage hard limit exceeded," the plan needs topping up, and the connector has to be reinstalled and the session restarted before its tools come back.
- The X actor's `since:`/`until:` operators are ignored. Use `timeWindowHours` and the top/latest combination instead.
- The X actor does not return view counts or follower counts, so "Reach" is likes / replies / reposts.
- TikTok search does not respect a two-day window — it returns a relevance-ish mix going back months.
  Label every TikTok row with its date and treat anything outside the window as context, not news.
  `apidojo`'s keyword search also drifts (a "flow" query pulled in perfume shops); drop anything
  that does not actually mention Wispr.
- `clockworks/tiktok-scraper` rejects `searchSection` / `videoSearchSorting` values that look valid
  in the truncated schema. Send just `searchQueries` + `resultsPerPage`.
- Reddit search returns off-topic hits (foreign-language threads, deal spam). Drop anything that doesn't mention Wispr in the title or body.
- Watch for astroturfing: on Aug 24–26 Willow Voice planted 11 templated "I started researching…" posts from 11 new accounts across 11 subreddits. Call it out if it recurs; don't list them as real mentions.

### 2. Pull new ads (Meta Ad Library, browser pane)

Apify's Facebook ads scrapers work too, but the Ad Library page is free and reliable. Open it in the browser pane (facebook.com must be allowed):

```
https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&view_all_page_id=110864474787474&search_type=page&media_type=all&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped
```

`110864474787474` is Wispr Flow's page ID. Sorting by `relevancy_monthly_grouped desc` puts the newest launches first. Use `javascript_tool` to scroll to the bottom repeatedly until an ad with a "Started running on" date older than the window appears, then parse `document.body.innerText`: split on `Active\n` blocks, pull `Library ID`, `Started running on`, the advertiser line before `Sponsored`, the copy, the `WISPRFLOW.AI` headline, and whether `Low impression count` is present. Count by date, Notetaker vs dictation, creator ("X with Wispr Flow") vs brand-made, video vs static, and any new angles. Individual ads link as `https://www.facebook.com/ads/library/?id=<Library ID>`.

The `start_date[min]` URL filter is by impression date, not launch date; don't rely on it.

### 3. Sort and write

First filter every post through `IGNORE_RULES.md` — Tim's standing list of post types not worth a reply
(people who just subscribed, audiences already on a free competitor, deal spam, affiliates, astroturf,
Linux-only). Dropped posts go in a "What we left out, and why" table with sources, so Tim can correct
the list. Add new rules to that file as he gives them.

Tim also wants **a source link on every claim**, not just on table rows: the week-in-review bullets and
any assertion about a competitor's behaviour must be clickable.

Tim also wants **Wispr's influencers** — both the creators Wispr pays and anyone talking about Wispr
for free. Paid creators come out of the Meta Ad Library co-brand line (the advertiser name reads
"Wispr Flow with <creator>" or "<creator> with Wispr Flow"); count them per creator. Unpaid ones come
from the TikTok pull. The useful angle is usually the gap: big "free Wispr alternatives" videos that
do not mention Cloudless, and creators who explicitly ask for replacement suggestions.

Do **not** add a "What we left out, and why" section — Matt removed it on Aug 28. The rule filtering
still runs, it just is not shown to Tim.

Group the surviving posts by sentiment, in this order:

1. **People complaining about Wispr** — the reply targets. Put fresh, specific complaints with zero replies first; being the only answer beats being one of twenty.
2. **People shopping around or on the fence** — comparisons, "what should I use," competitor launches with an audience Tim wants.
3. **People happy with Wispr** — no reply, but shows what Wispr users like and where Wispr is or isn't showing up.

Table columns: Where | Date | Post (linked to the source) | Reach | What Tim can do. The last column is one or two sentences in plain language about what Tim should do with the post. Cloudless's pitch is free, on-device, Mac/Windows/iOS; lean on whichever part the complaint is about (price cap, privacy, iPhone, Windows). Don't claim product details we haven't confirmed; write "if Cloudless does X, say so."

Above the tables, a green "Today's three moves" box with the three highest-value replies. After the tables: the ads section (a short stats table, a table of the notable new creatives, a one-paragraph takeaway), then "What happened this week" as five short bullets, then a one-line Sources note. No explanatory grey text under headings. Subtitle is just "For Tim at Cloudless, <date>."

The report is built from `reports/build_report.py`: edit the `COMPLAINTS`, `SHOPPING`, `FANS`, `AD_STATS` and `ADS` lists and run it. It writes the HTML with the same look as `webapp/app/samples/analysis.css` (Wikipedia-style tables, `#3366cc` links, green `.why` box). Render it once with Playwright to check before sending.

### 4. Set up the email (Resend)

Use the Resend connector. The email is a **broadcast draft**, never a direct send, because a human must approve every send (see `clients/RESEND.md`).

- Domain: `415brand.com` (verified). From: `research415 <reports@415brand.com>`. Reply-to: matt@freestylevoice.com.
- Segment: **cloudless.so** (`e3b1e4f6-3240-4fd3-8ce3-a2dbda9fb709`), which contains Tim's contact (`47c0dcb7-cb2c-432d-87ff-22c45819683f`) and nobody else. Do **not** use **General** (`5f922ade-…`) any more: it is empty, and now that an OpenTag segment exists a General send would reach the wrong clients. Check with `list-contacts` on the segment ID before drafting.
- Keep the email under Gmail's ~102KB clip threshold. `reports/build_email.py` imports the data and
  prose straight out of the report builder so the two cannot drift; if it goes over, shrink the
  inline cell CSS before you cut content.
- Body: an email-safe copy of the report with **all CSS inlined** (Gmail/Outlook strip `<style>`). Replace `.data` tables with `<table width="100%" cellpadding="6" cellspacing="0" border="0">`, put `valign="top"` and `style="border:1px solid #c8ccd1"` on each cell, inline the heading/link/box styles, drop `class`, `target` and `rel` attributes. Keep it under ~55KB. Add an unsubscribe line at the bottom with `{{{RESEND_UNSUBSCRIBE_URL}}}` (broadcasts require one). Provide a plain-text version too.
- The `RESEND_API_KEY` in `clients/RESEND.md` is **dead** as of Aug 27 (`API key is invalid` on every
  endpoint). The Resend MCP connector has its own auth and still works, so either draft through the
  connector or get a fresh key first — `curl https://api.resend.com/domains -H "Authorization: Bearer $KEY"`
  is the one-second check.
- `create-broadcast` with `name`, `segmentId`, `from`, `subject` ("Wispr Flow daily brief, <Mon D>"), `previewText` (counts: "24 Wispr complaints to reply to, 19 people shopping around, 114 new Wispr ads."), `replyTo`, `text`, `html`. Confirm with `get-broadcast` that status is `draft`, then hand Matt the preview link (`https://resend.com/broadcasts/<id>`). Matt sends from the dashboard.

## What the Aug 27 run found (for continuity)

- Google launched Gemini 3.5 Transcribe on Aug 26; a Googler open-sourced a Wispr look-alike on it. Most X chatter since is "is Wispr dead?" Follow up on whether Wispr responds.
- iPhone keyboard and the latest iOS update are the top complaints on both X and Reddit.
- Several long-time users say accuracy got worse; named switches to Aqua Voice and Sarvam Kivi.
- Wispr launched 114 Meta ads Aug 24–26, half for the Notetaker, none mentioning accuracy, privacy or price.
- Wispr's team posts on LinkedIn, not X or Reddit. Tim's replies to @jonpbaker and @mattlam_ (Aug 26) had no engagement yet.
- Broadcast draft: https://resend.com/broadcasts/dfbe87f8-dc39-4dee-9177-d6ac6807a0f3

## Aug 28 run

- Report `reports/08-28-2026.html`, built by `reports/build_report_08_28.py`. Email built by
  `reports/build_email.py`, which imports the report's data and prose so the two cannot drift.
  **The email must match the report exactly, tables and all** (Matt, Aug 28). There is also a
  `build_email_compact.py` that stacks the leads instead. Do not use it unless asked.
- The email needs the Contents box too. Render it as plain numbered text, not links, because
  in-page anchors do not navigate in webmail.
- Sizes settled at 10 complaints, 5 shopping, 5 fans, 7 creators. Plain English, no em-dashes
  in our own prose (quotes stay verbatim). No "New Wispr ads" section and no "What we left out".
- Broadcast draft: https://resend.com/broadcasts/f9602b10-a46b-41c2-82e0-e5e19a1ecd4e
- Getting the email into Resend is the slow part: the connector takes content inline only, so a
  44KB email has to be read out of the file in ~4 chunks and pasted into `create-broadcast`.
  With a working `RESEND_API_KEY` it is one curl against `POST /broadcasts` instead. Fix the key.

## Aug 31 weekly run (the first weekly for this client)

Report `reports/8-31-2026.html`, built from `webapp/app/samples/briefs/wispr-cloudless.ts` and rendered
at `/analysis/cloudless/weekly-08-31-2026`. Data was pulled Aug 30 and the report is dated for the day it
is sent, the same way the dailies are. Follows `clients/WEEKLY_REPORT_GUIDANCE.md`. Not yet emailed to Tim.

Client reports live under `/analysis/<client>/<report>-<date>`, not under `/samples/`, which is the
public marketing site's example reports. Siblings: `analysis/opentag/weekly-08-31-2026`,
`analysis/sprag/weekly-08-31-2026`, `analysis/opentag/leads-08-28-2026`.

**Save the HTML from a browser, not from curl.** The figures are Recharts, and Recharts renders nothing
server-side, so a plain `curl` of the dev server produces a report with every chart blank. Load the page
in Playwright, scroll it top to bottom so every figure measures, then take `document.querySelector('.analysis').outerHTML`
and prepend the `<title>` and an inlined `webapp/app/samples/analysis.css`. That is how
`clients/adapt.com/reports/8-17-2026.html` was made. Chrome is available via `channel: 'chrome'`; the
Playwright-managed browser build is not installed.

**The objection mix does not fit a `share` chart.** With buckets at 48/14/14/14/5/5 the share component
only labels segments at or above 15%, so five of six render as unlabelled blocks, and its three tones
cannot separate six buckets. Lead the figure with a `rows` chart carrying `labelAll`, colour the buckets
Cloudless can answer differently from the ones it cannot, and keep the `share` chart next to the bucket
table in Full analysis where the guidance asks for it.

### What this run found

The weekly's job is the things a daily cannot see. Everything below was checked against the Aug 27 and
Aug 28 dailies and cut if Tim had already been told it. The iPhone threads, the accuracy complaints, the
hotkey lag, the ad creative counts, the creator co-brand counts and "Wispr trains on your voice by
default" are all in the dailies already, so they are not in here.

- **Wispr put SOC 2 Type II and ISO 27001 on its free plan this week, and holds neither.** The pricing
  page lists both as free-plan features. Our own Aug 23 feature matrix of that page recorded them as
  Growth and Enterprise only, with Free and Pro marked "No". Wispr's security FAQ says the previous
  SOC 2 Type II (Accorp) and ISO 27001 (Gradient) were "proactively invalidated in March 2026 due to
  platform integrity concerns at the original auditor", that what it holds now is a SOC 2 Type I and an
  ISO Stage 1 from April 2026, and that the Type II report is "not yet issued". This is the headline.
- **Org-wide HIPAA requires disabling Notetaker**, per Wispr's own FAQ. The flagship new product is
  unusable by exactly the regulated buyers the compliance page is written for.
- **Snippets and dictionaries sync to Wispr's servers "regardless of Privacy Mode or Cloud Sync"**, so
  even under what Wispr calls Zero Data Retention your custom vocabulary leaves the device.
- **Wispr's public documents contradict each other in three places:** the certificates, the bug bounty
  (enterprise post advertises a public program, FAQ says there is none), and the founding year (FAQ
  says 2023, Tracxn says 2021).
- **Series B: $280M at $2B on Aug 17**, led by Menlo, $361M total, spent on Canto, a cloud model. No
  on-device or edge role anywhere on the 23-role job board.
- **Cloudless is invisible in search:** 27 tracked terms against Wispr's 15,100, 1.01 pages per visit,
  and legacy Onit titles and download paths still live.
- **App store gap:** Wispr 14,620 iPhone and 5,395 Android ratings, Cloudless 2 iPhone ratings.
- **Objection mix, 21 complaints sorted, Aug 17 to 30:** price 48%, privacy 14%, accuracy 14%,
  platform gap 14%, latency 5%, workflow 5%. The biggest bucket is the one IGNORE_RULES rule 2 rules
  out. Four new free local clones shipped in seven days and Cloudless was named in none of them, nor
  in the Plaud or Tactiq roundups, nor by any of the five people who said where they switched.

### What Matt cut, and why

- **"Fix the wrong claims on the Wispr comparison page" was removed on Aug 31 as not truthy.** The
  "$12 vs $15" point was weak, because Cloudless quotes Wispr's annual rate consistently and says
  "$140 yearly" alongside it. The "25+ vs 100+ languages" point was unreliable, because the scraped
  comparison table did not make clear which column the 25+ cell belonged to. Do not re-raise either
  without checking the rendered page first.
- The creative watch list and the paid-creator table were dropped from the weekly. The daily does both,
  with better numbers, and the weekly was restating them a week late.
- "Turn the seat counter into a referral program and pay in seats" was dropped as an action. It did not
  survive the question of what a seat is worth when seats are free. What survived is the narrower point
  that Wispr withholds the referral reward until 2,000 words are dictated.

### House rules changed on Aug 31

- **Source pills go at the end of a paragraph, not after every sentence.** Matt found the peppered
  citations unreadable. Collect a paragraph's sources, dedupe them, and put them together after the
  final full stop. Written into `WEEKLY_REPORT_GUIDANCE.md` and `DAILY_REPORT_GUIDANCE.md` in both
  `clients/` and `skills/`, with a check in the weekly's finish list.
- **The scorecard should not carry rows where one side is blank.** Rows like "share of visits from free
  Google results: 30% / not published" are noise. Every row now says something about both companies.

### On the SOC 2 finding, and how far to push it

The find is real: Wispr's pricing page lists SOC 2 Type II on the free plan, and Wispr's own security
page says it holds a Type I and that the Type II report is "not yet issued". It also says the earlier
Type II and ISO certificates were dropped in March 2026 over "platform integrity concerns at the
original auditor", after which Wispr re-audited with A-LIGN.

**It was written up as the number-one recommended action on the first pass, and that was wrong.**
Dropping certificates because the auditor had problems and re-auditing with a bigger firm is the
responsible thing to do, not a scandal. Cloudless holds no SOC 2 at all, so in public this is a company
with zero certificates attacking one with one, and the obvious reply is "what do you have?". It is also
a distinction only procurement people know, and the daily brief's reply targets are consumers on Reddit.

It now lives as one finding in the pricing section with an explicit "do not build a campaign on this",
and the only action attached is: keep the link for an enterprise bake-off where a buyer has been told
Wispr has Type II. The argument that does work in public is architectural, not certificate-based.

### The ad-template analysis is the most reusable thing in this report

Meta ranks a page's ad library by total impressions and **ignores any `sort_data` parameter you pass**,
so whatever the library returns for a page is already its best-performing live creative. That is the
whole trick: read the top 30 and you are reading the ads that survived the client's own testing, paid
for by them. Do this every week.

What Wispr's top 30 showed on Aug 30: 25 of 30 open on a person or a problem, never the product. The
shape is fixed at four lines (confession or command, the annoyance, the product removing it, "Try Flow
free"). 27 of 30 are video. The overlay headline is always a separate standalone line. By angle:
8 coding and prompting, 6 Notetaker, 4 speed, 4 snippets, 4 creator lifestyle, 2 aspirational, 1 press,
1 giveaway, and **zero** mentioning price, privacy, offline or on-device. 12 of 30 are creator co-brands
and 11 of 30 run as duplicate creatives, which is the signal an advertiser is scaling a winner.

### Advice was cut hard on Aug 31

Matt's rule: if a tip is not clearly impactful, leave it out. Removed in that pass:
"fix the wrong claims on the comparison page" (not truthy, see above), "keep Wispr's security page
bookmarked" (not an action), "get listed in the alternative roundups" (twice, top level and section),
"copy the trigger in Wispr's referral program" (nothing to withhold when the product is already free
and uncapped), and "treat the Android job posting as the deadline for the Android decision" (telling
someone to make a decision is not an action; the finding already says the situation). The Series B
cloud-commitment key finding went too, as already known.

### Tooling that failed this run, and what it cost

- **Apify was unreachable** (`ENOTFOUND mcp.apify.com`), so there were no X, Reddit, LinkedIn or TikTok
  bulk pulls. Reddit also blocks direct requests from this network, and Firecrawl refuses reddit.com.
  Reddit posts were found through Firecrawl web search instead: quotes and URLs are verified, but
  upvote counts could not be captured and post dates are estimated from post-ID ordering. The objection
  mix therefore undercounts, because search surfaces the posts that rank rather than all of them.
  Fix Apify before the next weekly, or the reply table keeps shipping without reach.
- **Firecrawl worked well everywhere else**, including the Meta Ad Library and Similarweb, both of which
  need `proxy: "stealth"`. Similarweb must be read as `markdown`: a `json` extraction on that page
  returned the wrong month and a visit count off by three orders of magnitude.
- **Free and reliable:** the iTunes lookup API (`itunes.apple.com/lookup?id=<id>&country=us`) returns
  rating count and average with no key, and Hacker News Algolia needs `curl` rather than Python urllib,
  which fails TLS verification on this machine.
