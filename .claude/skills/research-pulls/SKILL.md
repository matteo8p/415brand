---
name: research-pulls
description: How research415 pulls data. Every source (X, Reddit, LinkedIn, Hacker News, reviews, app stores, Meta and TikTok ad libraries, Google ads, Similarweb and Semrush, GitHub, Wayback, job boards, the competitor's own site), the exact tool and inputs for each, the free APIs that need no actor, and the gotchas learned in production. Read before any pull for a daily, weekly, lead sheet or client onboarding.
---

# The research toolbox

Everything here runs on public pages without a login or cookies. That line is what keeps the work sellable to a client's legal team, and it is cheaper besides.

Client-specific inputs (queries, page ids, subreddits, handles, app ids) live in each client's `CLIENT.md` under **Pulls**. This file is the how, not the what.

## How to run a pull

1. Start every actor you need at once with `waitSecs: 0`, then poll with `get-actor-run`. Never run them one at a time.
2. Fetch with `get-dataset-items` and **project only the fields you need**. Datasets are large and reading everything burns the context you need for judgement.
3. Write large results to a file in the scratchpad. Filter and count with Python. Read only the survivors.
4. Two stages, always: a cheap wide pull, filter to the ICP, then any per-record enrichment. Enrichment on an unfiltered dataset is how a $3 job becomes a $300 one.
5. Dedupe on URL. Some actors repeat their first rows.
6. Save what you would put in the report and no more. No hoarding of follower graphs or post histories.
7. Apify has a monthly usage cap. When every call fails with "Monthly usage hard limit exceeded", the plan needs topping up and the connector has to be reinstalled and the session restarted before its tools come back. It has also been unreachable outright (`ENOTFOUND mcp.apify.com`). Either way, note it in the run log and carry on with the free sources and Firecrawl. Reddit posts can still be found through `firecrawl_search`, with quotes and URLs but no upvote counts, and the report says what the numbers rest on.

Never name Apify, an actor, a scraper, Firecrawl or a session anywhere a client reads. Cite the primary source.

## X

| Job | Tool | Inputs |
|---|---|---|
| Search posts | `scraper_one/x-posts-search` | `query`, `searchType: "latest"` then again `"top"`, `resultsCount: 100`, `timeWindowHours: 48` (daily) or `168` (weekly) |
| Replies, quotes, retweeters of one post | `xquik/x-tweet-scraper` | `mode`, `tweetIds` or `postUrls` |
| Followers, following, list members | `xquik/x-follower-scraper` | `usernames`, `maxFollowers` |
| Profiles in bulk | `apidojo/twitter-user-scraper` | `twitterHandles` |

Project `timestamp, author.screenName, postText, postUrl, replyCount, repostCount, favouriteCount, quoteCount`.

- **The query must be under 100 characters.** Split long OR lists into several runs.
- Operators that work: `OR`, `-word`, `"exact phrase"`, `min_faves:`, `lang:`. **`since:` and `until:` are ignored**, use `timeWindowHours`.
- `latest` caps at 100 and now fills in a single day for a busy brand. Always run `top` too, and for a two-day window run a second `latest` with the bare phrase and `timeWindowHours: 60`, then dedupe on `postUrl`.
- No view counts and no follower counts come back. Reach is likes, replies, reposts.
- Likes have been private since June 2024. You can get who replied, quoted or reposted, never who liked.
- For a reply search on the client's own handle, only replies that name the handle come back. Founder replies without the handle are invisible. Ask the client.
- Weight English with `lang:en` when the client's market is English-only, and run a separate `lang:ja` (or whichever) query when another market is first-class.

## Reddit

| Job | Tool | Inputs |
|---|---|---|
| Keyword search and subreddit crawl | `harshmaur/reddit-scraper` | `searchTerms`, `searchPosts: true`, `searchComments: true`, `searchSort: "new"`, `searchTime: "week"`, `postedAfter`, `maxPostsCount: 50`, `fastMode: true`; `startUrls` for a subreddit's `/new/` page |
| Higher volume alternative | `trudax/reddit-scraper-lite` | `searches`, `sort`, `time`, `maxItems` |

Project `dataType, createdAt, parsedCommunityName, title, body, postUrl, upVotes, commentsCount, authorName`.

- Search returns off-topic hits (foreign-language threads, deal spam, name collisions). Drop anything that does not name the competitor in the title or body.
- Search is weak and `searchTime` is sometimes ignored (results went back to 2017). **Crawl the subreddits directly** with `startUrls`, especially the competitor's own subreddit, where the best complaints always are.
- Keep search terms as product names. Problem descriptions ("planning with claude code") return noise.
- Reddit blocks Firecrawl ("we do not support this site") and plain curl. Reddit content comes through the actor or through `firecrawl_search` snippets, which give quotes and URLs but no upvote counts. Never invent engagement numbers.
- Reddit does not expose who upvoted.
- For some categories Reddit is worth nothing (Claude Tag: five terms, 119 posts, zero on topic). Log the count and stop budgeting time for it.

## LinkedIn

The `harvestapi` family: no cookies, consistent schema, profile enrichment in the same call.

| Job | Tool | Inputs |
|---|---|---|
| Search posts by keyword | `harvestapi/linkedin-post-search` | `searchQueries`, `postedLimit` (`24h`, `week`, `month`), `sortBy: "date"`, `maxPosts: 40`, `authorsCompanies`, `authorKeywords` |
| Everyone who engaged with those posts | same | add `scrapeReactions: true`, `maxReactions`, `scrapeComments: true`, `maxComments`, `reactionsProfileScraperMode: "short"` |
| A company page's own posts and engagers | `harvestapi/linkedin-profile-posts` | `targetUrls`, `postedLimit`, `scrapeReactions`, `scrapeComments` |
| One person's profile, optional email | `harvestapi/linkedin-profile-scraper` | `urls`, `profileScraperMode` |
| Find people by title, company, headcount | `harvestapi/linkedin-profile-search` | `currentJobTitles`, `currentCompanies`, `companyHeadcount` |
| Job posts | `curious_coder/linkedin-jobs-scraper` | `keywords`, `companyIds`, `datePosted` |

Project `postedAt.date, author.name, author.info, content, linkedinUrl, engagement.likes, engagement.comments`.

- Reactions and comments are billed **per engager**. A viral launch post at `maxReactions: 500` is 500 rows. Cap it, and pull the long tail only for accounts worth it.
- `profileScraperMode: "short"` is enough to filter on title and company. Pay for `main` only on records that survive the ICP filter.
- Engagers come back with headline and employer, which is why LinkedIn is the highest-yield source for who-is-a-competitor's-customer work.
- LinkedIn does not publish the date of a reaction. Where a row rests on a reaction, the date shown is the post's.
- People do not complain on LinkedIn, they announce. Query for launches, migrations, "we chose X", and roundups. Generic category searches ("AI coworker Slack") return engagement-farming accounts. Pull the competitor's company page and filter reactors by title instead.
- HR and ops buyers live on LinkedIn, not X. Developer buyers are the reverse.

## Hacker News

Free, no actor. `https://hn.algolia.com/api/v1/search_by_date?query=<term>&tags=(story,comment)`. Use https, and use `curl` rather than Python urllib, which fails TLS verification on this machine. Plain queries fuzzy-match, so read the hits rather than trusting rank. `https://hn.algolia.com/api/v1/items/<id>` returns a whole thread with every comment. For a client whose buyers are developers, HN is the most important surface there is, and "Ask HN" threads are recommendation requests in concentrated form.

## Reviews

| Job | Tool |
|---|---|
| G2, Capterra, TrustRadius, Gartner, Trustpilot in one run | `zen-studio/software-review-scraper` (`query` as a **string**, not an array; `platforms`; `starRatings: [1,2,3]` first; `maxResults` at least 100) |
| Reviewer firmographics on G2 and Capterra | `khadinakbar/software-reviews-all-in-one-scraper`, `taroyamada/g2-capterra-review-intelligence` |
| Trustpilot only | `taroyamada/trustpilot-enterprise-review-aggregator` (Trustpilot returns 403 to Firecrawl even on stealth) |

The single richest source for B2B clients: reviewers self-identify with role, company size and industry, and a two-star review is a customer saying what to sell against. Quote the "dislike" box. Sort by newest and by lowest rating. If the scraper cannot find a product by name, pass the exact G2 URL. Review counts move weekly, re-pull rather than reuse, and print the review count next to every rating on a small base.

## App stores

Free, no actor.

- Rating count and average: `https://itunes.apple.com/lookup?id=<app id>&country=us`.
- Recent reviews with dates: `https://itunes.apple.com/us/rss/customerreviews/id=<app id>/sortBy=mostRecent/json`.
- Google Play: the listing page carries the rating count. Read it with Firecrawl.
- The App Store search page rate-limits crawls. Use the lookup API instead.

## Meta Ad Library

| Job | Tool | Inputs |
|---|---|---|
| The whole library for a page | `apify/facebook-ads-scraper` | `startUrls: [<the ad-library page URL>]`, `resultsLimit` above the page's total (1200 covered 895 live ads in four minutes) |

Run it **twice**: once with `active_status=active` in the URL and once with `active_status=all`. Only the second returns finished creatives with real `endDateFormatted`, which is where lifespan and kill rate come from, and only the first carries the low-impression flag.

Project `adArchiveId, startDateFormatted, endDateFormatted, isActive, snapshot.displayFormat, snapshot.title, snapshot.body.text, snapshot.pageName, snapshot.brandedContent.pageName, collationCount, impressionsWithIndex.impressionsText, snapshot.linkUrl`.

- Page URL shape: `https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&view_all_page_id=<PAGE_ID>&search_type=page&media_type=all`.
- Link each ad as `https://www.facebook.com/ads/library/?id=<adArchiveId>`. A link to a search page is not a swipe file.
- A low `resultsLimit` silently returns only the newest days and undercounts everything.
- The actor rejects `sortBy: "newest"`. Only `total_impressions` or empty are accepted. Meta ranks a page's library by total impressions and ignores any sort you pass, so what comes back first is the page's best-performing live creative. That is the whole trick behind the swipe file.
- The `start_date` URL filter is by impression date, not launch date. Do not use it.
- No `spend`, `reachEstimate` or `totalActiveTime` outside the EU. Lifespan is `endDate` minus `startDate`, or today minus `startDate` on a live one.
- The creator co-brand is `snapshot.brandedContent.pageName`, or the advertiser line reading "<brand> with <creator>".
- **Meta indexes the newest days late.** Yesterday always looks like a collapse. Never call a trend off the last two days, and say so next to the number.
- When a competitor's creatives sit on a bigger parent page (Anthropic's Claude Tag ads on the Claude page), a keyword search of the library is a fallback, but pull `view_all_page_id` for the parent page and filter.
- The library also works through Firecrawl with `proxy: "stealth"`, and in a browser pane by scrolling and parsing `document.body.innerText`, when the actor is unavailable.

