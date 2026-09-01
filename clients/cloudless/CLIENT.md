---
slug: cloudless
client: Cloudless
subject: Wispr Flow
readers: Tim at Cloudless
cadence: daily and weekly
status: live
site: https://cloudless.so
market: Consumer, worldwide. Non-English posts can be reply targets when Tim can answer them, French has worked.
resend_segment: e3b1e4f6-3240-4fd3-8ce3-a2dbda9fb709
reply_to: matt@415brand.com
slack_channel: C0BTUF18WUE
---

# Cloudless

## What they sell

Cloudless Voice is a free, 100% on-device voice dictation app for Mac (M-series only), Windows and iOS. Formerly Onit Dictate, rebranded June 29, 2026. Synth, Inc., San Francisco, run by Tim Lenardo, bootstrapped. The pitch is free, private, offline, and every page on the site is a comparison against Wispr Flow, its sole named enemy. No Android, no Linux, no SOC 2. Full background in `research/cloudless.md`.

## Who reads it and what they want

- **Tim Lenardo**, founder and CEO. `tim.lenardo@gmail.com`, `@telenardo` on X. The only reader.

The goal in one sentence: Tim replies to people complaining about Wispr and converts them to Cloudless. Everything in the brief serves that.

In priority order:

1. Wispr complaints Tim can reply to. Price cap, privacy, iPhone, Windows, accuracy. Fresh, specific, zero replies first.
2. Switchers and shoppers: comparisons, "what should I use", people trying Wispr in public, competitor launches with an audience Tim wants.
3. Anything Wispr ships that blunts free, private or offline: a local mode, a price change, an Android or free-tier move.
4. Wispr's influencers, paid and unpaid (Tim, Aug 27). Paid creators come from the Meta Ad Library co-brand line ("Wispr Flow with X" or "X with Wispr Flow"). Unpaid ones from TikTok. The useful angle is the gap: big "free Wispr alternatives" videos that do not mention Cloudless, and creators asking for replacement suggestions.
5. A source link on every claim, including the week bullets (Tim, Aug 27).

**What Tim said in Slack, Aug 31 to Sept 1.** On what is working: "I'm not doing a great job of this right now. We were previously running Reddit ads, and have tried some SEO/GEO and general content marketing (like comparing word accuracy of different models/apps). But I wouldn't say anything in particular is working. We're definitely losing to FluidVoice, etc." On what he wants to try: "SEO, influencer videos. Are the two I think most about. If we could get ChatGPT/Codex whatever to recommend us that'd be ideal." On content: "Main blocker here is that that is really expensive and we're a free app. But I agree it's an awesome idea and we should be doing way more content." On money: he is actively cutting costs.

So the two things every Cloudless report is judged on are **search (SEO and being recommended by ChatGPT and Codex)** and **creator videos**, and every recommendation has to be cheap: pages Tim can generate, creators paid on performance, replies that cost a minute. FluidVoice is a competitor Tim says he is losing to, so switches to it are intel worth a bullet even though the ignore list drops free-competitor posts as reply targets.

## Report shape

**Daily.** Title "Wispr Flow daily brief". Subtitle "For Tim at Cloudless, Month D, YYYY". Contents box, then the green "Today's three moves" box, then:

1. People complaining about Wispr. Columns Where | Date | Post | Reach | What Tim can do. Five rows, fresh zero-reply complaints first.
2. People shopping around or on the fence. Same columns, five rows.
3. People happy with Wispr. Same columns but the last is "Why it matters". Five rows, no reply.
4. Wispr ads and creator posts that work, to send your team. One table, five rows: three brand ads, one creator-fronted ad, one organic creator post, each labelled by kind, each linking to one creative with the hook quoted word for word, the evidence it worked, and one line of brief. Then a Takeaway paragraph naming the shape the winners share and the negative-search count. Do not repeat a swipe row on consecutive days.
5. What happened this week. Five bullets, every claim linked.

No "New Wispr ads" stats section. No "What we left out" section. No footer, no sources section, no methodology. The email carries the contents box as plain numbered text because in-page anchors do not navigate in webmail.

Table size is five rows. The Aug 28 daily ran ten complaints, the shared skill then settled on three to five, and the Aug 31 and Sept 1 dailies ran five. Tim has not said which he prefers.

