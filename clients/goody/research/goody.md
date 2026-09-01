# Goody: business overview

*Research date: 2026-08-30. Sources: a crawl of ongoody.com (homepage, /business/pricing, /business/gift-api, /business/product-updates, the "12 Best Corporate Gifting Platforms" blog post), plus TechCrunch (Feb 2021), South Florida Business Journal (May 2021), Tracxn, G2, Refresh Miami, and LinkedIn. Every claim is what the company says on its own site unless marked otherwise. Items marked **[unverified]** come from a single third-party source or could not be cross-checked.*

> **Not to be confused with:** Goody Products Inc. (the hair-accessories brand), "goody bag," "goody two-shoes," or the several dozen people named Goody. See the name problem in `../CLIENT.md`. The company's own handle is **ongoody** everywhere.

## One-liner

Goody sells **business gifting with no address required**. You enter a recipient's email or phone number, they pick their own gift from a curated catalog and enter their own shipping details. Homepage headline: "Business gifting made easy." OG title: "Send the Perfect Business Gift. No Address Needed."

The wedge is the address. Every competitor in this category eventually asks the sender to collect mailing addresses; Goody's whole product design is arranged around never doing that.

## Company

| | |
|---|---|
| Founded | **December 2020** by **Edward Lando** (investor, first CEO) and **Mark Bao** (tech lead). Lee Linden named as part of the founding team in the launch PR |
| CEO | **Katy Carrigan**, one of the first employees, previously Chief Revenue Officer, appointed CEO in 2022 when Lando moved to an investor/board role |
| Funding | **$4M** seed (Feb 2021, TechCrunch), **$13.1M** Series A (May 2021). **[unverified]** Tracxn puts total raised at **$32.1M**, still classified Series A. No round announced since |
| Headcount | LinkedIn lists **11–50**. **[unverified]** GetLatka estimates **59** and **~$6.5M ARR (2025 est.)** — a third-party model, not a company figure |
| HQ | LinkedIn lists **Miami**; the team also has a meaningful NYC presence. **[unverified]** PitchBook shows a Beaverton, OR address, which looks like a data error — do not repeat it |
| Marketing | **Nicholas Teddy** leads marketing (author byline on the platform comparison posts, ex-LinkedIn/Yext/Contentsquare) |
| Sales | **[unverified]** Sherine Rahimi Milinovich, SVP Revenue since Apr 2026, previously VP/Head of Sales from Mar 2022 |

## The customer-count problem

Three different numbers are live on Goody's own properties right now:

- Homepage: **"Trusted by 25,000+ companies"**
- Company boilerplate quoted by GetLatka: **"more than 12,000 leading companies"**
- Catalog size: **"600+ brands"** on the API page, **"400+ well-known brands"** in the July 2026 blog post

These are not fatal, but a procurement team that reads two pages will notice, and it is exactly the kind of thing worth telling a prospect about in a first conversation. Compare Ref's SOC 2 badge contradiction in `clients/ref/research/ref.md` — same species of problem.

## Pricing

| Tier | Price | What it unlocks |
|---|---|---|
| **Starter** | **$0 forever** | Unlimited gifts to US, UK, Canada. 1,000+ recipients per send. On-demand swag, no minimums. Custom Collections. Email/SMS/link delivery. Scheduling, tracking, thank-you notes. Google/Microsoft SSO |
| **Pro** | **$20/user/month** (annual) | International to 140+ countries, digital gift cards, custom digital branding, Calendly integration, custom cards, send-from-your-own-Gmail, advanced reporting |
| **Team** | **"Chat with us"** — priced per company by org size | Unlimited seats company-wide, budgets, Salesforce + HubSpot, 200+ HRIS integrations, Autogifting, Company Stores, Smart Links, Forms, SAML SSO, invite-only domain access, priority support |

SAML SSO is a paid add-on on Starter and Pro.

**Note the shape.** The free tier is genuinely generous — unlimited sends in three countries with no software contract — and it is the entire go-to-market. Goody's own comparison post hammers the point five separate times that competitors require 12-month contracts. This is a **land-free-then-upsell-Team** motion, not a sales-led one. Team pricing is the only opaque number on the site.

## Products and what shipped recently

Goody publishes a public monthly changelog at `/business/product-updates`. The 2026 run is unusually dense for a company this size:

| Month (2026) | Notable |
|---|---|
| Jan | Redesigned Track page; **swag collections generated from an uploaded logo**; Autogift with collections |
| Feb | Faster swag builds, price caps on swag stores, per-color branded mockups |
| Mar | **UK domestic shipping** with VAT-inclusive pricing; Brands API endpoint |
| Apr | 3-month scheduling; UK carts; **Salesforce activity sync by email**, including gifts sent outside Salesforce |
| May | **Company Stores** (branded shoppable storefront, no Goody account needed to check out); **Recipient Gift Upgrade** (recipient pays the difference to trade up); Contacts for all accounts |
| Jun | Company Stores go global; **Forms** (collect sizes/preferences at acceptance); **Gifting MCP** (Claude, ChatGPT, any MCP client); Autogift from your own Gmail; **HRIS coverage 30+ → 200+** |
| Jul | **Goody for HubSpot**; **Chrome extension** (gift from Gmail and LinkedIn); **Salesforce 2.0** with Flow automation; Gift Templates; surprise direct-ship; custom card fonts |
| Aug | 2026 Holiday Gift Guide; swag search/filter; redesigned mobile app store |

Two of these matter more than the rest:

1. **The Gifting MCP (June 2026).** Goody is, as far as we can find, the first gifting platform with a real MCP server — send gifts from inside Claude or ChatGPT with no code. Snappy shipped a *ChatGPT plugin* in August 2023, which is the previous generation of that idea and is no longer the relevant surface. This is a genuine first-mover position in a category that is otherwise not technical, and it is being underplayed on the site.
2. **200+ HRIS integrations (June 2026).** This closed the single widest capability gap against Snappy, which sits at ~40.

## Two APIs, two different businesses

| | Commerce API | Automation API |
|---|---|---|
| For | Platforms that want to sell gifts inside their own product | Companies that want to trigger gifts from their own events |
| Model | **Goody pays you.** Revenue share plus the ability to mark up prices; Goody handles inventory, fulfillment, payment collection, and support | REST or Zapier trigger-based sending |
| Proof | Postable (greeting cards) added gifting upsells at checkout: "hundreds of gifts sent within days of launch," increased AOV and margins | — |

The Commerce API is the more interesting asset and the least-marketed one. It turns Goody's fulfillment stack into infrastructure other companies resell, which is a different and more defensible business than competing on catalog curation.

## What third parties get wrong about Goody

Worth knowing, because these are the objections a prospect will arrive with:

- **Docket.io (2026):** "Goody is focused on digital gift selection, not physical direct mail or branded merchandise fulfillment. Teams that need custom-branded swag, warehouse storage, or large-scale event kits will find Goody insufficient." **This is out of date.** Goody has print-on-demand swag with no minimums, Company Stores, and logo-to-collection generation. The warehousing half of the claim still stands.
- **Sendoso's own comparison page:** "Goody works well for addressless sends, but it stops there." Self-serving, and now false given Salesforce Flow and HubSpot workflow triggers shipped in July 2026.
- **SOC 2: answered, partially.** Goody states in its own blog post "How to Send Employee Gifts Without Collecting Home Addresses" that **"Goody is SOC 2 certified"**. That is now Goody's own claim rather than a third-party directory's. There is still **no security or trust page** on the site carrying the certificate, which is where a procurement team will look. Verified 2026-08-30.

## Comparison pages: there are none

Checked 2026-08-30. `ongoody.com/compare`, `/compare/snappy`, `/business/compare`, `/vs/snappy`, `/alternatives/snappy`, `/snappy-alternative` and `/compare/sendoso` **all return 404**. Goody owns no page targeting any competitor's name.

What exists instead is two blog posts, and they contradict each other about Snappy:

| Goody says about Snappy | Where | Actually |
|---|---|---|
| "40+ countries supported" | Platform roundup | Snappy's homepage says 150+, pricing page 176+ |
| "Global shipping" | Address-free post | Broadly right, and contradicts the roundup |
| "15% processing fee on gifts" | Platform roundup | Appears nowhere on Snappy's site. **Unsourced** |
| "4.9/5 stars on G2" | Platform roundup | Live page reads 4.8 across 312 |
| "about 30 HRIS platforms" | Platform roundup | Snappy's pricing page says 40+ |

