---
name: find-leads
description: Turn public social posts into named people a client can contact today. The six intent types and their windows, how to build queries, how to kill noise and astroturf, the Hot Warm Cold Skip scoring, resolving a handle to a person and company, and the lead-sheet format. Used inside every daily brief and for standalone lead sheets under clients/<client>/leads/.
---

# Finding leads on social media

A lead is one person, one public post, one reason. If you cannot link to the post that proves the person wants what the client sells, it is not a lead and it does not go in a table. A company name on a list is not a lead.

The daily brief does this every day: "here is a post to reply to, and what to say". A lead sheet pushes it one step further: "here is who wrote it, where they work, and why they are worth an email". For working out who already pays a competitor, read `.claude/skills/competitor-customers/SKILL.md`. The two share the same pulls and usually run in one pass.

## 1. Before you start

From the client's `CLIENT.md` and `research/` write down:

- **What the client sells and to whom.** One sentence. Everything is filtered against it.
- **Every spelling of every competitor.** `wispr flow`, `wisprflow`, `@WisprFlow`, `wispr`. People complaining type fast.
- **The category words.** What people call the problem when they know no vendor: "dictation app", "speech to text API", "AI coworker in Slack".
- **The disqualifiers.** Competitors' staff, the client's existing customers, recruiters, bots, giveaway accounts, resellers, and everything in `IGNORE_RULES.md`.
- **The market.** Language and country from CLIENT.md. A reply target outside the market is intel, not a row.
- **The window.** Daily: 48 hours. Weekly: 7 days. First run for a new client: 30 days, then keep a seen list.

## 2. The six intent types, ranked

Sort every surviving post into one. The rank is the outreach priority and roughly the order in which the window closes.

| # | Intent | What it looks like | Window |
|---|---|---|---|
| 1 | Asking for a recommendation | "anyone know a tool that...", "what are people using for X in 2026?" | Hours. The first good answer wins. |
| 2 | Complaining about a named competitor | "wispr lost a 6-minute dictation again" | One to two days |
| 3 | Announcing a switch or an evaluation | "moving off Deepgram", "testing three STT APIs this week" | Two to five days |
| 4 | Describing the pain with no vendor named | "spent all morning cleaning up transcripts" | A week |
| 5 | Engaging with a competitor's content | commented on, quoted or reposted a competitor's launch | Nurture. See competitor-customers. |
| 6 | Hiring or building for the need | a job ad asking for experience with the category, a repo importing a competitor's SDK | Weeks |

Two rules that matter more than the ranking:

- **Zero replies beats high reach.** A fresh complaint with no replies is worth more than a 400-upvote thread with 60 comments. Being the only answer is the whole advantage.
- **Specific beats loud.** "The iPhone keyboard drops the last word" is a lead. "AI is overhyped" is not.

## 3. Building queries

Write queries at phrase level, never single keywords. A single keyword returns a day of noise, a phrase returns five real leads. Three families per client:

1. **Competitor plus pain.** `"wispr" (slow OR broken OR "lost my" OR cancel OR refund OR "switching from")`
2. **Category plus intent.** `("speech to text" OR "transcription api") (recommend OR alternative OR "looking for" OR "which one")`
3. **Competitor alternatives.** `"deepgram alternative"`, `"instead of deepgram"`, `"moving off deepgram"`, `"deepgram vs"`

Per platform, the syntax and traps are in `research-pulls`. The short version: X takes operators but caps the query at 100 characters and ignores date operators. Reddit search is weak, crawl the subreddits and the competitor's own subreddit directly. LinkedIn people announce rather than complain, so query for launches, migrations and "we chose X" and filter engagers by title. Hacker News is free and is where developer buyers ask. Review sites are a scrape, not a query, and a two-star review is a lead with a job title attached.

Never search a bare brand word that is also an English word or a common name (ref, goody, snappy, viktor, aqua, opentag). Use the domain, the handle, the founder's name, or the client's coined phrase. Each client's CLIENT.md has its list.

## 4. Killing the noise

Do this before scoring anything. On a typical pull 60 to 80% of raw hits go here.

