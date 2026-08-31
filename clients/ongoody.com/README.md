# Goody (ongoody.com)

> **Status: prospect, not a signed client.** Nothing here has been sent to Goody. Nobody at Goody has been contacted. These files are a seeded research base, built 2026-08-30 from public sources only. The first deliverable is a sample brief used to open the conversation, not a paid report. Do not create a Resend segment or draft a broadcast until Goody says yes.

Goody sells **business gifting with no address required** — you enter an email or phone number, the recipient picks their own gift and enters their own shipping details. Free tier with no software contract, which is the whole go-to-market in a category where everyone else demands twelve months. Business background in `GOODY.md`. The main rival gets its own file: `SNAPPY.md`. Rest of the field in `COMPETITORS.md`.

**Likely reader: Katy Carrigan**, CEO. Also plausible: **Nicholas Teddy**, who leads marketing and personally writes the competitive comparison content — he is the one already doing this job by hand. No contact has been made with either. Confirm the reader before the first brief; the whole shape of the report changes depending on which one it is.

## What Goody would care about

Goody is ~50 people against Snappy's Fortune-100 wall. They cannot out-shout Snappy and they cannot out-enterprise Sendoso. The pitch is not "we will find you gifting leads." It is **"you are winning the product argument and losing the recommendation thread."**

The evidence for that is sitting in one Reddit post. In the most-cited corporate-gifting recommendation thread on Reddit, Snappy is named twice by different people, PerkUp three times, Awardco twice — and Goody once, by a Goody employee who identifies as one. Goody has the highest G2 rating in the category. It is not in the conversation.

Four things Goody needs from a brief, in priority order:

1. **People asking, in public, which gifting platform to use.** r/ExecutiveAssistants, r/humanresources, r/AskMarketing, r/sales, LinkedIn HR communities. This is Goody's homepage written by a stranger and it converts at a rate nothing else touches. It is also the thing they are demonstrably losing.
2. **Unhappy incumbents, named.** Anyone complaining about Sendoso delivery, Reachdesk's contract, an **Alyce → Sendoso migration** (8–10 weeks, forced), Achievers support, or Snappy's catalog skewing corporate. A named unhappy customer of a 12-month contract is the highest-value row we can produce.
3. **Recipient-side sentiment, both directions.** Snappy's split — **4.8 on G2 from buyers, 1.9 on Trustpilot from recipients** — is the sharpest competitive wedge in this category and nobody is using it. **Check Goody's own recipient sentiment before leaning on it.** If Goody has the same problem, that is a more important finding than any lead.
4. **Contract and pricing pain.** "12-month contract," "annual commitment," "platform fee," "$20K minimum." Goody's free tier is the answer and the objection is pre-written.

## Do not pitch on

Goody has no warehousing and no physical gift cards. Do not send them enterprise event-kit or bulk-storage leads — they cannot serve those and will say so. Do not send Fortune 100 procurement leads; Snappy has that wall and Goody has no public SOC 2 answer we could verify. Five good replies beat forty rows, same as Sprag and Ref.

## Seasonality — this one is real

Corporate gifting is a **Q4 business**. Goody published its 2026 Holiday Gift Guide in August; Snappy's own blog runs "150 days to the holidays, why now is the time to start your plan." Between **September and mid-November**, every HR and EA team in the country is actively shopping for a platform, in public, on a deadline. Everything in this file matters roughly triple in that window. Plan pull volume accordingly and do not let the first brief land in a dead month.

## Workflow (weekly)

Follow `skills/WEEKLY_REPORT_GUIDANCE.md` for format and `skills/FIND_LEADS.md` for what counts as a lead. This brief is **lead-first with a real competitor spine** — closer to the Cloudless shape than the Ref shape, because unlike Ref there *is* a single dominant rival.

Structure the brief around the two fronts (HR/employee vs sales/ABM), not around one rival, because Goody sells into both and the competitor set is completely different on each.

### The name problem — worse than usual, in both directions

**Never search the bare string `Goody`.** It is "goody bag," "goody two-shoes," Goody Products Inc. (a real hair-accessories brand with its own review volume), and a common surname. Use:

