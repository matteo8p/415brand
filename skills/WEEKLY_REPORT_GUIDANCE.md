# How to write a weekly report

This is the skill for the 415brand weekly competitive brief. Read it fully before starting a report. The reference example is `webapp/app/samples/briefs/viktor.ts` (rendered at `/samples/viktor`). When this document and the example disagree, this document wins.

A weekly report is about **one competitor**, written **for one client**. It answers two questions in every section, in this order: what did the competitor do this week, and what should the client do about it. It is a list of moves with the evidence attached. It is not a description of the competitor.

---

## 1. Before you write

1. Read the client folder: `clients/<client>/README.md` (who the client is, who the competitor is, who reads the report), the client summary (`<CLIENT>.md`) and the competitor summary (`<COMPETITOR>.md`). If the summaries don't exist, research and write them first.
2. Read last week's report if there is one. The new report must say what changed since then.
3. Pull the data (section 8). Do not start writing until the scorecard numbers are in hand.

## 2. Output

- A data file `webapp/app/samples/briefs/<competitor>.ts` exporting a `Brief` (type in `webapp/app/samples/briefs/types.ts`), plus a page at `webapp/app/samples/<competitor>/page.tsx` that renders it with `BriefArticle`.
- A rendered copy saved to `clients/<client>/reports/<M-D-YYYY>.html`.
- Run `pnpm typecheck` in `webapp/` before you call it done. Every `[[source-id]]` must exist in `sources`.

## 3. Structure

The order is fixed. Do not add, remove or reorder top-level parts.

### Intro (above the table of contents)

1. `h3` **Scorecard**, then a `scorecard` block. 12 to 14 rows, competitor vs client, one short note per row. Rows in this order:
   - Monthly website visits
   - Share of visits from free Google results
   - Paid search terms (US)
   - Estimated monthly Google Ads spend (US)
   - Organic keywords (worldwide)
   - Review-site count and average rating (G2, or the main site for the category)
   - Active Facebook and Instagram ads
   - Share of those ads made by creators rather than the company
   - TikTok followers on the brand account
   - X posts about it per day
   - X posts that are complaints, switching or asking for an alternative
   - Biggest objection this week, and its share of all complaints sorted
   - Reddit posts since a fixed date
   - LinkedIn followers (employees listed)
   - Open jobs

   Drop a row only if the data truly doesn't exist for either company, and say so in the note.

2. `h3` **Recommended actions for [client] from the analysis**, then a `moves` block with `collapsed: true`. **Three or four actions. Never more.** Each has:
   - `action`: one sentence, imperative, plain words. "Get listed on G2 and Slack's app directory."
   - `why`: four to six short sentences. The evidence, why it works, what it costs or how long it takes.
   - `evidence`: the id of the section that backs it.
   - No `window` field.

   Order the actions by impact per dollar. The first one should be the cheapest thing with the biggest payoff.

3. `h3` **Posts worth replying to this week**, then a `table` with columns Where | Date | Post | Reach. Live posts where someone doubts the competitor, complains, or asks whether to buy, ranked by reach. Every post cell links to the original. No note under the heading.

4. A `note`: "Everything below is collapsed. Click [show] on any line for the full analysis, the why, and the sources."

### Numbered sections

1. **Key findings**. Five `findings`, one per section below plus one on pricing. This is the summary. A founder who reads only this should know the five things to repeat to their team.
2. **Pricing and product**
3. **Search and marketplaces**
4. **Advertising and social media**
5. **Hiring**
6. **Sources**. A `links` block grouping every source by type: data tools, the competitor's own pages, the client's own pages, reviews and press, social, ads and video.

Sections 2 to 5 share one shape, in this order:

- a `fig` with one or two charts that set the scene
- `h3` **What happened**, a `findings` block with `style: "did"`, two to four items
- `h3` **What [client] should do**, a `findings` block with `style: "do"`, two to three items
- a `toggle` called **Full analysis** with the tables, extra charts and longer paragraphs behind the findings

## 4. How a finding is built

Every finding in *Key findings* and *What happened* has three parts:

