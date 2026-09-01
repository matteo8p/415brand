# Sprag Competitors — Soniox, Deepgram, Cartesia

*Research date: 2026-08-27. Sources: full crawls of soniox.com (19,868-URL sitemap), deepgram.com (1,342 URLs) and cartesia.ai (232 URLs) — homepages, pricing, about/company, leadership, benchmarks, careers, customers, security/compliance and comparison pages — plus each company's published benchmark tables, the funding record from press coverage, and the raw benchmark datasets Sprag ships in its own JS bundle (see `sprag.md`). Prices are public list, pay-as-you-go, checked 2026-08-27. Items marked **[unverified]** come from a single source. Read `sprag.md` first — this file assumes it.*

---

## The short version

Sprag competes in a market where it is by far the smallest, cheapest, and least credentialed player, against three companies with genuinely different shapes:

- **Soniox** is the closest competitor and the most dangerous. Same story (multilingual, cheap, fast, one unified model), executed for longer, with real compliance, a consumer app, and a programmatic-SEO machine 275× the size of Sprag's site. **Sprag's price advantage over Soniox is ~25–38%, not the 3–12× its marketing implies.**
- **Deepgram** is the incumbent Sprag is priced against and the one it beats most cleanly on cost. A $1.3B unicorn with 11 years of history, self-hosting, HIPAA/PCI/SOC 2, AWS/GCP marketplace listings, NASA as a logo — and, on Sprag's own agentic data, a Voice Agent API that failed 10 of 50 turns and costs 11.8× more.
- **Cartesia** is the one that beats Sprag on the metrics Sprag markets. Frontier research lab (Stanford SSM/Mamba founders), $191M raised, Ink-2 is faster than Sprag on STT and Sonic-3 is **6× faster** than Sprag on TTS. Cartesia is the reason Sprag's "3× faster" headline is dangerous.

**The single clearest read across all three: Sprag's real, defensible advantage is native speech-to-speech cost and end-to-end agentic latency — not STT speed, and definitely not TTS speed.** All three competitors run cascades or bundled agent APIs; only OpenAI competes architecturally, and OpenAI is 7.5× the price. That is the whole story, and Sprag's current homepage tells a different, weaker, and more attackable one.

---

## Head-to-head at a glance

| | **Sprag** | **Soniox** | **Deepgram** | **Cartesia** |
|---|---|---|---|---|
| Founded / age | ~2026 (public Mar 2026) | ~2020 **[unverified]** | **2015-08-18** | 2023 |
| Funding | Open Core Ventures, **amount undisclosed** | **Not disclosed** | **$130M Series C @ $1.3B** (Jan 2026); YC, In-Q-Tel, Tiger, BlackRock, Madrona, Wing, Alkeon; AVP led | **~$191M** across seed/A/B; Index, Kleiner Perkins, Lightspeed |
| Team | 2 founders (Ian, Alex), **1 named on the site** | 2 named founders, **13 open roles** | ~13-person exec team, 100+ employees since 2022 | 4 co-founders + Chris Ré; London + SF offices |
| Founders' pedigree | Ian Eaves — Grai (YC S22), RamaLama, ydata-profiling | Klemen Simonic (Stanford, Google, Meta); Ambroz Bizjak | Scott Stephenson (PhD particle physics), Adam Sypniewski (PhD astrophysics) | Karan Goel, **Albert Gu** (co-inventor of Mamba/SSMs), Arjun Desai, Brandon Yang — Stanford AI Lab |
| Own models? | **No — open-weight Qwen** | **Yes, from scratch** | **Yes** (Nova, Aura, Flux, Saga) | **Yes** (Sonic, Ink — State Space Models) |
| STT languages | 30 (+22 Chinese dialects) | **60+** | 45+ | ~15 (Ink) **[unverified]** |
| TTS languages | 10 | **60+** | 50+ voices, English-led | 15+ |
| STT price (streaming) | **$0.075/hr** (batch-rate framing) | $0.12/hr | $0.288/hr promo ($0.462 regular) | $0.43/hr |
| TTS price | $0.70/hr | $0.70/hr | $0.030/1k chars (Aura-2) ≈ $1.80/hr | credit-based, ~$0.30–2.25/hr equiv. |
| Voice-agent price (50/50 min) | **$0.0064** | n/a (no agent product) | $0.075/min | $0.06/min |
| Native speech-to-speech | **Yes (Symphony)** | No | No | No |
| Speech translation | No | **Yes, 3,600 pairs, included free** | No | No |
| Audio captioning | **Yes (Symphony Notes)** | No | Audio Intelligence (summarization, sentiment, intent) | No |
| Self-host / on-prem | "Contact us," no docs | Data residency, in-region | **Yes, documented** (K8s/Docker/Podman) | **Yes** — cloud, on-prem, **on-device** |
| Compliance | **None** | SOC 2 Type 2, ISO 27001, HIPAA, GDPR | SOC 2 I & II, HIPAA + BAA, GDPR + EU endpoint, CCPA, PCI | SOC 2 Type 2, HIPAA, GDPR, PCI, Trust Center |
| Trains on customer data | **Yes, opt-out** | "Never stored, never saved" | No | No |
| Named customers | **1** (ISSEN) | 10+ incl. **Perplexity**, Agora, Mentra, Tana, Genspark | NASA, Five9, 30+ case studies | **35+** incl. ServiceNow, Quora, Cresta, LiveKit, Vapi, Retell, 11x |
| Site size | 72 URLs | **19,868 URLs** | 1,342 URLs | 232 URLs |
| Comparison pages | **0** | 489 `compare-stt` pages + live tool | 9 `/compare/*` | 30 `/vs/*` |
| Status page | **No** | No | No | **Yes** |

