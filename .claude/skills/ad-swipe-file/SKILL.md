---
name: ad-swipe-file
description: Read a competitor's whole ad library and turn it into a swipe file the client forwards to their ad manager and creators: which ads demonstrably work, the hook quoted word for word, what to brief, the template all the winners share, and the negative search for the angle the competitor never runs. Used for the ads section of a daily and the ad template analysis in a weekly, for any client whose competitor runs paid social.
---

# The swipe file

The ads section of a report is not a list of new ads and it is not a chart. It is a **swipe file the client forwards**. The reader pastes these links into Slack for an ad manager and into a brief for a creator, so every row has to be a link that opens the actual creative, the words that creative uses, evidence it worked, and one line of instruction. If a row cannot be forwarded to a person who will then make something, cut it.

Matt's words, after two wrong versions: "I want to give them links to actual examples." And: "show the most high impact things, at most 3 to 5 pieces of content."

## 1. Pull the whole library

Not the window. What survived six months of the competitor's budget is the point. A creative that launched yesterday has proved nothing.

Pull the page twice (active, all) as `research-pulls` describes, so you have live creatives with the low-impression flag and retired creatives with real end dates. Save to a file and count in Python. Corpus sizes to expect: a heavy advertiser has 800 to 1,500 creatives once retired ones are in.

Also pull the organic side where the category has one: TikTok and YouTube search for the brand and "<brand> review", with plays and likes. Mark paid posts (#ad, a commission link, the creator's name in the Ad Library co-brand line).

## 2. How you know an ad works

There is no spend and no click data. Four things stand in for it, and the first does most of the work:

| Signal | Where it comes from | Why it is evidence |
|---|---|---|
| **How long it ran** | end date minus start date on a retired ad, today minus start date on a live one | Advertisers kill what loses. A creative that ran 132 days won, and nobody has to take our word for it. |
| **Duplicate copies** | the collation count, "N ads use this creative and text" | Duplicating a creative is how an advertiser scales a winner. High copies on a young ad means they are pushing it right now. |
| **Relaunches** | the same copy, retired once, live again on a later start date | The strongest signal. They tested it, stopped it, and chose to bring it back. |
| **Engagement rate** | likes divided by plays on an organic post | For creator posts, where run length does not exist. Rank on rate, not raw plays, or you rank by follower count. A 2,000-follower creator at 9% beats a 5.4M-follower creator at 0.25%. |

Say the evidence in the row, in the client's language: "Ran 132 days, 11 duplicate copies." Never "high performing" with nothing behind it. Never call a trend off the last two days, because the library indexes the newest days late.

Compute, but do not necessarily publish, the format and angle numbers: median days live by format (video, dynamic template, static, carousel), the share killed inside a week, the share that ran 30 days or more, the share duplicated, the share starved of impressions, and the same by angle. These are how you pick the five, and they belong in the weekly's Full analysis. They are not forwardable, so they do not go in the daily.

## 3. One table, three to five examples, total

Not three to five per source. Three to five in the whole section. A creative team cannot act on fifteen references.

The example | Why we know it works | The hook, word for word | What to brief

Rank every candidate on run length, then pick across kinds so the handful covers different jobs: two or three brand ads, one creator-fronted ad, one organic post. Label each row by kind ("Ad:", "Creator ad:", "Creator post:") with the creator's name, so the reader knows who to forward it to without a second table.

- **The example.** The ad's title or first line as the link text, linked to `facebook.com/ads/library/?id=<id>` or the video URL. One creative per link. Never a search page.
- **Why we know it works.** The evidence, one sentence. "Ran 114 days across 5 copies with no creator and no face in it."
- **The hook, word for word.** The single most important cell. A creative director cannot work from "an ad about speed". They can work from "Old you: stuck clacking keys. New you: speaking ideas into reality." Paste the copy verbatim in quotation marks, trimmed to the part that carries the idea. Never summarise it, never improve it.
- **What to brief.** One or two sentences addressed to the person who will make the thing. Name the structural move worth stealing, not the topic. "The product shows up in line three, after the annoyance" is a brief. "Make an ad about speed" is not. Say when not to copy something (a mechanic that only works for a paid product, a feature the client lacks, a creator already under contract). When the row is a gap rather than a template, say that: a big "free alternatives to [competitor]" video the client is missing from is an outreach target, not a format.

Then one `why` paragraph starting "**Takeaway:**" naming the shape all the winners share: how many lines, what the first line does, where the product enters, what the close is. The shape is what makes the links usable. Without it the reader has examples and no rule. Example from a shipped brief: "every winner above is the same four lines. Open on a person or an annoyance, never on the product. The product arrives in line three. The close is free. Nobody demos a feature, they finish one specific task on camera."

## 4. The negative search

Run the client's own pitch words through every creative the competitor has ever published and report the counts with the corpus size. "Privacy appears zero times in 1,453 creatives" tells the ad manager which ad the market leader cannot make. Check each word separately and report the non-zero ones too, because an angle the competitor already runs well is an angle the client should not fight on ("accuracy: 33 hits, so do not fight Wispr on accuracy"). Put the result in the Takeaway. Re-run it every day the section runs.

## 5. Creators

From the co-brand line, count paid creators per creator and note when they disappear from the library: those creators are free, and that is an action for the week bullets. From the organic pull, rank unpaid creators by engagement rate. A creator posting about the competitor unpaid, twice in a week, is a row: "Message her today." A creator who publicly named the sponsors they want is a row. A gap video (the category roundup the client is missing from) is a row.

Say when a big-name paid post underperformed, with both numbers, as a warning about where the money goes.

## 6. Rules

- Every link resolves to one creative.
- Pull the whole library, not the window.
- Never call a trend off the last two days.
- Label who each row is for.
- Do not repeat a swipe row on consecutive days. Once the reader has the link, it is theirs. The next report shows what is new at the top of the library and anything relaunched.
- Never print a raw dataset column name, an actor name, a credit limit, or the word "corpus" in the client's report. "In 1,453 creatives" is the client's language.
- When the competitor runs no paid social (developer tools, most API companies), there is no ads section. Say so in CLIENT.md and do not build a table out of nothing. When a competitor's ads sit on a parent brand page mixed with other products, say which of the parent's creatives are for this product and how many.
- The TikTok ad library covers the EEA and the UK only. A zero result rules out European spend and nothing else. Say that next to the number. A keyword search there returns rival advertisers who bought the competitor's name, which is worth a row when one of them is running the client's positioning against the competitor's name.