```
claim   one sentence, the whole point, stands alone
p       the evidence, 2 to 4 sentences, the numbers that matter, source pills at the end
why     "**Why it matters for [client]:**" then 1 to 3 sentences that end on the action
```

The `claim` must work on its own. Someone who never expands it should still know what happened.

- Bad: "Viktor's social media reach is a paid machine: creators paid up to $10K a post, referral commissions, paid consultants, and a group of big accounts that cheer each other's posts on launch day."
- Good: "Most of Viktor's social media attention is paid for, through creators, referral commissions, and big accounts that reply to each other on launch day."

The `why` must name what the client should do. A `why` that ends on an observation is unfinished.

- Bad: "…the searches that describe the category belong to nobody yet."
- Good: "…the searches that describe the category belong to nobody yet. Adapt can take them with a better comparison page and the right search terms."

Findings under *What [client] should do* have a `claim` (the instruction, imperative) and one `p` (how to do it, what it costs, the evidence). No `why`.

## 5. What each section must cover

**Pricing and product.** Plans, prices, what's included, how billing works (credits, seats, caps). What changed and when. What the competitor's own pages still say incorrectly. What each company shipped this window. Security and compliance (SOC 2 stage, ISO, SSO, data residency). Every claim on the client's own comparison page checked against reality. A full feature matrix in the Full analysis.

**Search and marketplaces.** Traffic and where it comes from. Organic keyword count and trend. Paid keywords, estimated spend, the biggest paid terms, who the competitor bids against. The category searches neither company owns, with volume and cost per click. Brand-name searches and misspellings. App directories and review sites with counts and how fast they're growing. AI-assistant citations. Other things that share the name. What people are searching for that shows doubt.

**Advertising and social media.** Every active Meta ad: count, launch dates, formats, landing pages, themes, and which ads have the most copies (the "creative watch list", re-checked every report). Google ads on record. Creator, referral and partner programs with exact payouts. TikTok, YouTube, Instagram, X and LinkedIn: brand-account reach vs creator reach, what share of views is paid, who posts most, what a launch day looks like. X posts split into praise, complaints and hype with counts, then the objection mix below. A paid-footprint table by channel, with the client's own footprint as the last row. A paragraph on what actual spend is and isn't knowable from outside.

**Objection mix.** A count of *why* people are unhappy, not just how many are. Sort every complaint in the window into exactly one bucket, the one the person led with, and say how many you sorted.

| Bucket | What it sounds like | What the client does about it |
|---|---|---|
| Price | "too expensive", "not paying extra", "cancel before it renews" | Pricing page, free tier, a cost calculator |
| Privacy | "training on my audio", "where does my data go", "no SOC 2" | Publish the policy, name what you don't collect |
| Accuracy | "it got worse", "keeps mishearing me", "I have to fix every line" | Product. Nothing marketing says fixes this |
| Latency | "lag when I press the key", "slow to start", "eats my first word" | Product, and a benchmark page if you win |
| Workflow | "broke my shortcut", "doesn't work in the app I use", "have to clean it up after" | Integrations, defaults, docs |
| Platform gap | "no Windows", "no Linux", "the iPhone one is bad", "my language isn't supported" | Roadmap. Say the date or say no |
| Account and billing | "locked out", "charged twice", "support never answered" | Support, and an easy win in the reply |

Rules for this block:

- Report it as a `share` chart plus the move since the last report: "privacy 8% → 19%".
- **Never merge these into one negative number.** Seven objections need seven different answers. A client who only sees "27% negative" cannot do anything with it. This is the whole point of the section.
- Name the two that grew most and say what each one implies. One growing objection with a product fix behind it is worth more than the total.

**Durability, not just volume.** Tag every complaint, and sort the reply table by this, not by reach alone:

- **Paying and leaving.** A year of use, or the words cancel or refund in the post. Top of the table.
- **Trialling and unimpressed.** Days old. Cheap to win and cheap to lose again.
- **Venting.** Annoyed, not going anywhere. Answer if it is quick, don't lead with it.
- **Already gone.** They name where they went. These are not leads. They are the only retention evidence we can see.

**Switch evidence.** A table of every post this window where someone says they actually moved, and what they moved to. Trend the count. Where people land is the closest thing to a competitor's retention that anyone outside the company can observe.