## TikTok ad library and organic

- Ads: `lexis-solutions/tiktok-ads-scraper` (`country: "all"`, `sortBy: "create_time,desc"`) or `data_xplorer/tiktok-ads-scraper` (`mode: "library"`). Search twice, by `advertiserName` and by brand keyword. The library covers the EEA and the UK only, so a zero result rules out European spend and nothing else. Say that next to the number. The keyword search returns rival advertisers who bought the competitor's name, which is a list of who else is hunting the same customers.
- Organic: `clockworks/tiktok-scraper` (`searchQueries`, `resultsPerPage: 40`, nothing else, it rejects the other search fields) and `apidojo/tiktok-scraper` (`keywords`, `sortType: "DATE_POSTED"`, `dateRange: "THIS_MONTH"`). They return different sets, and neither respects a two-day window, so label every row with its date. Keyword search drifts ("flow" pulled in perfume shops), drop anything that does not name the brand. Rank creators on likes over plays, not raw plays, or you are ranking by follower count.
- YouTube comments: `streamers/youtube-comments-scraper`. Instagram comments: `apify/instagram-comment-scraper`.

## Google ads, search, traffic

| What | Where | How |
|---|---|---|
| Google ads on record | Google Ads Transparency Center | `https://adstransparency.google.com/?domain=<domain>`. Reports an approximate domain-level figure that can include several advertiser accounts. A count by walking the account differs from the domain estimate, treat the gap as method, not change. |
| Traffic, sources, countries, rank, pages per visit | Similarweb | Firecrawl `similarweb.com/website/<domain>` with `proxy: "stealth"`, and read it as **markdown**. A `json` extraction on that page returned the wrong month and a visit count off by three orders of magnitude. Similarweb has no data below its reporting floor or for a site younger than a month. Figures are modelled estimates, say so once. |
| Organic and paid keywords, spend estimate, AI citations | Semrush | Firecrawl or a browser pane |
| Paid keyword history, ad budget history | SpyFu | `spyfu.com/overview/domain?query=<domain>` |
| Search volume and cost per click | Google Keyword Planner | a Google Ads account |
| Links from other sites | Ahrefs | the free traffic checker |

