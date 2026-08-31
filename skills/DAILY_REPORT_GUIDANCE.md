# How to write a daily report

This is the skill for the research415 daily brief. Read it fully before starting a report. The reference example is `clients/cloudless.so/reports/08-27-2026.html`, also rendered as a sample at `/samples/wispr-daily` (`webapp/app/samples/briefs/wispr-daily.ts`). The client-specific workflow (actors, page IDs, email setup) lives in `clients/<client>/README.md`.

A daily report has one job: **give the client the posts about the competitor from the last two days that they can reply to, and tell them what to say.** Everything in it serves that. If a line doesn't help the client reply to someone or understand what the competitor did today, cut it.

The weekly report is analysis. The daily report is a to-do list.

---

## 1. Before you write

1. Read `clients/<client>/README.md` for the client, the competitor, who the reader is, the Apify actors and inputs, the Meta Ad Library page ID, and the email setup.
2. Read yesterday's report. Don't repeat posts already listed. Note anything you said to follow up on.
3. Pull the data (section 8). The window is the last two days, dated for the day the report is sent.

## 2. Output

- `clients/<client>/reports/<MM-DD-YYYY>.html`, built from `reports/build_report.py` (edit the lists, run it). Same look as the weekly report: `.analysis` CSS, Wikipedia-style tables, blue links, green `.why` box.
- An email-safe copy, `<MM-DD-YYYY>.email.html`, with all CSS inlined, set up as a Resend broadcast **draft**. A human sends it. Never send directly.
- If the report will be used as a public sample, a copy in `webapp/app/samples/briefs/` with the client's name and the reader's name removed (see section 7).

## 3. Structure

Fixed order. Six numbered sections plus a heading block. Section 1 only applies to clients whose competitor has a developer surface. For a consumer product, drop it and renumber.

**Title:** "[Competitor] daily brief". **Subtitle:** "For [reader] at [client], [Month D, YYYY]". Nothing else in the subtitle.

**Contents box** listing the sections.

**Every table is three to five rows.** Not "as many as the data gives". The
reader opens this on a phone between meetings, and a twelve-row table is a
research document, not a to-do list. Pull everything, rank it, then publish the
top three to five per table and drop the rest. If a row is not one of the five
best things the reader could do today, it is not in the report. The cut rows go
in the client README under "Seen but not sent", so tomorrow's report can promote
one if the thread grows.

**Today's three moves.** A green `.why` box, one paragraph, starting "**Today's three moves:**". The three highest-value replies, numbered (1) (2) (3), each with the post linked. These are the three things the reader should do if they do nothing else. Pick them by: a thread with many people asking what to switch to, the biggest complaint thread in the competitor's own community, and the fresh posts with zero replies where the reader can be the only answer.

Then the sections:

1. **Open source projects running [competitor].** Three to five, ranked by stars. Table: Project | Stars | The [competitor] dependency | Last push | What [client] can do. This goes first because it is the only section where the client can act without anyone's permission. A repository that already treats [competitor] as one provider behind an interface can take a [client] provider as a pull request, and the client's name then sits in the codebase in front of everyone who reads it.

   Rank by stars, but check three things before a row earns its place, and say each of them in the cells:
   - **Is the dependency pluggable?** A `providers/deepgram.ts` next to a `providers/openai.ts` is a day of work. A hardcoded call buried in a handler is a rewrite nobody merges. Name the file.
   - **Is it alive?** Print the last push date in its own column. A 4,000-star repository with no commit in two years is not a lead, and pretending otherwise wastes an afternoon. If it is stale, say so, and say to open an issue before writing code.
   - **Is it voice, and is it in the ICP?** Skill registries, awesome-lists and prompt catalogues all match a code search for the competitor's name and use none of it. Drop them.