**Say plainly what this is not.** Complaint volume is evidence that customers are *available*. It is not evidence that they will *stay*, with the competitor or with the client. We cannot see a competitor's activation or retention, because those live in their own analytics, and no outside tool has them. Never write a sentence implying that rising complaints mean the competitor is losing users. The honest framing, and the one to use if a client asks: this is who you can reach and why they are unhappy. Whether they stay is your product's job.

**Hiring.** Open jobs by department with a chart. Headcount over time. What the job ads reveal (quote them; job ads say what marketing won't). Salary disclosure. Office rules. Who joined and from where. What the competitor is not hiring for. The client's own openings and team. Every job in a table with a link.

**Key findings.** One per section plus pricing. Each `why` must connect to at least one recommended action.

**Recommended actions.** Each must be something the client can start this week with the people it has. Good actions: buy the searches the competitor ignores, fix the client's own pages, get listed where buyers browse, copy a program that demonstrably works for the competitor and aim it at an audience the competitor misses, sell against a weakness the competitor has admitted in its own words. Bad actions: "build brand", anything that needs a hire the client doesn't have, anything the report's evidence doesn't directly support.

Always cover both sides: what the competitor does that **works and should be copied** (say what to copy and what to change), and what the competitor is **getting wrong and should be avoided** (say what the mistake costs them). The report must never read as if the client can only work around the competitor.

## 6. Formatting rules

- Use only the block types in `types.ts`: `p`, `note`, `why`, `h3`, `ul`, `links`, `findings`, `toggle`, `fig`, `table`, `scorecard`, `moves`, `changes`. No raw HTML.
- Every factual sentence ends with one or more `[[source-id]]` pills. Define each id once in `sources` with `label`, `href` and a `logo` from `logos.tsx`. A number with no pill gets cut.
- One-off links in prose: `[label](https://…)`. Labels cannot contain `]`.
- Bold is only for `**Why it matters for [client]:**`. Never bold numbers or phrases for emphasis.
- Tables: short columns get a width, dates get `nw: true`, numbers get `n: true`. Example: `{ text: "Date", w: "7%", nw: true }`. The long text column gets no width and takes the rest.
- Charts: `columns` for one thing over time, `lines` for two companies over time, `rows` for a ranked list, `share` for a percentage split (including the objection mix). Always fill `aria`. Label first and last column of a trend, or every row of a ranked list.
- Dates: "Aug 20". Numbers: "$176K", "646K", "13,810". Ranges: "$6 to 20". Percentages: "29%". "About", never "approximately".
- The competitor and the client by brand name. People by full name and role the first time, then surname or role.

## 7. Writing style

Everything below applies to every sentence in the report.

**Plain words.** Write for a smart person who has never worked in marketing or software. Say what a thing is, not what it's called.
- "Free Google results", not "organic SERP".
- "The security audit big companies ask vendors for (SOC 2)", not "SOC 2 Type II attestation".
- "Pre-paid units the AI uses up as it works", not "consumption-based credit model".
- Define a term in half a sentence the first time it appears, then use it freely.

**Straightforward, no fancy wording.** Say the literal thing. No metaphors, no coined phrases.
- Not "creator machine". Say "referral and creator programs".
- Not "bought its way onto Google". Say "its Google presence comes from paid ads".
- Not "sales floor", "war chest", "narrative", "leak", "cheerleaders", "manufactured", "lit up X", "wide open", "pick the fight accordingly".
- If a phrase sounds clever, replace it with what it means.

**Short and to the point.** First sentence of every paragraph is the conclusion. The numbers follow. No filler. Cut "it is worth noting", "interestingly", "in order to", "leverage", "utilize", "robust", "ecosystem", "landscape". Cut sentences that restate the claim. Cut adjectives that don't carry a number.

**Punctuation.** No semicolons. No em dashes. Colons only in the `**Why it matters for [client]:**` prefix and in table cells used as labels ("Viktor: none. Adapt: limits per person"). Split anything else into two sentences.

**Concrete over abstract.** "7 of 9 August G2 reviews complain about credit costs" beats "customers are unhappy with pricing". Quote the competitor's own words, especially from job ads and reviews.

**Active voice, no hedging.** "Viktor doubled its cheapest plan." Not "It appears Viktor may have increased pricing." Where the data is uncertain, say exactly how: "SpyFu says $176K, Semrush $82K. The real number is probably between the two."

**Judge from the client's side.** Every fact is good, bad or neutral for the client, and the `why` says which. No neutral industry commentary.

**End on the move.** Findings and recommendation paragraphs end on what to do. "Move the money to the searches Viktor ignores." Not on what is.

**Direct address is fine in recommendations.** "Adapt should bid on them." "Y'all should spin one up." Keep evidence paragraphs in the third person.

**Honest about estimates.** Traffic, spend and revenue figures from outside tools are estimates. Say so once in the footer and trust the trends and ratios, not the exact numbers. Revenue a company claims about itself is "what the founders say". When two tools disagree by more than 2x, print both.

**No character judgments.** Report what the competitor did and what it means for the client. "Not organic" when the numbers show it. Never "dishonest".

**Length.** 8,000 to 10,000 words rendered. Key finding: about 150 words. A `why`: under 80 words. A `moves` `why`: under 100 words. A Full analysis paragraph: under 150 words. If a paragraph runs long it is doing two jobs. Split it or cut it. When cutting, cut Full analysis paragraphs first, then evidence paragraphs. Never cut claims, tables or sources.

## 8. Data sources and how to pull them

Pull everything on the same day. Note the pull date in the footer.

| What | Where | How |
|---|---|---|
| Traffic, sources, countries | Similarweb | Apify scraper or browser pane, `similarweb.com/website/<domain>` |
| Organic and paid keywords, spend estimate, AI citations | Semrush | Apify scraper or browser pane |
| Paid keyword history, ad budget history | SpyFu | `spyfu.com/overview/domain?query=<domain>` |
| Links from other sites, link strength | Ahrefs | traffic checker |
| Search volume, cost per click | Google Keyword Planner | Google Ads account |
| Google ads on record | Google Ads Transparency Center | `adstransparency.google.com/?domain=<domain>` |
| Meta ads | Meta Ad Library | browser pane, `facebook.com/ads/library/?view_all_page_id=<id>`, sort by newest, scroll to the end of the window |
| X posts | Apify `scraper_one/x-posts-search` | query the brand name and handle, `timeWindowHours` for the window, run both `latest` and `top` |
| Reddit | Apify `harshmaur/reddit-scraper` | exact brand name, posts and comments, drop off-topic hits |
| LinkedIn posts and people | Apify `harvestapi/linkedin-post-search`, company page | |
| TikTok, YouTube, Instagram | Apify search scrapers for the brand name and "<brand> review" | count plays, mark #ad and commission links |
| Reviews | G2, Product Hunt, Trustpilot, Slack Marketplace, Hacker News | read every review in the window, count the "dislike" themes |
| Jobs | The company's job board (Ashby, Greenhouse, Lever), LinkedIn Jobs, Built In | read every ad, quote what it reveals |
| The competitor's own pages | pricing, changelog, security, blog, creator/partner pages | check every claim on the client's comparison page against them |

Things that go wrong: Apify has a monthly cap and every call fails when it's hit. The X actor ignores `since:`/`until:` and returns no view or follower counts. Reddit search returns off-topic threads. Watch for astroturfing (templated posts from new accounts) and call it out instead of counting it.

## 9. Before you finish

- Every `[[id]]` resolves. `pnpm typecheck` passes.
- Every post, ad and job in a table links to its original.
- The recommended actions each link to a section, and that section's *What [client] should do* contains the same move in more detail.
- No semicolons, no em dashes, no figurative phrases. Search the file for `;`, `—`, "machine", "narrative", "leak".
- Word count is in range.
- The objection mix adds up, names the total sorted, and shows the move since last report. No sentence anywhere claims or implies that complaint volume tells you what the competitor's retention is doing.
- Render the page and read it top to bottom as the founder would: scorecard, actions, claims. If you can't say what to do after that pass, the report isn't finished.