When two tools disagree by more than 2x, print both.

## GitHub

Free, through the GitHub REST API with `gh` on the user's token. For a competitor that sells an API or SDK this is the best evidence source there is.

- **Who touched it this week:** `search/commits` with `q=<competitor> committer-date:>=<date>`. Mostly small personal repositories.
- **Who runs it at all:** `search/code` for `api.<competitor>.com`, `<COMPETITOR>_API_KEY`, the SDK package name and the import line. This is the search that surfaces the big projects, because a large repository does not commit to its speech layer every week.
- Code search returns no stars. Collect `repository.full_name`, then call `repos/{full}` for stars, forks and `pushed_at`, and sort.
- Read the commit history on every hit. That is what turns a repository into a named engineer.
- Rate limits bind: 30 requests a minute on search, 10 on code search, and the secondary limiter rejects bursts even when `rate_limit` shows quota. Retry the 403 with a backoff.
- A repository that only mentions the competitor in its README does not run it. Skill registries, awesome-lists and prompt catalogues match the name and use nothing. Drop them.
- Firecrawl's developer search covers issues, merged PRs, READMEs and docs, which finds people discussing a competitor's SDK, not repositories importing it.

## Wayback Machine

`http://archive.org/wayback/available?url=<url>&timestamp=<YYYYMMDD>` then `https://web.archive.org/web/<ts>/<url>`. Diff a competitor's logo wall or pricing page against six and twelve months ago. A logo that disappeared is a customer who left, which is the strongest poach signal that exists and it is free.

