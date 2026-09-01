# Aqua Voice — Business Overview

*Research date: 2026-08-31. Sources: aquavoice.com pages (`/`, `/pricing`, `/vs`, `/vs/wispr-flow`, `/avalon-api`, `/changelog`), the Avalon model card PDF, YC's company page, Crunchbase, Tracxn, PitchBook, Product Hunt, and third-party reviews (Voibe, Spokenly, softorbits, usevoicy). Every claim is what the company says on its own site unless marked otherwise. Items marked **[unverified]** rest on a single source or could not be cross-checked.*

## One-liner

Aqua Voice is a **cloud** system-wide dictation app for Mac, Windows and iOS, built on **its own speech model (Avalon)**, sold on **published, benchmarked accuracy on technical speech**. Tagline: *"We've typed for 150 years. It's time to speak."*

The strategic point: everyone else in this category argues about privacy or price. Aqua argues about **accuracy, with a number attached**. That is the whole company.

## Company

| | |
|---|---|
| Entity | Aqua Voice, Inc. — San Francisco |
| Founded | 2023 |
| Founders | **Finn (Finnian) Brown**, Co-founder & CEO — [@finnatsea](https://x.com/finnatsea), [LinkedIn](https://www.linkedin.com/in/finn-brown-3b0b56113/). **Jack McIntire**, Co-founder & CTO — author of the Avalon model card. |
| Accelerator | **Y Combinator W24** |
| Funding | $500K pre-seed (YC + Pioneer Fund leading); **$2.75M total** per Crunchbase. Other investors named: 1517 Fund, Assembly Capital Partners. **[unverified]** — Tracxn lists Aqua as *unfunded*, which contradicts Crunchbase and the YC page. Ask Finn directly; do not print a funding number in a report until he confirms it. |
| Team size | ~5 **[unverified]**, Tracxn |
| Revenue | ~$330K ARR as of Sep 2025 **[unverified]**, third-party. Certainly higher now — confirm with Finn. |
| Origin | Finn is dyslexic and used Dragon from sixth grade. The company exists because he found existing dictation intolerable. This is a real founder story and it is not on the homepage. |

**Read:** five people, YC, one proprietary model, competing against a company that just raised $280M. The asymmetry is extreme and the only defensible ground is the model and the benchmark.

## Product

**Core loop:** hold a hotkey (or a mouse button, since v0.18.6), speak, formatted text lands in whatever app is focused.

**Features**
- **Avalon**, Aqua's own ASR model, launched Aug 2025
- **Realtime Mode** — live refinement as you speak (Max tier only)
- **Edit Mode** (v0.17.0, Jul 20 2026) — select text, hold the key, ask for a change verbally: typos, translation, formatting, numbers
- **"Send it"** (v0.18.0, Jul 26 2026) — say it and Aqua strips the command, inserts the message and submits. Configurable to Enter / Cmd+Enter / paste-only.
- Custom dictionary (technical terms, names, brands), custom writing-style instructions
- **Privacy Mode** — zero server storage. Off by default; Zero Data Retention is a Business-tier feature.
- 49 languages with automatic detection

**Platforms:** macOS (ARM64), Windows, iOS (since Apr 2026). **No Android. No Linux. No offline mode.**

**Claims on the homepage:** 5x faster than typing (230 WPM vs 40), 97.3% accuracy on AISpeak, outperforms Whisper / NVIDIA / ElevenLabs / AssemblyAI. Customer logos shown: **Apple, Amazon, Notion, Perplexity** — logos, not case studies; treat as unverified in anything we publish.

## Pricing

| Tier | Monthly | Annual | Words | Notes |
|---|---|---|---|---|
| Starter | Free | — | **1,000 lifetime** | Not per week. A one-time allotment. |
| Pro | $10 | $8/mo ($96/yr) | Unlimited | Custom instructions, expanded dictionary |
| Max | $30 | $24/mo ($288/yr) | Unlimited | Realtime Mode, "Send it", early access |
| Team | — | $12/user/mo | Unlimited | 2–9 people, central billing, Privacy Mode enforcement |
| Business | Custom | — | Unlimited | 10+ people, SSO/SAML + SCIM, Zero Data Retention, volume discounts |

Students get 70% off Pro and Max. **iOS Pro is sold separately at $119/yr through the App Store [unverified]** — if true, that is a pricing inconsistency worth flagging to Finn early; third-party pricing posts already report Aqua's price wrong because of it.

> ⚠️ **Price discrepancy to resolve on the first call.** The homepage renders Pro as "$8/month" and Max as "$24/month" (the annual rates) while `/pricing` shows $10 and $30 monthly. Third-party sites have published "$12/month" and "$8/month" as *the* price. Aqua's own comparison page says "$8/mo" against Wispr's "$15/mo," which compares Aqua's annual rate to Wispr's monthly rate. That is the kind of thing a competitor will screenshot.

## Avalon API — the second business

A batch transcription API, **$0.39/hour** of audio, billed per second with a 10-second minimum, no seat fees. OpenAI-SDK compatible: swap the base URL and model name.

**Published benchmarks** (Aqua's own, from the model card):
- AISpeak-10: **97.4%** vs Whisper Large v3 at 65.1%
- AISpeak-50: **97.5%** vs Whisper at 82.4%
- OpenASR Leaderboard: **6.24% average WER**, ranked #1 among proprietary models at its Oct 2025 debut

Compared against Whisper Large v3, ElevenLabs Scribe v1, Voxtral Mini 3B, NVIDIA Canary 1B, AssemblyAI Best. The hook: Whisper transcribes "GPT-4o" as "GPT-400"; Avalon does not.

**No named API customers.** This is a real gap — it is the same "zero named customers" problem we flagged for Experiential Labs, and it decides deals.

## Positioning: who Aqua actually is

Aqua is **not** competing on privacy or price. It is competing on being the input layer for people who talk to AI agents all day. Three things follow:

1. **The benchmark is the product.** AISpeak is a coding-and-AI-terminology benchmark. Aqua wins where the words are `kubectl`, `GPT-4o`, `useEffect`. That is a narrow, defensible, developer-shaped wedge.
2. **Cloud is a deliberate choice, not a compromise.** Avalon cannot run on-device. Every privacy-first rival (Cloudless, Handy, VoiceInk, superwhisper) attacks Aqua on exactly this. Aqua's answer is Privacy Mode and Zero Data Retention, and it is a weaker answer than "it never leaves your machine."
3. **More than 50% of the user base is in Japan [unverified].** Third-party reporting attributes this to Japanese programmers escaping keyboard-input friction when working with AI agents. There is a `/ja` page. **If this is true it is the single most important fact about this company** and it should reshape the entire brief — the mentions that matter are on Japanese X and Japanese dev blogs, not r/macapps. **Confirm this with Finn on the first call.**

## The comparison-page machine

Aqua runs **24 `/vs/` pages** — the most aggressive comparison SEO in the category:

`wispr-flow`, `superwhisper`, `mac-dictation`, `willow`, `typeless`, `monologue`, `loqua`, `voicedash`, `voicy`, `paraspeech`, `voiceink`, `betterdictation`, `handy`, `openwhispr`, `spokenly`, `resonant`, `speechpulse`, `voibe`, `dragon`, `openai-whisper`, `lemon`

They are already doing competitive research by hand, every week, for SEO. **That is why they are a good client and it is also the objection: "we already do this."** The answer is that their pages are built from competitors' marketing sites, and contain no ad spend, no pricing changes, no hiring signal, no unhappy customers, and no dates.

## Traction signals

- Product Hunt: **5.0/5 from 14 reviews** — high score, low volume
- Reddit coverage on r/macapps and r/productivity is **thin** relative to Wispr, Willow and superwhisper
- Sentiment concentrated on Product Hunt and **Japanese developer blogs**
- Shipping fast: four releases in eleven days in late July 2026
- App Store rating counts not captured — pick these up in daily tracking

## Known weaknesses (say these to Finn plainly)

- **No Android**, no Linux, no offline mode. Wispr has Android and removed the word cap there entirely.
- **Requires network access.** Reviewers list this first among drawbacks.
- **No HIPAA BAA.** Transcript storage requires opting out. Business-tier ZDR exists; consumer default does not.
- **49 languages** against Wispr's claimed 100+.
- **Free tier is 1,000 lifetime words**, versus Wispr's 2,000 *per week* plus a 14-day Pro trial. Aqua's free tier is the least generous in the category and it is the first thing a switcher hits.
- **Benchmarks are self-published.** AISpeak is Aqua's own benchmark. The OpenASR leaderboard placing is independent and is the stronger citation of the two — lead with that one.
- **Zero named API customers.**

## SWOT (analyst view)

**Strengths:** own model; the only published benchmark in the category; #1 proprietary on an independent leaderboard; genuine developer wedge; shipping weekly; a second revenue line (API) with no seat fees; a real founder story.

**Weaknesses:** cloud-only; stingiest free tier; no Android/Linux/offline; no HIPAA; pricing presented inconsistently across its own pages; five people; thin Western social presence.

**Opportunities:** Wispr's accuracy regression is being discussed publicly while Wispr publishes no benchmark at all; Wispr's Canto model is *previewed, not shipped*; the Avalon API can be sold to the developers already switching; Japan is an owned market nobody else is contesting.

**Threats:** Wispr's $280M and Canto; Wispr already free-and-unlimited on Android; on-device models (Parakeet, Whisper) commoditising accuracy at zero marginal cost; Apple/Microsoft OS-level dictation; a well-funded rival simply publishing a better benchmark.

## What Finn cares about (for our reports)

Aqua is running a **benchmark-led conquest of Wispr Flow**. The daily brief should prioritise, in order:

1. **People reporting Wispr accuracy problems.** This is Aqua's entire pitch and Wispr's most public wound right now.
2. **Developers and AI-agent users** describing dictation friction — the AISpeak wedge, and the Avalon API pitch in the same post.
3. **Japanese-language mentions**, if the 50% figure holds.
4. **Anything Wispr ships that blunts the benchmark argument** — Canto shipping, a published WER number, a price cut, a free-tier change.
