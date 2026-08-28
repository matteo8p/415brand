# Ref (ref.tools)

> **Status: prospect, not a signed client.** Nothing here has been sent to Ref. Matt Dailey has not been contacted. The first deliverable is a sample brief used to open the conversation, not a paid report. Do not create a Resend segment or draft a broadcast until Matt says yes.

Ref sells plan review for AI coding agents. Two products: **Ref Context** (a documentation search MCP server, thousands of daily users) and **Ref Plans** (a multiplayer plan editor with review, which is where the company is now pointed). Business background in `REF.md`. Competitive landscape in `COMPETITORS.md`.

Reader is **Matt Dailey**, founder and CEO. [@reactiverobot](https://x.com/reactiverobot), matt@ref.tools.

> **Two Matts.** In this folder, and in anything addressed to Ref, "Matt" means Matt Dailey, the client.
> Everywhere else in `clients/` (Cloudless, OpenTag) "Matt" means our own operator. The Ref brief's
> "What Matt can do" column is Matt Dailey. Do not conflate them.

## What Matt would care about

He is already doing this monitoring himself. He wrote the "AI Broke Code Review" essay, he replies on X, he is personally in the threads. So the pitch is not "we will find these posts for you." It is **"you stop being the bottleneck."**

Ref is winning the argument and losing the room. The essay resonated. The product barely gets mentioned. Meanwhile two Traycer founders answer every post by name, which works right up until it does not scale past the hours in their day.

Three things Ref needs from a brief, in priority order:

1. **People stuck between agents.** Anyone posting about juggling Cursor, Claude Code, Codex and Devin, losing context between sessions, or acting as "the router." This is Ref's homepage written by a stranger and it is the highest-converting shape of lead.
2. **Context7 churn.** Quota walls, the enterprise-only self-hosting gate, token cost. Ref Context wins these on price and private repos, and it is a low-friction install.
3. **Traycer users with unmet needs.** Their community is public and their gaps are posted openly.

## Do not pitch on

Ref is a small team on $4M in open beta. Do not send them enterprise-scale lead volume they cannot work. Five good replies beat forty rows, same as Sprag.

## Workflow (daily)

Follow `skills/DAILY_REPORT_GUIDANCE.md` for format and `skills/FIND_LEADS.md` for what counts as a lead. This brief is **lead-first**, closer to the OpenTag shape than the Cloudless shape: table 1 is people Ref can convert today, table 2 is people shopping, and everything else is bullets.

Unlike Cloudless there is **no single competitor**. Ref fights on two fronts (docs search, and the plan layer) against a different set on each. Structure the brief around the two fronts, not around one rival.

### The name problem

**Never search the bare string `Ref`.** It is a common English word, a referee, a git ref, and a dozen GitHub projects. It returns nothing usable. Use:

- `ref.tools`, `"ref mcp"`, `"Ref Plans"`, `ref_search_documentation`
- `@reactiverobot`, `"Matt Dailey"`
- `"velocity sickness"`, their coined term, and the cleanest way to measure whether the essay is spreading

### Pulls

| Source | Actor | Input |
|---|---|---|
| X, competitors | `scraper_one/x-posts-search` | `context7 OR "ref.tools" OR traycer OR "spec driven development" OR "spec-driven"`. `searchType: "latest"`, `timeWindowHours: 48`. Run again with `"top"`. |
| X, problem space | same | `"plan mode" OR "plan review" OR "AGENTS.md" OR "too many PRs" coding agents` |
| X, Context7 churn | same | `context7 (quota OR expensive OR limit OR alternative OR "rate limit")` |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["context7", "traycer", "spec driven development", "ref.tools"]`, `searchSort: "new"`, `searchTime: "week"` |
| Reddit, communities | same | Watch **r/traycer** (competitor's own subreddit), r/ClaudeAI, r/ClaudeCode, r/ClaudeWorkflows, r/cursor |
| GitHub | code search | `ref-tools-mcp`, `@upstash/context7-mcp` in `mcp.json` / `.mcp.json` / `claude_desktop_config.json`. Per `skills/FIND_CUSTOMERS_OF_COMPETITORS.md`, read the commit history on every hit. That is what turns a repo into a named engineer. |

**No Meta ads section.** Neither Ref nor its competitors run Meta ads. This is a developer-tools market and the equivalent surface is GitHub, Hacker News and X. Do not build an ads table out of nothing.

### Things that bite

- Reddit search on these terms returns heavy noise. The second pull in the Aug 28 research run (`"planning with claude code"`, `"AI code review broken"`) came back almost entirely off-topic. Keep search terms as **product names**, not problem descriptions.
- `spec driven development` is a huge, mostly Spanish- and Portuguese-language content firehose right now (courses, webinars, YouTube). Most of it is not a lead. Filter to people describing a *problem*, not people teaching a methodology.
- Ref itself has near-zero organic mentions, so a "mentions of Ref" table will be empty most days. Do not pad it. Report the number honestly, because the number is the argument for hiring us.

## Ignore rules

`IGNORE_RULES.md`. Filtering is silent, same as Cloudless: dropped posts are not shown to the reader.

## What the Aug 29 report found (for continuity)

First report built: `reports/08-29-2026.html`, window Aug 27 to 28. Email copy built as a file only.
**No Resend broadcast created**, per the status note at the top.

- **Lead story: Anthropic published [The AI-Native SDLC Playbook](https://claude.com/blog/the-ai-native-sdlc-playbook)
  on Aug 26.** It validates Ref's thesis ("code is no longer the bottleneck, your SDLC is", human attention moves
  "from reading every line to judging intent and risk") and then prescribes markdown artifacts committed to git,
  which is the approach Ref already argues against. Tailwind and threat in one document. Watch how the market
  reacts over the next week.
- **Best single lead: [@_jsolly](https://x.com/_jsolly/status/2093115956620833214)**, who found out cloud Cursor
  agents do not support plan mode. Ref Plans is cloud plan mode that launches Cursor Background Agents.
- **The AGENTS.md versus CLAUDE.md split is the loudest complaint in the category**: nine posts in two days across
  five languages, all describing one team ending up with two sets of instructions. Nobody is selling the answer.
- **Traycer shipped twice more** (HuggingFace open models Aug 27, mobile confirmed Aug 28).
- **Share of voice, measured:** Matt's own HN submission got 1 point and 0 comments. Across 196 posts pulled in the
  window, Ref was named by nobody except Matt.
- Two Aug 26 leads still unanswered and deliberately kept out of the tables (already in `leads/08-28-2026.md`):
  @akbrouwer4 and @caiopizzol. They are in the week bullets as follow-ups instead.

### Notes for the next run
- The X query cap is **100 characters**. Both queries had to be split to fit.
- Reddit on `plan mode claude` returned almost pure noise. Keep Reddit to product names only, as the pulls table says.
- Hacker News is worth keeping: the Algolia API (`hn.algolia.com/api/v1/search_by_date`) needs https, and its plain
  query does fuzzy matching, so read the hits rather than trusting the ranking. It produced two of the better leads.
- Reddit blocks both Firecrawl and plain curl JSON, so engagement numbers on Reddit threads have to come from the
  Apify pull or be left out. Do not invent them.

## What the Aug 28 research run found (for continuity)

- **Best lead by a distance: [@akbrouwer4](https://x.com/akbrouwer4/status/2092658340434182579)** (Aug 27): "HELP! I'm struggling with my AI Agents... bouncing between Cursor, Claude Code, Codex, and Hermes agents... Memory doesn't carry across any of them. I'm still the router." Traycer's founder replied within hours. Ref never showed up. This single thread is the whole pitch.
- **Context7 has a pricing crack.** [@caiopizzol](https://x.com/caiopizzol/status/2092721310648455255): "add 'use context7' to every coding agent — also context7: monthly quota reached. self-hosting is enterprise-only."
- **The SDD backlash is real and quotable.** Four separate "waterfall with extra steps" posts in one week, plus a study of 100,247 PRs where none of five hypotheses held.
- **Traycer shipped Desktop, headless host, and HuggingFace support in a single week**, and teased mobile plus a cross-harness memory layer.
- **Ref has no comparison page for Traycer.** Free, specific advice to open a conversation with.
- Full lead list in `leads/08-28-2026.md`.
