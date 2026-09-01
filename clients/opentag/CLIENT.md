---
slug: opentag
client: OpenTag
subject: Claude Tag
readers: the OpenTag founders
cadence: daily and weekly
status: live
site: https://tryopentag.com
market: United States, English-language reply targets only
resend_segment: dba88be6-d280-4037-a0a3-3890766ad874
reply_to: matt@415brand.com
slack_channel: C0BTM8JCS4U
---

# OpenTag

## What they sell

OpenTag is a shared AI coworker that lives in Slack (Microsoft Teams is invite-only). It runs on its own sandboxed cloud machine, connects to the company's tools, finishes work rather than describing it, offers to take over jobs it sees repeat (routines), and keeps a self-writing company wiki sourced to the threads decisions were made in. Priced on usage credits, never per seat: $0 trial with $100 of credits and no card, Team from $50 a month. Routes through Conifer to 80+ models. The wedge, in their words: "The tagging layer shouldn't belong to a model company." Three founders, YC S26, SOC 2 Type II in progress. Full background in `research/opentag.md`, competitors in `research/competitors.md`, the Moore prospect in `research/moore.md`.

## Who reads it and what they want

- **Tony Kam**, cofounder and CEO. Primary reader. X handle `@kamikariat`.
- **Shelden Shi**, cofounder and CTO. X handle `@sheldenshi`.
- **Wilson Nguyen**, cofounder and chief engineer.

Tony's brief (Aug 27): find potential leads from Reddit, LinkedIn, X and other social media. Potential customers for OpenTag that they can reach out to. Look at mentions of OpenTag's competitors, and find leads among existing users of Viktor, Claude Tag and other competitors. The brief is lead generation first, brand monitoring second.

In priority order, the daily must deliver:

1. **Creator content that works for the competitors, so OpenTag can emulate it.** Matt met the team on Sept 1 (note `10-01-2026.md`): "They said they really wanted to focus on creators. Like what kinds of creator content styles are working well for their competitors, that way they can emulate that kind of content for their own growth. I want most of our daily reports to focus on that." This is the main event from Sept 2 on.
2. People paying for Claude Tag and unhappy about the bill or the lock-in. Named, linked, unanswered first. Tony works every one of these.
3. People asking what to use: Claude Tag against something else, "AI coworker in Slack", "AI agent in Slack".
4. Existing users of Viktor, Claude Tag and other rivals who said something that makes them takeable.
5. What the competitors did, in bullets.

The weekly adds named prospect accounts when they appear (Moore is the standing example).

**How Tony uses the report** (Slack, Aug 29). He did all three of the Aug 28 recommendations the same day and posted the links. Matt asked whether there was too much on the report and whether to cut it down. Tony: "Having more on there. I basically action on all of them." So for OpenTag, more rows beat fewer rows. Do not cut to five. Include every real, actionable row, ranked, and let the length follow the day.

## Report shape

**Daily, from Sept 2.** Title "Claude Tag daily brief". Subtitle "For the OpenTag founders, Month D, YYYY". Contents box, then a green "Today's three moves" box, then:

1. Creator content that is working in your category, and what to emulate. The first and biggest section. Columns The creator and post | Style | Why we know it works | The hook, word for word | What to emulate. Every creator post about Claude Tag, Viktor, Adapt-class rivals named in public (never Adapt itself, see Conflicts) and the "AI coworker in Slack" category from the last week, across X, TikTok, YouTube, LinkedIn and Instagram, plus the co-branded creator ads in the Meta library (#ClaudePartner and the like). Ranked by engagement rate against follower count, paid marked as paid. As many rows as are real. Then a Takeaway naming the two or three styles that win, with numbers, and the style nobody in the category uses yet. Method: the creators section of `.claude/skills/ad-swipe-file/SKILL.md`.
2. Paying for Claude Tag and unhappy about the bill. Columns Where | Date | Post | Reach | What to do. Every real row, unanswered first. A green summary line under the table when the rows share a story.
3. Asking what to use. Same columns, every real row.
4. Brand ads worth copying, when there is something new at the top of the library. Three rows at most, or fold into the creators Takeaway. Do not repeat a row Tony has already been sent.
5. What happened this week. Five bullets, every claim linked.

Sections 2 and 3 stay because Tony actions every row in them. Section 1 is where the length goes.

**Daily, Aug 28 to Sept 1 (for reading the old reports).** Bill complaints, asking what to use, a five-row swipe file, five bullets.

No open-source section, because Claude Tag has no developer surface a project can depend on. No "people happy with" section. Reply targets in the tables are English-language only. Japanese and other non-English posts are used as evidence in the bullets and never as rows. Creator posts in other languages can be rows in section 1 when the style is the point and the caption is translated in brackets.

**Weekly.** The standard weekly shape. The Aug 31 weekly added a section on the Moore opportunity because a named prospect was the biggest finding. The ads corpus is a keyword search across the Meta Ad Library rather than one page pull, because Anthropic's Claude Tag creatives sit on the Claude page mixed with everything else it advertises.

**Standing rulings.** Most of the daily is about creator content styles the competitors use, so OpenTag can emulate them (Matt after meeting the team, note dated 10-01-2026, written Sept 1). More rows, not fewer: "Having more on there. I basically action on all of them." (Tony, Slack, Aug 29). Bill complaints and shopping rows stay in every report because Tony works them (Tony, Aug 28 and 29). US market only for reply targets (Matt, Sept 1). Deliver on Slack as well as email, the founders live on Slack (Matt, Aug 29).

## Do not pitch on

- Non-English posts as reply targets. Evidence in bullets only.
- Anyone still on free Claude Tag credits. Note them and come back the week the credit runs out.
- Directory bots and gadget accounts that indexed `@TryOpenTag`.
- Posts with the right argument and zero engagement where there is nothing to win.
- Adapt. Never named as an OpenTag competitor in anything Tony reads. See Conflicts below.

Post-level filter in `IGNORE_RULES.md`.

## Pulls

| Source | Tool | Input |
|---|---|---|
| X, mentions | `scraper_one/x-posts-search` | `query` under 100 characters. `"claude tag"` with cost or lock-in terms, `searchType: "latest"`, `timeWindowHours: 48`, then again with `"top"`. |
| X, category | same | `viktor slack (credits OR expensive OR pricing OR alternative)` and `"claude tag" (credits OR expensive OR pricing OR cost OR bill)`. |
| X, own threads | `xquik/x-tweet-scraper`, replies mode | The reply trees of the big threads: Tony's launch post `x.com/kamikariat/status/2092373312286707844` (106 replies), `x.com/kamikariat/status/2093202042642923626` (about 60 replies naming a dozen rival products), `@ashwingop`'s Jun 24 post (480 replies), `@random_walker`'s (60). Replies to `@TryOpenTag` and to the founders' handles. |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["claude tag", "AI agent slack"]`, `searchSort: "new"`, `searchTime: "week"`. Two runs, 119 posts, zero on topic. Budget almost no time here. |
| LinkedIn | `harvestapi/linkedin-profile-posts` | Anthropic's and Viktor's company pages with `scrapeReactions`, then filter reactors by job title before enriching anyone. Keyword search on "AI coworker Slack" returned 1,242 engagement-farming accounts. Do not use it. |
| Meta ads | `apify/facebook-ads-scraper` | Keyword search on "Claude Tag", "AI coworker" and Viktor. Next run: pull the Claude page by `view_all_page_id` directly, twice, `active_status=active` and `active_status=all`, so retired creatives and the low-impression flag both come back. Anthropic's own Claude Tag creatives were 30 of the 180 that surface for the keyword. |
| G2 | `zen-studio/software-review-scraper` | Viktor. Pass the exact G2 URL, the name search could not find the product. |
| Product Hunt | Firecrawl | `producthunt.com/products/opentag` comments. Unanswered questions there go in the reply table. |
| Creator posts, X | `scraper_one/x-posts-search` | `"claude tag" (video OR watch OR thread OR "I tried" OR "I tested")`, `viktor slack (video OR "I tried" OR demo)`, `"AI coworker" slack`, `latest` and `top`, `timeWindowHours: 168`. Keep each under 100 characters. Rank by likes plus reposts against the author's follower count. |
| Creator posts, TikTok and YouTube | `clockworks/tiktok-scraper` (`searchQueries`, `resultsPerPage: 40`), `apidojo/tiktok-scraper`, YouTube search | `"claude tag"`, `"claude in slack"`, `viktor ai`, `"AI employee slack"`, `"AI coworker"`. Date every row, the search does not respect a window. Likes over plays is the rank. |
| Creator posts, LinkedIn and Instagram | `harvestapi/linkedin-post-search` (`searchQueries: ["claude tag", "AI coworker"]`, `postedLimit: "week"`), Instagram via the Meta co-brand line | LinkedIn is where the business-buyer creators post walkthroughs. Mark the ones that are consultants selling pilots. |
| Creator ads, Meta | `apify/facebook-ads-scraper` | The co-branded rows from the Claude page and Viktor's page: `snapshot.brandedContent.pageName` set, or `#ClaudePartner` in the copy. Days live and copies are the evidence. |

**The name problem.** Never search the bare string `OpenTag`. It returns four unrelated GitHub projects. Use `tryopentag`, `"tryopentag.com"`, `"Gini agent"`, `ginicomputer`, `@TryOpenTag`, and the founders' handles. Reply search only catches replies that name `@TryOpenTag`, so founder replies without the handle are invisible to us. Ask the founders before saying a post is unanswered.

**Watch list.** Hermes (`r/hermesagent`) came up four times in one week and is not yet in `research/competitors.md`. Switch by SandboxAQ and AgentConnect launched Aug 26 as free open-source Claude Tag alternatives. AgentConnect's launch was amplified by about ten accounts with near-identical copy inside six hours, so do not count amplifier posts as organic mentions.

## Email

- Segment **OpenTag**, id `dba88be6-d280-4037-a0a3-3890766ad874`. The three founders.
- From `research415 <reports@415brand.com>`. Reply-to `matt@415brand.com` (the Sept 1 draft used `reports@415brand.com`, use Matt's address from now on like the other clients).
- Subject "Claude Tag daily brief, Mon D" or "Claude Tag weekly brief, Mon D". Preview text is the counts: "3 unanswered Claude Tag bills, 4 people asking what to use, 5 ads to copy."
- Broadcast draft only. A human sends. Confirm status `draft` before handing over the link.
- **Slack.** Shared private channel `#research415-opentag` (`C0BTM8JCS4U`) with Tony, Shelden and Wilson. Matt posts the report link there the morning it goes out, with one line on what to look at first, and the founders reply in threads. Read the channel and its threads before every run. Draft the Slack message for Matt. Never post there.

## Conflicts and confidentiality

Adapt (`clients/adapt/`) is a research415 client and a direct competitor of OpenTag: one shared AI agent in Slack, usage-priced, model-routed. We write Adapt a weekly brief on Viktor, and Viktor is also OpenTag's best-funded competitor. Hard wall: nothing from `clients/adapt/` is reused in an OpenTag deliverable, and Adapt is never named as an OpenTag competitor in anything Tony reads. Whether both clients are told is Matt's call and is not recorded. Ask before it matters.

Moore (`research/moore.md`) was shared by Tony on Aug 28 under a friendDA ("since we are besties now and we have a friendDA it's wearemoore.com"). Matt: "Promise everything discussed stays with us." Everything about Moore, the inbound, the pilot offer (10 people for a month, Teams, Copilot is the incumbent) stays inside this folder and OpenTag's own deliverables. Never in a sample, never in another client's report, never in outreach material.

## Open questions for the client

1. What completes Tony's original sentence, "We also want to find any leads for"?
2. Which savings number and model count is right? The site says 80+ models and 70% lower spend. Raphael Schaad is telling followers "100 choices, 10x cheaper". Shelden told a Product Hunt commenter 50%.
3. When do the Claude Tag launch credits actually end? Two Japanese users said Oct 1 on Aug 31. Confirm from an admin console.
4. Was `@ramoncacho` ever answered? Tony replied to three of the Aug 28 rows on Aug 29 and posted the links in Slack, and Joshua McKenty (`@jmckenty`) followed him back. Matt's advice: DM him too. We cannot see founder replies that do not name `@TryOpenTag`.
4b. Which creators do the founders already follow or have talked to? Section 1 should not recommend someone they have already approached.
4c. Do they want investor research? Matt offered on Sept 1 to research prospective investors before each investor call. No answer yet. If they share names, that is a research file under `research/`, not a brief.
5. Will they open Microsoft Teams for Moore? Everything in `research/moore.md` hangs on it.
6. Can the wiki be exported? The lock-in reply depends on the answer.
7. Which of the proposed rules in `IGNORE_RULES.md` does Tony want kept?