## The competitor's own site

Firecrawl. `map` the sitemap first to see the shape (a 20,000-URL site does not need crawling, six pages do), then `scrape` the pages that carry evidence: `/pricing`, `/customers`, `/case-studies`, `/blog`, `/changelog`, `/security`, `/docs`, `/about`, `/careers`, the creator and referral pages. Use structured extraction to pull customer names off a logo wall into a list. `search` covers the "who says they use X" sweep. Sites behind a JS challenge (Sucuri and the like) need `proxy: "stealth"` or a browser pane.

Always cite which page a number came from. Companies contradict themselves across their own pages (customer counts, country counts, certificate claims), and the contradiction is often the finding.

## Job boards

Ashby, Greenhouse and Lever boards are public JSON or HTML. LinkedIn Jobs through the actor above. Built In and StartX list salary ranges. Read every ad in full and quote it. Job ads say what marketing will not.

## Guardrails

- Public pages only. No logged-in scraping, no cookie injection, no bypassing a block or a login wall. If a workflow needs a session cookie or a paid seat's data, stop and say so.
- Collect the fields that end up in the report and no more.
- Every claim links to its source. No inferred employers stated as fact: "bio says", "profile lists".
- Third-party claims about acquisitions, funding and security incidents that rest on one vendor blog get marked **[unverified]** in research files and never appear as fact in a client's report.
- Contact people in the channel they posted in. We draft outreach. A human sends.
