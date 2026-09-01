---
name: new-client
description: Set up a new client or prospect folder under clients/ so the daily and weekly skills can run for them. Researches the company and its competitors from public sources, writes CLIENT.md (config the tools read), NOTES.md, RUNLOG.md, IGNORE_RULES.md and the research dossiers, checks for conflicts with existing clients, and sets up the email segment. Use when asked to onboard, add, initialize or research a new client or prospect.
---

# Onboarding a client

A client folder is the whole memory the report skills have about a client. When it is complete, "run the daily for <client>" works one-shot. When it is thin, every report starts from zero.

Time: half a day for the research, an hour for the files.

## 1. Pick the slug

Lowercase, letters and digits, no TLD: `opentag`, `cloudless`, `aquavoice`, `sprag`, `goody`. The slug is the folder name, the URL segment (`/analysis/<slug>/...`), and the report directory name (`webapp/reports/<slug>/`). Do not change it later. Sent emails link to it.

## 2. Check for conflicts first

Read every other `clients/*/CLIENT.md` frontmatter and **Conflicts** section. If the new company sells the same product to the same buyer as an existing client, or is the competitor an existing client's brief is about, stop and write the conflict up before any research: who collides, what the options are (decline, take with disclosure to both, take with a hard wall on reuse of research and on ever naming one to the other). Matt decides. Record the decision in both clients' **Conflicts and confidentiality** sections. Existing rulings: Cloudless and Aqua Voice both track Wispr Flow and Matt cleared both on 2026-08-31 with a no-cross-research rule. Adapt and OpenTag are direct competitors and the notice sits in both folders.

The research about a competitor is public-source and belongs to neither client. One client's reply is never another client's lead.

## 3. Research

Public sources only. Firecrawl `map` the company's site first, then `scrape` the pages that carry facts. Then the competitors. Methods in `research-pulls`.

Write `clients/<slug>/research/<slug>.md`, the business overview, with these sections: research date and sources on the first line, One-liner, Company (a table: legal entity, founders with roles and prior companies, HQ, funding, headcount, contact, compliance), Product, Pricing (a table), Competitive positioning (their comparison pages, every claim noted), Traction signals, Known weaknesses to say plainly, SWOT in three lines each, What the reader cares about for our reports, Where to watch for mentions (the exact handles, subreddits, search strings, and the name-collision list), Site map with the crawl date, Sources. Mark anything resting on one third-party source **[unverified]**.

Write `clients/<slug>/research/competitors.md` for the field, and a separate `research/<competitor>.md` when one competitor dominates and will be the subject of every brief: The short version, a head-to-head table, then one section per competitor (what it is, pricing, where the client wins, where the client loses, what to watch weekly), Cross-cutting reads, What to watch per competitor, Sources.

Both files are internal. Tool names are fine here. Every claim carries a link.

## 4. Write CLIENT.md

The one file the report skills read first. Frontmatter with scalar `key: value` lines only (a Python tool parses it), then eight fixed sections.

```markdown
---
slug: <slug>
client: <Display name>
subject: <The competitor the standard brief is about>
readers: <how the subtitle addresses them, e.g. "Tim at Cloudless", "the OpenTag founders">
cadence: <daily | weekly | daily and weekly>
status: <live | prospect>
site: <https://...>
market: <e.g. United States, English-language reply targets only>
resend_segment: <segment id, or none>
reply_to: matt@415brand.com
slack_channel: <the shared Slack channel id, e.g. C0BTM8JCS4U, or none>
---

## What they sell
Two to four lines.

## Who reads it and what they want
Named readers with roles. Then the priority-ordered list of what the brief must deliver, in the client's own words where possible. This is the list every row is judged against.

## Report shape
How this client's daily and weekly differ from the standard in the daily-report and weekly-report skills: the tables and their order, which optional sections are in or out (open source, "happy with", ads, a country section), the column name for the advice cell ("What Tim can do"), settled table sizes, competitor-first or lead-first, one front or two.

## Do not pitch on
The hard rules: segments the client cannot serve, leads not to send, volume limits ("five good rows beat forty"). Point to IGNORE_RULES.md for the post-level filter.

## Pulls
A table of source | tool | exact inputs (queries under 100 characters, subreddits, handles, page ids, app ids, code-search strings, HN terms). Then the name-collision notes: never search the bare string X, use Y.

## Email
Segment name and id, who is in it, from research415 <reports@415brand.com>, reply-to, subject pattern "[Subject] daily brief, Mon D", preview pattern (the counts), and that a human sends. For a prospect: no segment, nothing sent until they sign, the first deliverable is a sample.

## Conflicts and confidentiality
Cross-client notices and Matt's rulings.

## Open questions for the client
What to ask on the first call, and what changes depending on the answer.
```

Write it tight, 100 to 220 lines, plain words. Facts about how to run this client's brief go here. Nothing about a specific run.

## 5. Write the other three files

Matt's own instructions arrive as dated files in the client folder, `clients/<slug>/<MM-DD-YYYY>.md`, free text. Nothing to set up for that. The three files below are the agent's.

`NOTES.md`:

```markdown
# Notes for the next report

Instructions from the client or from Matt that change how the next report is written. The daily and weekly skills read this file before writing. When an Open item has been applied once and should keep applying, move it to Standing. When it is done for good, move it to Done.

## Open

## Standing

## Done
```

`RUNLOG.md`:

```markdown
# Run log

Newest first. One entry per report sent or built. The daily and weekly skills read the top entry before starting.
```

`IGNORE_RULES.md`: the silent filter. Seed it from the research and from the nearest existing client in the same category (Cloudless's list is the reference), as **Proposed** rows with a reason each, none confirmed. Walk the client through it on the first call. Include the ones every client gets: just subscribed and happy (with the angry-payer exception), deal resale and affiliate posts, astroturf, off-topic name collisions, competitors' own staff, business-school threads, and the segments from **Do not pitch on**. Add a Changelog line.

## 6. Email

For a live client: create a Resend segment named for the slug, add the readers' contacts, and put the segment id in CLIENT.md. Do it through the Resend connector or the dashboard, and confirm the contact list with `list-contacts` before the first draft. Record the segment in `ops/RESEND.md`. Never use the General segment. For a prospect: `resend_segment: none`.

Matt also opens a shared Slack channel per live client, `#research415-<slug>`, and posts the report link there. Put its channel id in `slack_channel`. The report skills read it for the client's requests. Nothing is ever posted there by an agent.

## 7. The first report

For a prospect the first deliverable is a sample used to open the conversation, built as a normal report (usually a weekly, `weekly-report`), anonymised if it will be public: subtitle "For the client, [date]", advice in the second person ("Pitch your iOS app"), and `grep -i` for the client name, product name and reader's first name until there are zero hits. Public samples live in `webapp/app/samples/`, not in `webapp/reports/`.

For a live client the first daily runs on a 30-day window to clear the backlog, then 48 hours. Say in the run log that the backlog is cleared.

Add a prospect to `ops/OUTREACH_TARGETS.md` if it came from there, with the status.

## 8. Before you finish

- `clients/<slug>/` has CLIENT.md, NOTES.md, RUNLOG.md, IGNORE_RULES.md, research/ with at least the overview and the competitor file, and an empty reports/.
- CLIENT.md frontmatter parses: `python3 -c "import sys; sys.path.insert(0,'tools'); import report; print(report.client_config('<slug>'))"`.
- The Pulls table has real queries an agent can run without thinking, and the name-collision list.
- Conflicts checked against every existing client and written down.
- Every research claim has a link, and the unverified ones are marked.
