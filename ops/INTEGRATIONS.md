# Integrations

What is connected, what to connect next, and outside work worth borrowing. Updated 2026-09-01.

## Connected

| Tool | Used for | Notes |
|---|---|---|
| Apify | Every social pull (X, Reddit, LinkedIn, TikTok, reviews, Meta ads). Actors and inputs in `.claude/skills/research-pulls/SKILL.md` | Monthly usage cap. When it trips, top up, reinstall the connector, restart the session. Has also been unreachable outright. |
| Firecrawl | Competitor sites, Similarweb and the Meta Ad Library (stealth proxy), web search, developer search | Project-scope MCP in `.mcp.json`, OAuth. Cannot read Reddit or Trustpilot. |
| GitHub (`gh`) | Commit and code search for who runs a competitor's SDK. Free on the user's token | Rate limits in the research-pulls skill. |
| Resend | Broadcast drafts to client segments | `ops/RESEND.md`. Key in `.env`. |
| Gmail, Google Drive | Client correspondence, deliverables | |
| PostHog | Marketing site analytics | |
| Chrome.app | Headless HTML export of reports with charts | `tools/report.py html` |

Free APIs that need nothing: Hacker News Algolia, the iTunes lookup and review RSS, the Wayback availability API, Ashby and Greenhouse job boards.

## Connect next, in this order

1. **An email verifier** (ZeroBounce, NeverBounce, Truelist). Non-negotiable before a work email is ever put in front of a client for outreach. One call per address, at the very end of the pipeline, after the ICP filter.
2. **Exa.** Neural search for phrasings rather than keywords: "we switched our transcription to", "built on Deepgram". Complements Firecrawl (Exa finds the page, Firecrawl reads the site).
3. **A traffic and SEO source with a login** (Similarweb, Semrush, Ahrefs). The weekly scorecard leans on estimates read from public pages. A paid seat makes the numbers defensible if clients start checking.
4. **Slack delivery**, if and when a client wants a hot lead in ten minutes rather than tomorrow's email. Intent type 1 in find-leads has a window of hours. Sell the upgrade, do not build it early.
5. **A CRM** (Attio and HubSpot have MCP servers), only when a client works the lead list rather than reading it. Until then `clients/<slug>/leads/seen.jsonl` is enough to stop repeating a post.

Later, only if volume justifies it: waterfall enrichment (Clay, LeadMagic, Apollo), and Common Room or Trigify to see what productised social listening surfaces that we do not.

## Outside work worth borrowing

None of these are drop-in. They are written for sales teams with a CRM. Read them for method.

| Repo | Take |
|---|---|
| LeadMagic/gtm-skills | the signal taxonomy with per-signal urgency windows, the rule that every message anchors to the signal in its first sentence, the Fact then Impact then Act battlecard shape |
| coreyhaines31/marketingskills | the prospecting workflow and the Hot, Warm, Cold, Skip rubric our find-leads tiering follows, plus its compliance section |
| getaero-io/gtm-eng-skills | deriving the ICP by diffing closed-won against closed-lost, waterfall-enrichment cost routing |
| ComposioHQ/awesome-claude-skills | a clean product to ICP to leads to score to enrich to output loop |
| anthropics/skills, VoltAgent/awesome-agent-skills | catalogues. Check before writing a new skill from scratch. |

## The line we do not cross

Public pages only, no session cookies, no login walls, no bypassing a block. Collect the fields that end up in the report and no more. Every claim links to its source. We draft outreach. A human sends. This is what makes the product sellable to a client's legal team, and it is cheaper to run besides.