**Search and AI recommendations, standing from Sept 1.** Tim's two priorities are SEO and creator videos, and being recommended by ChatGPT and Codex. Matt told him in Slack (Sept 1) that SEO and AI recommendations are the same job, because the assistants use web search. So: the swipe file and creators section stay, and the weekly carries a search section built around page counts and sitemaps. Matt promised the next report would map Cloudless's sitemap against Wispr Flow's and Willow Voice's and list the pages Cloudless could spin up (comparison pages against every rival, "why local-first dictation matters" articles, a Product Hunt launch for referring links). Tim: "Okay sounds great!" The ranking of any SEO finding is by what a one-person free app can ship this week.

Cloudless's pitch to lean on in the advice cell: free, on-device, Mac, Windows and iOS, no word limit. Never claim a product detail that has not been confirmed. Write "if Cloudless does X, say so."

**Weekly.** The standard weekly shape. The objection mix figure leads with a `rows` chart carrying `labelAll`, coloured by whether Cloudless can answer the bucket or the ignore list rules it out, with the `share` chart next to the bucket table in Full analysis. The creative watch list and the paid-creator table are not in the weekly, the daily does both with better numbers. Scorecard rows where one side is blank are dropped. Read Wispr's top 30 library ads every week: Meta ranks a page by total impressions whatever sort parameter is passed, so the top of the library is the creative that survived Wispr's own testing.

## Do not pitch on

- Anything in `IGNORE_RULES.md`: fresh subscribers who are happy, audiences already on a free competitor, deal resale, affiliates, astroturf, Linux-only users, off-topic noise, Wispr as a business-school case study.
- Android users. No app.
- The SOC 2 finding. Wispr's pricing page claims Type II and its security page says Type I. Cloudless holds no SOC 2 at all, so it is one finding for an enterprise bake-off, never a campaign (Matt, Aug 31).
- If a tip is not clearly impactful, leave it out (Matt, Aug 31).

## Pulls

| Source | Tool | Input |
|---|---|---|
| X | `scraper_one/x-posts-search` | `query: "\"wispr flow\" OR wisprflow OR @WisprFlow"`, `searchType: "latest"`, `resultsCount: 100`, `timeWindowHours: 48`, then again with `"top"`. The 100 cap now fills in a single day, so also run the bare phrase `"wispr flow"` with `timeWindowHours: 60` to reach day two. Dedupe on `postUrl`, the dataset repeats its first 20 rows. Project `timestamp,author.screenName,postText,postUrl,replyCount,repostCount,favouriteCount,quoteCount`. |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["wispr flow", "wisprflow"]`, `searchPosts: true`, `searchComments: true`, `searchSort: "new"`, `searchTime: "week"`, `postedAfter` two days ago, `maxPostsCount: 50`, `fastMode: true`. Also `startUrls` on `reddit.com/r/WisprFlow/new/`, or the subreddit is invisible. Search is now mostly deal spam and free clones. Project `dataType,createdAt,parsedCommunityName,title,body,postUrl,upVotes,commentsCount,authorName`. |
| LinkedIn | `harvestapi/linkedin-post-search` | `searchQueries: ["wispr flow", "wisprflow"]`, `maxPosts: 40`, `postedLimit: "week"`, `sortBy: "date"`. Project `postedAt.date,author.name,author.info,content,linkedinUrl,engagement.likes,engagement.comments`. |
| TikTok | `clockworks/tiktok-scraper` | `searchQueries: ["wispr flow"]`, `resultsPerPage: 40`. Send only those two fields, the actor rejects `searchSection` and `videoSearchSorting`. Pair with `apidojo/tiktok-scraper` (`keywords`, `sortType: "DATE_POSTED"`, `dateRange: "THIS_MONTH"`, `location: "US"`), the two return different sets. Neither respects a two-day window, so date every row and drop anything that does not mention Wispr ("flow" alone pulls perfume shops). |
| Meta ads | `apify/facebook-ads-scraper` | `startUrls` with the page library URL for page id `110864474787474`, `resultsLimit: 1200` (200 only reaches two days back). Run twice, `active_status=active` and `active_status=all`. Project `adArchiveId,startDateFormatted,endDateFormatted,isActive,snapshot.displayFormat,snapshot.title,snapshot.body.text,snapshot.pageName,snapshot.brandedContent.pageName,collationCount,impressionsWithIndex.impressionsText,snapshot.linkUrl`. Co-brand line is `snapshot.brandedContent.pageName`. Link ads as `facebook.com/ads/library/?id=<adArchiveId>`. |
| TikTok ads | `lexis-solutions/tiktok-ads-scraper` (`country: "all"`, `sortBy: "create_time,desc"`) and `data_xplorer/tiktok-ads-scraper` (`mode: "library"`) | Search by `advertiserName` and by the keyword `wispr`. EEA and UK only. The keyword search returns rivals who bought Wispr's name (Scrybapp, sprich.ai). |
| App Store | iTunes lookup, free | Wispr `itunes.apple.com/lookup?id=6497229487&country=us` for rating count and average. Reviews `itunes.apple.com/us/rss/customerreviews/id=6497229487/sortBy=mostRecent/json`. Cloudless app id `6760565298`. |
| Hacker News | Algolia, free | `hn.algolia.com/api/v1/search_by_date?query=wispr`. Use `curl` over https. |
| Similarweb, Google Ads Transparency, Wispr's own pages | Firecrawl, weekly | Similarweb and the Meta library need `proxy: "stealth"`. Read Similarweb as markdown, a JSON extraction returned the wrong month. |
| Sitemaps | Firecrawl `map`, weekly | `cloudless.so`, `wisprflow.ai`, `willowvoice.com`, and FluidVoice's site. Count pages by type (comparison, blog, feature, language). Wispr's comparison pages are text dumps built for search engines, for example `wisprflow.ai/post/wispr-flow-vs-willow-voice`. The gap list is the finding. |
| FluidVoice | X and Reddit, the same queries with `fluidvoice` | Tim says he is losing to it. Count switches to it and who names it. Intel for the bullets, not reply targets. |

**Noise.** Willow Voice planted 11 templated "I started researching…" posts from 11 new accounts across 11 subreddits on Aug 24 to 26. If it recurs, log the pattern once, never list the posts.

## Email

- Segment **cloudless.so**, id `e3b1e4f6-3240-4fd3-8ce3-a2dbda9fb709`. Tim's contact only (`47c0dcb7-cb2c-432d-87ff-22c45819683f`). Never the General segment. Check with `list-contacts` before drafting.
- From `research415 <reports@415brand.com>`. Reply-to `matt@415brand.com`.
- Subject "Wispr Flow daily brief, Mon D" or "Wispr Flow weekly brief, Mon D". Preview text is the counts: "5 Wispr complaints to reply to, 5 people shopping around, and the 5 Wispr ads worth copying."
- The email must match the report exactly, tables and all (Matt, Aug 28). Under 55KB. Unsubscribe line with `{{{RESEND_UNSUBSCRIBE_URL}}}`, plain-text version alongside.
- Broadcast draft only. Matt sends from the dashboard.
- **Slack.** Shared channel `#research415-cloudless` (`C0BTUF18WUE`) with Tim. Matt posts the report link there the morning it goes out and Tim answers in threads. Read the channel and its threads before every run. Draft the Slack message for Matt. Never post there.

