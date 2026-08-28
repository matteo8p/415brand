# Experiential Labs (experientiallabs.ai)

> **Status: prospect, not a signed client.** Nothing here has been sent. Neither founder has been contacted. No Resend segment, no broadcast, until they say yes.

Experiential Labs sells a free open source AI gateway and charges for the intelligence layer on top of it, the end state of which is a small model the customer owns, trained on their own traffic. YC Summer 2026, two people, San Francisco. Background in `EXPERIENTIAL_LABS.md`. Competitive landscape in `COMPETITORS.md`.

Readers are both founders:
- **Kion Fallah**, CEO. [@okfallah](https://x.com/okfallah). Research and the training side.
- **Silen Naihin**, CTO. [@silennai](https://x.com/silennai), HN user `SilenN`. Ships the launches and answers the threads.
- Shared inbox: founders@xplabs.ai

## Timing

They are having their biggest visibility moment right now. The Show HN **"We built open OpenRouter that turns usage into a better model"** went up 27 Aug at 21:18 UTC and is at **157 points with 26 comments**. Their July Show HN did 71 points. GitHub is at 572 stars, two months old.

A launch spike is the best and worst moment to pitch a monitoring service. Best, because the leads are real and time-boxed. Worst, because they are busy. The honest opening is that a launch surfaces more people than two founders can work by hand, and the ones they miss this week do not come back.

## What the founders would care about

Both fronts of the business produce a different kind of lead, and the brief should be built around that split rather than around one competitor.

1. **People complaining about OpenRouter cost, quality or quantization.** The gateway's whole argument is 0% markup and full-precision routing. OpenRouter charges 5.5% on credits and users complain about silent quantization. This is the highest-volume, lowest-friction lead type, and it converts with a base-URL swap.
2. **People with a repeating, expensive workload.** Anyone posting about a large inference bill on a task that repeats: support triage, claims, classification, computer use, document extraction. That is the custom-model pitch and it is where the money is.
3. **LiteLLM operators.** Self-hosting already, so no philosophical objection to running a gateway. **[unverified]** LiteLLM had a March 2026 supply-chain incident; if a prospect raises it themselves, that is an opening. Do not lead with it, and do not assert it as fact in anything sent to a client.
4. **People asking the caching question.** It is the sharpest objection to their product and it came up three times on their own launch thread. Surfacing every instance is genuinely useful to them, even though it is uncomfortable, because it tells them what to publish next.

## Do not pitch on

Two people, no disclosed funding beyond YC, in a batch. Do not send volume. Five good rows they can actually work beats forty, same as Sprag.

## Workflow (daily)

Follow `skills/DAILY_REPORT_GUIDANCE.md` for format and `skills/FIND_LEADS.md` for what counts as a lead. Lead-first, like OpenTag and Ref, not competitor-first like Cloudless. There is **no single competitor**: the brief runs on two fronts, gateway and custom models.

**No ads section.** Nobody in this market runs paid social. The surfaces that matter are Hacker News, GitHub, X and r/openrouter.

### The name problem

**Never search the bare string `Experiential Labs`.** It is a term of art in education, and the Reddit pull came back almost entirely as Indian school-admissions content ("experiential labs" as a school facility). Same class of problem as OpenTag. Use instead:

- `experientiallabs`, `xplabs.ai`, `api.experientiallabs.ai`
- `@explabsai`, `@okfallah`, `@silennai`, HN user `SilenN`
- `"open OpenRouter"`, their own launch phrasing, and the cleanest way to track whether it spreads

### Pulls

| Source | Tool | Input |
|---|---|---|
| Hacker News | Algolia API, `hn.algolia.com/api/v1/search_by_date` | **The most important surface for this client.** Query `experientiallabs`, `openrouter`, `litellm`, `ai gateway`. Use https. Plain queries fuzzy-match, so read the hits rather than trusting rank. Pull the full thread with `/api/v1/items/<id>` to get every comment. |
| X, competitors | Apify `scraper_one/x-posts-search` | `openrouter OR litellm OR portkey OR "ai gateway" OR "model router"`, `latest`, 48 hours. Query cap is **100 characters**. |
| X, cost pain | same | `"inference bill" OR "openai bill" OR "token costs" expensive` |
| Reddit | Apify `harshmaur/reddit-scraper` | `["openrouter", "litellm", "openpipe"]`. **Watch r/openrouter**, the competitor's own subreddit and a live complaint feed. Never search the company name. |
| GitHub | REST API | Stars and release cadence on `experientiallabs/experiential`; the same on `BerriAI/litellm` for comparison. Per `skills/FIND_CUSTOMERS_OF_COMPETITORS.md`, code search for `openrouter.ai/api/v1` and `OPENROUTER_API_KEY` in public repos, then read commit history to turn a repo into a named engineer. |

### Things that bite

- Reddit on the company name is pure noise. Product names only.
- The gateway comparison sites (truefoundry, requesty, respan, portkey, qveris, api7) are all vendor-published SEO. Useful for facts, worthless for judgement. Attribute them as vendor sources.
- Third-party claims about acquisitions and security incidents need marking **[unverified]** unless confirmed at the primary source. Several important facts in `COMPETITORS.md` rest on one vendor blog.
- Chinese and Japanese language posts are a meaningful share of gateway discussion. Translate in brackets, as the Cloudless briefs do.

## What the 28 Aug research run found (for continuity)

- **The Show HN is live and at 157 points.** [news.ycombinator.com/item?id=49471407](https://news.ycombinator.com/item?id=49471407). Read every comment before writing the first report.
- **The caching objection is their open wound.** Raised by `Areibman`, `akshay_akula` and `purplecats` on the launch thread. `cameronh90` pushed back on the answer. No published benchmark exists.
- **They confirmed a Python to Rust rewrite** on the thread, and the commit "Delete the python gateway data plane" landed 26 Aug.
- **They plan continual RL via Tinker** (Thinking Machines), per the CEO on HN. Partner, not competitor.
- **Someone asked their business model in public** and a third party answered it, not them. That is a positioning gap worth telling them about for free.
- Both adjacent markets are consolidating: Portkey to Palo Alto, Helicone to Mintlify, OpenPipe to CoreWeave, Predibase to Rubrik. Details and confidence levels in `COMPETITORS.md`.
- Best free advice to open with: they have **no comparison page for LiteLLM**, which is the competitor they were asked about within three hours of launching. Ref had the same gap with Traycer.

## Reports

| Date | File | Competitor | Notes |
|---|---|---|---|
| Aug 28, 2026 | `reports/8-28-2026.html` | OpenRouter | Full weekly, per `skills/WEEKLY_REPORT_GUIDANCE.md`. Source data in `webapp/app/samples/briefs/openrouter.ts`, rendered at `/samples/openrouter`. 8,600 words, 213 sourced claims. |

To regenerate the HTML: run `pnpm dev` in `webapp/`, then dump the rendered DOM (Chrome headless `--dump-dom --virtual-time-budget=25000 --window-size=1100,3000`), extract the `<div class="analysis">` block and prepend `<title>` plus the contents of `webapp/app/samples/analysis.css`. Charts use recharts inside a `ResponsiveContainer`, so a plain `curl` of the dev server returns the page without them.

**Still a prospect.** No Resend segment, no broadcast. The Aug 28 report is a sample to show them, not a send.
