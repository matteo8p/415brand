---
slug: aquavoice
client: Aqua Voice
subject: Wispr Flow
readers: the Aqua Voice team
cadence: daily
status: live
site: https://aquavoice.com
market: United States and Japan. Japan is the majority of users, so Japanese posts are first-class reply targets, quoted as written with a translation in brackets.
resend_segment: 05fbf8a7-400f-4c4b-b5c4-e192b7ec5185
reply_to: matt@415brand.com
---

# Aqua Voice

## What they sell

Aqua Voice is a cloud, system-wide dictation app for Mac, Windows and iOS built on its own speech model, Avalon, and sold on published benchmarked accuracy for technical speech: 97.3% on AISpeak and a 6.24% word error rate that ranked first among proprietary models on the OpenASR leaderboard. The Avalon API at $0.39 an hour is a second business. $10 a month against Wispr's $15. YC W24, about five people, roughly $2.75M raised. Full background in `research/aquavoice.md`. The competitive field, with Wispr Flow as the only competitor that matters, in `research/competitors.md`.

## Who reads it and what they want

- **Finn Brown**, co-founder and CEO, `@finnatsea`. Primary reader.
- **Jack McIntire**, co-founder and CTO. Wrote the Avalon model card. The reader for anything benchmark-shaped or API-shaped.
- The Resend segment also holds Mark and Sam at aquavoice.com.

Aqua is running a benchmark-led conquest of Wispr Flow, and the wedge already exists. Wispr has never published an accuracy number, its users have been complaining about accuracy since July, and Wispr's own Canto announcement concedes a roughly 30% error rate. The pitch to Finn is not "we will find you leads". It is "the argument you are already making is winnable right now, and it stops being winnable the day Canto ships."

In priority order:

1. People reporting Wispr accuracy problems. Aqua's whole argument is pre-written for them. A reply costs Finn one sentence and a benchmark link.
2. Developers and AI-agent users describing dictation friction: dictating code, model names, CLI commands, jargon. Two pitches in one post, the app and the Avalon API.
3. Japanese-language mentions. Confirmed by Finn on the Aug 31 call: Japan is the majority of Aqua's user base, driven by programmers avoiding Japanese keyboard input while working with AI agents. There is a `/ja` page.
4. Anything Wispr ships that blunts the benchmark argument: Canto shipping, a published WER, a price cut, a free-tier change, the notetaker reaching Windows.
5. Ad and creator intelligence on Wispr. Standing since the Aug 31 call, because Aqua is about to start spending on ads and creator content.

## Report shape

**Daily.** Title "Wispr Flow daily brief". Subtitle "For the Aqua Voice team, Month D, YYYY". Competitor-first, the Cloudless shape rather than the lead-first shape, because a single dominant rival exists and Aqua's whole strategy points at it. As shipped on Sept 1:

- "Three things to do this week", a `moves` block, collapsed. Outreach advice is decided. Advice on the free tier, pricing or roadmap is softened ("Consider being more generous with your free tier") because those are the client's decisions and we do not know their unit economics.
1. Japan. Findings on what Japanese users said, who is advertising there, who switched and why, with a why-it-matters that ends on the move.
2. Wispr's ads and creators, and what to nick. A swipe table "Send these five to whoever runs your ads" (five ads, hook word for word, evidence, what to tell them), then "Go after these creators, and skip the big ones" (five creators ranked by engagement rate, including the ones not to copy), then a takeaway.
3. People to reply to today. Columns Where | Date | Post | Reach | What to say. Four to five rows, accuracy complaints first, then developer and agent friction.
4. What changed. Four or five bullets.

The Sept 1 brief was built deeper than a normal daily at the client's request (full Wispr ad teardown, Japan section, marketing and search) and carried a sources section, which the shared rules have since dropped. A standard day is the three moves, Japan, the reply table, the swipe file, what changed.

Table sizes three to five. Five good rows Finn can work beat forty.

**Pricing rule.** Compare $10 against Wispr's $15 monthly, and $8 against $12 annual. Never mix the two in one row (Matt, Aug 31).

**Weekly.** None yet. Cadence is daily.

## Do not pitch on

- Android users. No app, no announced plan, and Wispr gives Android away unlimited.
- Linux users. No build.
- Anyone wanting offline, on-device or local processing. Avalon is cloud-only and always will be.
- HIPAA and regulated-health requests. No BAA.
- Enterprise procurement. Wispr has SOC 2 Type I and Aqua has nothing comparable published.
- Price-only complaints about Wispr. Aqua is $10, not free. Those are leads for Cloudless and Handy.
- Free-tier shoppers. Aqua's free tier is 1,000 lifetime words, the least generous in the category.
- Cloudless mentions, ever. See Conflicts.

Post-level filter in `IGNORE_RULES.md`, thirteen proposed rules, none confirmed by Finn.

## Pulls

