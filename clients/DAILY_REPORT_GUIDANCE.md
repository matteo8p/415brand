# How to write a daily report

This is the skill for the research415 daily brief. Read it fully before starting a report. The reference example is `clients/cloudless.so/reports/08-27-2026.html`, also rendered as a sample at `/samples/wispr-daily` (`webapp/app/samples/briefs/wispr-daily.ts`). The client-specific workflow (actors, page IDs, email setup) lives in `clients/<client>/README.md`.

A daily report has one job: **give the client the posts about the competitor from the last two days that they can reply to, and tell them what to say.** Everything in it serves that. If a line doesn't help the client reply to someone or understand what the competitor did today, cut it.

The weekly report is analysis. The daily report is a to-do list.

---

## 1. Before you write

1. Read `clients/<client>/README.md` for the client, the competitor, who the reader is, the Apify actors and inputs, the Meta Ad Library page ID, and the email setup.
2. Read yesterday's report. Don't repeat posts already listed. Note anything you said to follow up on.
3. Pull the data (section 7). The window is the last two days, dated for the day the report is sent.

## 2. Output

- `clients/<client>/reports/<MM-DD-YYYY>.html`, built from `reports/build_report.py` (edit the lists, run it). Same look as the weekly report: `.analysis` CSS, Wikipedia-style tables, blue links, green `.why` box.
- An email-safe copy, `<MM-DD-YYYY>.email.html`, with all CSS inlined, set up as a Resend broadcast **draft**. A human sends it. Never send directly.
- If the report will be used as a public sample, a copy in `webapp/app/samples/briefs/` with the client's name and the reader's name removed (see section 6).

## 3. Structure

Fixed order. Six numbered sections plus a heading block.

**Title:** "[Competitor] daily brief". **Subtitle:** "For [reader] at [client], [Month D, YYYY]". Nothing else in the subtitle.

**Contents box** listing the six sections.

**Today's three moves.** A green `.why` box, one paragraph, starting "**Today's three moves:**". The three highest-value replies, numbered (1) (2) (3), each with the post linked. These are the three things the reader should do if they do nothing else. Pick them by: a thread with many people asking what to switch to, the biggest complaint thread in the competitor's own community, and the fresh posts with zero replies where the reader can be the only answer.

Then the sections:

