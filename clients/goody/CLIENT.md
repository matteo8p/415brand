---
slug: goody
client: Goody
subject: Snappy
readers: the Goody team
cadence: weekly
status: prospect
site: https://www.ongoody.com
market: United States, English
resend_segment: none
reply_to: matt@415brand.com
---

# Goody (ongoody.com)

> **Status: prospect, not a signed client.** Nothing here has been sent to Goody. Nobody at Goody has been contacted. The research base was built 2026-08-30 from public sources only. The first deliverable is a sample brief used to open the conversation, not a paid report.

## What they sell

Goody sells business gifting with no address required. You enter an email or phone number, the recipient picks their own gift and enters their own shipping details. There is a free tier with no software contract, which is the whole go-to-market in a category where everyone else demands twelve months. About 50 people. Background in `research/goody.md`. The main rival, Snappy, has its own dossier in `research/snappy.md`. The rest of the field is in `research/competitors.md`.

## Who reads it and what they want

Likely reader: **Katy Carrigan**, CEO. Also plausible: **Nicholas Teddy**, who leads marketing and personally writes the competitive comparison content, so he is the one already doing this job by hand. Confirm the reader before the first brief. The whole shape changes depending on which one it is.

The pitch is not "we will find you gifting leads." It is **"you are winning the product argument and losing the recommendation thread."** In the most-cited corporate-gifting recommendation thread on Reddit, Snappy is named twice by different people, PerkUp three times, Awardco twice, and Goody once, by a Goody employee who identifies as one. Goody has the highest G2 rating in the category and is not in the conversation.

What the brief must deliver, in priority order:

1. **People asking, in public, which gifting platform to use.** r/ExecutiveAssistants, r/humanresources, r/AskMarketing, r/sales, LinkedIn HR communities. This is Goody's homepage written by a stranger, and it is the thing they are demonstrably losing.
2. **Unhappy incumbents, named.** Complaints about Sendoso delivery, Reachdesk's contract, an Alyce to Sendoso migration (8 to 10 weeks, forced), Achievers support, or Snappy's catalog skewing corporate. A named unhappy customer of a 12-month contract is the highest-value row.
3. **Recipient-side sentiment, both directions.** Snappy's split, 4.8 on G2 from buyers and 1.9 on Trustpilot from recipients, is the sharpest wedge in the category. **Check Goody's own recipient sentiment before leaning on it.** The Aug 30 pull found Goody's own Trustpilot at 3.4 with 20 of its 50 most recent reviews at one or two stars, so this wedge is not available yet.
4. **Contract and pricing pain.** "12-month contract", "annual commitment", "platform fee", "$20K minimum". Goody's free tier is the answer and the objection is pre-written.

## Report shape

Weekly. Lead-first with a real competitor spine, closer to the Cloudless shape than the Ref shape, because there is a single dominant rival. Structure the brief around the two fronts Goody sells into, HR and employee gifting versus sales and ABM gifting, not around one rival, because the competitor set is different on each.

Run the Meta ads section. This is a consumer-adjacent marketing category with real paid spend and hard seasonality. If the library is empty for all three companies in a given week, say so and drop the section rather than inventing one.

**Seasonality is real.** Corporate gifting is a Q4 business. Between September and mid-November every HR and EA team is shopping for a platform, in public, on a deadline. Everything matters roughly triple in that window. Do not let the first brief land in a dead month.

The reply table is thin on purpose. Five good replies beat forty rows. If a week has nothing, say so or drop the section.

## Do not pitch on

- Enterprise event-kit or bulk-storage leads. Goody has no warehousing and no physical gift cards and will say so.
- Fortune 100 procurement leads. Snappy has that wall.
- Volume. Five rows the team can work beats forty.
- Post-level filter is in `IGNORE_RULES.md`. Filtering is silent.

## Pulls

