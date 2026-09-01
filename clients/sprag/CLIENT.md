---
slug: sprag
client: Sprag
subject: Deepgram
readers: Ian and Alex at Sprag
cadence: daily and weekly
status: live
site: https://sprag.ai
market: Developers and companies building voice products, worldwide. Spanish replies have been used.
resend_segment: a8d694bd-9cb6-4e94-acdb-b69732da2615
reply_to: matt@415brand.com
---

# Sprag

## What they sell

Sprag is a speech API company: speech-to-text (Rhythm, 30 languages plus 22 Chinese dialects), text-to-speech (Chorus, 10 voices and languages) and speech-to-speech conversation (Symphony, 18 languages including Urdu). The pitch is cost per call-minute and end-to-end agentic latency, not raw STT or TTS speed. Full background in `research/sprag.md`. Competitors Soniox, Deepgram and Cartesia in `research/competitors.md`. Deepgram is the report subject because it is the incumbent and the most interesting.

## Who reads it and what they want

- **Ian** and **Alex**, founders.

Matt's brief (Aug 27): "Sprag's ultimate goal is to find out who their competitor's customers are. We can find that out or guess based off of social media interactions." For every X and LinkedIn post from a competitor, extract everyone who engaged with it and find employees or founders of companies that might be a customer. The first table of the daily is potential customers of a competitor, paired with why we think they might be a customer. That is the most important thing.

In priority order:

1. Accounts that look like a competitor's customer, with the evidence and the angle. Named person, title, company, linked artefact, A/B/C confidence.
2. Open-source projects running Deepgram where Sprag can send a pull request. Deepgram sells an API, so public code is the strongest evidence source there is.
3. People complaining about Deepgram, and people shopping around.
4. What Deepgram, Soniox and Cartesia did.

## Report shape

**Daily.** Title "Deepgram daily brief". Subtitle "For Ian and Alex at Sprag, Month D, YYYY". Contents box, then the green "Today's three moves" box, then:

1. Open source projects running Deepgram. Columns Project | Stars | The Deepgram dependency | Last push | What Sprag can do. Five rows ranked by stars, each checked for a pluggable dependency (name the file), a live repository (print the last push), and a voice use case in the ICP.
2. Who looks like a competitor's customer today. Columns Who | Where | The signal | What Sprag can do. Five rows, A-tier first, per `.claude/skills/competitor-customers/SKILL.md`.
3. People complaining about Deepgram. Columns Where | Date | Post | Reach | What Sprag can do. Four to five rows.
4. People shopping around or on the fence. Same columns, three to five rows.
5. People happy with Deepgram. Last column "Why it matters". Three to five rows.
6. What happened in the last two days. Five bullets, then one "Follow up tomorrow" line.

No ads section until an advertising source exists for Deepgram. Deepgram's paid presence is search and display, covered in the weekly through Google Ads Transparency. The Sept 1 daily carried a sources section, which the shared rules have since dropped.

The bar for a lead: a real company with traction, not a named person with a repo (Sept 1). Five good rows beat forty. Check Sprag's language lists before any advice cell names a language. Sprag has no G2 listing and has not run eot-bench, so claim no score on either.

**Weekly.** The standard weekly shape on Deepgram, with the account section from the competitor-customers skill. Paid search comes from Google Ads Transparency (domain-level counts differ from account-level counts, say which). Sitemap counts are a useful hiring-and-content signal: Deepgram runs 57 per-language landing pages and rebuilt all of them on Aug 28.

## Do not pitch on

- Individuals on side projects or hobby projects, however good the fit. Note them, do not row them.
- Government and federal self-hosted or disconnected deployments. Closed to Sprag today. Watch the segment.
- Startup Program joiners on free Deepgram credits. Revisit when they run out.
- Languages Sprag does not cover. Kannada, Tamil, Telugu and Norwegian are in none of the three products. Urdu is in Symphony and not in Rhythm.
- Repositories that only mention Deepgram in a README, or with no push in over a year (dead upstream). The forks of a dead upstream can be worth a separate dig.
- Deepgram's own staff posting from personal accounts. Ed Charbeneau, Developer Advocate for Deepgram Partners, was once listed as a complaint.

