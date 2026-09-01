# research415

We do competitive brand and market analysis for early-stage startups.

**Know what people are saying about your brand and your competitors.** We read every public mention of your brand and theirs. Reddit threads, X and LinkedIn posts, G2, Trustpilot and the app stores, the search terms they rank for, the ads they're running, and the roles they're hiring. You get a written report on what we found and exactly what to do about it.

Landing page: https://www.research415.com/

Hi, I'm Matt. research415 is me. Every morning I read every thread, review and post about you and your competitors, then send you one written report by email or into your Slack.

I run AI agents that help me do deep research. But I still put together the report and offer my human opinions on what to do about it. No AI slop is ever delivered to you. That's why the findings are things a keyword alert app can't find, and why I can personally discuss anything in my report with you.

I started doing this because this was the exact strategy I ran to grow my startup at the early stage to find customers in my ICP.

## What every report delivers

**Leads you should contact.** Your competitors' unhappy customers, who are looking for an alternative and convert at a high rate. People describing your product without knowing it exists, who are already sold and just need to be reached.

**Your brand.** Everything said about you, so a wrong price, a feature people think you lack, or a bug you fixed months ago gets corrected before it spreads. And what's wrong on your own side: out-of-date comparison pages, numbers that no longer match, claims that aren't true.

**Your competitor.** Price changes and what they shipped, the morning it happens. Unannounced edits to their own docs, data policies, plan limits and security pages, which show where they're heading weeks before they announce it. The SEO keywords they rank for and pay for, and the ad campaigns that work for them, so you can copy what works and skip what doesn't.

I work with early-stage startups in two buckets: consumer startups that grow through creators, ads, SEO and brand, and SaaS going up against an established incumbent whose unhappy customers say so in public.

**How we'll work.** Send me your company and I'll do the research. We'll do a $300 two-week trial, fully refundable. If you like the reports, pick daily reports or weekly deep reports.

## Project structure

```
CLAUDE.md          the entrypoint an agent reads first: what this is, where things are, the rules
.claude/skills/    how the work is done. daily-report, weekly-report, research-pulls, find-leads,
                   competitor-customers, ad-swipe-file, brief-format, report-style, publish-report, new-client
clients/<slug>/    one folder per client: CLIENT.md, NOTES.md, IGNORE_RULES.md, RUNLOG.md, research/, reports/
webapp/            the marketing site (Next.js, Convex for lead capture, public samples at /samples)
webapp/reports/    every client report as one JSON file, rendered at /analysis/<client>/<report>
tools/report.py    scaffold, check, export html, build the email, draft the Resend broadcast
ops/               research415's own: email setup, integrations, outreach targets
```

## Running a report

Open Claude Code in this folder and say what you want:

```
run the daily for OpenTag
run the weekly for Cloudless
onboard a new prospect: acme.com, competitor is Bigco
```

The agent reads the client folder, pulls the data, writes the report JSON, builds the HTML and the email, and creates a Resend broadcast draft. Matt reads the report and presses send. The tool never sends.

By hand, after the JSON is written:

```
python3 tools/report.py check  opentag daily-09-02-2026
python3 tools/report.py build  opentag daily-09-02-2026     # html + email
python3 tools/report.py draft  opentag daily-09-02-2026 --create
```

To change how the next report for a client is written, drop a dated note in the client folder, `clients/<slug>/09-02-2026.md`, in plain words: "Met the team today, they want the dailies to focus on creators." The next run applies it. The agent also reads the client's Slack channel for what they asked for since the last report.
