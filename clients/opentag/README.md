# Overview 

OpenTag - is an AI coworker that lives in your Slack and Teams. It has full context on your company, so it can answer questions, join calls, and take real work off your team's plate. OpenTag also keeps your company wiki and knowledge base up to date automatically, so your team's knowledge never goes stale or walks out the door.

# What the OpenTag CEO cares about from our analysis 
1. The OpenTag CEO wants to find potential leads from Reddit, LinkedIn, X, other social media sites. Wants to find potential customers for OpenTag, that they can reach out to. 

We want to look at any mentions of OpenTag competitors on social media. We also want to find any leads by looking at existing users of Viktor / Claude Tag and other competitors and surface them. 

# Initialize 
1. Create a OPEN_TAG.md and do some deep research on OpenTag. 
2. Do some research on its competitors, write down the report in COMPETITORS.md in the opentag/ file directory. 

# Workflow (daily)

Follow `skills/DAILY_REPORT_GUIDANCE.md` for format and `skills/FIND_LEADS.md` for what counts as a lead. Background: `OPEN_TAG.md` and `COMPETITORS.md`. Readers are the three OpenTag founders: Tony Kam (CEO), Shelden Shi (CTO) and Wilson Nguyen (Chief Engineer). Report is built from `reports/build_report.py`: edit the `BILL`, `SHOPPING` and `BULLETS` lists, run it, it writes `reports/<MM-DD-YYYY>.html`.

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
- `@raphaelschaad` is publicly pitching OpenTag as "100 choices, 10x cheaper" while the site says 80+ models and 70%. Ask the founders which number is right.

## Fix on the next run

1. **Pull the reply tree of the big threads.** `@ashwingop`'s Jun 24 post has 480 replies and `@random_walker`'s has 60. That is the richest untouched vein of leads. Use `xquik/x-tweet-scraper` in replies mode on those two post IDs.
2. **LinkedIn needs different queries.** Searching "AI coworker Slack" returned 1,242 results that were almost all engagement-farming accounts. Instead pull Anthropic's and Viktor's own company-page posts with `harvestapi/linkedin-profile-posts` and `scrapeReactions`, then filter reactors by job title before enriching anyone.
3. **Viktor's G2 reviews.** The review scraper could not find the product by name. Get the exact G2 URL and pass it directly.
4. Ask the founders what completes the sentence in the Initialize section above, and whether they want the daily emailed.

## Correction, Aug 28 run

The first pass of section 1 leaned on posts from the Claude Tag launch window (Jun 24 to Jul 23), which read as stale. Re-pulled with `timeWindowHours: 336` on four narrower queries and rebuilt the table fresh-first. Four high-intent older rows were kept deliberately and are marked as older in the advice column.

Also found on the re-pull, and now corrected in `OPEN_TAG.md`: **OpenTag does have an X account, `@TryOpenTag`**, and launched publicly on 2026-08-26 via `@kamikariat` to 106 replies, 346 likes and 31 reposts. The earlier note that no X account existed was wrong. That reply thread is the warmest unworked lead source the client has, and should be the first pull tomorrow.

## Sept 1 daily run

Output: `reports/09-01-2026.html` (from `reports/build_report_09_01.py`) and the site at `webapp/app/analysis/opentag/daily-09-01-2026`, data in `webapp/app/samples/briefs/opentag-daily.ts`.

Email: `reports/09-01-2026.email.html` and `.email.txt`, from `reports/build_email_09_01.py`, which imports the same lists as the report so the two cannot drift. Subject "Claude Tag daily brief, Sep 1", preview text is the counts, from `research415 <reports@415brand.com>`, segment `OpenTag` (the three founders). Set up as a Resend broadcast **draft**. A human sends it.

Two things to know about the email build:

- Every CSS value is copied from the `.analysis` stylesheet so the email matches the page exactly: same font stack, 15.5px body, 13.5px cells, `#c8ccd1` rules, `#a2a9b1` table borders, `#3366cc` links with no underline, and the green `#1baf7a` bar with `#176f4e` bold on the callouts. The inner table is 900px, not the usual 600px, because that is the report's `max-width`.
- **The font stack must use single quotes around `'Segoe UI'`.** Double quotes close the `style=""` attribute and silently break every element that carries the font. This is fine in the report because that CSS lives in a `<style>` block. It is not fine inline.

Broadcast for Sep 1: `bfd36409-c653-4814-8a7c-488182e8f940`, status `draft`, https://resend.com/broadcasts/bfd36409-c653-4814-8a7c-488182e8f940

**The API key in `clients/RESEND.md` is rejected by the API** (`"API key is invalid"`), so `send_report.sh` and any direct `curl` will fail. Drafts go through the Resend connector until the key is replaced.

Known cosmetic issue in `build_email_09_01.py`: the bullet marker cell emits `color:#202122;color:#72777d`. The second declaration wins so it renders correctly grey, but the duplicate should come out of `bullet()` next run.

Sections: complaints, shopping, the ad swipe file, five bullets. Three tables, four to five rows each. No open-source section, because Claude Tag has no developer surface for a project to depend on. No "people happy with" section either, because the client README says everything past table 2 is bullets. **English-language reply targets only from this run on.**

What the run found:

