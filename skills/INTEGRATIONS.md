# Integrations and outside skills

What is connected, what to connect next and why, and which published skill libraries are worth stealing from. Written 2026-08-27 alongside `skills/FIND_LEADS.md` and `skills/FIND_CUSTOMERS_OF_COMPETITORS.md`.

## Connected today

| Tool | What we use it for | Notes |
|---|---|---|
| **Apify** | Every social pull. See `skills/SCRAPING_TOOLBOX.md` | Monthly usage cap; when it trips, top up, reinstall the connector, restart the session |
| **Resend** | Client report emails as broadcast drafts | Human approves every send (`clients/RESEND.md`). Suppression list is already there — use it |
| **Gmail / Google Drive** | Client correspondence, deliverables | |
| **PostHog** | Marketing site analytics | |
| **Firecrawl** | Crawling and extracting from competitor sites — logo walls, case studies, pricing, changelogs, docs | Configured at project scope in `.mcp.json`; OAuth, so approve the server and sign in on a fresh session |

The gaps that still block work: no code search (the strongest evidence source for API clients like Sprag), no email verification before we hand a client an address, and no place a lead lives between Monday's report and Friday's.

## Connect next, in this order

**1. GitHub API (token, free).** Code search for a competitor's SDK, package name, env var or API host turns "we think they use Deepgram" into A-tier evidence with a permalink. For any client whose competitors sell an API — Sprag, and most future clients — this is the single best source we are not using. No vendor, no cost, one personal access token. Firecrawl's `firecrawl_developer_search` covers part of this (GitHub issues, merged PRs, READMEs, docs sites) but does not search file contents, so it finds people *discussing* a competitor's SDK, not repos *importing* it. Still worth a token.

**2. Exa (MCP).** Neural search over the web for phrasings rather than keywords: "we switched our transcription to", "built on Deepgram". Complements Firecrawl (Exa finds the page, Firecrawl reads the site). Add it after Firecrawl, not instead.

**3. An email verifier** — ZeroBounce, NeverBounce or Truelist. Non-negotiable before we ever put a work email in front of a client for outreach. Bad addresses burn the client's sending domain and, if they send through us, ours. Cheap, one API call per address, and it belongs at the very end of the pipeline, after ICP filtering.

**4. A place leads live.** Start with flat files in the repo — `clients/<client>/leads/seen.jsonl` for dedupe and `leads/<date>.md` for the sheet. That is enough to stop reporting the same post twice and costs nothing. Move to a CRM (Attio and HubSpot both have MCP servers) only when a client actually works the list rather than reading it.

**5. Slack**, if and when a client wants a hot lead in ten minutes rather than tomorrow's email. The daily brief format assumes a day of latency; intent type 1 in `FIND_LEADS.md` has a window of hours. Sell the upgrade, don't build it early.

Later, and only if volume justifies the spend:

- **Clay / LeadMagic / Apollo** — waterfall enrichment across many providers. The `harvestapi` actors already return title, company and an optional email, which covers us at current volume. Revisit when we're enriching thousands of records a week.
- **A traffic/SEO data source** (Similarweb, Ahrefs, Semrush) — the weekly scorecard asks for monthly visits, paid keywords, ad spend and organic keyword counts. Those numbers need a defensible source if clients start checking them.
- **Common Room / Trigify** — productised versions of exactly what these two skills do. Worth watching to see what they surface that we don't; not worth buying while the reports are hand-written.

## Outside skills worth borrowing from

None of these are drop-in for our reports — they are all written for a sales team with a CRM, not for a written monthly brief. Read them for method, take the parts named below.

| Repo | Take |
|---|---|
| [LeadMagic/gtm-skills](https://github.com/LeadMagic/gtm-skills) | `social-intent-monitoring` (signal taxonomy with per-signal urgency windows, and the rule that every message anchors to the signal in its first sentence), `competitive-intel` (the Fact–Impact–Act battlecard shape), `signal-scoring`, `hiring-signal-play`, `job-change-play` |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | The `prospecting` skill's five-phase workflow and Hot/Warm/Cold/Skip rubric — our tiering in `FIND_LEADS.md` follows it — plus its compliance section |
| [getaero-io/gtm-eng-skills](https://github.com/getaero-io/gtm-eng-skills) | `niche-signal-discovery` (derive the ICP by diffing closed-won against closed-lost) and the waterfall-enrichment cost-routing pattern |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | `lead-research-assistant` — a clean seven-step product → ICP → leads → score → enrich → output loop |
| [anthropics/skills](https://github.com/anthropics/skills), [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | Catalogues. Check before writing a new skill from scratch |

**On format.** Those repos package each skill as a folder with a `SKILL.md` carrying `name` and `description` frontmatter, so the agent loads it automatically when a task matches instead of being told to read a path. Ours are plain markdown that a client README points at. If we want auto-loading, the move is `.claude/skills/find-leads/SKILL.md` with frontmatter, keeping these files as the reference material the skill pulls in. Worth doing once the set stops changing weekly.

## The line we don't cross

Public pages only, no session cookies, no login walls, no bypassing a block. Collect the fields that end up in the report and no more. Every claim links to its source. We draft outreach; a human sends it. This is in both skills for a reason — it is what makes the product sellable to a client's legal team, and it is cheaper to run besides.