---

## 1. Soniox — the direct competitor

**soniox.com · "The voice platform for the world" · Slovenia**

### What they are

A multilingual voice AI platform selling STT, TTS and **speech translation** through one unified API in **60+ languages**, plus a consumer app business (Smart Scribe, Translator, Voice Typing). Founded by Klemen Simonic (CEO — Stanford, Google, Meta, in speech/language AI since 2008) and Ambroz Bizjak (Chief Architect). Engineering is in Slovenia; 13 open roles, all Slovenia or remote, spanning research, distributed training, GPU inference, data acquisition and forward-deployed engineering. No funding is disclosed anywhere on the site, and none surfaced in search — treat them as either bootstrapped or quietly funded. **[unverified]**

### Why they matter most to Sprag

Soniox is running **Sprag's exact playbook, further along**. Both lead with multilingual accuracy, sub-200ms latency and radical price undercutting. Both publish a pricing calculator that names a competitor and computes savings. Both argue the hour, not the token, is the honest unit. Both meter audio at roughly 30,000 tokens/hour.

The difference is everything else: Soniox built its own models from scratch, has SOC 2 Type 2 + ISO 27001 + HIPAA + GDPR, names Perplexity as a customer, has a consumer app funnel, and ships 19,868 pages of programmatic SEO.

### Products and pricing

| | Async (file) | Real-time (streaming) |
|---|---|---|
| Input audio tokens | $1.50/1M | $2.00/1M |
| Input text tokens | $3.50/1M | $4.00/1M |
| Output text tokens | $3.50/1M | $4.00/1M |
| **Effective** | **~$0.10/hr** | **~$0.12/hr** |

TTS: $4.00/1M input text tokens + $21.50/1M output audio tokens ≈ **$0.70/hour of generated speech** — identical to Sprag's Chorus rate. Voice cloning from a few seconds, producing a persistent voice ID usable across all 60+ languages.

**Everything is bundled:** speaker diarization, language identification, smart formatting, and **real-time translation across 3,600 language pairs** are included in the hourly rate at no extra cost. Their pricing FAQ attacks add-on billing directly: *"Deepgram diarization adds about $0.12/hour and Azure real-time diarization about $0.30/hour."*

### Benchmarks — and the comparison Sprag got wrong

