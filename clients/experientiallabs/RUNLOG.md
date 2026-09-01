# Run log

Newest first. One entry per report sent or built. The daily and weekly skills read the top entry before starting.

## 2026-08-28 weekly (window Aug 21 to 28, on OpenRouter)

**Output.** `reports/weekly-08-28-2026.html`. Source data in `webapp/app/samples/briefs/openrouter.ts`, rendered publicly at `/samples/openrouter`. 8,600 words, 213 sourced claims. Built per the weekly skill. **Still a prospect.** No Resend segment, no broadcast. The report is a sample to show them, not a send.

**Found.**
- The Show HN "We built open OpenRouter that turns usage into a better model" went up Aug 27 at 21:18 UTC and reached 157 points with 26 comments. Their July Show HN did 71 points. GitHub at 572 stars, two months old.
- The caching objection is their open wound. Raised by `Areibman`, `akshay_akula` and `purplecats` on the launch thread. `cameronh90` pushed back on the answer. No published benchmark exists.
- They confirmed a Python to Rust rewrite on the thread, and the commit "Delete the python gateway data plane" landed Aug 26.
- They plan continual RL via Tinker (Thinking Machines), per the CEO on HN. Partner, not competitor.
- Someone asked their business model in public and a third party answered it, not them. A positioning gap worth telling them about for free.
- Both adjacent markets are consolidating: Portkey to Palo Alto, Helicone to Mintlify, OpenPipe to CoreWeave, Predibase to Rubrik. Details and confidence levels in `research/competitors.md`.
- They have no comparison page for LiteLLM, the competitor they were asked about within three hours of launching. Ref had the same gap with Traycer.

**Seen but not sent.** None recorded.

**Follow up next run.**
- Read every comment on the launch thread before the first daily.
- Watch whether "open OpenRouter" spreads as a phrase.
- Watch r/openrouter for the next quantization or fee complaint wave.
- Track the Rust rewrite landing and any published caching benchmark.

**Tooling.**
- Hacker News Algolia API needs https and fuzzy-matches plain queries. Read the hits rather than trusting rank. `/api/v1/items/<id>` returns the full thread with every comment.
- Reddit on the company name returned almost nothing but Indian school-admissions content. Product names only.
- The X query cap is 100 characters.
- To regenerate the HTML: run `pnpm dev` in `webapp/`, then dump the rendered DOM with Chrome headless (`--dump-dom --virtual-time-budget=25000 --window-size=1100,3000`), extract the `<div class="analysis">` block and prepend `<title>` plus the contents of `webapp/app/samples/analysis.css`. Charts use Recharts inside a `ResponsiveContainer`, so a plain `curl` of the dev server returns the page without them.
