---
slug: experientiallabs
client: Experiential Labs
subject: OpenRouter
readers: Kion and Silen at Experiential Labs
cadence: daily
status: prospect
site: https://experientiallabs.ai
market: United States, English, with Chinese and Japanese posts translated
resend_segment: none
reply_to: matt@415brand.com
---

# Experiential Labs (experientiallabs.ai)

> **Status: prospect, not a signed client.** Nothing here has been sent. Neither founder has been contacted. No Resend segment, no broadcast, until they say yes.

## What they sell

A free open-source AI gateway (0% markup, full-precision routing) and a paid intelligence layer on top of it. The end state is a small model the customer owns, trained on their own traffic. YC Summer 2026, two people, San Francisco. Background in `research/experientiallabs.md`. Competitive landscape in `research/competitors.md`.

## Who reads it and what they want

Both founders:

- **Kion Fallah**, CEO. [@okfallah](https://x.com/okfallah). Research and the training side.
- **Silen Naihin**, CTO. [@silennai](https://x.com/silennai), HN user `SilenN`. Ships the launches and answers the threads.
- Shared inbox: founders@xplabs.ai

Their Show HN "We built open OpenRouter that turns usage into a better model" went up Aug 27 and reached 157 points with 26 comments. A launch spike is the best and worst moment to pitch a monitoring service. The honest opening is that a launch surfaces more people than two founders can work by hand, and the ones they miss this week do not come back.

Both fronts of the business produce a different kind of lead. What the brief must deliver, in priority order:

1. **People complaining about OpenRouter cost, quality or quantization.** OpenRouter charges 5.5% on credits and users complain about silent quantization. Highest volume, lowest friction, converts with a base-URL swap.
2. **People with a repeating, expensive workload.** Anyone posting about a large inference bill on a task that repeats: support triage, claims, classification, computer use, document extraction. That is the custom-model pitch and it is where the money is.
3. **LiteLLM operators.** Self-hosting already, so no objection to running a gateway. A March 2026 LiteLLM supply-chain incident is **[unverified]**. If a prospect raises it themselves that is an opening. Do not lead with it and do not assert it as fact.
4. **People asking the caching question.** The sharpest objection to their product, raised three times on their own launch thread. Surface every instance. It tells them what to publish next.

## Report shape

Daily. Lead-first, like OpenTag and Ref, not competitor-first like Cloudless. There is **no single competitor**: the brief runs on two fronts, gateway and custom models, and is structured around that split.

**No ads section.** Nobody in this market runs paid social. The surfaces that matter are Hacker News, GitHub, X and r/openrouter.

The one weekly built so far (Aug 28, on OpenRouter) is the public sample at `/samples/openrouter`.

## Do not pitch on

- Volume. Two people, no disclosed funding beyond YC, in a batch. Five good rows they can actually work beats forty.
- Nothing that rests on an [unverified] acquisition or security claim about a competitor. Several facts in `research/competitors.md` rest on one vendor blog.
- Post-level filter is in `IGNORE_RULES.md`. Deliberately not filtered: criticism of Experiential itself, including the caching objection. It is the most useful thing we can hand them.

## Pulls

| Source | Tool | Input |
|---|---|---|
| Hacker News | Algolia API, `https://hn.algolia.com/api/v1/search_by_date` | **The most important surface for this client.** Query `experientiallabs`, `openrouter`, `litellm`, `ai gateway`. Use https. Plain queries fuzzy-match, so read the hits rather than trusting rank. Pull the full thread with `/api/v1/items/<id>` to get every comment |
| X, competitors | `scraper_one/x-posts-search` | `openrouter OR litellm OR portkey OR "ai gateway" OR "model router"`, `latest`, 48 hours. Query cap is **100 characters** |
| X, cost pain | same | `"inference bill" OR "openai bill" OR "token costs" expensive` |
| Reddit | `harshmaur/reddit-scraper` | `["openrouter", "litellm", "openpipe"]`. Watch **r/openrouter**, the competitor's own subreddit and a live complaint feed. Never search the company name |
| GitHub | REST API | Stars and release cadence on `experientiallabs/experiential`, the same on `BerriAI/litellm` for comparison. Code search for `openrouter.ai/api/v1` and `OPENROUTER_API_KEY` in public repos, then read commit history to turn a repo into a named engineer (method in `.claude/skills/competitor-customers/SKILL.md`) |

Name collisions. **Never search the bare string `Experiential Labs`.** It is a term of art in education, and the Reddit pull came back almost entirely as Indian school-admissions content. Use `experientiallabs`, `xplabs.ai`, `api.experientiallabs.ai`, `@explabsai`, `@okfallah`, `@silennai`, HN user `SilenN`, and `"open OpenRouter"`, their own launch phrasing, which is the cleanest way to track whether it spreads.

Things that bite.
- Reddit on the company name is pure noise. Product names only.
- The gateway comparison sites (truefoundry, requesty, respan, portkey, qveris, api7) are all vendor-published SEO. Useful for facts, worthless for judgement. Attribute them as vendor sources.
- Chinese and Japanese posts are a meaningful share of gateway discussion. Quote as written with a translation in brackets.

## Email

No Resend segment. Nothing is sent until they sign. The first deliverable is a sample used to open the conversation. When they do sign: from `research415 <reports@415brand.com>`, reply-to matt@415brand.com, subject "OpenRouter daily brief, Mon D". Broadcast draft only. A human sends.

## Conflicts and confidentiality

No client conflict. Nothing else in the book sells an AI gateway or custom models.

The OpenRouter public sample at `/samples/openrouter` names Experiential Labs. Requesty and Respan, both on `ops/OUTREACH_TARGETS.md` rows 31 to 32, are their direct rivals and will see that sample if pitched. Open Experiential Labs first, or anonymise the sample.

## Open questions for the client

1. Do they want criticism of their own product (the caching objection) in the brief? The default is yes.
2. Who answers the brief, Kion or Silen, and should it land in the shared inbox?
3. Is the LiteLLM supply-chain incident something they want raised at all? It is unverified.
4. Someone asked their business model in public on the launch thread and a third party answered it, not them. Do they want us tracking positioning gaps like that as a standing item?
5. They have no comparison page for LiteLLM, the competitor they were asked about within three hours of launching. Free advice to open with.
