# OpenTag — Business Overview

*Research date: 2026-08-27. Sources: a Firecrawl map and crawl of tryopentag.com (78 indexed URLs — home, /pricing, /security, /team, /compare/slackbot, the /docs tree, the ten team pages, legal), the site's own `llms.txt`, conifer.build, LinkedIn, GitHub, and press coverage of Claude Tag. Every claim is what the company says on its own site unless marked otherwise. Items marked **[unverified]** come from a single third-party source or could not be cross-checked.*

**Disambiguation — read this first.** "OpenTag" is a badly contested name. This document is about **tryopentag.com, operated by Open Curiosity, Inc.** It is *not* any of the at least four open-source GitHub projects also called OpenTag or open-tag, several of which sit in the identical category (`linxidnju/OpenTag`, `CopilotKit/OpenTag`, `amplifthq/opentag`, `fancyboi999/open-tag` — the last describes itself as a "self-hostable alternative to Claude Tag"). It is also not Qubit's OpenTag tag-management product. See "The name problem" below; this matters commercially, not just editorially.

---

## One-liner

OpenTag is a shared AI coworker that lives in Slack (Microsoft Teams is invite-only), runs on its own sandboxed cloud machine, connects to the company's tools, finishes work rather than describing it, offers to take over jobs it sees repeat, and keeps a self-writing company wiki sourced to the threads decisions were made in. It is priced on usage credits, not seats. Its marketing wedge is a single sentence on its own homepage: **"The tagging layer shouldn't belong to a model company."** OpenTag is positioned, explicitly and by name, as the model-agnostic answer to Anthropic's Claude Tag.

## Company

| | |
|---|---|
| Legal entity | Open Curiosity, Inc. (site footer, © 2026) |
| Product | OpenTag. Formerly, and still partly, **Gini** — see "The rebrand is unfinished" |
| Founders | Tony Kam (Cofounder & CEO, product + support), Shelden Shi (Cofounder & CTO, engineering + agent), Wilson Nguyen (Cofounder & Chief Engineer, infra + security) |
| HQ | San Francisco |
| Funding | "Backed by Y Combinator" (site badge). **Batch, amount and date are not stated anywhere on the site and could not be confirmed [unverified].** Their previous company, Lilac Labs, was YC S24 and raised a $4.2M seed from Khosla Ventures, Zhu Ventures and YC [unverified — single source] |
| Prior company | All three founders were at **Lilac Labs (YC S24)** — drive-thru voice-ordering AI. OpenTag is described on /team as "their second company together" |
| Headcount | Three founders named. No other staff listed on the site |
| Contact | team@tryopentag.com. Demos via cal.com/tony-kam-ympx2p. App at app.tryopentag.com |
| Compliance | **SOC 2 Type II in progress, not complete.** The site claims no other certification and says so plainly. Trust center at trust.tryopentag.com; DPA published; pen-test summary on request |

**Read:** Three Berkeley engineers (Tesla/Intel, Flatiron Health/Roche/Certik, HPE) on their second company together, out of a YC voice-AI startup, now building in the most crowded category in B2B AI. The site is unusually well-made and unusually honest — it publishes an `llms.txt` that tells agents not to describe Teams as generally available and not to quote its own team-page metrics as results. That is a real signal about how this team operates.

## Founders

| Name | Role | Before | LinkedIn |
|---|---|---|---|
| Tony Kam | Cofounder & CEO | Software at Tesla and Intel. Lilac Labs (YC S24). EECS, Berkeley | linkedin.com/in/tonyshekkam |
| Shelden Shi | Cofounder & CTO | Software at Flatiron Health, Roche, Certik. Lilac Labs (YC S24). CS + CogSci, Berkeley | linkedin.com/in/sheldenshi |
| Wilson Nguyen | Cofounder & Chief Engineer | Software at HPE and Vestible (regulated securities). Lilac Labs (YC S24). CS + network systems research, Berkeley | linkedin.com/in/nguyenwilson |

Tony Kam is the CEO and the reader for our reports.

## Product

Four parts, per the homepage:

1. **Cloud agents in team chat.** Runs on its own machine, not a browser tab. Every run sandboxed, scoped to connected tools, torn down when it finishes.
2. **Automations (routines).** Nobody configures workflows. When OpenTag sees the same request three Mondays running it offers to own it — "same report, every Monday at 9:00, posted here with the receipts attached." You approve once.
3. **A wiki that organizes itself.** Pages write themselves out of how the company operates, sourced to the threads they came from, and revise when a decision changes, with a diff and a note on what changed and why.
4. **Built for a team, not a user.** Everyone in a channel shares one OpenTag, but permissions follow the person who asked. Nobody borrows anyone else's access.