| Source | Tool | Input |
|---|---|---|
| Reddit, buying intent | `harshmaur/reddit-scraper` | `searchTerms: ["corporate gifting platform", "employee gift platform", "gifting platform recommendation", "sendoso alternative", "snappy gifts"]`, `searchSort: "new"`, `searchTime: "week"`. Note `searchTime` was ignored on Aug 30 and results went back to 2017 |
| Reddit, communities | same, `startUrls` | Crawl **r/ExecutiveAssistants**, **r/humanresources**, r/AskHR, r/sales, r/AskMarketing, r/Gifts directly. Recommendation threads live here and keyword search misses them |
| Review sites, the highest-value pull | `zen-studio/software-review-scraper` | `query` as a **string** ("Snappy", then "Sendoso", "Reachdesk", "Postal", "Alyce", "PerkUp", "Awardco"), `platforms: [g2, capterra, trustradius, trustpilot]`, `starRatings: [1,2,3]` first, `maxResults` at least 100. The reviewer is a named HR or ops person at a named company |
| Trustpilot, recipient side | `taroyamada/trustpilot-enterprise-review-aggregator` | `meetsnappy.com`, `snappy.com`, `ongoody.com`. Goody's own too. Small bases, so report the review count next to every rating. Re-pull every week |
| LinkedIn, buying intent | `harvestapi/linkedin-post-search` | `searchQueries: ["corporate gifting platform", "employee appreciation gifts", "holiday gifts for employees"]`, `postedLimit: "week"`, `scrapeComments: true`. HR buyers live on LinkedIn, not X |
| LinkedIn, competitor engagers | `harvestapi/linkedin-profile-posts` | Snappy's and Sendoso's company pages, `scrapeReactions: true`. Cap `maxReactions`, billed per engager |
| X | `scraper_one/x-posts-search` | `"corporate gifting" OR sendoso OR "snappy gifts" OR ongoody`. Expect thin results. On Aug 30, 100 top posts over 14 days named neither company once. Log the number, do not build a table from it |
| Meta ads | `apify/facebook-ads-scraper` | Snappy (`facebook.com/snappygifts`), Sendoso and Goody pages. The actor rejects `sortBy: "newest"`, only `total_impressions` or empty are allowed |
| Competitor sites | Firecrawl | `snappy.com/press-release-archive` (the 2026 product drought), `sendoso.com/resources/blog`, Snappy's careers page. Wayback-diff Snappy's homepage logo wall |
| Google ads | Google Ads Transparency Center | `snappy.com`, `ongoody.com`, `sendoso.com`. About 300 on record each for Snappy and Goody on Aug 30 |

Name collisions, worse than usual in both directions.

- **Never search the bare string `Goody`.** It is goody bag, goody two-shoes, Goody Products Inc. (a hair-accessories brand with its own review volume) and a common surname. Use `ongoody`, `ongoody.com`, `"Goody gift"`, `"Goody for Business"`, `"Gift of Choice"`, `@ongoody`, `"Katy Carrigan"`, `"Nicholas Teddy"`.
- **Never search the bare string `Snappy`.** A test search on Aug 30 returned Wirecutter TV reviews, Snappy Shopper, Snappy Tots and Google's Snappy compression library. Use `snappy.com`, `"Snappy Gifts"`, `snappygifts`, `meetsnappy`, `"Hani Goldstein"`.

Numbers that bite. Both companies' own sites contradict themselves (Snappy claims 150+ and 176+ countries, 250,000 and 350,000 gifts, 5,000 and 7,000 customers. Goody claims 25,000 companies on the homepage and 12,000 in its boilerplate, 600 brands on the API page and 400 in its blog). Always cite which page a number came from. G2 counts move weekly, so re-pull rather than reuse.

## Email

No Resend segment. Nothing is sent until they sign. The first deliverable is a sample used to open the conversation. When they do sign: from `research415 <reports@415brand.com>`, reply-to matt@415brand.com, subject "Snappy weekly brief, Mon D". Broadcast draft only. A human sends.

## Conflicts and confidentiality

No client conflict. Goody sells corporate gifting and nothing else in the book does. The Aug 31 report is the public sample at `/samples/snappy` (`webapp/app/samples/briefs/snappy.ts`), which is addressed to Goody and names it, so anyone in the gifting category who opens that sample sees us apparently working for Goody. Anonymise it before pitching PerkUp, Giftpack, Loop & Tie or the rest of `ops/OUTREACH_TARGETS.md` rows 21 to 30, or accept that the category is a race and pitch the field. Goody must be contacted first if we want the account.

Goody's own comparison post contains at least two claims we could not verify: that Snappy charges a 15% processing fee, and that Snappy covers only 40+ countries when Snappy's site says 176+. Flag these to Goody rather than repeating them. Telling them is free, specific advice that opens a conversation.

## Open questions for the client

1. Which reader, Katy Carrigan or Nicholas Teddy? The brief is shaped differently for each.
2. Does Goody know its own recipient-side sentiment? Its blog calls its Trustpilot "Excellent" and it is 3.4.
3. SOC 2 is answered: Goody says "Goody is SOC 2 certified" in its own address-free blog post. Still no security page on the site. Confirm whether they want enterprise leads.
4. How much is the free tier converting to Team? Decides whether we hunt free-tier power users or net-new buyers.
5. Do they want the Commerce API treated as a separate front? It is a different buyer entirely, platform and product people, not HR, and would need its own table.
