# Cloudless.so — Business Overview

*Research date: 2026-08-26. Sources: cloudless.so pages (sitemap crawl), App Store search listing, third-party coverage. Every claim below is what the company says on its own site unless marked otherwise.*

## One-liner

Cloudless Voice is a **free, 100% on-device voice dictation app** for Mac, Windows and iOS, marketed almost entirely as "the free alternative to Wispr Flow." Speech-to-text and transcript cleanup both run locally; the company's pitch is *no cloud → no server costs → no subscription, and no privacy exposure*.

## Company

| | |
|---|---|
| Legal entity | Synth, Inc. (also "Synthetic Inc."), San Francisco |
| Founder / CEO | Tim Lenardo — ex-Instagram engineer (2014), co-creator of Boomerang and several IG filters (per third-party profile) |
| Funding | None announced; appears bootstrapped |
| Former name | **Onit Dictate** → rebranded to Cloudless Voice on **June 29, 2026** (v4.1). Stated reasons: sharper privacy positioning, plus a legal threat from the unrelated onit.com |
| Prior products | Onit (source-available desktop AI chat, CC non-commercial, github.com/synth-inc/onit), Sidekick (AI sidebar, $7.99/mo Pro), QuickEdit (inline text editing), Typeahead (Mac autocomplete). QuickEdit and Sidekick were pulled from v4.1 and open-sourced as standalone apps. |
| Contact | contact@cloudless.so; Discord, YouTube, X presence |

**Read:** this is a small, bootstrapped team that has pivoted repeatedly (AI chat → text editing → dictation) and has now bet the brand on dictation. Old product pages (/edit, /ai-sidebar, /typeahead, /changelog) still live on the site with stale "Onit" branding and even 2025 release notes — a sign of thin marketing bandwidth.

## Product: Cloudless Voice

**Core loop:** hold a hotkey (default Caps Lock), speak, text appears in whatever app is focused.

**Features claimed**
- Fully local STT — Parakeet V3 on MLX (Mac/iOS); alternative models downloadable from Hugging Face
- "Smart Cleanup" — a fine-tuned Llama 1B, also local, strips filler words, fixes punctuation, formats emails/URLs/times/numbers/lists
- 100+ languages
- Works in every app and website; offline
- Transcript history, personal stats (WPM, time saved), light/dark mode
- No account required; optional Google sign-in

**Platforms:** macOS (M-series only), Windows, iOS. No Android, no Linux (they concede Handy wins on Linux).

**Privacy/security posture** (from /privacy-security and /enterprise)
- Audio and transcripts never leave the device; screen context discarded immediately; no training on user content
- Mandatory telemetry: update checks + de-identified crash reports (Sentry). Optional (consumer Mac/iOS only): PostHog usage analytics, voluntary audio-clip correction submissions
- Enterprise/Windows builds strip analytics and corrections entirely, bundle the model in the installer, and lock model switching
- **No SOC 2, no HIPAA** — framed as "by design, we have no servers." Honest, but a real objection in the regulated verticals they target.

## Pricing

| Tier | Price | Notes |
|---|---|---|
| Individual | **Free** | Non-commercial use only; "first 5,000 sign-ups" scarcity framing; sign-up encouraged to "secure your seat" |
| Enterprise | Contact sales | Signed MSI (Authenticode) / notarized Mac builds, MDM/RMM rollout, no telemetry. No price published. |

No paid consumer tier exists today. The business model is presumably free consumer adoption → enterprise seat licensing to legal, healthcare, journalism, finance, research, biotech and IT orgs. Revenue is unverified and likely minimal.

## Competitive positioning

Cloudless's entire site is structured as comparison pages. Every one leads with **price** and **locality**.

| | Cloudless Voice | Wispr Flow | Willow Voice | Handy |
|---|---|---|---|---|
| Price | Free | $15/mo ($12/mo annual); free tier 2,000 words/wk (1,000 on iPhone) | $12/mo; free 2,000 words/wk | Free (OSS) |
| Processing | Local | Cloud | Cloud | Local |
| Offline | Yes | No | No | Yes |
| Cleanup | Local LLM | Cloud LLM | "Coming soon" | None |
| Platforms | Mac/Win/iOS | Mac/Win/iOS/Android | Mac | Mac/Win/Linux |

**Attack pages against Wispr Flow specifically**
- `/wispr-flow-alternative` — feature/price table; concedes Wispr for Android and "cloud-first voice commands"
- `/wispr-vs-cloudless` (Aug 6, 2026) — self-run benchmark, 528 clips: Cloudless v4.1 **11.2% WER** vs Wispr Flow v1.5.751 **12.4% WER**
- `/wispr-may-vs-june` — claims Wispr Flow *regressed* between May and June 2026 (WER 9.0% → 11.2%, CER 3.8% → 4.9%) across 525 clips
- `/eloquent-review`, `/trends` — supporting content arguing on-device ASR is "good enough"

Wispr Flow's context (third-party): raised $25M from Notable Capital (Nov 2025), is the category leader, and is Cloudless's sole named enemy. Cloudless's benchmarks are self-published and not independently verified — but they're the sharpest marketing asset the company has.

## Traction signals

- iOS app live: "Cloudless - Private & Local" (App Store id6760565298). Rating/review count not captured (App Store rate-limited during this crawl — pick up in daily tracking).
- Homepage testimonials are mostly Wispr Flow switchers ("I wanted to get away from wisprflow…").
- Localized landing pages (fr/es/it) exist.
- "First 5,000 sign-ups" cap suggests user base is in the low thousands or being marketed as such.

## SWOT (analyst view)

**Strengths:** genuinely free + unlimited; credible privacy story that requires no trust; benchmark parity or better vs Wispr; enterprise install hygiene (signed MSI, MDM) is ahead of typical indie apps.

**Weaknesses:** no revenue engine visible; no SOC 2/HIPAA while selling to regulated buyers; M-series-only Mac; no Android; stale legacy pages and mixed Onit/Cloudless branding; single-founder execution risk.

**Opportunities:** Wispr Flow's price increase to $15 and reported quality regression; enterprise privacy/data-residency demand; Handy users wanting polish.

**Threats:** Wispr shipping local/offline mode or a bigger free tier; Apple/Microsoft OS-level dictation improving; open-source (Handy, Parakeet) commoditizing the local STT story Cloudless relies on.

## What the CEO cares about (for our reports)

Given the site, the CEO is running a **direct Wispr Flow conquest strategy**. The daily brief should therefore prioritize: Wispr Flow complaints (pricing, word caps, accuracy regressions, privacy), switcher posts, and any Wispr announcements (local mode, pricing changes, Android/free-tier moves) that would blunt Cloudless's three pillars — free, private, offline.

## Site map (crawled 2026-08-26)

Live product pages: `/`, `/dictate`, `/enterprise`, `/privacy-security`, `/wispr-flow-alternative`, `/wispr-vs-cloudless`, `/wispr-may-vs-june`, `/willow-voice-alternative`, `/handy-alternative`, `/eloquent-review`, `/trends`, `/join-beta`, `/fr`, `/es`, `/it`
Legacy/other: `/edit`, `/ai-sidebar`, `/typeahead`, `/bot`, `/changelog/*`, `/blog/*`, `/cloudless-blog/onit-dictate-becomes-cloudless-voice`
Missing: `/pricing` returns 404.
