# Aqua Voice competitors — Wispr Flow, and the field

*Research date: 2026-08-31. Wispr Flow figures are carried forward from the Aug 30 pull already in this repo (`webapp/reports/cloudless/weekly-08-31-2026.json` and the public sample `webapp/app/samples/briefs/wispr.ts`) and re-verified against press coverage of the Aug 17 Series B. Aqua figures from `research/aquavoice.md`. Read that file first; this one assumes it. Items marked **[unverified]** rest on a single source.*

## The short version

Aqua is five people with a benchmark, fighting a company that raised $280M three weeks ago. That sounds hopeless and is not, because of one fact: **Wispr has never published an accuracy number, and its users are publicly saying accuracy got worse.** Aqua has the only published benchmark in the category and an independent leaderboard placing to go with it. That is the whole fight. Everything else is noise.

The risk is that the window is short. Wispr previewed **Canto**, its first proprietary speech model, on the same day as the Series B. The moment Canto ships with a number attached, Aqua's single differentiator is contested.

---

## Head-to-head at a glance

| | **Aqua Voice** | **Wispr Flow** |
|---|---|---|
| Raised | ~$2.75M **[unverified]** | **$361M**, incl. $280M on Aug 17 2026 at a $2B valuation, led by Menlo Ventures |
| Team | ~5 **[unverified]** | 23 open roles alone |
| Price, unlimited | $10/mo ($8 annual) | $15/mo ($12 annual) |
| Top tier | Max, $30/mo ($24 annual) | — |
| Free tier | **1,000 words, lifetime** | **2,000 words/week** desktop, 1,000 iPhone, **unlimited on Android**, + 14-day Pro trial |
| Platforms | Mac, Windows, iOS | Mac, Windows, iOS, **Android** (added Feb 2026) |
| Offline | No | No |
| Own model | **Avalon**, published | **Canto**, previewed Aug 17, not shipped |
| Published accuracy | **97.3% AISpeak; 6.24% WER, #1 proprietary on OpenASR (Oct 2025)** | **None** |
| Languages | 49 | 100+ claimed |
| Developer API | **$0.39/hr, no seat fees** | None |
| Meeting notetaker | None | **Free, Mac**, launched Aug 5 |
| Security | Privacy Mode; ZDR on Business. No HIPAA BAA. | SOC 2 Type I + ISO Stage 1 (April). Pricing page claims Type II; the security page says it has not been issued. |
| iPhone ratings | Not captured — pick up in daily tracking | **14,620** at 4.8, ~590 added in a week |
| Android ratings | No app | 5,395 at 4.8 |
| Monthly visits | Not ranked | **4.4M**, down 4.05% on the month; global rank fell 13,583 → 14,982 over three months |
| Search terms | Not captured | **15,100** — top five are all spellings of its own name |
| Live ads | None known | **~890 on Meta**, ~300 more on Google US |

---

## 1. Wispr Flow — the only competitor that matters

### What they are

The category leader and the default answer to "what dictation app should I use." Founded 2022 by Tanay Kothari and Sahaj Garg. $361M raised. The Aug 17 Series B tripled the November valuation to $2B.

### The three cracks

**1. No published benchmark, and a public accuracy regression.**
Complaints started on X in July 2026 — daily users dictating emails, memos and code comments reporting quality had declined. Menlo priced the round at 3x *the same week* those complaints were circulating. Wispr has never published a word error rate. Aqua has published two, one of them on an independent leaderboard.

This is the single most exploitable thing on this page. It is also **exactly the argument Aqua is already built to make**, which is rare — usually we have to invent the wedge.

**2. Canto is previewed, not shipped.**
Announced Aug 17 alongside the round. Wispr says Canto will cut the error rate "from 30% to under 10%" and was built for background noise, wind, music and a wider range of accents. **[Note: our Aug 30 Cloudless brief recorded this differently — "30 to 35% fewer dictations needing fixes." Two different framings of the same announcement. Re-read the primary source before citing a number to Finn.]**

Two reads, and Aqua should act on both: while Canto is unshipped, Wispr is publicly conceding its current error rate is around 30%. That is a quotable number from Wispr's own mouth against Aqua's published 6.24% WER. And the day Canto ships, the comparison page has to be rewritten.

**3. The pricing page claims a certificate they do not hold.**
Wispr's pricing page says SOC 2 Type II. Wispr's own security page says Type II has not been issued; they hold Type I and ISO Stage 1, both from April. This is a documented contradiction on their own site. Useful in enterprise deals; **do not build a public campaign on it** — it reads as sniping, and Aqua's own compliance story (no HIPAA BAA) is weaker.

### Where Aqua wins

- Published, independently-corroborated accuracy vs none
- Cheaper at every comparable tier ($10 vs $15; $8 vs $12 annual)
- A developer API at $0.39/hr — Wispr has no API at all
- Realtime Mode, Edit Mode and "Send it" — Wispr's feature energy went into the notetaker
- Shipping speed: four releases in eleven days in late July

### Where Aqua loses

