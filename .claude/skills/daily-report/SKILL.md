---
name: daily-report
description: Run a research415 daily brief for a client end to end. Use when asked to run the daily, "daily report", "daily brief" or "today's brief" for a client (OpenTag, Cloudless, Sprag, Aqua Voice, or any folder under clients/). Reads the client folder, pulls the last two days of mentions and ads, sorts and ranks them, writes the report JSON, builds the HTML and email, drafts the Resend broadcast, and logs the run.
---

# Running a daily brief

A daily has one job: give the reader the posts from the last two days that they can act on today, and tell them what to say. It is a to-do list, not an essay. The weekly is where the analysis lives.

The reader opens it on a phone, reads the three moves, and starts replying. Everything in the report serves that. If a line does not help them reply to someone, contact someone, or understand what the competitor did in the last two days, cut it.

Total time for a run is about an hour. Pulls run in parallel and take twenty to thirty minutes. Writing is the rest.

## 1. Load the client

Read these, in this order, before doing anything else:

1. `clients/<client>/CLIENT.md`. Who they are, who reads it, the report shape for this client, what not to pitch, the exact pulls, the email segment, the Slack channel, the conflicts. The frontmatter has the machine-readable bits.
2. **Every dated note in the client folder**, `clients/<client>/<MM-DD-YYYY>.md`. These are Matt's own words after a call or a meeting ("they really want to focus on creators, I want most of the dailies to focus on that"). Newest wins. A note changes the report shape until a later note or CLIENT.md says otherwise.
3. **The client's Slack channel**, if `slack_channel` is set and the Slack connector is available. Read the channel and every thread since the last run. What the client asked for, what they liked, what they said they acted on, and what they did not act on. A preference stated once in Slack is a standing rule. Never post there. Draft any message for Matt.
4. `clients/<client>/NOTES.md`, if it exists. The standing rulings collected so far and the record of which notes and Slack requests were applied. If it is missing, create it at the end of the run.
5. `clients/<client>/IGNORE_RULES.md`. The silent filter. Dropped posts are never shown to the reader.
6. `clients/<client>/RUNLOG.md`, the top entry, if it exists. What was found last time, the rows that were cut ("Seen but not sent"), and what to follow up. If it is missing, the previous report JSON is the only memory, and the run creates the file.
7. Yesterday's report: `python3 tools/report.py last <client> daily` and read the JSON. Nothing in it reappears today unless the thread grew.
8. `clients/<client>/research/` when a product fact is needed for an advice cell. Never claim a client product detail that is not in there or in CLIENT.md. Write "if [client] does X, say so."