Supporting mechanics: a plan shown before a run, approval gates on anything irreversible, source chips on results, skills (bundled, team-written, or proposed by OpenTag after a job goes well), and memory split between working context and what it keeps.

### The model router

OpenTag routes through **Conifer** (conifer.build) to "more than eighty" models, reaching for Claude, GPT or Gemini only when a task needs them. Claimed: **80+ models, 70% lower model spend, one mention to reach them.** The listed catalogue spans Claude (Fable 5, Opus 5, Opus 4.8, Sonnet 5, Sonnet 4.6, Haiku 4.5), GPT-5.x, Gemini 3.x, Grok, DeepSeek, Kimi, Qwen, Llama 4, Mistral, GLM, MiniMax, Nemotron, Command A, Gemma 4, Seed, Hunyuan and StepFun.

Conifer is an inference gateway that serves OpenAI- and Anthropic-compatible endpoints on one base URL and routes to "the Pareto frontier — the cheapest seat that still clears the work," with local, on-prem, LAN, bring-your-own-key or managed-cloud execution. **Conifer also appears on OpenTag's own customer logo wall.** The nature of the relationship — vendor, customer, both, or common ownership — is not stated on either site and should be established before we write about the 70% claim.

### Integrations

Documented connectors: Airtable, Attio, Bland AI, GitHub (read-only), Gmail (drafts only, sending waits), Google Calendar, Google Docs, Google Drive, Google Sheets, Granola, HubSpot, Linear, Notion, PostHog — plus **custom MCP servers**, which is the real answer to catalogue size. The homepage also shows Stripe and Zendesk. `llms.txt` claims "200+ scoped, revocable integrations"; the docs list 14 named ones. Treat 200+ as marketing until we see the in-app list.

## Pricing

Usage credits, shared across the workspace, never per seat.

| Plan | Price | Credits |
|---|---|---|
| Trial | $0 | $100 free trial, 10,000 credits, never expire. No card |
| Team | $50/mo | 5,000 credits/mo. Also $100/10k, $200/20k, $500/50k, $1,000/100k |
| Team, annual | 15% off | $42.50, $85, $170, $425, $850/mo |
| Enterprise | Custom | Volume pricing, invoicing, SSO/SCIM, audit log export, dedicated support, custom retention |

Job costs: simple tasks 25–75 credits, recurring jobs 125–375, larger projects 500–1,250. Monthly credits reset; a one-time **signing bonus** matching the first month's credits never expires. Every plan includes every skill and every integration — nothing is feature-gated, only metered.

**Read:** This is the sharpest thing about the company commercially. Seat-priced rivals (Dust at $24–120/seat/mo, Glean at ~$50+/seat/mo [unverified], Slack AI bundled into Business+ at $15/user/mo [unverified]) get more expensive as a team grows. OpenTag gets more expensive only as the work grows. For a 40-person startup that is a very large difference, and it is the argument the CEO should be leading with.

## Security posture

Three stated guarantees: **invited channels only** (no workspace-wide ingestion), **approval before anything leaves** (sending, spending, submitting, purchasing all wait for a person, and everything is audited), and **per-person permissions** (a tool connected read-only cannot write). Plus: one tenant per workspace with no cross-customer bleed, TLS 1.3 in transit, AES-256 at rest, integration credentials in a separate vault with per-tenant keys, deletion within 30 days, and a contractual — not configurable — commitment that customer data never trains any model, theirs or a provider's.

The site has a section headed "The honest part" admitting models can be wrong whichever one the task lands on. SOC 2 Type II in progress is the one real enterprise gap.

## Customers

Named on the homepage logo wall: **Context.dev, 28 ROW, Conifer, opflow, Thunder Compute, Audun.** Early-stage and technical. No case studies, no logos of scale, no published customer count. This is a company selling to startups it knows.

## Positioning and content

- **The wedge:** "The tagging layer shouldn't belong to a model company." Model-agnostic, faster, aligned with you, and explicitly "never in the business of selling you tokens."
- **Comparison pages:** only one exists, `/compare/slackbot`, and it is notably fair — it tells readers Slackbot is the better choice for personal productivity. There is **no /compare/claude-tag page**, despite the homepage FAQ asking "How is OpenTag different from Claude Tag?" That is the single biggest content gap on the site.
- **Ten team landing pages** (/engineering, /sales, /marketing, /product, /design, /data, /finance, /people, /operations, /customer-support), same product with team-specific jobs and metrics.
- **Machine-readable everything:** `llms.txt`, `llms-full.txt`, `agents.json`. Better AI-discoverability plumbing than most companies ten times their size.
- Setup claimed at about two minutes.

