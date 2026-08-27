# Overview 

OpenTag - is an AI coworker that lives in your Slack and Teams. It has full context on your company, so it can answer questions, join calls, and take real work off your team's plate. OpenTag also keeps your company wiki and knowledge base up to date automatically, so your team's knowledge never goes stale or walks out the door.

# What the OpenTag CEO cares about from our analysis 
1. The OpenTag CEO wants to find potential leads from Reddit, LinkedIn, X, other social media sites. Wants to find potential customers for OpenTag, that they can reach out to. 

We want to look at any mentions of OpenTag competitors on social media. We also want to find any leads by looking at existing users of Viktor / Claude Tag and other competitors and surface them. 

# Initialize 
1. Create a OPEN_TAG.md and do some deep research on OpenTag. 
2. Do some research on its competitors, write down the report in COMPETITORS.md in the opentag/ file directory. 

# Workflow (daily)

Follow `skills/DAILY_REPORT_GUIDANCE.md` for format and `skills/FIND_LEADS.md` for what counts as a lead. Background: `OPEN_TAG.md` and `COMPETITORS.md`. Reader is Tony Kam (CEO). Report is built from `reports/build_report.py`: edit the `BILL`, `SHOPPING` and `BULLETS` lists, run it, it writes `reports/<MM-DD-YYYY>.html`.

The brief is lead-first. Table 1 is always people who pay a competitor and said something that makes them takeable. Table 2 is people asking what to use. Everything else is four or five bullets.

## Pulls

| Source | Actor | Input |
|---|---|---|
| X, mentions | `scraper_one/x-posts-search` | `query` must be **under 100 characters**. Run `"claude tag"` and cost or lock-in terms, `searchType: "latest"` with `timeWindowHours: 48`, then again with `"top"` |
| X, category | same | `viktor slack (credits OR expensive OR pricing OR alternative)`, and `"claude tag" (credits OR expensive OR pricing OR cost OR bill)` |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["claude tag", "AI agent slack"]`, `searchSort: "new"`, `searchTime: "week"` |

Never search the bare string `OpenTag`. It returns four unrelated GitHub projects (see `OPEN_TAG.md`, "The name problem"). Use `tryopentag`, `"Gini agent"`, and the founders' names.

## What the Aug 28 run found (for continuity)

- Ten named accounts complaining about Claude Tag cost or lock-in, spanning the Jun 24 launch to Jul 23. The backlog is now cleared, so tomorrow's window is 48 hours.
- Best single lead: `@ptaranat`, who disabled Claude Tag over cost and fell back to Linear agents.
- AgentConnect launched Aug 26 as an open-source Claude Tag alternative, amplified by about ten accounts in six hours with near-identical copy. Watch whether this recurs, and do not count the amplifier posts as organic mentions.
- Salesforce and Anthropic announced Claudeforce on Aug 26.
- `@raphaelschaad` is publicly pitching OpenTag as "100 choices, 10x cheaper" while the site says 80+ models and 70%. Ask Tony which number is right.

## Fix on the next run

1. **Pull the reply tree of the big threads.** `@ashwingop`'s Jun 24 post has 480 replies and `@random_walker`'s has 60. That is the richest untouched vein of leads. Use `xquik/x-tweet-scraper` in replies mode on those two post IDs.
2. **LinkedIn needs different queries.** Searching "AI coworker Slack" returned 1,242 results that were almost all engagement-farming accounts. Instead pull Anthropic's and Viktor's own company-page posts with `harvestapi/linkedin-profile-posts` and `scrapeReactions`, then filter reactors by job title before enriching anyone.
3. **Viktor's G2 reviews.** The review scraper could not find the product by name. Get the exact G2 URL and pass it directly.
4. Ask Tony what completes the sentence in the Initialize section above, and whether he wants the daily emailed.

## Correction, Aug 28 run

The first pass of section 1 leaned on posts from the Claude Tag launch window (Jun 24 to Jul 23), which read as stale. Re-pulled with `timeWindowHours: 336` on four narrower queries and rebuilt the table fresh-first. Four high-intent older rows were kept deliberately and are marked as older in the advice column.

Also found on the re-pull, and now corrected in `OPEN_TAG.md`: **OpenTag does have an X account, `@TryOpenTag`**, and launched publicly on 2026-08-26 via `@kamikariat` to 106 replies, 346 likes and 31 reposts. The earlier note that no X account existed was wrong. That reply thread is the warmest unworked lead source the client has, and should be the first pull tomorrow.
