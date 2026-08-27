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

Fetch results with `get-dataset-items`, projecting only the fields you need (X: `timestamp,author.screenName,postText,postUrl,replyCount,repostCount,favouriteCount,quoteCount`; Reddit: `dataType,createdAt,parsedCommunityName,title,body,postUrl,upVotes,commentsCount,authorName`; LinkedIn: `postedAt.date,author.name,author.info,content,linkedinUrl,engagement.likes,engagement.comments`). Large results get saved to a file; filter them with Python rather than reading everything.

Things that bite:
- Apify has a monthly usage cap. If every call fails with "Monthly usage hard limit exceeded," the plan needs topping up, and the connector has to be reinstalled and the session restarted before its tools come back.
- The X actor's `since:`/`until:` operators are ignored. Use `timeWindowHours` and the top/latest combination instead.
- The X actor does not return view counts or follower counts, so "Reach" is likes / replies / reposts.
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

Group every post by sentiment, in this order:

1. **People complaining about Wispr** — the reply targets. Put fresh, specific complaints with zero replies first; being the only answer beats being one of twenty.
2. **People shopping around or on the fence** — comparisons, "what should I use," competitor launches with an audience Tim wants.
3. **People happy with Wispr** — no reply, but shows what Wispr users like and where Wispr is or isn't showing up.

Table columns: Where | Date | Post (linked to the source) | Reach | What Tim can do. The last column is one or two sentences in plain language about what Tim should do with the post. Cloudless's pitch is free, on-device, Mac/Windows/iOS; lean on whichever part the complaint is about (price cap, privacy, iPhone, Windows). Don't claim product details we haven't confirmed; write "if Cloudless does X, say so."

Above the tables, a green "Today's three moves" box with the three highest-value replies. After the tables: the ads section (a short stats table, a table of the notable new creatives, a one-paragraph takeaway), then "What happened this week" as five short bullets, then a one-line Sources note. No explanatory grey text under headings. Subtitle is just "For Tim at Cloudless, <date>."

The report is built from `reports/build_report.py`: edit the `COMPLAINTS`, `SHOPPING`, `FANS`, `AD_STATS` and `ADS` lists and run it. It writes the HTML with the same look as `webapp/app/samples/analysis.css` (Wikipedia-style tables, `#3366cc` links, green `.why` box). Render it once with Playwright to check before sending.

### 4. Set up the email (Resend)

Use the Resend connector. The email is a **broadcast draft**, never a direct send, because a human must approve every send (see `clients/RESEND.md`).

- Domain: `415brand.com` (verified). From: `415brand <reports@415brand.com>`. Reply-to: matt@freestylevoice.com.
- Segment: **General** (`5f922ade-5c8d-4469-a696-2e31989f0413`). Check `list-contacts` with that segment ID; Tim's contact (`47c0dcb7-cb2c-432d-87ff-22c45819683f`) must be in it, and `add-contact-to-segment` if not.
- Body: an email-safe copy of the report with **all CSS inlined** (Gmail/Outlook strip `<style>`). Replace `.data` tables with `<table width="100%" cellpadding="6" cellspacing="0" border="0">`, put `valign="top"` and `style="border:1px solid #c8ccd1"` on each cell, inline the heading/link/box styles, drop `class`, `target` and `rel` attributes. Keep it under ~55KB. Add an unsubscribe line at the bottom with `{{{RESEND_UNSUBSCRIBE_URL}}}` (broadcasts require one). Provide a plain-text version too.
- `create-broadcast` with `name`, `segmentId`, `from`, `subject` ("Wispr Flow daily brief, <Mon D>"), `previewText` (counts: "24 Wispr complaints to reply to, 19 people shopping around, 114 new Wispr ads."), `replyTo`, `text`, `html`. Confirm with `get-broadcast` that status is `draft`, then hand Matt the preview link (`https://resend.com/broadcasts/<id>`). Matt sends from the dashboard.

## What the Aug 27 run found (for continuity)

- Google launched Gemini 3.5 Transcribe on Aug 26; a Googler open-sourced a Wispr look-alike on it. Most X chatter since is "is Wispr dead?" Follow up on whether Wispr responds.
- iPhone keyboard and the latest iOS update are the top complaints on both X and Reddit.
- Several long-time users say accuracy got worse; named switches to Aqua Voice and Sarvam Kivi.
- Wispr launched 114 Meta ads Aug 24–26, half for the Notetaker, none mentioning accuracy, privacy or price.
- Wispr's team posts on LinkedIn, not X or Reddit. Tim's replies to @jonpbaker and @mattlam_ (Aug 26) had no engagement yet.
- Broadcast draft: https://resend.com/broadcasts/dfbe87f8-dc39-4dee-9177-d6ac6807a0f3