2. **People complaining about [competitor].** The reply targets, three to five of them. Table: Where | Date | Post | Reach | What [reader] can do. Fresh, specific complaints with zero replies first. Being the only answer beats being one of twenty.
3. **People shopping around or on the fence.** Three to five. Comparisons, "what should I use", people trying it publicly, competitor launches that drew an audience the client wants. Same columns.
4. **People happy with [competitor].** Three to five, no reply. This shows what the competitor's users like, where it is spending, and where its team does and doesn't show up. Last column is "Why it matters" instead of "What [reader] can do". Cut the rows the reader can do nothing about, however interesting they are.
5. **[Competitor] ads and creator posts that work, to send your team.** A swipe file, not a chart. **One table, three to five examples in total**, mixing brand ads, creator ads and organic posts, each with a link that opens the creative, the hook quoted word for word, and one line of brief. Built from the whole ad library, not the window. Section 6 is how to build it.
6. **What happened this week.** Five short bullets. What changed, who launched what, which complaint is growing, where the competitor's team is and isn't posting. Follow-ups from yesterday go here.

There is no sources section and no footer. Every row links to its source, which is
the sourcing. A methodology paragraph at the end of a to-do list is small print,
and the reader skips it.

No explanatory grey text under section headings. The tables speak for themselves.

## 4. How a table row is built

Every row is one post. Five cells.

- **Where.** Platform and account, with follower count if the tool gives it. "X, @michellezfr". "Reddit, r/WisprFlow". "LinkedIn, Artem Vysotsky". "G2, a reviewer at a law firm". Add "(FR)" or similar if the post isn't in English.
- **Date.** "Aug 25". Nothing else.
- **Post.** The post text, shortened to the part that matters, linked to the original. Keep the poster's own words, including typos and profanity. If it's in another language, quote it and add a translation in brackets. Never paraphrase into marketing language.
- **Reach.** Likes, replies, reposts, upvotes, comments, plays, as the tool reports them at pull time. "5 likes, 1 reply". "11 upvotes, 18 comments". "0 likes, no replies yet" is a feature, not a gap. For reviews: "5-star review, 'dislike' box".
- **What [reader] can do.** **Twenty words, twenty-five at the outside.** One or two short sentences, plain words, and no run-up. Lead with the verb: what to do, then the one fact that makes it land. Anything longer is you thinking on the page, and the reader has to do that thinking again to find the instruction. What the post is really saying goes in the Post cell, not here. Lean on whichever part of the client's pitch matches the complaint. Examples from the reference report:
  - "Lost a 6-minute dictation, already shopping. Reply before she settles on Aqua."
  - "Paying user asking if Wispr got worse. No one has answered. Be the first reply."
  - "iPhone free tier is 1,000 words. Reply in French: iOS, free, no cap."
  - "Already left for an Indian-language tool. Not worth chasing."
  - "Competitor, don't pitch. But mixed-language speech is a gap several people raised this week. If Cloudless handles it, say so."

  Say when *not* to reply. Say when to reply in another language. Say when a video would beat a text reply. Never claim a product detail you haven't confirmed. Write "if [client] does X, say so."

Rank rows within each section by reach, except that fresh complaints with zero replies go first in section 1. Then cut to the top three to five. Rank on what the reader can win, not on reach alone: a named company with a written-down dependency on the competitor beats a viral thread the reader cannot act on.

## 5. The swipe file: competitor ads and creator posts that work

Section 4 of the report is not a list of new ads and it is not a chart. It is a
**swipe file the client forwards**. The reader is going to paste these links into
Slack for an ad manager and into a brief for a creator, so every row has to be a
link that opens the actual creative, the words that creative uses, evidence it
worked, and one line of instruction.

If a row cannot be forwarded to a person who will then make something, cut it.

### How you know an ad is working

You have no spend and no click data. You have four things that stand in for it,
and the first one does most of the work:

| Signal | Where it comes from | Why it is evidence |
|---|---|---|
| **How long it ran** | `endDate` minus `startDate` on a retired ad, or today minus `startDate` on a live one | Advertisers kill what loses. A creative that ran 132 days won, and nobody has to take our word for it. |
| **Duplicate copies** | `collationCount`, or "N ads use this creative and text" | Duplicating a creative is how an advertiser scales a winner. High copies on a young ad means they are pushing it right now. |
| **Relaunches** | Same copy, retired once, live again on a later `startDate` | The strongest signal of all. They tested it, stopped it, and chose to bring it back. |
| **Engagement rate** | Likes divided by plays on an organic post | Use for creator posts, where run length does not exist. Rank on rate, not raw plays, or you just rank by follower count. |