Then read the skills this run uses: `.claude/skills/research-pulls/SKILL.md` (how to pull), `.claude/skills/find-leads/SKILL.md` (what counts as a lead, how to score it), `.claude/skills/ad-swipe-file/SKILL.md` (if the client's shape has an ads or creators section), `.claude/skills/brief-format/SKILL.md` (the JSON), `.claude/skills/report-style/SKILL.md` (how to write), `.claude/skills/publish-report/SKILL.md` (how to ship).

If the request carries extra instructions ("focus on Hermes today", "Tim wants the influencer posts back"), treat them exactly like a dated note: apply them, and write them into NOTES.md with today's date so the next run sees them. When a note, a Slack request and CLIENT.md disagree, the newest instruction wins, and the run log says which one was followed.

If the client folder does not exist or CLIENT.md is missing, stop and run `.claude/skills/new-client/SKILL.md` first.

## 2. Pull

The window is the last two days, and the report is dated for the day it is sent. If the data is pulled the evening before, every row still has to fall inside the two days before the send date, and time-relative wording ("posted a few hours ago") is written so it does not go stale overnight ("nobody has answered it").

Run every pull in the client's Pulls table at once, then poll. Save raw results to the scratchpad and filter with Python. Do not read whole datasets. The per-source instructions, inputs and gotchas are in `research-pulls`. The short version:

- X: brand name, one-word spelling and handle, `latest` and `top` both, 48 hours. Query under 100 characters.
- Reddit: exact brand name, posts and comments, newest first, plus a direct crawl of the competitor's own subreddit.
- LinkedIn: brand name, last week, sorted by date.
- Hacker News: the Algolia API, when the client's buyers are developers.
- Reviews: G2, the app stores, Trustpilot, in the window, quoted from the dislike box.
- Meta Ad Library: the competitor's page, run twice (active, all), the whole library not the window.
- GitHub: commit search and code search, only when the competitor sells an API or SDK.
- TikTok, YouTube: only when CLIENT.md says so.

If a source fails, note it for the run log and keep going. Never mention the failure in the report. Say what is missing in one clause next to the number it affects, if it affects one.

## 3. Sort

Work through everything in the window once.

1. **Kill the noise.** Off-topic name collisions (the name in the title or body, or it is gone). Astroturf clusters (templated posts, new accounts, many subreddits, one 48-hour window: log the pattern once, list none of the posts). Deal resale and affiliate spam. The competitor's own staff (check the bio). Anything on the client's ignore list. This drops 60 to 80% of the raw pull.
2. **Classify what is left.** Complaint about the competitor. Shopping or on the fence (comparisons, "what should I use", trying it in public). Happy with the competitor. Someone asking for exactly what the client sells without knowing it exists. An account that looks like a competitor's customer (for lead-first clients, see `competitor-customers`). An open-source project running the competitor (API clients only). The competitor's own team posting. A launch or a news item.
3. **Dedupe.** Against yesterday's report and the run log's "Seen but not sent". A post already sent stays out unless the thread grew enough to matter again. A cut row from yesterday gets promoted if it grew.
4. **Rank inside each table.** Fresh, specific complaints with zero replies first, because being the only answer beats being one of twenty. Then by what the reader can win, not by reach: a named company with a written-down dependency on the competitor beats a viral thread nobody can act on. Then by reach.
5. **Cut to three to five per table.** This is the cut that does the most work. A real, correct, well-sourced row is still dropped if four rows beat it. Write every cut row and its reason into the run log's "Seen but not sent".
6. **Apply the market rule.** Reply targets must be in the client's market and language (CLIENT.md frontmatter `market`). A great post in the wrong language is intel for the week bullets, not a row.

## 4. Write

Scaffold the file: `python3 tools/report.py new <client> daily --date MM-DD-YYYY`. It fills the title, subtitle and the default sections. Rearrange the sections to match the client's **Report shape** in CLIENT.md. The standard shape, which most clients vary:

**Three moves.** One green `why` block at the top: "**Today's three moves:** (1) ... (2) ... (3) ...", each with its post linked. The three highest-value things the reader should do if they do nothing else. Pick from: a thread with many people asking what to switch to, the biggest complaint thread in the competitor's own community, the fresh posts with zero replies where the reader can be the only answer, and anything the client has to check today (a date, a number, a console).

**Tables.** Three to five rows each, unless CLIENT.md says the client wants more (OpenTag's Tony works every row and asked for more, not fewer). Five cells per row:

| Cell | Rule |
|---|---|
| Where | Platform and account, follower count if the tool gave one. "X, @michellezfr". "Reddit, r/WisprFlow". "G2, a reviewer at a law firm". Add "(FR)" for a post not in English. |
| Date | "Aug 25". Nothing else. |
| Post | The poster's own words, trimmed to the part that matters, linked to the original. Typos, profanity and lowercase stay. Other languages quoted as written with a translation in brackets. |
| Reach | As the tool reported it at pull time. "5 likes, 1 reply". "11 upvotes, 18 comments". "0 likes, no replies" is a feature. For reviews: "5-star review, dislike box". If a tool returns no reach, drop the column rather than filling it with "not captured". |
| What [reader] can do | Twenty words, twenty-five at the outside. Lead with the verb, then the one fact that makes it land. Say what to say. Say when not to reply. Say when to reply in another language, or when a video beats text. |

The usual tables, in the client's order: people complaining about the competitor (the reply targets), people shopping around or on the fence, people happy with the competitor (no reply, last column is "Why it matters", only rows the reader can do something with), and for lead-first clients a table of accounts that look like a competitor's customer (Who | Where | The signal | What [client] can do) or open-source projects running the competitor (Project | Stars | The dependency | Last push | What [client] can do).

**The swipe file.** One table, three to five examples in total across brand ads, creator ads and organic posts, built from the whole ad library, with the hook quoted word for word and a one-line brief. Then a `why` starting "**Takeaway:**" naming the shape the winners share and the negative search result with its corpus size. The method is `ad-swipe-file`. Only for clients whose competitor runs ads. Never repeat a swipe row on consecutive days.

**The creators table.** For a client whose stated focus is creator content (OpenTag from Sept 1), this is the first and biggest section: which creator posts about the competitors and the category are working, what style each one is (talking head, screen recording, text-on-screen, a bill reveal, a comment-to-get offer), the numbers that show it worked, the hook word for word, and what to emulate. Ranked by engagement rate, not follower count. The method is the creators section of `ad-swipe-file`.

**What happened this week.** Five bullets, each opening with a bold phrase, sources linked inline. What changed, who launched what, which complaint is growing, where the competitor's team is and is not posting, what the client did with yesterday's list and what came back. Follow-ups from yesterday go here. Intel from the wrong market goes here.

No sources section, no footer, no methodology, no grey explanatory text under headings. Every row links to its source, and that is the sourcing.

**Length.** 1,200 to 2,000 words including the tables. The report is the same size on a busy day and a quiet day, because a busy day means a higher bar for a row, not a longer table.

Fill `description` and `email.preview`. The preview is the counts: "5 Wispr complaints to reply to, 5 people shopping around, and the 5 Wispr ads worth copying." The subject is "[Subject] daily brief, Mon D".

Then write like `report-style` says: plain words, decided advice, verbatim quotes, outcome first, no tool names, no hedging, and run its ship checklist.

## 5. Build and hand over

```
python3 tools/report.py check <client> <slug>
python3 tools/report.py build <client> <slug>          # html + email once check is clean
python3 tools/report.py draft <client> <slug>          # dry run, read it
python3 tools/report.py draft <client> <slug> --create # the Resend DRAFT. A human sends.
```

Open the page at phone width and read it as the founder would. Open the email HTML once. Then write the run log entry and update NOTES.md, as `publish-report` describes.

Hand back: the live URL, the archive path, the Resend preview link marked draft, the three moves in one line each, a two-line Slack message for Matt to post in the client's channel (the link and the one thing to look at first), and anything a human should re-check before sending. The rows built on "nobody has answered yet" decay overnight, so name them.

## 6. Before you finish

- Every table is three to five rows. Counted.
- Every advice cell is under twenty-five words and ends on an instruction or on "skip it".
- Every row links to its source. Every date is in the window or honestly marked.
- No post appears twice. Nothing from yesterday reappears unless the thread grew.
- The three moves are the three best rows and they are in the tables too.
- The swipe file rows each open one specific creative, quote the hook verbatim, state the evidence it worked, and end on a brief. The negative search ran and its corpus size is stated.
- No tool is named. No methodology, no footer, no caveat wall. Caveats sit next to their number.
- Every row is in the client's market and language.
- Every dated note and every Slack request since the last run was applied, and NOTES.md records which. The run log has the cut rows and the follow-ups.
- `report.py check` is clean or every warning has a reason.
- Read on a phone-width window. It reads as a to-do list.