- **Name collisions.** The competitor's name is not in the title or body, or it is a different thing with the same name. Gone.
- **Astroturf.** A cluster: N near-identical posts from N accounts created the same week across N subreddits inside 48 hours. Willow Voice did exactly this on Aug 24 to 26, 2026: eleven templated "I started researching..." posts, eleven new accounts, eleven subreddits. Never list these as mentions. Call the pattern out once in the week bullets.
- **Launch amplification.** About ten accounts posting near-identical copy about a launch inside six hours (AgentConnect, Aug 26, 2026), or a repost count far above the like count on a creator post. The launch is real and worth a bullet. The amplifier posts are not mentions and their numbers are not evidence.
- **Bots and deal spam.** Coupon accounts, subscription resale, "check my bio", engagement pods, directory bots that index every new product.
- **Affiliates.** Anything carrying a referral code or `#affiliate`. Replying argues with someone's commission.
- **The competitor's own staff.** Bio first, post second.
- **The client's own customers.** Cross-check against any list the client gave.
- **Business-school threads.** Founders analysing the competitor's growth or landing page in r/SaaS or on LinkedIn. Nobody there installs anything.
- **Already seen.** `clients/<client>/leads/seen.jsonl` keyed on post URL, and yesterday's report. Never surface the same post twice unless the thread grew.
- **Wrong market.** Language or country outside CLIENT.md's market. Keep as evidence for a bullet, not as a row.

## 5. Scoring

Four fields, in order. A lead needs all four or drops a tier.

1. **Intent**, from section 2.
2. **Fit.** Do they look like the client's buyer? Title, company, size, region, language.
3. **Reachability.** A public way to contact them: a reply, a DM, a profile link, a work email.
4. **Freshness.** Hours old, and how many people have already answered.

| Tier | Rule | What the client does |
|---|---|---|
| Hot | Intent 1 to 3, fit confirmed, zero or few replies, under 48 hours | Reply today, in the thread |
| Warm | Intent 1 to 4, fit likely, thread already has answers | Reply or DM this week |
| Cold | Intent 5 or 6, or fit unclear | Nurture. No direct pitch. |
| Skip | Disqualifier, astroturf, duplicate, or no evidence of intent | Not in the report |

A healthy daily pull runs roughly 15 to 25% Hot. If everything is Hot, the scoring is wrong.

For a B2B client, a lead has to be a real company with traction, not a named person with a side project. Solo weekend projects and freelance demos go to "Seen but not sent" with that reason, and get a reply only if they ship to a paying customer.

## 6. Person to company

A username is not a lead. Resolve it:

1. **The bio.** X bios and Reddit post history usually say enough. LinkedIn gives title and company for free on any reaction or comment.
2. **The link.** A personal site or a company domain in the profile.
3. **Cross-platform match.** The same display name and photo on X and LinkedIn is enough when both are public. Say so in the row rather than asserting it.
4. **Enrich only after the ICP filter passes.** Enrichment costs money per record. The filter is free.

If the company cannot be named, that is fine for a consumer product ("individual, no company signal") and fatal for a B2B one.

## 7. Output

In a daily, leads go in the tables the daily skill describes, with the same five cells and the same rules.

For a standalone lead sheet, write `clients/<client>/leads/<MM-DD-YYYY>.md`, one row per lead:

| Who | Where they work | The post | Intent | Tier | What to say |
|---|---|---|---|---|---|

- **Who.** Name and handle, linked to the profile. Follower count if the tool returned one.
- **Where they work.** Title and company, or "unknown, individual".
- **The post.** Their own words, trimmed, linked. Typos and profanity kept. Translated in brackets if not in English.
- **Intent.** One of the six, with the date.
- **Tier.** Hot, Warm or Cold.
- **What to say.** One or two sentences. What the post is really asking, then the angle. Lean on whichever part of the client's pitch matches. Say when not to reply, when to reply in another language, and when a video beats text. Never claim a product detail that has not been confirmed: "if [client] does X, say so."

Five good rows the client can work beat forty. Send the best five and hold the rest for the next report. Append every row sent to `seen.jsonl`.

## 8. Guardrails

- Public posts only. No logged-in scraping, no cookie injection, no bypassing a login wall.
- Evidence or nothing. Every claim in a row links to the post it came from. "Bio says he works at Acme" is a row. "Acme is a Wispr customer" needs the evidence tiers in competitor-customers.
- Collect the fields that go in the report and no more.
- Contact people in the channel they posted in. A public reply to a public complaint is normal. A cold email to a personal address scraped off a Reddit bio is not.
- If the client emails them: a real physical address, a working unsubscribe, an honest subject line, a verified address. We draft. A human sends.