Post-level filter in `IGNORE_RULES.md`.

## Pulls

| Source | Tool | Input |
|---|---|---|
| X, mentions | `scraper_one/x-posts-search` | `deepgram` over the last 48 hours, `latest` and `top`. Query under 100 characters. |
| X, engagers | `xquik/x-tweet-scraper` | Replies, quotes and reposts on Deepgram's, Soniox's and Cartesia's own posts. Likes are private on X, so engagers means repliers, quoters and reposters. |
| LinkedIn, keyword | `harvestapi/linkedin-post-search` | `searchQueries: ["deepgram"]`, `postedLimit: "week"`, `scrapeReactions: true`, `scrapeComments: true`, `reactionsProfileScraperMode: "short"`. Read every reaction and comment for job title and employer. LinkedIn does not publish the date of a reaction, so a row resting on a reaction carries the post's date. |
| LinkedIn, competitor pages | `harvestapi/linkedin-profile-posts` | Deepgram, Soniox and Cartesia company pages, `scrapeReactions: true`. Cap `maxReactions`, it bills per engager. Filter by title and employer before enriching anyone. |
| LinkedIn, jobs | `curious_coder/linkedin-jobs-scraper` | `keywords: "deepgram"`. A job ad that prints the stack is B-tier evidence (Elios was found this way). |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["deepgram"]`, `searchSort: "new"`. Low yield. |
| GitHub | `gh api`, free on the user's token | `search/commits` with `q=deepgram committer-date:>=<two days ago>` for who touched it today. `search/code` for `api.deepgram.com`, `DEEPGRAM_API_KEY`, `deepgram-sdk`, the Python and realtime imports, for who runs it at all. Collect `repository.full_name`, call `repos/{full}` for stars, forks and `pushed_at`, sort by stars. Read the commit history on every hit to turn a repo into a named engineer. Rate limits: 30 a minute on search, 10 on code search, retry 403s with backoff. |
| G2 | `zen-studio/software-review-scraper` or direct | Deepgram reviews, most recent first, `starRatings: [1,2,3]`. Quote the dislike box. Reviewers self-identify role and company size. |
| Deepgram changelog, customers page, docs | Firecrawl | `deepgram.com/changelog`. Customers page with structured extraction for logos and names. Wayback-diff the logo wall. |
| Hacker News | Algolia, free | `hn.algolia.com/api/v1/search_by_date?query=deepgram`. |
| Google Ads Transparency | Firecrawl, weekly | `adstransparency.google.com/?domain=deepgram.com`. |

**Names.** Sprag itself has near-zero organic mentions. Do not pad a "mentions of Sprag" table. Deepgram's model names (Nova-3, Flux, Aura-2) are worth searching on their own.

## Email

- Segment **sprag.ai**, id `a8d694bd-9cb6-4e94-acdb-b69732da2615`. Ian and Alex. Confirm the contacts with `list-contacts` before drafting.
- From `research415 <reports@415brand.com>`. Reply-to `matt@415brand.com`.
- Subject "Deepgram daily brief, Mon D" or "Deepgram weekly brief, Mon D". Preview text is the counts: "5 open source projects to send a pull request, 5 accounts that look like a competitor's customer, 4 threads nobody has answered."
- Broadcast draft only. A human sends.

## Conflicts and confidentiality

Soniox is Sprag's most direct competitor and is on research415's do-not-contact list for exactly that reason. No other client is in this category. Sprag's own benchmark data was extracted from a bundle on their site and includes tables not rendered on the public page. Treat it as the client's own material.

## Open questions for the client

1. Does Deepgram run Meta or TikTok ads at all? If yes, the page id. Until then the daily has no ads section.
2. Who is in the sprag.ai Resend segment, and should both founders get the daily?
3. Are speaker labels included in Rhythm's price? An advice cell claimed so.
4. Barge-in: does it need a client patch today? An advice cell said to admit it does.
5. Does Sprag want a G2 listing? Deepgram's Fall 2026 G2 Leader badge goes into every deal this quarter and Sprag is not on the grid.
6. Which of the proposed rules in `IGNORE_RULES.md` do Ian and Alex want kept?
