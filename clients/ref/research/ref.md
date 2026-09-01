# Ref: business overview

*Research date: 2026-08-28. Sources: a crawl of ref.tools (sitemap via Firecrawl map, homepage, /pricing, the "AI Broke Code Review" essay), docs.ref.tools (Mintlify, including `llms.txt`, all three comparison pages and the role pages), and the public GitHub repo. Every claim is what the company says on its own site unless marked otherwise. Items marked **[unverified]** come from a single source or could not be cross-checked. Not to be confused with Ref (the sports app), refs.io, or the many GitHub projects named `ref`.*

## One-liner

Ref sells **plan review for AI coding agents**. The pitch: AI made individual engineers fast but teams slow, code review broke as an alignment mechanism, so review the *plan* before the diff. Tagline on the homepage is "Review the Plan before the Code." The Open Graph title is "Chats disappear. Decisions shouldn't."

## Two products, one credit pool

| | Ref Context | Ref Plans |
|---|---|---|
| What it is | Documentation search MCP server so coding agents fetch the exact snippet instead of filling the context window | Multiplayer plan editor with PR-style review, plus launching and tracking coding agents from the plan |
| Age | The original product. The company says it grew to "thousands of daily users" | The current bet. Open beta |
| Sold to | Individual developers, self-serve | Engineering teams |
| MCP | `ref-tools-mcp` (open source, `github.com/ref-tools/ref-tools-mcp`) | Separate server at `api.plan.ref.tools/mcp` |

The strategic read: Context is the funnel, Plans is the business. The company describes itself as "moving full speed at one thing: plans as first-class citizens."

## Company

| | |
|---|---|
| Founder / CEO | **Matt Dailey**. [@reactiverobot](https://x.com/reactiverobot) on X, [matthewjdailey](https://www.linkedin.com/in/matthewjdailey/) on LinkedIn, matt@ref.tools |
| Funding | **$4M**, announced in the Aug essay |
| Investors | Village Global (Lindsay Pettingill), Daybreak Ventures (Jared Newman), Otherwise Fund (Terrence Rohan), Ritual Capital (Chris Howard). Angels: Barry McCardel, Ben Tossell, Wes McKinney, Toni Gemayel, plus unnamed angels from Cognition, Vercel, Figma and Clay |
| Stage | Open beta. The essay thanks ~75 named alpha testers and early customers, first names only |
| Contact | hello@ref.tools, matt@ref.tools for enterprise. Docs on Mintlify, trust center at trust.ref.tools |

## Pricing

| Tier | Price | Credits |
|---|---|---|
| Free | $0 | 200 one-time, never expire |
| Pro | **$50/mo** | 6,000/mo ($0.0083/credit) |
| Max | **$200/mo** | 30,000/mo ($0.0067/credit) |
| Enterprise | Contact sales | SOC 2, SSO, MCP OAuth, priority support, admin controls |

Credits are shared across both products. Extra usage is $10/1K on Pro and above and rolls over. Team plans are per seat with pooled credits and a shared documentation index. Indexing limits scale by tier (3 small repos free, 50 on Pro, unlimited on Max).

**Note the shape:** $50 and $200 are individual-developer prices, not team-budget prices. The buyer Ref's marketing targets (engineering leaders) is not the buyer its pricing page is built for. That gap is worth watching.

## The positioning, in their words

From "AI Broke Code Review and It's Breaking Your Team" (the essay that is doing the company's marketing work):

- **"Velocity Sickness"** is their coined term. "The feeling that you're moving fast but not having the impact you expect for the pace you're feeling."
- Three named symptoms: too many PRs to merge, moving in too many directions at once, and **critical decisions being made by agents** ("the most insidious one").
- "Leaders are impacted the most... CTOs to Staff Engineers, anyone responsible for making a team succeed. They are burning out at higher rates than ever."
- "Sprint planning and code review are the broken relics of a bygone era."
- The core frame: **pre-work vs re-work.** Current tools jump you straight into re-work.

## Integrations

Launches agents directly by API: **Cursor Background Agents, Devin, Conductor Cloud**. Supports via launcher prompt or MCP: Claude Code (web and local), OpenAI Codex, Windsurf, Cline, Kiro, Goose, Amp, Augment, Antigravity, OpenCode, Droid CLI, Warp OZ, Zed, Roo Code, Gemini CLI, ChatGPT, VS Code. Work tracking: Linear, Asana, GitHub, Slack. Also claims 675+ context sources via the One integration (withone.ai).

The strategy is explicitly "all of them". Ref wants to be the neutral layer above every harness.

## Security posture

- **SOC 2 is not actually done.** The homepage shows a "SOC2 Compliant" badge with a Vanta logo. The FAQ on the same page says "SOC 2 certification is currently **in progress** with Vanta." Those two statements contradict each other. If a prospect's security team catches it, it is a credibility problem, and it is the kind of thing worth telling Matt about in a first conversation.
- SSO via Okta, Azure AD / Entra, Google Workspace. SAML and OIDC. MCP OAuth. RBAC.
- Code only reaches Ref's servers if you opt into indexing. The MCP-only workflow keeps everything local, which is a genuinely good answer for security-conscious buyers.
- On-prem / self-hosted is on the roadmap, not shipped.

## ICP (analyst view)

**Economic buyer: the engineering leader.** Named in the essay: CTOs through Staff Engineers. The pain is sold to them.

**Daily user: the senior or staff engineer.** Ref's own role page: "You're juggling as many agents as possible while also supporting junior engineers." Running parallel agents across multi-PR, multi-repo projects, and reviewing other people's plans.

**Company shape:** post-PMF startups and mid-size engineering orgs, roughly 10 to 200 engineers. Big enough that misalignment costs money, small enough to adopt a beta tool without procurement. SOC 2 being unfinished caps them below regulated buyers for now.

**Secondary, and real: the solo "vibecoder."** Ref's own docs have a role page for it, and the FAQ answers "solo or teams?" with "both." This is the self-serve top of funnel Ref Context already built.

**Cross-functional partners** (PMs, designers) are pitched as plan *readers*, not buyers. That is a differentiator against markdown-in-repo, not a separate ICP.

## SWOT (analyst view)

**Strengths:** the essay is genuinely good and is doing real marketing work; broad, neutral agent integration; Ref Context is an existing distribution channel with thousands of daily users; MCP-only mode is a strong security answer.

**Weaknesses:** almost no third-party mention volume (see `competitors.md`); pricing built for individuals while marketing targets team leads; SOC 2 badge/FAQ contradiction; no comparison page for Traycer, their closest competitor; small team against much louder rivals.

**Opportunities:** Context7's quota and self-hosting complaints; the spec-driven-development backlash, which Ref can position *against* rather than inside; large SDD course audiences with no tool loyalty yet; the governance and audit angle ("a durable log of all decisions ratified by humans") that nobody else is selling.

**Threats:** Linear for Agents moving down into the plan layer; Cursor and Claude Code shipping plan mode for free; Traycer out-shipping and out-communicating them; and the "build it ourselves" instinct the essay itself admits engineers have.

## What Matt would care about from us

He is doing the monitoring himself right now. He wrote the essay, he replies on X, he is the one in the threads. The sell is not "we will find these posts." It is "you stop being the bottleneck." See `../CLIENT.md`.
