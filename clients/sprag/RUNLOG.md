# Run log

Newest first. One entry per report sent or built. The daily skill reads the top entry before starting.

## 2026-09-01 daily (window Aug 30 to 31)

**Output.** `webapp/reports/sprag/daily-09-01-2026.json`, live at https://415brand.com/analysis/sprag/daily-09-01-2026. Archive `reports/daily-09-01-2026.html`. Email `reports/daily-09-01-2026.email.html` and `.email.txt`, spec in `reports/daily-09-01-2026.broadcast.json` (segment sprag.ai, subject "Deepgram daily brief, Sep 1"). Broadcast id not recorded.

**Found.**
- `openclaw/openclaw`, 388,284 stars, has Deepgram as a first-class extension (`realtime-transcription-provider.ts`, a media-understanding provider, its own provider docs page). Peter Steinberger committed to it on Aug 31. The extension is a template Sprag can copy for a pull request. Also `Natively` (2,396 stars, `DeepgramStreamingSTT.ts`), `botium-speech-processing` (943), `joinly-ai/joinly` (564), `bakrianoo/mazinger` (461).
- Elios, London, AI receptionists for home services, 14 people, $13M Series A: the Staff Software Engineer job ad prints the stack, "Deepgram for speech-to-text". Write to Elios, not the staffing firm.
- Engager rows: Midam Kim (ServiceNow, ML engineer for multilingual voice agent), Himanshu Sharma (Kore.ai), Pedro Arantes Pedroso (GetVocal AI, €26M Series A), Ophir Samson (Greenhouse, Head of Voice AI, founder of Ezra AI Labs).
- `@pburghdoom`: Flux returned twelve seconds of a caller as three settled segments and his agent overwrote each one. Zero replies.
- A G2 review from a founding engineer at a mid-market company marks Deepgram down for Swedish and Norwegian accuracy. Rhythm covers Swedish and not Norwegian.
- Deepgram shipped nothing on Aug 30 or 31. Last release Aug 28: turn-taking control for Flux and improved Nova-3 for ten languages including Marathi and Telugu. Language releases are weekly and aimed at Sprag's wedge.
- Deepgram is paying the public for 90-second voice recordings in any accent to train expressive TTS.
- Flux TTS is free until Sept 12 and the list price rises Sept 13.
- Deepgram named its first DACH sales development rep on Aug 31.
- Deepgram is a G2 Leader in the Fall 2026 grids, 481 reviews at 4.6. Sprag has no G2 listing.
- `datalvar.ai` measured six Spanish voicebot stacks, 780ms end to end with Nova-3 plus Claude Haiku plus Cartesia. Reply in Spanish and offer to run Sprag through the same scenarios.

**Seen but not sent.** Real rows, cut because four or five beat them. Promote one if the thread grows.

Cut for being individuals on side projects rather than accounts with budget:
- **Minutehand**, solo Mac meeting recorder on Deepgram. Names Deepgram and states the diarization limit, but no traction.
- **Md Alam Miah**, freelance developer, built a Vapi + Twilio + Deepgram agent for one real estate client. An agency is a channel, but a one-person one.
- **Ahsaan Munir**, Urdu and English phone booking agent in Pakistan. Best language fit of the window, but a side project with no engagement. Worth a reply if he ships to a paying customer.
- **Adil Rehman**, clinic receptionist demo on LiveKit and Deepgram. Named stack, no company behind it.

Other cuts:
- **Keystone Mere** joined the Deepgram Startup Program, Aug 31. On free credits. Revisit when they run out.
- **jkolaz / airtxt**, iPhone dictation app on Deepgram Nova-3 with bring-your-own-key. Real customer, tiny. Easy integration if a quiet day needs a row.
- **Kommz**, gaming voice translation on Deepgram Nova-2, 20+ languages, Aug 29. Check his language list against Rhythm's thirty first.
- **Fortanix and Deepgram** at the Confidential AI Summit, Sept 2, plus a federal webinar on edge and disconnected deployment. Government self-hosted, closed to Sprag today. Watch the segment.
- **@speko_ai** TTS arena scoring latency against quality, Aug 30. Sprag is not on the board. Worth getting listed.
- **Guillaume Marchand** on Deepgram billing metrics landing in CloudWatch, Aug 30. Deepgram answering the cost-visibility complaint with plumbing.
- **@kwindla** on the reference Pipecat pipeline still naming Deepgram first, Aug 30.
- **Christopher Biddle**, **KOL Telecom** and **Ervin Munoz Ortiz** all published voice-stack buying guides in the window with no Sprag in them.
- **r/SesameAI, airjacky**, AI companion on Deepgram STT, 35 upvotes and 32 comments, Aug 29. Highest-reach Reddit thread of the window, hobby project.
- **vocodedev/vocode-core**, 3,786 stars, clean `deepgram_transcriber.py`, no push since Nov 2024. Dead upstream, 655 forks worth a separate dig.
- **Appmixer connectors** moved deepgram, assemblyai and gladia into an `ai/` speech-provider folder on Aug 31. Only 7 stars, but a real embedded-iPaaS company. Small repo, real channel.
- **todoforai/voice-agent-bench**, a black-box voice-to-voice latency benchmark, re-measured Aug 31. Zero stars, but being in a benchmark beats being in a pitch deck.
- **samirettali/sottovoce** added a Gemini 3.5 Transcribe provider on Sep 1. Provider-pluggable, zero-star Swift project.
- **jamsch/expo-speech-recognition**, 672 stars, pushed Aug 30, but Deepgram appears only in the README.
- Tier C engagers cut for size: Javier Montes Perez (Unicaja), Pedro Arantes Pedroso (GetVocal AI), Dovlet Khanmedov (Voximplant), Nacho Ribeiro (Llamada IP), Mike Assi-Adou (Inn8 Tec), Nilson Neuschotz (h/ai), Trideba Padhi (Oracle OCI), Eshwar Naik (Bolna), Mauricio Vaz (Vozis).

