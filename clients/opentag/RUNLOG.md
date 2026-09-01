# Run log

Newest first. One entry per report sent or built. The daily skill reads the top entry before starting.

## 2026-09-01 daily (window Aug 30 to 31)

**Output.** `webapp/reports/opentag/daily-09-01-2026.json`, live at https://415brand.com/analysis/opentag/daily-09-01-2026. Archive `reports/daily-09-01-2026.html`. Email `reports/daily-09-01-2026.email.html` and `.email.txt`, spec in `reports/daily-09-01-2026.broadcast.json`. Resend broadcast `bfd36409-c653-4814-8a7c-488182e8f940`, status `draft`, https://resend.com/broadcasts/bfd36409-c653-4814-8a7c-488182e8f940. Subject "Claude Tag daily brief, Sep 1".

**Found.**
- `@AdrianRusin` converted. Three posts on Aug 31 under Tony's session-traces post with the hardest cost numbers anyone has put in public: $1,700 for one Claude Tag task, over $2,500 in a week at a small org, $70 for a task he now runs on OpenTag, and a screenshot of the same job both ways. All unanswered. He has a DeepSeek harness running as a DIY replacement and the only gap is a UI his non-technical staff can use.
- The Claude Tag launch credits may now run to Oct 1, not Sept 1. Two Japanese accounts said so independently on Aug 31 (`@tyone`, `@utamori_`, the second naming ¥400,000, close to the $2,500 Team credit). Unconfirmed.
- Anthropic runs exactly two Claude Tag video hooks and neither mentions money. Both launched Jun 23 and are still live at 67 and 68 days. Negative search across the 180 creatives that surface for "Claude Tag": Anthropic's own 30 use price, cost, cheap, free, credits, token, seat, bill, switch, lock-in, open source and model zero times each.
- Hermes is the competitor to profile next. Four mentions in one week. It has its own subreddit.
- Reddit is still worth nothing here. Five search terms, 119 posts, zero mentioning Claude Tag in title or body. Same result as the weekly.
- Tony worked Friday's list: offered `@ptaranat` and `@farez` $100 of credits, Shelden answered `@kamilrextin` and `@joesadoski`. `@farez` said no, already on Hermes.
- `tryopentag.com/compare/claude-tag` is still a dead page.

**Seen but not sent.** Real rows that lost the cut. Promote one if it grows.