Soniox does not run its own benchmark. It publishes results from the **open-source Pipecat STT benchmark** (1,000 real-world samples from `pipecat-ai/smart-turn-data-v3.1-train`, Gemini ground truth, human-reviewed), stating *"the results table is the single source of truth for every number published on this page."* Selected results, August 2026:

| Provider | Model | $/hr | WER mean | Perfect | TTFS median |
|---|---|---|---|---|---|
| Azure | — | $1.00 | 1.21% | 82.9% | 1,016 ms |
| **Soniox** | stt-rt-v4 | — | **1.25%** | **84.1%** | **249 ms** |
| **Soniox** | stt-rt-v5 | $0.12 | 1.34% | 83.3% | 260 ms |
| Speechmatics | — | $0.56 | 1.40% | 83.2% | 495 ms |
| AssemblyAI | universal-3-5-pro | $0.57 | 1.44% | 84.7% | 282 ms |
| Cartesia | ink-2 | $0.43 | 1.47% | 84.2% | 299 ms |
| Deepgram | nova-3-general | $0.55 | 1.71% | 76.5% | 247 ms |
| Google | gemini-3.5-transcribe-live | $0.54 | 2.24% | 78.0% | 458 ms |
| OpenAI | gpt-realtime-whisper | $1.02 | 2.92% | 72.5% | 740 ms |
| ElevenLabs | scribe_v2_realtime | $0.39 | 3.16% | 81.3% | 281 ms |

**⚠️ Sprag's benchmark benchmarks the wrong Soniox product.** Sprag's STT table lists "Soniox STT Async v5" at **1,718 ms TTFT** and 2.4% WER — dead last on latency — and the underlying record in Sprag's bundle is `soniox_stt_async_v4`. That is Soniox's **asynchronous file-transcription** endpoint, benchmarked against everyone else's realtime streaming. Soniox's realtime model is **260 ms**. Sprag's published number makes Soniox look 6.6× slower than it is, on a product comparison Soniox does not make.

This is the most fixable and most urgent problem in Sprag's competitive materials. If Soniox notices — and their whole brand is "don't trust benchmarks, test it yourself" — a single blog post reframes Sprag's benchmark page as dishonest, which would poison the genuinely strong agentic results alongside it.

### Go-to-market

- **Programmatic SEO at industrial scale.** 15,377 consumer-app pages, 3,601 speech-translation language-pair pages (`/speech-translation/english/slovenian`), 489 `compare-stt` pages (`soniox-vs-deepgram/gujarati`, `soniox-vs-assemblyai/albanian`), 128 per-language STT pages, plus per-country pages (Korea, Japan, Germany, Europe). Every long-tail "STT for [language]" and "[competitor] vs" query in the category.
- **"Soniox Compare"** — a live side-by-side tool that calls each provider's API in real time, plus a pricing calculator, **open-sourced on GitHub**. The positioning is *"Stop trusting voice AI benchmarks. Test on your own data."* This is a rhetorically powerful move that directly devalues self-run benchmarks — exactly what Sprag publishes.
- **Consumer app** (Smart Scribe, Translator, Voice Typing) as a funnel and a brand surface.
- **Named customers:** Perplexity ("a best-in-class voice experience for millions of Perplexity users"), Agora (Tony Wang, CRO), Mentra (Cayden Pierce, CEO/CTO — *"We tried a dozen speech-to-text and translation services. Soniox is the best"*), Tana, Genspark, mobilApp (German automotive voicebots), plus unnamed Korean enterprise and healthcare logos.
- **Partnership:** natively integrated into **Tencent Cloud**.

### Where Sprag wins vs Soniox

- **Native speech-to-speech.** Soniox has no agent product and no S2S model at all. Sprag's Symphony is a category Soniox does not compete in.
- **Audio captioning.** Nothing comparable at Soniox.
- **Price on STT** — but only by ~25–38% ($0.075 vs $0.10–0.12), not by an order of magnitude.
- **OpenAI drop-in compatibility.** Soniox uses its own API shape; Sprag's zero-migration story is a real advantage.
- **Multimodal beyond audio** — image and video in, which Soniox does not do.

