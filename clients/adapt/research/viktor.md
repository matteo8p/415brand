# Viktor.com — Business Overview

*Research date: 2026-08-26. Sources: viktor.com pages (sitemap crawl: home, /about, /pricing, /security, /enterprise, /integrations, /docs, /changelog, /skills, /case-study, /blog, /impressum, compare pages), Slack Marketplace listing, Product Hunt, G2, Crunchbase, Dealroom, press (Fortune, TNW, EU-Startups, TechFundingNews, SiliconANGLE/PRNewswire for the predecessor company), third-party reviews (efficient.app, eesel, Vellum), Ashby job board. Every claim below is what the company says on its own site unless marked otherwise. Items marked **[unverified]** come from a single third-party source or an estimate-style data vendor.*

**Disambiguation:** viktor.com is **not** the Dutch engineering-app platform VIKTOR (viktor.ai), nor "getviktor.co" (a parody "actual human" site). viktor.com is the Slack/Teams "AI employee" operated by **Zeta AI, Inc.** — the same founders and entity that launched the JACE browser agent as "Zeta Labs" in 2024. Older listings under `getviktor.com` / `app.getviktor.com` / LinkedIn `company/getviktor` refer to the same product (the Slack app's ToS and security contact still point at getviktor.com). Everything below is about viktor.com only.

## One-liner
Viktor is a workspace-wide "AI employee" that lives inside Slack and Microsoft Teams (plus Discord and a web app since Aug 2026), connects to ~27 native integrations and "3,200+" tools via managed connectors (MCP, Pipedream, OAuth, API), and executes multi-step work end-to-end — reports, dashboards, ad-campaign management, code and PRs, internal web apps — in a private cloud sandbox, with human approval gates on sensitive actions. Tagline: "Not a tool. A hire." Priced per workspace on usage credits, not seats. It is the most directly comparable well-funded competitor to Adapt's Slack-native agent thesis.

## Company
| | |
|---|---|
| Legal entity | Zeta AI, Inc. — Delaware corp, file no. 7643252; registered address 2810 N Church St, PMB 20589, Wilmington, DE 19802 (viktor.com/impressum). Slack Marketplace developer name: "ZETA AI, Inc." Previously operated as "Zeta Labs" (JACE product, 2024). |
| Founder / CEO | **Fryderyk ("Fryd") Wiatrowski** — co-founder & CEO, ex-Meta engineer. **Peter Albert** — co-founder & CTO, ex-Meta (press says core Llama 2 team). Both listed as authorized representatives on the impressum. |
| Funding | **$75M Series A (May 19, 2026) led by Accel**, with Bek Ventures, Kaya VC, Inovo VC, Tenacity Capital; Accel partner Zhenya Loginov joined the board (TNW). Prior: $2.9M pre-seed (Jun 2024, as Zeta Labs) led by Daniel Gross & Nat Friedman, with Earlybird, Kaya VC, AI Grant, angels. Prior backers also named: Leonis Capital, Oxford Seed Fund (Dealroom/EU-Startups). Valuation undisclosed; Latka estimates $450M post and $82.4M total raised **[unverified]**. |
| HQ / founded | Founded 2023 (Dealroom, EU-Startups). Operating HQ: Warsaw and Munich; New York office planned (TechFundingNews, EU-Startups). Pre-seed press (2024) placed Zeta Labs in San Francisco. Delaware legal domicile. |
| Contact | legal@viktor.com, +1 929 243 9664 (impressum); security@getviktor.com (Slack listing); sales via viktor.com/contact-sales. Social: LinkedIn `company/getviktor`, X `@viktor__com`, CEO on X `@frydwia`. |

**Read:** A Polish/German founding team that pivoted from a consumer browser agent (JACE) to a B2B Slack agent, launched publicly Feb 2026, and inside ~3 months reported a $15M run-rate and closed a $75M A from Accel with Slack's own co-founders as angels. Well-capitalized, growth-obsessed, and shipping daily (see changelog). This is the incumbent "AI employee in Slack" narrative that Adapt will be compared against.

## Team / who works there
| Person | Role | Source |
|---|---|---|
| Fryderyk Wiatrowski | Co-founder, CEO; ex-Meta | Fortune, TNW, impressum, LinkedIn (`/in/fryderyk-wiatrowski`) |
| Peter Albert | Co-founder, CTO; ex-Meta (Llama 2 team per 2024 PR) | Fortune, TNW, PRNewswire 2024, impressum |
| Zhenya Loginov | Board member (Accel partner) | TNW |
| Matt Swulinski | Product Hunt launch "maker"; also credited as creator of the Meta Ads skills toolkit (listed as at Wispr Flow on /skills — affiliation ambiguous) | Product Hunt, viktor.com/skills |
| Vadym Petrychenko | Listed on LinkedIn as at viktor.com (role not retrievable — LinkedIn blocked) | LinkedIn search result **[unverified]** |
| Dominika Sekulska | Listed on LinkedIn as at viktor.com (role not retrievable) | LinkedIn search result **[unverified]** |
| Filip Viktor Sobiecki | Listed on LinkedIn as at viktor_com (role not retrievable) | LinkedIn search result **[unverified]** |
| Julio Casado (Full Funnel Growth) | External "expert" creator of Google Ads toolkit — partner, not employee | viktor.com/skills |

- **Headcount:** TNW at Series A: "team of 6 engineers from Meta, Google and Oxford." Crunchbase: 11–50. Latka: 15 FTE **[unverified]**. Company's own /about: "small, focused team," number not disclosed. Reasonable estimate: ~15–30 as of Aug 2026, ramping post-A.
- **Open roles (Ashby, jobs.ashbyhq.com/viktor):** Founding Recruiter, Software Engineer, Head of Performance Marketing, Lifecycle Manager, Operations, Executive Assistant. Locations not retrievable (JS-rendered).
- **Angels / individual investors (viktor.com/about + press):** Stewart Butterfield & Cal Henderson (Slack), Guillermo Rauch (Vercel), Alex Bouaziz (Deel), Koen Bok & Jorn van Dijk (Framer), Mati Staniszewski (ElevenLabs), Victor Riparbelli (Synthesia), Max Mullen (Instacart), Harry Stebbings (20VC), Lenny Rachitsky, Shaan Puri, Nat Friedman, Daniel Gross, Jack Zhang (Crunchbase), plus unnamed execs from DeepMind and Figma. Funds on /about: BEK Ventures, Inovo, Accel, KAYA, NFDG, Tenacity Capital, Oxford Seed Fund, Leonis Capital.
- **Not found:** any named VP/Head-level executives beyond the founders; no CRO/CFO/Head of Eng publicly identified.

## Product
**Core loop.** Install the Slack (or Teams/Discord) app → Viktor reads channels it's invited to (per-user channel privacy enforced since Feb 2026) → users @mention or DM tasks, or Viktor proactively proposes automations after observing workflows → Viktor plans, spins up a private cloud compute environment, writes/executes code, calls connected tools via a backend credential gateway (keys never exposed to the model), and returns deliverables (PDFs, Excel, dashboards, deployed web apps on "Spaces" with custom domains, PRs). Irreversible/sensitive actions (payments, code pushes, customer emails) require human approval. Persistent workspace memory ("remembers decisions") and scheduled/recurring automations. One shared agent per workspace with shared context across channels.

**Feature claims (site + changelog):**
- Multi-model: user/team-selectable models across OpenAI, Anthropic, Google; changelog cites Claude Opus 4.7 (1M ctx), Claude Fable 5, Kimi K3, GPT Image 2, Seedance 2.5 video. "Smart vs Balanced" model tiers.
- Skills marketplace (launched Apr 2026): 55 expert-built skills in two toolkits (Google Ads 27, Meta Ads 28); shared skills management in browser; slash-command triggers.
- Developer surface (Jul–Aug 2026): public REST API, **MCP server at `api.viktor.com/mcp`** (streamable HTTP, scoped API keys) so Claude/Cursor/other agents can call Viktor; OpenAI- and Anthropic-compatible endpoints; usage & credits API.
- Integrations: 27 native + "3,200+" via managed connectors (Pipedream is named on the compare page; "19 new MCP integrations" Jul 31). Docs homepage now says "9,000+" — inconsistent with marketing pages. Multi-account per tool. No user-configurable webhooks/Zapier required.
- Platforms: Slack (marketplace-listed), Microsoft Teams GA Jun 18 2026, Discord Aug 1 2026, web app chat Aug 6 2026, Supermemory and Wispr Flow integrations Aug 2026.
- Industry/function landing pages: Agencies, Ecommerce, Nonprofits, SaaS, Customer Success, Media Buyers.

**Security posture (viktor.com/security):** SOC 2 Type I (Type II "in progress"), ISO 27001 in progress, GDPR (DPA available), CCPA; eesel review adds CASA Tier 3. TLS 1.2+, AES-256 at rest, secrets vault with rotation, SAML SSO (Okta, Entra, Google, OneLogin), RBAC, audit logs, per-tenant isolation, no training on customer data, US hosting with EU residency on Enterprise, prompt-injection mitigation, responsible disclosure (no formal bounty yet). No self-host/VPC option (Vellum).

## Pricing
Public pricing is workspace-wide, credit-based, no per-seat fees, all features/integrations on every tier. **Note a live discrepancy:** /pricing (fetched today) shows Team at $100/mo for 40,000 credits, while the homepage, /enterprise and every third-party review (Mar–Aug 2026) cite $50/mo for 20,000 credits — likely a recent repricing or A/B test. Dollar-per-credit and top-up rates are not published.

| Tier | Price | Notes |
|---|---|---|
| Free | $0 | $100 in one-time credits, no card; all features; credits don't expire |
| Team ("Most Popular") | $100/mo (per /pricing today); $50/mo per homepage/reviews | 40,000 monthly credits (or 20,000 at $50); shared across workspace; rollover; on-demand and auto top-ups with spend cap |
| Enterprise | Custom | Per-user spend caps, volume discounts, invoicing, security review + DPA, dedicated onboarding, EU residency, SSO/RBAC/audit |

Credit burn guidance: quick tasks 100–300, complex workflows 500–1,500, full projects 2,000–5,000. Real-world: efficient.app's team burned ~9,000 credits/day ≈ $500–750/mo; G2 reviewers flag "high credit consumption" and opaque tracking. Latka estimates ARPU ≈ $400/mo and plans up to $100k/mo **[unverified]**.

## Competitive positioning
Viktor runs an aggressive SEO/compare program. Dedicated compare pages: ChatGPT, Claude Tag (Anthropic's Slack agent), OpenClaw, Tasklet, Lindy Teammate, Grok Bot, Superhuman Go; blog "vs" posts: Devin, Manus, Sierra, Gemini Enterprise Agent Platform, Slackbot. Press quotes name Microsoft Copilot, Salesforce Agentforce, Glean, Sana, Cursor, Devin, Manus. **Adapt / adapt.com is not mentioned anywhere on viktor.com, in its blog, or in any third-party alternatives list found** (Vellum's "10 best Viktor alternatives": Vellum, OpenClaw, Lindy, Manus, Claude Cowork, Zapier AI, Dust, n8n, ChatGPT, Slack AI).

Positioning pattern (from the Claude Tag page): "managed, turnkey AI employee" vs "build-and-maintain it yourself"; breadth of integrations (3,200+ vs 14); model-agnostic vs single-vendor; Slack + Teams vs Slack-only; free tier vs enterprise-only; "polished deliverables" and "persistent company-wide context" vs raw, per-thread outputs. Target buyer: non-technical SMB/agency operators and ops leads, not engineering teams.

### Viktor vs. Adapt
| Dimension | Viktor | Adapt (adapt.com, per its site — see research/adapt.md) |
|---|---|---|
| Core pitch | Turnkey "AI employee" hired into Slack/Teams; no code | "The integrated AI coworker" / "AI computer for business": one shared agent across Slack, web app, GitHub, Linear, iMessage, Chrome ext., Teams (coming) |
| Buyer | SMB founders, agencies, ecommerce, ops/marketing | Startups/SMBs, RevOps/GTM-heavy; logos are small startups |
| Integrations | 27 native + "3,200+" managed connectors (MCP, Pipedream, OAuth) | 140+ native OAuth/API-key connectors; personal-first, share when ready |
| MCP | Consumes MCP connectors *and* exposes an MCP server (api.viktor.com/mcp) | Exposes an MCP server (app.adapt.com/mcp, beta Aug 2026); no documented consumption of external MCP servers |
| Runtime | Private cloud sandbox, closed; no self-host | microVM sandboxes with persistent FS, scoped secrets, cron/webhooks; self-host/VPC/on-prem claimed but undocumented |
| Models | Multi-vendor, user-selectable | "Adaptive Intelligence" router (Claude/GPT/Gemini/open-weight), tiered speed, failover |
| Transparency | Finished deliverables + action audit | Full trace of tools, SQL/Python, sub-agents, citations |
| Pricing | Workspace credits: $0 / $50–100 per mo / custom; no seats; burn rate opaque | $0 / $50–$5,000 prepaid usage at $0.01 per credit / Enterprise; no seats, no minimums; per-member spend caps |
| Compliance | SOC 2 Type I, ISO 27001 in progress, SAML SSO, EU residency (Ent.) | SOC 2 Type II (Jun 2026), GDPR/CCPA, RBAC, audit logs, approval policies |
| Funding / scale | $75M Series A (Accel, May 2026); $15M run-rate at 10 weeks, 2,000+ orgs (company-stated) | $10M seed (Activant + Headline, Jan 2026); revenue and customer count undisclosed |
| Mentions the other? | Never mentions Adapt | Runs a dedicated /compare/viktor page — Viktor is Adapt's named enemy |

**Where Adapt can win:** control/ownership (self-host, code-defined agents, MCP-native extensibility), predictable pricing vs Viktor's opaque credit burn, engineering-team credibility, data residency for regulated buyers. **Where Viktor wins today:** distribution (Slack Marketplace listing, PH/G2 presence, 200+ SEO posts), breadth of one-click connectors, non-technical onboarding, Teams/Discord coverage, capital, and Slack co-founder endorsement.

## Traction signals
- **Revenue/customers (company-stated to press, May 2026):** $15M annualized run-rate within ~10 weeks of Feb 2026 launch; 2,000+ organizations; most connect 30+ apps. TNW: "12,000+ teams installed." Homepage now claims "50,000+ teams" (undefined; likely installs/signups). Latka: $24M ARR July 2026, 2,900 paid accounts, 350% NDR **[unverified]**.
- **Reviews:** G2 4.9/5 on 54 reviews (category: AI Agents for Business Operations); Product Hunt 4.9/5, 16 reviews, 696 upvotes on Mar 3 2026 launch; three follow-on PH launches (Media Buyers Mar 31, Skills Marketplace Apr 10, Teams Jun 18). Recurring negative themes: credit burn/opacity, integrations needing reconnection, verbosity, 1–2 min latency on complex jobs.
- **Logos/testimonials:** True Classic (CEO Ben Diamond quoted), Accel, Ridge, Hampton, Squibler, LYFEfuel, Outlet, Swoop, James Edition, CoinGate, Chess.com (David Joerg, TPM), Growably, Kulina Group, Givr, Highgarden Holdings, Authority Makers, Como Business Coaching, Agency Mavericks (Troy Dean), AlphaSignal, Element Turf, CollabED, TWL. Case studies quantify "N automated workflows in N days" rather than revenue.
- **Content/SEO:** 200+ blog posts, near-daily cadence in Aug 2026; Academy, Research, Creators, Experts, and Partners programs (Strategy Breakdowns, Go To Millions newsletters); comparison pages; llms.txt.
- **Press:** Fortune exclusive (May 19 2026), TNW, EU-Startups, Dealroom, TechFundingNews, Ventureburn, BeBeez, Fundraise Insider; SiliconANGLE/PRNewswire for 2024 JACE pre-seed.
- **Hiring:** 6 open roles on Ashby including Founding Recruiter and Head of Performance Marketing — signals go-to-market scaling post-A.
- **Social:** X `@viktor__com`, CEO `@frydwia`, LinkedIn, YouTube; follower counts not retrievable. CEO's Feb 2026 launch LinkedIn post drew 110+ comments.
- **Not found:** Hacker News launch thread, YC affiliation (none — not YC), Reddit discussion of substance.

## SWOT (analyst view)
**Strengths:** $75M war chest + Accel; Slack co-founders as angels (distribution/credibility in Slack ecosystem); very fast shipping cadence; broad connector catalog; multi-platform (Slack/Teams/Discord/web/API/MCP); no-seat pricing lowers land friction; strong review scores.
**Weaknesses:** Opaque, unpredictable credit economics (top complaint); SOC 2 Type II and ISO 27001 still pending; no self-host/VPC; closed sandbox; thin exec bench (founders only publicly); inconsistent public numbers (3,200 vs 9,000 integrations; $50 vs $100 plan; 2k vs 12k vs 50k "teams"); revenue-run-rate figure was announced at 10 weeks and may include one-off top-ups.
**Opportunities:** Enterprise upsell (EU residency, SSO), Teams-first Microsoft shops, skills marketplace as ecosystem moat, becoming the "agent your other agents call" via MCP/API.
**Threats:** Platform owners (Slack/Salesforce Agentforce, Anthropic Claude Tag, Microsoft Copilot, OpenAI) shipping native agents; model-cost compression eroding credit margins; control-oriented rivals (Adapt, Dust, n8n, Claude Cowork) for technical buyers; churn once novelty fades if credit costs exceed perceived value.

## What the CEO cares about (for our reports)
Wiatrowski's public framing: "personal work assistance is the big third wave of AI adoption" worth "tens of billions"; "agents that join companies and take responsibility for outcomes"; anti-"workslop" — quality of deliverables over chat. Watch metrics: run-rate growth, installs, credits consumed, connector count, Teams adoption, enterprise logos. Values published on /about ("Compress the timeline," "Delete and move on," "Say it in the thread") signal a speed-over-process culture.

## Site map (crawled 2026-08-26)
Main: `/`, `/product`, `/pricing`, `/security`, `/enterprise`, `/business`, `/contact-sales`, `/about`, `/brand`, `/media-lp`. Resources: `/docs`, `/changelog`, `/blog` (200+ posts), `/research`, `/academy`, `/skills`, `/case-study`, `/use-case`, `/integrations`, `/llms.txt`. Community: `/creators`, `/experts`, `/partners/strategy-breakdowns`, `/partners/go-to-millions`. Compare: 8 pages (ChatGPT, Claude Tag, OpenClaw, Tasklet, Lindy Teammate, Grok Bot, Superhuman Go, +1). Industry: 5 pages. Legal: `/legal/*` (general-terms, AUP, usage-terms, license-terms, privacy, DPA, product-terms, definitions), `/impressum`. Careers link → jobs.ashbyhq.com/viktor.

## Sources
- https://viktor.com/ · https://viktor.com/sitemap.xml · https://viktor.com/about · https://viktor.com/pricing · https://viktor.com/security · https://viktor.com/enterprise · https://viktor.com/integrations · https://viktor.com/docs · https://viktor.com/changelog · https://viktor.com/skills · https://viktor.com/case-study · https://viktor.com/blog · https://viktor.com/impressum · https://viktor.com/compare/viktor-vs-claude-tag
- https://slack.com/marketplace/A0A2VN5TR5K-viktor
- https://www.producthunt.com/products/viktor
- https://www.g2.com/products/viktor-com/reviews
- https://www.crunchbase.com/organization/viktor-7eac
- https://fortune.com/2026/05/19/viktor-ai-startup-raises-75-million-for-virtual-coworker-exclusive/
- https://thenextweb.com/news/viktor-75-million-series-a-accel-ai-coworker-slack-teams
- https://techfundingnews.com/former-meta-engineers-secure-75m-for-viktor-an-ai-co-worker-built-for-slack-and-teams/
- https://www.eu-startups.com/2026/05/ai-coworker-startup-viktor-raises-e64-7-million-series-a-after-hitting-e12-9-million-revenue-run-rate-within-10-weeks-of-launch/
- https://app.dealroom.co/news/note/viktor-raises-75m-series-a-led-by-accel-for-ai-virtual-coworker
- https://siliconangle.com/2024/06/13/zeta-labs-unveils-jace-action-oriented-generative-ai-assistant-quite-unlike/
- https://www.prnewswire.com/news-releases/zeta-labs-raises-2-9m-pre-seed-funding-launches-jace---first-ai-agent-capable-of-complex-task-completion-302171252.html
- https://getlatka.com/companies/viktor (estimates, unverified)
- https://efficient.app/apps/viktor · https://www.eesel.ai/blog/viktor-ai-review · https://www.vellum.ai/blog/best-viktor-alternatives
- https://jobs.ashbyhq.com/viktor
- https://www.linkedin.com/in/fryderyk-wiatrowski/ · https://www.linkedin.com/company/getviktor · https://x.com/frydwia · https://x.com/viktor__com
- https://adapt.com/ (for comparison column)
