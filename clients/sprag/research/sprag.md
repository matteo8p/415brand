# Sprag — Business Overview

*Research date: 2026-08-27. Sources: a full crawl of sprag.ai (72-URL `sitemap.xml`, plus `sitemap-markdown.xml` and `sitemap-api-reference.xml` — every marketing page, all 44 docs pages, all 7 blog posts, all 7 model pages, pricing, about, contact, legal), the live `GET /v1/models` catalog, `https://sprag.ai/openapi.json` (Sprag Gateway v0.1.56), the site's JS bundle (which ships the complete raw benchmark datasets client-side), `robots.txt`, the JSON-LD graph, and the GitHub REST API. Every claim is what the company says on its own site unless marked otherwise. Items marked **[unverified]** come from a single source or could not be cross-checked. Items marked **[from bundle]** were extracted from data the site ships to the browser but does not display. Not to be confused with Sprig (product research), Sprag Gears (industrial clutches), or Sprout.ai.*

## One-liner

Sprag (Sprag AI, Inc.) is a managed speech/multimodal inference API — "Multilingual Voice AI built for Speed" — selling STT, TTS, voice cloning, voice design, audio captioning and native speech-to-speech behind one OpenAI-compatible base URL (`https://api.sprag.ai/v1`). Its wedge is **price and latency, not model research**: it serves open-weight Qwen speech models on vLLM-Omni and undercuts Deepgram, ElevenLabs, OpenAI, AssemblyAI and Cartesia by 3–12× on a normalized call-minute. It is a very small, very young company — one publicly named employee (two founders in fact: Ian and Alex), backed by Open Core Ventures, with essentially zero third-party press or community footprint as of this writing.

**The single most important fact for positioning:** Sprag's models are rebranded open-weight Qwen models. This is not hidden — the blog says so — but the marketing layer (Symphony, Rhythm, Chorus) obscures it. Confirmed from the benchmark data shipped in the site's own JS bundle:

| Sprag brand | Actual model | Evidence |
|---|---|---|
| Symphony | `Qwen/Qwen3-Omni-30B-A3B-Instruct` | benchmark `pipeline_signature`; "Introducing Sprag" launch post |
| Rhythm | `Qwen/Qwen3-ASR-1.7B` | benchmark `pipeline_signature` (`sprag_multistage`) |
| Chorus | `Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice` | benchmark `pipeline_signature`; launch post |
| Chorus Design | `Qwen/Qwen3-TTS-12Hz-1.7B-VoiceDesign` | launch post |
| Symphony Notes | Qwen3-Omni derivative for captioning | tokenizer `Qwen3` in `/v1/models` |

Every model in the public catalog reports `"tokenizer": "Qwen3"`.

## Company

