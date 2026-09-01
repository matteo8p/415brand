# research415

Matt's competitive brand and market analysis service for early-stage startups. Every morning he reads every public thread, review and post about a client and its competitors, then sends one written report by email. AI agents do the research. Matt reviews and sends. Nothing AI-written reaches a client without a human reading it, and no email is ever sent by an agent.

Two products: a **daily brief** (a to-do list of posts to reply to and what to say, 1,200 to 2,000 words) and a **weekly brief** (analysis of one competitor with three or four recommended actions, 8,000 to 10,000 words). Both are written for a founder on a phone: plain words, every claim linked, every finding ending on what to do and what the client gets.

## Running a report

Say "run the daily for OpenTag" or "run the weekly for Cloudless" and follow the matching skill. Each one is self-contained and names the other skills it uses.

| Ask | Skill |
|---|---|
| a daily brief | `.claude/skills/daily-report/SKILL.md` |
| a weekly brief | `.claude/skills/weekly-report/SKILL.md` |
| a lead sheet | `.claude/skills/find-leads/SKILL.md` |
| who pays a competitor | `.claude/skills/competitor-customers/SKILL.md` |
| the ads section | `.claude/skills/ad-swipe-file/SKILL.md` |
| any data pull | `.claude/skills/research-pulls/SKILL.md` |
| the report JSON | `.claude/skills/brief-format/SKILL.md` |
| how to write | `.claude/skills/report-style/SKILL.md` |
| html, email, Resend draft, run log | `.claude/skills/publish-report/SKILL.md` |
| a new client or prospect | `.claude/skills/new-client/SKILL.md` |

Extra instructions in the request ("focus on Hermes today", "Tim wants the influencer posts back") override the defaults. Apply them and record them in the client's `NOTES.md`.

## Where things are

```
clients/<slug>/          one folder per client. Read CLIENT.md first, then NOTES.md, IGNORE_RULES.md, RUNLOG.md.
  CLIENT.md              standing config: readers, report shape, do-not-pitch, exact pulls, email segment, conflicts. Frontmatter is machine-read.
  NOTES.md               client requests and Matt's rulings that change the next report. Open items apply once, Standing always.
  IGNORE_RULES.md        the silent filter. Dropped posts are never shown to the reader.
  RUNLOG.md              per-run history, newest first: found, seen but not sent, follow-ups, tooling.
  research/              the client overview, competitor dossiers, prospect research. Internal, tool names allowed.
  reports/               built deliverables: <kind>-<MM-DD-YYYY>.html, .email.html, .email.txt, .broadcast.json
  leads/                 seen.jsonl and dated lead sheets, where the client uses them
webapp/reports/<slug>/<kind>-<MM-DD-YYYY>.json
                         the report itself, one JSON file, the single source of truth. Renders at /analysis/<slug>/<kind>-<MM-DD-YYYY>.
webapp/app/samples/      the marketing site's public sample reports and the renderer (ui.tsx, charts.tsx, markup.tsx, analysis.css, briefs/types.ts)
tools/report.py          new, check, last, html, email, draft, build. Run from the repo root.
ops/                     research415's own: RESEND.md (segments, from address), INTEGRATIONS.md, OUTREACH_TARGETS.md
.env                     RESEND_API_KEY. Gitignored. Never commit a key anywhere else.
```

Client slugs: `opentag`, `cloudless`, `sprag`, `aquavoice`, `adapt` (live), `goody`, `experientiallabs`, `ref` (prospects). The slug is the folder, the URL segment and the reports directory. `python3 tools/report.py last <slug>` finds the newest report.

## Rules that never bend

- **No agent sends an email.** Every send is a Resend broadcast draft that a human sends from the dashboard. `tools/report.py draft` has no send path. Never use the General segment.
- **Never name a tool in anything a client reads.** Not Apify, an actor, a scraper, Firecrawl, a session, a credit limit. Cite the source: "X", "Similarweb", "Meta Ad Library".
- **Public sources only.** No logged-in scraping, no cookies, no login walls. Every claim links to where it came from.
- **One client's research never crosses into another's deliverable.** Conflicts and rulings are in each `CLIENT.md`. Cloudless and Aqua Voice share a competitor with a hard wall. Adapt and OpenTag are direct competitors.
- **The reader's outcome comes first.** Plain words a founder outside the industry understands. Decided advice, never hedged. Quotes verbatim. Every table three to five rows. Every finding ends on what to do. No methodology, no caveat wall, no small print. No em dashes, no semicolons.
- **Read `NOTES.md` before writing.** The client's own requests beat every default in the skills.
- **Never claim a client product detail that is not in their folder.** Write "if [client] does X, say so."
- **Run `python3 tools/report.py check` before calling any report finished**, and read every warning.

## Site

`webapp/` is Next.js 16 with pnpm. `pnpm dev` for a local server, `pnpm typecheck`, `pnpm build` (prints every report page it generated). Reports need no code change: add the JSON, the dynamic route at `app/analysis/[client]/[slug]/page.tsx` picks it up. Chrome.app is used for the HTML export.
