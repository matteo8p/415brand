# The scraping toolbox

Reference for `skills/FIND_LEADS.md` and `skills/FIND_CUSTOMERS_OF_COMPETITORS.md`. Actors, inputs, prices and the things that go wrong. Prices are Apify pay-per-event list prices on the free tier, checked 2026-08-27; higher plan tiers are cheaper and the Actor page is the source of truth. Everything listed here runs **without login or cookies**.

## How to run a pull

1. Start every actor you need in one go with `waitSecs: 0`, then poll `get-actor-run`. Do not run them one at a time.
2. Fetch with `get-dataset-items` and **project only the fields you need**. These datasets are large; reading everything burns the context you need for judgement.
3. Large results get written to a file. Filter with Python, not by reading.
4. Two-stage always: cheap wide pull → filter to ICP → expensive per-record enrichment. Enrichment on an unfiltered dataset is how a $3 job becomes a $300 one.
5. Apify has a monthly usage cap. If every call fails with "Monthly usage hard limit exceeded," the plan needs topping up, and the connector has to be reinstalled and the session restarted before its tools come back.

---

## X (Twitter)

| Job | Actor | Key inputs |
|---|---|---|
| Search posts (what we use today) | `scraper_one/x-posts-search` | `query`, `searchType: "latest"` \| `"top"`, `resultsCount`, `timeWindowHours` |
| Replies, quotes, retweeters, threads, advanced search | `xquik/x-tweet-scraper` | `mode`, `tweetIds`/`postUrls`, 50+ filters. ~$0.15/1K rows |
| Retweeters of one post only | `seemuapps/x-tweet-retweeters-scraper` | `tweetId`, `maxItems` |
| Quote tweets of one post | `seemuapps/x-quote-tweets-scraper` | `tweetId`, `maxItems` |
| Followers / following / list / community members | `xquik/x-follower-scraper` (~$0.15/1K) or `kaitoeasyapi/premium-x-follower-scraper-following-data` (~$0.10/1K) | `usernames`, `getFollowers`, `maxFollowers` |
| Profiles in bulk, incl. retweeters | `apidojo/twitter-user-scraper` | `twitterHandles`, `getRetweeters`, `getFollowers` |

Bites:

- **Likes are private.** X made likes private for all accounts in June 2024 and has not reversed it. There is no public liker list; any actor advertising "favoriters" is returning something else or nothing. Public engagement on X = replies, quote posts, reposts, bookmarks count. Report reach as likes/replies/reposts as the tool gives them, but you cannot get *who* liked.
- `since:` / `until:` operators are ignored by `scraper_one/x-posts-search`. Use `timeWindowHours`.
- That actor returns no view counts and no follower counts.
- `latest` caps at 100 and fills up in hours on a busy day. Always also run `top`.

## LinkedIn

The `harvestapi/*` family is the one to standardise on: no cookies, consistent schema, and profile enrichment built into the same call.

| Job | Actor | Key inputs |
|---|---|---|
| Search posts by keyword | `harvestapi/linkedin-post-search` | `searchQueries`, `postedLimit` (`24h`/`week`/`month`), `sortBy`, `maxPosts`, `authorsCompanies`, `authorKeywords`, `mentioningCompany` |
| **Everyone who engaged with those posts** | same actor | `scrapeReactions: true`, `maxReactions`, `scrapeComments: true`, `maxComments`, `commentsPostedLimit`, and `reactionsProfileScraperMode` / `commentsProfileScraperMode` = `short` or `main` |
| A competitor's own posts + engagers | `harvestapi/linkedin-profile-posts` | `targetUrls` (profile or company URL), `postedLimit`, `scrapeReactions`, `scrapeComments` |
| What one person has been reacting to / commenting on | `harvestapi/linkedin-profile-reactions`, `harvestapi/linkedin-profile-comments` | `profiles`, `postedLimit` |
| Full profile (+ optional email) | `harvestapi/linkedin-profile-scraper` | `urls`, `profileScraperMode`; email search is a separate, dearer event |
| Find people by filters (title, company, headcount, recent job change) | `harvestapi/linkedin-profile-search` | `searchQuery`, `currentCompanies`, `currentJobTitles`, `companyHeadcount`, `recentlyChangedJobs` |
| Company firmographics | `foxlabs/linkedin-company-scraper` | `companies` |
| Job posts (hiring signal) | `curious_coder/linkedin-jobs-scraper` | `keywords`, `companyIds`, `datePosted`, `scrapeCompany` |