Say the evidence in the row, in the client's language: "Ran 132 days, 11 duplicate
copies". Never write "high performing" with nothing behind it.

### One table, three to five examples, total

Not three to five per source. **Three to five in the whole section.** A creative
team cannot act on fifteen references, and a reader who scrolls past this table
has not been handed a swipe file, they have been handed homework.

The example | Why we know it works | The hook, word for word | What to brief.

Rank every candidate on run length, then pick across kinds so the handful covers
different jobs: two or three brand ads, one creator-fronted ad, one organic post.
Label each row by kind ("Ad:", "Creator ad:", "Creator post:") so the reader knows
who to forward it to without a second table telling them.

Then one `.why` paragraph starting "**Takeaway:**" that names the shape all the
winners share: how many lines, what the first line does, where the product enters,
what the close is. The shape is what makes the links usable. Without it the reader
has examples and no rule.

### Quote the hook word for word

The single most important cell. A creative director cannot work from "an ad about
speed". They can work from "Old you: stuck clacking keys. New you: speaking ideas
into reality." Paste the competitor's copy verbatim, in quotation marks, trimmed
to the part that carries the idea. Never summarise it and never improve it.

### What to brief

One or two sentences, addressed to the person who will make the thing. Name the
structural move worth stealing, not the topic. "The product shows up in line three,
after the annoyance" is a brief. "Make an ad about speed" is not.

Say when **not** to copy something: a mechanic that only works for a paid product,
a feature the client does not have, a creator already under contract. And when the
row is a gap rather than a template, say that. A big "free alternatives to
[competitor]" video the client is missing from is an outreach target, not a format.

### The negative search

Run the client's own pitch words through every creative the competitor has ever
published and report the counts with the corpus size. "Privacy appears zero times
in 1,453 creatives" tells the ad manager which ad the market leader cannot make.
Check each word separately and report the non-zero ones too, because an angle the
competitor already runs well is an angle the client should not fight on.

### Rules

- **Every link resolves to one creative.** `facebook.com/ads/library/?id=<adArchiveId>`
  for a Meta ad, the video URL for an organic post. A link to a search page is not
  a swipe file.
- **Pull the whole library, not the window.** What survived six months of the
  competitor's budget is the point. A creative that launched yesterday has proved
  nothing, however new it is.
- **Never call a trend off the last two days.** Ad libraries index the newest days
  late, so yesterday always looks like a collapse.
- **Label who each row is for.** Creator-fronted and brand-made ads go to different
  people. When a competitor's creator ads disappear from the library, those creators
  are free, and that belongs in the week bullets as an action.
- **Never print a raw dataset column name, an actor name or a credit limit.**

## 6. What to include and what to drop

Read everything in the window. Publish the top three to five per table.