- `ongoody`, `ongoody.com`, `"Goody gift"`, `"Goody for Business"`, `"Gift of Choice"`
- `@ongoody`, `"Katy Carrigan"`, `"Nicholas Teddy"`

**Never search the bare string `Snappy` either.** It is a common English adjective. A test search on 2026-08-30 returned Wirecutter TV reviews ("snappy performance"), Snappy Shopper (UK grocery), Snappy Tots (crochet), and Google's Snappy compression library — nothing about the company. Use:

- `snappy.com`, `"Snappy Gifts"`, `snappygifts`, `meetsnappy`, `"Hani Goldstein"`

### Pulls

| Source | Actor | Input |
|---|---|---|
| Reddit, buying intent | `harshmaur/reddit-scraper` | `searchTerms: ["corporate gifting platform", "employee gift platform", "gifting platform recommendation", "sendoso alternative", "snappy gifts"]`, `searchSort: "new"`, `searchTime: "week"` |
| Reddit, communities | same | Crawl **r/ExecutiveAssistants**, **r/humanresources**, r/AskHR, r/sales, r/AskMarketing, r/Gifts directly. Recommendation threads live here and keyword search misses them |
| **Review sites — the highest-value pull in this category** | `zen-studio/software-review-scraper` | `query: ["Snappy", "Sendoso", "Reachdesk", "Postal", "Alyce", "PerkUp", "Awardco"]`, `platforms: [g2, capterra, trustradius, trustpilot]`, **`starRatings: [1,2,3]` first**. Per `skills/SCRAPING_TOOLBOX.md` this is the best value-per-dollar source for B2B clients, and here the reviewer is a named HR or ops person at a named company |
| Trustpilot, recipient side | `taroyamada/trustpilot-enterprise-review-aggregator` | `meetsnappy.com`, `snappy.com`, `ongoody.com`. **Goody's own too.** Small bases — report the review count next to every rating |
| LinkedIn, buying intent | `harvestapi/linkedin-post-search` | `searchQueries: ["corporate gifting platform", "employee appreciation gifts", "holiday gifts for employees"]`, `postedLimit: "week"`, `scrapeComments: true`. **HR buyers live on LinkedIn, not X** — this is the reverse of the Ref and Cloudless briefs |
| LinkedIn, competitor engagers | `harvestapi/linkedin-profile-posts` | Snappy's and Sendoso's company pages, `scrapeReactions: true`. Cap `maxReactions` — billed per engager |
| X | `scraper_one/x-posts-search` | `"corporate gifting" OR sendoso OR "snappy gifts" OR ongoody`. **Expect thin results.** Log the number, do not pad the table |
| Competitor sites | Firecrawl | `snappy.com/press-release-archive` (the 2026 product drought — see `SNAPPY.md`), `sendoso.com/resources/blog`, Snappy's careers page. Wayback-diff Snappy's homepage logo wall |

### Meta ads — yes, run this section

Unlike Ref, this **is** a consumer-adjacent marketing category with real paid spend and hard seasonality. Snappy runs video content on `facebook.com/snappygifts` and won two 2026 Telly Awards for a campaign. Check the Meta Ad Library (free, no actor — see `skills/SCRAPING_TOOLBOX.md`) for Snappy, Sendoso and Goody, especially from September onward. If the library is genuinely empty for all three, say so and drop the section for that week rather than inventing one.

### Things that will bite

- **Reddit blocks Firecrawl and plain curl.** Confirmed again on 2026-08-30 — `firecrawl_scrape` on a reddit.com URL returns "we do not support this site." Reddit content has to come through `firecrawl_search` snippets or the Apify pull. **Do not invent engagement numbers on Reddit threads.**
- **Trustpilot returns 403 to Firecrawl** even on stealth proxy. Goody's Trustpilot rating is currently unverified for exactly this reason. Use the Apify Trustpilot actor or load it by hand — do not repeat Goody's own "Excellent" claim as fact.
- **Both companies' own numbers contradict each other.** Snappy's site simultaneously claims 150+ and 176+ countries, 250,000 and 350,000 gifts, 5,000 and 7,000 customers. Goody claims 25,000 companies on the homepage and 12,000 in its boilerplate, 600 brands on the API page and 400 in its blog. **Always cite which page a number came from.**
- **Goody's own comparison post contains at least two claims we could not verify** — that Snappy charges a 15% processing fee, and that Snappy covers only 40+ countries when Snappy's site says 176+. Flag these to Goody rather than repeating them. An unverified fee claim about a competitor in a client's flagship marketing asset is a liability, and telling them is free, specific advice that opens a conversation.
- **G2 numbers move.** Goody 4.8 (235 reviews) and Snappy 4.8 (312) on 2026-08-30. Goody's own blog says 4.9 for both, which is stale. Re-pull, don't reuse.