| | |
|---|---|
| Legal entity | **Sprag AI, Inc.** (privacy policy and terms) |
| Founders | **Ian Eaves** — the only person named anywhere on the site. Per the client, there is a **second founder, Alex**, who appears on no page, in no JSON-LD, and in no GitHub org. Worth telling Sprag: a two-founder company presenting as one founder reads as thinner than it is, and the `/about` page is the cheapest fix on the site. |
| Backing | **Open Core Ventures** (the fund started by Sid Sijbrandij, GitLab's founder). Amount, round and date **not disclosed anywhere**. |
| Governing law | California; disputes in San Francisco County. Founder's own GitHub lists **Madison, WI** — no HQ address is published. |
| Headcount | Site names exactly one person; at least two (Ian + Alex) per the client. **[unverified]** — no LinkedIn company page, ZoomInfo, or Crunchbase entry found. |
| Contact | `privacy@sprag.ai` (from terms); `/contact` (written questions), `/contact-sales` (embedded 30-min scheduler) |
| Social / code | GitHub org `sprag-ai` (3 public repos, created **2026-03-10**). The JSON-LD `sameAs` points at `github.com/the-sprag`, which **404s**. No X/Twitter, no LinkedIn company page, no Discord/Slack community linked anywhere on the site. |
| Compliance | **None claimed.** No SOC 2, no security page, no DPA, no subprocessor list, no status page. |
| Domains | Owns `sprag.ai` and `sprag.com` (both hard-coded in the analytics config chunk) |

**Read:** This is a pre-Series-A, possibly pre-seed, essentially one-founder company that has built an unusually polished and technically credible product surface. The site is better than the company's public footprint suggests: 44 docs pages of genuinely careful technical writing, a real benchmark harness with published methodology, an agent-readable `.md` mirror of every page, and `llms.txt` files. The gap between the quality of the artifact and the size of the team is the defining fact about Sprag.

## Founder

| Field | Value |
|---|---|
| Name | Ian Eaves |
| Site claim | "Led ML and AI teams at startups and Fortune 50 companies for over a decade" |
| Previous company | **Grai** (YC-backed, open-source data lineage / pipeline testing). `grai-io/grai-core`: 317 ★, last pushed 2026-01-30 — effectively dormant. |
| YC | About page badge says **"YC S22"** (that's Grai's batch, not Sprag's) |
| Open-source credentials (site) | `visions` (42M downloads, semantic type system for Python), `ydata-profiling` (13.5k ★), `RamaLama` (2.7k ★ — actual: 3,019 ★ under the `containers` org), `vllm-omni` (site says 4.2k ★) |
| Also runs | GitHub orgs `ramalama-labs` (6 repos) and `truth-protocol` (0 public repos). GitHub bio lists `@sprag-ai @containers @truth-protocol`; company field lists `@ramalama-labs @truth-protocol @containers` — **Sprag is not in his GitHub "company" field**. |
| Location | Madison, WI (GitHub profile) |
| Links | [LinkedIn /in/ieaves](https://www.linkedin.com/in/ieaves/), [GitHub /ieaves](https://github.com/ieaves), ianeaves.com |

### ⚠️ The vLLM-Omni claim needs handling

Sprag's strongest marketing asset is "Founded on Open-Source / Built on vLLM-Omni," and the launch post says vLLM-Omni is *"our extension of the popular vLLM inference engine"* which *"we develop in the open."* The homepage badge reads "vllm-project/vllm-omni" and the nav carries a live star count (6.4k).

What is verifiable:

- `vllm-project/vllm-omni` is a **vLLM-project community repo**, created 2025-09-11, **6,397 ★ / 1,557 forks**, 352 contributors. It is documented on docs.vllm.ai, covered by the vLLM blog and Red Hat Developer, and the top contributors are unaffiliated with Sprag.
- **Ian Eaves ranks 110th of 352 contributors with 4 commits.**
- `sprag-ai/vllm-omni` is a **fork with 0 stars**, last pushed 2026-08-17.
- The blog links `github.com/the-sprag/vllm-omni` — **404**.
- The about page's "4.2k ★" for vllm-omni is stale against the real 6.4k.

The engineering claim (Sprag runs Qwen3-Omni on vLLM-Omni, tuned) is almost certainly true and is a real capability. The **authorship** claim — "our extension," "which we develop in the open" — is not supported by the commit record. A competitor, a journalist, or a technical buyer doing 20 minutes of diligence will find this. It is the single largest reputational exposure on the site and should be softened to "built on" / "we contribute to" before someone else frames it.

## Product

**One OpenAI-compatible surface.** Base URL `https://api.sprag.ai/v1`, bearer auth, "change your base URL and your existing OpenAI client keeps working." Seven endpoints total (OpenAPI 3.1, "Sprag Gateway" v0.1.56):

| Endpoint | Method | Purpose |
|---|---|---|
| `/v1/chat/completions` | POST | Chat, multimodal, captioning, speech-out |
| `/v1/audio/speech` | POST | TTS, voice design, voice cloning |
| `/v1/audio/transcriptions` | POST | STT (REST) |
| `/v1/audio/voices` | GET | Voice catalog |
| `/v1/models` | GET | Model catalog |
| `/v1/images/{path}` | POST | Image generation **(undocumented in the docs site)** |
| `/v1/organization/costs` | GET | Usage/cost reporting |

Plus `wss://api.sprag.ai/v1/realtime?model=symphony` for speech-to-speech and realtime transcription (`intent=transcription`). **WebSocket only — no WebRTC**, which is a real gap against Deepgram/Cartesia/OpenAI for browser and telephony voice agents.

### The seven products

1. **Speech-to-text (Rhythm).** 30 languages + 22 Chinese dialects. Streaming and batch. Word timestamps, diarization (`speaker_labels`, `num_speakers`) — Rhythm is the only model returning structured timestamps/diarization.
2. **Text-to-speech (Chorus).** 56 preset voices, 10 output languages, cross-lingual transfer (any voice speaks any of the 10, "fidelity strongest in its native language"). mp3/wav/opus/pcm16, 24kHz default.
3. **Voice cloning (Chorus Clone).** Reference clip + exact transcript ride *inline in the synthesis request* (`ref_audio` as a base64 data URL, `ref_text`). No registration step, no stored speaker. Privacy framing: "the API keeps no copy of the speaker."
4. **Voice design (Chorus Design).** Plain-English brief in `instructions`; six described axes (timbre, age, accent, register, pacing, emotional tone). No stored voice ID — "each request synthesizes a fresh speaker, so the takes are what you reuse." That non-determinism is a genuine product limitation worth watching.
5. **Speech-to-speech (Symphony, realtime).** Native single-model audio-in/audio-out. Quickstart is written against `@openai/agents` with a **required transport subclass** — the stock OpenAI realtime transport's barge-in handling breaks against Sprag, so interrupting mid-reply fails without the patch. Browsers auth via a `sprag-jwt` WebSocket subprotocol.
6. **Audio captioning (Symphony Notes).** The differentiated product. Prose description of a clip end to end — words, speakers, emotion, intent/subtext, music, ambient scene, sound effects. Up to ~30 s. Positioning: *"The field lacked a general-purpose audio captioner, so we built one."* Applications pitched: accessibility, media search, dataset labeling, moderation/QA. Nobody in the competitive set sells this as a product.
7. **Hosted inference / robotics.** Text/image/audio/video through one API; hosted, private, hybrid and custom-weight deployments "contact us." The robotics page shows a `POST /v1/inference` example that **does not exist in the OpenAPI spec** — aspirational copy.

### Model catalog (live `GET /v1/models`, 2026-08-27)

| Model ID | Name | Modality | Context | Status |
|---|---|---|---|---|
| `symphony` | Symphony | text+image+audio+video → text+audio | 65,536 | warm |
| `symphony-fast-h100` | Symphony Fast | same, low-latency tier | — | not in public `/v1/models`; docs only; pricing "contact us" |
| `symphony-notes` | Symphony Notes | audio → text (captioning) | 4,096 | warm |
| `rhythm` | Rhythm | audio → text | 32,768 | warm |
| `chorus-voices` | Chorus Voices | text → audio (56 presets) | 4,096 | warm |
| `chorus-design` | Chorus Design | text → audio (from brief) | 4,096 | warm |
| `chorus-clone` | Chorus Clone | text+audio → audio+voice | 4,096 | warm |
| `qwen/qwen3.8-27b` | Qwen3.8 27B | text+image+video → text | 65,536 | warm — **free promo** |

`symphony-fast-h100` leaking the GPU SKU into the public model ID is a small but real disclosure of the serving tier.

### Integrations

Only two, both documented: **LiveKit** (STT, LLM) and **Pipecat** (STT, TTS, LLM), both routed through those frameworks' generic OpenAI service classes rather than native plugins. No Vapi, no Retell, no Twilio, no n8n, no Zapier, no Hugging Face Inference Providers listing, no OpenRouter listing. For a voice-infrastructure company this is thin — the voice-agent ecosystem is where the buyers are.

## Pricing

Free to start, usage-based, Stripe. No seats, no minimums, no published tiers. "Chat with us if you need an organization account for Enterprise use."

| Capability | Model | Headline rate | Token rate |
|---|---|---|---|
| Multimodal / speech-to-speech | Symphony | **$0.09 / hour of audio** | $1.98/1M input audio tokens; $0.18/1M input text; $1.26/1M output text |
| Multimodal, low-latency | Symphony Fast | **Contact us** | — |
| STT | Rhythm | **$0.075 / hour submitted** | $2.08/1M audio tokens |
| TTS | Chorus | **$0.70 / hour generated** | $19.44/1M audio tokens |
| Voice design | Chorus Design | **$15.00 / 1M characters** | — |
| Voice cloning | Chorus Clone | **$4.50 / 1M characters** + $0.02 per registered voice | — |
| Audio captioning | Symphony Notes | **$0.0019 / minute** + $2.03/1M output tokens | — |

Metering convention: audio is **1 token per 100 ms** (36,000 tokens/hour); an hour of transcribed speech returns roughly 15,000 output text tokens. Sprag explicitly argues the hour, not the token, is the comparable unit — a deliberate and correct framing choice given competitors meter differently.

**The pricing page is a competitive weapon.** It ships an interactive slider (10 h → 1M h/month) that computes savings against a named competitor. The default view: **1,000 hours/month — Sprag Rhythm $75 vs OpenAI gpt-4o-transcribe $360, "you save 79%, $285/mo."** Footnote: "public list prices for the closest comparable product, last checked June 2026… Rhythm runs batch, so it is priced against batch rates, which is the cheaper end of most of this field" — an honest caveat that also quietly concedes the comparison is favorable-case.

**Rate limits** (docs, API v0.1.42):
- Keyless: 20 req/min, 300/day per IP; browser playground has its own small per-visitor daily allowance.
- Authenticated: **60 requests/minute per organization** — shared across every key and every member.
- Realtime: **25 concurrent WebSocket sessions per user.**
- Headers (`Retry-After`, `X-RateLimit-Limit`, `X-RateLimit-Remaining`) appear on `429` only.

60 rpm org-wide is very low for a production inference API and is the number an enterprise buyer will stop on. The ISSEN case study says Sprag "raised throughput limits the same day," so it is clearly a soft default — but the published number reads as a hobby tier.

## Benchmarks — including what the site does not show

Sprag publishes `/benchmarks` and `/benchmarks/methodology`, and ships the **complete raw datasets in its JS bundle**, including runs and competitors it does not display. Extracting them is a five-minute exercise for anyone who looks. What follows is both.

### STT (published, LibriSpeech, n=100, run 2026-08-19)

| Provider / Model | TTFT p50 | TTFT p95 | RTF p50 | WER | CER | $/audio hr |
|---|---|---|---|---|---|---|
| **Sprag Symphony** | **149 ms** | 308 | 0.043× | **0.9%** | 0.3% | $0.09 |
| **Sprag Rhythm** | **186 ms** | 362 | 0.030× | 1.8% | 0.7% | $0.07 |
| Deepgram Nova 3 | 364 | 696 | 0.054× | 2.0% | 0.8% | $0.29 |
| Deepgram Nova 2 | 396 | 763 | 0.064× | 1.6% | 0.5% | $0.35 |
| OpenAI GPT-4o Mini Transcribe | 565 | 1,110 | 0.089× | 1.3% | 0.5% | $0.18 |
| ElevenLabs Scribe v2 | 584 | 968 | 0.091× | 1.3% | 0.4% | $0.22 |
| OpenAI GPT-4o Transcribe | 711 | 1,214 | 0.114× | 0.8% | 0.2% | $0.36 |
| Soniox STT Async v5 | 1,718 | 2,367 | 0.274× | 2.4% | 0.9% | $0.10 |
| AssemblyAI Universal-3.5 Pro | 2,238 | 3,813 | 0.358× | 1.0% | 0.2% | $0.21 |

**[from bundle] The dataset contains a tenth row the page does not render: `cartesia_ink_whisper` at TTFT p50 = 134.5 ms, WER 1.52%.** That is faster than both Sprag models and more accurate than Rhythm. Cartesia Ink is the only STT system in Sprag's own data that beats Sprag on the headline metric, and it is the one row omitted from the published table. Also note the labels drift from the data: the page says "Soniox STT Async v5" and "AssemblyAI Universal-3.5 Pro"; the underlying records are `soniox_stt_async_v4` and `universal3-pro`.

### TTS **[from bundle — not rendered on the public page]** (LibriTTS-R, n=50)

| Provider / Model | TTFA p50 | TTFA p95 | WER (mean) | cost p50 |
|---|---|---|---|---|
| Cartesia Sonic 3 | **151 ms** | 182 | 1.58% | $0.00254 |
| Cartesia Sonic 2 | 195 | 279 | 2.45% | $0.00254 |
| Fish Audio S2 Pro | 221 | 249 | 2.01% | $0.00128 |
| Soniox TTS RT v1 | 240 | 285 | 0.89% | $0.00109 |
| Deepgram Aura-2 Thalia | 311 | 519 | 1.11% | $0.00255 |
| ElevenLabs Flash v2.5 | 316 | 533 | **0.61%** | $0.00425 |
| OpenAI GPT-4o Mini TTS | 839 | 1,199 | 2.91% | $0.00152 |
| **Sprag (Qwen3-TTS CustomVoice)** | **940** | **1,807** | 1.19% | **$0.00124** |
| ElevenLabs Multilingual v2 | 1,128 | 2,096 | 0.80% | $0.00850 |
| xAI Grok TTS | 1,273 | 2,954 | 0.82% | $0.00128 |
| OpenAI TTS-1 HD | 2,169 | 3,128 | 1.00% | $0.00255 |

**This is the finding that matters most.** On Sprag's own TTS benchmark, Sprag is **6× slower than Cartesia Sonic 3** and slower than Deepgram, ElevenLabs Flash, Soniox and Fish Audio. Sprag is the *cheapest* in the set and mid-pack on accuracy — a defensible position — but the homepage headline reads **"STT, TTS, and voice agents, up to 3× faster than ElevenLabs and Cartesia."** For TTS specifically, Sprag's own data says the opposite. "Up to" and the `[1]` footnote do the work, and the TTS tab does not render server-side, so the contradiction is not visible to a casual reader — but it is sitting in the JavaScript.

### Agentic voice **[from bundle]** (suite `agentic_basic`, n=50, run 2026-06-04)

| Pipeline | TTFA p50 | E2E turn p50 | Failures | $/50-50 call-min |
|---|---|---|---|---|
| **Sprag Symphony (native)** | **1,033 ms** | **1,033 ms** | 0/50 | **$0.006375** |
| Sprag Rhythm + Chorus (cascade) | 1,312 | 2,153 | 0/50 | $0.00896 |
| Cartesia Ink + Sonic 3 + GPT-4.1-mini | 1,330 | 2,465 | 0/50 | $0.01515 |
| OpenAI GPT Audio (native) | 1,458 | 1,458 | 0/50 | $0.048 |
| Cartesia Line Agent (native) | 1,896 | 7,413 | **15/50** | $0.06 |
| ElevenLabs Scribe v2 + Flash (cascade) | 2,054 | 2,115 | 0/50 | $0.02655 |
| AssemblyAI Voice Agent | 3,107 | 9,074 | 2/50 | $0.075 |
| Deepgram Voice Agent | 3,299 | 5,310 | **10/50** | $0.075 |
| Deepgram Nova-3 + Aura-2 | 4,340 | 6,588 | 0/50 | $0.01735 |

This is Sprag's genuinely strong result and the one to build the story on. Native speech-to-speech collapses the cascade: **1.03 s to first audio, 1.03 s end-to-end (they are the same number because there is no cascade), zero failures, and 7.5× cheaper than OpenAI, 9.4× cheaper than Cartesia's bundled agent, 11.8× cheaper than Deepgram's and AssemblyAI's.** The failure counts on the bundled voice-agent APIs (Cartesia 15/50, Deepgram 10/50) are a legitimate reliability story Sprag currently under-uses.

Two caveats to hold: the agentic run is from **2026-06-04**, nearly three months stale, and the blog cites TTFA figures ("1.176 s… Cartesia 1.445 s") that do not match the shipped dataset (1.033 s / 1.330 s) — either a different run or a max-vs-p50 mixup. The methodology page is published, which is more than most competitors do, but the numbers should be reconciled before anyone leans on them publicly.

## Positioning and content

**The argument, in three posts:**

1. **"Voice Agent Economics in 2026"** (2026-06-01, the flagship). Cascade vs. native speech-to-speech; Qwen3-Omni's Thinker–Talker MoE architecture (119 languages text, 19 speech-in, 10 speech-out, 234 ms theoretical cold-start first packet); vLLM-Omni's stage decomposition and its arXiv-claimed 91.4% reduction in job completion time. Cost table: Sprag $0.0064/call-min = 1.0×, Cartesia 3.1×, Deepgram 3.5×, ElevenLabs 4.8×, OpenAI ~7.5×, Deepgram/AssemblyAI Voice Agent 11.8×. Notably fair to cascades — the post concedes cascades win on auditability, deterministic control, compliance checkpoints and best-in-class tool calling. That intellectual honesty is the content's main asset.
2. **"A Transcript Is a Choice"** (2026-08-17). The best piece on the site. Argues a transcript is a product decision (verbatim vs. clean vs. structured), that WER cannot capture it, and that a *steerable* model beats a purpose-built one because the caller defines the transcription protocol per request. Benchmarks Symphony against CrisperWhisper 2.0 on Nyra Labs' disfluency benchmark: precision 88.93% vs 88.29%, recall 94.93% vs 97.03%, F1 91.83% vs 92.46% — near parity, honestly reported including the loss. Shows JSON-structured disfluency output and emphasis-vs-repair discrimination.
3. **"Multimodal API compatibility from the adapter layer"** (2026-07-13). Adapter design notes: request, response and usage compatibility as three separate problems.

**Other posts:** the launch post (2026-03-27) and a free-model promo — **Qwen3.8-27B free through end of August 2026** ("it needs a 24GB card and plenty of people who want this model don't have one… we're covering the GPUs"). Cheap, well-targeted top-of-funnel.

**Customers:** exactly one named — **ISSEN (YC F24)**, AI language tutoring, 50+ languages. Migrated STT from a deprecated Gemini Flash 2.0. Quote from founder/CEO Mariano Sorgente:

> "I've been working with multilingual voice AI for years, testing dozens of transcribers and companies, and Qwen-Omni on Sprag has been the highest performing model at very low latency. We have difficult evals that test noisy, multilingual code-switched audio, with a variety of accents. Most models like Deepgram, 11labs scribe, etc land at around 70% on our evals, while Sprag has reached 90%, with a latency under 300ms."

That is the strongest single asset Sprag owns: a named customer, a named person, a specific number, and a direct head-to-head against Deepgram and ElevenLabs on the hardest case (noisy, code-switched, accented multilingual). The study also reveals the real service model — Sprag co-optimized with the customer (sample-rate matching, silence trimming, quantization, dedicated instances) and raised throughput limits same-day. **Sprag's actual product is a high-touch serving partnership wearing a self-serve API's clothes.**

**Content operations are unusually agent-aware.** Every page has a `.md` twin; there are four `llms.txt` files including a combined `docs/llms-full.txt`; `robots.txt` allows OAI-SearchBot, ChatGPT-User, PerplexityBot and Perplexity-User while blocking GPTBot, Google-Extended, ClaudeBot, CCBot, Bytespider, Amazonbot, meta-externalagent and Applebot-Extended, with Cloudflare Content Signals set to `search=yes, ai-input=yes, ai-train=no`. This is a deliberate, well-executed AI-search-optimization posture that almost nobody in this category has yet.

## Traction signals

- **Press:** none found. No TechCrunch, no VentureBeat, no funding announcement, no Crunchbase/Tracxn/ZoomInfo profile. Web searches for "Sprag AI funding," "Ian Eaves Sprag," and "sprag.ai" return the homepage and otherwise surface unrelated companies (Sprig, Sprout.ai, Spangle AI).
- **Community:** no Hacker News thread, no Reddit thread, no Product Hunt launch, no X account, no LinkedIn company page, no Discord found.
- **Third-party listings:** absent from Hugging Face Inference Providers, OpenRouter, and the "best inference providers 2026" roundups that surface for this category.
- **Customers:** one (ISSEN).
- **Timeline:** GitHub org created 2026-03-10; launch post 2026-03-27; benchmark runs June and August 2026; docs last-updated stamps cluster 2026-05-05 → 2026-08-17; API version 0.1.42 (docs) → 0.1.56 (OpenAPI). **The company is roughly five to six months old in public.**
- **Analytics stack** (from the config chunk): GA4 `G-E4Z9TB6D0F`, Google Ads `AW-18074333431` with conversion labels for **sign-up** and **Stripe setup completed**, PostHog, Cloudflare Turnstile, Supabase (auth + edge functions), Stripe. **They are running paid Google Ads and tracking paid-conversion events** — a real acquisition motion despite the zero-press footprint.

## Legal posture — a genuine liability

Sprag's Terms grant it a license to *"use, reproduce, modify, adapt, and create derivative works from your Content… to train Sprag AI's artificial intelligence and machine learning models."* Training is **opt-out**, by emailing `privacy@sprag.ai`, and applies **prospectively only**. Liability is capped at the greater of 12 months' fees or **$100**.

Meanwhile the voice-cloning page markets: *"The API stores nothing: your reference clip travels only inside your requests, and no copy of the speaker is kept."* Those two documents are in tension, and voice cloning is exactly the workload where a buyer will read both.

Every serious competitor is the other way round: no training on customer data by default, published subprocessors, SOC 2, HIPAA/GDPR paperwork. For any regulated buyer — healthcare, finance, contact centers, EU — this combination (opt-out training + $100 liability cap + no SOC 2 + no DPA + no status page) is disqualifying before latency or price is discussed. It is the cheapest, highest-leverage thing on this page to fix.

## SWOT (analyst view)

**Strengths**
- Real, defensible cost advantage: 3–12× cheaper per call-minute than every named competitor, from architecture (native S2S collapses the cascade) rather than discounting.
- Best-in-class agentic latency in its own harness — 1.03 s TTFA/E2E with zero failures, against competitors failing 10–15 of 50 turns.
- Genuinely differentiated product in **audio captioning** — nobody in the competitive set sells it.
- Technical content that argues rather than asserts, and concedes where competitors win. Rare and credible.
- One excellent, specific, named-customer proof point (ISSEN, 90% vs ~70% on hard multilingual evals).
- Drop-in OpenAI compatibility genuinely lowers switching cost to near zero.
- Best-in-category AI-search/agent-readability posture (`.md` mirrors, `llms.txt`, tuned `robots.txt`).
- Serving expertise on open weights is a durable skill as the open-model frontier keeps moving.

**Weaknesses**
- **No moat in models.** Everything is open-weight Qwen. Any competent GPU provider — Baseten, Fireworks, Together, Modal, Replicate — can serve the same weights tomorrow. The moat is serving optimization and price, both erodible.
- **The vLLM-Omni authorship claim is overstated** and independently checkable in four commits.
- **TTS is slow** — 940 ms TTFA p50, 6× Cartesia — while the homepage claims "up to 3× faster than ElevenLabs and Cartesia."
- **The site ships benchmark data it does not display**, including the one competitor row (Cartesia Ink) that beats Sprag.
- **No compliance surface at all**, plus opt-out-by-default training and a $100 liability cap.
- **60 rpm org-wide** published rate limit reads as pre-production.
- **Team of one** publicly. Bus factor, procurement risk, support scaling.
- **No WebRTC**, thin integrations (LiveKit + Pipecat only, both via generic OpenAI shims), no telephony story.
- **Voice design has no persistent voice IDs** — every request is a new speaker.
- **Language asymmetry** the docs candidly flag: transcribes 30 languages, speaks only 10. A product can understand a Thai or Hindi speaker and have no voice to answer them.
- **Zero brand footprint.** No press, no community, no third-party listings, no reviews anywhere.

**Opportunities**
- The cascade→native-S2S architectural shift is real and Sprag is early with a working benchmark to prove it.
- Cost-sensitive voice-agent startups burned by Deepgram/AssemblyAI/ElevenLabs per-minute bundles.
- Audio captioning as a category Sprag could define outright — accessibility, media search, dataset labeling for other audio-model builders.
- Robotics/VLA serving: high-margin, latency-critical, under-served, and a natural fit for the multimodal stack.
- Distribution via the voice-agent ecosystem — Vapi, Retell, LiveKit Agents marketplace, Pipecat, OpenRouter, Hugging Face Inference Providers. Every one of these is a listing Sprag does not have.
- Reselling serving expertise as private/VPC deployments, which the site already gestures at and which sidesteps the compliance gap.

**Threats**
- **Commoditization is the existential one.** Qwen weights are free; serving them is a race to the bottom that a well-capitalized GPU cloud wins on volume.
- **Deepgram ($130M raised, Jan 2026), Cartesia, ElevenLabs, AssemblyAI and OpenAI** all have distribution, compliance and brand Sprag does not.
- **Alibaba/Qwen itself** could serve these models directly, or a hyperscaler could add them to Bedrock/Vertex.
- Frontier speech prices are falling fast; a 3× price gap can close in one competitor announcement.
- A single competitor blog post reconciling Sprag's shipped benchmark data against its homepage claims would be damaging and is trivially available.
- Any enterprise security review ends the deal at the current legal posture.

## What the founder appears to care about (for our reports)

Inferred from the writing, page structure and the shape of the benchmark harness: (1) **measured truth** — publishing methodology, conceding where competitors win, benchmarking against a purpose-built rival and reporting the loss; (2) **price-per-unit-of-work as the honest comparable**, which is why every table leads with the hour rather than the token; (3) **serving as the discipline** — vLLM-Omni, stage decomposition, KV cache, quantization, silence trimming — not model research; (4) **open source as identity**, which is exactly why the vLLM-Omni framing needs care; (5) **developer experience as product** — one base URL, no SDK, no migration; (6) **steerability over specialization** — the "transcript is a choice" thesis; (7) beating **Deepgram and ElevenLabs** specifically, the two names the customer quote singles out.

## Where to watch for mentions

Sprag has no meaningful public footprint today, so monitoring should be set up ahead of the mentions rather than to catch a backlog. Highest-probability surfaces, in order:

1. **Hacker News** — "Show HN" or a Qwen/vLLM-Omni serving thread; the audience matches the content exactly.
2. **r/LocalLLaMA** — the natural home for "who's serving Qwen3-Omni cheaply." Also r/MachineLearning, r/SpeechRecognition.
3. **X/Twitter** — the voice-AI dev circle (LiveKit, Pipecat, Vapi, Cartesia, Deepgram DevRel orbits); Sprag has no account to anchor mentions to, which is itself the first fix.
4. **The vLLM-Omni and Qwen3-Omni GitHub issues/discussions** — where Sprag's actual technical peers are, and where the authorship claim is most likely to be challenged.
5. **LiveKit and Pipecat** Discord/GitHub — the integration surfaces Sprag already ships.
6. **Competitor comparison content** — Deepgram/AssemblyAI/Cartesia alternatives roundups, and AI-search answers (ChatGPT/Perplexity), which Sprag's `robots.txt` is explicitly optimized for and where it should already be measurable.
7. **YC founder networks** — Ian Eaves (Grai, S22) and ISSEN (F24) are both YC; Bookface/YC Slack is a plausible lead channel.

## Site map (crawled 2026-08-27)

72 URLs in `sitemap.xml`, plus `sitemap-markdown.xml` (73) and `sitemap-api-reference.xml` (6). Marketing: `/`, `/models` (+7 model pages), `/inference`, `/speech`, `/voice-cloning`, `/voice-design`, `/captioning`, `/robotics`, `/benchmarks` (+`/methodology`), `/pricing`, `/about`, `/contact`, `/contact-sales`, `/blog` (7 posts), `/company/media/brand-assets`, `/privacy`, `/terms`. Docs: `/docs` + 44 pages across quickstart, stt (api/rest, api/realtime, models, timestamps, diarization, languages), tts (api, voices/presets|design|cloning, models, languages, audio-formats), realtime, captioning, integrations (livekit ×3, pipecat ×4), authentication, api-keys, api-reference, errors, rate-limits. Machine-readable: `/llms.txt`, `/docs/llms.txt`, `/docs/llms-full.txt`, `/models/llms.txt`, `/product-facts.md`, `/openapi.json`, and a `.md` twin of every page. No `/security`, `/status`, `/careers`, `/customers`, `/changelog`, or `/compare/*` pages exist.

**Small quality note:** the `/robotics` page ships an internal editorial instruction in its production copy — *"The page should read like operations planning, not like a marketing checklist."* Worth flagging to the client; it is visible to anyone reading the page.

## Sources

- https://sprag.ai/ and https://sprag.ai/sitemap.xml, /sitemap-markdown.xml, /sitemap-api-reference.xml
- https://sprag.ai/pricing · /about · /models · /benchmarks · /benchmarks/methodology
- https://sprag.ai/speech · /inference · /voice-cloning · /voice-design · /captioning · /robotics
- https://sprag.ai/docs (44 pages) · /docs/rate-limits · /docs/stt/misc/languages · /docs/stt/misc/diarization · /docs/realtime · /docs/stt/models
- https://sprag.ai/blog/introducing-sprag · /blog/voice-agent-economics-in-2026 · /blog/a-transcript-is-a-choice · /blog/issen-delivers-ai-language-tutoring-at-scale-with-sprag · /blog/qwen3-8-27b-free-on-sprag · /blog/speech-to-speech-vs-pipelined-voice-agents · /blog/multimodal-api-compatibility-from-the-adapter-layer
- https://sprag.ai/privacy · /terms · /contact · /contact-sales
- https://sprag.ai/llms.txt · /docs/llms-full.txt · /product-facts.md · /openapi.json (Sprag Gateway v0.1.56) · /robots.txt
- `GET https://api.sprag.ai/v1/models` (live catalog, 2026-08-27)
- `https://sprag.ai/assets/index-Du_84VDW.js` — the site's JS bundle, which embeds the full STT/TTS/agentic benchmark datasets and the analytics config
- GitHub REST API: `vllm-project/vllm-omni` (6,397 ★, 352 contributors, ieaves = 4 commits, rank 110), `sprag-ai` org (3 repos, created 2026-03-10), `sprag-ai/vllm-omni` (0 ★), `grai-io/grai-core` (317 ★), `containers/ramalama` (3,019 ★), `users/ieaves`
- https://github.com/the-sprag — 404 (linked from the site's JSON-LD and launch post)
- https://www.issen.com/ (customer)
- https://arxiv.org/abs/2509.17765 (Qwen3-Omni) · https://arxiv.org/abs/2602.02204 (vLLM-Omni) — both cited by Sprag
- Web searches for Sprag funding/press/community: no results (see Traction signals)