1. **People complaining about [competitor].** The reply targets. Table: Where | Date | Post | Reach | What [reader] can do. Fresh, specific complaints with zero replies first. Being the only answer beats being one of twenty.
2. **People shopping around or on the fence.** Comparisons, "what should I use", people trying it publicly, competitor launches that drew an audience the client wants. Same columns.
3. **People happy with [competitor].** No reply. This shows what the competitor's users like, where it is spending, and where its team does and doesn't show up. Last column is "Why it matters" instead of "What [reader] can do".
4. **New [competitor] ads.** A short stats table (new ads launched in the window, by theme, by who made them, how many Meta already marks low-impression, how many mention the client's strengths, how many mention the thing customers complain about). Then a table of the notable new creatives: Launched | Advertiser | Headline (linked to the Ad Library) | What the ad says. Then one `.why` paragraph starting "**Takeaway:**".
5. **What happened this week.** Five short bullets. What changed, who launched what, which complaint is growing, where the competitor's team is and isn't posting. Follow-ups from yesterday go here.
6. **Sources.** One grey `.note` line: which searches, which tools, when pulled, what "Reach" means. Every row links to its source, so this stays short.

No explanatory grey text under section headings. The tables speak for themselves.

## 4. How a table row is built

Every row is one post. Five cells.

- **Where.** Platform and account, with follower count if the tool gives it. "X, @michellezfr". "Reddit, r/WisprFlow". "LinkedIn, Artem Vysotsky". "G2, a reviewer at a law firm". Add "(FR)" or similar if the post isn't in English.
- **Date.** "Aug 25". Nothing else.
- **Post.** The post text, shortened to the part that matters, linked to the original. Keep the poster's own words, including typos and profanity. If it's in another language, quote it and add a translation in brackets. Never paraphrase into marketing language.
- **Reach.** Likes, replies, reposts, upvotes, comments, plays, as the tool reports them at pull time. "5 likes, 1 reply". "11 upvotes, 18 comments". "0 likes, no replies yet" is a feature, not a gap. For reviews: "5-star review, 'dislike' box".
- **What [reader] can do.** One or two sentences. Plain words. What the post is really saying, then what the reader should reply with. Lean on whichever part of the client's pitch matches the complaint. Examples from the reference report:
  - "Lost a 6-minute dictation, already shopping. Reply before she settles on Aqua."
  - "Paying user asking if Wispr got worse. No one has answered. Be the first reply."
  - "iPhone free tier is 1,000 words. Reply in French: iOS, free, no cap."
  - "Already left for an Indian-language tool. Not worth chasing."
  - "Competitor, don't pitch. But mixed-language speech is a gap several people raised this week. If Cloudless handles it, say so."

  Say when *not* to reply. Say when to reply in another language. Say when a video would beat a text reply. Never claim a product detail you haven't confirmed. Write "if [client] does X, say so."

Rank rows within each section by reach, except that fresh complaints with zero replies go first in section 1.

## 5. What to include and what to drop

Include:
- Every post in the window that names the competitor and expresses a complaint, a doubt, a comparison, a question about buying, or a switch.
- Praise posts with real reach, or that show something new (a feature shipped fast, a new market, the competitor's staff posting).
- Reviews on G2, the app stores or Trustpilot in the window, quoted from the "dislike" box.
- Competitor launches and open-source clones, because their comment threads are full of the client's audience.
- Posts by the competitor's own team, because they show where the team is and isn't paying attention.

Drop:
- Off-topic hits (same name, different thing). Foreign-language threads that don't mention the competitor in the body.
- Deal-resale and spam listings, unless the pattern itself is the story (put it in section 2 as one row).
- Astroturfing. Templated posts from new accounts are not mentions. Call the pattern out once in section 5 and don't list the posts.
- Posts already listed yesterday, unless the thread grew enough to matter again.
- Anything from before the two-day window, unless it's the biggest thread of the week and still growing. Mark the date honestly.

## 6. Anonymising for a public sample

When a daily report becomes a public sample:
- Subtitle becomes "For the client, [date]".
- "What [reader] can do" becomes "What you can do".
- Every mention of the client or the reader in the advice cells is rewritten in the second person. "Pitch the Cloudless iOS app" becomes "Pitch your iOS app". "Cloudless is unlimited on all three" becomes "you're unlimited on all three".
- Check with `grep -i` for the client name, the product name and the reader's first name. Zero hits.

## 7. Data sources and how to pull them

Run all pulls at once, then poll. Total time should be about 30 minutes.

| Source | Tool | Notes |
|---|---|---|
| X | Apify `scraper_one/x-posts-search` | Query the brand name, one-word spelling and handle. `timeWindowHours: 48`. Run `latest` and `top` both, since `latest` caps at 100 and fills up on a busy day. The actor ignores `since:`/`until:` and returns no view or follower counts, so Reach is likes, replies and reposts. |
| Reddit | Apify `harshmaur/reddit-scraper` | Exact brand name, posts and comments, `searchSort: "new"`, `postedAfter` two days ago. Drop anything that doesn't mention the competitor in the title or body. |
| LinkedIn | Apify `harvestapi/linkedin-post-search` | Brand name, `postedLimit: "week"`, sort by date. |
| Meta ads | Meta Ad Library in the browser pane | The competitor's page ID, sort newest first, scroll until you pass the window. Parse `document.body.innerText` for Library ID, "Started running on", advertiser, copy, headline, "Low impression count". Link each ad as `facebook.com/ads/library/?id=<Library ID>`. The `start_date` URL filter is by impression date, not launch date, so don't use it. |
| Reviews | G2, App Store, Trustpilot | Read every review in the window. Quote the "dislike" box. |
| TikTok, YouTube | Apify search scrapers | Only if the client's README says so. Plays are Reach. |

Fetch results with `get-dataset-items`, projecting only the fields you need. Large results get saved to a file. Filter with Python, don't read everything.

Things that go wrong: Apify has a monthly cap and every call fails when it's hit. The connector then has to be reinstalled and the session restarted. Reddit returns off-topic hits. Watch for astroturfing.

## 8. Writing style

Everything from the weekly guidance applies (plain words, straightforward, short, no semicolons, no em dashes, no figurative phrases, no hedging, no character judgments). On top of that, for the daily:

**It's a to-do list, not an essay.** The reader is going to open this on their phone, skim the three moves, and start replying. Every "What [reader] can do" cell must be actionable in under a minute of reading.

**Keep the poster's words.** The post cell is a quote, not a summary. "Why is Wispr flow so shit these days?" stays as written. The reader needs to know what they're replying to.

**Tell them what to say.** Not "engage with this user". Say "Reply: free, no word limit." Say "Reply in French." Say "A 20-second video wins this thread." Give the line, or the shape of the line.

**Tell them when to leave it.** "Not worth chasing." "Competitor, don't pitch." "Soft target for a friendly reply." Saving the reader's time is part of the job.

**Numbers in the preview text.** The email preview line is counts: "24 complaints to reply to, 19 people shopping around, 114 new ads." That's what makes the reader open it.

**Same length every day.** Tables as long as the data, but the three moves, the takeaway, the five bullets and the sources line stay the same size. The reader should know exactly how long it takes to read.

## 9. Email setup

- Broadcast draft in Resend, never a direct send. A human approves every send.
- From `research415 <reports@415brand.com>`. Subject "[Competitor] daily brief, [Mon D]". Preview text is the counts.
- All CSS inlined. Gmail and Outlook strip `<style>`. Tables become `<table width="100%" cellpadding="6" cellspacing="0" border="0">` with `valign="top"` and a border style on every cell. Drop `class`, `target`, `rel`. Keep it under 55KB. Include the unsubscribe line and a plain-text version.
- Confirm the broadcast status is `draft`, then hand over the preview link.

## 10. Before you finish

- Every row links to its source. Every date is in the window or honestly marked.
- No post appears twice. Nothing from yesterday's report reappears unless the thread grew.
- The three moves are the three best rows, and they are in the tables too.
- Every "What [reader] can do" cell says what to do or says to skip it. None ends on a description.
- No semicolons, no em dashes, no figurative phrases. Search the file.
- Render it once and read it on a phone-width window. If it doesn't read as a to-do list, it isn't finished.
- Note what to follow up on tomorrow at the bottom of the client README.
