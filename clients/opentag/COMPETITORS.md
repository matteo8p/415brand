# OpenTag Competitors — Claude Tag, Viktor, Adapt, Dust

*Research date: 2026-08-27. Sources: crawls of tryopentag.com, dust.tt and conifer.build; press coverage of Claude Tag (Fortune, VentureBeat, eesel); and 415brand's own prior research files `clients/adapt.com/ADAPTCOM.md` and `clients/adapt.com/VIKTOR.md` (both dated 2026-08-26), which contain far more depth on those two companies than is repeated here. Read `OPEN_TAG.md` first — this file assumes it. Items marked **[unverified]** come from a single third-party source.*

> ## ⚠️ Client conflict — read before any work ships
>
> **Adapt.com is already a 415brand client** (`clients/adapt.com/`), and Adapt sells the same product to the same buyer as OpenTag: one shared AI agent, living in Slack, connected to company tools, usage-priced with unlimited seats, routing across Claude/GPT/Gemini/open models. They are direct competitors.
>
> It goes further. We write Adapt a **weekly brief on Viktor** — and Viktor is also OpenTag's best-funded competitor. The reference example for our entire weekly report format (`webapp/app/samples/briefs/viktor.ts`) is that brief.
>
> So: taking OpenTag on means writing competitive intelligence for two rivals in one market, using research assembled for one of them. That is Matt's call, not ours, and it should be made before the first OpenTag report is sent. The options are roughly: decline OpenTag; take it and disclose to both; or take it with a hard wall (no reuse of `ADAPTCOM.md`/`VIKTOR.md` in OpenTag deliverables, and Adapt never named as an OpenTag competitor in anything Tony reads). **Everything below assumes the question gets answered first.**

---

## The short version

OpenTag is the smallest and least funded company in its own competitive set, in the most crowded category in B2B AI, against four very different shapes:

- **Claude Tag (Anthropic)** is the competitor OpenTag named itself against, and the reason the company has a story at all. Launched 23 June 2026. It is gated behind Claude Enterprise/Team seats, Slack-only, and made by a model company — which is precisely the wedge. It is also the reason OpenTag's category has a name people search for.
- **Viktor (Zeta AI)** is the well-capitalized incumbent narrative: $75M Series A from Accel, "Not a tool. A hire.", Slack + Teams + Discord, and a reported $15M run-rate within about three months of launch. **Its G2 reviews are full of complaints about credit cost** — which is the softest flank in the set and the one OpenTag is built to attack.
- **Adapt** is the closest thing to a mirror image: same thesis, same Slack-first go-to-market, same usage pricing, $10M seed, repeat founder with a $575M exit behind him, SOC 2 Type II already certified. See the conflict notice above.
- **Dust** is the platform play — seat-priced ($24–$120/seat/mo), 3,000+ teams, SOC 2 Type II, EU/US data residency. It is the enterprise-credible option and the one whose pricing model OpenTag most cleanly beats on shape.

**The single clearest read: OpenTag's defensible advantage is pricing shape plus model independence, not capability.** It is the only company here that charges nothing per seat *and* refuses to be tied to one model vendor. Every rival either sells seats, sells tokens, or is owned by someone who sells tokens. That is a real, ownable position — and the site currently spends more words on "eighty models" than on the fact that adding your whole company costs nothing.

## Head-to-head at a glance