### Where Sprag loses vs Soniox

- **Language coverage: 30 vs 60+ for STT, 10 vs 60+ for TTS.** This is the biggest functional gap in the set, and it undercuts Sprag's own "multilingual voice AI" headline.
- **Speech translation** — a whole product Soniox includes free and Sprag does not have.
- Compliance, named customers, persistent cloned-voice IDs, third-party benchmark credibility, SEO surface, team depth.

---

## 2. Deepgram — the incumbent

**deepgram.com · "The human language company" · San Francisco**

### What they are

The default enterprise speech API. Founded **2015-08-18** by Scott Stephenson (dark-matter physicist, PhD Michigan) — a documented 11-year history: YC 2016, Series A $12M (2019), Series B $25M (2020) + $72M extension (2022), 100 employees by 2022, Poised acquisition (2024), and **$130M Series C at a $1.3B valuation in January 2026** led by AVP with Alkeon, In-Q-Tel, Madrona, Tiger, Wing, Y Combinator and BlackRock. Full C-suite (CEO, COO, CTO, CFO, CSO, CMO, GC, Chief of Staff, VPs of Product/Sales/Research/Engineering/CS) drawn from Google, Meta, GitLab, Cisco, AWS, Lyft, Microsoft, Redis, Automattic.

### Products

- **Speech-to-text:** Nova-3 (45+ languages), Nova-2, Whisper Cloud, Custom models.
- **Flux** — "the world's first conversational speech recognition built for voice agents," with built-in turn detection and interruption handling. This is Deepgram's direct answer to the voice-agent latency problem.
- **Text-to-speech:** Aura-1, Aura-2 (50+ voices), Flux TTS.
- **Voice Agent API** — GA, bundled, with Standard / BYO-LLM / BYO-TTS / Advanced tiers.
- **Audio Intelligence:** summarization, topic detection, sentiment, intent.
- **Saga** — "the Voice OS for productivity."
- **Self-hosted** — fully documented: Kubernetes, Docker, Podman, bare metal, cloud; sub-200ms co-located latency; auto-scaling; identical API and feature set. Negotiable through **AWS and GCP marketplaces**, counting toward customers' EDP/CUD committed spend.

### Pricing (pay-as-you-go, promotional rates current as of 2026-08-27)

| Product | Rate | Per hour |
|---|---|---|
| Flux English (streaming) | $0.0065/min (reg. $0.0077) | $0.39 |
| Flux Multilingual | $0.0078/min | $0.47 |
| **Nova-3 Monolingual (streaming)** | **$0.0048/min** (reg. $0.0077) | **$0.288** (reg. $0.462) |
| Nova-3 Multilingual (streaming) | $0.0058/min (reg. $0.0092) | $0.348 |
| Nova-3 Monolingual (pre-recorded) | $0.0043/min | $0.258 |
| Aura-2 TTS | $0.030/1k chars | ≈$1.80 |
| Aura-1 TTS | $0.0150/1k chars | ≈$0.90 |
| Flux TTS | **free until 2026-09-12**, then $0.045/1k chars | ≈$2.70 |
| **Voice Agent, Standard** | $0.056/min → **$0.075/min** after 9/12 | **$4.50** |
| Voice Agent, Advanced | $0.122/min → $0.163/min | $9.78 |

**Add-ons are billed separately on streaming:** redaction $0.0020/min, keyterm prompting $0.0013/min, entity detection $0.0017/min, **speaker diarization $0.0020/min**. Smart formatting is included. This is exactly the add-on structure Soniox attacks and Sprag could attack too — Sprag bundles diarization into Rhythm's $0.075/hr.

Plans: Pay-As-You-Go ($200 free credit, no card) / Growth ($4K+/yr, ~20% off, higher concurrency) / Enterprise. Concurrency on PAYG: 50 REST + 150 WSS for STT, 45 for TTS, 45 for Voice Agent.