**Follow up next run.**
- Did anyone answer `@pburghdoom` on the Flux settled-segment problem? If Deepgram replies, note what they say.
- Does Elios post the Staff Software Engineer role on its own page with a named hiring manager? The staffing-firm ad has no contact path.
- Deepgram's Flux TTS free window closes Sept 12 and its list price rises Sept 13. Watch for a renewal of the free offer.
- Deepgram is paying the public for voice recordings. Watch for the first expressive-TTS release built on that data.

**Tooling.**
- Pulls that ran: X search for Deepgram over 48 hours, latest and top. Reddit newest first back to Aug 29 (first daily, Reddit was not in the weekly). LinkedIn keyword search over the week with every reaction and comment read for title and employer, plus every post and engager on the Deepgram, Soniox and Cartesia company pages. GitHub commit search since Aug 30 and code search for `api.deepgram.com`, `DEEPGRAM_API_KEY`, `deepgram-sdk` and the Python and realtime imports, ranked by stars. G2 most recent first. Deepgram's changelog. Hacker News had nothing.
- LinkedIn does not publish the date of a reaction, so a row resting on a reaction carries the post's date.
- No advertising pull ran. Search and display advertising is in the Aug 31 weekly.

## 2026-08-31 weekly (window Aug 24 to 30)

**Output.** `webapp/reports/sprag/weekly-08-31-2026.json`, live at https://415brand.com/analysis/sprag/weekly-08-31-2026 (older paths redirect, see `webapp/next.config.ts`). Archive `reports/weekly-08-31-2026.html`. Email `reports/weekly-08-31-2026.email.html` and `.email.txt`. Broadcast id not recorded. This is the Aug 27 weekly, refreshed and redated twice.

**Found.** Full detail is in the report JSON. The points that carry forward:
- G2's tally of the five most-mentioned Deepgram complaints puts limited language support at 24 of 60 sorted mentions, second only to price. Deepgram answered inside the window: Assamese, Mongolian and Pashto added Aug 27, improved models for ten languages Aug 28.
- Deepgram runs 57 one-page-per-language landing pages and rebuilt every one on Aug 28, plus fifteen guide pages published or rewritten Aug 25 to 28. The site grew from 1,342 pages on Aug 27 to 1,348 on Aug 30. Sprag's language list sits in one table on one page. Recommended: one page per language, from 72 pages to about 128.
- Last week's brief listed a "$50 of Deepgram API credits" post as a complaint. That account is Ed Charbeneau, Deepgram's Developer Advocate for Partners. Corrected. Of the 14 issues opened on Deepgram's public repositories since Aug 10, all 14 were opened by Deepgram staff.
- Google Ads: last week counted 347 creatives by walking the account, this week about 200 is Google's own domain-level estimate. A difference in counting method, not Deepgram halving its advertising.

**Seen but not sent.** Not recorded for this run.

**Follow up next run.** Carried into the Sept 1 daily.

**Tooling.**
- Sitemaps counted Aug 30 for both companies.
- Google's transparency centre reports an approximate domain figure and says the domain includes results for multiple advertiser accounts.

## 2026-08-27 leads (Deepgram customers and leads, 30-day first pull)

**Output.** `leads/08-27-2026.md`. Rows 1 to 5 sent to Sprag on Aug 27, rows 6 to 12 researched and held for the next report. Every row appended to `leads/seen.jsonl`.

**Found.**
- Twelve companies with Deepgram in public code, turned into twelve named engineers by reading the commit history on every file the code search hit (Jellypod, Murf, Hearst and others).
- G2 one-to-three-star reviewers with role and company size, including a churn signal over a $5k support fee.
- Deepgram's own customers page, extracted with Firecrawl.
- Every reactor and commenter on Deepgram's last month of LinkedIn posts, 1,063 rows, filtered to the ICP.
- LinkedIn job ads naming Deepgram.

**Seen but not sent.** Rows 6 to 12 in the leads file, marked with a pause symbol.

**Follow up next run.** Work rows 6 to 12 into later reports rather than sending them early.

**Tooling.**
- G2 (1 to 3 stars), GitHub code search for `DEEPGRAM_API_KEY`, `api.deepgram.com`, `deepgram-sdk`, `flux-general-en` and `aura-2` plus commit history, Firecrawl structured extract of the customers page, LinkedIn company page reactors and commenters, LinkedIn jobs, Hacker News.
- The competitors research crawled soniox.com (19,868-URL sitemap), deepgram.com (1,342 URLs) and cartesia.ai (232 URLs). Map first, then scrape the six pages that matter.
