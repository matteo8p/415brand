# How to find leads on social media

This is the skill for turning public social posts into a list of named people a client can contact today. Read it fully before starting. The tool-by-tool reference (actor names, inputs, prices, gotchas) is `skills/SCRAPING_TOOLBOX.md`. For working out who is already paying a competitor, read `skills/FIND_CUSTOMERS_OF_COMPETITORS.md` — the two skills share the same pulls and are usually run in one pass.

A lead here is **not** a company name on a list. A lead is one person, one public post, one reason. If you cannot link to the post that proves the person wants what the client sells, it is not a lead and it does not go in the table.

The daily brief already does half of this (`skills/DAILY_REPORT_GUIDANCE.md`, section 1 and 2). This skill is the same work pushed one step further: from "here is a post to reply to" to "here is who wrote it, where they work, and why they are worth an email."

---

## 1. Before you start

From `clients/<client>/README.md` and the client summary, write down:

- **What the client sells and to whom.** One sentence. Everything below is filtered against it.
- **Competitor names and every way people spell them.** `wispr flow`, `wisprflow`, `@WisprFlow`, `wispr`. Misspellings matter; people complaining type fast.
- **The category words.** What people call the problem when they don't know any vendor's name: "dictation app", "speech to text API", "transcription".
- **The disqualifiers.** Competitors' own employees, the client's existing customers, recruiters, bots, giveaway accounts, resellers.
- **The window.** Daily brief: 48 hours. Weekly: 7 days. First run for a new client: 30 days, then keep a seen-list.

## 2. The six intent types, ranked

Pull everything, then sort each post into one of these. The rank is the priority order for outreach; it is also roughly the order of how fast the window closes.

| # | Intent | What it looks like | Window |
|---|---|---|---|
| 1 | **Asking for a recommendation** | "anyone know a tool that…", "what are people using for X in 2026?" | Hours. First good answer wins. |
| 2 | **Complaining about a named competitor** | "wispr lost a 6-minute dictation again" | 1–2 days |
| 3 | **Announcing a switch or an evaluation** | "moving off Deepgram", "testing three STT APIs this week" | 2–5 days |
| 4 | **Describing the pain with no vendor named** | "spent all morning cleaning up transcripts" | A week |
| 5 | **Engaging with a competitor's content** | commented on / quoted / reposted a competitor's launch post | Nurture. See the competitor-customers skill. |
| 6 | **Hiring or building for the need** | job post asking for experience with the category; a repo that imports a competitor's SDK | Weeks |

Two rules that matter more than the ranking:

- **Zero replies beats high reach.** A fresh complaint with 0 replies is worth more than a 400-upvote thread with 60 comments. Being the only answer is the whole advantage.
- **Specific beats loud.** "The iPhone keyboard drops the last word" is a lead. "AI is overhyped" is not.

## 3. Building queries

Write queries at phrase level, never at single-keyword level. A single keyword returns a day of noise; a phrase returns five real leads.

Build three query families per client:

1. **Competitor + pain.** `"wispr" (slow OR broken OR "lost my" OR cancel OR refund OR "switching from")`
2. **Category + intent.** `("speech to text" OR "transcription api") (recommend OR alternative OR "looking for" OR "which one")`
3. **Competitor alternatives.** `"deepgram alternative"`, `"instead of deepgram"`, `"moving off deepgram"`, `"deepgram vs"`.

Per-platform syntax:

- **X.** Search operators work in the actor's `searchQuery`: `OR`, `-word`, `"exact phrase"`, `min_faves:`, `lang:`. Run every query twice, `searchType: "latest"` and `"top"` — latest caps at 100 and fills up on a busy day, top catches the high-reach posts latest misses. Note: `since:`/`until:` are ignored by the actor we use; use `timeWindowHours`.
- **Reddit.** Search is weak. Two passes: keyword search across all of Reddit (`searchPosts` and `searchComments` both true, `searchSort: "new"`), plus a direct crawl of the 5–15 subreddits where the category actually lives, including **the competitor's own subreddit** — the best complaints are always in the vendor's own community.
- **LinkedIn.** People do not complain on LinkedIn; they announce. Query for launches, migrations, hiring, and "we chose X". Use `authorKeywords` and `authorsCompanies` to filter to the job titles that matter.
- **Hacker News.** Algolia search (free, no actor needed) over the competitor name and the category. `Ask HN` threads are query family 1 in concentrated form.
- **Review sites.** Not a query — a scrape. See the competitor-customers skill; a 2-star review is a lead with a job title attached.

## 4. Pulling

Run every actor at once with `waitSecs: 0`, then poll with `get-actor-run`. Fetch with `get-dataset-items` projecting only the fields you need — these datasets get large and reading everything wastes the context you need for judgement. Filter with Python, not by reading.

Actor names, exact inputs, prices and per-actor gotchas: `skills/SCRAPING_TOOLBOX.md`. The short version for a lead pull:

| Source | Actor | Gets you |
|---|---|---|
| X — posts | `scraper_one/x-posts-search` | Mentions and complaints |
| X — who engaged | `xquik/x-tweet-scraper` (replies/quotes/retweeters) | The people around a post |
| Reddit | `harshmaur/reddit-scraper` | Posts and comments, with subreddit and author |
| LinkedIn — posts | `harvestapi/linkedin-post-search` | Posts, and with `scrapeReactions`/`scrapeComments`, everyone who engaged **with their job title and company** |
| LinkedIn — person | `harvestapi/linkedin-profile-scraper` | Title, company, work history, optional email |
| Reviews | `zen-studio/software-review-scraper` | Reviewers with company size, industry, role |

## 5. Killing the noise

Do this before you score anything. On a typical daily pull, 60–80% of raw hits are discarded here.

- **Off-topic keyword collisions.** Reddit especially. Drop anything where the competitor name does not appear in the title or body.
- **Astroturf.** Watch for clusters: N near-identical posts, from N accounts created the same week, across N subreddits, all in the same 48 hours. (Willow Voice did exactly this on Aug 24–26, 2026 — 11 templated posts, 11 new accounts, 11 subreddits.) Never list these as real mentions; call the pattern out instead.
- **Bots and deal spam.** Coupon accounts, "check my bio", engagement pods.
- **The competitor's own staff.** Check the bio before you check the post.
- **The client's own customers.** Cross-check against the client's list if they gave you one.
- **Already-seen posts.** Keep `clients/<client>/leads/seen.jsonl` keyed on post URL. Never surface the same post twice.

## 6. Scoring

Four fields, in this order. A lead needs all four or it drops a tier.

1. **Intent** (from section 2) — what they said they want.
2. **Fit** — do they look like the client's buyer? Title, company, size, region, language.
3. **Reachability** — is there a public way to contact them? A reply, a DM, a profile link, a work email.
4. **Freshness** — hours old, and how many people have already answered.

| Tier | Rule | What the client does |
|---|---|---|
| **Hot** | Intent 1–3, fit confirmed, zero or few replies, under 48h | Reply today, in the thread |
| **Warm** | Intent 1–4, fit likely, thread already has answers | Reply or DM this week |
| **Cold** | Intent 5–6, or fit unclear | Nurture list, no direct pitch |
| **Skip** | Disqualifier, astroturf, duplicate, or no evidence of intent | Not in the report |

Target shape on a healthy daily pull: roughly 15–25% Hot. If everything is Hot, the scoring is wrong.

## 7. Person → company

A username is not a lead. Resolve it:

1. **The bio.** X bios and Reddit post history usually say enough. LinkedIn gives you title + company for free on any reaction or comment.
2. **The link.** Personal site or company domain in the profile.
3. **Cross-platform match.** Same display name and photo on X and LinkedIn is good enough evidence when both are public — say so in the row rather than asserting it.
4. **Enrich only after the ICP filter passes.** Enrichment costs money per record; the filter is free. Never enrich a whole dataset.

If you cannot name the company, that is fine for a consumer product — say "individual, no company signal" — and fatal for a B2B one.

## 8. Output

For a daily brief, leads go in the tables described in `skills/DAILY_REPORT_GUIDANCE.md` — same five columns, same rules.

For a standalone lead sheet, write `clients/<client>/leads/<MM-DD-YYYY>.md` with one row per lead:

| Who | Where they work | The post | Intent | Tier | What to say |
|---|---|---|---|---|---|

- **Who.** Name and handle, linked to the profile. Follower count if the tool returns one.
- **Where they work.** Title and company, or "unknown — individual".
- **The post.** Their own words, trimmed to the part that matters, linked to the original. Keep typos and profanity. Translate in brackets if it is not in English; note the language.
- **Intent.** One of the six, with the date.
- **Tier.** Hot / Warm / Cold.
- **What to say.** One or two sentences. What the post is really asking, then the angle. Lean on whichever part of the client's pitch matches. Say when *not* to reply, when to reply in another language, and when a video beats text. Never claim a product detail you have not confirmed — write "if <client> does X, say so."

Append every row to `seen.jsonl` when you are done.

## 9. Guardrails

These are not optional and they are the reason this work stays sellable.

- **Public posts only.** No logged-in scraping, no cookie injection, no bypassing a block or a login wall. Every actor listed in the toolbox is a no-cookie actor for this reason.
- **Evidence or nothing.** Every claim in a row links to the post it came from. No inferred employers stated as fact — write "bio says", "profile lists".
- **Minimise.** Collect the fields you will actually put in the report. Do not hoard connection graphs and post histories because the actor offers them; under GDPR that is the most common failure, and it costs money per row besides.
- **Contact people in the channel they posted in.** A public reply to a public complaint is normal. A cold email to a personal address scraped off a Reddit bio is not.
- **If the client emails them:** real physical address, working unsubscribe, honest subject line, and a verified address (CAN-SPAM, plus whatever applies where the recipient is). We draft; a human sends (`clients/RESEND.md`).
- **Never present a guess as a fact.** "Bio says he works at Acme" is a row. "Acme is a Wispr customer" needs the evidence tiers in `skills/FIND_CUSTOMERS_OF_COMPETITORS.md`.