Cheaper alternatives for post engagers if cost bites: `apimaestro/linkedin-post-comments-replies-engagements-scraper-no-cookies` ($5/1K), `datadoping/linkedin-post-comments-scraper` ($1.55/1K), `unseenuser/linkedin-post-comment-reaction-extractor-no-cookies` (comments *and* reactions, $5.50/1K).

Bites:

- Reactions and comments are billed **per engager**, not per post. A competitor's viral launch post at `maxReactions: 500` is 500 billable rows. Cap it, sort for the ones that matter, and pull the long tail only when the account is worth it.
- `profileScraperMode: "short"` is enough to filter on title and company. Only pay for `main`/`full` on records that survive the ICP filter.
- LinkedIn's user agreement prohibits scraping; these actors work on public pages without an account, which is the line we stay on. Never supply session cookies.

## Reddit

| Job | Actor | Key inputs |
|---|---|---|
| Search + subreddit crawl (what we use today) | `harshmaur/reddit-scraper` | `searchTerms`, `searchPosts`, `searchComments`, `searchSort: "new"`, `searchTime`, `postedAfter`, `withinCommunity`, `maxPostsCount`, `fastMode` |
| Alternative, higher volume | `trudax/reddit-scraper-lite` or `fatihtahta/reddit-scraper-search-fast` | `searches`/`queries`, `sort`, `time`, `maxItems` |

Bites: search returns off-topic hits (foreign-language threads, deal spam) — drop anything that doesn't mention the term in title or body. Reddit does not expose who upvoted. The competitor's own subreddit is worth a direct crawl separately from keyword search.

## Review sites

| Job | Actor |
|---|---|
| G2 + Capterra + TrustRadius + Gartner + Trustpilot in one run, by product name or domain | `zen-studio/software-review-scraper` (`query`, `platforms`, `starRatings`, `sort`) |
| G2 + Capterra with reviewer firmographics | `khadinakbar/software-reviews-all-in-one-scraper`, `taroyamada/g2-capterra-review-intelligence` |
| Trustpilot only | `taroyamada/trustpilot-enterprise-review-aggregator` |

This is the highest-value-per-dollar source in the whole toolbox for B2B clients. Always filter `starRatings` to 1–3 first.

## Other platforms

| Source | Actor |
|---|---|
| Instagram comments | `apify/instagram-comment-scraper` (official) |
| YouTube comments | `streamers/youtube-comments-scraper` (official), `apidojo/youtube-comments-scraper` (cheaper) |
| Google Maps reviews | `taroyamada/google-maps-review-intelligence` |
| GitHub code search (who imports a competitor's SDK) | `automly/github-code-search-api`, or the GitHub REST API directly with a token — free and better |
| Website tech stack | `jorokotev/public-website-tech-stack-crm-signals`, `lofomachines/website-tech-profiler` |
| Contact details from a domain | `zinin/website-contact-extractor`, `ninhothedev/website-contact-extractor` |
| Bulk B2B contacts by filter (Apollo-style) | `coladeu/apollo-people-leads-scraper` (no emails), `braveleads/leads-finder-linkedin-apollo-leads-generator` (with emails) |

## Free sources that need no actor

- **Meta Ad Library** — `https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&view_all_page_id=<PAGE_ID>&search_type=page&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped`. Open in the browser pane, scroll, parse `document.body.innerText`. `start_date[min]` filters by impression date, not launch date — don't rely on it.
- **Hacker News** — Algolia API: `https://hn.algolia.com/api/v1/search_by_date?query=<term>&tags=(story,comment)`. No key, no cost.
- **Wayback Machine** — `http://archive.org/wayback/available?url=<url>&timestamp=<YYYYMMDD>` plus `https://web.archive.org/web/<ts>/<url>`. This is how you diff a competitor's logo wall over time.
- **GitHub API** — code, repo and org search with a personal token. 
- **The competitor's own site** — crawl it with Firecrawl rather than by hand. `map` the sitemap first to see the shape (`clients/sprag/competitors.md` was built over a 19,868-URL one), then `scrape` the pages that carry A-tier evidence — `/customers`, `/case-studies`, `/blog`, `/pricing`, `/changelog`, `/docs`, `/about` — and use structured extraction to pull customer names and logos straight into a list instead of reading pages. `search` covers the "who says they use X" sweep. Cap the crawl: a 20k-URL site does not need crawling, six pages do.
