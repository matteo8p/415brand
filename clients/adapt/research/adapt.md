# Adapt.com — Business Overview

*Research date: 2026-08-26. Sources: adapt.com pages (sitemap crawl of 338 URLs: homepage, /company, /pricing, /security, /integrations, /customers, /compare/*, /changelog, /blog, /docs, /support), the company's Jan-2026 seed press release (EIN Presswire / Dealroom), Product Hunt, ZoomInfo, and Viktor press coverage (Fortune). Every claim below is what the company says on its own site unless marked otherwise. Items marked **[unverified]** come from a single third-party data aggregator or could not be cross-checked. Not to be confused with Adapt.io (B2B contact data), Adaptive, Adapt Insurance, or Adaption.*

## One-liner
Adapt (Adapt.com Inc, San Francisco) sells a single, shared AI agent for a whole company — "the integrated AI coworker" / "the AI computer for business" — that lives primarily in Slack (tag `@Adapt`), plus a web app, GitHub, Linear, iMessage and (coming) Teams. It connects to 140+ SaaS tools via OAuth/API key, runs code in sandboxed microVMs, routes across Claude/GPT/Gemini/open models, and bills purely on usage (1 credit = $0.01, unlimited seats). Its marketing wedge is "team-wide, not single-player" against ChatGPT/Claude-in-Slack, "acts, doesn't just search" against Glean, and "cheaper, more transparent, multi-surface" against its most direct rival Viktor.com.

**Note on the MCP framing:** Adapt does *not* market itself as "an agent that connects to MCP servers." The reverse is true: Adapt *exposes* a hosted MCP server (`https://app.adapt.com/mcp`, beta since 2026-08-07) so external clients (Claude Code, Cursor, terminals) can call Adapt's agent and integrations. Its own 140+ integrations are native OAuth/API-key connectors, not MCP. No page on adapt.com or in the docs index describes connecting Adapt to third-party MCP servers (searched /integrations, /docs, /docs/llms.txt, changelog).

## Company
| | |
|---|---|
| Legal entity | Adapt.com Inc (ZoomInfo); site footer says "Adapt, Inc." |
| Founder / CEO | Jim Benton (Co-founder & CEO); co-founders Sean Smith (CTO) and John Andrew Entwistle |
| Funding | $10M seed, announced 2026-01-29, co-led by Activant Capital and Headline; Susa Ventures, Predictive VC, and angels (Shuo Wang, Leo Polovets, Julian Weisser, Kyle Tibbitts) participated. ZoomInfo also lists a $6.4M "stock/share issuance (2025)" **[unverified — likely a Form D for part or all of the same seed]**. Total disclosed: $10M. |
| HQ / founded | 1 Letterman Drive, San Francisco (the Presidio). Five-day in-office policy. Founding date not stated anywhere; changelog begins 2026-01-12, seed press release 2026-01-29, "Generally Available" 2026-04-10 — so the company is at most ~1.5–2 years old (pre-2026 stealth period likely). |
| Headcount | 11–50 (ZoomInfo) **[unverified]**; site names ~9 people. |
| Contact | support@adapt.com, security@adapt.com, /contact-sales, /request-demo, live chat. Social: X @Adapt, LinkedIn, GitHub, YouTube. |
| Compliance | SOC 2 Type II (certified 2026-06-05 per changelog), GDPR-aligned, CCPA. |

**Read:** A seed-stage, repeat-founder company (Benton previously ran Chorus.ai to its $575M ZoomInfo exit and was CEO at Apollo.io) that shipped fast: GA in April, SOC 2 in June, 65 changelog entries in eight months. It is positioning itself as an "own your AI" platform (apps + model router + infra) rather than a Slack bot, but its go-to-market, pricing ($100 Slack bonus credits) and case studies are all Slack-first and SMB/startup-heavy. Its most dangerous competitor, Viktor, raised 7.5x more money four months after Adapt's seed.

## Team / who works there
| Name | Role | Background | Source |
|---|---|---|---|
| Jim Benton | Co-founder & CEO | Co-founded ClearSlide; CEO of Apollo.io; CEO of Chorus.ai through its $575M acquisition by ZoomInfo | adapt.com/company; press release; LinkedIn /in/benton |
| Sean Smith | Co-founder & CTO | Previously GlareDB; "neuroscience and database systems" background | adapt.com/company; press release; RocketReach |
| John Andrew Entwistle | Co-founder | Co-founded Coder.com; built Wander (luxury travel marketplace — also an Adapt customer) | adapt.com/company; press release |
| Dustin Schau | VP of Product & Engineering | (ex-Gatsby/Netlify per public LinkedIn — **[unverified]**) | adapt.com/company; LinkedIn /in/dschau; Product Hunt maker |
| Ashley McClelland | CMO | Authors most blog posts | ZoomInfo; adapt.com/blog/ai-workflows byline; Product Hunt maker ("Ashley") |
| Jack Welsh | Head of Finance & Business Operations (also cited on sales) | — | adapt.com/company; blog/ai-workflows |
| Andrew Entwistle | General Counsel, Board | — | adapt.com/company |
| David Maldonado | Sales | — | adapt.com/blog/ai-workflows |
| Patrick Burris | Product Engineer | — | adapt.com/blog/white-label-ai-agent byline |
| Matthew Wang | Software Engineer | — | ZoomInfo; Product Hunt maker |
| Casey Manos | (role unknown; listed as maker) | — | Product Hunt |

**Board / investors:** Mathias Schilling (Managing Partner, Headline) and Andrew Steele (Partner, Activant Capital) are named on the company page as board/investors; "40+ operators and angels." Named angels (press release): Shuo Wang, Leo Polovets, Julian Weisser, Kyle Tibbitts. Funds: Activant, Headline, Susa Ventures, Predictive VC.

**Hiring:** No /careers page on the site (404) but listings exist on LinkedIn ("GTM / RevOps Engineer," SF Bay Area), ZipRecruiter ("General Application: Exceptional Talent," SF) and JobTarget ("Product Engineer," SF). Salaries not retrievable (LinkedIn blocked).

## Product
**Core loop (docs: "Ask, Understand, Act"):** a user tags `@Adapt` in a Slack thread (or uses app.adapt.com, GitHub, Linear, phone/iMessage, Chrome extension). The agent pulls context from connected systems, executes SQL/Python/browser actions inside a microVM sandbox, returns a result with a full trace (tools queried, code run, sub-agent findings, citations), and can persist output as an "App" (a generated persistent GUI) or an "Automation" (cron- or webhook-triggered). Shared team context is the pitch: everyone in the org talks to one agent with shared memory, knowledge base and skills.

**Three-layer platform ("Own Your AI," homepage):**
1. *Apps* — one universal agent across Slack, GitHub, Linear, Web, Messages, Teams (coming soon); white-label/branded Slack apps under the customer's own name (Aug 2026).
2. *Models* — "Adaptive Intelligence" router scoring each request into xfast / fast / balanced / deep tiers; supports Claude, GPT, Gemini and open-weight models; mid-stream failover; supports "Sonnet 5 and Fable 5" (Jul 2026); user-selectable intelligence level (Aug 2026); org-level "model recipes."
3. *Infrastructure* — microVM sandboxes with persistent filesystem (FUSE mounts), scoped secrets (Doppler integration), cron, webhooks; claimed 90ms boot. Deployment options claimed: Adapt Cloud, self-hosted, VPC, managed on-prem — but no self-hosting docs exist in the docs index, so treat self-host as sales-led/unverified.

**Feature timeline (changelog):** Company Knowledge (Jan), Scheduled Tasks & Apps (Feb), Integrations expansion (Mar), GA (Apr 10), Skills & Sub-agents (Apr), Proactive agent mode in Slack (May), $50 entry plan (May 26), SOC 2 Type II (Jun 5), MCP server early access (Jun 9), Chrome extension & automated PR reviews (Jun), Groups & Policies, personal knowledge, browser actions (Jul), Slack huddle transcripts, branded Slack apps, MCP beta, per-member spend caps (Aug).

**Integrations:** 140+ listed at /integrations ("If it has an API, Adapt connects to it. OAuth integrations get you live in a click. Anything else connects with an API key."). Categories: CRM (Salesforce, HubSpot, Attio, Apollo, Pipedrive, Outreach, Salesloft, Clay, ZoomInfo), e-commerce (Shopify incl. BYO Shopify app, BigCommerce, WooCommerce), marketing/analytics (Google/Meta/LinkedIn/Reddit Ads, GA, Amplitude, Mixpanel, PostHog, Ahrefs, Klaviyo, Marketo), finance (Stripe, QuickBooks, Xero, Brex, Ramp, Mercury), support (Zendesk, Intercom, Help Scout, Front, Freshdesk), dev/cloud (GitHub, GitLab, AWS, GCP, Azure, Vercel, Sentry, Datadog, PagerDuty, Linear, Jira), data (Postgres, MySQL, BigQuery, Snowflake, Databricks, Supabase, Neon, MongoDB, Airtable), compliance (Vanta, Drata, Secureframe), CMS (Notion, Webflow, WordPress, Sanity…), meetings (Zoom, Fireflies, Granola, Grain), AI (OpenAI, Anthropic, AirOps). Personal vs. shared connections ("personal first, shared when you're ready"); multiple connections per integration; connection-health alerts.

**MCP:** Adapt *serves* an MCP endpoint (`claude mcp add --transport http adapt https://app.adapt.com/mcp`) with OAuth discovery, silent token refresh, 30-day sessions, and long-task polling for requests >45s. Purpose: let developers use Adapt's agent/integrations from Claude Code, Cursor, terminals. No documented support for consuming external MCP servers.

**Security posture:** SOC 2 Type II (Security, Availability, Confidentiality), encryption in transit/at rest, no training on customer data, logical tenant isolation, deletion on request, US-hosted, approval-before-execution policies, read-only data-source option, RBAC + audit logs, pen testing, subprocessor list and DPA published, 24h disclosure acknowledgment.

## Pricing
| Tier | Price | Notes |
|---|---|---|
| Starter | $0/mo | $25 free credits for anyone; $100 bonus credits on connecting Slack (any plan); up to $300 free credits for work-email domains. Unlimited seats. |
| Pro | $50–$5,000/mo prepaid usage | 1 credit = $0.01; up to 10% bonus credits at higher prepay; auto-recharge; "premium research integrations." Unlimited seats. |
| Enterprise | Custom | Dedicated AI engineer, committed-usage discounts, invoicing, premium research integrations. |

No per-seat fees, no minimums; per-member monthly spend caps (Aug 2026); usage page itemizes cost per chat/automation. Billable usage covers tokens and compute (FAQ headings). ROI calculator on the page claims a 100-person company at 50% adoption spends ~$22,000/yr and saves ~$290,500/yr. The $50 entry plan was introduced 2026-05-26 (previously higher).

## Competitive positioning
Adapt maintains five comparison pages: **Viktor, Glean, Claude Cowork, Claude "Tag" (Claude in Slack), OpenClaw**. Its Feb-2026 "Best AI Agents for Slack" post also dismisses ChatGPT in Slack, Claude in Slack, Linear's Slack agent and Salesforce Agentforce as single-player or single-domain.

**vs. Viktor.com (the named "enemy"):** headline "More than an AI coworker. Your whole company's integrated coworker." / "An AI coworker takes orders. An integrated coworker serves your entire company."

| Dimension (Adapt's framing) | Adapt | Viktor |
|---|---|---|
| Surfaces | Slack + web app (app.adapt.com) + GitHub/Linear/phone, Teams coming | Slack only (Teams per Viktor's own PR), no standalone web app |
| Transparency | Full trace: tools, SQL/Python, sub-agent findings, citations | "Finished work" + action-level audit; reasoning stays in sandbox |
| Knowledge | Editable KB, skills, memory in web UI | Skill files in agent sandbox |
| Apps | Apps page w/ versioning, search, favorites | "Spaces": full-stack apps with DBs and custom subdomains |
| Automations | Natural-language; deliver to DM/channel/inbox/email/SMS; 15-min minimum | Configured via Slack conversation |
| Integrations | Personal-first, share when ready | Workspace-level by default |
| Proactivity | Event-triggered (webhooks, emails, forms) | "Heartbeat" polling Slack ~4x/day |
| Privacy | Private by default; admins see metadata only | Shared workspace context; Private Mode in development |
| Compliance | SOC 2 Type II | SOC 2 "in progress" (per Adapt) |
| Pricing | $0.01/credit, no seats, no minimums | $50/mo workspace fee + credits; "$300–400/mo" typical (per Adapt) |
| Company | SF; $10M seed | Warsaw/Munich/NY; built by ZETA AI (Jace AI team); $75M Series A led by Accel |

Independent Viktor facts (Fortune, 2026-05-19): founders Fryderyk Wiatrowski (CEO) and Peter Albert (CTO), ex-Meta; $75M Series A led by Accel with Bek, Kaya, Inovo, Tenacity; angels include Slack co-founders Stewart Butterfield and Cal Henderson; $15M run-rate within 10 weeks of Feb-2026 launch; 2,000+ organizations. Fortune names Microsoft Copilot and Salesforce Agentforce as Viktor's competitors — not Adapt.

**vs. Glean:** "Glean finds answers. Adapt takes action." Attacks per-seat + consumption pricing, custom quotes, "reported 100-seat minimums."
**vs. Claude Cowork:** "built for whole teams" — hosted vs. desktop install, multi-model vs. Claude-only, org-wide connect-once vs. per-user MCP config, cloud sandbox vs. endpoint execution.

## Traction signals
- **Customers/logos:** Stamped, Wander, Landingsite(.ai), KnoCommerce, DoNotPay, Rosie, RevSend, Landing Point, QC Growth, Effluent. Case studies: Wander, RevSend, Stamped ("connected 15 tools; 6-hour Zendesk pulls → on-demand"), KnoCommerce ("14 systems → one"), Rosie. Note: Wander is co-founder Entwistle's company; DoNotPay's Joshua Browder quote ("45 min → 1 min") is the anchor metric in the press release.
- **Testimonials:** Nathan Potter (CTO, Wander), Jonathan Nahin (Founder, RevSend), Karthika Shankar (Co-founder, Rosie; ex-Amazon 12 yrs), Joshua Browder (CEO, DoNotPay), "Andrew" (Founder, Landingsite.ai), Luke Bivens (Founder, QC Growth).
- **Launches/press:** $10M seed press release 2026-01-29 (EIN Presswire; syndicated by Dealroom and others; no TechCrunch/Fortune coverage found). Product Hunt "Adapt: The integrated AI coworker" — 134 upvotes, #13 of the day, 2 reviews (5.0), ~June 2026; makers Ashley, Casey Manos, Dustin Schau, Sean Smith, Matthew Wang, Jim Benton. GA announced 2026-04-10. Benton LinkedIn post "The AI Computer for Business." No Hacker News thread found. No YC affiliation.
- **Content velocity:** ~50 blog posts across 6 pages, weekly "This week in Adapt" changelog posts, 65 changelog entries Jan–Aug 2026; ~120 programmatic integration landing pages, 13 solution pages, 6 use-case pages, 3 events ("Own Your AI," "AI Agents for Work," "Vibe Code Business Tools").
- **Internal dogfooding stat (blog, Apr 2026):** CEO 161 chat sessions/30 days, BizOps 142, CTO 128, CMO 118, Sales 74.
- **Revenue:** not disclosed; ZoomInfo estimates <$5M **[unverified]**. Customer count not disclosed.
- **Social:** X @Adapt exists (content not retrievable — robots blocked). Follower counts unknown.

## SWOT (analyst view)
**Strengths:** Repeat founders with a $575M exit and deep GTM/RevOps DNA (Chorus, Apollo, ClearSlide); credible investors; fast shipping cadence; genuinely differentiated architecture claims (multi-surface, model router, traceability, usage-only pricing, white-label); SOC 2 Type II already done; 140+ connectors.
**Weaknesses:** $10M seed vs. Viktor's $75M and $15M ARR; customer logos are small startups (and one founder-affiliated); "self-host/VPC/on-prem" claims lack docs; no Teams yet while Viktor has it; "own your AI"/three-layer platform story is broader than what the case studies show (data Q&A in Slack), risking positioning drift; robots-blocked social presence and no Tier-1 press.
**Opportunities:** Enterprises rejecting per-seat AI pricing (Glean); teams wanting multi-model and exit optionality (white-label, "their name not ours"); developer channel via MCP server and Claude Code; RevOps/GTM engineering niche where Benton's network is strongest.
**Threats:** Viktor's capital and distribution (Slack co-founder angels); Slack/Salesforce's own Agentforce + Claude/ChatGPT native Slack agents commoditizing "@agent in a thread"; Anthropic/OpenAI shipping team-shared connectors; credit-based pricing is easy to undercut; model-router value erodes as frontier pricing falls.

## What the CEO cares about (for our reports)
Based on Benton's quotes, the blog, and page structure: (1) being "the AI computer / operating layer for the entire company," not a chatbot; (2) trust — traceability, SOC 2, private-by-default, approval policies; (3) usage-based economics and "efficiencymaxxing" the intelligence-to-cost curve (model router); (4) ownership/portability — white-label agents, bring-your-own credentials, no lock-in; (5) whole-team adoption metrics (sessions by role) versus single-player tools; (6) head-to-head wins against Viktor and Glean.

## Site map (crawled 2026-08-26)
338 URLs in sitemap.xml. Core: `/`, `/company`, `/pricing`, `/request-demo`, `/contact-sales`, `/support`, `/status`, `/blog` (6 pages), `/changelog` (65 entries), `/docs` (+ `/docs/llms.txt`), `/customers`, `/security`, `/integrations` (120+ child pages incl. pair pages like "HubSpot with Slack"), `/compare/{viktor,glean,claude-cowork,claude-tag,openclaw}`, 13 `/solutions/*`, 6 use-case pages, 6 workflow pages (code janitor, code review, public docs, SEO agent, support detection, bug triage), 4 case studies (wander, revsend, stamped, rosie), 3 event pages, legal (privacy, terms, cookies, usage policy, DPA, health-data policy, subprocessors). `/about`, `/careers`, `/viktor`, `/docs/platform/mcp` return 404 (about → `/company`; careers not on site).

## Sources
- https://adapt.com/
- https://adapt.com/sitemap.xml
- https://adapt.com/company
- https://adapt.com/pricing
- https://adapt.com/security
- https://adapt.com/integrations
- https://adapt.com/customers
- https://adapt.com/support
- https://adapt.com/docs and https://adapt.com/docs/llms.txt
- https://adapt.com/changelog
- https://adapt.com/changelog/mcp-server-beta
- https://adapt.com/compare/viktor
- https://adapt.com/compare/glean
- https://adapt.com/compare/claude-cowork
- https://adapt.com/blog
- https://adapt.com/blog/ai-workflows
- https://adapt.com/blog/white-label-ai-agent
- https://adapt.com/blog/best-ai-agents-slack-2026
- https://www.einpresswire.com/article/887706314/adapt-raises-10m-seed-to-become-the-ai-computer-for-business
- https://app.dealroom.co/news/feed/adapt-raises-10m-seed-to-build-ai-computer-connecting-business-tools-with-frontier-agents
- https://www.producthunt.com/products/adapt-3
- https://www.zoominfo.com/c/adaptcom-inc/5000218350
- https://www.linkedin.com/in/benton/ ; https://www.linkedin.com/in/dschau/ (not fetched; robots-blocked)
- https://www.linkedin.com/jobs/view/gtm-revops-engineer-at-adapt-4387989093 (robots-blocked)
- https://www.ziprecruiter.com/c/Adapt.com/Job/General-Application-:-Exceptional-Talent/-in-San-Francisco,CA
- https://x.com/Adapt (robots-blocked)
- https://fortune.com/2026/05/19/viktor-ai-startup-raises-75-million-for-virtual-coworker-exclusive/
