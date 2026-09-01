---
name: brief-format
description: The JSON format every research415 report is written in (daily, weekly, leads), where the file lives, the block types, the inline markup for links and source pills, charts, tables and the scorecard. Read before writing or editing any report JSON under webapp/reports/.
---

# The report format

Every report is one JSON file in the `Brief` shape. The site renders it, the HTML archive is exported from the rendered page, and the email is built from the same file. There is no second copy of the prose anywhere.

- File: `webapp/reports/<client>/<kind>-<MM-DD-YYYY>.json`, for example `webapp/reports/opentag/daily-09-01-2026.json`.
- Page: `https://415brand.com/analysis/<client>/<kind>-<MM-DD-YYYY>` (locally `http://localhost:3000/...`). Add `?expand=1` to open every collapsible.
- Type definition: `webapp/app/samples/briefs/types.ts`. Renderer: `webapp/app/samples/ui.tsx`, `charts.tsx`, `markup.tsx`, `analysis.css`. Do not add block types without changing all of those.
- Scaffold one with `python3 tools/report.py new <client> <daily|weekly|leads> --date MM-DD-YYYY`, then edit. Validate with `python3 tools/report.py check <client> <slug>`.

## Top level

```json
{
  "slug": "opentag-daily-09-01-2026",
  "kind": "daily",
  "title": "Claude Tag daily brief",
  "sub": "For the OpenTag founders, September 1, 2026",
  "subject": "Claude Tag",
  "client": "OpenTag",
  "description": "One or two sentences for the page's meta description. What the reader gets.",
  "email": { "subject": "Claude Tag daily brief, Sep 1", "preview": "3 unanswered Claude Tag bills, 4 people asking what to use, 5 ads to copy." },
  "intro": [ ...blocks above the contents box... ],
  "sections": [ { "id": "complaints", "title": "People complaining about Claude Tag", "blocks": [ ... ] } ],
  "footer": "",
  "sources": { "sw-wispr": { "label": "Similarweb, wisprflow.ai", "href": "https://...", "logo": "similarweb" } }
}
```

- `kind` is `daily`, `weekly` or `leads`. It decides the email layout and which checks run.
- `title` is "[Subject] daily brief", "[Subject] weekly brief: brand & competitive analysis", or "Competitor leads brief". `sub` is "For [readers], [Month D, YYYY]" and nothing else. `readers` comes from the client's `CLIENT.md` frontmatter.
- `subject` and `client` are the display names for the two scorecard columns.
- `email.preview` for a daily is the counts. That line is what makes the reader open it.
- `footer` is empty for a daily. For a weekly it is one short line with the pull date and window and what reach means. Never a methodology paragraph.
- `sources` holds every citation pill once. Prose refers to them as `[[id]]`.

## Inline markup

Every prose string (paragraphs, cells, claims, bullets) supports exactly this:

| Markup | Renders as |
|---|---|
| `**bold**` | bold. Only for the lead-in of a `why` box ("**Today's three moves:**", "**Why it matters for Cloudless:**", "**Takeaway:**") and the bold opener of a week bullet. Never for emphasis inside prose. |
| `[label](https://...)` | a plain link. Every post, ad, job and review in a table is linked this way, on its own words. |
| `[[source-id]]` | a citation pill, defined once in `sources`. |
| `[[source-id\|Short label]]` | the same pill with a shorter label, for table cells and the scorecard. |
| `` `code` `` | monospace. Rare. File names in an open-source table. |

No HTML. No nesting of markup inside markup.

**Pills go at the end.** Collect every source a paragraph draws on, dedupe them, and put them together after the final full stop. Same for a `why`, a `claim` and a table cell. A pill after every sentence makes a good paragraph unreadable. The checker flags pills mid-text.

## Blocks

| type | fields | use |
|---|---|---|
| `p` | `text` | a paragraph |
| `note` | `text` | muted aside. Rare. |
| `why` | `text` | green-ruled callout. The three moves, "Why it matters for [client]", the swipe-file takeaway, a one-paragraph read under a table. |
| `h3` | `text` | a sub-heading inside a section |
| `ul` | `items[]` | bullets. The week bullets. |
| `links` | `items[]` | the Sources section. Pills render as plain links here and may sit inline. |
| `table` | `headers[]`, `rows[][]` | headers are `{ "text": "Date", "w": "7%", "nw": true, "n": true }`. `w` is a width, `nw` keeps cells on one line (dates), `n` right-aligns numbers. The long text column gets no width. Every row has exactly as many cells as headers. |
| `findings` | `style` ("did" or "do"), `items[]` of `{ claim, body[] }` | collapsible claim with evidence under it. "did" is the blue "What happened" list, "do" the green "What [client] should do" list. The Key findings block has no style. |
| `toggle` | `claim`, `body[]` | one collapsible, used for "Full analysis". |
| `fig` | `panels[]` of `{ cap, sub?, chart, legend? }` | one or two charts side by side. |
| `scorecard` | `rows[]` of `{ metric, primary, us, change?, tone?, source? }` | the head-to-head table. `primary` and `us` are short values (under 18 characters), everything else goes in `change` (the notes column). |
| `moves` | `items[]` of `{ action, why, evidence? }`, `collapsed?` | the recommended actions. `evidence` is a section id to link to. Never use `window`. |
| `changes` | `items[]` of `{ text, tone? }` | "what changed since last report" bullets coloured good, bad, neutral. |