- **`@AdrianRusin` converted.** Three posts on Aug 31 under Tony's session-traces post, with the hardest cost numbers anyone has put in public: **$1,700 for one Claude Tag task, over $2,500 in a week at a small org**, $70 for a task he now runs on OpenTag, and a screenshot of the same job both ways. All unanswered. He also says he has a DeepSeek harness running as a DIY replacement and the only gap is a UI his non-technical staff can use. Get the screenshot with permission to publish it.
- **The Claude Tag launch credits may now run to Oct 1, not Sept 1.** Two Japanese accounts said so independently on Aug 31 (`@tyone`, `@utamori_`, the second naming ¥400,000, close to the $2,500 Team credit). If it holds, the poaching window in `COMPETITORS.md` moves a month. **Confirm from an admin console before acting.**
- **Anthropic runs exactly two Claude Tag video hooks and neither mentions money.** Both launched Jun 23 and are still live at 67 and 68 days. The negative search across the 180 creatives that surface for "Claude Tag" found that Anthropic's own 30 use price, cost, cheap, free, credits, token, seat, bill, switch, lock-in, open source and model zero times each. That is the ad OpenTag can make and Anthropic cannot.
- **Hermes is the competitor to profile next.** Four mentions in one week: `@farez` left for it over free Slack integration, `@The10XCFO` is wiring it up, `@JohnChelouche` and `@abdulazeem_s` named it unprompted. It has its own subreddit (`r/hermesagent`). Nothing on it in `COMPETITORS.md`.
- **Reddit is still worth nothing here.** Five search terms, 119 posts, zero mentioning Claude Tag in title or body. Same result as the weekly. Stop budgeting time for it.

### Seen but not sent, Sept 1

Real rows that lost the cut. Promote one tomorrow if it grows.

| Post | Why it was cut |
|---|---|
| [@MaaTrailblazer](https://x.com/MaaTrailblazer/status/2094274529321501036), [@cygnirez](https://x.com/cygnirez/status/2093982604118901066), [@kubo_vbapg](https://x.com/kubo_vbapg/status/2093746470398873630), all Aug 31, Japanese | Good posts, wrong market. Client is selling into the US, so non-English reply targets are out of the tables from now on. Japanese sources still allowed as evidence in the bullets. |
| [@tyone](https://x.com/tyone/status/2094262600200827287) and [@utamori_](https://x.com/utamori_/status/2094349490274586867) on the Oct 1 credit date | Same rule. Kept as the source for the lead bullet, since that is intel and not an outreach target. |
| [@sonaljay8, Aug 31](https://x.com/sonaljay8/status/2094360654442627571), "@UltraLinx Claude Tag on Slack?" | Asked a gadget account, not a buyer. |
| [@kirill_gertman, Aug 31](https://x.com/kirill_gertman/status/2094491015646269721), frontier labs will supply salaried virtual employees | Right argument, zero engagement, nothing to win. |
| [@chg80333, Aug 31](https://x.com/chg80333/status/2094313176464859332) on conversation as first-class knowledge | Good read on why buyers now want memory over price. Nothing to reply to. |
| [@AdrianRusin, Aug 31](https://x.com/AdrianRusin/status/2094416645477253564), "not bankrupting ourselves like we did with Claude tag" | Same person already has three rows. Folded into the DIY-harness advice. |
| [@The10XCFO, Aug 28](https://x.com/The10XCFO/status/2093339683262492999), cannot run Claude Tag on a Pro Slack plan, trying Hermes | Already carried in the Aug 31 weekly. |
| [@AreslabsAI](https://x.com/AreslabsAI/status/2094443775179276355) and [Best AI Tool Finder](https://x.com/BestAIToolFind/status/2094269070858453055) indexed @TryOpenTag | Directory bots. Nothing to do. |
| [@camdsmith](https://x.com/camdsmith/status/2094404468427358533) and [@oliveisoliver](https://x.com/oliveisoliver/status/2094271419441893505) on cost per completed task | Good language for the pricing page, not a person to reply to. |
| Anthropic's ["June, in review" carousel](https://www.facebook.com/ads/library/?id=1680985409685228), 38 days | Cheap format worth copying, but four ad rows already beat it. Claude Tag is one line of eight in it, so Anthropic is not funding it as a standalone product. |
| [@MiguelMaestroIA, Aug 28](https://x.com/MiguelMaestroIA/status/2093277980499829228), Viktor creator post, 56 likes and 35 reposts | Repost count that high against likes is paid amplification. Format is fine, the numbers are not evidence. |


## Fix on the next run (Sept 2)

1. Confirm the Claude Tag credit end date from a real admin console, not from X.
2. Profile Hermes properly and add it to `COMPETITORS.md`.
3. Check whether `@jmckenty` and `@ramoncacho` were ever answered. Our reply search only catches replies naming `@TryOpenTag`, so founder replies without the handle are invisible to us. Ask the founders directly.
4. The Aug 28 thread `x.com/kamikariat/status/2093202042642923626` drew ~60 replies naming roughly twelve rival products (Hermes, Skydive, gamutagents, adapter, praxos, raft_hq, Marvin, Switch, Open Claude Tag, OpenClaw, Cursor bot, HQForWork). The weekly took three of them. The rest of that thread is unworked.
5. The ad pull is a keyword search on the Meta Ad Library, not a page pull, because Anthropic's Claude Tag creatives sit on the `Claude` page mixed with everything else it advertises. Pull `view_all_page_id` for the Claude page directly next time and run it twice, active and all, so retired creatives and the low-impression flag both come back.
6. **US market only.** Reply targets in the tables must be English-language. Japanese and other non-English posts stay out of the tables and are used only as evidence in the bullets. Adjust the X pulls to weight English results.