## Two problems worth naming

### The rebrand is unfinished

The product was called **Gini** and traces are everywhere: the privacy policy and privacy-choices pages are titled "Gini"; docs pages still live at `/docs/getting-started/what-gini-is`, `/docs/admin/removing-gini`, `/docs/working-with-gini/*` alongside their OpenTag twins; the troubleshooting page reads "Gini didn't respond"; the LinkedIn company page is still `company/gini-agent`; the GitHub org is `Open-Curiosity/gini-agent`; Shelden Shi's LinkedIn headline reads "CTO @ Gini Agent"; and **ginicomputer.com is still live** describing the same product. Duplicate URL pairs are also an SEO liability — two versions of the same doc page competing with each other.

### The name problem

At least four open-source projects are called OpenTag or open-tag, and they are in this exact category — Slack-native agent gateways, one billed as a "self-hostable alternative to Claude Tag." A search for "OpenTag" surfaces GitHub repos, not tryopentag.com. Combined with a brand name that is a compound of a competitor's product name ("Claude Tag"), organic discovery is going to be structurally hard. Any social listening we run will have a brutal signal-to-noise ratio and the queries must be built accordingly (see below).

## What the CEO cares about, for our reports

From `clients/opentag/README.md`: Tony wants **leads** — potential OpenTag customers found on Reddit, LinkedIn, X and elsewhere — and **mentions of OpenTag's competitors** on social. The brief is lead generation first, brand monitoring second. That maps to `skills/FIND_LEADS.md` (intent types 1–3 especially) and `skills/FIND_CUSTOMERS_OF_COMPETITORS.md`.

The README's second paragraph ends mid-sentence — "We also want to find any leads for" — so one instruction is missing. Worth asking Tony what completes it before the first full report.

## Where to watch for mentions

**Query construction is the hard part here.** Never search the bare string `OpenTag`; it returns GitHub projects. Use:

- `tryopentag`, `"tryopentag.com"`, `@opentag` in a Slack context
- `"Gini agent"`, `ginicomputer` — the old brand still carries conversation
- **X: `@TryOpenTag`.** The company launched publicly on X on 2026-08-26 via [@kamikariat](https://x.com/kamikariat/status/2092373312286707844) — 106 replies, 346 likes, 31 reposts. That reply thread is the single warmest pool of leads OpenTag has and it is currently unworked
- Founder handles: Tony Kam, Shelden Shi, Wilson Nguyen on LinkedIn
- Category queries, which is where the leads actually are: `"Claude Tag" alternative`, `"Claude Tag" too expensive`, `"AI coworker" Slack`, `"AI agent in Slack"`, `Slack AI alternative`, plus competitor names from `COMPETITORS.md`

**Platform notes.** LinkedIn (`company/gini-agent`) and X (`@TryOpenTag`) are the visible channels and is also where this buyer lives — reactions and comments on competitor posts come back with employer and title attached, which is the highest-yield pull available. Reddit: r/slack, r/ExperiencedDevs, r/SaaS, r/ycombinator, r/startups. Hacker News matters disproportionately for a YC company in this category. X: the AI-agent conversation is heavy there, but note likes have been private since June 2024, so engagers means repliers, quoters and reposters only.

## Site map (crawled 2026-08-27)

78 indexed URLs. Home, /pricing, /security, /team, /slack, /teams, /support, /vulnerability, /compare/slackbot; ten team pages; legal (/privacy, /privacy-choices, /terms, /dpa); a ~45-page /docs tree across getting-started, working-with-opentag, routines, wiki, memory-and-skills, integrations, admin, billing, security and help — with a parallel set of stale `-gini` duplicates; machine-readable /llms.txt, /llms-full.txt, /agents.json, /sitemap.xml; external trust.tryopentag.com and app.tryopentag.com.

## Sources

tryopentag.com (crawled 2026-08-27, via Firecrawl): home, /pricing, /security, /team, /compare/slackbot, /llms.txt. conifer.build. LinkedIn (`company/gini-agent`, founder profiles). GitHub (`Open-Curiosity/gini-agent`, and the four unrelated OpenTag repos). ginicomputer.com. Fortune, VentureBeat and eesel on Claude Tag. Y Combinator company directory (Lilac Labs).