| Source | Tool | Input |
|---|---|---|
| X, mentions | `scraper_one/x-posts-search` | `query: "\"wispr flow\" OR wisprflow OR @WisprFlow"`, `searchType: "latest"`, `resultsCount: 100`, `timeWindowHours: 48`, then `"top"`. |
| X, the accuracy wedge | same | `wispr (accuracy OR "word error" OR wrong OR garbage OR worse OR "used to be")`. Under 100 characters. |
| X, the API wedge | same | `(dictation OR "speech to text") (claude OR cursor OR "coding agent")`. |
| X, Japanese | same | `wispr flow lang:ja`, `音声入力 (Wispr OR ディクテーション)`, `文字起こし lang:ja`, and Aqua's own name in Japanese contexts. Run every day. |
| Reddit | `harshmaur/reddit-scraper` | `searchTerms: ["wispr flow", "wisprflow"]`, posts and comments, `searchSort: "new"`, `searchTime: "week"`, `maxPostsCount: 50`, `fastMode: true`. Crawl r/macapps, r/productivity, r/LocalLLaMA and r/WisprFlow directly. |
| Hacker News | Algolia, free | `wispr`, `dictation`, `speech to text`. Where the developer audience is and where the benchmark argument lands best. |
| LinkedIn | `harvestapi/linkedin-post-search` | `searchQueries: ["wispr flow", "dictation"]`, `maxPosts: 40`, `postedLimit: "week"`, `sortBy: "date"`. |
| Meta ads, US | `apify/facebook-ads-scraper` | Wispr page id `110864474787474`, `resultsLimit` above the page total, twice, active and all. Rank the top 30 by impressions for the swipe file. |
| Meta ads, Japan | Meta Ad Library, country JP | Keyword search "Wispr Flow" in Japan. On Sept 1 it returned about 12 ads, none Wispr's, seven superwhisper's. Also search Aqua Voice. |
| TikTok | `clockworks/tiktok-scraper` | `searchQueries: ["wispr flow"]`. Rank creators by likes over plays, not raw plays. |
| App Store | iTunes lookup, free | Wispr `id=6497229487`. Aqua's own listing for rating count. |
| Japanese dev blogs | Firecrawl search | Zenn, ITmedia, note.com for Aqua Voice and Wispr Flow reviews and category guides. |

**Name collisions.** The bare word `aqua` returns water brands, Minato Aqua and Aquaman. Use `"aqua voice"`, `withaqua`, `aquavoice.com`, `@finnatsea`. `flow` alone pulls perfume shops. A Japanese collision list is still needed.

**Things that bite.** The X actor ignores `since:` and `until:` and returns no view or follower counts. Apify has a monthly cap. Reddit blocks Firecrawl and plain curl, so engagement numbers come from the Apify pull or are left out.

## Email

- Segment **aquavoice**, id `05fbf8a7-400f-4c4b-b5c4-e192b7ec5185`. Finn, Jack, Mark and Sam at aquavoice.com.
- From `research415 <reports@415brand.com>`. Reply-to `matt@415brand.com`.
- Subject "Wispr Flow daily brief, Mon D". Preview text is the counts and the headline: "7 people said Wispr got worse on Aug 31. superwhisper started advertising in Japan. 5 ads and 5 creators worth copying."
- Sign-off used on Sept 1: "Put together by research415 for Aqua Voice. Every claim links back to where it came from. Reply to this email with anything you want dug into further and it'll be in tomorrow's brief."
- Broadcast draft only. Confirm `draft` and `sent_at` null. A human sends.

## Conflicts and confidentiality

**Cloudless** (`clients/cloudless/`) is a paying client in this exact category with this exact competitor. Aqua and Cloudless are direct competitors and the same Wispr complaint thread is a lead for both on the same morning. Matt reviewed this on 2026-08-31 and cleared it. The operating rules:

1. Never let research cross. Nothing from `clients/cloudless/` (Tim's ignore rules, his preferences, his benchmark work, his lead lists) appears in an Aqua report, and nothing from Aqua goes the other way. The Wispr research itself is public-source and belongs to neither.
2. One client's reply is never another client's lead. A shared Wispr complaint can go to both. Tim's reply is never surfaced to Finn, and Finn's never to Tim.
3. Watch for the direct collision. Aqua has no `/vs/cloudless` page and Cloudless has no Aqua page today. If either publishes one, stop and escalate.

## Open questions for the client

1. Does Avalon handle Japanese and English in one sentence? It decides Japan.
2. Does Aqua ship a Shortcuts Dictate action? The biggest dictation thread of the week named Spokenly, not Aqua.
3. The funding number: Crunchbase says $2.75M, Tracxn says unfunded.
4. Current ARR. The public $330K figure is from Sept 2025.
5. Are Apple, Amazon, Notion and Perplexity logo-wall or referenceable customers?
6. Any named Avalon API customers we can cite?
7. Is Android on the roadmap, or conceded?
8. Who reads the brief, Finn, Jack or both? The shape changes with the answer.
9. Which of the thirteen proposed rules in `IGNORE_RULES.md` stay?