**Note the promotional-rate exposure:** Deepgram is currently running discounted streaming ("Current price / Regular price") and free Flux TTS through 2026-09-12. Sprag's pricing page and blog cite Deepgram at $0.29/hr, which is the *promo* rate. **When the promo ends on 2026-09-13, Deepgram's regular Nova-3 streaming rate is $0.462/hr and Sprag's advantage widens from 3.8× to 6.2× — for free.** That is a dated, checkable event worth a report entry.

### Compliance and enterprise posture

SOC 2 Type I & II (Cyberguard), HIPAA with signed BAAs for enterprise, GDPR-ready with a **dedicated EU endpoint** (`api.eu.deepgram.com`), CCPA, PCI with annual review. Patents page. Newsroom. Discord community. Startup program. AWS Connect and Five9 integrations. Sector solutions for contact centers, healthcare, restaurants, media, government. Customers "from startups to NASA," 30+ case studies.

### Where Sprag wins vs Deepgram

- **Price, decisively.** $0.075/hr vs $0.288 promo / $0.462 regular = **3.8–6.2× cheaper on STT.** On voice agents: $0.0064 vs $0.075/min = **11.8× cheaper**.
- **Reliability on Sprag's own agentic run.** Deepgram Voice Agent failed **10 of 50 turns** and posted 3,299 ms TTFA; Deepgram Nova-3 + Aura-2 cascade posted the worst TTFA in the set at 4,340 ms. Sprag: 1,033 ms, 0 failures. This is the strongest anti-Deepgram evidence Sprag owns and it is currently buried in an undisplayed benchmark tab.
- **Bundled diarization** — free in Rhythm, $0.0020/min extra at Deepgram.
- **Native speech-to-speech** — Deepgram cascades under the hood.
- **Audio captioning** — Deepgram's Audio Intelligence does summarization/sentiment/intent, not acoustic-scene description.

### Where Sprag loses vs Deepgram

- **Everything institutional.** SOC 2, HIPAA + BAA, EU data residency, PCI, self-hosting, marketplace listings, SLAs, an 11-year history, NASA.
- Language count (30 vs 45+), voice count (56 vs 50+ but English-led with far more production polish), TTS latency.
- **Flux** is a genuine product answer to the voice-agent problem with turn detection built in — Sprag has no equivalent turn-detection story.
- Distribution: Discord, startup program, AWS Connect, Five9, sector-specific solution pages, a real content engine.

---

## 3. Cartesia — the research lab

**cartesia.ai · "Architecting AI that learns and interacts like humans" · SF + London**

### What they are

A frontier research company applying **State Space Models** to real-time audio. The founding team met as PhDs at Stanford AI Lab and **invented SSMs**; **Albert Gu** (Chief Scientist, co-founder) is the co-author of Mamba, one of the most-cited architecture papers of the decade. Chris Ré is associated with the founding group. CEO Karan Goel; co-founders Arjun Desai and Brandon Yang. Raised **~$191M**: $27M seed (Index, Dec 2024), $64M Series A (Kleiner Perkins, Mar 2025), $100M Series B (Kleiner Perkins with Index and Lightspeed, Oct 2025). A Series C at a reported $3.3B valuation appears in some databases but is **[unverified]** and conflicts across sources.

### Products

- **Sonic-3.6** — TTS. "The fastest and most realistic speech generation model."
- **Ink-2** — STT. "The fastest and most accurate streaming transcription model." Claims: lowest WER of any streaming model; native structured-data handling (phone numbers, dates, emails, currencies, UUIDs); **native turn detection** (`turn.start`, `turn.end`, `turn.eager_end`) with **semantic endpointing** — turn end decided by meaning, not silence, with **no external VAD** (they explicitly market "you don't need Krisp or Silero"); **88 ms** claimed, 0.1 s time-to-final-transcript.
- **Managed Agents** — a full voice-agent platform with Cartesia-provisioned phone numbers, telephony, evaluations and LLM usage included.
- **Deployments** — cloud (regional endpoints), **on-premise, and on-device**. Constant memory usage is an intrinsic SSM property, which makes on-device genuinely differentiated rather than marketing.
- **Edge** — an Apache-2.0 open-source repo of multimodal SSM models.