| | **OpenTag** | **Claude Tag** | **Viktor** | **Adapt** | **Dust** |
|---|---|---|---|---|---|
| Vendor | Open Curiosity, Inc. | Anthropic | Zeta AI, Inc. | Adapt.com Inc | Dust |
| Founded / launched | 2nd co. of Lilac Labs (YC S24) team | Launched 23 Jun 2026 | Founded 2023; launched Feb 2026 | GA 10 Apr 2026 | — |
| Funding | YC-backed, **amount undisclosed** | Anthropic | **$75M Series A** (Accel, May 2026) | **$10M seed** (Activant, Headline) | Series B announced |
| Surfaces | Slack; Teams invite-only | **Slack only** | Slack, Teams, Discord, web | Slack, web, GitHub, Linear, iMessage | Slack, Notion, GitHub, Drive + Chrome ext. |
| Pricing shape | **Usage credits, no seats** | Seat subscription **+** token spend | Usage credits per workspace | Usage credits, unlimited seats | **Per seat** $24–$120/mo |
| Entry price | $0 trial → $50/mo | Claude Enterprise/Team seats | — | — | Free → $24/seat/mo |
| Model choice | **80+ via Conifer** | Claude only | Multi-model | Claude/GPT/Gemini/open | 20+ frontier models |
| Integrations | 14 documented + custom MCP ("200+" claimed) | Scoped by admin | ~27 native, "3,200+" via connectors | 140+ native OAuth | 20+ connectors + MCP |
| SOC 2 Type II | **In progress** | Anthropic enterprise posture | — | **Certified 5 Jun 2026** | **Certified** |
| Named customers | 6 startup logos | Not disclosed | — | — | 3,000+ teams |

---

## 1. Claude Tag (Anthropic) — the competitor OpenTag is named after

**What it is.** Anthropic's AI teammate inside Slack, launched in beta on 23 June 2026. Tag `@Claude` in a thread and it runs asynchronously: it breaks the task into stages, executes them, and posts back. Unlike Slackbot it is a *shared* resource — multiple people collaborate on one job, progress is visible in public channels, and work can be handed off half-finished. It learns company context over time.

**Commercial shape.** Gated to Claude Enterprise and Claude Team plans, Slack-only at launch. Pricing is API-style usage on top of the seat subscription — the true cost is seats *plus* token spend. Anthropic seeded adoption hard: **$25,000 in credits for Enterprise customers and $2,500 for Team customers with 10+ paid seats, both expiring 1 September 2026** [unverified — single source]. Admins had 30 days to opt in before the automatic switchover from the old Claude in Slack app on 3 August 2026.

**Controls.** Admin-scoped access to sensitive data and tools, role-based control over who can invoke `@Claude`, per-channel and org-wide token spend limits, and separate Claude instances per department (HR Claude does not share with engineering). Public Slack channels only at launch. A later update let it read a full conversation and jump in unprompted.

**Where OpenTag wins:** no seat requirement at all; eighty models instead of one; Teams as well as Slack; approval gates on *anything* that leaves, not just spend caps; and the structural argument that a model company's routing layer will always route to its own models. **Where OpenTag loses:** Anthropic's distribution, trust, and security review are not things a three-person company competes with — and every Claude Enterprise customer already has Claude Tag included in a contract they have signed.

**The watch item:** those seeded credits expire 1 September 2026. **The four weeks after that expiry are the single best-timed poaching window OpenTag will get this year** — teams that adopted on free credits will see a real bill for the first time. Everything in `skills/FIND_LEADS.md` intent type 2 should be pointed at "Claude Tag" plus cost language from 1 September.

## 2. Viktor (Zeta AI) — the funded incumbent narrative

**What it is.** A workspace-wide "AI employee" in Slack, Teams, Discord and a web app. ~27 native integrations plus "3,200+" tools via managed connectors (MCP, Pipedream, OAuth, API). Executes multi-step work end to end in a private cloud sandbox with human approval gates. Tagline: "Not a tool. A hire." Priced per workspace on usage credits, not seats — the same shape as OpenTag.

**Company.** Zeta AI, Inc. (Delaware; operating HQ Warsaw and Munich). Fryderyk Wiatrowski (CEO) and Peter Albert (CTO), both ex-Meta. **$75M Series A led by Accel, May 2026**, after a $2.9M pre-seed from Daniel Gross and Nat Friedman. Launched publicly February 2026 and reported a $15M run-rate within roughly three months. Full detail in `clients/adapt.com/VIKTOR.md`.

