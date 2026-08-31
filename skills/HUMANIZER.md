---
name: humanizer
version: 3.0.0
description: |
  Strip AI writing patterns out of a client report before it ships. Run this as the
  last pass on any brief, after the facts are checked and before the email is built.
  Adapted for research415 briefs: the generic version of this skill tells you to add
  first-person voice, tangents and mixed feelings, which is wrong for a deliverable a
  client pays for. This version keeps the patterns that apply to reports, drops the
  ones that fight our house style, and adds the tells our own drafts keep producing.

  Style rules live in WEEKLY_REPORT_GUIDANCE.md section 7 and DAILY_REPORT_GUIDANCE.md
  section 9. This file does not replace them. It is the check you run against a draft
  that already follows them.

  Original generic skill by @blader (https://github.com/blader/humanizer), based on
  Wikipedia's "Signs of AI writing" by WikiProject AI Cleanup.
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
---

# Humanizer, for reports

Run this on a finished draft. Read the whole brief, find the patterns below, rewrite them, then run the checklist at the bottom.

**Do not use this to add personality.** A client brief is not an essay. Our voice comes from what we rank first, what we call a waste of money, and what we tell the reader to skip. It does not come from "I keep coming back to this" or "I genuinely don't know how to feel." If a sentence sounds like a newsletter, cut it.

---

## Part 1. What this skill does NOT ask for

The generic humanizer tells you to add first-person perspective, mixed feelings, tangents and half-formed thoughts. Ignore all of that here. Four of its rules also fight our format on purpose:

| Generic rule | What we do instead |
|---|---|
| Avoid boldface | The bolded lead-in on a `why` callout and on `changes` bullets is our format. Keep it. The rule that still applies: no bolding inside ordinary prose for emphasis. |
| Avoid inline-header lists | The `changes` block is exactly that shape by design. Keep it. Do not build the same shape inside a `p` block. |
| Avoid rule of three | Three to four ranked moves is the format. The rule that still applies: do not force a list to three when you have two real items or five. |
| Add first-person voice | Never. Second person in advice cells and recommendations, third person in evidence. |

Everything in Part 2 and Part 3 does apply.

---

## Part 2. The patterns our drafts actually produce

These are the ones that have shipped in real briefs. Check these first.

### 1. The same callout opener four times in a row

The worst offender and the easiest to miss, because each sentence reads fine on its own. A Japan section once ran four findings whose callouts all opened `**Why this is good news:**`. Reads like a form.

**Fix:** each callout opens with the point itself, and each one differently.

Before:
> **Why this is good news:** this is the cheapest market you'll ever get.
> **Why this is good news:** you can get these two back.
> **Why this is good news:** you already have a creator programme.

After:
> **Go now and you're the first paid voice in Japanese dictation.**
> **You can get these two back, and they told you exactly what to fix.**
> **You already have a creator programme running in Japan.**

The `**Why it matters for [client]:**` prefix from the weekly guidance is fine when it appears once or twice. It is not fine as the opener on every callout in a section.

### 2. Advice cells that describe instead of instruct

Every "What you can do" cell carries an unmistakable instruction and does not trail off into description. Ending on a short reason is fine when the instruction already landed. Ending on an observation with no instruction anywhere in the cell is a research note, not a to-do.

Before:
> He is a paying customer who has been complaining about accuracy for a month.

After:
> Nobody has answered him and he hasn't committed yet. Send the accuracy page and a free month. Easiest one on the page.

### 3. Hedged advice

Evidence can be uncertain. Advice cannot. "Consider reaching out", "it might be worth", "you may want to" all mean the writer has not decided. Decide.

Before: "It could be worth considering a reply here."
After: "Reply today. This is hours, not days."

Two things that are not hedging:

- **A stated condition**, where a product fact is genuinely unknown. "If Aqua ships a Shortcuts action, say so."
- **A softened ask on a decision that is genuinely the client's**, meaning pricing, roadmap and headcount. We do not know their unit economics, so "Consider being more generous with your free tier" is honest where "Raise your free tier to 5,000 words" is us making up a number. The softening belongs in the action line only. The evidence under it stays decisive and specific, and it still ends on a concrete shape to react to.

Everything else, especially outreach and replies, is decided.

### 4. Rows that all sound the same

Five table rows written in one sitting come out with identical rhythm and identical verbs. Read the last column straight down, on its own. If every cell is "Reply with X, it will do Y", rewrite three of them. Vary the length. Let one be four words.

### 5. Naming the tool instead of the source

Covered in both guidance files and still slips through. The pill is "X", never "X via Apify". Never write Apify, an actor name, a scraper, a session, a credit limit, or "our pull failed" anywhere a client reads. If a source came back empty, say what is missing in one clause next to the number.

### 6. The caveat wall

A paragraph of limitations at the end of a section gets skipped and reads as hedging. One clause next to the number gets read.

Before: "Note that all traffic figures are third-party estimates and should be treated as indicative rather than precise."
After: "Similarweb puts it at 4.4M visits, which is an estimate."

### 7. Sections that exist because the template has one

If the ads section has nothing worth acting on today, it is two sentences, not a table with five weak rows. Cut to the strongest thing and move on. A short section is honest. A padded one costs the reader trust on every other section.

### 8. Fake precision

"Roughly 910" and "946" are both fine and they came from different counts, so print both and say so. "Approximately 927.5" is not. Numbers with no source pill do not ship.

### 9. Quotes cleaned up into marketing language

The post cell is a quote, not a summary. Keep typos, profanity, lowercase, and the original language with a translation in brackets. "Why is Wispr flow so shit these days?" stays exactly as written.

### 10. Reply targets the client cannot act on

A scraper returns whatever language the platform gives it, and a brief that ranks purely on freshness fills up with posts the reader will never answer. An OpenTag daily once ran four Japanese rows in a US-market brief, including two of the four rows in one table.

The rule: a row earns its place only if the reader can act on it. Check the client README for the market before ranking. If the client sells in the US, non-English posts stay out of the tables and are used only as evidence in the bullets, where they are intel rather than an outreach target. The same test kills a row in the wrong time zone, the wrong company size, or a platform the client has no account on.

**Fix:** cut it to the client README under "Seen but not sent", with the reason. A row cut for the wrong market is not a bad find, it is a find for a different client.

---

## Part 3. Generic AI patterns that still apply

Shortened from the Wikipedia list to the ones that turn up in reports.

### Inflated significance
**Watch for:** marks a pivotal moment, underscores the importance of, reflects a broader shift, setting the stage for, evolving landscape, key turning point.

Before: "The Series B marks a pivotal moment in the evolution of the dictation category."
After: "Wispr raised $280M on Aug 17 at a $2B valuation."

### Promotional language
**Watch for:** boasts, vibrant, robust, seamless, rich, groundbreaking, renowned, powerful, best-in-class.

These are the competitor's words. If a claim comes from their marketing, attribute it: "Wispr's pricing page says". Never adopt it.

### Superficial -ing analysis
**Watch for:** a clause tacked on the end starting highlighting, underscoring, reflecting, ensuring, showcasing, demonstrating.

Before: "They launched seven ads in Japan, highlighting their growing focus on international markets."
After: "They launched seven ads in Japan on Aug 30. It is the first time they have advertised there."

### Vague attribution
**Watch for:** industry reports, observers note, experts believe, many users say, some critics argue.

Every claim about what people think needs a linked post or a count. "Seven people said Wispr got worse on Aug 31" with links beats "users report declining accuracy".

### AI vocabulary
**Cut on sight:** delve, underscore, testament, pivotal, tapestry, landscape (abstract), ecosystem (abstract), leverage, utilize, robust, seamless, foster, garner, intricate, crucial, key (adjective), Additionally, Moreover, Furthermore, It is important to note.

The guidance already bans most of these. This is the grep list.

### Copula avoidance
**Watch for:** serves as, stands as, represents, boasts, features.

Before: "Their free tier serves as their primary acquisition channel."
After: "Their free tier is how they get most of their users."

### Negative parallelism
**Watch for:** not just X but Y, it isn't X, it's Y, X, not Y.

Before: "This is the warning, not the target."
After: "Don't chase him. He's here as a warning about where the money goes."

One of these in a report is fine. Two is a tic. We shipped two in one section.

### Elegant variation
Pick one name for a thing and keep it. The competitor is "Wispr" or "Wispr Flow" throughout, not alternating with "the company", "the incumbent", "the category leader".

### False ranges
Before: "Everything from pricing pages to hiring signals to ad spend."
After: "Their pricing page, their job ads and their Meta ads."

### Em dashes, curly quotes, semicolons, emojis
Zero of each. Straight quotes only. Split anything that wants a semicolon into two sentences.

### Filler and hedging
- "in order to" → "to"
- "at this point in time" → "now"
- "has the ability to" → "can"
- "it is worth noting that the data shows" → cut, give the data
- "could potentially possibly" → "may"

### Generic positive ending
A section ends on the move, not on encouragement.

Before: "The opportunity here is significant and the timing looks favourable."
After: "Go now and you're the first paid voice in Japanese dictation. Wait a month and you're the third."

---

## Checklist before shipping

Run these greps, then read the draft aloud.

```
grep -c "—"                                     # em dashes, must be 0
python3 -c "s=open(F).read(); print(s.count('“')+s.count('’'))"   # curly quotes, must be 0
grep -oE "[a-z]; [a-z]"                          # semicolons in prose, must be 0
grep -ciE "apify|actor|scraper|credit limit"     # tool names, must be 0
grep -oE "\*\*[A-Z][a-z ]+:\*\*" | sort | uniq -c | sort -rn   # repeated callout openers
grep -ciE "delve|underscore|testament|pivotal|leverage|utilize|robust|seamless|foster|Moreover|Additionally|Furthermore"
```

Then, by eye:

- [ ] No two callouts in a section open the same way.
- [ ] Every advice cell ends on an instruction or on "skip it".
- [ ] No hedged advice. Uncertainty lives in the evidence, never in the recommendation.
- [ ] Read the last table column straight down. The rows do not share a rhythm.
- [ ] Every quote is the poster's own words, typos included, original language kept.
- [ ] Every number has a source pill, or a clause saying where it came from.
- [ ] No caveat paragraph. Caveats sit next to their number.
- [ ] No section padded to fill the template.
- [ ] The competitor has one name throughout.
- [ ] Every row is one the reader can act on, in the client's market and language.
- [ ] Nothing reads like a newsletter, an essay, or a chatbot reply.

## What good looks like

From a shipped brief, all four patterns doing their job at once:

> **Don't chase him.** Wispr paid for the biggest name on the list and got less reach than a guy with 2,000 followers. He's here as a warning about where the money goes.

Plain words. One concrete comparison with both numbers. Opens on the instruction. Ends on the reason, not on a summary. No first person, and it still sounds like somebody who looked at the data and formed a view.