## Conflicts and confidentiality

- **Aqua Voice** (`clients/aquavoice/`) is a paying client in this category with this competitor. Matt reviewed the conflict on 2026-08-31 and cleared it. Rules: nothing from this folder appears in an Aqua report and nothing from Aqua appears here (the Wispr research itself is public-source and belongs to neither). A shared Wispr complaint can go to both. Tim's reply is never surfaced to Finn and Finn's is never surfaced to Tim. If Aqua publishes a `/vs/cloudless` page or Cloudless publishes an Aqua page, stop and escalate.
- **Willow Voice** is not a client. Cloudless runs `/willow-voice-alternative` and flags Willow for astroturfing. The public sample at `/samples/wispr` is addressed to Willow, which any dictation founder will notice.

## Open questions for the client

1. Five reply targets a day or ten? They are different products.
2. Should ignore rule 2 exempt people who are asking for a free local tool rather than already using one? `@_nitish_pandey_` was kept on that reading.
3. Does Cloudless handle mixed-language speech? Several people raised it.
4. Which of the proposed ignore rules 3 to 8 does Tim want kept?
5. Paid trial and level of service. Tim (Sept 1): "I'm torn on this. I like the service, but don't have a lot of cash in the company right now. I'm actively trying to cut costs. Let me see if I can find some budget." Then: "Definitely happy to write a quote, and I'm also happy to pay. I just need to figure out how much and what level of service makes sense." Open: the price, the service level, and a testimonial quote for the site.
6. Did Tim comment on the r/macapps "best on-device voice transcription app" thread (`reddit.com/r/macapps/comments/1w3ljff`)? He thinks he did. Check before listing it again.
7. Does Tim want introductions to UGC creators and creator agencies that charge on performance (Matt offered, Sept 1)?