Claims **"Ranked #1 in Speech Arena leaderboard & Speech to Text leaderboard by Artificial Analysis."**

### Pricing

Subscription + credits, not pure usage:

| Plan | Price | Credits | TTS min | STT hours | Concurrency (TTS/STT) |
|---|---|---|---|---|---|
| Free | $0 | 20K/mo | ~27 | ~1h51m | 2 / 8 |
| Pro | $5/mo | 100K | ~133 | ~9h16m | 3 / 12 |
| Startup | $49/mo | 1.25M | ~1,667 | ~115h44m | 5 / 20 |
| Scale | $299/mo | 8M | ~10,667 | ~740h44m | 15 / 60 |
| Enterprise | Custom | Custom | — | — | Custom |

**Managed Agents: $0.06/min call duration + $0.014/min telephony** with a Cartesia-provided number. LLM usage and evaluations are free "for a limited time." Instant voice cloning from Pro; professional voice cloning from Startup. Unlimited workspace seats on every plan. Enterprise adds DPAs/BAAs, SSO, custom concurrency, shared Slack.

At Scale ($299 for ~740 STT hours), Ink works out to **~$0.40/hour** — Soniox's benchmark page lists Ink-2 at $0.43/hr. Sprag is roughly 5× cheaper on STT. But the subscription shape matters: a team at low volume pays $5/month at Cartesia and effectively nothing at Sprag, while a team at high volume pays predictable subscription pricing at Cartesia versus metered at Sprag. Cartesia's model is easier to budget; Sprag's is cheaper.

### ⚠️ Cartesia is the competitor Sprag's own data says beats it

From Sprag's own benchmark datasets (`sprag.md` has the full tables):

| Metric | Sprag | Cartesia | Verdict |
|---|---|---|---|
| **STT TTFT p50** | 148.9 ms (Symphony) / 185.9 ms (Rhythm) | **134.5 ms (Ink Whisper)** | **Cartesia faster** — and Sprag **omits this row from its published table** |
| **TTS TTFA p50** | **940 ms** | **151 ms (Sonic 3)** | **Cartesia 6.2× faster** |
| TTS WER | 1.19% | 1.58% (Sonic 3) | Sprag more accurate |
| TTS cost p50 | $0.00124 | $0.00254 | Sprag ~2× cheaper |
| Agentic TTFA p50 | **1,033 ms** | 1,330 ms (cascade) / 1,896 ms (Line Agent) | **Sprag faster** |
| Agentic E2E p50 | **1,033 ms** | 2,465 ms / 7,413 ms | **Sprag much faster** |
| Agentic failures | **0/50** | **15/50 (Line Agent)** | **Sprag far more reliable** |
| $/50-50 call-min | **$0.006375** | $0.06 (Line Agent) | **Sprag 9.4× cheaper** |

Sprag's homepage says: *"STT, TTS, and voice agents, up to 3× faster than ElevenLabs and Cartesia."* On TTS specifically, Sprag's own measurements say Cartesia is **6× faster than Sprag**. The claim survives only on "up to" and the fact that the TTS benchmark tab does not render server-side. This is the highest-risk statement on Sprag's site, and Cartesia — a research lab that publishes and has a marketing team — is precisely the party most likely to check.

### Go-to-market

- **35+ named customers with individual case-study pages**, and they are the ecosystem's own infrastructure: **ServiceNow, Quora, Cresta, LiveKit, Vapi, Retell, Daily, Together AI, 11x, Captions, Tavus, Rasa, Forethought, Assort Health, Regal, Replicant.** Owning LiveKit, Vapi, Retell and Daily means Cartesia is the default inside the platforms Sprag would need to integrate with. **This is the deepest moat any of the three has.**
- **30 `/vs/*` comparison pages**, including ones Cartesia isn't in (`elevenlabs-vs-deepgram`) — capturing the whole category's comparison traffic.
- Per-language pages, per-industry pages (finance, healthcare, government), per-voice pages, per-country (India), a Google-for-Startups program.
- **Trust Center** and a public **status page** — neither of which Sprag has.
- Research brand: ICML presence, published papers, an author page per researcher.