Include:
- The strongest posts in the window that name the competitor and express a complaint, a doubt, a comparison, a question about buying, or a switch. Strongest means the reader can act on it today and the evidence is stated rather than inferred.
- Praise posts with real reach, or that show something new (a feature shipped fast, a new market, the competitor's staff posting).
- Reviews on G2, the app stores or Trustpilot in the window, quoted from the "dislike" box.
- Competitor launches and open-source clones, because their comment threads are full of the client's audience.
- Posts by the competitor's own team, because they show where the team is and isn't paying attention.

Drop:
- Anything outside the top three to five for its table. This is the cut that does the most work. A real, correct, well-sourced row is still dropped if four rows beat it.
- Rows whose advice cell is "not worth chasing" or "this segment is shut". If there is nothing to do, there is nothing to print. Note it in the client README instead.
- The same person or post in two sections. Pick the table where the reader acts and leave it there.
- Off-topic hits (same name, different thing). Foreign-language threads that don't mention the competitor in the body.
- Deal-resale and spam listings, unless the pattern itself is the story (put it in section 2 as one row).
- Astroturfing. Templated posts from new accounts are not mentions. Call the pattern out once in section 5 and don't list the posts.
- Posts already listed yesterday, unless the thread grew enough to matter again.
- Anything from before the two-day window, unless it's the biggest thread of the week and still growing. Mark the date honestly.

## 7. Anonymising for a public sample

When a daily report becomes a public sample:
- Subtitle becomes "For the client, [date]".
- "What [reader] can do" becomes "What you can do".
- Every mention of the client or the reader in the advice cells is rewritten in the second person. "Pitch the Cloudless iOS app" becomes "Pitch your iOS app". "Cloudless is unlimited on all three" becomes "you're unlimited on all three".
- Check with `grep -i` for the client name, the product name and the reader's first name. Zero hits.

## 8. Data sources and how to pull them

Run all pulls at once, then poll. Total time should be about 30 minutes.

| Source | Tool | Notes |
|---|---|---|
| X | Apify `scraper_one/x-posts-search` | Query the brand name, one-word spelling and handle. `timeWindowHours: 48`. Run `latest` and `top` both, since `latest` caps at 100 and fills up on a busy day. The actor ignores `since:`/`until:` and returns no view or follower counts, so Reach is likes, replies and reposts. |
| Reddit | Apify `harshmaur/reddit-scraper` | Exact brand name, posts and comments, `searchSort: "new"`, `postedAfter` two days ago. Drop anything that doesn't mention the competitor in the title or body. |
| LinkedIn | Apify `harvestapi/linkedin-post-search` | Brand name, `postedLimit: "week"`, sort by date. |
| Meta ads | Apify `apify/facebook-ads-scraper` | `startUrls` with the competitor's ad-library page URL and `resultsLimit` above the page's total. Run it **twice**, once with `active_status=active` and once with `active_status=all`, because only the second returns finished creatives and only the first carries the low-impression flag. Project `adArchiveId,startDateFormatted,endDateFormatted,isActive,snapshot.displayFormat,snapshot.title,snapshot.body.text,snapshot.pageName,snapshot.brandedContent.pageName,collationCount,impressionsWithIndex.impressionsText,snapshot.linkUrl`. There is no `spend`, `reachEstimate` or `totalActiveTime` outside the EU, so lifespan is `endDate` minus `startDate`. Link each ad as `facebook.com/ads/library/?id=<adArchiveId>`. A low `resultsLimit` silently returns only the newest days and undercounts everything. The `start_date` URL filter is by impression date, not launch date, so don't use it. |
| TikTok ads | Apify `lexis-solutions/tiktok-ads-scraper` or `data_xplorer/tiktok-ads-scraper` | Search the competitor twice, by `advertiserName` and by brand keyword. The library covers the EEA and the UK only, so a zero result rules out European spend and nothing else. Say that in the row. The keyword search is the one that pays: it returns rival advertisers who bought the competitor's name, which is a list of who else is hunting the same customers. |
| Reviews | G2, App Store, Trustpilot | Read every review in the window. Quote the "dislike" box. |
| TikTok, YouTube | Apify search scrapers | Only if the client's README says so. Plays are Reach. |
| Open source repositories | GitHub REST API through `gh`, free on the user's token | Two searches. `search/commits` with `q=<competitor> committer-date:>=<two days ago>` finds who touched it today, and returns mostly small personal repositories. `search/code` for `api.<competitor>.com`, `<COMPETITOR>_API_KEY` and the SDK package name finds who runs it at all, which is the search that surfaces the big projects, because a large repository does not commit to its speech layer every week. Run both. Code search returns no star counts, so collect `repository.full_name`, then call `repos/{full}` for stars, forks and `pushed_at`, and sort. Rate limits bind: 30 requests a minute on search, 10 on code search, and the secondary limiter rejects bursts even when `rate_limit` reports quota left, so retry on the 403 with a backoff instead of trusting the quota reading. |

Fetch results with `get-dataset-items`, projecting only the fields you need. Large results get saved to a file. Filter with Python, don't read everything.

Things that go wrong: Apify has a monthly cap and every call fails when it's hit. The connector then has to be reinstalled and the session restarted. Reddit returns off-topic hits. Watch for astroturfing.

## 9. Writing style

Everything from the weekly guidance applies (plain words, straightforward, short, no semicolons, no em dashes, no figurative phrases, no hedging, no character judgments). On top of that, for the daily:

**It's a to-do list, not an essay.** The reader is going to open this on their phone, skim the three moves, and start replying. Every "What [reader] can do" cell must be actionable in under a minute of reading.

**The whole report is a five to ten minute read.** That is roughly 1,200 to 2,000 words including the tables. Count them before you send. Going over means the action cells have turned into paragraphs, which is the failure this format is built to avoid: the reader stops reading and the whole day's research is wasted. Cut the reasoning, keep the instruction. Justification belongs in the weekly.

**Keep the poster's words.** The post cell is a quote, not a summary. "Why is Wispr flow so shit these days?" stays as written. The reader needs to know what they're replying to.

**Tell them what to say.** Not "engage with this user". Say "Reply: free, no word limit." Say "Reply in French." Say "A 20-second video wins this thread." Give the line, or the shape of the line.

**Tell them when to leave it.** "Not worth chasing." "Competitor, don't pitch." "Soft target for a friendly reply." Saving the reader's time is part of the job.

**Numbers in the preview text.** The email preview line is counts: "24 complaints to reply to, 19 people shopping around, 114 new ads." That's what makes the reader open it.

**Same length every day.** Three to five rows a table, three moves, one takeaway, five bullets, one sources line. The report is the same size whether the day was busy or quiet, because a busy day means a higher bar for a row, not a longer table. The reader should know exactly how long it takes to read.

## 10. Email setup

- Broadcast draft in Resend, never a direct send. A human approves every send.
- From `research415 <reports@415brand.com>`. Subject "[Competitor] daily brief, [Mon D]". Preview text is the counts.
- All CSS inlined. Gmail and Outlook strip `<style>`. Tables become `<table width="100%" cellpadding="6" cellspacing="0" border="0">` with `valign="top"` and a border style on every cell. Drop `class`, `target`, `rel`. Keep it under 55KB. Include the unsubscribe line and a plain-text version.
- Confirm the broadcast status is `draft`, then hand over the preview link.

## 11. Before you finish

- The report is 1,200 to 2,000 words. Count them. No "What [reader] can do" cell is over twenty-five words.
- Every table is three to five rows. Count them. If one is longer, cut to the best five and move the rest to the client README.
- Every row in the ad section opens one specific creative, quotes its hook word for word, states the evidence it worked, and ends on an instruction someone can act on. No row is a link to a search page.
- The negative search ran and its corpus size is stated.
- Every row links to its source. Every date is in the window or honestly marked.
- **No small print.** No footer line, no sources or methodology paragraph, no caveat
  about what a tool could not reach. If a number needs a caveat to be true, either
  say the caveat inside the sentence in the client's own language or cut the number.
  The reader wants a to-do list, not a legal notice.
- Sources go at the end of the sentence or cell they support, never mid-sentence. Same rule as the weekly: the reader should never have to read around a citation.
- Cite the primary source, never the tool that fetched it. The pill for an X post is "X", not "X via Apify". Never name Apify, an actor, a scraper, a session or a credit limit anywhere a client can read it.
- No methodology paragraph. If a source came back empty, say what is missing and what the number rests on instead, in one clause next to the number. Why our tooling failed is our problem, not the reader's.
- No post appears twice. Nothing from yesterday's report reappears unless the thread grew.
- The three moves are the three best rows, and they are in the tables too.
- Every "What [reader] can do" cell says what to do or says to skip it. None ends on a description.
- No semicolons, no em dashes, no figurative phrases. Search the file.
- Render it once and read it on a phone-width window. If it doesn't read as a to-do list, it isn't finished.
- Note what to follow up on tomorrow at the bottom of the client README.
