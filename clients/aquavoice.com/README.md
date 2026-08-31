# Aqua Voice (aquavoice.com)

Aqua Voice sells a cloud system-wide dictation app for Mac, Windows and iOS built on its own speech model, **Avalon**, and sold on published benchmarked accuracy for technical speech. Their named competitor is **Wispr Flow**. Business background in `AQUA_VOICE.md`; competitive landscape in `COMPETITORS.md`. Read both before writing anything.

- Client: Aqua Voice. Subject: Wispr Flow. Cadence: **daily**.
- Reader: **Finn Brown**, co-founder & CEO — [@finnatsea](https://x.com/finnatsea). Also plausible: **Jack McIntire**, co-founder & CTO, who wrote the Avalon model card and would be the reader for anything benchmark- or API-shaped. Confirm which one before the first brief; the shape of the report changes depending on the answer.
- Reports: `reports/<MM-DD-YYYY>.html`.

---

> ## Conflict notice — reviewed and cleared
>
> **Cloudless.so is a paying client in this exact category, with this exact competitor.** Aqua Voice
> and Cloudless are direct competitors and the same Wispr complaint thread is a lead for both of them
> on the same morning.
>
> **Matt reviewed this on 2026-08-31 and cleared it.** Work proceeds on both accounts. The operating
> rules still stand:
>
> 1. **Never let research cross.** Nothing from `cloudless.so/` — Tim's ignore rules, his preferences,
>    his benchmark work, his lead lists — appears in an Aqua report, and nothing from Aqua goes the
>    other way. The Wispr research itself is public-source and belongs to neither client.
> 2. **One client's reply is never another client's lead.** A shared Wispr complaint can go to both.
>    What must never happen is surfacing Tim's reply to Finn, or Finn's to Tim.
> 3. **Watch for the direct collision.** Aqua has no `/vs/cloudless` page and Cloudless has no Aqua
>    page today. If either publishes one, stop and escalate.

---

## What Finn cares about

Aqua is running a **benchmark-led conquest of Wispr Flow**, and unusually, the wedge already exists — we do not have to invent it. Wispr has never published an accuracy number, its users have been publicly complaining about degraded accuracy since July, and Wispr's own Canto announcement effectively concedes a ~30% error rate. Aqua has published 97.3% on AISpeak and a 6.24% WER that ranked #1 among proprietary models on the independent OpenASR leaderboard.

So the pitch is not "we will find you leads." It is **"the argument you are already making is winnable right now, and it stops being winnable the day Canto ships."**

Four things the brief must deliver, in priority order:

1. **People reporting Wispr accuracy problems.** Highest-value row we can produce. Aqua's entire product argument is pre-written for these people; a reply costs Finn one sentence and a benchmark link.
2. **Developers and AI-agent users describing dictation friction.** The AISpeak wedge — people dictating code, model names, CLI commands, technical jargon. Two pitches in one post: the app, and the Avalon API at $0.39/hr.
3. **Japanese-language mentions.** **Confirmed by Finn on the 2026-08-31 call: Japan is the majority of Aqua's user base.** Driven by programmers avoiding Japanese keyboard input while working with AI agents. There is a `/ja` page. Japanese X and Japanese dev blogs are a first-class surface in every brief, not an afterthought.
4. **Anything Wispr ships that blunts the benchmark argument.** Canto shipping, any published WER, a price cut, a free-tier change, the notetaker reaching Windows.

## Do not pitch on

Five people and roughly $2.75M. Do not send volume — five good rows Finn can work beats forty, same as Sprag and Ref. Do not send Android leads (no app, no announced plan), Linux leads (no build), offline/on-device leads (Avalon is cloud-only and always will be), or HIPAA/regulated-health leads (no BAA). Do not send enterprise procurement leads; Wispr has SOC 2 Type I and Aqua has nothing comparable published.

## Pricing — resolved

Aqua compares its price against **Wispr's $15 monthly**, not Wispr's $12 annual-equivalent. That is
the intended comparison and it is a fair one to make monthly-to-monthly. Use $10 vs $15 for monthly
and $8 vs $12 for annual in anything we write, and never mix the two across a single row.

## Workflow (daily)

Follow `skills/DAILY_REPORT_GUIDANCE.md` for format and `skills/FIND_LEADS.md` for what counts as a lead. This brief is **competitor-first**, the Cloudless shape rather than the Ref shape, because there is a single dominant rival and Aqua's whole strategy points at it.

Table 1 is people complaining about Wispr accuracy. Table 2 is developers and agent users describing the friction Avalon solves. Everything else is four or five bullets.

### Pulls

| Source | Actor | Input |
|---|---|---|
| X — mentions | `scraper_one/x-posts-search` | `query: "\"wispr flow\" OR wisprflow OR @WisprFlow"`, `searchType: "latest"`, `resultsCount: 100`, `timeWindowHours: 48`. Run again with `"top"` — latest caps at 100 and fills up on a busy day. |
| X — the accuracy wedge | same | `wispr (accuracy OR "word error" OR wrong OR garbage OR worse OR "used to be")`. Keep under 100 characters. |
| X — the API wedge | same | `(dictation OR "speech to text") (claude OR cursor OR "coding agent")` |
| X — Japanese | same | `wispr flow lang:ja`, `音声入力 (Wispr OR ディクテーション)`, `文字起こし lang:ja`. **Run these every day — Japan is the majority market.** |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["wispr flow", "wisprflow"]`, `searchPosts: true`, `searchComments: true`, `searchSort: "new"`, `searchTime: "week"`, `maxPostsCount: 50`, `fastMode: true`. Crawl r/macapps, r/productivity, r/LocalLLaMA and Wispr's own subreddit directly — the best complaints are always in the vendor's own community. |
| Hacker News | Algolia search, free, no actor | `wispr`, `dictation`, `speech to text`. Where the developer audience actually is, and where Aqua's benchmark argument lands best. |
| LinkedIn | `harvestapi/linkedin-post-search` | `searchQueries: ["wispr flow", "dictation"]`, `maxPosts: 40`, `postedLimit: "week"`, `sortBy: "date"` |

Fetch with `get-dataset-items`, projecting only the fields you need. Filter with Python, not by reading. Actor reference, prices and gotchas: `skills/SCRAPING_TOOLBOX.md`.

Things that bite (carried over from Cloudless, same subject, same actors):
- The X actor ignores `since:`/`until:`. Use `timeWindowHours` plus the top/latest combination.
- It returns no view or follower counts, so "Reach" is likes / replies / reposts.
- Apify has a monthly usage cap. If everything fails with "Monthly usage hard limit exceeded," the plan needs topping up and the connector has to be reinstalled with a session restart.
- Searching the bare word `aqua` is useless — it returns water brands, Minato Aqua and Aquaman. Use `"aqua voice"`, `withaqua`, `aquavoice.com` and `@finnatsea`.

## Before the first brief — open questions for Finn

1. ~~Is Japan really >50% of the user base?~~ **Confirmed 2026-08-31. Yes.**
2. What is the actual funding number? Crunchbase says $2.75M, Tracxn says unfunded.
3. Current ARR? The public $330K figure is from Sep 2025.
4. Are Apple, Amazon, Notion and Perplexity logo-wall or referenceable customers?
5. Any named Avalon API customers we can cite?
6. Is Android on the roadmap, or is it conceded?
7. Who reads the brief — Finn, Jack, or both?

## Status

- **2026-09-01** — email built and queued as a Resend broadcast **draft**, id
  `4f249bcc-08ea-4b5b-88ac-d4bad4e7ba2f`, to the `aquavoice` segment (finn, jack, mark and
  sam @aquavoice.com). Subject "Wispr Flow daily brief, Sep 1", from
  `research415 <reports@415brand.com>`. Status confirmed `draft`, `sent_at` null, and the
  stored HTML is byte-identical to `reports/09-01-2026.email.html`. **Nobody has sent it.**
  A human sends, per `clients/RESEND.md`.
  The email is generated from the web report, not written twice: `brief_to_json.mjs` turns
  `webapp/app/samples/briefs/aqua-daily.ts` into `brief.json`, then `build_email.py` renders
  the HTML and plain-text copies. Re-run both after any edit to the brief or the two drift.
- **2026-09-01** — first brief written, at `/analysis/aquavoice/daily-09-01-2026`
  (data in `webapp/app/samples/briefs/aqua-daily.ts`). Built deeper than a normal daily at the
  client's request: full Wispr ad teardown, Japan section, marketing and search. All pulls ran
  (X English and Japanese, Reddit, Meta Ad Library US and JP).

  **Seen but not sent**, for tomorrow if the threads grow: @cyrusnaficy ("is it just me or has
  WisprFlow genuinely been bugging recently", zero replies), @gyan_w3b ("transcription has gotten
  way worse in the past month"), @FrancisSicuro (wants a Wispr alternative that does not need
  internet — ignore rule 1, cloud-only, do not pitch), @skun_uranai (Japanese, "Aqua Voice's
  dictation is mediocre", 10 likes, one reply, unanswered by us), @genmaisan_ai (Japanese, dictation
  not saved to the record, 9 likes), @333mic999 (Japanese, Aqua subscription lapsed, now on Windows
  native), @blacklist_ryu (Japanese, cancelled temporarily to move the billing date).

  **Standing questions this brief raised.** Does Avalon handle Japanese and English in one sentence?
  It decides Japan. Does Aqua ship a Shortcuts Dictate action? Mattcassinelli's thread was the
  highest-engagement dictation post in the pull and Spokenly was named in it, we were not.

- **2026-08-31** — call held with the client. Japan majority confirmed. Cloudless conflict reviewed
  and cleared by Matt. Pricing comparison settled ($10 vs $15 monthly). Client says they are about to
  start spending on **ads and creator content**, so ad and creator intelligence on Wispr is now a
  standing section, not a one-off.
- **2026-08-31** — folder created. `AQUA_VOICE.md` and `COMPETITORS.md` written from public sources only. Nothing sent, no contact made, no Resend segment. Sourced originally from `clients/SAMPLE_OUTREACH_TARGETS.md` row 1.