**The flank.** From our own Viktor tracking: **54 G2 reviews averaging 4.9, but 7 of the 9 reviews written in August 2026 complain about the cost of credits in the "dislike" box.** Viktor also runs a heavy paid-acquisition machine — 238 Meta ads live in late August, ~646K monthly site visits, ~$176K/mo estimated US Google Ads spend — and pays for search terms like "chatgpt alternative" and "slack" rather than its own category.

**Where OpenTag wins:** price transparency and the credit-cost complaint, which is Viktor's loudest public weakness; model choice; and a much cheaper entry point. **Where OpenTag loses:** 75× the funding, three more surfaces, a real review corpus, and a brand people can actually search for.

**The watch item:** every one of those August G2 complaints is a named reviewer with a role and a company. That is A-tier evidence under `skills/FIND_CUSTOMERS_OF_COMPETITORS.md` and the highest-yield first pull for OpenTag's lead gen.

## 3. Adapt — the mirror image *(see the conflict notice)*

**What it is.** One shared AI agent for a whole company — "the integrated AI coworker" — living primarily in Slack (`@Adapt`), plus web, GitHub, Linear and iMessage, with Teams coming. 140+ native OAuth integrations, sandboxed microVMs, routing across Claude/GPT/Gemini/open models, and **usage pricing at 1 credit = $0.01 with unlimited seats**. It also exposes a hosted MCP server so external clients can call it.

**Company.** Adapt.com Inc, San Francisco. Jim Benton (CEO; previously ran Chorus.ai to a $575M ZoomInfo exit and was CEO at Apollo.io), Sean Smith (CTO), John Andrew Entwistle. **$10M seed, 29 January 2026**, co-led by Activant Capital and Headline. GA 10 April 2026. **SOC 2 Type II certified 5 June 2026.** Full detail in `clients/adapt.com/ADAPTCOM.md`.

**Read.** This is the closest competitor OpenTag has on thesis, pricing shape and go-to-market, and it is ahead on every measurable: more funding, more integrations, more surfaces, SOC 2 done, and a founder with a large exit behind him. OpenTag's only clean differentiator against Adapt is the eighty-model router and the explicit anti-model-company positioning — Adapt routes across models too, but does not make independence the story.

## 4. Dust — the seat-priced platform

**What it is.** An agent platform ("the platform for AI Operators") with 20+ frontier models, custom agents, multi-agent workflows on schedules and triggers, connectors to Slack, Notion, GitHub, Drive and 20 more, plus MCP. Claims **300,000+ agents deployed across 3,000+ teams.** Series B announced.

**Pricing — the important part.** Per seat, mixed within a workspace: Free ($0, 500 lifetime credits), **Pro $30/mo or $24 billed yearly for 8,000 credits/seat/mo**, **Max $150/mo or $120 yearly for 40,000 credits/seat/mo**. Programmatic usage at $0.01/credit. Enterprise adds unlimited connectors, workspace-pooled credits, SCIM, audit logs, single-tenant deployment and an SLA. SOC 2 Type II, SSO on all plans, US and EU data residency.

**Where OpenTag wins:** the pricing shape, decisively. A 40-person team on Dust Pro is ~$960/month before anyone does anything; the same team on OpenTag Team pays $50–$200 for the work they actually run. That comparison is the strongest single number OpenTag has and it is nowhere on their site. **Where OpenTag loses:** SOC 2, data residency, single-tenant deployment, SCIM, and 3,000 reference customers.

## The adjacent set

Not profiled, but they show up in every buyer's evaluation and in social listening:

| | What it is | Why it matters |
|---|---|---|
| **Slackbot / Slack AI** (Salesforce) | Slack's built-in *personal* AI agent; Slack AI bundled into Business+ at ~$15/user/mo [unverified] | The default. OpenTag's own `/compare/slackbot` page concedes it is better for personal productivity |
| **Glean** | Search-first enterprise knowledge, ~$50+/seat/mo [unverified], 100+ connectors, mature permission-aware search | The incumbent in "find the answer." Loses on "do the work" |
| **Microsoft Copilot / Atlassian Rovo / Notion AI / Guru / Moveworks** | Bundled or suite-native assistants | Bundling is the real threat: nobody buys a tool that IT already includes |
| **The open-source OpenTags** | `fancyboi999/open-tag` bills itself as a self-hostable Claude Tag alternative; three more repos share the name | Not a commercial threat yet. They *are* a brand and discovery problem — see `OPEN_TAG.md`, "The name problem" |

## Cross-cutting reads

**1. The category's pricing is fragmenting, and OpenTag is on the right side of it.** Seats (Dust, Glean, Slack) versus usage (OpenTag, Viktor, Adapt) versus seats-plus-tokens (Claude Tag). Usage pricing wins on any team where a minority are power users — which is every team. OpenTag under-sells this badly: the homepage leads with "eighty models" when it should lead with "adding your whole company costs nothing."

**2. Everyone claims model choice; only OpenTag makes it the identity.** Adapt, Viktor and Dust all route across models. OpenTag is the only one whose *name and thesis* are the independence argument. That is fragile — it stops being a differentiator the moment Anthropic loses its lead — but right now, one month after Claude Tag's launch, it is well-timed.

**3. Compliance is the price of entry above ~50 seats, and OpenTag has not paid it.** Adapt and Dust are SOC 2 Type II certified; OpenTag is in progress. Until that lands, every enterprise deal stalls at security review, which argues for pointing all lead gen at startups and mid-market — exactly where the six named logos already are.

**4. Nobody else is selling the self-writing wiki.** Every competitor sells an agent that does work. OpenTag also sells knowledge that maintains itself and survives turnover. It is the one capability in the set with no direct equivalent, and it gets one homepage section. Against Glean specifically it is the whole argument.

**5. OpenTag is the only one that cannot be found.** Viktor spends ~$176K/mo on Google Ads. Adapt runs a 338-page site. Dust publishes a content machine. OpenTag has an excellent site that is invisible behind four GitHub projects with its name. Discovery, not product, is the binding constraint on this business.

**6. Where OpenTag is structurally exposed.** Three people, undisclosed funding, no SOC 2, one visible social channel, six named customers, a half-finished rebrand, and a contested name — against a $75M Series A, a $10M seed with a repeat founder, a Series B platform, and Anthropic. The strategy that follows is narrow and obvious: startups and mid-market, priced against seats, timed to the Claude Tag credit expiry, sold in the channels where this buyer already complains about credit bills.

## What to watch, per competitor

| Competitor | Watch for | Why |
|---|---|---|
| **Claude Tag** | The **1 September 2026** credit expiry and the bill-shock posts that follow; any move off Enterprise/Team gating; Teams support | The best-timed poaching window of the year |
| **Viktor** | New G2 reviews, especially credit-cost complaints; ad spend and creative themes; Series A hiring | Named reviewers are A-tier leads |
| **Adapt** | *Governed by the conflict decision above* | — |
| **Dust** | Seat-price changes; any move to usage pricing | Would erase OpenTag's clearest advantage |
| **The name** | New GitHub projects called OpenTag; whether `ginicomputer.com` stays live | Brand and discovery risk |

## Sources

tryopentag.com and conifer.build (Firecrawl crawl, 2026-08-27). dust.tt/pricing (2026-08-27). Fortune (23 Jun 2026), VentureBeat and eesel on Claude Tag. `clients/adapt.com/ADAPTCOM.md` and `clients/adapt.com/VIKTOR.md` (415brand research, 2026-08-26) — subject to the conflict notice above. G2, Crunchbase and press figures for Viktor as cited in `VIKTOR.md`.
