# How to find potential customers of competitors

This is the skill for answering the question every client actually asks: **who is paying our competitor, and which of them can we take?** Read it fully before starting. Tools and exact inputs are in `skills/SCRAPING_TOOLBOX.md`. The sibling skill `skills/FIND_LEADS.md` covers intent-based leads; this one covers account-level poaching. Sprag is the reference client for it (`clients/sprag/README.md`).

No competitor publishes a customer list. Everything below is inference from public evidence, and the whole craft is in being honest about how strong each piece of evidence is. A row that says "probably a Deepgram customer" with a link beats a row that says "Deepgram customer" with nothing.

---

## 1. Evidence tiers

Every candidate gets a tier. The tier, not the vibe, decides what the client is told.

| Tier | Meaning | Examples |
|---|---|---|
| **A — stated** | Someone at the company said they use it, or the competitor said so | G2/Capterra review, case study, logo wall, conference talk, "we run on X" post, a repo importing their SDK |
| **B — strong circumstantial** | Hard artefact that is difficult to explain otherwise | Competitor's script/API in the company's product, job post requiring experience with the tool, support ticket in the vendor's forum from a work account |
| **C — audience** | They pay attention to the competitor | Commented on a competitor post, follows the account, in the competitor's subreddit, attended their webinar |

C is a lead, not a customer. Never write it up as a customer. Most of the volume will be C; most of the value is in A and B.

## 2. Where the evidence lives, best first

### A-tier

1. **Review sites — the single richest source.** G2, Capterra, TrustRadius, GetApp, SoftwareAdvice, Gartner Peer Insights. Reviewers self-identify: role, company size, industry, sometimes the company. A 2- or 3-star review is a customer telling you exactly what to sell against, with a job title attached. Sort by newest and by lowest rating; those are the poachable ones.
2. **The competitor's own site.** Customer logo walls, case studies, testimonials, "trusted by", press pages, docs and changelogs that thank a named company. Crawl the whole site, not the homepage.
3. **The Wayback Machine on that same page.** Diff today's logo wall against 6 and 12 months ago. **A logo that disappeared is a customer who left or stopped renewing** — the strongest poach signal that exists, and free.
4. **Public code.** For an API or SDK company this is the best source there is. GitHub code search for the package name, the import, the env var, the endpoint host — `deepgram-sdk`, `DEEPGRAM_API_KEY`, `api.deepgram.com`. Then map repo → org → company. Also check public `package.json`, `requirements.txt`, Dockerfiles and Terraform.
5. **Conference and podcast appearances.** "How we built X with Y" talks, vendor webinars with a customer speaker, joint press releases.
6. **Posts that name the tool.** "We switched our pipeline to X last quarter" on LinkedIn or X, from someone whose title and employer are visible.

### B-tier

7. **Tech-stack detection.** For anything embedded in a web product: script tags, network hosts, CDN paths, DNS records, response headers on candidate domains.
8. **Job posts.** "Experience with <competitor> required" in a JD is a company that uses it and is expanding the team that owns it. Also the reverse read: a company hiring for the function at all is entering the market.
9. **The vendor's support surfaces.** The competitor's own subreddit, Discourse/community forum, GitHub issues on their SDKs, Stack Overflow tag. People post from work accounts and describe their setup in detail.
10. **Marketplace and integration directories.** AWS/GCP marketplace, app-store integration pages, "built with" galleries.

### C-tier

11. **Engagement on the competitor's own posts.** LinkedIn is the best of these by a distance: the reaction and comment lists come back **with each person's headline and current employer**, so one pull gives you names, titles and companies for everyone paying attention. On X, likes have been private since June 2024 — you can only get repliers, quote-posters and reposters, so treat X reach numbers as replies/reposts/quotes only.
12. **Followers of the competitor's account**, members of their community/list, subscribers to their subreddit.

## 3. The workflow

Run it in this order. Each step narrows the next, so do not enrich early.

**Step 1 — Frame the ICP.** From the client summary: who can actually buy this, at what size, in what region, with what use case. Write it down. Everything gets scored against it.

**Step 2 — Harvest A-tier.** Reviews, the competitor's site + Wayback diff, code search, press. This is cheap and produces named companies. Do it before touching social.

**Step 3 — Harvest B-tier.** Job posts, tech detection on the candidate domains you now have, the competitor's community. Note that B-tier is mostly *confirmation* work: it turns a maybe into a probably.

**Step 4 — Harvest C-tier engagement.** Pull the competitor's last 30 days of LinkedIn and X posts, then pull everyone who reacted, commented, replied, quoted or reposted. Filter to people whose title and company look like the ICP *before* enriching anyone. On a busy competitor this is thousands of rows and 95% of them are recruiters, competitors and lurkers.

**Step 5 — Resolve people to companies.** Person → employer → domain. LinkedIn reactions give you employer for free. For X, the bio and linked site. Then dedupe: many people at one company is one account row with several contacts, not several rows.

**Step 6 — Score.**

```
confidence = evidence tier
priority   = ICP fit × switchability × reachability
```

**Switchability** is the part people skip. What makes an account actually takeable:

- A public complaint, a bad review, or a churn signal (logo removed, "we're re-evaluating")
- A price change, an outage, an acquisition, or a pricing-tier they've outgrown
- The competitor's champion at that company just changed jobs
- A stated need that the competitor does not serve and the client does
- Renewal timing you can infer (case study dated 12 or 24 months ago)

Against that: deep integration, a signed multi-year contract, compliance certifications the client lacks, or the competitor's investor sitting on their board.

**Step 7 — Write it up.**

## 4. Output

The first table in a Sprag-style daily report, and the account section of a weekly report:

| Company | Who | Why we think they use <competitor> | Confidence | The angle |
|---|---|---|---|---|

- **Company.** Name, linked to their site. Size and industry if the source gave them.
- **Who.** The named person, title, linked to their profile. This is who the client contacts.
- **Why we think they use it.** The evidence, in one sentence, **linked to the artefact**. "Left a 2-star G2 review of Deepgram on Aug 21 citing latency." "Their careers page asks for Deepgram experience." "Commented on Deepgram's Flux launch post asking about streaming cost." Name the tier in the words you choose: *says*, *shows*, *suggests*.
- **Confidence.** A / B / C. Never blank.
- **The angle.** One or two sentences. What the client leads with for this specific account, based on this specific evidence. Where the client genuinely wins (for Sprag: native speech-to-speech cost and end-to-end agentic latency — not raw STT or TTS speed; see `clients/sprag/competitors.md`). If the evidence does not support an angle, say "watch, don't pitch."

Sort by confidence, then by switchability. Ten A-tier rows beat two hundred C-tier rows and take less of the client's day.

## 5. Things that bite

- **C-tier volume looks like success and isn't.** A thousand people reacted to the launch post; four of them are buyers. Report the four.
- **Recruiters, agencies, resellers and the competitor's own staff** dominate engagement lists. Filter on employer before anything else.
- **Consultancies are not customers.** An agency that implements the competitor is a partner, sometimes a channel, never a poach target.
- **Enterprise logos on a wall are stale.** Check the Wayback date before pitching a "customer" from 2023.
- **A company can use both.** Multi-vendor is normal for APIs. "Uses the competitor" does not mean "does not already use the client" — check the client's own list first.
- **Do not scrape behind a login.** Everything above is public. The moment a workflow needs a session cookie or a paid seat's data, stop and say so.
- **Never assert a commercial relationship you cannot link to.** The client may forward this row to the prospect. Write it so that being forwarded is survivable.