Goody's own numbers fail the same audit: 400+ brands (roundup) vs 600+ (API page and address post); Zapier "9,000+" apps (roundup) vs 5,000+ (pricing page); Trustpilot "Excellent" (roundup) vs a measured 3.4 across the 50 most recent. Meanwhile SnackNation ranks for "Snappy vs. Goody" and Sendoso publishes a page naming Goody.

## Reviews

- **G2: 4.8/5 across 235 reviews.** Goody's own blog claims 4.9/5; the live G2 page says 4.8. Use 4.8.
- Trustpilot rating is "Excellent" per Goody's blog. **We could not verify this** — Trustpilot returns 403 to both Firecrawl and plain fetch. Do not cite a Trustpilot number for Goody until someone loads the page by hand.

**What reviewers actually praise** (from the live G2 page): no address collection; recipient choice; "like Amazon but with all the junky stuff filtered out"; price filtering; ease of setup; speed of issue resolution.

**What reviewers actually complain about:**
- Gift options feel limited **depending on recipient location** — the international catalog is thinner than the US one
- Unclear whether shipping is included until checkout (recipient-side confusion)
- Apparel **sizing** limitations in swag
- Swag logo placement and customization is hard to navigate
- **No physical gift cards** — one reviewer wants something to hand an employee rather than an email that gets buried
- Customers not told they had a dedicated rep until they went looking

That last one is a churn risk and a cheap fix.

## ICP (analyst view)

**Economic buyer, three different ones, which is the strategic tension:**

- **People/HR teams** — birthdays, work anniversaries, onboarding, holiday sends. Autogifting + HRIS. This is where the free tier converts to Team.
- **Sales teams** — prospecting, meeting-booking via Calendly, client appreciation, CRM-triggered sends.
- **Marketing** — campaigns, events, Smart Links with lead capture, Forms.

**Company shape:** SMB through mid-market. The free tier means a two-person team can start today; Team pricing scales by org size. Goody's own blog admits it has "fewer sales and marketing integrations than Enterprise-focused platforms like Sendoso or Postal," which caps them below the ABM-heavy enterprise buyer — for now.

**Secondary and real: the individual.** Goody has a consumer side (`/plus/send`, a mobile app, a Chrome extension) that most competitors have abandoned. Snappy launched a consumer platform in 2022 and has said nothing about it since. This is Goody's top of funnel and nobody else is working it.

## SWOT (analyst view)

**Strengths:** the no-address mechanic is a genuine product difference, not positioning; a free tier with no contract in a category where everyone else demands twelve months; monthly shipping cadence that would embarrass a company three times the size; the Gifting MCP is a real first; the Commerce API is an under-exploited infrastructure business; recipient-choice plus recipient-upgrade is the best-liked feature in the reviews.

**Weaknesses:** three different customer counts and two different brand counts live on the site simultaneously; international catalog is visibly thinner than domestic and reviewers say so; no physical gift cards; no warehousing, so large event kits go elsewhere; no public SOC 2 answer we could find; ~50 people against a competitor with 5–10× the headcount and every Fortune 100 logo; and almost no organic third-party mention volume (see `competitors.md`).

**Opportunities:** Snappy's Trustpilot/G2 split (see `snappy.md`) is the sharpest opening in the category; Snappy has shipped no product in 2026, only research PR; the "12-month contract" objection is a rehearsed, winning argument that Goody's own blog already makes better than its sales team does; the MCP/agentic-gifting surface is uncontested; Sendoso's Alyce migration forced customers into an 8–10 week move and some of them are unhappy.

**Threats:** Snappy's enterprise entrenchment (56% of the Fortune 100 is a very hard wall); Sendoso and Reachdesk owning the ABM/revenue-gifting frame; HR platforms (Rippling, Workday, Awardco) absorbing recognition and gifting natively; Amazon Business as the permanent "just send a gift card" default; and the fact that in a downturn, gifting budgets are the first line cut.

## What Goody would care about from us

They are a ~50-person team selling into three departments at once, against a competitor with Microsoft and Meta on the logo wall. They cannot out-shout Snappy and they cannot out-enterprise Sendoso. What they can do is show up in the threads where an HR or EA person is asking, in public, which platform to use — and right now, in those exact threads, Goody gets mentioned once and Snappy gets mentioned three times. See `../CLIENT.md`.
