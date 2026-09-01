---
name: competitor-customers
description: Work out who is paying a competitor and which of them can be taken. Evidence tiers (stated, circumstantial, audience), where each kind of evidence lives (reviews, logo walls and their Wayback history, public code, job ads, engagement on the competitor's posts), the workflow, the switchability test and the account-table format. Used for lead-first clients like Sprag and for the account section of a weekly.
---

# Finding a competitor's customers

The question every client asks: who is paying our competitor, and which of them can we take? No competitor publishes a customer list. Everything below is inference from public evidence, and the craft is in being honest about how strong each piece is. "Probably a Deepgram customer" with a link beats "Deepgram customer" with nothing. The client may forward the row to the prospect, so write every row so that being forwarded is survivable.

## 1. Evidence tiers

Every candidate gets a tier. The tier, not the vibe, decides what the client is told.

| Tier | Meaning | Examples |
|---|---|---|
| **A, stated** | Someone at the company said they use it, or the competitor said so, or the code proves it | A G2 or Capterra review, a case study, a logo wall, a conference talk, a "we run on X" post, a repository importing their SDK, a job ad that prints the stack |
| **B, strong circumstantial** | A hard artefact that is hard to explain otherwise | The competitor's script or API host in the company's product, a job ad requiring experience with the tool, a support ticket in the vendor's forum from a work account |
| **C, audience** | They pay attention to the competitor | Commented on or reacted to a competitor's post, follow the account, are in the competitor's subreddit, attended their webinar |

C is a lead, not a customer. Never write it up as a customer. Most of the volume is C. Most of the value is A and B.

Name the tier in the words you choose: *says*, *shows*, *suggests*.

## 2. Where the evidence lives, best first

**A-tier**

1. **Review sites.** G2, Capterra, TrustRadius, GetApp, Gartner Peer Insights, Trustpilot. Reviewers self-identify: role, company size, industry, sometimes the company. A two or three star review is a customer telling you exactly what to sell against, with a job title attached. Sort by newest and by lowest rating.
2. **The competitor's own site.** Logo walls, case studies, testimonials, "trusted by", press pages, docs and changelogs that thank a named company. Crawl the whole site, not the homepage.
3. **The Wayback Machine on that page.** Diff today's logo wall against six and twelve months ago. A logo that disappeared is a customer who left or did not renew. The strongest poach signal there is, and free.
4. **Public code.** For an API or SDK company, the best source there is. Code search for the package name, the import, the env var, the endpoint host. Then repository to organisation to company, and the commit history to a named engineer. Also public `package.json`, `requirements.txt`, Dockerfiles, Terraform. A provider-pluggable repository (a `providers/deepgram.ts` next to a `providers/openai.ts`) is also a pull-request target, which is the one action a client can take without anyone's permission.
5. **Conference and podcast appearances.** "How we built X with Y" talks, vendor webinars with a customer speaker, joint press releases.
6. **Posts that name the tool.** "We switched our pipeline to X last quarter" on LinkedIn or X from someone whose title and employer are visible.
7. **Job ads that print the stack.** "Utilizes OpenAI and Gemini for LLMs, Deepgram for speech-to-text." The company uses it and is hiring the engineer who will own it. Write to the company, not the staffing firm.

**B-tier**

8. **Tech-stack detection** on candidate domains: script tags, network hosts, CDN paths, DNS records, response headers.
9. **Job ads that require experience** with the competitor. Also the reverse read: a company hiring for the function at all is entering the market.
10. **The vendor's support surfaces.** Their subreddit, forum, GitHub issues on their SDKs, the Stack Overflow tag. People post from work accounts and describe their setup. Check who opens the issues: on some competitors every issue for a month was opened by their own staff.
11. **Marketplace and integration directories.** AWS and GCP marketplaces, app-store integration pages, "built with" galleries, connector folders in embedded-integration products.

**C-tier**

12. **Engagement on the competitor's own posts.** LinkedIn is the best of these by a distance: reactions and comments come back with each person's headline and employer, so one pull gives names, titles and companies for everyone paying attention. On X only repliers, quoters and reposters are visible.
13. **Followers** of the competitor's account, members of their community, subscribers to their subreddit.

## 3. The workflow

Each step narrows the next. Do not enrich early.

1. **Frame the ICP** from CLIENT.md and the research: who can buy this, at what size, in what region, with what use case. Write it down.
2. **Harvest A-tier.** Reviews, the site plus the Wayback diff, code search, press, job ads. Cheap, and produces named companies. Do it before touching social.
3. **Harvest B-tier.** Job ads, tech detection on the candidate domains you now have, the vendor's community. Mostly confirmation work: it turns a maybe into a probably.
4. **Harvest C-tier.** The competitor's last 30 days of LinkedIn and X posts, then everyone who reacted, commented, replied, quoted or reposted. Filter to titles and companies that look like the ICP before enriching anyone. On a busy competitor this is thousands of rows and 95% are recruiters, competitors and lurkers.
5. **Resolve people to companies.** LinkedIn reactions give the employer for free. For X, the bio and the linked site. Dedupe: many people at one company is one account row with several contacts.
6. **Score.** Confidence is the evidence tier. Priority is ICP fit times switchability times reachability.
7. **Write it up.**

## 4. Switchability

The part people skip. What makes an account actually takeable:

- A public complaint, a bad review, or a churn signal (logo removed, "we're re-evaluating").
- A price change, an outage, an acquisition, or a pricing tier they have outgrown.
- The competitor's champion at that company just changed jobs.
- A stated need the competitor does not serve and the client does (a language, a deployment mode, a latency budget).
- Renewal timing you can infer (a case study dated 12 or 24 months ago).
- A free-credit window closing (a startup programme, a launch credit) and the first real bill arriving.

Against it: deep integration, a signed multi-year contract, compliance certifications the client lacks, a segment the client cannot serve (government self-hosted, regulated health without a BAA), or the competitor's investor on their board.

## 5. Output

The account table in a lead-first daily, or the account section of a weekly:

| Who | Where | The signal | What [client] can do |
|---|---|---|---|

- **Who.** The company, its size and what it does, then the named person and title, linked to their profile. This is who the client contacts.
- **Where.** The platform and date of the artefact. "LinkedIn job ad, Aug 31". "G2, Aug 30".
- **The signal.** The evidence in one sentence, quoted where possible, linked to the artefact. "The job ad for their Staff Software Engineer prints the stack: Deepgram for speech-to-text." "Reacted to Soniox's post on Gemini 3.5 Transcribe. Her own profile title is the job Sprag sells into." Name the tier in the words you choose.
- **What [client] can do.** One or two sentences. What the client leads with for this account, based on this evidence, where the client genuinely wins (from CLIENT.md and the research). If the evidence does not support an angle, "watch, do not pitch." Check the client's actual capability list (languages, platforms) before writing the angle.

Sort by confidence, then by switchability. Ten A-tier rows beat two hundred C-tier rows. In a daily, three to five rows. Hold the rest for the next report and log them under "Seen but not sent".

For an open-source table (API clients): Project | Stars | The dependency | Last push | What [client] can do. Say whether the dependency is pluggable (name the file), whether the repository is alive (the last push in its own column, and "open an issue first" when it is stale), and whether it is in the ICP at all.

## 6. Things that bite

- **C-tier volume looks like success and is not.** A thousand people reacted to the launch post. Four are buyers. Report the four.
- **Recruiters, agencies, resellers and the competitor's own staff** dominate engagement lists. Filter on employer first.
- **Consultancies are not customers.** An agency that implements the competitor is a channel, never a poach target. A one-person agency is barely a channel.
- **Logos on a wall go stale.** Check the Wayback date before pitching a "customer" from 2023.
- **A company can use both.** Multi-vendor is normal for APIs. Check the client's own customer list first.
- **A repository that mentions the competitor in its README does not run it.**
- **Free credits mean nothing to do today.** A company that just joined the competitor's startup programme is on free credits. Revisit when they run out.
- **Never assert a commercial relationship you cannot link to.**
- **Do not scrape behind a login.** The moment a workflow needs a session cookie or a paid seat's data, stop and say so.
