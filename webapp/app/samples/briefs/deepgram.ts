import type { Brief } from "./types";

export const deepgram: Brief = {
  slug: "deepgram-08-27-2026",
  title: "Deepgram weekly brief: who is buying, what changed, what to do",
  sub: "For Ian and Alex at Sprag, August 27, 2026",
  subject: "Deepgram",
  client: "Sprag",
  intro: [
    { type: "h3", text: "Scorecard" },
    {
      type: "scorecard",
      rows: [
        {
          metric: "Named companies found using Deepgram this week",
          primary: "31 on their site, 24 more found in public posts",
          us: "1 (ISSEN)",
          change: "The 24 are the lead list. Full table in section 4.",
          tone: "bad",
          source: "[[x-deepgram]] [[li-deepgram]] [[dg-customers]]",
        },
        {
          metric: "Google ad creatives on record",
          primary: "347",
          us: "25",
          change: "Deepgram has been advertising since Oct 2023. Sprag started Apr 2026.",
          tone: "bad",
          source: "[[gads-dg]] [[gads-sprag]]",
        },
        {
          metric: "Google ads still running on Aug 27",
          primary: "173",
          us: "0",
          change: "Sprag's last four ads ran Aug 21 to Aug 26 and then stopped.",
          tone: "bad",
          source: "[[gads-dg]] [[gads-sprag]]",
        },
        {
          metric: "New ad creatives launched in August",
          primary: "33",
          us: "4",
          change: "Deepgram's biggest month was March, at 79, right after the funding round.",
          tone: "neutral",
          source: "[[gads-dg]] [[gads-sprag]]",
        },
        {
          metric: "Pages on the website",
          primary: "1,342",
          us: "72",
          change: "817 are guides, 304 are glossary entries, 52 are one page per language.",
          tone: "bad",
          source: "[[dg-sitemap]] [[sprag-sitemap]]",
        },
        {
          metric: 'Comparison pages ("X vs Deepgram")',
          primary: "11",
          us: "0",
          change: "Cartesia has 30, Soniox has 489. Sprag has none.",
          tone: "bad",
          source: "[[dg-compare]] [[cartesia-vs]] [[soniox-compare]]",
        },
        {
          metric: "X posts mentioning it, last 7 days",
          primary: "90 (about 13 a day)",
          us: "not pulled this week",
          change: "The Apify limit was reached before the Sprag search ran. Prior searches found no results.",
          tone: "neutral",
          source: "[[x-deepgram]]",
        },
        {
          metric: "X posts that doubt, complain or shop around",
          primary: "14 of 90 (16%)",
          us: "n/a",
          change: "Almost all are about one accuracy chart published Aug 26.",
          tone: "good",
          source: "[[x-deepgram]] [[aa-stt]]",
        },
        {
          metric: "Reddit posts mentioning it since Jul 27",
          primary: "25, of which 13 are job-board spam",
          us: "0 found",
          change: "Deepgram has no subreddit of its own. Reddit is quiet for both.",
          tone: "good",
          source: "[[reddit-dg]]",
        },
        {
          metric: "Open jobs",
          primary: "93",
          us: "0 posted publicly",
          change: "39 engineering, 18 sales, 10 customer success, 7 marketing.",
          tone: "bad",
          source: "[[dg-jobs]]",
        },
        {
          metric: "Cheapest published price per hour of speech-to-text",
          primary: "$0.258 batch, $0.288 streaming (a promotion)",
          us: "$0.075",
          change: "Deepgram's streaming list price is $0.462. The promotion ends Sep 12.",
          tone: "good",
          source: "[[dg-pricing]] [[sprag-pricing]]",
        },
        {
          metric: "Languages the speech-to-text model handles",
          primary: "45+, and 8 were added in August alone",
          us: "30 in, 10 out",
          change: "Assamese, Mongolian, Pashto, Afrikaans, Georgian, Armenian, Punjabi, Nepali.",
          tone: "bad",
          source: "[[dg-changelog]] [[sprag-langs]]",
        },
        {
          metric: "Security paperwork big companies ask for",
          primary: "SOC 2, HIPAA, GDPR with an EU address, PCI, and a US government standard (FIPS 140-3)",
          us: "None published",
          change: "Deepgram also lets customers run the models on their own servers.",
          tone: "bad",
          source: "[[dg-security]] [[dg-selfhosted]] [[dg-changelog]]",
        },
      ],
    },
    { type: "h3", text: "Recommended actions for Sprag from the analysis" },
    {
      type: "moves",
      collapsed: true,
      items: [
        {
          action: "Reply this week to the 24 builders who named Deepgram in public, starting with the 9 who run a real company.",
          why: "Section 4 lists every one of them with a link and a reason. Deepgram's own community manager is already doing this, in the open, on X: she replies to people who mention Deepgram and offers them the startup programme within hours. That is the entire playbook and it costs one person's afternoon. Sprag has one named customer. These 24 are the cheapest 24 conversations available, and 9 of them describe a production workload Sprag can price against today.",
          evidence: "advertising-and-social-media",
        },
        {
          action: "Publish a Deepgram comparison page before Sep 13, priced against Deepgram's list rate rather than its promotion.",
          why: "Deepgram is discounting streaming speech-to-text to $0.288 an hour through Sep 12. On Sep 13 the published rate goes back to $0.462, and Sprag's gap widens from 3.8 times cheaper to 6.2 times cheaper without Sprag doing anything. Sprag has no comparison page at all. Deepgram has 11, Cartesia has 30, Soniox has 489. This is the single largest gap in Sprag's marketing and the page can be written from the numbers already in this brief.",
          evidence: "pricing-and-product",
        },
        {
          action: "Turn Sprag's Google ads back on and point them at the words Deepgram's 347 ads do not cover.",
          why: "Sprag has zero ads running as of today. The last four stopped on Aug 26. Deepgram has 173 running and launched 33 new ones this month. Sprag cannot outspend that and should not try. The opening is narrow and specific: Deepgram sells transcription and voice agents, and does not sell audio captioning, native speech-to-speech, or a single model that also takes image and video. Buy those words, not the word transcription.",
          evidence: "search-and-marketplaces",
        },
        {
          action: "Get Sprag listed inside the voice-agent tools that already carry Deepgram: LiveKit, Vapi, Pipecat and OpenRouter.",
          why: "Deepgram ships as a first-class option inside Pipecat and LiveKit, sponsors VapiCon in November, and its Flux TTS turned up on OpenRouter this week through someone else's tutorial. Sprag has two integration pages, both built on generic OpenAI compatibility rather than a native plugin. These platforms are where voice-agent buyers pick a provider from a dropdown. A native plugin is a week of engineering and it puts Sprag in the same list as Deepgram at the moment of choice.",
          evidence: "search-and-marketplaces",
        },
      ],
    },
    { type: "h3", text: "Posts worth replying to this week" },
    {
      type: "table",
      headers: [
        { text: "Where", w: "20%" },
        { text: "Date", w: "7%", nw: true },
        { text: "Post" },
        { text: "Reach", w: "14%" },
      ],
      rows: [
        [
          "X, @StatsWire",
          "Aug 26",
          "[Gemini 3.5 Transcribe Live just took the top spot on FLEURS streaming speech recognition. Deepgram Nova-3: 15.77%](https://x.com/StatsWire/status/2092669713231065313)",
          "5 likes, 2 replies, 1 repost",
        ],
        [
          "X, @rissa_cao (Fish Audio)",
          "Aug 26",
          '[Today it\'s the #1 most-requested speech model on OpenRouter ahead of Google, grok, MiniMax and Deepgram](https://x.com/rissa_cao/status/2090847029924954243)',
          "44 likes, 5 replies, 5 reposts",
        ],
        [
          "X, @LatentKush (Autoloops)",
          "Aug 26",
          "[Launched Qwen3-ASR-1.7B. It beats Deepgram Nova-3 in accuracy, multilingual switching, while being half priced](https://x.com/LatentKush/status/2092383425198170179)",
          "2 replies",
        ],
        [
          "X, @gauravdhiman_ai",
          "Aug 26",
          "[Does it support realtime streaming for conversational voice agents? If yes, what's the price as compared to deepgram and others in space?](https://x.com/gauravdhiman_ai/status/2092847729252995332)",
          "1 reply",
        ],
        [
          "X, @Kailzer",
          "Aug 26",
          "[What's the pricing like? Competitive with deepgram / scribe V2?](https://x.com/Kailzer/status/2092695864993341591)",
          "asked of Google's launch",
        ],
        [
          "X, @buildstack_ai",
          "Aug 24",
          "[Thought your voice pipeline sent everything to Deepgram? Maybe not. Diarize is now off by default (a paid add-on)](https://x.com/buildstack_ai/status/2091471269518520761)",
          "1 like",
        ],
        [
          "X, @EdCharbeneau",
          "Aug 25",
          "[I burned through $50 of Deepgram API credits last night](https://x.com/EdCharbeneau/status/2091650506909204850)",
          "2 likes, 1 reply",
        ],
        [
          "X, @Mad_Madi3",
          "Aug 24",
          "[language=multi on Deepgram romanized Arabic into Latin script at 0.49 confidence. language=ar, same audio: perfect Arabic at 0.98](https://x.com/Mad_Madi3/status/2091989230310269003)",
          "no replies yet",
        ],
        [
          "X, @VoibeAI",
          "Aug 24",
          "[Data retention, nobody advertises this: Deepgram, opt-out training per request](https://x.com/VoibeAI/status/2092131755864035829)",
          "1 reply",
        ],
        [
          "X, @nine_nine_six",
          "Aug 26",
          "[68.7 ms to first audio. API $5 per 1M chars. Cartesia and Deepgram about $30](https://x.com/nine_nine_six/status/2092661098264633630)",
          "1 like",
        ],
        [
          "X, @X_Sparkler",
          "Aug 26",
          "[Anyone already benchmarked latency vs Whisper v3 / Deepgram?](https://x.com/X_Sparkler/status/2092684208737284387)",
          "1 like, 1 reply",
        ],
        [
          "X, @amitgupta",
          "Aug 26",
          "[Deepgram Nova 3 and Eleven Labs Scribe 2 have been pretty much the only models to use. It'll be interesting to see how this one fares](https://x.com/amitgupta/status/2092887768007618672)",
          "1 like",
        ],
        [
          "r/AIToolsTipsNews",
          "Aug 25",
          "[The cheapest speech-to-text API per hour isn't the cheapest one to run, real billing breakdown for AI agents](https://www.reddit.com/r/AIToolsTipsNews/comments/1vxrhth/the_cheapest_speechtotext_api_per_hour_isnt_the/)",
          "2 comments",
        ],
        [
          "LinkedIn, Vinay Jain",
          "Aug 27",
          "[I spent the last week co-building one properly. Deepgram Flux for speech-to-text, Deepgram Aura 2 for the voice](https://www.linkedin.com/posts/vinayjain18_aiagents-deepgram-aivoice-activity-7498704740835356672-vrwf)",
          "2 likes, 1 comment",
        ],
      ],
    },
    {
      type: "note",
      text: "Everything below is collapsed. Click [show] on any line for the full analysis, the why, and the sources.",
    },
  ],
  sections: [
    {
      id: "key-findings",
      title: "Key findings",
      blocks: [
        {
          type: "findings",
          items: [
            {
              claim:
                "Twenty-four companies named Deepgram as the thing they build on this week, in public, with their own names attached.",
              body: [
                {
                  type: "p",
                  text: "A search of X and LinkedIn for the last seven days turned up 90 X posts and 40 LinkedIn posts mentioning Deepgram. Stripping out Deepgram's own staff, recruiters and spam leaves 24 identifiable builders who say in their own words that they run Deepgram in a product. Nine of them are running a real company rather than a side project: Vokalith AI, CallKaro.AI, Divinci AI, Speko, NF Tech, airtxt.ai, SubtitleNEXT, 2X Solutions AI and Four-Leaf AI. Deepgram's own site names 31 more. The full table with links and a reason for each is in section 4. [[x-deepgram]] [[li-deepgram]] [[dg-customers]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** this is the list Ian and Alex asked for, and it renews itself every week for the cost of two searches. Sprag has one named customer. Every name in that table has already decided to pay for hosted speech, has told the internet which vendor they use, and can be reached today. Start with the nine companies and open with the price comparison, not a product tour. [[x-deepgram]]",
                },
              ],
            },
            {
              claim:
                "Deepgram's cheapest speech-to-text price is a promotion that ends on Sep 12, and the real price is 60% higher.",
              body: [
                {
                  type: "p",
                  text: "Deepgram's pricing page shows Nova-3 streaming at $0.0048 a minute, which is $0.288 an hour, and prints the regular price of $0.0077 a minute, which is $0.462 an hour, next to it. Flux TTS is free until Sep 12 and then costs $0.045 per 1,000 characters. Voice Agent Standard is $0.056 a minute until Sep 12 and then $0.075. Sprag's Rhythm is $0.075 an hour. Sprag's own blog and pricing page compare against $0.29 an hour, which is the promotional number. [[dg-pricing]] [[sprag-pricing]] [[sprag-economics]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** on Sep 13 the honest comparison changes in Sprag's favour without Sprag lifting a finger, from 3.8 times cheaper to 6.2 times cheaper. Publish the comparison page now with both numbers on it and a dated note, so the page is already ranking when the price moves. [[dg-pricing]]",
                },
              ],
            },
            {
              claim:
                "Deepgram added eight new languages in August alone, which closes the gap Sprag currently sells on.",
              body: [
                {
                  type: "p",
                  text: "Deepgram shipped ten changelog entries in August. New Nova-3 languages: Assamese, Mongolian, Pashto, Afrikaans, Georgian, Armenian, Punjabi and Nepali. Improved models landed for roughly 25 more, including Russian, Korean, Japanese, Spanish and Urdu. Deepgram now claims 45+ languages. Sprag transcribes 30 languages and speaks 10, and those numbers are set by the open-weight Qwen models Sprag serves rather than by anything Sprag trains. [[dg-changelog]] [[sprag-langs]] [[sprag-models]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** multilingual coverage is a race Sprag cannot win by shipping, because Sprag does not train the models. Sprag should stop leading with language count and lead instead with the two things Deepgram genuinely does not sell: one model that answers in speech without a transcription step, and audio captioning. [[sprag-models]]",
                },
              ],
            },
            {
              claim:
                "Deepgram has 1,342 pages and 11 comparison pages working for it in Google. Sprag has 72 pages and no comparison page.",
              body: [
                {
                  type: "p",
                  text: "Deepgram's sitemap holds 1,342 addresses: 817 guides, 304 glossary entries, 52 one-per-language transcription pages, 17 industry pages and 11 comparison pages aimed at AssemblyAI, Amazon, Microsoft, Speechmatics, OpenAI, Google and ElevenLabs. Sprag's sitemap holds 72. Soniox runs 19,868 pages including 489 comparison pages, and Cartesia runs 232 including 30 comparison pages. Sprag is the only company in this group with zero pages aimed at a competitor's name. [[dg-sitemap]] [[dg-compare]] [[sprag-sitemap]] [[soniox-compare]] [[cartesia-vs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** Sprag already publishes a benchmark comparing itself to Deepgram, and already publishes a pricing calculator that names competitors. It simply has not turned either into a page that answers the search someone types before they buy. That page costs one afternoon and it is the highest-return page Sprag can publish. [[sprag-benchmarks]]",
                },
              ],
            },
            {
              claim:
                "Deepgram's 93 open jobs say where the $130M is going: government, Asia, self-serve signup, and text-to-speech.",
              body: [
                {
                  type: "p",
                  text: "Deepgram lists 93 open jobs. Nineteen are outside the US, including five in Singapore, four in London, two each in India, Sydney and remote-Asia. Five are aimed at the US government, among them an Enterprise Account Executive for Federal Civilian at $280K to $350K and a Defense and Edge Tech Lead at $219K to $274K. Seven roles sit on a Console team explicitly labelled Product-Led Growth, which is the self-serve signup funnel. The highest-paid role on the whole board is Director of Research, Text to Speech, at $213K to $328.3K. [[dg-jobs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** Deepgram is buying the two things Sprag cannot buy, government clearance work and a global sales floor, and is also rebuilding its self-serve funnel, which is the one place the two companies meet. Sprag should not wait to be found there. The counter is speed of signup and price, both of which Sprag already wins on. [[dg-jobs]] [[sprag-pricing]]",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "pricing-and-product",
      title: "Pricing and product",
      blocks: [
        {
          type: "fig",
          panels: [
            {
              cap: "Published price per hour of streaming speech-to-text",
              sub: "Deepgram's low number is a promotion that ends Sep 12.",
              chart: {
                kind: "rows",
                fmt: "usd",
                labelAll: true,
                rows: [
                  ["Sprag Rhythm", 0.075, "us"],
                  ["Soniox stt-rt-v5", 0.12, "other"],
                  ["Deepgram Nova-3, promo", 0.288, "primary"],
                  ["Deepgram Flux English", 0.39, "primary"],
                  ["Cartesia Ink-2", 0.43, "other"],
                  ["Deepgram Nova-3, list", 0.462, "primary"],
                ],
                aria:
                  "Published streaming speech-to-text price per hour: Sprag Rhythm $0.075, Soniox $0.12, Deepgram Nova-3 promotional $0.288, Deepgram Flux English $0.39, Cartesia Ink-2 $0.43, Deepgram Nova-3 list price $0.462.",
              },
              legend: [
                { series: "us", label: "Sprag" },
                { series: "primary", label: "Deepgram" },
                { series: "other", label: "Others" },
              ],
            },
            {
              cap: "Cost of one minute of voice agent, half caller and half agent",
              sub: "Deepgram bills by how long the connection stays open.",
              chart: {
                kind: "rows",
                fmt: "usd",
                labelAll: true,
                rows: [
                  ["Sprag Symphony", 0.0064, "us"],
                  ["Deepgram Standard, promo", 0.056, "primary"],
                  ["Cartesia Managed Agents", 0.06, "other"],
                  ["Deepgram Standard, list", 0.075, "primary"],
                  ["Deepgram Advanced, list", 0.163, "primary"],
                ],
                aria:
                  "Cost per fifty-fifty voice agent minute: Sprag Symphony $0.0064, Deepgram Standard promotional $0.056, Cartesia Managed Agents $0.06, Deepgram Standard list $0.075, Deepgram Advanced list $0.163.",
              },
              legend: [
                { series: "us", label: "Sprag" },
                { series: "primary", label: "Deepgram" },
                { series: "other", label: "Others" },
              ],
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          style: "did",
          items: [
            {
              claim: "Deepgram put its two newest products on promotion, and both promotions end on the same day.",
              body: [
                {
                  type: "p",
                  text: "Flux TTS, Deepgram's new text-to-speech model, is free through Sep 12 with up to 45 streaming connections at once, and then costs $0.045 per 1,000 characters, which is 50% more than the Aura-2 model it replaces. Nova-3 streaming is discounted from $0.0077 to $0.0048 a minute. Voice Agent Standard is discounted from $0.075 to $0.056 a minute. Deepgram prints both the current and the regular price side by side on the pricing page, so the increase is already public. [[dg-pricing]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** there is a dated moment coming when a large number of Deepgram accounts see their bill rise. Sprag should have a page live and indexed before Sep 13 that answers the search those people will run. [[dg-pricing]]",
                },
              ],
            },
            {
              claim:
                "Flux is Deepgram's answer to the hardest problem in voice agents, and it is the one feature Sprag has no version of.",
              body: [
                {
                  type: "p",
                  text: "Flux decides when a speaker has finished talking inside the speech model itself, and emits start of turn, end of turn and an early eager end of turn so the language model can start generating before the sentence is over. Deepgram's own documentation puts it plainly: traditional speech-to-text plus a separate voice-activity detector requires you to build complex interruption logic, and Flux handles this natively. Sprag's realtime documentation goes the other way. It tells developers to subclass the OpenAI transport because the stock barge-in handling expects server state that Sprag does not keep, so interrupting the model mid-reply fails without the patch. [[dg-flux]] [[dg-flux-state]] [[sprag-realtime]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** every builder in section 4 who is shipping a phone agent will hit this. Sprag's benchmark wins on end-to-end latency but the docs admit a broken interruption path, and that is the first thing that breaks on a real call. Fix the barge-in path and delete the subclass from the quickstart before pitching any of these leads. [[sprag-realtime]]",
                },
              ],
            },
            {
              claim: "Deepgram now charges separately for speaker labelling on live audio, and developers are finding out by accident.",
              body: [
                {
                  type: "p",
                  text: "On streaming, speaker diarization costs $0.0020 a minute on top of the model, redaction costs $0.0020, entity detection $0.0017 and keyterm prompting $0.0013. Only smart formatting is included. On pre-recorded audio diarization is included, which makes the two price lists inconsistent. The Vercel AI SDK shipped a fix this week because it had been sending diarize=true by default, and one developer summarised it publicly as diarize is now off by default, a paid add-on, check costs and output first. [[dg-pricing]] [[x-diarize]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** Sprag includes word timestamps and speaker labels in Rhythm's $0.075 an hour with no add-on. Soniox already attacks Deepgram on exactly this point and names the $0.12 an hour figure. Sprag should say it just as plainly on the comparison page. [[sprag-pricing]] [[soniox-pricing]]",
                },
              ],
            },
            {
              claim:
                "Deepgram bought a drive-thru company and is now hiring a restaurant specialist, which is a vertical Sprag is not in.",
              body: [
                {
                  type: "p",
                  text: "Deepgram's newsroom lists an acquisition of OfOne, described as bringing voice AI to drive-thru restaurants. The site now carries three restaurant solution pages and the job board lists an Enterprise AI Strategist, Deepgram for Restaurants, based in San Francisco. [[dg-newsroom]] [[dg-jobs]] [[dg-sitemap]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** Deepgram is moving from selling an API to selling a finished answer for one industry, which is where the margin is and where a price comparison stops working. Sprag cannot follow, and should instead take the developers Deepgram stops paying attention to while it does this. [[dg-jobs]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Sprag should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Publish a Deepgram comparison page this week, with both of Deepgram's prices on it.",
              body: [
                {
                  type: "p",
                  text: "Put the promotional rate and the list rate side by side, dated, with a line saying the promotion ends Sep 12. Add the add-on table, because diarization at $0.0020 a minute on streaming is $0.12 an hour on top of the model, and Sprag includes it. Add the voice-agent line, where Sprag is $0.0064 a minute against Deepgram's $0.075. Sprag already has all of these numbers on its own benchmark and pricing pages, so this is assembly rather than research. [[dg-pricing]] [[sprag-pricing]] [[sprag-benchmarks]]",
                },
              ],
            },
            {
              claim: "Lead with the two products Deepgram does not sell, and stop leading with speed.",
              body: [
                {
                  type: "p",
                  text: "Deepgram has no single model that hears speech and answers in speech, and no audio captioning product. Sprag has both, and Symphony's agentic result is genuinely strong: 1.03 seconds to first audio and 1.03 seconds end to end with no failures, against Deepgram's Voice Agent at 3.30 seconds with 10 failures out of 50. That is a much better fight than speed on transcription, where Deepgram's Flux is purpose-built and Cartesia's Ink is faster than Sprag on Sprag's own numbers. [[sprag-benchmarks]] [[dg-flux]]",
                },
              ],
            },
            {
              claim: "Fix the barge-in path before pitching anyone building a phone agent.",
              body: [
                {
                  type: "p",
                  text: "Sprag's own realtime quickstart tells developers to write a transport subclass so interruption works. Deepgram markets end-of-turn detection as its headline feature and Cartesia markets semantic endpointing with no external detector needed. A prospect comparing docs will see one company that solved it and one that documented the workaround. This is an engineering fix, not a marketing one. [[sprag-realtime]] [[dg-flux-state]] [[cartesia-ink]]",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Deepgram's full price list, checked Aug 27" },
            {
              type: "table",
              headers: [
                { text: "Product" },
                { text: "Now", w: "20%", nw: true },
                { text: "From Sep 13", w: "20%", nw: true },
                { text: "Per hour", w: "14%", n: true },
              ],
              rows: [
                ["Nova-3 monolingual, streaming", "$0.0048/min", "$0.0077/min", "$0.29 → $0.46"],
                ["Nova-3 multilingual, streaming", "$0.0058/min", "$0.0092/min", "$0.35 → $0.55"],
                ["Nova-3 monolingual, pre-recorded", "$0.0043/min", "no change", "$0.26"],
                ["Nova-3 multilingual, pre-recorded", "$0.0052/min", "no change", "$0.31"],
                ["Flux English, streaming", "$0.0065/min", "$0.0077/min", "$0.39 → $0.46"],
                ["Flux Multilingual, streaming", "$0.0078/min", "no change", "$0.47"],
                ["Whisper Large, pre-recorded", "$0.0048/min", "no change", "$0.29"],
                ["Flux TTS", "free", "$0.045 / 1K chars", "about $2.70"],
                ["Aura-2 TTS", "$0.030 / 1K chars", "no change", "about $1.80"],
                ["Aura-1 TTS", "$0.0150 / 1K chars", "no change", "about $0.90"],
                ["Voice Agent, Standard", "$0.056/min", "$0.075/min", "$3.36 → $4.50"],
                ["Voice Agent, Advanced", "$0.122/min", "$0.163/min", "$7.32 → $9.78"],
                ["Voice Agent, bring your own model", "$0.050/min", "$0.065/min", "$3.00 → $3.90"],
              ],
            },
            {
              type: "p",
              text: "Text-to-speech prices are quoted per 1,000 characters, so the per-hour column assumes 60,000 characters of speech an hour, which is about 150 words a minute. Deepgram does not publish a characters-per-hour figure, so treat that column as a working conversion rather than a Deepgram number. [[dg-pricing]]",
            },
            {
              type: "p",
              text: "Deepgram bills the Voice Agent by how long the websocket connection stays open rather than by how much speech passes through it, which its own pricing page states in a footnote on every tier. That means silence, hold music and a caller reading a number off a card all cost the same as speech. Sprag bills Symphony on audio tokens in and out, so silence is cheaper. This is a real difference and it is not on any Sprag page. [[dg-pricing]] [[sprag-pricing]]",
            },
            { type: "h3", text: "The add-ons, which are where the published price stops being the price" },
            {
              type: "table",
              headers: [
                { text: "Feature" },
                { text: "Streaming", w: "16%", nw: true },
                { text: "Pre-recorded", w: "16%", nw: true },
                { text: "Sprag", w: "22%" },
              ],
              rows: [
                ["Speaker labelling (diarization)", "$0.0020/min", "included", "Included in Rhythm"],
                ["Word timestamps", "included", "included", "Included in Rhythm"],
                ["Removing personal data (redaction)", "$0.0020/min", "$0.0020/min", "Not offered"],
                ["Boosting specific words (keyterms)", "$0.0013/min", "$0.0013/min", "Not offered"],
                ["Finding names and places (entities)", "$0.0017/min", "$0.0017/min", "Not offered"],
                ["Punctuation and casing", "included", "included", "Included"],
              ],
            },
            {
              type: "p",
              text: "Turning on speaker labelling for live audio adds $0.12 an hour, which is more than Sprag's entire transcription price of $0.075. A Deepgram streaming customer who wants speaker labels, redaction and keyterms is paying $0.0053 a minute in add-ons on top of the model, or $0.32 an hour, which more than doubles the promotional rate. [[dg-pricing]]",
            },
            { type: "h3", text: "What Deepgram shipped this window" },
            {
              type: "table",
              headers: [
                { text: "Date", w: "8%", nw: true },
                { text: "What" },
              ],
              rows: [
                ["Aug 27", "Nova-3 adds Assamese, Mongolian and Pashto. Improved Czech, Danish, Swedish, Tagalog and Turkish. [[dg-changelog]]"],
                ["Aug 27", "Deepgram Speak '26, a first company conference, announced for Oct 29 in San Francisco. [[dg-speak]]"],
                ["Aug 27", "Deepgram is now inside Genesys Virtual Agent, its first deep contact-centre platform integration. [[li-genesys]]"],
                ["Aug 26", "Self-hosted release adds expressivity control to Flux TTS and Japanese punctuation handling. [[dg-changelog]]"],
                ["Aug 26", "Extended usage and billing metrics for Deepgram running inside Amazon SageMaker, published on the AWS blog. [[aws-sagemaker]]"],
                ["Aug 19", "Deepgram CLI 0.3.0. The speak command now defaults to Flux TTS instead of Aura-2. [[dg-changelog]]"],
                ["Aug 17", "Nova-3 adds Afrikaans and Georgian. Improved Hungarian, Macedonian, Russian, Slovak, Slovenian and Urdu. [[dg-changelog]]"],
                ["Aug 14", "Spoken-number conversion for Bulgarian, Cantonese, Malay and Korean. [[dg-changelog]]"],
                ["Aug 12", "Flux TTS reaches general availability and comes to self-hosted deployments. Nova-3 adds Nepali and Punjabi. [[dg-changelog]]"],
                ["Aug 10", "Nova-3 adds Armenian. Improved Tamil, Indonesian and Belarusian. [[dg-changelog]]"],
                ["Aug 7 and Aug 4", "Improved Nova-3 models for roughly 20 more languages across two releases. [[dg-changelog]]"],
                ["Jul 28", "US government cryptography images (FIPS 140-3) reach general availability for self-hosted customers. [[dg-changelog]]"],
              ],
            },
            {
              type: "p",
              text: "Ten changelog entries in 24 days is a fast pace, and eight of the ten are language work. Deepgram is spending its release capacity on breadth rather than on new capability. The one exception is Flux TTS reaching general availability on Aug 12. [[dg-changelog]]",
            },
            { type: "h3", text: "Feature by feature" },
            {
              type: "table",
              headers: [{ text: "" }, { text: "Deepgram", w: "34%" }, { text: "Sprag", w: "34%" }],
              rows: [
                ["Speech to text", "Nova-3 (45+ languages), Flux English, Flux Multilingual (10), Whisper Large", "Rhythm (30 languages plus 22 Chinese dialects)"],
                ["Knowing when a speaker stopped", "Built into Flux: start of turn, end of turn, early end of turn", "Not offered. Docs require patching the client for interruption"],
                ["Text to speech", "Flux TTS, Aura-2 (50+ voices), Aura-1", "Chorus, 56 voices, 10 languages"],
                ["Voice cloning", "Not offered publicly", "Yes, reference clip sent inside the request"],
                ["Making a voice from a description", "Not offered", "Yes, plain-English brief"],
                ["One model that hears and answers in speech", "No. Voice Agent chains three models", "Yes, Symphony"],
                ["Describing a whole audio clip", "No. Summaries and sentiment only", "Yes, Symphony Notes"],
                ["Image and video input", "No", "Yes, Symphony"],
                ["Running on your own servers", "Yes, documented for Kubernetes, Docker, Podman and bare metal", "Contact us, no documentation"],
                ["Regional endpoints", "EU and Australia, both live", "One endpoint"],
                ["Security paperwork", "SOC 2 Type I and II, HIPAA with a signed agreement, GDPR, CCPA, PCI, FIPS 140-3", "None published"],
                ["Training on customer audio", "No", "Yes by default, opt out by email"],
                ["Free to start", "$200 of credit, no card", "Free tier, no card"],
              ],
            },
            {
              type: "p",
              text: "Two rows in that table decide most enterprise deals and Sprag loses both. Deepgram will not train on customer audio and publishes the certificates that prove how it handles data. Sprag's terms grant it a licence to train on customer content, with an opt-out by email that only applies going forward, while the voice-cloning page tells buyers the API keeps no copy of the speaker. Those two documents disagree, and voice cloning is exactly the workload where a buyer reads both. [[sprag-terms]] [[dg-security]]",
            },
          ],
        },
      ],
    },
    {
      id: "search-and-marketplaces",
      title: "Search and marketplaces",
      blocks: [
        {
          type: "fig",
          panels: [
            {
              cap: "Pages on the website",
              sub: "Counted from each company's own sitemap on Aug 27.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                rows: [
                  ["Soniox", 19868, "other"],
                  ["Deepgram", 1342, "primary"],
                  ["Cartesia", 232, "other"],
                  ["Sprag", 72, "us"],
                ],
                aria:
                  "Pages listed in each sitemap: Soniox 19,868, Deepgram 1,342, Cartesia 232, Sprag 72.",
              },
              legend: [
                { series: "primary", label: "Deepgram" },
                { series: "us", label: "Sprag" },
                { series: "other", label: "Others" },
              ],
            },
            {
              cap: "Pages aimed at a competitor's name",
              sub: "The page someone lands on when they search for an alternative.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                rows: [
                  ["Soniox", 489, "other"],
                  ["Cartesia", 30, "other"],
                  ["Deepgram", 11, "primary"],
                  ["Sprag", 0, "us"],
                ],
                aria:
                  "Comparison pages published: Soniox 489, Cartesia 30, Deepgram 11, Sprag 0.",
              },
              legend: [
                { series: "primary", label: "Deepgram" },
                { series: "us", label: "Sprag" },
                { series: "other", label: "Others" },
              ],
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          style: "did",
          items: [
            {
              claim:
                "Deepgram publishes 11 comparison pages, and two of them are written to be quoted rather than read.",
              body: [
                {
                  type: "p",
                  text: "Deepgram has a page for AssemblyAI, Amazon, Microsoft, Speechmatics, OpenAI, Google and ElevenLabs, plus two guides titled Voice AI Providers Compared and Deepgram vs OpenAI vs Google: accuracy, latency, price compared. Those two are written as neutral roundups rather than as sales pages, which is the format that answer engines quote. Sprag is not named on any of them. [[dg-compare]] [[dg-roundup]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** Sprag is small enough that Deepgram has not noticed it, which is the best moment to publish the comparison rather than the worst. Nobody will retaliate for a page nobody at Deepgram is tracking yet. [[dg-compare]]",
                },
              ],
            },
            {
              claim:
                "Deepgram built a search moat out of two things Sprag could copy in a week: one page per language, and a glossary.",
              body: [
                {
                  type: "p",
                  text: "Deepgram runs 52 pages of the form deepgram.com/product/speech-to-text/gujarati, one per language, and 304 glossary entries explaining terms in the category. Together those are 356 of its 1,342 pages and they capture the long tail of people searching for transcription in a specific language. Soniox does the same thing at far larger scale, with 3,601 pages covering translation between individual language pairs. Sprag has one page listing all 30 languages in a table. [[dg-sitemap]] [[soniox-compare]] [[sprag-langs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** Sprag's 30 languages plus 22 Chinese dialects could become 52 pages generated from the model catalogue it already publishes as machine-readable files. That is a build, not a writing project, and it is the cheapest way to more than double the site. [[sprag-models]]",
                },
              ],
            },
            {
              claim:
                "Deepgram is the only company in this group that has done the work to be quoted by AI assistants, and Sprag is the second.",
              body: [
                {
                  type: "p",
                  text: "Deepgram's documentation offers a markdown version of every page, an index at /llms.txt, and a hosted connector for coding assistants at developers.deepgram.com/_mcp/server. Sprag does the same: a markdown twin of every page, four index files, and a robots file that allows the assistant crawlers while blocking the training crawlers. Cartesia and Soniox do neither. [[dg-llms]] [[sprag-llms]] [[sprag-robots]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** this is the one distribution channel where Sprag is already at parity with a company 100 times its size. The gap is that Deepgram has 1,342 pages of material for an assistant to quote and Sprag has 72. Adding the comparison page and the language pages feeds the same channel twice. [[sprag-llms]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Sprag should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Write the four comparison pages nobody else has written about Sprag.",
              body: [
                {
                  type: "p",
                  text: "Sprag vs Deepgram, Sprag vs Soniox, Sprag vs Cartesia and Sprag vs AssemblyAI. Sprag already ran the benchmark and already publishes the methodology, which almost nobody in this category does. Put both of Deepgram's prices on the Deepgram page with the Sep 12 date. Be accurate about the places Sprag loses, because Sprag's own benchmark data shows Cartesia faster on text-to-speech, and a page that admits that will be trusted on everything else. [[sprag-benchmarks]] [[dg-pricing]]",
                },
              ],
            },
            {
              claim: "Turn the Google ads back on, narrowed to the words Deepgram does not sell against.",
              body: [
                {
                  type: "p",
                  text: "Sprag has run 25 creatives since April in short bursts that stop after a week or two, and nothing is running today. Deepgram has 173 running and 347 on record, so a broad transcription buy is unwinnable. The words Deepgram has no landing page for are audio captioning, describe an audio clip, speech to speech API, voice cloning API and multimodal inference. Sprag has a product page for each of those and Deepgram has none. Run those continuously on a small budget rather than restarting a broad campaign every month. [[gads-sprag]] [[gads-dg]] [[dg-sitemap]]",
                },
              ],
            },
            {
              claim: "Get listed inside LiveKit, Vapi, Pipecat, OpenRouter and Hugging Face.",
              body: [
                {
                  type: "p",
                  text: "Pipecat shipped Deepgram Flux on SageMaker support in version 1.8.0 this week, and its release post drew reactions from Speechmatics, LiveKit, Ufonia, Lumeris and SquadStack. Deepgram sponsors VapiCon in San Francisco in November alongside AssemblyAI and Speechmatics. Sprag has two integration pages built on generic OpenAI compatibility rather than a native plugin, and appears in none of these listings. A native plugin puts Sprag in the dropdown at the moment someone picks a provider. [[li-pipecat]] [[li-vapicon]] [[sprag-integrations]]",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "What the two sitemaps are made of" },
            {
              type: "table",
              headers: [
                { text: "Type of page" },
                { text: "Deepgram", w: "16%", n: true },
                { text: "Sprag", w: "16%", n: true },
              ],
              rows: [
                ["Guides and articles", "817", "7"],
                ["Glossary entries", "304", "0"],
                ["One page per language", "52", "0"],
                ["Industry and use-case pages", "17", "0"],
                ["Comparison pages", "11", "0"],
                ["Customer stories", "31", "1"],
                ["Product pages", "6", "8"],
                ["Documentation", "separate site", "44"],
                ["Total in sitemap", "1,342", "72"],
              ],
            },
            {
              type: "p",
              text: "The shape matters more than the total. Deepgram's pages are almost all built to catch a search: a language, a term, a competitor's name, an industry. Sprag's 72 are almost all product and documentation, which only catch people who already know the name Sprag. That is the difference between a site that finds customers and a site that serves them. [[dg-sitemap]] [[sprag-sitemap]]",
            },
            { type: "h3", text: "Deepgram's comparison pages, in full" },
            {
              type: "table",
              headers: [{ text: "Page" }, { text: "Aimed at", w: "24%" }],
              rows: [
                ["[assemblyai-vs-deepgram](https://deepgram.com/compare/assemblyai-vs-deepgram)", "AssemblyAI"],
                ["[assemblyai-vs-deepgram-alternative](https://deepgram.com/compare/assemblyai-vs-deepgram-alternative)", "AssemblyAI"],
                ["[elevenlabs-vs-deepgram](https://deepgram.com/compare/elevenlabs-vs-deepgram)", "ElevenLabs"],
                ["[openai-vs-deepgram-alternative](https://deepgram.com/compare/openai-vs-deepgram-alternative)", "OpenAI"],
                ["[google-vs-deepgram-alternative](https://deepgram.com/compare/google-vs-deepgram-alternative)", "Google"],
                ["[amazon-vs-deepgram](https://deepgram.com/compare/amazon-vs-deepgram)", "Amazon"],
                ["[amazon-vs-deepgram-alternative](https://deepgram.com/compare/amazon-vs-deepgram-alternative)", "Amazon"],
                ["[microsoft-vs-deepgram-alternative](https://deepgram.com/compare/microsoft-vs-deepgram-alternative)", "Microsoft"],
                ["[speechmatics-vs-deepgram-alternative](https://deepgram.com/compare/speechmatics-vs-deepgram-alternative)", "Speechmatics"],
                ["[nuance-vs-deepgram](https://deepgram.com/nuance-vs-deepgram)", "Nuance"],
                ["[voice-ai-providers-compared](https://deepgram.com/learn/voice-ai-providers-compared)", "Everyone, roundup format"],
              ],
            },
            {
              type: "p",
              text: "Note who is missing. There is no page for Cartesia, none for Soniox, and none for Sprag. Deepgram is defending against the incumbents it took share from rather than against the cheap new entrants, which is the standard mistake a company makes after a large funding round. That gap will close once one of them gets big enough to notice. [[dg-compare]]",
            },
            { type: "h3", text: "The cheapest way to more than double the site" },
            {
              type: "p",
              text: "Sprag publishes its model list as a machine-readable file that is regenerated from the live API. Thirty languages plus 22 Chinese dialects is 52 pages, each with the price, the language code, a sample request and the honest note about which languages Sprag can transcribe but not speak. Deepgram has 52 such pages and Soniox has 3,601. This is a scripted build against data Sprag already has, and it takes the site from 72 pages to 124. [[sprag-models]] [[dg-sitemap]]",
            },
            { type: "h3", text: "Where the ranking is coming from" },
            {
              type: "p",
              text: "The usual traffic and paid-keyword tools were not available this week. Similarweb returned a 403, SpyFu returned a 404 on its public endpoint, and Apify hit its monthly limit after the social pulls completed. Everything in this section is counted directly from public sitemaps and from Google's own ad transparency records rather than estimated by a third party, so the numbers are exact but narrower than usual. Traffic and keyword estimates return next week. [[gads-dg]] [[dg-sitemap]]",
            },
          ],
        },
      ],
    },
    {
      id: "advertising-and-social-media",
      title: "Advertising and social media",
      blocks: [
        {
          type: "fig",
          panels: [
            {
              cap: "Google ad creatives still running on Aug 27",
              sub: "Counted from Google's own advertiser records.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                rows: [
                  ["Deepgram", 173, "primary"],
                  ["AssemblyAI", 46, "other"],
                  ["Cartesia", 26, "other"],
                  ["Sprag", 3, "us"],
                  ["Soniox", 0, "other"],
                ],
                aria:
                  "Google ad creatives last shown on or after Aug 25: Deepgram 173, AssemblyAI 46, Cartesia 26, Sprag 3, Soniox 0.",
              },
              legend: [
                { series: "primary", label: "Deepgram" },
                { series: "us", label: "Sprag" },
                { series: "other", label: "Others" },
              ],
            },
            {
              cap: "New Deepgram ad creatives, by month first shown",
              sub: "The March spike follows the funding round announced Jan 13.",
              chart: {
                kind: "columns",
                fmt: "num",
                label: [0, 7],
                rows: [
                  ["Jan", 5],
                  ["Feb", 4],
                  ["Mar", 79],
                  ["Apr", 21],
                  ["May", 59],
                  ["Jun", 7],
                  ["Jul", 3],
                  ["Aug", 33],
                ],
                aria:
                  "New Deepgram Google ad creatives by month in 2026: January 5, February 4, March 79, April 21, May 59, June 7, July 3, August 33.",
              },
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          style: "did",
          items: [
            {
              claim:
                "Deepgram's community manager spends her days replying to strangers who mention Deepgram, and offering them the startup programme within hours.",
              body: [
                {
                  type: "p",
                  text: "In one week, Naomi Carrigan replied to four separate accounts that had mentioned building on Deepgram. To one: hello, I would love to hear more about how inpublic is leveraging deepgram, I may have a community programme to help you. To another: yes, we have a startup programme for this exact purpose, it allows us to support you as you continue to grow with deepgram. Two more got the same message. Deepgram also gives every new account $200 of credit with no card, which one user described publicly as $200 free AI credits almost nobody in this niche is posting. [[x-naomi]] [[x-naomi-2]] [[dg-pricing]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** this is a one-person motion with no budget behind it, and it is how Deepgram is capturing the exact builders Sprag needs. Sprag can copy it this week. The searches are already written in section 6. [[x-naomi]]",
                },
              ],
            },
            {
              claim:
                "An accuracy chart published on Aug 26 put Deepgram last, and it is the only real criticism of Deepgram on X this week.",
              body: [
                {
                  type: "p",
                  text: "Google launched Gemini 3.5 Transcribe on Aug 26. On the FLEURS multilingual test, the chart that circulated showed Gemini 3.5 Transcribe Live at 5.50% word error rate, Google Chirp 3 at 7.32%, OpenAI at 8.97%, ElevenLabs Scribe v2 at 9.70% and Deepgram Nova-3 at 15.77%, last place by a wide margin. Replies included deepgram sitting at 15.77, that's not a close race anymore and deepgram fans have a rough chart to wake up to today. Deepgram's own site claims 5.26% for general English, so the gap is multilingual audio rather than English. Fourteen of the 90 X posts this week are this story. [[x-fleurs]] [[x-fleurs-2]] [[aa-stt]] [[dg-benchmarks]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** Deepgram is publicly weak on multilingual accuracy in the same week it shipped eight new languages, which is the gap between breadth and quality. Sprag's own customer says exactly this: most models like Deepgram and ElevenLabs Scribe land around 70% on hard multilingual evals and Sprag reached 90%. Put that quote next to this chart. [[sprag-issen]]",
                },
              ],
            },
            {
              claim:
                "A competitor launched the same model Sprag serves, said it beats Deepgram, and priced it at half. Sprag said nothing.",
              body: [
                {
                  type: "p",
                  text: "On Aug 26, Autoloops announced Qwen3-ASR-1.7B on its platform with the line: it beats Deepgram Nova-3 in accuracy, multilingual switching, while being half priced. It's the time for open weight voice models. Qwen3-ASR-1.7B is the model Sprag serves as Rhythm, confirmed by the pipeline records in Sprag's own benchmark data. Sprag charges $0.075 an hour for it and has published a full methodology. Nobody from Sprag replied. [[x-autoloops]] [[sprag-benchmarks]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** somebody else is making Sprag's argument, about Sprag's model, in public, and collecting the attention for it. Sprag has better numbers and a real customer story. Reply to that post with the benchmark link. [[x-autoloops]]",
                },
              ],
            },
            {
              claim:
                "Deepgram is running 173 Google ads today and Sprag is running none, because Sprag's last four stopped on Aug 26.",
              body: [
                {
                  type: "p",
                  text: "Google's advertiser records list 347 ad creatives for Deepgram, Inc. going back to Oct 2023, of which 173 were still shown on or after Aug 25 and 33 first appeared this month. The split is 247 text ads, 75 image and 25 video. Sprag has 25 creatives on record, all since April, run in short bursts of three or four that last five to sixteen days. The most recent burst ran Aug 21 to Aug 26. As of today Sprag has three creatives with a recent last-shown date and nothing new. [[gads-dg]] [[gads-sprag]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** stopping and starting teaches Google nothing and wastes the learning period every time. Either run continuously on a small number of narrow terms or do not run at all and put the money into the comparison pages. [[gads-sprag]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Sprag should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Work the lead table in the Full analysis below, starting with the nine companies.",
              body: [
                {
                  type: "p",
                  text: "Vokalith AI, CallKaro.AI, Divinci AI, Speko, NF Tech, airtxt.ai, SubtitleNEXT, 2X Solutions AI and Four-Leaf AI all described a production Deepgram workload in public in the last seven days. Each row has the evidence and the angle. Open with the number that applies to their workload, not with a product tour. Four of them already route across multiple providers, which means switching costs them nothing. [[x-deepgram]] [[li-deepgram]]",
                },
              ],
            },
            {
              claim: "Put one person on replying to Deepgram mentions, the same way Deepgram does.",
              body: [
                {
                  type: "p",
                  text: "Deepgram's version is one community manager, no budget, and a $200 credit to offer. Sprag's version has a stronger offer: Qwen3.8-27B is free on Sprag through the end of August and the transcription price is a quarter of Deepgram's. Reply from a named person with an engineering title rather than a brand account. The searches to watch are listed in section 6. [[x-naomi]] [[sprag-free]]",
                },
              ],
            },
            {
              claim: "Answer the multilingual accuracy chart while it is still being shared.",
              body: [
                {
                  type: "p",
                  text: "Fourteen posts this week are about Deepgram finishing last on a multilingual accuracy chart. Sprag has a named customer on the record saying Deepgram and ElevenLabs Scribe land around 70% on hard multilingual evals while Sprag reached 90% at under 300ms. That is the strongest single asset Sprag owns and it is currently sitting in a blog post nobody has been pointed to. [[x-fleurs]] [[sprag-issen]]",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Companies found using Deepgram in public this week" },
            {
              type: "p",
              text: "Pulled Aug 27 from 90 X posts and 40 LinkedIn posts covering the previous seven days, after removing Deepgram staff, recruiters and hashtag spam. Ranked with the ones that look like a real company and a real workload first. [[x-deepgram]] [[li-deepgram]]",
            },
            {
              type: "table",
              headers: [
                { text: "Who", w: "20%" },
                { text: "Where", w: "12%", nw: true },
                { text: "Why we think they are a customer" },
              ],
              rows: [
                [
                  "Vokalith AI (Taranjot Kaur, founder)",
                  "LinkedIn",
                  "Profile reads enterprise voice AI, agentic AI and operations automation, HIPAA-compliant systems. Engaged with a post about voice-agent turn latency crossing 1,300ms. Regulated healthcare voice is the workload where Deepgram's per-minute connection billing hurts most. [[li-latency]]",
                ],
                [
                  "CallKaro.AI (Ujjawal Kumar, co-founder and CTO)",
                  "LinkedIn",
                  'The company account commented "your agent should not go down because someone else\'s API did" on a voice-infrastructure post, and two of its engineers reacted to the same post. A company marketing failover between speech providers is already unhappy with one of them. [[li-callkaro]]',
                ],
                [
                  "Divinci AI",
                  "X",
                  'Shipped a changelog entry on Aug 24: "set a provider for the workspace, override it per release, and bring your own Deepgram Nova-3 key". They have already built provider switching, so adding Sprag is a config change. [[x-divinci]]',
                ],
                [
                  "Speko (Bek Nabdik)",
                  "X",
                  '"every call routed across deepgram, elevenlabs, cartesia, openai on measured latency. a better model ships, your agent improves without a rewrite." They route on measured latency and price, which is the exact basis Sprag wins on. [[x-speko]]',
                ],
                [
                  "NF Tech (Jainil)",
                  "X",
                  '"What we run at NF Tech: STT: Deepgram over Whisper (10x faster, cheaper at scale)". They chose Deepgram explicitly on speed and cost. Sprag is cheaper on both counts. [[x-nftech]]',
                ],
                [
                  "airtxt.ai",
                  "LinkedIn",
                  "iPhone dictation app whose 1.1 release added bring-your-own-key: connect Deepgram for speech recognition, keys stay in the Keychain. A per-user key model means their users pay the provider directly, so price is the whole pitch. [[li-airtxt]]",
                ],
                [
                  "SubtitleNEXT / Profuz Digital",
                  "X",
                  "Promoting extended AI transcription with AssemblyAI, Deepgram, ElevenLabs and Whisper at IBC 2026, stand 8.A88. A subtitling vendor already integrating four providers, which makes a fifth cheap. [[x-subtitlenext]]",
                ],
                [
                  "2X Solutions AI",
                  "Deepgram's own X account",
                  "Deepgram published the case study this week: Nova-2 catching opt-outs across 7.3M+ calls with sub-2-second turnaround. A high-volume compliance workload on an older model, which means a big bill and a migration already due. [[x-2x]]",
                ],
                [
                  "Four-Leaf AI (Frank)",
                  "X",
                  '"I use deepgram for STT and can store from those logs" for an AI interviewer product with a conversational interviewer called Clover. Interview transcription is exactly what Sprag\'s captioning model does better. [[x-fourleaf]]',
                ],
                [
                  "Ed Charbeneau",
                  "X",
                  'Building on the Deepgram Agent API and posted "I burned through $50 of Deepgram API credits last night" after leaving a socket open. Deepgram bills the agent by connection time, which is what made that expensive. Sprag bills on audio. [[x-ed]] [[x-ed-2]]',
                ],
                [
                  "Vinay Jain (karyalo.in, Websinova)",
                  "LinkedIn",
                  "Published a full build using Deepgram Flux for speech-to-text and Deepgram Aura 2 for voice, open-sourced it, and offers to build them for businesses. An agency that will repeat this stack across many clients. [[li-vinay]]",
                ],
                [
                  "Genesys",
                  "LinkedIn",
                  "Deepgram's AWS Alliance Lead announced Deepgram is now integrated into Genesys Virtual Agent. A platform integration rather than a customer, but it tells you where Deepgram's enterprise volume will come from next. [[li-genesys]]",
                ],
                [
                  "Coval (Brooke Hopkins)",
                  "X and LinkedIn",
                  "Co-hosting a happy hour with Deepgram at Genesys Xperience and running a booth. Coval evaluates voice agents, so it sits between buyers and providers. [[x-coval]] [[li-genesys]]",
                ],
                [
                  "Max Rovensky",
                  "X",
                  '"It also supports multiple voice dictation providers - ElevenLabs, Groq Whisper, Deepgram and the built-in Apple one." A paid Mac dictation app with a provider list Sprag could join. [[x-rovensky]]',
                ],
                [
                  "superwhisper (Neil Chudleigh)",
                  "X",
                  '"we have realtime like that with Parakeet, Deepgram, 11labs Scribe. You can flick it on for any of your modes." Already multi-provider, already shipping. [[x-superwhisper]]',
                ],
                [
                  "Golos",
                  "X",
                  "Open-source dictation tool, described in a widely shared Chinese-language post as running realtime speech through Deepgram. Open source means the provider is one config line. [[x-golos]]",
                ],
                [
                  "Project Raven",
                  "X",
                  "Desktop meeting copilot that routes system and microphone audio through echo cancellation and then sends both streams to Deepgram over parallel websockets. Two parallel streams means two bills. [[x-raven]]",
                ],
                [
                  "Samarth (@SamarthMUFC)",
                  "X",
                  "Posted twice in the window about a real-time voice agent handling live phone conversations using Twilio, Deepgram, OpenAI and Hume AI, with the GitHub link. Looking for work, so open to a sponsored rebuild. [[x-samarth]]",
                ],
                [
                  "Alex Garcia",
                  "X",
                  "Building a voice interface for Apple Watch: the app provides speech intake and speech output via Deepgram and ElevenLabs, you provide the webhook. Recruiting beta testers now. [[x-alexg]]",
                ],
                [
                  "Manjeet Godara (Merra)",
                  "LinkedIn",
                  "Live AI interviewer using OpenAI Realtime for the conversation and Deepgram for speech-to-text, with the repo public. Reacted to by five colleagues at Rosmerta Technologies. [[li-merra]]",
                ],
                [
                  "Aly (@0xsilverbullet)",
                  "X",
                  "Porting a voice feature into a coding tool: requires a separate server and a Deepgram API key. Early enough to change providers. [[x-aly]]",
                ],
                [
                  "@gatyoukatyou",
                  "X",
                  "Japanese meeting-minutes app currently using Deepgram, posting about trying an alternative on the day Google launched one. Actively shopping. [[x-jp-minutes]]",
                ],
                [
                  "@Seg_Faul (Even g2)",
                  "X",
                  "Voice conversation app using Deepgram, posting about having to add a second language model pass to fix misrecognition. An accuracy complaint with a workaround attached. [[x-segfaul]]",
                ],
                [
                  "@ichikiwhere",
                  "X",
                  '"I use deepgram now, results are more accurate, plus like you said the free $200 credits." Chose Deepgram on the free credit, which is the cheapest kind of loyalty to break. [[x-ichiki]]',
                ],
              ],
            },
            { type: "h3", text: "The 31 companies Deepgram names itself" },
            {
              type: "p",
              text: "Deepgram's customers page carries 31 published stories. These are not new leads, but the mix tells you which industries Deepgram is defending and where it is quoting a price it will not move on: Five9, Telnyx, Voximplant, Synthflow AI, Red Box, MaxContact, Sharpen, Abby Connect, CallTrackingMetrics, Creovai, Revenue.io, Cloud Communications, Gradient Labs, GetVocal, Vida, SigmaMind AI, Prem AI, Klubi, Elerian, Legalmate, Nytro AI, UpdateAI, Flowtica, BigVU, Jobcase, Podsights, Wistia, Creditas, 2X Solutions AI, an unnamed Fortune 50 retail pharmacy and an unnamed leading medical transcription platform. [[dg-customers]]",
            },
            {
              type: "p",
              text: "Nineteen of the 31 are contact-centre or telephony companies. That concentration is the reason Deepgram bought a drive-thru company, hired a restaurants specialist and integrated with Genesys this week. It is also why Deepgram's public roadmap is turn detection and language breadth rather than anything Sprag competes on. Sprag's opening is the other half of the market: the individual developers and small teams in the table above. [[dg-customers]] [[dg-newsroom]]",
            },
            { type: "h3", text: "The ad footprint" },
            {
              type: "table",
              headers: [
                { text: "Company" },
                { text: "Creatives on record", w: "16%", n: true },
                { text: "Still running Aug 27", w: "16%", n: true },
                { text: "New in August", w: "13%", n: true },
                { text: "Running since", w: "13%", nw: true },
              ],
              rows: [
                ["Deepgram", "347", "173", "33", "Oct 2023"],
                ["AssemblyAI", "153", "46", "1", "2024"],
                ["Cartesia", "28", "26", "8", "2025"],
                ["Sprag", "25", "3", "4", "Apr 2026"],
                ["Soniox", "21", "0", "0", "stopped"],
              ],
            },
            {
              type: "p",
              text: "ElevenLabs is not in that table because its record is different in kind: 400 or more creatives spread across four advertiser accounts, three of which are registered to individual people rather than to Eleven Labs Inc. That is an affiliate arrangement, not a company ad account, and it is not a model Sprag should copy. [[gads-elevenlabs]]",
            },
            {
              type: "p",
              text: "Deepgram's ad mix is 247 text ads to 75 image and 25 video, which is a search-first buy rather than a brand campaign. The March spike of 79 new creatives lands two months after the funding announcement, and May's 59 is the second wave. July fell to three, then August jumped back to 33, which usually means a new campaign was approved. Meta ad data could not be pulled this week because the Apify limit was reached. [[gads-dg]]",
            },
            { type: "h3", text: "What people are saying, counted" },
            {
              type: "table",
              headers: [{ text: "Theme" }, { text: "Posts", w: "10%", n: true }, { text: "Example" }],
              rows: [
                ["Someone naming Deepgram as their stack", "24", "\"STT: Deepgram over Whisper (10x faster, cheaper at scale)\""],
                ["The multilingual accuracy chart", "14", "\"deepgram sitting at 15.77, that's not a close race anymore\""],
                ["Deepgram's own posts and staff", "12", "Flux TTS launch, Speak '26, the 2X Solutions case study"],
                ["Recruiters posting Deepgram jobs", "9", "Sales Development Representative, Research Staff, FDE"],
                ["Price comparisons naming Deepgram", "8", "\"Batch rates, August 2026: Deepgram $0.258/hr\""],
                ["Competitors positioning against Deepgram", "6", "Autoloops, Fish Audio, Voibe, NineNineSix"],
                ["Billing or configuration surprises", "4", "diarize on by default, $50 of credits burned overnight"],
                ["Company news", "3", "Singapore APAC headquarters, SageMaker metrics"],
              ],
            },
            {
              type: "p",
              text: "The useful read is that almost nobody complains about Deepgram's product. Fourteen of the 90 posts are negative and thirteen of those are one accuracy chart published by a third party. There is no Reddit thread of angry customers and no subreddit to watch. Deepgram is not losing customers to unhappiness, which means Sprag has to win on price and on the two products Deepgram does not sell rather than on dissatisfaction. [[x-deepgram]] [[reddit-dg]]",
            },
          ],
        },
      ],
    },
    {
      id: "hiring",
      title: "Hiring",
      blocks: [
        {
          type: "fig",
          panels: [
            {
              cap: "Deepgram's 93 open jobs, by department",
              sub: "From the company job board on Aug 27.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                rows: [
                  ["Engineering", 39, "primary"],
                  ["Sales", 18, "primary"],
                  ["Customer Success", 10, "primary"],
                  ["Marketing", 7, "primary"],
                  ["Research", 5, "primary"],
                  ["Product", 5, "primary"],
                  ["Finance", 4, "primary"],
                  ["G&A", 3, "primary"],
                  ["Data Operations", 2, "primary"],
                ],
                aria:
                  "Deepgram open jobs by department: Engineering 39, Sales 18, Customer Success 10, Marketing 7, Research 5, Product 5, Finance 4, G and A 3, Data Operations 2.",
              },
            },
            {
              cap: "Where those jobs are",
              sub: "Nineteen of 93 are outside the United States.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                rows: [
                  ["USA, remote", 60, "primary"],
                  ["San Francisco", 7, "primary"],
                  ["Singapore", 5, "primary"],
                  ["London", 4, "primary"],
                  ["Washington D.C.", 3, "primary"],
                  ["EMEA, remote", 3, "primary"],
                  ["Everywhere else", 11, "other"],
                ],
                aria:
                  "Deepgram open jobs by location: USA remote 60, San Francisco 7, Singapore 5, London 4, Washington D.C. 3, EMEA remote 3, everywhere else 11.",
              },
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          style: "did",
          items: [
            {
              claim: "Deepgram is building a US government business, and pays the most for it.",
              body: [
                {
                  type: "p",
                  text: "Five roles point at the public sector: Enterprise Account Executive, Federal Civilian in Washington D.C. at $280K to $350K, Federal Partner Manager at $200K to $250K, Senior Solutions Engineer, Federal, Senior Forward-Deployed Engineer, Federal, and a Defense and Edge Tech Lead at $219K to $274K. The federal account role is the highest-paid sales job on the board. Deepgram also shipped US government cryptography images to general availability for self-hosted customers on Jul 28, and one of its investors is In-Q-Tel, the CIA's venture arm. [[dg-jobs]] [[dg-changelog]] [[dg-series-c]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** this is revenue Sprag structurally cannot compete for, and it is where Deepgram's attention is going. It also means Deepgram's price will get less flexible over time, because government contracts anchor a rate card. Sprag should not chase it and should take the developer market Deepgram is de-prioritising. [[dg-jobs]]",
                },
              ],
            },
            {
              claim: "Seven jobs are rebuilding the self-serve signup funnel, which is the only place Deepgram and Sprag actually meet.",
              body: [
                {
                  type: "p",
                  text: "Deepgram is hiring an Engineering Manager, a Senior Full-stack Engineer and a Senior Frontend Engineer all for a Console team explicitly labelled Product-Led Growth, plus a Staff Product Manager, a second Staff Product Manager for Agentic Experiences, a Staff Product Analyst for Product-Led Growth and a Staff Developer Experience Engineer at $219.3K to $276.8K. Seven roles, none filled. [[dg-jobs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** Deepgram's self-serve experience is a hiring plan rather than a product right now, and that is the surface every lead in section 4 touches first. Sprag's signup is already good and its free tier is already generous. That advantage has a deadline on it. [[dg-jobs]] [[sprag-pricing]]",
                },
              ],
            },
            {
              claim:
                "The highest-paid role on the entire board is text-to-speech research, which says where Deepgram thinks it is behind.",
              body: [
                {
                  type: "p",
                  text: "Director of Research, Text to Speech pays $213K to $328.3K, more than any other listing. Deepgram also lists Embedded AI Engineer, On-Device Models at $219.3K to $274.1K, which is Cartesia's home ground. Meanwhile Flux TTS reached general availability on Aug 12 and the command-line tool switched its default voice from Aura-2 to Flux on Aug 19. A company does not pay a premium for a research director in a product it has just shipped unless it thinks the product is not finished. [[dg-jobs]] [[dg-changelog]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** Deepgram is about to get better at the one thing Sprag is measurably worst at. Sprag's own benchmark data puts its text-to-speech at 940ms to first audio against Cartesia's 151ms. Sprag should not build its story on speech generation. [[sprag-benchmarks]]",
                },
              ],
            },
            {
              claim: "The marketing department is being rebuilt from scratch under a new leader.",
              body: [
                {
                  type: "p",
                  text: "Seven marketing roles are open: VP of Demand Generation at $230K to $300K, Director of Brand Strategy and Narrative at $180K to $225K posted on Aug 26, Head of Communications, Head of Editorial Content, two Senior Product Marketing Managers and a Staff Web Engineer for marketing. Deepgram's chief marketing officer, Myra El-Bayoumi, joined from Redis where she ran a full rebrand. There is also an Executive Assistant, Marketing role, which is what a company posts when the marketing leader has more meetings than time. [[dg-jobs]] [[dg-leadership]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Sprag:** the 33 new ad creatives in August and the first company conference in October are the start of this. Deepgram's marketing is about to get louder and better funded, so Sprag's window to publish comparison pages against a distracted competitor is measured in months rather than years. [[dg-jobs]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Sprag should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Sell against the roles Deepgram has not filled yet.",
              body: [
                {
                  type: "p",
                  text: "Seven unfilled self-serve roles and a Senior Strategic Renewals Manager at $240K to $260K say the same thing: signup and account care are thin right now. Sprag's answer to a developer is already better, one base URL and an OpenAI-compatible client, with nothing to migrate. Put a two-line migration snippet on the comparison page showing the base URL change and nothing else. [[dg-jobs]] [[sprag-quickstart]]",
                },
              ],
            },
            {
              claim: "Publish a careers page, even with two roles on it.",
              body: [
                {
                  type: "p",
                  text: "Sprag has no public job board and one named person on the site, while there are two founders. Deepgram's board is 93 roles with salary bands, and every enterprise buyer and every reporter looks at that page to judge whether a company is real. A page with two open roles and both founders on it is a day of work and it removes a question every prospect asks. [[dg-jobs]] [[sprag-about]]",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Every job posted in the last 30 days" },
            {
              type: "table",
              headers: [
                { text: "Posted", w: "8%", nw: true },
                { text: "Role" },
                { text: "Where", w: "16%", nw: true },
                { text: "Pay", w: "18%", nw: true },
              ],
              rows: [
                ["Aug 27", "[Software Test Engineer](https://jobs.ashbyhq.com/deepgram/4a6b5eb2-4720-4ec8-8d7d-4ae0f7bbe2cc)", "USA, remote", "$150K – $220K"],
                ["Aug 26", "[GM, Sales (EMEA)](https://jobs.ashbyhq.com/deepgram/c8799e26-121b-47be-8bc4-7b342fa32275)", "London", "not stated"],
                ["Aug 26", "[Director, Brand Strategy & Narrative](https://jobs.ashbyhq.com/deepgram/d7dc5974-8540-432a-a2ec-2a6691c9bb51)", "USA, remote", "$180K – $225K"],
                ["Aug 25", "[Partner Success Engineer (AWS)](https://jobs.ashbyhq.com/deepgram/ac705109-ea86-41da-a3f2-811c35248c6a)", "USA, remote", "$195K – $235K"],
                ["Aug 24", "[Revenue Accounting Manager](https://jobs.ashbyhq.com/deepgram/67874cff-a23f-4130-aeef-845f5f739621)", "USA, remote", "not stated"],
                ["Aug 24", "[Account Executive (Melbourne)](https://jobs.ashbyhq.com/deepgram/85fddd5f-8a08-48d4-975a-de845e1b81ac)", "Sydney", "not stated"],
                ["Aug 23", "[Research Staff, LLMs](https://jobs.ashbyhq.com/deepgram/39c2b79b-0269-4711-9354-be5ccf747a98)", "USA, remote", "$150K – $250K"],
                ["Aug 23", "[Research Engineer, ML Systems](https://jobs.ashbyhq.com/deepgram/9a030b32-d671-43e0-a221-4653bb73ba29)", "USA, remote", "$150K – $250K"],
                ["Aug 23", "[Research Staff, Voice AI Foundations](https://jobs.ashbyhq.com/deepgram/7cf277bc-a192-4007-a77a-fafbf8276a5e)", "USA, remote", "$150K – $250K"],
                ["Aug 23", "[Research Staff, Data Science](https://jobs.ashbyhq.com/deepgram/fdb4073a-4c1c-48d6-b6d5-f407d3e78d17)", "USA, remote", "$150K – $220K"],
                ["Aug 22", "[Forward-Deployed Engineer, Strategic Accounts](https://jobs.ashbyhq.com/deepgram/4bfadd29-fa58-4e06-bbf0-7b5dbc41a621)", "San Francisco", "$197K – $246K"],
                ["Aug 22", "[Solutions Architect - MENA](https://jobs.ashbyhq.com/deepgram/e3c33ed8-c80f-4af6-a904-7da6c413b074)", "EMEA, remote", "not stated"],
                ["Aug 21", "[Director of Research, Text to Speech](https://jobs.ashbyhq.com/deepgram/6e3344f4-48c7-4127-871c-3f1dada45323)", "USA, remote", "$213K – $328.3K"],
                ["Aug 21", "[Accounting Manager, GL & Close](https://jobs.ashbyhq.com/deepgram/17a6e0f9-6db3-4e68-b02c-2cf7318dd442)", "USA, remote", "$150K – $180K"],
                ["Aug 21", "[Customer Success Engineer (Scaled)](https://jobs.ashbyhq.com/deepgram/b856d0c2-df8e-492a-9044-62b0fd3c30b6)", "USA, remote", "$147K – $176.5K"],
                ["Aug 20", "[Senior Data Scientist, Data Flywheel](https://jobs.ashbyhq.com/deepgram/ba60a541-fdf7-44bf-a6bb-0e821f15af54)", "USA, remote", "$165K – $220K"],
                ["Aug 18", "[Executive Assistant, Marketing](https://jobs.ashbyhq.com/deepgram/b74b4d59-5b3e-46ac-9928-a5c8f6b7d321)", "USA, remote", "$127K – $160K"],
                ["Aug 14", "[Enterprise AI Strategist, Deepgram for Restaurants](https://jobs.ashbyhq.com/deepgram/8fd3acd1-31c0-4dad-a249-a8d3d5d79cc9)", "San Francisco", "not stated"],
                ["Aug 14", "[Global Head of Real Estate and Workplace](https://jobs.ashbyhq.com/deepgram/410cab78-0105-4270-a936-bec653ae5928)", "USA, remote", "not stated"],
                ["Aug 13", "[Staff Web Engineer, Marketing](https://jobs.ashbyhq.com/deepgram/4f9648d7-e25c-440c-8ec6-566a405c7c23)", "USA, remote", "$150K – $190K"],
                ["Aug 6", "[Senior PMM, Voice Agent](https://jobs.ashbyhq.com/deepgram/928303de-61d6-46ec-b10a-08709e1deb4a)", "USA, remote", "$150K – $190K"],
                ["Aug 6", "[Senior PMM, Solutions Marketing](https://jobs.ashbyhq.com/deepgram/0f597b67-3cd4-4d56-b951-d555031ee5cc)", "USA, remote", "$150K – $190K"],
                ["Aug 5", "[Senior Pre-Sales Solutions Engineer](https://jobs.ashbyhq.com/deepgram/d28f0a61-4a59-4817-b101-3457077b01b7)", "Singapore", "not stated"],
                ["Aug 5", "[Senior Pre-Sales Solutions Engineer](https://jobs.ashbyhq.com/deepgram/8a9bcce3-858f-4cc0-8459-2fe552b6aaa5)", "Sydney", "not stated"],
                ["Aug 3", "[Enterprise AE (Federal Civilian)](https://jobs.ashbyhq.com/deepgram/c22e34a4-018a-4123-a752-31ed64c320c8)", "Washington D.C.", "$280K – $350K"],
              ],
            },
            {
              type: "p",
              text: "Twenty-five roles posted in thirty days on a board that already held 68. Deepgram's revenue lead put it plainly on LinkedIn this week: Deepgram is growing faster than we can hire. High growth, higher complexity, highest caliber people. That post was recruiting for a Revenue Manager. [[dg-jobs]] [[li-karly]]",
            },
            { type: "h3", text: "What the finance roles say" },
            {
              type: "p",
              text: "Four finance roles are open: Senior Director of Accounting at $220K to $260K, Director of Technical Accounting and Financial Reporting at $170K to $220K, Revenue Accounting Manager, and Accounting Manager for general ledger and close. Technical accounting and financial reporting is an audit-readiness hire rather than a bookkeeping one. Combined with a Senior Strategic Renewals Manager at $240K to $260K and a Billing and Analytics Software Engineer, this is a company putting its revenue reporting in order. [[dg-jobs]]",
            },
            { type: "h3", text: "Where Deepgram is not hiring" },
            {
              type: "p",
              text: "There is no role anywhere on the board for speech-to-speech, for audio captioning, for voice cloning or for voice design. There is no multimodal role covering image or video. Deepgram's 39 engineering jobs are transcription, voice agents, inference infrastructure, the console and on-device models. The four products Sprag sells that Deepgram does not are not on the hiring plan, which is the clearest signal available that Deepgram does not intend to build them soon. [[dg-jobs]]",
            },
            {
              type: "why",
              text: "**Why it matters for Sprag:** a competitor's job board is the most honest roadmap it publishes. Deepgram has told Sprag, in 93 listings, that it is not coming for audio captioning or native speech-to-speech in the next year. Those two products should carry Sprag's positioning. [[dg-jobs]]",
            },
            { type: "h3", text: "Sprag's own team" },
            {
              type: "p",
              text: "Sprag's about page names one person, Ian Eaves, and the company has two founders. There is no careers page, no job board, and no LinkedIn company page. Deepgram publishes 93 roles with salary bands and thirteen named executives. For a buyer running vendor diligence, that difference is the whole risk assessment. [[sprag-about]] [[dg-leadership]]",
            },
          ],
        },
      ],
    },
    {
      id: "sources",
      title: "Sources",
      blocks: [
        { type: "h3", text: "Data tools" },
        {
          type: "links",
          items: [
            "[[gads-dg|Google Ads Transparency, Deepgram, Inc.]]. 347 creatives, pulled Aug 27",
            "[[gads-sprag|Google Ads Transparency, Sprag AI]]. 25 creatives, pulled Aug 27",
            "[[gads-elevenlabs|Google Ads Transparency, Eleven Labs Inc. and three individual accounts]]",
            "[[x-deepgram|X search for Deepgram, last 7 days]]. 90 posts via Apify",
            "[[li-deepgram|LinkedIn search for Deepgram, last 7 days]]. 40 posts, 120 reactions and comments via Apify",
            "[[reddit-dg|Reddit search for Deepgram, last 30 days]]. 25 posts via Apify",
            "[[dg-sitemap|deepgram.com/sitemap.xml]]. 1,342 addresses",
            "[[sprag-sitemap|sprag.ai/sitemap.xml]]. 72 addresses",
            "[[dg-jobs|Deepgram job board on Ashby]]. 93 listings with pay bands",
          ],
        },
        { type: "h3", text: "Deepgram's own pages" },
        {
          type: "links",
          items: [
            "[[dg-pricing|Deepgram pricing]]",
            "[[dg-changelog|Deepgram changelog]]",
            "[[dg-customers|Deepgram customer stories]]",
            "[[dg-newsroom|Deepgram newsroom]]",
            "[[dg-security|Deepgram data security]]",
            "[[dg-selfhosted|Deepgram self-hosted]]",
            "[[dg-leadership|Deepgram leadership]]",
            "[[dg-history|Deepgram company history]]",
            "[[dg-compare|Deepgram comparison pages]]",
            "[[dg-roundup|Voice AI providers compared]]",
            "[[dg-flux|Getting started with Flux]]",
            "[[dg-flux-state|Understanding the Flux state machine]]",
            "[[dg-flux-multi|Flux Multilingual and language prompting]]",
            "[[dg-llms|Deepgram documentation index for AI assistants]]",
            "[[dg-benchmarks|Deepgram speech-to-text benchmarks]]",
            "[[dg-speak|Deepgram Speak '26]]",
          ],
        },
        { type: "h3", text: "Sprag's own pages" },
        {
          type: "links",
          items: [
            "[[sprag-pricing|Sprag pricing]]",
            "[[sprag-benchmarks|Sprag benchmarks and methodology]]",
            "[[sprag-models|Sprag model catalogue]]",
            "[[sprag-langs|Sprag supported languages]]",
            "[[sprag-realtime|Sprag speech-to-speech documentation]]",
            "[[sprag-quickstart|Sprag quickstart]]",
            "[[sprag-integrations|Sprag integrations]]",
            "[[sprag-issen|How ISSEN delivers AI language tutoring at scale with Sprag]]",
            "[[sprag-economics|Voice agent economics in 2026]]",
            "[[sprag-free|Qwen3.8-27B is free on Sprag through the end of August]]",
            "[[sprag-about|Sprag about page]]",
            "[[sprag-terms|Sprag terms of service]]",
            "[[sprag-llms|Sprag index for AI assistants]]",
            "[[sprag-robots|Sprag robots.txt]]",
          ],
        },
        { type: "h3", text: "Press, benchmarks and competitors" },
        {
          type: "links",
          items: [
            "[[dg-series-c|Deepgram raises $130M Series C at $1.3B valuation]]",
            "[[aa-stt|Artificial Analysis speech-to-text leaderboard]]",
            "[[aws-sagemaker|Deepgram enhanced metrics on Amazon SageMaker]]",
            "[[soniox-pricing|Soniox pricing]]",
            "[[soniox-compare|Soniox comparison tool and pages]]",
            "[[cartesia-ink|Cartesia Ink-2]]",
            "[[cartesia-vs|Cartesia comparison pages]]",
          ],
        },
        { type: "h3", text: "Social posts cited" },
        {
          type: "links",
          items: [
            "[[x-fleurs|@StatsWire on the FLEURS chart]]",
            "[[x-fleurs-2|@GabiiAH11 on Deepgram at 15.77%]]",
            "[[x-autoloops|@LatentKush launching Qwen3-ASR-1.7B against Deepgram]]",
            "[[x-diarize|@buildstack_ai on diarization becoming a paid add-on]]",
            "[[x-naomi|Deepgram community reply offering the startup programme]]",
            "[[x-naomi-2|A second Deepgram community reply the same week]]",
            "[[x-divinci|Divinci AI changelog, bring your own Deepgram key]]",
            "[[x-speko|Speko routing across Deepgram, ElevenLabs, Cartesia and OpenAI]]",
            "[[x-nftech|NF Tech on choosing Deepgram over Whisper]]",
            "[[x-subtitlenext|SubtitleNEXT at IBC 2026]]",
            "[[x-2x|Deepgram's 2X Solutions AI case study]]",
            "[[x-fourleaf|Four-Leaf AI using Deepgram for speech-to-text]]",
            "[[x-ed|Ed Charbeneau on the Deepgram Agent API]]",
            "[[x-ed-2|Ed Charbeneau on burning $50 of credits overnight]]",
            "[[x-coval|Coval hosting a happy hour with Deepgram]]",
            "[[x-rovensky|Max Rovensky on supporting multiple dictation providers]]",
            "[[x-superwhisper|superwhisper on realtime with Deepgram]]",
            "[[x-golos|Golos, an open-source dictation tool on Deepgram]]",
            "[[x-raven|Project Raven sending parallel streams to Deepgram]]",
            "[[x-samarth|A voice agent on Twilio, Deepgram, OpenAI and Hume]]",
            "[[x-alexg|An Apple Watch voice interface on Deepgram and ElevenLabs]]",
            "[[x-aly|Porting a voice feature that needs a Deepgram key]]",
            "[[x-jp-minutes|A Japanese meeting-minutes app on Deepgram]]",
            "[[x-segfaul|Adding a language-model pass to fix Deepgram misrecognition]]",
            "[[x-ichiki|Switching to Deepgram for the free $200 of credit]]",
            "[[li-genesys|Deepgram integrated into Genesys Virtual Agent]]",
            "[[li-vinay|Vinay Jain's Deepgram Flux and Aura 2 voice agent build]]",
            "[[li-airtxt|airtxt.ai adding bring-your-own Deepgram key]]",
            "[[li-callkaro|CallKaro.AI on provider failover]]",
            "[[li-latency|The voice-agent latency post Vokalith AI engaged with]]",
            "[[li-merra|Merra, a live AI interviewer on Deepgram]]",
            "[[li-pipecat|Pipecat 1.8.0, adding Deepgram Flux on SageMaker]]",
            "[[li-vapicon|VapiCon 2026 sponsor list]]",
            "[[li-karly|Deepgram is growing faster than we can hire]]",
          ],
        },
      ],
    },
  ],
  footer:
    "Pulled Aug 27, 2026 by 415brand for Sprag. Ad counts come from Google's own advertiser records and are exact. Page counts come from each company's published sitemap and are exact. Social counts come from Apify searches of X, LinkedIn and Reddit run on Aug 27 covering the previous seven days for X and LinkedIn and thirty days for Reddit, and X returns no view or follower counts. Traffic, keyword and Meta ad figures are missing this week: Similarweb and SpyFu blocked the request and the Apify limit was reached after the social pulls finished. They return next week. Prices are public pay-as-you-go list prices checked on Aug 27 and enterprise agreements price differently on both sides.",
  sources: {
    "gads-dg": {
      label: "Google Ads Transparency",
      href: "https://adstransparency.google.com/?domain=deepgram.com&region=US",
      logo: "google-ads-transparency",
    },
    "gads-sprag": {
      label: "Google Ads Transparency",
      href: "https://adstransparency.google.com/?domain=sprag.ai&region=US",
      logo: "google-ads-transparency",
    },
    "gads-elevenlabs": {
      label: "Google Ads Transparency",
      href: "https://adstransparency.google.com/?domain=elevenlabs.io&region=US",
      logo: "google-ads-transparency",
    },
    "x-deepgram": { label: "X", href: "https://x.com/search?q=deepgram&f=live", logo: "x" },
    "li-deepgram": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/search/results/content/?keywords=deepgram&datePosted=%22past-week%22",
      logo: "linkedin",
    },
    "reddit-dg": {
      label: "Reddit",
      href: "https://www.reddit.com/search/?q=deepgram&sort=new&t=month",
      logo: "reddit",
    },
    "dg-sitemap": { label: "Deepgram sitemap", href: "https://deepgram.com/sitemap.xml", logo: "deepgram" },
    "sprag-sitemap": { label: "Sprag sitemap", href: "https://sprag.ai/sitemap.xml", logo: "sprag" },
    "dg-jobs": { label: "Ashby", href: "https://jobs.ashbyhq.com/deepgram", logo: "ashby" },
    "dg-pricing": { label: "Deepgram", href: "https://deepgram.com/pricing", logo: "deepgram" },
    "dg-changelog": {
      label: "Deepgram changelog",
      href: "https://developers.deepgram.com/changelog",
      logo: "deepgram",
    },
    "dg-customers": { label: "Deepgram", href: "https://deepgram.com/customers", logo: "deepgram" },
    "dg-newsroom": { label: "Deepgram", href: "https://deepgram.com/company/newsroom", logo: "deepgram" },
    "dg-security": { label: "Deepgram", href: "https://deepgram.com/data-security", logo: "deepgram" },
    "dg-selfhosted": { label: "Deepgram", href: "https://deepgram.com/self-hosted", logo: "deepgram" },
    "dg-leadership": { label: "Deepgram", href: "https://deepgram.com/company/leadership", logo: "deepgram" },
    "dg-history": { label: "Deepgram", href: "https://deepgram.com/company/history", logo: "deepgram" },
    "dg-compare": {
      label: "Deepgram",
      href: "https://deepgram.com/compare/assemblyai-vs-deepgram",
      logo: "deepgram",
    },
    "dg-roundup": {
      label: "Deepgram",
      href: "https://deepgram.com/learn/voice-ai-providers-compared",
      logo: "deepgram",
    },
    "dg-flux": {
      label: "Deepgram docs",
      href: "https://developers.deepgram.com/docs/flux/quickstart",
      logo: "deepgram",
    },
    "dg-flux-state": {
      label: "Deepgram docs",
      href: "https://developers.deepgram.com/docs/flux/state",
      logo: "deepgram",
    },
    "dg-flux-multi": {
      label: "Deepgram docs",
      href: "https://developers.deepgram.com/docs/flux/language-prompting",
      logo: "deepgram",
    },
    "dg-llms": { label: "Deepgram docs", href: "https://developers.deepgram.com/llms.txt", logo: "deepgram" },
    "dg-benchmarks": {
      label: "Deepgram",
      href: "https://deepgram.com/learn/speech-to-text-benchmarks",
      logo: "deepgram",
    },
    "dg-speak": { label: "Deepgram", href: "https://deepgram.com/speak", logo: "deepgram" },
    "dg-series-c": {
      label: "SiliconANGLE",
      href: "https://siliconangle.com/2026/01/13/real-time-voice-ai-unicorn-deepgram-raises-130m-streamline-human-machine-interactions/",
      logo: "venturebeat",
    },
    "aa-stt": {
      label: "Artificial Analysis",
      href: "https://artificialanalysis.ai/speech-to-text/models/deepgram",
      logo: "artificial-analysis",
    },
    "aws-sagemaker": {
      label: "AWS",
      href: "https://aws.amazon.com/blogs/machine-learning/",
      logo: "aws",
    },
    "sprag-pricing": { label: "Sprag", href: "https://sprag.ai/pricing", logo: "sprag" },
    "sprag-benchmarks": { label: "Sprag", href: "https://sprag.ai/benchmarks", logo: "sprag" },
    "sprag-models": { label: "Sprag", href: "https://sprag.ai/models", logo: "sprag" },
    "sprag-langs": {
      label: "Sprag docs",
      href: "https://sprag.ai/docs/stt/misc/languages",
      logo: "sprag",
    },
    "sprag-realtime": { label: "Sprag docs", href: "https://sprag.ai/docs/realtime", logo: "sprag" },
    "sprag-quickstart": { label: "Sprag docs", href: "https://sprag.ai/docs/quickstart", logo: "sprag" },
    "sprag-integrations": {
      label: "Sprag docs",
      href: "https://sprag.ai/docs/integrations/pipecat",
      logo: "sprag",
    },
    "sprag-issen": {
      label: "Sprag",
      href: "https://sprag.ai/blog/issen-delivers-ai-language-tutoring-at-scale-with-sprag",
      logo: "sprag",
    },
    "sprag-economics": {
      label: "Sprag",
      href: "https://sprag.ai/blog/voice-agent-economics-in-2026",
      logo: "sprag",
    },
    "sprag-free": {
      label: "Sprag",
      href: "https://sprag.ai/blog/qwen3-8-27b-free-on-sprag",
      logo: "sprag",
    },
    "sprag-about": { label: "Sprag", href: "https://sprag.ai/about", logo: "sprag" },
    "sprag-terms": { label: "Sprag", href: "https://sprag.ai/terms", logo: "sprag" },
    "sprag-llms": { label: "Sprag", href: "https://sprag.ai/llms.txt", logo: "sprag" },
    "sprag-robots": { label: "Sprag", href: "https://sprag.ai/robots.txt", logo: "sprag" },
    "soniox-pricing": { label: "Soniox", href: "https://soniox.com/pricing", logo: "soniox" },
    "soniox-compare": { label: "Soniox", href: "https://soniox.com/compare-stt", logo: "soniox" },
    "cartesia-ink": { label: "Cartesia", href: "https://www.cartesia.ai/ink", logo: "cartesia" },
    "cartesia-vs": { label: "Cartesia", href: "https://www.cartesia.ai/vs", logo: "cartesia" },
    "x-fleurs": { label: "X", href: "https://x.com/StatsWire/status/2092669713231065313", logo: "x" },
    "x-fleurs-2": { label: "X", href: "https://x.com/GabiiAH11/status/2092663783030173748", logo: "x" },
    "x-autoloops": { label: "X", href: "https://x.com/LatentKush/status/2092383425198170179", logo: "x" },
    "x-diarize": { label: "X", href: "https://x.com/buildstack_ai/status/2091471269518520761", logo: "x" },
    "x-naomi": { label: "X", href: "https://x.com/NaomiLGBT/status/2092358920597868557", logo: "x" },
    "x-naomi-2": { label: "X", href: "https://x.com/NaomiLGBT/status/2090605216702087547", logo: "x" },
    "x-divinci": { label: "X", href: "https://x.com/DivinciAi/status/2090863756678926833", logo: "x" },
    "x-speko": { label: "X", href: "https://x.com/beknabdik/status/2091944964737708054", logo: "x" },
    "x-nftech": { label: "X", href: "https://x.com/jainilnf/status/2091110635606249570", logo: "x" },
    "x-subtitlenext": { label: "X", href: "https://x.com/SubtitleNEXT/status/2091881346310291764", logo: "x" },
    "x-2x": { label: "X", href: "https://x.com/DeepgramAI/status/2092303558645350443", logo: "x" },
    "x-fourleaf": { label: "X", href: "https://x.com/FourLeaf_AI/status/2093048440758698268", logo: "x" },
    "x-ed": { label: "X", href: "https://x.com/EdCharbeneau/status/2090937210166018508", logo: "x" },
    "x-ed-2": { label: "X", href: "https://x.com/EdCharbeneau/status/2091650506909204850", logo: "x" },
    "x-coval": { label: "X", href: "https://x.com/bnicholehopkins/status/2090876601651073472", logo: "x" },
    "x-rovensky": { label: "X", href: "https://x.com/MaxRovensky/status/2093042017693528297", logo: "x" },
    "x-superwhisper": { label: "X", href: "https://x.com/neilsuperduper/status/2092685263688392707", logo: "x" },
    "x-golos": { label: "X", href: "https://x.com/ai_suxiaole/status/2092149728758907098", logo: "x" },
    "x-raven": { label: "X", href: "https://x.com/mobileossfinds/status/2091934185074114787", logo: "x" },
    "x-samarth": { label: "X", href: "https://x.com/SamarthMUFC/status/2092133433460076678", logo: "x" },
    "x-alexg": { label: "X", href: "https://x.com/alex_here_now/status/2091763026324017171", logo: "x" },
    "x-aly": { label: "X", href: "https://x.com/0xsilverbullet/status/2090585407708704912", logo: "x" },
    "x-jp-minutes": { label: "X", href: "https://x.com/gatyoukatyou/status/2092489514782756998", logo: "x" },
    "x-segfaul": { label: "X", href: "https://x.com/Seg_Faul/status/2091937859544699288", logo: "x" },
    "x-ichiki": { label: "X", href: "https://x.com/ichikiwhere/status/2091061419773247760", logo: "x" },
    "li-genesys": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/zachfrantz_going-to-genesys-xperience-next-week-we-activity-7498812083732434944--jSw",
      logo: "linkedin",
    },
    "li-vinay": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/vinayjain18_aiagents-deepgram-aivoice-activity-7498704740835356672-vrwf",
      logo: "linkedin",
    },
    "li-airtxt": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/airtxt-ai_airtxtai-ai-dictation-meeting-notes-activity-7498794195890126848-qMZ4",
      logo: "linkedin",
    },
    "li-callkaro": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/callkaro-ai/posts",
      logo: "linkedin",
    },
    "li-latency": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7498741531990740993",
      logo: "linkedin",
    },
    "li-merra": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/manjeet-444a611a0_ai-fullstack-react-activity-7498655906491006976-cF0g",
      logo: "linkedin",
    },
    "li-pipecat": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7498538301394595840",
      logo: "linkedin",
    },
    "li-vapicon": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/vapi-ai_save-500-with-an-early-bird-ticket-before-activity-7498781401517830144-Tgiw",
      logo: "linkedin",
    },
    "li-karly": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/karlysebailey_deepgram-is-growing-faster-than-we-can-hire-activity-7498676740844605440-y76i",
      logo: "linkedin",
    },
  },
};