- **Money and headcount.** 23 open roles vs ~5 people total.
- **Android.** Wispr has it, unlimited and free. Aqua has nothing and no announced plan.
- **The free tier.** 1,000 lifetime words vs 2,000 per week. A switcher evaluating both hits Aqua's wall in one sitting and Wispr's never.
- **Distribution.** 4.4M monthly visits, 15,100 search terms, ~890 Meta ads, 14,620 iPhone ratings. Aqua is not on this board yet.
- **The notetaker.** Free, on Mac, since Aug 5, and now the subject of most of Wispr's advertising. Aqua has no answer.
- **Languages.** 49 vs 100+ claimed.

### What to watch weekly

Canto shipping or slipping · any published WER from Wispr · free-tier or price changes · the notetaker landing on Windows · the Android word cap · the paid-search manager role being filled (their top five terms are all their own name — the moment that hire lands, category terms get expensive) · SOC 2 Type II actually issuing.

---

## 2. The privacy-and-price flank

These do not beat Aqua on accuracy and do not try. They attack the one thing Aqua cannot change: **Avalon is cloud-only.** Every one of them has a page arguing that on-device beats benchmarked.

| Who | Shape | The attack on Aqua |
|---|---|---|
| **Cloudless Voice** (Synth, Inc.) | Free, 100% on-device, Mac/Win/iOS. Tim Lenardo, bootstrapped. Self-published 11.2% WER vs Wispr's 12.4% | Free and local. Runs `/wispr-flow-alternative`, `/wispr-vs-cloudless`, `/willow-voice-alternative`, `/handy-alternative`. **See the conflict notice in `README.md` before touching this one.** |
| **superwhisper** (SuperUltra Inc.) | Toronto, bootstrapped, 7-figure ARR, on-device, Apple-focused | Local processing, model choice, no subscription lock-in |
| **Handy** | CJ Pais. Free, MIT, 23K GitHub stars. Mac/Win/**Linux** | Free and open source. Owns Linux, which Aqua does not serve |
| **VoiceInk** | Prakash Joshi Pax. Open source, $29, Whisper + Parakeet locally | Price and locality |
| **Voibe** (Essence AI Ltd.) | On-device or zero-retention cloud, $149 lifetime | Lifetime pricing vs subscription; maintains a 20+ app comparison library |

**The structural problem:** on-device models are getting good enough for ordinary speech at zero marginal cost. Aqua's benchmark lead is real precisely because AISpeak measures *technical* speech. Aqua should keep the argument on that ground and never let it become a general-accuracy debate, because that one is being commoditised.

## 3. The VC-funded flank

| Who | Shape | Note |
|---|---|---|
| **Willow Voice** | YC X25. Allan Guo (CEO), Lawrence Liu (CTO), Ian Ye. $4.2M from BoxGroup, YC, Dharmesh Shah, Alexis Ohanian, Max Mullen. $144/yr — same price as Wispr | Aqua's `/vs/willow` page attacks them for not disclosing their speech model. Same attack Aqua makes on Wispr, and it is the right one. **Willow ran a documented astroturf campaign on Aug 24–26 2026** — 11 templated Reddit posts from 11 new accounts across 11 subreddits. Never count those as organic mentions; see `IGNORE_RULES.md`. |
| **Typeless** | Stanford team, launched Nov 2025, no funding raised. Mac + Windows + iOS + **Android** | The only small player covering all four platforms. Aqua's page notes they publish no accuracy numbers. |
| **Monologue** (Every.to) | Backed by Every, launched Sep 2025, Apple-only | Aqua's edge is Windows plus a published benchmark |

## 4. Where Aqua is structurally exposed

1. **One differentiator, one clock.** Everything rests on the benchmark. Canto is the clock.
2. **Cloud-only is permanent.** Avalon cannot run on-device. Every privacy rival gets a free shot forever.
3. **The free tier is the worst in the category** and it is the first thing every evaluator touches.
4. **No Android** in a category where the leader gives Android away unlimited.
5. **Japan is ~50% of the user base [unverified] and is not in the marketing.** If true, this is both the biggest asset and the biggest single point of failure — one well-funded competitor localising properly takes half the company.
6. **Zero named API customers.** Same gap that decides deals for Experiential Labs.

## Sources

Wispr Series B and Canto: TheNextWeb, TechStartups, Cryptobriefing, SQ Magazine (Aug 17 2026). Wispr metrics: `webapp/reports/cloudless/weekly-08-31-2026.json` scorecard, pulled Aug 30 2026 — Similarweb, Meta Ad Library, Google Ads, App Store, Google Play, Wispr's own pricing/security/jobs pages. Aqua: aquavoice.com `/`, `/pricing`, `/vs`, `/vs/wispr-flow`, `/avalon-api`, `/changelog`; Avalon model card PDF; YC; Crunchbase; Tracxn; Product Hunt. Competitor field: `clients/cloudless/research/cloudless.md`, `ops/OUTREACH_TARGETS.md`, and the vendor comparison pages named inline.
