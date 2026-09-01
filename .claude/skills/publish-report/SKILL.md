---
name: publish-report
description: Turn a finished report JSON into the deliverables. Validates it, exports the archive HTML, builds the email, creates the Resend broadcast draft (never sends), and writes the run log entry. Use after the writing is done for any daily, weekly or leads report.
---

# Publishing a report

One tool does all of it: `tools/report.py`. Run it from the repo root. It reads `webapp/reports/<client>/<slug>.json`, the client's `clients/<client>/CLIENT.md` frontmatter, and writes into `clients/<client>/reports/`.

```
python3 tools/report.py check  <client> <slug>            # errors and warnings, exit 1 on errors
python3 tools/report.py html   <client> <slug>            # clients/<client>/reports/<slug>.html
python3 tools/report.py email  <client> <slug>            # <slug>.email.html and <slug>.email.txt
python3 tools/report.py draft  <client> <slug>            # dry run: shows what the Resend draft would be
python3 tools/report.py draft  <client> <slug> --create   # creates the broadcast DRAFT and verifies it
python3 tools/report.py build  <client> <slug>            # check + html + email in one go
python3 tools/report.py last   <client> [kind]            # newest report paths, for reading yesterday's
```

## 1. Check

`check` stops on errors (unknown block, unresolved pill, wrong cell count, leftover TODO) and prints warnings for every house-style rule it can measure. Read them all. Fix or justify each warning before going on. The rules are in `.claude/skills/report-style/SKILL.md`.

## 2. The page

The page renders at `/analysis/<client>/<slug>` from the JSON, nothing else to add. To look at it locally, run `pnpm dev` in `webapp/` and open `http://localhost:3000/analysis/<client>/<slug>`. Read it once at phone width. If it does not read as a to-do list (daily) or as scorecard, actions, claims (weekly), it is not finished.

The live URL on `415brand.com` exists once the JSON is committed and the site has deployed. The email links to the live URL, so commit the report JSON in the same change as the built files. Run `pnpm build` in `webapp/` when in doubt; it prints every report path it generated.

## 3. The archive HTML

`html` renders the page in headless Chrome (charts included), extracts the report, inlines the stylesheet and writes a standalone file. It starts the dev server if one is not running and stops it afterwards. Chrome.app must be installed. Without it the export runs from a plain fetch and the charts are blank, which the tool says out loud.

## 4. The email

`email` builds a copy with every style inline, tables only, no `<style>` block, no `class`, no `target`, because Gmail and Outlook strip them. It uses the exact colours and sizes of the page so the two match. It includes:

- the hidden preview line from `email.preview`
- a "Read the full report in your browser" link to the live URL
- the contents box as plain numbered text, because in-page anchors do not navigate in webmail
- the `{{{RESEND_UNSUBSCRIBE_URL}}}` token, which Resend requires
- a plain-text twin, `<slug>.email.txt`

Mode is picked from `kind`. A daily or leads report is sent in full. A weekly is sent as a summary: the recommended actions, the reply table, the five key-finding claims, and the link, because the full weekly runs past Gmail's clip size. Override with `--mode full` or `--mode summary`.

The tool warns over 55KB and refuses over 100KB. Gmail clips at about 102KB. If a daily goes over, the tables have grown past five rows or the advice cells have turned into paragraphs. Cut content, not styling.

Open the `.email.html` in a browser once. Check the first header cell of every table and the contents box, the two places the old builders used to mangle.

## 5. The Resend draft

Every send is a Resend **broadcast draft**. A human opens it in the Resend dashboard and presses send. The tool never sends and has no code path that could.

`draft` reads:

- `resend_segment` and `reply_to` from the client's `CLIENT.md` frontmatter. A client with `resend_segment: none` is a prospect and gets no draft.
- `email.subject` and `email.preview` from the report JSON.
- `RESEND_API_KEY` from the environment or from `.env` at the repo root. The key is in `.env` and nowhere else. `.env` is gitignored.

Dry run first. It prints the name, segment, from, reply-to, subject, preview and the md5 of the HTML. Then `--create`. The tool posts the broadcast, reads it back, confirms `status: draft` and `sent_at: null`, confirms the stored HTML is byte-identical to the file, writes `<slug>.broadcast.json` with the id, and prints `https://resend.com/broadcasts/<id>`. If the md5 differs or the status is not draft, it says so. Do not hand over a link the tool did not verify.

Before creating, confirm who is in the segment when in doubt (the Resend connector's `list-contacts` on the segment id, or the dashboard). Segments and the from address are in `ops/RESEND.md`. Never use the General segment.

If the API key is rejected, the Resend MCP connector can create the draft instead: `create-broadcast` with the same fields, HTML pasted from the file. Say so in the run log, and get the key replaced.

## 6. The run log

Append the entry at the top of `clients/<client>/RUNLOG.md`. Create the file with the standard header if it does not exist:

```
## YYYY-MM-DD daily (window Mon D to Mon D)
**Output.** webapp/reports/<client>/<slug>.json, https://415brand.com/analysis/<client>/<slug>, clients/<client>/reports/<slug>.email.html, Resend draft <id> (status draft).
**Found.** three to eight bullets, the things the next run needs to know
**Seen but not sent.** every real row that lost the cut, with the reason, so tomorrow can promote one
**Follow up next run.** open threads, unanswered posts to re-check, promised checks
**Tooling.** what broke, what worked, in one to five bullets. Anything general goes into .claude/skills/research-pulls/SKILL.md too.
```

Then `clients/<client>/NOTES.md` (create it if missing, with the Open, Standing and Done headings): record every dated note and Slack request that was applied in this run, with its date and who said it, under Standing if it keeps applying or Done if it was a one-off. Leave Matt's dated note files where they are, they are his. If the client gave a new ignore rule, add it to `IGNORE_RULES.md` as proposed or confirmed.

If the client keeps a `leads/seen.jsonl`, append every row sent.

## 7. What to hand back

One short message:

- the live URL and the archive path
- the Resend preview link, with "draft, not sent"
- the three moves in one line each
- a Slack message for Matt to post in the client's channel, two lines: the link, and the one row to look at first. Matt posts it. The agent never posts in a client's channel.
- anything that needs a human before send: rows whose value decays overnight ("nobody has replied yet" rows to re-open), a number to confirm from an admin console, an open question for the client

Then stop. Matt sends.
