---
slug: ref
client: Ref
subject: Traycer
readers: Matt at Ref
cadence: daily
status: prospect
site: https://ref.tools
market: United States, English, with Spanish, Portuguese, Chinese and Japanese posts translated
resend_segment: none
reply_to: matt@415brand.com
---

# Ref (ref.tools)

> **Status: prospect, not a signed client.** Nothing here has been sent to Ref. Matt Dailey has not been contacted. The first deliverable is a sample brief used to open the conversation, not a paid report. Do not create a Resend segment or draft a broadcast until Matt Dailey says yes.

> **Two Matts.** In this folder, and in anything addressed to Ref, "Matt" means Matt Dailey, the client. Everywhere else in `clients/` "Matt" means our own operator. The Ref brief's "What Matt can do" column is Matt Dailey. Do not conflate them.

## What they sell

Plan review for AI coding agents. Two products: **Ref Context** (a documentation search MCP server, thousands of daily users) and **Ref Plans** (a multiplayer plan editor with review, where the company is now pointed). Small team, $4M, open beta. Background in `research/ref.md`. Competitive landscape in `research/competitors.md`.

## Who reads it and what they want

Reader is **Matt Dailey**, founder and CEO. [@reactiverobot](https://x.com/reactiverobot), matt@ref.tools.

He is already doing this monitoring himself. He wrote the "AI Broke Code Review" essay, he replies on X, he is personally in the threads. So the pitch is not "we will find these posts for you." It is **"you stop being the bottleneck."** Ref is winning the argument and losing the room. The essay resonated. The product barely gets mentioned. Meanwhile two Traycer founders answer every post by name.

What the brief must deliver, in priority order:

1. **People stuck between agents.** Anyone posting about juggling Cursor, Claude Code, Codex and Devin, losing context between sessions, or acting as "the router." This is Ref's homepage written by a stranger and the highest-converting shape of lead.
2. **Context7 churn.** Quota walls, the enterprise-only self-hosting gate, token cost. Ref Context wins these on price and private repos, and it is a low-friction install.
3. **Traycer users with unmet needs.** Their community is public and their gaps are posted openly.

## Report shape

Daily. Lead-first, closer to the OpenTag shape than the Cloudless shape: table 1 is people Ref can convert today, table 2 is people shopping, and everything else is bullets.

There is **no single competitor**. Ref fights on two fronts, docs search (Context7, GitMCP, GitHits) and the plan layer (Traycer, spec-driven development tools), against a different set on each. Structure the brief around the two fronts, not around one rival. The frontmatter names Traycer as the subject because it is the loudest rival and the plan layer is where the company is pointed.

**No Meta ads section.** Neither Ref nor its competitors run Meta ads. The equivalent surface is GitHub, Hacker News and X. Do not build an ads table out of nothing.

A "mentions of Ref" table will be empty most days. Do not pad it. Report the number honestly, because the number is the argument for hiring us.

## Do not pitch on

- Enterprise-scale lead volume they cannot work. Five good replies beat forty rows.
- Fortune 100 platform teams. Ref has no finished SOC 2 and no self-hosted build.
- Post-level filter is in `IGNORE_RULES.md`. Filtering is silent.

## Pulls

| Source | Tool | Input |
|---|---|---|
| X, competitors | `scraper_one/x-posts-search` | `context7 OR "ref.tools" OR traycer OR "spec driven development" OR "spec-driven"`. `searchType: "latest"`, `timeWindowHours: 48`. Run again with `"top"`. The query cap is **100 characters**, so split as needed |
| X, problem space | same | `"plan mode" OR "plan review" OR "AGENTS.md" OR "too many PRs" coding agents` |
| X, Context7 churn | same | `context7 (quota OR expensive OR limit OR alternative OR "rate limit")` |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["context7", "traycer", "spec driven development", "ref.tools"]`, `searchSort: "new"`, `searchTime: "week"`. Product names only. Problem descriptions return almost pure noise |
| Reddit, communities | same, `startUrls` | Watch **r/traycer** (competitor's own subreddit), r/ClaudeAI, r/ClaudeCode, r/ClaudeWorkflows, r/cursor |
| Hacker News | Algolia API, `https://hn.algolia.com/api/v1/search_by_date` | `ref.tools`, `context7`, `traycer`, `spec driven`, `plan mode`. Needs https. Fuzzy-matches, so read the hits rather than trusting rank. Produced two of the better leads on Aug 28 |
| GitHub | code search | `ref-tools-mcp`, `@upstash/context7-mcp` in `mcp.json`, `.mcp.json`, `claude_desktop_config.json`. Read the commit history on every hit, per `.claude/skills/competitor-customers/SKILL.md`. That is what turns a repo into a named engineer |

Name collisions. **Never search the bare string `Ref`.** It is a common English word, a referee, a git ref, and a dozen GitHub projects. Use `ref.tools`, `"ref mcp"`, `"Ref Plans"`, `ref_search_documentation`, `@reactiverobot`, `"Matt Dailey"`, and `"velocity sickness"`, their coined term, which is the cleanest way to measure whether the essay is spreading.

Things that bite.
- `spec driven development` is a huge, mostly Spanish- and Portuguese-language content firehose right now (courses, webinars, YouTube). Most of it is not a lead. Filter to people describing a problem, not people teaching a methodology.
- Reddit blocks both Firecrawl and plain curl JSON, so engagement numbers on Reddit threads have to come from the Apify pull or be left out. Do not invent them.
- Translations in square brackets are ours. Quote the original as written.

## Email

No Resend segment. Nothing is sent until they sign. The first deliverable is a sample used to open the conversation. When they do sign: from `research415 <reports@415brand.com>`, reply-to matt@415brand.com, subject "Competitor leads brief, Mon D" (there is no single competitor to name in the subject). Broadcast draft only. A human sends.

## Conflicts and confidentiality

No client conflict. Ref sells developer tooling and nobody in the book competes with it. Not the OpenTag and Adapt situation.

The two-Matts rule above is the only confidentiality trap: never let our operator's rulings ("Matt cut this") read as if Matt Dailey said them, in any file that could be forwarded.

## Open questions for the client

1. Does Matt Dailey want the brief at all, given he already does the monitoring himself? The pitch is time, not discovery.
2. Which front matters more this quarter, Ref Context (docs search) or Ref Plans (the plan layer)? It decides which table goes first.
3. Does he want Spanish, Portuguese, Chinese and Japanese posts as reply targets, or as evidence only?
4. Ref has no comparison page for Traycer. Free, specific advice to open with.
5. Which of the seven proposed rules in `IGNORE_RULES.md` should stand?
