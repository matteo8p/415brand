# Run log

Newest first. One entry per report sent or built. The daily and weekly skills read the top entry before starting.

## 2026-08-31 weekly (window Aug 24 to 31, data pulled Aug 30)

**Output.** `reports/weekly-08-31-2026.html`, rendered at `/samples/snappy` from `webapp/app/samples/briefs/snappy.ts`. **Nothing sent to Goody.** No Resend segment, no broadcast. Prospect.

**Found.**
- Snappy runs 41 live Meta ads. Goody has never run one, in any country, active or inactive. 25 of Snappy's 41 launched Aug 12 to 19, which is the holiday build. Both companies run Google ads at roughly equal volume, about 300 on record each, so Goody's absence is specific to Meta.
- Eight of Snappy's live ads have been serving `{{product.brand}}` as their body text since Aug 18. A broken dynamic catalog feed, unnoticed for eleven days. Screenshot before it is fixed.
- The recipient-sentiment wedge in `research/snappy.md` is not available yet. Snappy's Trustpilot is 1.9 with all 13 reviews at one star, but Goody's own is 3.4 with 20 of its 50 most recent at one or two stars, and 13 of 30 in 2026. Goody's blog calls its Trustpilot "Excellent". It is not. This is the most important finding in the report.
- Objection mixes differ usefully. Snappy: delivery 35%, catalog 29% (17 sorted). Goody: delivery 33%, redemption 25% (12 sorted). Snappy's problem is what is in the box, Goody's is what happens around it.
- Three of Goody's top G2 complaints are for features already shipped (recipient top-up in May, Company Stores in May, HubSpot in July). Reviewers dated after the ship date still ask for them. Free win.
- Traffic is much closer than the funding. Snappy 211K visits, Goody 171K, Sendoso 102K. Goody wins pages per visit (6.81 vs 5.82) and time on site, and loses bounce (39% vs 33%).
- Snappy has 200+ staff and one open engineering job, in Tel Aviv. No marketing role open. Its swag job ad says "the playbook here is still being written" twenty months after the Covver acquisition. Its careers page contradicts itself: header says 56% of the Fortune 100 and 9M gifts, the job description below says 43% and "more than five million".
- Goody has no comparison pages. Every likely URL 404s. Its only competitor content is two blog posts that disagree with each other about Snappy's country coverage, and the roundup's "15% processing fee" claim is unsourced. Full audit table in `research/goody.md`.
- SOC 2 is answered. Goody says "Goody is SOC 2 certified" in its own address-free blog post. Still no security page on the site.

**Seen but not sent.** The reply table is thin on purpose. 67 X posts and 651 Reddit posts in the Aug 24 to 31 window returned three worth answering. The best is r/SmallBusiness_US on Aug 31: a 24-person company where "some months the platform costs more than the gifts we're sending" on Sendoso, zero replies. Second is Henry Schuck, founder and CEO of ZoomInfo, posting "Most corporate gifting SUCKS" to X and LinkedIn on Aug 26.

**Follow up next run.**
- Re-pull Goody's own Trustpilot. 50 reviews is a small base and it moves.
- Check whether Snappy fixed the `{{product.brand}}` ads.
- Watch Snappy's Meta library through September for the holiday build.
- Confirm the reader and the ignore rules before anything is sent.

**Tooling.**
- X is dead for this category. 100 top posts over 14 days named neither company once.
- Reddit search returns about 96% noise. 400 posts pulled on five terms, 14 on topic, 3 from 2026. `searchTime` was ignored and results went back to 2017. Crawl the subreddits directly instead.
- Reddit blocks Firecrawl and plain curl. `firecrawl_scrape` on a reddit.com URL returns "we do not support this site." Reddit content has to come through `firecrawl_search` snippets or the Apify pull. Do not invent engagement numbers on Reddit threads.
- Trustpilot returns 403 to Firecrawl even on stealth proxy. Both Reddit and Trustpilot came through Apify actors instead.
- The Meta ads actor rejects `sortBy: "newest"`. Only `total_impressions` or empty are allowed.
- `zen-studio/software-review-scraper` takes `query` as a string, not an array, and `maxResults` must be at least 100.
- G2 numbers move. Goody 4.8 (235 reviews) and Snappy 4.8 (312) on Aug 30. Goody's own blog says 4.9 for both, which is stale.

## 2026-08-30 research (folder created)

**Output.** `research/goody.md`, `research/snappy.md`, `research/competitors.md`, `IGNORE_RULES.md`. Built from public sources only. Sourced originally from `ops/OUTREACH_TARGETS.md` rows 21 to 30. No contact made.

**Found.** See the research files. The headline is Snappy's buyer versus recipient review split and Goody's absence from the recommendation threads it should own.

**Follow up next run.** Build the sample weekly.

**Tooling.** Firecrawl map and crawl of snappy.com worked, including the press-release archive and the sitemap.
