---
slug: adapt
client: Adapt
subject: Viktor
readers: the Adapt founders
cadence: weekly
status: live
site: https://adapt.com
market: United States, English
resend_segment: none
reply_to: matt@415brand.com
---

# Adapt (adapt.com)

## What they sell

Adapt sells one AI assistant that a whole company shares. It lives in Slack as `@Adapt`, and also on the web, GitHub, Linear, iMessage and a Chrome extension. It connects to the company's tools through 140+ native integrations, runs work in sandboxed microVMs on request or on a schedule, and routes across Claude, GPT, Gemini and open models. Pricing is usage credits at 1 credit = $0.01 with unlimited seats. $10M seed, SOC 2 Type II certified June 2026. Full background in `research/adapt.md`.

## Who reads it and what they want

Readers are the Adapt founders and the marketing lead: Jim Benton (CEO), Sean Smith (CTO), John Andrew Entwistle (co-founder), Ashley McClelland (CMO). Address the report to the founders.

The subject is **Viktor** (viktor.com), "the AI employee in Slack". Viktor is the well-funded incumbent story in the category: $75M Series A from Accel, Slack, Teams and Discord, a reported $15M run rate three months after launch. Dossier in `research/viktor.md`.

What the brief must deliver, in priority order:

1. What Viktor did this week and what Adapt should do about it. Every section answers those two questions in that order.
2. Where Viktor is spending: Meta ads, Google ads, creator and referral programs with exact payouts, and which creatives have the most copies.
3. Viktor's unhappy customers. Its G2 reviews are the softest flank: 7 of the 9 August reviews complained about credit cost in the dislike box, and every one is a named reviewer with a role and a company.
4. The searches neither company owns, so Adapt can buy them before Viktor does.
5. What Viktor is hiring for, quoted from the job ads.

## Report shape

Weekly only. Standard weekly shape from `.claude/skills/weekly-report/SKILL.md`: recommended actions, posts worth replying to, then key findings with the scorecard, pricing and product, search and marketplaces, advertising and social media, hiring, sources. The Aug 17 Viktor brief is the reference example for the whole weekly format and is also the public sample at `/samples/viktor` (`webapp/app/samples/briefs/viktor.ts`).

No daily has been run for Adapt. If one is commissioned, it is competitor-first on Viktor, with an ads section, because Viktor runs a large paid footprint.

Adapt's own comparison page is at `adapt.com/compare/viktor`. Every claim on it is checked against Viktor's live pages in the pricing section of every weekly.

## Do not pitch on

- Nothing that needs a hire Adapt does not have.
- No "build brand" advice. Every action must be something the founders can start this week with the people they have.
- Post-level filter is in `IGNORE_RULES.md`.

## Pulls

| Source | Tool | Input |
|---|---|---|
| Traffic, sources, countries | Similarweb | `similarweb.com/website/viktor.com` and `adapt.com`, read as markdown through Firecrawl with `proxy: "stealth"` |
| Organic and paid keywords, spend | Semrush, SpyFu | `spyfu.com/overview/domain?query=viktor.com` |
| Google ads on record | Google Ads Transparency Center | `adstransparency.google.com/?domain=viktor.com` |
| Meta ads | `apify/facebook-ads-scraper` | Viktor's ad library page. Run twice, `active_status=active` and `active_status=all`. Rank by run length and duplicate copies |
| X | `scraper_one/x-posts-search` | `viktor slack OR viktor.com OR @viktor_com`, `latest` and `top`, window in `timeWindowHours`. Query under 100 characters |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["viktor slack", "viktor ai employee", "viktor.com"]`, `searchSort: "new"` |
| LinkedIn | `harvestapi/linkedin-post-search` and `harvestapi/linkedin-profile-posts` | Viktor's company page with `scrapeReactions: true`, capped. Reactors come back with title and employer |
| Reviews | G2 | Viktor's G2 page, newest first, 1 to 3 stars first. Quote the dislike box. Every reviewer is a named lead |
| TikTok, YouTube, Instagram | Apify search scrapers | `viktor ai`, `viktor slack`, count plays, mark paid posts and commission links |
| Jobs | Viktor's job board, LinkedIn Jobs | Read every ad, quote what it reveals |
| Viktor's own pages | Firecrawl | pricing, changelog, security, blog, creator and referral pages. Check `adapt.com/compare/viktor` against them |

Name collisions. Never search the bare word `viktor`. It is a common first name. Always pair it with `slack`, `ai`, `employee`, the domain or the handle.

## Email

No Resend segment is recorded for Adapt. The Aug 17 weekly was delivered as a rendered HTML file and the public sample. When a segment exists: from `research415 <reports@415brand.com>`, reply-to matt@415brand.com, subject "Viktor weekly brief, Mon D". Broadcast draft only. A human sends.

## Conflicts and confidentiality

**OpenTag is also a research415 client and is a direct competitor of Adapt.** OpenTag sells the same product to the same buyer: one shared AI agent in Slack, connected to company tools, usage priced with unlimited seats, routing across models. Viktor is also OpenTag's best-funded competitor, so both clients are being briefed on the same rival.

The operating rules, decided by Matt and recorded in `clients/opentag/research/competitors.md`:

1. Nothing from `clients/opentag/` appears in anything Adapt reads, and nothing from this folder appears in anything OpenTag reads. The Viktor research is public-source and belongs to neither client, but the reads and recommendations built for one must not be reused for the other.
2. Adapt is never named as an OpenTag competitor in anything Tony Kam reads, and OpenTag is never named in anything the Adapt founders read, unless Matt decides to disclose to both.
3. One client's reply is never the other client's lead.

If either company publishes a page about the other, stop and escalate to Matt.

## Open questions for the client

1. Which of the four readers should the subtitle name, and does anyone else at Adapt receive the brief?
2. Is there a Resend segment to create, or does the weekly continue as a shared link?
3. Does Adapt want the Viktor G2 reviewers worked as leads, with names, in the weekly, or kept as evidence only?
4. Does Adapt know OpenTag is a research415 client? Matt's disclosure decision governs the answer.