## Charts

`chart` inside a `fig` panel:

- `{ "kind": "columns", "rows": [["Jul", 4400000], ["Aug", 4200000]], "fmt": "k", "label": [0, 1], "aria": "..." }` one thing over time. `label` lists the row indexes that get a value printed on them, usually first and last.
- `{ "kind": "rows", "rows": [["Marketing", 5], ["Platform", 5, "other"]], "fmt": "num", "labelAll": true, "aria": "..." }` a ranked list. A third string element is a series token: `primary` (the competitor, blue), `us` (the client, green), `other` (grey). A row may also be `[label, lo, hi]` for a range bar.
- `{ "kind": "share", "rows": [["Price", 48, "neg"], ["Privacy", 14, "pos"]], "aria": "..." }` a percentage split. Tones are `pos`, `neg`, `neu`. Segments under 15% get no label, so a mix with six buckets needs a `rows` chart with `labelAll` in front of it.
- `{ "kind": "lines", "series": [{ "label": "Wispr", "series": "primary", "points": [["Aug 23", 400], ["Aug 30", 890]] }], "fmt": "num", "aria": "..." }` two companies over time.

`fmt` is `num`, `usd`, `k`, `k$` or `pct`. Always fill `aria` with the numbers in a sentence. The email builder flattens every chart into a two-column table, so the caption and the aria text have to carry the point on their own.

## Sources and logos

Each id in `sources` has `label`, `href` and an optional `logo` from this list: semrush, ahrefs, spyfu, similarweb, meta-ad-library, google-ads-transparency, google, google-play, app-store, reddit, x, instagram, tiktok, linkedin, techcrunch, the-next-web, ashby, wispr, cloudless, willow, menlo, postbeam, 20vc, trustpilot, g2, product-hunt, zapier, wikipedia, voibe, dub, craftnote, campaign-india, shashi, zdnet, viktor, adapt, slack, hacker-news, startup-jobs, ziprecruiter, latka, next-play, fortune, forbes, venturebeat, tasklet, distill, thisandthat, saascrmreview, chiefmarketingdad, efficient-app, youtube, builtin, rippling, deepgram, sprag, artificial-analysis, vapi, livekit, pipecat, aws, github, cartesia, soniox, genesys, assemblyai, openrouter, experiential, bloomberg, ycombinator, anthropic, opentag, product-hunt-opentag, goody, snappy, sendoso, capterra, calcalist, apify.

To add a logo, append a 20x20 `<symbol id="lg-yourid">` to `SPRITE` and the id to `LOGO_IDS` in `webapp/app/samples/logos.tsx`. A source without a logo is fine.

Label the source, never the tool that fetched it. "X, @handle", "Similarweb, wisprflow.ai", "Meta Ad Library, Wispr Flow", "G2, Deepgram reviews". Never "X via Apify".

## Daily shape

```
intro:     one `why` block, "**Today's three moves:** (1) ... (2) ... (3) ...", each move with the post linked
sections:  three to five tables plus the week bullets, in the order the client's CLIENT.md sets
           each post table: Where | Date | Post | Reach | What [reader] can do  (3 to 5 rows)
           the swipe file:  The example | Why we know it works | The hook, word for word | What to brief  (3 to 5 rows, one table) then a `why` starting "**Takeaway:**"
           last section:    "What happened this week", a `ul` of five bullets, each opening with a bold phrase and linking its sources inline
footer:    ""
sources:   usually empty, because every row links its post directly
```

No sources section, no footer, no methodology. The links are the sourcing.

## Weekly shape

```
intro:     h3 "Recommended actions for [client] from the analysis"
           moves (collapsed: true), three or four items, each why ending on "Outcome: ..."
           h3 "Posts worth replying to this week"
           table Where | When | What they said | Status | What to say
sections:  1 Key findings        scorecard, then findings (5 items: claim, p, why)
           2 Pricing and product      fig, h3 What happened, findings did, h3 What [client] should do, findings do, toggle Full analysis
           3 Search and marketplaces  same shape
           4 Advertising and social media  same shape, with the objection mix, durability and switch tables in Full analysis
           5 Hiring                   same shape, the "should do" block dropped when there is no real action
           6 Sources                  links, grouped by type, with the pull date on the first line
footer:    one line: pull date, window, what reach means, and the retention caveat
sources:   every pill, forty to sixty of them
```

## Rules the checker enforces

Run `python3 tools/report.py check <client> <slug>` and read every line. Errors stop the build: unknown block types, a pill with no source, a row with the wrong number of cells, a leftover TODO. Warnings are judgement calls, but each one is a rule from the skills, so fix it or know why not: tables outside three to five rows on a daily, advice cells over 25 words, pills mid-text, em dashes, en dashes, curly quotes, semicolons, the banned word list, tool names, a row with no link, word count outside the range, a missing preview line.