### Where Sprag wins vs Cartesia

- **Agentic latency and reliability** — 1,033 ms vs 1,330–1,896 ms, 0 failures vs 15/50 on Line Agent.
- **Price** — ~5× cheaper on STT, ~2× on TTS, 9.4× on voice agents.
- **Native speech-to-speech** — Cartesia cascades Ink + LLM + Sonic.
- **Audio captioning and multimodal** (image/video in) — Cartesia is audio-only.
- **Free tier without a subscription.**

### Where Sprag loses vs Cartesia

- **TTS latency, badly** (940 ms vs 151 ms).
- **STT latency** (185.9 ms Rhythm vs 134.5 ms Ink).
- **Turn detection.** Ink-2 ships native semantic endpointing; Sprag has no equivalent and its realtime docs actually require patching the OpenAI transport to make barge-in work.
- **On-device deployment** — an SSM-native capability Sprag structurally cannot match on a 30B MoE.
- **Research credibility.** Albert Gu invented the architecture. Sprag serves someone else's weights and overstates its authorship of the serving framework (see `sprag.md`).
- Ecosystem lock-in, compliance, status page, 35 customers vs 1.

---

## Cross-cutting reads

### 1. Sprag's price advantage is real but the framing is wrong

Sprag's pricing page benchmarks against **OpenAI at $0.36/hr** — the most expensive credible option — to produce a "79% savings" headline. Against the actual competitive set:

| vs | Sprag STT advantage |
|---|---|
| OpenAI gpt-4o-transcribe | 4.8× |
| Deepgram Nova-3 (regular, from 2026-09-13) | 6.2× |
| Deepgram Nova-3 (current promo) | 3.8× |
| Cartesia Ink-2 | ~5.3× |
| **Soniox** | **1.3–1.6×** |

**Anyone evaluating Sprag on price alone will find Soniox at $0.10–0.12/hr with 60+ languages, free translation, and SOC 2.** Price is not a moat against Soniox. The moat against Soniox is native speech-to-speech, which Soniox does not have at all.

### 2. The competitive set is unanimous on compliance, and Sprag is alone

All three competitors carry SOC 2 Type 2 + HIPAA + GDPR; two carry PCI. All three explicitly do not train on customer audio. Sprag has none of it and trains by default with an opt-out. Every enterprise deal in this category dies at security review, and Sprag's positioning (healthcare-adjacent captioning, contact-center voice agents, robotics) points straight at buyers who run one.

### 3. Everyone is running an SEO machine except Sprag

Soniox 19,868 URLs · Deepgram 1,342 · Cartesia 232 · **Sprag 72**. Soniox has 489 comparison pages, Cartesia 30, Deepgram 9, Sprag **zero**. For a company whose entire pitch is a favorable head-to-head comparison, having no comparison pages is the largest unforced gap in the set — and the fastest to close, because Sprag already owns the benchmark data to fill them.

### 4. Sprag is architecturally alone, and that is the story

Soniox, Deepgram and Cartesia all sell cascades or bundled agent APIs. **None of them has a native speech-to-speech model.** Only OpenAI GPT Audio does, and it is 7.5× the price and 40% slower on Sprag's own data. Sprag's entire defensible position is: *the only sub-$0.01 native speech-to-speech agent, at 1-second end-to-end turn latency, with zero failures.* The homepage instead leads with a per-modality speed claim it loses on TTS.

### 5. Nobody sells audio captioning

Sprag's Symphony Notes has no competitor in this set. Deepgram's Audio Intelligence is text-level (summarization, sentiment, intent); nothing at Soniox or Cartesia describes acoustic scenes, non-speech sound, music or delivery. Sprag's own claim — *"the field lacked a general-purpose audio captioner, so we built one"* — appears to be accurate. It is an uncontested category, and Sprag currently gives it one page.