## Ignore rules

`IGNORE_RULES.md`. Filtering is silent, same as Cloudless and Ref: dropped posts are not shown to the reader.

## Open questions for the first working session

1. **Which reader?** Katy Carrigan (CEO) or Nicholas Teddy (marketing)? The brief is shaped differently for each.
2. **Does Goody know its own recipient-side sentiment?** If Snappy's buyer/recipient split is real, the first question is whether Goody has it too.
3. **Is Goody SOC 2 certified?** A third party says yes; we could not find it on Goody's site. This gates the enterprise leads.
4. **How much is the free tier actually converting to Team?** Determines whether we hunt for free-tier power users or net-new buyers.
5. **Do they want the Commerce API treated as a separate front?** It is a different buyer entirely — platform/product people, not HR — and would need its own table.

## What the Aug 30 report found (for continuity)

First report built: `reports/08-30-2026.html`, rendered at `/samples/snappy`. Data pulled Aug 30.
**Nothing sent to Goody.** No Resend segment, no broadcast, per the status note at the top.

- **Snappy runs 41 live Meta ads. Goody has never run one**, in any country, active or inactive. 25 of
  Snappy's 41 launched Aug 12 to 19, which is the holiday build. Both companies run Google ads at roughly
  equal volume (about 300 on record each), so Goody's absence is specific to Meta.
- **Eight of Snappy's live ads have been serving `{{product.brand}}` as their body text since Aug 18.**
  A broken dynamic catalog feed, unnoticed for eleven days. Screenshot before it is fixed.
- **The recipient-sentiment wedge in `SNAPPY.md` is not available yet.** Snappy's Trustpilot is 1.9 with all
  13 reviews at one star, but Goody's own is 3.4 with **20 of its 50 most recent at one or two stars**, and
  13 of 30 in 2026. Goody's blog calls its Trustpilot "Excellent". It is not. This corrects the open question
  in `SNAPPY.md` and it is the most important finding in the report.
- **Objection mixes differ in a useful way.** Snappy: delivery 35%, catalog 29% (17 sorted). Goody: delivery
  33%, redemption 25% (12 sorted). Snappy's problem is what is in the box, Goody's is what happens around it.
- **Three of Goody's top G2 complaints are for features already shipped** (recipient top-up in May, Company
  Stores in May, HubSpot in July). Reviewers dated *after* the ship date still ask for them. Free win.
- **Traffic is much closer than the funding.** Snappy 211K visits, Goody 171K, Sendoso 102K. Goody wins pages
  per visit (6.81 vs 5.82) and time on site, and loses bounce (39% vs 33%).
- **Snappy has 200+ staff and one open engineering job**, in Tel Aviv. No marketing role open. Its swag job ad
  says "the playbook here is still being written" twenty months after the Covver acquisition.
- Snappy's careers page contradicts itself: header says 56% of the Fortune 100 and 9M gifts, the job
  description below says 43% and "more than five million".

### Notes for the next run
- **X is dead for this category.** 100 top posts over 14 days named neither company once. Do not build a table
  from it. Report the number and move on.
- **Reddit search returns ~96% noise.** 400 posts pulled on five terms, 14 on topic, 3 from 2026. `searchTime`
  was ignored and results went back to 2017. Crawl the subreddits directly instead, per the pulls table.
- Firecrawl cannot read Reddit at all, and Trustpilot 403s it. Both came through Apify actors instead.
- The Meta ads actor rejects `sortBy: "newest"`. Only `total_impressions` or empty are allowed.
- `zen-studio/software-review-scraper` takes `query` as a **string**, not an array, and `maxResults` must be
  at least 100.
- Goody's Trustpilot needs re-pulling every week. 50 reviews is a small base and it moves.
