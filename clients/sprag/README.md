# Overview 

Sprag is a speech to text API company. We want to do some competitive analysis for Sprag, looking at their competitors and where people are mentioning them online, as well as any new leads we can give them. 

# Initialize 
1. I want you to do some deep research about Sprag. As a one-time, pull everything you can find about Sprag. Look at every page they have on their website. Their product page, their pricing page, everything, and then I want you to write those findings in @SPRAG.md 

https://sprag.ai/

2. I want you to look at some of Sprag's competitors. soniox, deepgram, cartesia. Do some of the similar analysis for those competitors and write them in the competitors.md Sprag folder.

# Full report (Weekly) 
I want you to generate a full report for the Sprag team. Look at the clients/WEEKLY_REPORT_GUIDANCE.md for what to do. I also want you to look at the analysis we did on the webapp for Viktor and Wispr Flow for reference. 

I want you to focus on doing the analysis on Deepgram to start, I think that's the most interesting. 

Feel free to use Apify to scrape across social medias and ads 

Remember that Sprag's ultimate goal is to find out who their competitor's customers are. We can find that out / guess based off of social media interactions. 

When you create the analysis, I want you to create a new page, /analysis/deegram-08-27-2026

# Daily reports 

Ian and Alex, the founders of Sprag, they want to know who are the customers of their competitors. We want to create a daily report showing them who is mentioning their competitors, but we also want to look at the recent LinkedIn and X posts from your competitors and who is engaging with them. From whoever's engaging with their competitors, we can sort of extrapolate who might be a customer of theirs based off of post engagement.

1. For every X and LinkedIn post, extract everyone who has engaged with that post and try to find employees or founders of companies that might be a customer of voice and their product.

2. In the daily reports, I want the first table to be potential customers of a competitor, paired with why we think they might be a customer. 

What I mentioned above is the most important thing that we want to find out.

# Follow up tomorrow (from the Sept 1 daily)

- Did anyone answer [@pburghdoom](https://x.com/pburghdoom/status/2094530719376875723) on the Flux settled-segment problem? If Deepgram replies, note what they say.
- Does Elios post the Staff Software Engineer role on its own page with a named hiring manager? The staffing-firm ad has no contact path.
- Deepgram's Flux TTS free window closes Sept 12 and its list price rises Sept 13. Watch for a renewal of the free offer.
- Deepgram is paying the public for voice recordings. Watch for the first expressive-TTS release built on that data.

# Seen but not sent (Sept 1 daily)

Real rows, cut because four or five beat them. Promote one if the thread grows.

Cut on Sept 1 for being individuals on side projects rather than accounts with budget.
A lead has to be a real company with traction, not a named person with a repo.

- **Minutehand**, solo Mac meeting recorder on Deepgram. Names Deepgram and states the diarization limit, but no traction.
- **Md Alam Miah**, freelance developer, built a Vapi + Twilio + Deepgram agent for one real estate client. An agency is a channel, but a one-person one.
- **Ahsaan Munir**, Urdu and English phone booking agent in Pakistan. Best language fit of the window and still the ISSEN case exactly, but a side project with no engagement. Worth a reply if he ships to a paying customer.
- **Adil Rehman**, clinic receptionist demo on LiveKit and Deepgram. Named stack, no company behind it.

- **Keystone Mere** joined the Deepgram Startup Program, Aug 31. On free credits, nothing to do today. Revisit when they run out.
- **jkolaz / airtxt**, iPhone dictation app on Deepgram Nova-3 with bring-your-own-key. Real customer, tiny. Easy integration if a quiet day needs a row.
- **Kommz**, gaming voice translation on Deepgram Nova-2, 20+ languages, Aug 29. Check his language list against Rhythm's thirty first.
- **Fortanix and Deepgram** at the Confidential AI Summit, Sept 2, plus a federal webinar on edge and disconnected deployment. Government self-hosted, closed to Sprag today. Watch the segment, do not pitch it.
- **@speko_ai** TTS arena scoring latency against quality, Aug 30. Sprag is not on the board. Worth getting listed.
- **Guillaume Marchand** on Deepgram billing metrics landing in CloudWatch with no agent, Aug 30. Deepgram answering the cost-visibility complaint with plumbing.
- **@kwindla** on the reference Pipecat pipeline still naming Deepgram first, Aug 30.
- **Christopher Biddle**, **KOL Telecom** and **Ervin Munoz Ortiz** all published voice-stack buying guides in the window with no Sprag in them.
- **r/SesameAI, airjacky**, AI companion on Deepgram STT, 35 upvotes and 32 comments, Aug 29. Highest-reach Reddit thread of the window, hobby project.
- **vocodedev/vocode-core**, 3,786 stars and a clean `deepgram_transcriber.py`, but no push since Nov 2024. Dead upstream. The 655 forks are the interesting part: teams running Deepgram in production with no maintainer above them. Worth a separate dig, not a daily row.
- **Appmixer connectors** moved deepgram, assemblyai and gladia into an `ai/` speech-provider folder on Aug 31. Only 7 stars, but Appmixer is a real embedded-iPaaS company and a connector reaches its customers. Small repo, real channel.
- **todoforai/voice-agent-bench**, a black-box voice-to-voice latency benchmark, re-measured on Aug 31. Zero stars, but latency is Sprag's whole pitch and being in a benchmark beats being in a pitch deck.
- **samirettali/sottovoce** added a Gemini 3.5 Transcribe provider on Sep 1. Provider-pluggable and actively adding providers, but a zero-star Swift project.
- **jamsch/expo-speech-recognition**, 672 stars and pushed Aug 30, but Deepgram appears only in the README. It mentions Deepgram, it does not run it.
- Tier C engagers cut for size: Javier Montes Perez (Unicaja), Pedro Arantes Pedroso (GetVocal AI), Dovlet Khanmedov (Voximplant), Nacho Ribeiro (Llamada IP), Mike Assi-Adou (Inn8 Tec), Nilson Neuschotz (h/ai), Trideba Padhi (Oracle OCI), Eshwar Naik (Bolna), Mauricio Vaz (Vozis).

# Notes for the next daily

- Sprag's real language coverage, checked against the docs on Aug 31: Rhythm transcribes 30 languages plus 22 Chinese dialects, Symphony converses in 18 (Urdu included, and Urdu is not in Rhythm), Chorus speaks 10. Kannada, Tamil, Telugu and Norwegian are in none of them. Check the language lists before writing any advice cell.
- No advertising source is set up for Sprag. There is no Meta Ad Library page ID in this README, and Deepgram's paid presence is search and display, covered in the weekly via Google Ads Transparency. The daily has no ads section until that changes.