### 6. Where Sprag is structurally exposed

- **Open weights.** Soniox, Deepgram and Cartesia all train their own models. Sprag serves Qwen. Its differentiation is serving optimization, which any GPU cloud can replicate and which erodes as vLLM-Omni improves in public — a project Sprag contributes to but does not control.
- **Language coverage.** 30 in / 10 out against Soniox's 60/60 and Deepgram's 45+. Sprag's own docs candidly note it can transcribe Thai or Hindi and have no voice to answer in.
- **No turn detection.** Both Deepgram (Flux) and Cartesia (Ink-2) ship it natively and market it hard; Sprag's realtime docs require patching the client to make barge-in work at all.
- **Ecosystem lock-in.** Cartesia is inside LiveKit, Vapi, Retell and Daily. Sprag has two integrations, both generic OpenAI shims.

---

## What to watch, per competitor

**Soniox** — whether they ship a speech-to-speech / agent product (the one gap Sprag exploits); whether their open-source comparison tool adds Sprag; any funding announcement; expansion of the `compare-stt` corpus. Their Compare tool and "don't trust benchmarks" line are a standing threat to Sprag's benchmark page.

**Deepgram** — **2026-09-13**, when the promotional streaming rates and free Flux TTS end and list prices rise ~60%; post-Series-C hiring and enterprise expansion; Flux's turn-detection roadmap; whether they answer native S2S. Also watch for reliability improvements to the Voice Agent API, since its 10/50 failure rate is Sprag's best evidence against them.

**Cartesia** — confirmation or denial of the reported Series C / $3.3B valuation; further platform lock-in (LiveKit, Vapi, Retell, Daily); Ink/Sonic language expansion; on-device releases; whether they ever respond to Sprag's benchmark claims. Cartesia is both the most likely to notice Sprag's "3× faster" claim and the best-resourced to answer it.

**All three** — Artificial Analysis leaderboards and the Pipecat STT benchmark, which are becoming the neutral scoreboards for this category. Sprag is absent from both. Getting listed on a third-party benchmark it does not run itself would do more for Sprag's credibility than any number of self-published tables.

---

## Sources

**Soniox** — soniox.com (homepage, /about, /pricing, /benchmarks, /careers, /compare-stt, /blog), sitemap.xml (19,868 URLs), the Pipecat STT benchmark results table published on /benchmarks, [City Magazine profile of the founders](https://citymagazine.si/en/soniox-slovenians-who-beat-google-and-chatgpt-in-the-race-for-the-future-of-voice-and-simultaneous-speech-translation/)

**Deepgram** — deepgram.com (/pricing, /about, /company/leadership, /company/history, /data-security, /customers, /enterprise, /self-hosted, /product/voice-agent-api, /product/text-to-speech/flux, /careers), sitemap.xml (1,342 URLs), [Deepgram Series C press release](https://deepgram.com/learn/press-release-deepgram-raises-series-c), [SiliconANGLE, 2026-01-13](https://siliconangle.com/2026/01/13/real-time-voice-ai-unicorn-deepgram-raises-130m-streamline-human-machine-interactions/), [VKTR](https://www.vktr.com/ai-news/deepgram-hits-13b-valuation-with-130m-series-c/)

**Cartesia** — cartesia.ai (homepage, /pricing, /company, /careers, /agents, /ink, /deployments, /customers), sitemap-0.xml (232 URLs), [Contrary Research breakdown](https://research.contrary.com/company/cartesia), [PitchBook profile](https://pitchbook.com/profiles/company/568890-82), [Tracxn profile](https://tracxn.com/d/companies/cartesia/__ViCPaxy5xjTcNRZb2Njd3bZbE5VNNFrxFvBA3r6pavM)

**Sprag benchmark data** — extracted from `https://sprag.ai/assets/index-Du_84VDW.js`; full tables and provenance in `sprag.md`