| Post | Why it was cut |
|---|---|
| [@MaaTrailblazer](https://x.com/MaaTrailblazer/status/2094274529321501036), [@cygnirez](https://x.com/cygnirez/status/2093982604118901066), [@kubo_vbapg](https://x.com/kubo_vbapg/status/2093746470398873630), all Aug 31, Japanese | Good posts, wrong market. Client is selling into the US. Japanese sources still allowed as evidence in the bullets. |
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

**Follow up next run.**
- Confirm the Claude Tag credit end date from a real admin console, not from X.
- Profile Hermes and add it to `research/competitors.md`.
- Check whether `@jmckenty` and `@ramoncacho` were ever answered. Our reply search only catches replies naming `@TryOpenTag`.
- The Aug 28 `@kamikariat` thread naming twelve rival products is mostly unworked.
- Pull the Claude page's Meta Ad Library by page id, active and all.
- Did anyone answer `@AdrianRusin` or `@jjl13579`?

**Tooling.**
- The `RESEND_API_KEY` on file was rejected on this run (`API key is invalid`), so the draft went through the Resend connector, which means pasting 37KB of HTML inline. The key was replaced the same day, see `ops/RESEND.md`.
- The ad pull was a keyword search on the Meta Ad Library, not a page pull. Pull the Claude page by id next time.
- Email and report were built from the same lists so they could not drift. The report data is now `webapp/reports/opentag/daily-09-01-2026.json`.

## 2026-08-31 weekly (window Aug 24 to 30)

**Output.** `webapp/reports/opentag/weekly-08-31-2026.json`, live at https://415brand.com/analysis/opentag/weekly-08-31-2026. Archive `reports/weekly-08-31-2026.html`. Email `reports/weekly-08-31-2026.email.html` and `.email.txt`, a short summary (recommended actions and key findings) linking to the full report. Broadcast id not recorded.

**Found.**
- Moore (`research/moore.md`) is the best prospect OpenTag has. Its new CIO, Shamyo Chatterjee, is 32 days into a written AI mandate. Ryan Katz became president of the agency the same day promising "one connected partnership". Moore runs on Microsoft Teams, so the deal hangs on whether OpenTag opens Teams. Scope any pilot away from donor data because SOC 2 is unfinished.
- Anthropic gave Claude Tag spending caps (org-wide caps, per-channel limits, alerts at 75% and 95%) and cancelled the Sept 1 price rise, so the bill-shock argument is smaller than a week ago.
- Two free open-source rivals launched into the Claude Tag alternative slot the same week OpenTag did: Switch by SandboxAQ (Apache licence, already does Teams) and AgentConnect.
- OpenTag makes three different savings claims (70%, 50%, 10x) and two model counts (80+, 100), and four of its five public surfaces promise Teams that its own docs say is not generally available. A buyer in the launch thread asked why the Teams logo is in the promo and nobody answered.
- The launch reached OpenTag's YC batch, not its buyers. Of 106 replies, 11 asked a real question and were never answered, including `@kar2905` ("do you have zdr"), `@broukhim` ("but are you locked into OpenTag?"), `@AIVibeCoding` ("I'd LOVE to try out OpenTag"), `@Viswana34226652` (wants to test it against Viktor). Product Hunt has three unanswered questions on the launch page.
- Product Hunt: one review at 4.0 against neighbours with 8 to 22.
- LinkedIn company page now reads "OpenTag (YC S26)", 179 followers. The batch is confirmed as S26.
- Switch evidence: `@farez` to Hermes, `@The10XCFO` trying Hermes and Buzz. Hermes appears in three separate switch mentions.

**Recommended actions that shipped.** (1) Call Ryan Katz at Moore, decide Teams first. (2) Answer the 11 unanswered launch-thread questions. (3) Ask the 10 teams for Product Hunt reviews, ask the 4-star reviewer what was missing. (4) Build `/compare/claude-tag` with real numbers.

**Seen but not sent.** Not recorded for this run.

**Follow up next run.**
- Profile Hermes.
- Whether Moore gets a Teams decision.
- Whether the 11 launch-thread questions get answered.

**Tooling.**
- Social data pulled Aug 30 and refreshed at 9pm UTC.
- No Similarweb traffic figures, the site went public Aug 26.
- Eight complaints is a small sample and was presented as one.

## 2026-08-28 daily (window Aug 26 to 27, with a 14-day re-pull)

**Output.** `reports/daily-08-28-2026.html`, `.email.html`, `.email.txt`. Not emailed. A separate leads sheet was published at https://415brand.com/analysis/opentag/leads-08-28-2026 (`webapp/reports/opentag/leads-08-28-2026.json`).

**Found.**
- Ten named accounts complaining about Claude Tag cost or lock-in, spanning the Jun 24 launch to Jul 23. Best single lead `@ptaranat`, who disabled Claude Tag over cost and fell back to Linear agents.
- AgentConnect launched Aug 26 as an open-source Claude Tag alternative, amplified by about ten accounts in six hours with near-identical copy.
- Salesforce and Anthropic announced Claudeforce on Aug 26.
- `@raphaelschaad` is publicly pitching OpenTag as "100 choices, 10x cheaper" while the site says 80+ models and 70%.
- OpenTag does have an X account, `@TryOpenTag`, and launched publicly on Aug 26 via `@kamikariat` to 106 replies, 346 likes and 31 reposts. The earlier note that no X account existed was wrong. That thread is the warmest unworked lead source.

**Seen but not sent.** Not recorded for this run.

**Follow up next run.**
- Pull the reply trees of `@ashwingop`'s Jun 24 post (480 replies) and `@random_walker`'s (60) with `xquik/x-tweet-scraper` in replies mode.
- LinkedIn needs different queries. Pull Anthropic's and Viktor's company-page posts with `harvestapi/linkedin-profile-posts` and `scrapeReactions`, filter reactors by title before enriching.
- Viktor's G2 reviews: the review scraper could not find the product by name. Pass the exact URL.
- Ask the founders what completes the sentence in Tony's brief, and whether they want the daily emailed.
- Work the `@kamikariat` launch thread first.

**Tooling.**
- The first pass of table 1 leaned on posts from the Claude Tag launch window and read as stale. Re-pulled with `timeWindowHours: 336` on four narrower queries and rebuilt fresh-first. Four high-intent older rows were kept deliberately and marked as older.
- LinkedIn keyword search on "AI coworker Slack" returned 1,242 results, almost all engagement-farming accounts.
