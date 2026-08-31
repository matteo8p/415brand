import type { Brief } from "./types";

export const wisprCloudless: Brief = {
  slug: "wispr-cloudless",
  title: "Wispr Flow weekly brief: brand & competitive analysis",
  sub: "For Tim at Cloudless, August 31, 2026",
  subject: "Wispr Flow",
  client: "Cloudless",
  intro: [
    { type: "h3", text: "Recommended actions for Cloudless from the analysis" },
    {
      type: "moves",
      collapsed: true,
      items: [
        {
          action: "Ask your existing users to leave a review on the App Store.",
          why: "Cloudless has 2 iPhone ratings. Wispr has 14,620 and added about 590 of them last week. Nobody picks the app with 2 ratings when the other one has fourteen thousand. You already have emails and contacts for your existing users and your inbound, plus 2,314 people who claimed a free seat and a Discord full of them. Reach out and ask them to leave a review. Outcome: a few hundred ratings, and the listing stops losing people before they ever open the app.",
          evidence: "search-and-marketplaces",
        },
        {
          action: "Get the old Onit name off the site and off the download link.",
          why: "Your enterprise page is still titled \"Onit Dictate\". Your download button points at onit-latest.dmg on a syntheticco.blob.core.windows.net address. Your French, Spanish and Italian pages still sell an Onit translation tool. Your X account is @onit_ai. You are asking people to trust a privacy product by downloading a file named after a company that no longer exists, from a domain that is not yours. Outcome: the download stops looking abandoned, and Google stops splitting your brand across two names.",
          evidence: "search-and-marketplaces",
        },
        {
          action: "Re-run your accuracy benchmark against the current Wispr build, and put the date on it.",
          why: "Your benchmark page says 11.2% word error against Wispr's 12.4%, and names the build it tested as Wispr Flow v1.5.751. Wispr previewed a new speech model on Aug 17 and says it expects 30 to 35% fewer dictations to need fixing. So the one number you can actually prove is measured against software they are replacing, and someone is going to notice. Outcome: re-run it, print the build number and the test date next to the result, and your best marketing asset stays true instead of quietly going stale.",
          evidence: "pricing-and-product",
        },
        {
          action: "Buy the search terms Wispr is not bidding on.",
          why: "All five of Wispr's top search terms are spellings of its own name, at about $2 a click. Nobody owns offline dictation, on-device dictation, or dictation with no subscription. Wispr is hiring a paid search manager right now, so these get more expensive once that person starts. Outcome: you show up for people describing the product they want, instead of only for people already searching your competitor.",
          evidence: "search-and-marketplaces",
        },
      ],
    },
    { type: "h3", text: "Posts worth replying to this week" },
    {
      type: "table",
      headers: [
        { text: "Where", w: "14%" },
        { text: "When", w: "7%", nw: true },
        { text: "What they said" },
        { text: "Status", w: "11%" },
        { text: "What to say", w: "26%" },
      ],
      rows: [
        [
          "LinkedIn",
          "Aug 24",
          "[\"Yikes, this is highly concerning\"](https://www.linkedin.com/posts/shahank42_yikes-this-is-highly-concerning-this-activity-7493232262054998016-o8PE), on what Wispr Flow keeps from your voice",
          "Shopping",
          "The one audience already asking your question in public, and the only complaint bucket where you are the finished answer. Do not pitch. Quote Wispr's own security page and let him come to you.",
        ],
        [
          "r/ProductivityApps",
          "Aug 27",
          "[Don't use Wispr Flow or Superwhisper for bilingual dictation](https://www.reddit.com/r/ProductivityApps/comments/1w0hed8/dont_use_wispr_flow_or_superwhisper_for_bilingual/), with a measured 27.4% word error rate and English words coming back in Cyrillic",
          "Shopping",
          "Ask them to re-run the same clips on Cloudless with a different local model. In a thread about measurements, a measurement beats a claim.",
        ],
        [
          "r/macapps",
          "Aug 27",
          "[HoldSay, a voice card for dictation and meeting notes](https://www.reddit.com/r/macapps/comments/1vzvsre/holdsay_a_voice_card_for_dictation_meeting_notes/), which prices Wispr at \"$144/yr, very polished, but cloud-based and subscription\"",
          "Shopping",
          "HoldSay is $69.99 once, so this is not a free competitor and rule 2 does not apply. Do not argue in someone else's launch thread. Answer the commenters weighing cloud against local, and say what Cloudless costs.",
        ],
        [
          "r/AssistiveTechnology",
          "Aug 28",
          "[Apple Dictation vs AI voice keyboards](https://www.reddit.com/r/AssistiveTechnology/comments/1w0p2vm/apple_dictation_vs_ai_voice_keyboards_what/), from someone still deciding",
          "Shopping, verify first",
          "Free and private both count for more in this subreddit than anywhere else. Check the account age before replying: this is one of the subreddits Willow planted posts in on Aug 25.",
        ],
        [
          "r/MacOSBeta",
          "Aug 24",
          "[Siri app and Wispr Flow, weird behavior](https://www.reddit.com/r/MacOSBeta/comments/1vx1efz/siri_app_and_wispr_flow_weird_behavior/). Wispr's window grabs focus whenever Siri opens",
          "Venting",
          "Two lines, no more. An app with no window and no server has nothing to grab focus. Worth answering only because it is quick.",
        ],
      ],
    },
  ],
  sections: [
    {
      id: "key-findings",
      title: "Key findings",
      blocks: [
        {
          type: "note",
          text: "Wispr Flow against Cloudless, pulled Aug 30. Every number is sourced on its row.",
        },
        {
          type: "scorecard",
          rows: [
            {
              metric: "Money raised to date",
              primary: "$361M",
              us: "None",
              change: "Includes $280M on Aug 17 at a $2B valuation, led by Menlo Ventures.",
              tone: "bad",
              source: "[[wispr-seriesb|Wispr, Series B]]",
            },
            {
              metric: "Price for unlimited dictation",
              primary: "$15/mo",
              us: "Free",
              change: "$12 a month if you pay for the year.",
              source: "[[wispr-pricing|Wispr pricing]] [[cloudless-home|Cloudless site]]",
            },
            {
              metric: "Free plan word cap",
              primary: "2,000/week",
              us: "Unlimited",
              change: "2,000 a week on desktop and 1,000 on iPhone, but no cap at all on Android.",
              tone: "bad",
              source: "[[wispr-pricing|Wispr pricing]] [[wispr-plans-doc|Wispr plans]]",
            },
            {
              metric: "Platforms",
              primary: "4",
              us: "3",
              change: "Wispr adds Android, and has an open Android engineering role. Cloudless is Mac, Windows and iPhone, Mac being M-series only.",
              tone: "bad",
              source: "[[wispr-pricing|Wispr pricing]] [[cloudless-home|Cloudless site]] [[wispr-jobs|Wispr jobs]]",
            },
            {
              metric: "Meeting notetaker",
              primary: "Free, Mac",
              us: "None",
              change: "Launched Aug 5 and now the subject of most of Wispr's advertising.",
              tone: "bad",
              source: "[[wispr-pricing|Wispr pricing]] [[hn-notetaker|Hacker News]]",
            },
            {
              metric: "Security certificates held",
              primary: "Type I",
              us: "None",
              change: "SOC 2 Type I and ISO Stage 1, both April. The pricing page claims Type II, which the security page says has not been issued.",
              source: "[[wispr-security-doc|Wispr security FAQ]] [[wispr-pricing|Wispr pricing]]",
            },
            {
              metric: "iPhone ratings",
              primary: "14,620",
              us: "2",
              change: "Averaging 4.8 against 5.0. Wispr added about 590 of them in a week.",
              tone: "bad",
              source: "[[appstore-wispr|App Store, Wispr]] [[appstore-cloudless|App Store, Cloudless]]",
            },
            {
              metric: "Android ratings",
              primary: "5,395",
              us: "No app",
              change: "Averaging 4.8.",
              tone: "bad",
              source: "[[play-wispr|Google Play]] [[cloudless-home|Cloudless site]]",
            },
            {
              metric: "Monthly website visits",
              primary: "4.4M",
              us: "Not ranked",
              change: "Down 4.05% on the month. Wispr's global rank fell from 13,583 to 14,982 over three months.",
              tone: "good",
              source: "[[sw-wispr|Similarweb, Wispr]] [[sw-cloudless|Similarweb, Cloudless]]",
            },
            {
              metric: "Search terms ranked or bid on",
              primary: "15,100",
              us: "27",
              change: "Wispr's top five are all spellings of its own name. Cloudless's own top term is a misspelling of its name.",
              tone: "bad",
              source: "[[sw-wispr|Similarweb, Wispr]] [[sw-cloudless|Similarweb, Cloudless]]",
            },
            {
              metric: "Live ads running",
              primary: "890",
              us: "None",
              change: "About 890 on Meta, plus about 300 more on Google in the US.",
              source: "[[meta-ads|Meta Ad Library]] [[google-ads|Google Ads]]",
            },
            {
              metric: "Open jobs",
              primary: "23",
              us: "None",
              change: "Includes an Android engineer, a paid search manager and a Head of Engineering for Enterprise.",
              tone: "bad",
              source: "[[wispr-jobs|Wispr jobs]]",
            },
            {
              metric: "Biggest complaint this window",
              primary: "Price, 48%",
              us: "Not applicable",
              change: "10 of 21 complaints sorted, and the one bucket Tim's ignore list already rules out.",
              source: "[[hn-cancel|Hacker News]] [[reddit-holdsay|r/macapps]]",
            },
            {
              metric: "Free seats claimed",
              primary: "No cap",
              us: "2,314 / 5,000",
              change: "The only traction number Cloudless publishes. Wispr's free plan has no signup cap.",
              source: "[[cloudless-home|Cloudless site]] [[wispr-pricing|Wispr pricing]]",
            },
          ],
        },
        {
          type: "findings",
          items: [
            {
              claim: "Wispr's free plan is now good enough to be the real threat to Cloudless, and it costs nothing.",
              body: [
                {
                  type: "p",
                  text: "The free plan includes the meeting notetaker Wispr launched on Aug 5, speaker identification, questions across all your meetings, and a connection that drops those notes into Claude and ChatGPT. Its word cap is 2,000 a week on desktop and 1,000 on iPhone, but on Android there is no cap at all, so Wispr already ships a free unlimited product on one platform. Cloudless does not have a notetaker and does not have an Android build. [[wispr-pricing]] [[wispr-plans-doc]] [[cloudless-home]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** \"free\" stopped being the difference some time ago and nobody updated the pitch. What is still true is that Cloudless runs on the computer in front of you and Wispr does not. Lead with that everywhere.",
                },
              ],
            },
            {
              claim: "Cloudless is close to invisible in search, and one of the 27 terms it shows up for is a misspelling of its own name.",
              body: [
                {
                  type: "p",
                  text: "Similarweb tracks 27 search terms for cloudless.so against 15,100 for wisprflow.ai. Cloudless's listed top terms are \"cloudness voice\", \"wispr flow\", \"try onit wisprflow\", \"wisper flow\" and \"whisper flow\", so four of the five are either a competitor's brand or a dead product name. Visitors to cloudless.so see 1.01 pages per visit against 2.50 on wisprflow.ai, meaning almost nobody who lands moves to a second page. The site still ships pages titled \"Onit\" and a download link on an onit-latest.dmg path. [[sw-cloudless]] [[sw-wispr]] [[cloudless-enterprise]] [[cloudless-home]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** Wispr buys its own name and nothing else, so every descriptive search in the category is unclaimed. Take those terms with real pages, and fix the Onit titles that are splitting the site's authority between two brands.",
                },
              ],
            },
            {
              claim: "Price is 48% of the complaints about Wispr, and it is the one bucket Cloudless has already decided not to chase.",
              body: [
                {
                  type: "p",
                  text: "We sorted 21 complaints from Reddit and Hacker News between Aug 17 and 30 into the bucket each person led with. Price came to 10, privacy 3, accuracy 3, platform gaps 3, latency 1 and workflow 1. Nine of the ten price complaints came from someone launching or adopting a free open-source clone, and four separate projects were posted in a single week. Tim's standing ignore list already rules out posts about free competitors, because an audience that has a free option cannot be won on price. [[reddit-holdsay]] [[hn-cancel]] [[hn-fnscribe]] [[reddit-bilingual]] [[reddit-plynn]] [[reddit-osx-dictate]] [[reddit-hemsa]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** the biggest complaint bucket is unreachable by your own rules, and it is also the most crowded with substitutes. Build the reply list from privacy, accuracy and platform gaps, which are 9 of the 21 and are where a finished app beats a weekend project.",
                },
              ],
            },
            {
              claim: "Wispr's 23 open jobs close the Android and enterprise gaps, and not one of them is for on-device work.",
              body: [
                {
                  type: "p",
                  text: "Wispr is hiring a Software Engineer for Android, a Head of Engineering for Enterprise, a Platform Engineer for Product Security and a Paid Search Performance Marketing Manager. Marketing and Growth is the joint largest team being hired at five roles, level with Software Platform. Almost every role is San Francisco and on-site, and the one published salary is $170K to $190K plus equity for a brand and growth designer. [[wispr-jobs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** the paid search hire is a clock on the cheap descriptive keywords. Buy them before that person starts.",
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
              cap: "What one person pays per month",
              sub: "Wispr's ladder as published on Aug 30. The two rows with no bar are $0. Cloudless is free on every plan for individual use.",
              chart: {
                kind: "rows",
                fmt: "usd",
                labelAll: true,
                aria: "Monthly price per user: Cloudless $0, Wispr Free $0, Wispr Pro $12 annual and $15 monthly, Growth dictation $18 annual and $23 monthly, Growth bundle $26 annual and $33 monthly.",
                rows: [
                  ["Cloudless, any plan", 0, "us"],
                  ["Wispr Free", 0, "primary"],
                  ["Wispr Pro, annual", 12, "primary"],
                  ["Wispr Pro, monthly", 15, "primary"],
                  ["Growth dictation, annual", 18, "primary"],
                  ["Growth dictation, monthly", 23, "primary"],
                  ["Growth with Notetaker, annual", 26, "primary"],
                  ["Growth with Notetaker, monthly", 33, "primary"],
                ],
              },
              legend: [
                { series: "primary", label: "Wispr Flow" },
                { series: "us", label: "Cloudless" },
              ],
            },
            {
              cap: "What Wispr's free plan says it has, against what Wispr says it holds",
              sub: "Left column is the pricing page. Right column is the security FAQ, updated four days before this pull.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                aria: "Security certificates: two advertised on the free plan, zero of those two currently held, two held at a lower level.",
                rows: [
                  ["Advertised on the free plan", 2, "primary"],
                  ["Of those, currently held", 0, "other"],
                  ["Held, at an earlier stage", 2, "us"],
                ],
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
              claim: "Wispr's price page says its free plan has SOC 2 Type II. Wispr's own security page says it does not have it.",
              body: [
                {
                  type: "p",
                  text: "In plain terms: SOC 2 Type I means an auditor looked at your security setup once and said it looks right on paper. Type II means an auditor watched it actually run for months and confirmed it worked. Type II is the one big companies ask for. Wispr's pricing page lists \"SOC 2 Type II and ISO 27001 compliant\" as a free plan feature. Its security page says what it holds today is a SOC 2 Type I from April and an ISO 27001 Stage 1 from April, and that the Type II report is \"not yet issued\". The reason is on the same page: the Type II and ISO certificates Wispr used to hold were dropped in March 2026 over \"platform integrity concerns at the original auditor\", and it started again with A-LIGN. [[wispr-pricing]] [[wispr-security-doc]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** less than it first looks. Dropping certificates because your auditor had problems and re-auditing with a bigger firm is the responsible thing to do, not a scandal, and Cloudless holds no SOC 2 of any kind to compare against. This is worth exactly one thing. If a buyer ever puts the two products side by side and says Wispr has Type II, Tim can open Wispr's own security page and show that it does not. Keep it for that conversation and do not build a campaign on it.",
                },
              ],
            },
            {
              claim: "Wispr's newest product cannot be used by the customers its compliance page is written for.",
              body: [
                {
                  type: "p",
                  text: "The security FAQ states plainly that \"Org-wide HIPAA requires disabling Notetaker\". Notetaker launched on Aug 5 and is the product most of Wispr's current advertising is built around. So a hospital, a law firm or a clinic that turns on the compliance mode Wispr sells them loses the feature Wispr is spending its ad budget promoting. [[wispr-security-doc]] [[hn-notetaker]] [[meta-ads]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** this is the exact contradiction to raise with regulated buyers, who are the segment Cloudless's enterprise page targets. Ask them which they want to give up, the notetaker or the BAA.",
                },
              ],
            },
            {
              claim: "Even on Wispr's strictest privacy setting, your custom words still leave your computer.",
              body: [
                {
                  type: "p",
                  text: "Wispr calls Privacy Mode on plus Cloud Sync off \"Zero Data Retention\". The same page says user-created snippets and custom dictionaries \"are stored by Wispr and synced across your devices regardless of Privacy Mode or Cloud Sync\", on the grounds that they are productivity assets rather than dictation content. Wispr also ships an opt-in Screen OCR setting that \"captures a screenshot of the display containing the mouse cursor\" to pull out proper nouns. [[wispr-security-doc]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** a dictionary is where people keep client names, drug names, case numbers and internal codenames. Zero Data Retention that still uploads your dictionary is a precise, checkable thing to point at, and it is the difference between a policy and an architecture.",
                },
              ],
            },
            {
              claim: "Wispr's own published documents disagree with each other in three places.",
              body: [
                {
                  type: "p",
                  text: "On certificates, the pricing page claims SOC 2 Type II and ISO 27001 while the security FAQ says neither is currently held. On bug bounties, Wispr's enterprise security post advertises \"a public program with rewards for critical findings\" while the security FAQ says \"We do not currently run a public paid bounty platform\". On the company itself, the security FAQ says Wispr AI, Inc. was \"founded in 2023\" while third-party company records list 2021. [[wispr-pricing]] [[wispr-security-doc]] [[wispr-enterprise-post]] [[tracxn]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** a security reviewer who finds one of these will check the rest, and that is a review Cloudless wants happening. Point at the documents rather than characterising the company.",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Cloudless should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Re-run the accuracy benchmark and put the build number and date on it.",
              body: [
                {
                  type: "p",
                  text: "Cloudless's benchmark page reports 11.2% word error against Wispr Flow's 12.4%, and names the build it tested as Wispr Flow v1.5.751. Wispr previewed a new proprietary speech model on Aug 17 and says it expects 30 to 35% fewer dictations to need an edit. Whether or not that holds, the number on the page is now measured against software Wispr is replacing. Re-run it, print the build and the test date next to the result, and re-run it again whenever either side ships a model change. Outcome: the one number Cloudless can prove stays provable. [[cloudless-vs-wispr-bench]] [[wispr-seriesb]]",
                },
              ],
            },
            {
              claim: "Take the \"first 5,000 sign-ups\" cap off the site.",
              body: [
                {
                  type: "p",
                  text: "The counter reads 2,314 of 5,000 on every page. It tells a visitor two things you do not want them thinking: that free might end, and that only 2,314 people use this. Wispr gives its product away with no cap at all and just raised $280M doing it. If the goal is urgency, attach it to something real, like a date the enterprise price changes. [[cloudless-home]] [[wispr-pricing]] [[wispr-seriesb]]",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            {
              type: "p",
              text: "Wispr's ladder has four levels. Free, Pro at $15 monthly or $12 annual, Growth at $23 monthly or $18 annual for dictation alone and $33 monthly or $26 annual bundled with unlimited Notetaker, then Enterprise at custom pricing. Wispr is also running a promotion that gives Notetaker free through October 31 to anyone who buys Growth dictation on its own. Students and educators get 50% off Pro and a 90-day trial. [[wispr-pricing]] [[wispr-ent-pricing]] [[wispr-referral-doc]]",
            },
            {
              type: "table",
              headers: [
                { text: "Feature", w: "30%" },
                { text: "Wispr Flow" },
                { text: "Cloudless Voice" },
              ],
              rows: [
                ["Price for unlimited dictation", "$15 a month, $12 annual [[wispr-pricing|Wispr pricing]]", "Free for individual, non-commercial use [[cloudless-home|Cloudless site]]"],
                ["Free plan word cap", "2,000 a week desktop, 1,000 iPhone, unlimited Android [[wispr-pricing|Wispr pricing]]", "None [[cloudless-vs-wispr|Cloudless vs Wispr]]"],
                ["Where processing happens", "Cloud. \"Multi-tenant SaaS hosted entirely with a major US cloud provider\", no on-premise version [[wispr-security-doc|Wispr security FAQ]]", "On the device [[cloudless-home|Cloudless site]]"],
                ["Works offline", "No [[cloudless-vs-wispr|Cloudless vs Wispr]]", "Yes [[cloudless-home|Cloudless site]]"],
                ["Platforms", "Mac, Windows, iOS, Android [[wispr-pricing|Wispr pricing]]", "Mac (M-series only), Windows, iOS [[cloudless-home|Cloudless site]]"],
                ["Meeting notetaker", "Yes, Mac only, on the free plan, but disabled under org-wide HIPAA [[wispr-pricing|Wispr pricing]] [[wispr-security-doc|Wispr security FAQ]]", "No"],
                ["Languages", "100+, \"quality varies by language; English is the most mature\" [[wispr-security-doc|Wispr security FAQ]]", "100+, with downloadable local models [[cloudless-home|Cloudless site]]"],
                ["SOC 2", "Type I, April 2026. Type II report not yet issued [[wispr-security-doc|Wispr security FAQ]]", "None, and none claimed [[cloudless-privacy-security|Cloudless privacy]]"],
                ["ISO 27001", "Stage 1, April 2026. Stage 2 in progress [[wispr-security-doc|Wispr security FAQ]]", "None, and none claimed [[cloudless-privacy-security|Cloudless privacy]]"],
                ["HIPAA with a signed BAA", "Yes, but org-wide HIPAA disables Notetaker [[wispr-security-doc|Wispr security FAQ]]", "None [[cloudless-privacy-security|Cloudless privacy]]"],
                ["End-to-end encrypted", "No. \"Audio must be decrypted to produce a transcription\" [[wispr-security-doc|Wispr security FAQ]]", "Not applicable, audio never leaves the device [[cloudless-home|Cloudless site]]"],
                ["Where your data is processed", "United States only, no European processing location [[wispr-security-doc|Wispr security FAQ]]", "The user's own device [[cloudless-home|Cloudless site]]"],
                ["Dictionary and snippets", "Synced to Wispr's servers regardless of Privacy Mode or Cloud Sync [[wispr-security-doc|Wispr security FAQ]]", "On the device [[cloudless-home|Cloudless site]]"],
                ["Screenshot capture", "Screen OCR, opt-in and off by default, captures the display containing the cursor [[wispr-security-doc|Wispr security FAQ]]", "Screen context discarded immediately [[cloudless-privacy-security|Cloudless privacy]]"],
                ["Referral program", "30-day Pro trial for the friend, a free month for the referrer [[wispr-referral-doc|Wispr referrals]]", "None"],
              ],
            },
            {
              type: "p",
              text: "The referral mechanic is worth understanding because it explains the free plan. A referred user gets a 30-day Pro trial and the referrer gets a free month of Pro, but the reward only activates once the referred user dictates 2,000 words or upgrades. Someone who signs up with no referral link gets an 8,000-word first week and then the ordinary 2,000-word cap, and no trial at all. Rewards stop after 1,000 referred users, and App Store subscribers and enterprise members can hand out the trial but cannot earn credit. Wispr has made the product measurably better for people who arrive through a friend. [[wispr-referral-doc]]",
            },
            {
              type: "p",
              text: "Two smaller things worth recording for the next report. Wispr's help centre says data export by API is no longer available because \"the API has been sunsetted\", while a Voice Interface API documentation site is still live and reachable. And account deletion keeps some artefacts by design, specifically aggregated stats, credits, referrals that name the requester as referrer, and scratchpad images. [[wispr-security-doc]] [[wispr-api]]",
            },
            {
              type: "p",
              text: "Wispr's claims about its own scale are recorded here so they can be checked later. The company says more than 60 billion words have been written with Flow, that it is used at almost all Fortune 500 companies and in more than 10,000 enterprises, and that Canto cuts word error in the noisiest conditions from more than 30% to between 5 and 10%. All three are what the founders say about themselves and none has been independently verified. [[wispr-seriesb]]",
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
              cap: "Search terms each site ranks or bids on",
              sub: "Similarweb, desktop, worldwide, July 2026.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                aria: "Tracked search terms: Wispr Flow 15,100, Cloudless 27.",
                rows: [
                  ["Wispr Flow", 15100, "primary"],
                  ["Cloudless", 27, "us"],
                ],
              },
            },
            {
              cap: "App store ratings collected",
              sub: "Apple App Store and Google Play, pulled Aug 30.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                aria: "Ratings: Wispr iPhone 14,620, Wispr Android 5,395, Cloudless iPhone 2.",
                rows: [
                  ["Wispr, iPhone", 14620, "primary"],
                  ["Wispr, Android", 5395, "primary"],
                  ["Cloudless, iPhone", 2, "us"],
                ],
              },
              legend: [
                { series: "primary", label: "Wispr Flow" },
                { series: "us", label: "Cloudless" },
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
              claim: "Wispr's website traffic fell in July and its rank has been sliding for three months.",
              body: [
                {
                  type: "p",
                  text: "wisprflow.ai drew 4.4M visits in July, down 4.05% on June, and its global rank slid from 13,583 to 14,982 over three months. Free Google results are its largest channel at 29.95%, ahead of direct and paid. Bounce rate is 48.05% and visitors see 2.5 pages in about two minutes. India is now 14.21% of its traffic and growing 18.69% month on month, the fastest of any country in its top five. This is Similarweb's July estimate, so it predates both the Series B and the Notetaker launch. [[sw-wispr]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** do not read the dip as weakness, because Wispr's ads send people to an app store rather than to the website, and the app store numbers are going up. The India line is the one to watch, because it is the market where a free product travels furthest and Cloudless has no page in any Indian language.",
                },
              ],
            },
            {
              claim: "Wispr's search presence is almost entirely its own name, which leaves the descriptive terms unowned.",
              body: [
                {
                  type: "p",
                  text: "The five terms Similarweb lists as driving the most search traffic to wisprflow.ai are \"wispr flow\", \"whisper flow\", \"whisperflow\", \"wisper flow\" and \"whispr flow\", at costs per click of $1.77 to $2.31. Its keyword traffic splits 61.72% free and 38.28% paid. Google's ad transparency record shows about 300 US ads under the verified advertiser Wispr AI, Inc., filed across more than one advertiser account. Wispr is currently hiring a Paid Search Performance Marketing Manager. [[sw-wispr]] [[google-ads]] [[wispr-jobs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** Every dollar Wispr spends is defending searches for its own name, so the searches that describe the category belong to nobody. Cloudless can take \"offline dictation\", \"on-device dictation\" and \"dictation with no subscription\" with pages and cheap clicks, and it should do it before the paid search hire starts.",
                },
              ],
            },
            {
              claim: "Cloudless has two iPhone ratings. Wispr collected about 590 more in the last week.",
              body: [
                {
                  type: "p",
                  text: "Wispr Flow's iPhone listing shows 14,620 ratings at an average of 4.84, up from 14,030 on August 23. Its Android listing shows 5,395 ratings at 4.8. Cloudless's iPhone app, listed under Synthetic Exploration, Inc., has 2 ratings at 5.0 and shipped on May 6. Cloudless has no Android app at all. [[appstore-wispr]] [[play-wispr]] [[appstore-cloudless]] [[cloudless-home]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** A store listing with two ratings loses to one with fourteen thousand before either app is opened. Email the 2,314 people who claimed a free seat and ask for a rating, because that list is the only distribution Cloudless already owns.",
                },
              ],
            },
            {
              claim: "Cloudless's own site is splitting its brand signal between two names.",
              body: [
                {
                  type: "p",
                  text: "The enterprise page still carries the title \"Onit Dictate - The Free Alternative to Wispr Flow\". The download button on every page points at a syntheticco.blob.core.windows.net path ending in onit-latest.dmg. The French, Spanish and Italian pages describe an instant translation product under the Onit name rather than dictation. The footer links to X as @onit_ai and YouTube as @getonit-ai. One of the 27 search terms Similarweb attributes to the site is \"try onit wisprflow\". [[cloudless-enterprise]] [[cloudless-home]] [[cloudless-fr]] [[sw-cloudless]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** Search engines and buyers are both being asked to believe two companies are one. Retitle the stale pages and rename the download artefact, which costs nothing and keeps the rebrand from splitting the site's search authority in two.",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Cloudless should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Ask your existing users to leave a review on the App Store.",
              body: [
                {
                  type: "p",
                  text: "You already have the contacts: 2,314 people have claimed a free seat, and there is a Discord and a YouTube channel on top of that. Going from 2 ratings to 200 changes how the listing reads to every future visitor, and it costs one message. Ask inside the app too, right after a dictation lands, because that is the moment the product has just proved itself. [[cloudless-home]]",
                },
              ],
            },
            {
              claim: "Get the Onit name off the site and off the download link.",
              body: [
                {
                  type: "p",
                  text: "The enterprise page is titled \"Onit Dictate\". The download button on every page points at onit-latest.dmg on syntheticco.blob.core.windows.net. The French, Spanish and Italian pages sell an Onit translation tool. The X account is @onit_ai and the YouTube channel is @getonit-ai. One of the 27 search terms attributed to the site is \"try onit wisprflow\". For a product whose whole argument is that you can trust it with your voice, handing someone a download named after a company that no longer exists is the worst possible first impression [[cloudless-enterprise]] [[cloudless-home]] [[cloudless-fr]] [[sw-cloudless]]",
                },
              ],
            },
            {
              claim: "Buy the descriptive searches Wispr does not bid on.",
              body: [
                {
                  type: "p",
                  text: "Wispr's paid and free search presence is concentrated on spellings of its own name at $1.77 to $2.31 a click. Terms like offline dictation, on-device dictation, local speech to text and dictation without a subscription describe what Cloudless is and sit outside that auction. Write one page per term rather than pointing them all at the homepage, and keep the comparison pages for brand-versus-brand searches. [[sw-wispr]]",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            {
              type: "table",
              headers: [
                { text: "Measure", w: "34%" },
                { text: "Wispr Flow", n: true },
                { text: "Cloudless", n: true },
              ],
              rows: [
                ["Monthly visits, July 2026", "4.4M [[sw-wispr|Similarweb]]", "Below Similarweb's reporting floor [[sw-cloudless|Similarweb]]"],
                ["Change on the month", "Down 4.05% [[sw-wispr|Similarweb]]", "No data [[sw-cloudless|Similarweb]]"],
                ["Global rank", "14,982, from 13,583 three months ago [[sw-wispr|Similarweb]]", "Unranked [[sw-cloudless|Similarweb]]"],
                ["Bounce rate", "48.05% [[sw-wispr|Similarweb]]", "46.56% [[sw-cloudless|Similarweb]]"],
                ["Pages per visit", "2.50 [[sw-wispr|Similarweb]]", "1.01 [[sw-cloudless|Similarweb]]"],
                ["Tracked search terms", "15,100 [[sw-wispr|Similarweb]]", "27 [[sw-cloudless|Similarweb]]"],
                ["Free vs paid keyword traffic", "61.72% free, 38.28% paid [[sw-wispr|Similarweb]]", "61.14% free, 38.86% paid [[sw-cloudless|Similarweb]]"],
                ["Top country", "United States, 35.11% [[sw-wispr|Similarweb]]", "India, 57.05% [[sw-cloudless|Similarweb]]"],
                ["Second country", "India, 14.21%, up 18.69% [[sw-wispr|Similarweb]]", "United States, 42.95% [[sw-cloudless|Similarweb]]"],
                ["Referring websites", "76 [[sw-wispr|Similarweb]]", "No data [[sw-cloudless|Similarweb]]"],
                ["Display publishers", "297 across 3 ad networks [[sw-wispr|Similarweb]]", "None recorded [[sw-cloudless|Similarweb]]"],
                ["Google ads on record, US", "About 300 [[google-ads|Google Ads]]", "None found [[google-ads|Google Ads]]"],
              ],
            },
            {
              type: "p",
              text: "The pages-per-visit gap is the most useful line in that table. Wispr's visitors look at 2.5 pages and Cloudless's look at 1.01, which means almost nobody who lands on cloudless.so goes anywhere else on the site. That is what a site made of standalone landing pages with no internal path looks like, and it caps how much any single page can do. [[sw-wispr]] [[sw-cloudless]]",
            },
            {
              type: "p",
              text: "Similarweb's traffic and rank numbers are modelled estimates from desktop panels, not measured analytics, so the trends and the ratios are worth more than the exact figures. The July date on the traffic set also means it predates Wispr's Series B announcement and the Notetaker launch, and neither event is reflected in it yet. [[sw-wispr]]",
            },
            {
              type: "p",
              text: "On the marketplace side, Wispr is present everywhere a buyer looks and Cloudless is present almost nowhere. Wispr has an App Store listing with 14,620 ratings, a Play Store listing with 5,395, a Product Hunt category presence, a public API with its own documentation site, a status page, a bug bounty and a help centre with more than a hundred articles. Cloudless has an App Store listing with 2 ratings, a Discord and a YouTube channel still named for the old brand. [[appstore-wispr]] [[play-wispr]] [[product-hunt]] [[wispr-api]] [[wispr-docs]] [[appstore-cloudless]] [[cloudless-home]]",
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
              cap: "Active Wispr ads in the Meta library",
              sub: "Total ads live at each pull, not new launches. The daily brief counts new launches, so these numbers are not comparable to it.",
              chart: {
                kind: "columns",
                fmt: "num",
                label: [0, 1],
                aria: "Active Meta ads for Wispr Flow: 400 on August 23, about 890 on August 30.",
                rows: [
                  ["Aug 23", 400],
                  ["Aug 30", 890],
                ],
              },
            },
            {
              cap: "Why people are unhappy with Wispr",
              sub: "21 complaints from Reddit and Hacker News, Aug 17 to 30, each sorted into the bucket the person led with.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                aria: "Objection mix by count out of 21: price 10, privacy 3, accuracy 3, platform gap 3, latency 1, workflow 1, account and billing 0.",
                rows: [
                  ["Price", 10, "primary"],
                  ["Privacy", 3, "us"],
                  ["Accuracy", 3, "us"],
                  ["Platform gap", 3, "us"],
                  ["Latency", 1, "other"],
                  ["Workflow", 1, "other"],
                  ["Account & billing", 0, "other"],
                ],
              },
              legend: [
                { series: "us", label: "Cloudless can answer this, 9 of 21" },
                { series: "primary", label: "Ruled out by the ignore list" },
                { series: "other", label: "Too few to build a reply list on" },
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
              claim: "Wispr's paid footprint is much bigger than the Meta library alone, and it is spread across several advertiser accounts.",
              body: [
                {
                  type: "p",
                  text: "The daily brief counts the ads Wispr launches each day. This is the stock rather than the flow: about 890 ads were active in the Meta library on Aug 30, against 400 on Aug 23. Google's transparency record adds about 300 more in the US alone, and states that the domain \"includes results for multiple advertiser accounts with ads pointing to this domain\". Similarweb separately counts 297 display publishers across 3 ad networks sending traffic to wisprflow.ai, and lists YouTube as its largest social traffic source, ahead of Facebook and LinkedIn. [[meta-ads]] [[google-ads]] [[sw-wispr]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** the Meta library is the visible part. Cloudless is not going to out-spend any of this, so stop reading it as a budget to match and start reading it as a map of where Wispr has already paid to be, and where it has not.",
                },
              ],
            },
            {
              claim: "Wispr's free plan is a referral engine, and the payout terms are published.",
              body: [
                {
                  type: "p",
                  text: "A referred user gets a 30-day Pro trial and the referrer earns a free month of Pro, but the reward only activates once the referred person dictates 2,000 words or upgrades. Someone who signs up on their own gets an 8,000-word first week, then the ordinary 2,000-word weekly cap, and no trial at all. Referrers stop earning credit after 1,000 referred users, and App Store subscribers and enterprise members can hand out the trial but cannot earn anything. [[wispr-referral-doc]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** Wispr has made its product deliberately better for people who arrive through a friend and worse for people who arrive on their own. That is a growth loop, not a discount, and it is the cheapest thing Wispr runs.",
                },
              ],
            },
            {
              claim: "Price is 48% of complaints about Wispr, and nine of those ten came from someone shipping a free clone.",
              body: [
                {
                  type: "p",
                  text: "We sorted 21 complaints between Aug 17 and 30 into the bucket each person led with. Price was 10, privacy 3, accuracy 3, platform gaps 3, latency 1 and workflow 1, and account or billing was zero. The counted breakdown is in the full analysis below. Tim's standing ignore list already rules out posts about free competitors, on the grounds that an audience with a free option cannot be won on price. [[hn-cancel]] [[reddit-holdsay]] [[reddit-bilingual]] [[hn-fnscribe]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** the largest bucket is unreachable by Cloudless's own rules and the most crowded with substitutes. The 9 complaints in privacy, accuracy and platform gaps are the whole reply list, and they are the ones a finished app can actually answer.",
                },
              ],
            },
            {
              claim: "Every Wispr ad that gets impressions is built the same way, and the product is never in the first line.",
              body: [
                {
                  type: "p",
                  text: "Meta ranks this page by total impressions, so the 30 ads we read in full are Wispr's best performing live creative rather than a random sample. 25 of the 30 open on a person or a problem: \"I am never as prepared for a call as I meant to be\", \"I kept putting off my online business because I can't type fast\", \"You might be using your computer wrong\", \"Fix the bug in hero, no, contact.tsl\". Only five open on the product. The shape underneath is fixed: one confession or command, one line naming the annoyance, one line where the product removes it, then \"Try Flow free\". 27 of the 30 are video and 3 are static. The overlay headline is always a separate short line that could stand alone, such as \"Claude Code, but voice\" or \"Slow fingers, big ideas?\" [[meta-ads]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** this is a tested template, paid for by someone else, and it costs nothing to copy. Cloudless writes the opposite way round, leading with what the product is. Rewrite the headlines and the posts to open on the annoyance and put the product in line three.",
                },
              ],
            },
            {
              claim: "Wispr's best performing ads sell workflows, never product attributes, and coding is the biggest one.",
              body: [
                {
                  type: "p",
                  text: "Sorting the same 30 by angle: 8 are about writing prompts and code in Cursor and Claude Code, 6 are the Notetaker, 4 are speed, 4 are snippets and shortcuts, 4 are creator and lifestyle, 2 are aspirational, and one each are press and a giveaway. Not one of the 30 mentions price, privacy, offline use or on-device processing. 12 of the 30 are co-branded with a creator, and 11 of the 30 run as duplicate creatives, which is what an advertiser does when a creative is working. The clearest example is \"This is how I type faster than my fingers can move\", relaunched as a second library ID two days after the first [[meta-ads]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** the developer angle is the one Wispr proves converts, and it is also the audience most likely to care that dictation uploads to a server. Cloudless has no page for it. That is the cheapest gap on this list.",
                },
              ],
            },
            {
              claim: "A new free local Wispr alternative shipped roughly every other day this week, and Cloudless was named in none of them.",
              body: [
                {
                  type: "p",
                  text: "Four launched publicly in seven days: FnScribe on Hacker News, Plynn and Hemsa on r/SideProject, and Dictate on r/osx. A separate r/SideProject post building a Wispr alternative reached 100 upvotes and 41 comments. Third-party roundups of Wispr alternatives from Plaud and Tactiq list competitors and do not include Cloudless. In the switch table below, five people named where they went this window and not one of them said Cloudless. [[hn-fnscribe]] [[reddit-plynn]] [[reddit-hemsa]] [[reddit-osx-dictate]] [[reddit-loopit]] [[roundup-plaud]] [[roundup-tactiq]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** \"the free alternative to Wispr Flow\" is now a category with a queue, not a position Cloudless owns. Being the most finished one in that queue is worth nothing if Cloudless is absent from the roundups and the threads where people pick.",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Cloudless should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Steal Wispr's ad structure for your posts and your page headlines.",
              body: [
                {
                  type: "p",
                  text: "The template is four lines: a confession or a command, the annoyance, the product removing it, then the free offer. Cloudless's homepage does the reverse, opening with \"100% local voice dictation in every app\", which is a description rather than a hook. The same structure works in a Reddit reply and a TikTok caption, so this is not an argument for buying ads. Write one page for the coding audience, because 8 of Wispr's 30 best performing ads are about prompting Cursor and Claude Code and Cloudless has nothing aimed there [[meta-ads]] [[cloudless-home]]",
                },
              ],
            },
            {
              claim: "Answer the privacy, accuracy and platform posts. Skip the price ones.",
              body: [
                {
                  type: "p",
                  text: "Nine of the 21 complaints sorted this window are in buckets Cloudless can actually answer, and the live posts worth Tim's time are in the table at the top of this report. Lead each reply with the specific thing the person complained about rather than with the word free, because free is what every open-source clone in the same thread is already saying. On the accuracy and bilingual threads, name the local model Cloudless runs and invite them to test it, because that is checkable and a claim is not. [[reddit-plynn]] [[hn-fnscribe]] [[reddit-bilingual]]",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Objection mix" },
            {
              type: "p",
              text: "Every complaint we could find about Wispr between August 17 and 30 was sorted into exactly one bucket, the one the person led with. The total sorted is 21. This is the first count for this client, so there is no previous report to show a move against, and the next report will carry the change.",
            },
            {
              type: "fig",
              panels: [
                {
                  cap: "The same 21 complaints as a share of the total",
                  sub: "Green is a bucket Cloudless can answer. Red is the bucket Tim's ignore list already rules out.",
                  chart: {
                    kind: "share",
                    aria: "Objection mix: price 48%, privacy 14%, accuracy 14%, platform gap 14%, latency 5%, workflow 5%.",
                    rows: [
                      ["Price", 48, "neg"],
                      ["Privacy", 14, "pos"],
                      ["Accuracy", 14, "pos"],
                      ["Platform gap", 14, "pos"],
                      ["Latency", 5, "neu"],
                      ["Workflow", 5, "neu"],
                    ],
                  },
                  legend: [
                    { series: "neg", label: "Price, 48%" },
                    { series: "pos", label: "Privacy, accuracy and platform gaps, 14% each" },
                    { series: "neu", label: "Latency and workflow, 5% each" },
                  ],
                },
              ],
            },
            {
              type: "table",
              headers: [
                { text: "Bucket", w: "17%" },
                { text: "Count", w: "9%", n: true },
                { text: "Share", w: "9%", n: true },
                { text: "What it sounded like this week" },
              ],
              rows: [
                ["Price", "10", "48%", "\"Just canceled my WisprFlow subscription a few days ago to switch to an open source, free, local alternative\", and \"I refused to pay for Wispr Flow so I spent two weeks rebuilding it\" [[hn-cancel|Hacker News]] [[reddit-rebuild]]"],
                ["Privacy", "3", "14%", "\"I'm pretty privacy conscious and wanted a wispr flow-like app that kept everything local and on device\", plus a LinkedIn post on voice data retention opening \"Yikes, this is highly concerning\" [[hn-fnscribe|Hacker News]] [[li-retention|LinkedIn]]"],
                ["Accuracy", "3", "14%", "A measured 27.4% word error rate on bilingual speech with English words rendered in Cyrillic, and an iOS app that clipped the first sentence of everything for weeks [[reddit-bilingual]] [[reddit-clipping]]"],
                ["Platform gap", "3", "14%", "\"Love Wispr Flow on Mac, hate it on iPhone\", and a paying user whose home language was not supported [[reddit-iphone]] [[reddit-language]]"],
                ["Latency", "1", "5%", "Lag between pressing the hotkey and dictation starting [[reddit-latency]]"],
                ["Workflow", "1", "5%", "Wispr's main window grabbing focus whenever the Siri app is opened [[reddit-siri]]"],
                ["Account and billing", "0", "0%", "Nothing surfaced this window"],
              ],
            },
            {
              type: "p",
              text: "The shape of this mix is the finding. Price dominates, but nine of the ten price complaints are people building or adopting a free open-source clone rather than people shopping for a polished free app, and Tim's ignore list already treats that audience as unreachable. Meanwhile the three buckets where Cloudless is genuinely the better answer, privacy, accuracy and platform gaps, are 9 of 21 between them and every one of them is a specific person with a specific problem.",
            },
            { type: "h3", text: "The template Wispr's winning ads use" },
            {
              type: "p",
              text: "Taken from the 30 highest-impression live ads. Every line below is quoted from one of them. The value of this table is that Wispr paid to find out which of these work and the library shows the result for free [[meta-ads]]",
            },
            {
              type: "table",
              headers: [
                { text: "Line", w: "16%" },
                { text: "What it does", w: "26%" },
                { text: "What Wispr actually writes" },
              ],
              rows: [
                ["1. The hook", "A confession or an accusation. Never the product. 25 of 30 open this way.", "\"I kept putting off my online business because I can't type fast.\" \"You might be using your computer wrong.\" \"I am never as prepared for a call as I meant to be.\""],
                ["2. The turn", "One line naming the annoyance, usually with a number.", "\"Turns out typing is 40% slower anyway.\" \"Good prompts are long, so most people under-prompt.\""],
                ["3. The product", "One line. What you do, and what comes out. No feature list.", "\"Now I press one button, talk, and Flow keeps it clean.\" \"I talk mine and Flow types them clean into the editor.\""],
                ["4. The offer", "Always free, always imperative, always last.", "\"Try Flow free.\" \"Get Flow free and try this yourself.\" \"Download Wispr Flow free today.\""],
                ["Overlay headline", "A separate short line that stands alone, carried on the creative.", "\"Claude Code, but voice\". \"Slow fingers, big ideas?\". \"You're using your Mac wrong\". \"Big Words, Spelled Right\""],
                ["Format", "Video, vertical, one emoji in the hook line.", "27 of 30 are video. 3 are static image cards."],
              ],
            },
            {
              type: "table",
              headers: [
                { text: "Angle", w: "26%" },
                { text: "Of the top 30", w: "14%", n: true },
                { text: "What Cloudless can do with it" },
              ],
              rows: [
                ["Prompting Cursor and Claude Code", "8", "The audience Wispr proves converts, and the one most likely to care that audio leaves the device. Cloudless has no page for it."],
                ["Notetaker", "6", "Nothing to copy. Cloudless has no notetaker and does not need one."],
                ["Speed, 4x faster than typing", "4", "Copyable, but it is Wispr's ground and a local model has to actually be fast to claim it."],
                ["Snippets and shortcuts", "4", "Cloudless has snippets. It never advertises them."],
                ["Creator and lifestyle", "4", "Where the unpaid creators already are, and where Cloudless is absent."],
                ["Aspirational and emotional", "2", "Both point at the India page. Not Cloudless's market yet."],
                ["Price, privacy, offline, on-device", "0", "The entire Cloudless pitch, uncontested in Wispr's paid media."],
              ],
            },
            { type: "h3", text: "How durable each complaint is" },
            {
              type: "p",
              text: "Volume is the wrong way to rank a reply list, because the loudest post is often the one least likely to move. These are the same 21 complaints tagged by how much the person has invested in Wispr, which is what decides whether a reply is worth Tim's time. The reply table at the top of this report is ordered by this column, not by reach.",
            },
            {
              type: "table",
              headers: [
                { text: "Tag", w: "20%" },
                { text: "Count", w: "9%", n: true },
                { text: "What it looks like, and what to do" },
              ],
              rows: [
                ["Paying and leaving", "4", "A year of use, or the words cancel or refund. This week: the paying user whose home language was unsupported, the Pro user who moved to FluidVoice, and the Hacker News commenter who canceled for handy.computer. Reply first. These people have already decided to move and are choosing where. [[reddit-language]] [[reddit-fluidvoice]] [[hn-cancel|Hacker News]]"],
                ["Trialling and unimpressed", "6", "Days or weeks old, still deciding. This week: the month-old user reporting accuracy fell, and the person comparing Apple Dictation against AI voice keyboards. Cheap to win and just as cheap to lose again, so lead with a specific fix rather than a pitch. [[reddit-accuracy]] [[reddit-apple-dictation]]"],
                ["Venting", "5", "Annoyed but going nowhere. The hotkey lag thread and the Siri focus-grabbing bug both sit here. Answer if it takes a minute, do not build a reply list out of them. [[reddit-latency]] [[reddit-siri]]"],
                ["Already gone", "6", "They name where they went, so they are not leads. They are the only retention evidence about Wispr anyone outside the company can see, and this week not one of them named Cloudless."],
              ],
            },
            { type: "h3", text: "Where people went when they left" },
            {
              type: "p",
              text: "Named destinations from posts in the window. This is the closest thing to Wispr's retention that can be seen from outside, and Cloudless does not appear once.",
            },
            {
              type: "table",
              headers: [
                { text: "Went to", w: "20%" },
                { text: "Where it was said", w: "20%" },
                { text: "What they said" },
              ],
              rows: [
                ["handy.computer", "Hacker News, Aug 17", "[\"Just canceled my WisprFlow subscription a few days ago to switch to a open source, free, local alternative\"](https://news.ycombinator.com/item?id=49334327)"],
                ["FluidVoice", "r/WisprFlow", "[\"Wispr Flow was amazing when I first started, but as of late it sucks. I have since switched to FluidVoice\"](https://www.reddit.com/r/WisprFlow/comments/1vpzwrc/ive_started_to_use_pro_wisprflow_but_i_feel_the/)"],
                ["Android", "r/WisprFlow, Aug 26", "[\"I switched to an Android. Love it.\"](https://www.reddit.com/r/WisprFlow/comments/1vyqltv/iphone_action_button_user_experience/) on a thread about the iPhone experience"],
                ["Their own build", "r/SideProject, Aug 23", "[A paying user who spent a week building a replacement because their home language was not supported](https://www.reddit.com/r/SideProject/comments/1vwms3m/the_dictation_app_i_pay_for_cant_handle_my_home/)"],
                ["Moonshine", "Facebook", "[Named in the comments under one of Wispr's own ads, for speed](https://www.facebook.com/wisprflow/posts/you-talk-it-types-thats-the-whole-trick-%EF%B8%8Fwispr-flow-turns-your-voice-into-clean-/1113629651193100/)"],
              ],
            },
            { type: "h3", text: "Paid footprint by channel" },
            {
              type: "table",
              headers: [
                { text: "Channel", w: "22%" },
                { text: "Wispr Flow" },
                { text: "Cloudless" },
              ],
              rows: [
                ["Facebook and Instagram", "About 890 active ads, 12 of 30 sampled co-branded with a creator [[meta-ads|Meta Ad Library]]", "None [[meta-ads|Meta Ad Library]]"],
                ["Google search and display", "About 300 US ads on record, 297 display publishers across 3 networks [[google-ads|Google Ads]] [[sw-wispr|Similarweb]]", "None found [[google-ads|Google Ads]]"],
                ["Creator marketplace", "Trybe, tracked with a query parameter on the landing URL [[meta-ads|Meta Ad Library]]", "None"],
                ["Referral program", "30-day Pro trial for the friend, a free month for the referrer, capped at 1,000 referrals [[wispr-referral-doc|Wispr referrals]]", "None [[cloudless-home|Cloudless site]]"],
                ["Owned social", "YouTube is its largest social traffic source, then Facebook and LinkedIn [[sw-wispr|Similarweb]]", "Discord, YouTube and X, all still under the Onit name [[cloudless-home|Cloudless site]]"],
              ],
            },
            {
              type: "p",
              text: "What actual spend is cannot be known from outside. The Meta library shows how many ads are live and when each launched, but not budget, impressions or reach, and Google's transparency record shows creatives rather than money. What the count does support is direction, and the direction is that Wispr doubled its live creative in seven days while its website traffic fell. [[meta-ads]] [[google-ads]]",
            },
            { type: "h3", text: "What to copy, and what to avoid" },
            {
              type: "p",
              text: "Two things Wispr does are worth copying outright. The first is the referral mechanic, because it pays in product rather than cash and holds the reward until the referred person has actually used the thing. The second is the ROI calculator on the pricing page, which asks how many hours a day you type and what your time is worth and returns an annual saving. Cloudless can run the same calculator and end it on a larger number, because its own side of the equation is zero. [[wispr-referral-doc]] [[wispr-pricing]]",
            },
            {
              type: "p",
              text: "Two things Wispr does are worth avoiding. It is spending most of its new creative on Notetaker, a Mac-only product still labelled beta in its own help centre, while the complaints in its own subreddit are about iPhone and accuracy. And it has now shipped enough surface area to need a help article warning users about counterfeit Android apps. Both are the cost of moving fast on breadth, and both are places where a small product that does one thing well reads better than a large one that does eight. [[meta-ads]] [[wispr-docs]] [[reddit-iphone]] [[reddit-accuracy]] [[wispr-fake-android]]",
            },
            {
              type: "note",
              text: "One thing this section is not evidence of. A rising complaint count tells you customers are available and why they are unhappy. It does not tell you whether Wispr is losing users, because activation and retention live in Wispr's own analytics and no outside tool can see them. Whether the people who arrive at Cloudless stay is Cloudless's product problem, not something this report can answer.",
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
              cap: "Wispr's 23 open roles by team",
              sub: "Ashby job board, read Aug 30. Cloudless posts no public roles.",
              chart: {
                kind: "rows",
                fmt: "num",
                labelAll: true,
                aria: "Wispr open roles by team: Marketing and Growth 5, Software Platform 5, Software Core 4, AI Lab 2, General 2, Product and Design 2, Customer Support 1, Finance 1, GTM 1.",
                rows: [
                  ["Marketing & Growth", 5, "primary"],
                  ["Software, Platform", 5, "primary"],
                  ["Software, Core", 4, "primary"],
                  ["AI Lab", 2, "primary"],
                  ["General", 2, "primary"],
                  ["Product & Design", 2, "primary"],
                  ["Customer Support", 1, "primary"],
                  ["Finance", 1, "primary"],
                  ["GTM", 1, "primary"],
                ],
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
              claim: "Wispr is hiring 23 people and spending as much of it on marketing as on platform engineering.",
              body: [
                {
                  type: "p",
                  text: "Marketing and Growth and Software Platform are tied as the largest open teams at five roles each. The marketing five are a B2B Marketing Lead, a Head of Growth for consumer, a Head of PR and External Communications, a Paid Search Performance Marketing Manager and a Senior Designer for brand and growth. Wispr also lists an \"Ex-Founder\" role, described on the Menlo Ventures board as owning either new product lines for the voice assistant or rapid growth. [[wispr-jobs]] [[wispr-job-exfounder]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** A named paid search hire is a signal that the cheap descriptive keywords will be contested within a quarter. Buy them now while the auction is empty.",
                },
              ],
            },
            {
              claim: "The engineering hires close the two gaps Cloudless still points at.",
              body: [
                {
                  type: "p",
                  text: "Wispr has an open Software Engineer, Android role and a Design Engineer, Mobile role, so the platform Cloudless does not ship is the one Wispr is staffing. It also has a Head of Engineering for Enterprise and a Platform Engineer for Product Security, which is what a company builds before it sells into regulated buyers. There is no role anywhere on the board for on-device or edge inference, and none for Linux. [[wispr-jobs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** Wispr is not hiring anyone to make the product run locally, which means the cloud architecture is a commitment rather than a stage. On-device is the one line Cloudless holds that Wispr is not staffing to take.",
                },
              ],
            },
            {
              claim: "Nearly every role is San Francisco and on-site, at salaries Cloudless cannot match.",
              body: [
                {
                  type: "p",
                  text: "Of the 23 roles, all but a handful are listed as San Francisco and on-site, with a few marked San Francisco or New York and hybrid. The one salary Wispr publishes is $170K to $190K plus equity for a Senior Designer in brand and growth marketing. A third-party board lists a Wispr salary range of $180,000 to $325,000. Cloudless is a bootstrapped company with no announced funding. [[wispr-jobs]] [[startx-jobs]] [[cloudless-home]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Cloudless:** Cloudless is not going to win a hiring race, so it should not run one. The useful read is that Wispr has chosen an expensive, on-site, single-city team, which sets a floor under how cheap it can ever make the product.",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            {
              type: "p",
              text: "The full board, read on August 30. Wispr recruits through Ashby and links to it from its careers page. [[wispr-careers]] [[wispr-jobs]]",
            },
            {
              type: "table",
              headers: [
                { text: "Team", w: "18%" },
                { text: "Role" },
                { text: "Location", w: "26%" },
              ],
              rows: [
                ["AI Lab", "[ML Engineer](https://jobs.ashbyhq.com/wispr-flow/9cf022b6-55b1-4fcc-940a-6988bd94b6d3)", "San Francisco, on-site"],
                ["AI Lab", "[ML Scientist](https://jobs.ashbyhq.com/wispr-flow/ea87a981-d2f1-4150-9572-d62af2ed34d0)", "San Francisco, on-site"],
                ["Customer Support", "[Technical Support Engineer](https://jobs.ashbyhq.com/wispr-flow/c45eb438-a872-4dc0-9b81-9d76560f33df)", "San Francisco, Bangalore or New York, hybrid"],
                ["Finance", "[Head of Finance](https://jobs.ashbyhq.com/wispr-flow/70221938-a75a-41f8-b4ef-aea3cec45d1c)", "San Francisco, on-site"],
                ["General", "[Ex-Founder](https://jobs.ashbyhq.com/wispr-flow/658fb613-3dcc-4932-9927-dadbf83f95cd)", "San Francisco, on-site"],
                ["General", "[Head of Talent](https://jobs.ashbyhq.com/wispr-flow/6cdebeca-ae06-4b1b-97f8-28f7f6373490)", "San Francisco, on-site"],
                ["GTM", "[Account Executive](https://jobs.ashbyhq.com/wispr-flow/54cf9313-9311-4b81-aabd-ca34a8bd9062)", "San Francisco or New York, on-site"],
                ["Marketing & Growth", "[B2B Marketing Lead](https://jobs.ashbyhq.com/wispr-flow/92221cc5-5d02-4431-9633-fc07c2539790)", "San Francisco, on-site"],
                ["Marketing & Growth", "[Head of Growth, B2C](https://jobs.ashbyhq.com/wispr-flow/365a017d-49e7-41cc-9b7c-e2834b86b813)", "San Francisco, on-site"],
                ["Marketing & Growth", "[Head of PR & External Communications](https://jobs.ashbyhq.com/wispr-flow/27629388-99ad-416c-b64e-aabd12e7b741)", "San Francisco, on-site"],
                ["Marketing & Growth", "[Paid Search Performance Marketing Manager](https://jobs.ashbyhq.com/wispr-flow/d5e62bef-ab04-4eab-85ad-684ec968cc3e)", "San Francisco or New York, hybrid"],
                ["Marketing & Growth", "[Senior Designer, Brand & Growth Marketing](https://jobs.ashbyhq.com/wispr-flow/d565cc8e-1ba0-4d6e-8009-5e6afd8b4787)", "San Francisco, on-site, $170K to $190K plus equity"],
                ["Product & Design", "[Product Designer](https://jobs.ashbyhq.com/wispr-flow/2cfc837d-a99e-4b5c-8e7e-bc14b3aad7aa)", "San Francisco or remote US"],
                ["Product & Design", "[Product Lead](https://jobs.ashbyhq.com/wispr-flow/c9c547f6-c093-492f-8e40-3fd8066dfd04)", "San Francisco, on-site"],
                ["Software, Core", "[Design Engineer](https://jobs.ashbyhq.com/wispr-flow/921f1bda-6472-463b-8eb4-b840f69a30a5)", "San Francisco or remote US"],
                ["Software, Core", "[Design Engineer, Mobile](https://jobs.ashbyhq.com/wispr-flow/2065defc-4def-4125-8ee6-fb61793de01e)", "San Francisco or remote US"],
                ["Software, Core", "[Software Engineer, Android](https://jobs.ashbyhq.com/wispr-flow/1dc4f5fb-b01c-4728-a9bc-4c7d92cf17b9)", "San Francisco, on-site"],
                ["Software, Core", "[Software Engineer, Product](https://jobs.ashbyhq.com/wispr-flow/8a9f60cd-ab73-42d6-9450-94dfbe80886e)", "San Francisco, on-site"],
                ["Software, Platform", "[Head of Engineering, Enterprise](https://jobs.ashbyhq.com/wispr-flow/9606fba9-021e-4daa-8e2e-efa2cbf506b7)", "San Francisco, on-site"],
                ["Software, Platform", "[Platform Engineer, Billing Systems](https://jobs.ashbyhq.com/wispr-flow/4dfdbbe6-09de-470a-ae7a-ffe2072e93c5)", "San Francisco or remote US"],
                ["Software, Platform", "[Platform Engineer, Infrastructure](https://jobs.ashbyhq.com/wispr-flow/c5df87d4-73df-467c-91ca-db9a0da64a0a)", "San Francisco or remote US"],
                ["Software, Platform", "[Platform Engineer, Product Security](https://jobs.ashbyhq.com/wispr-flow/8c6a3c2a-c893-4c48-bf54-8d290f04e9e0)", "San Francisco or remote US"],
                ["Software, Platform", "[Staff Platform Engineer, Infrastructure](https://jobs.ashbyhq.com/wispr-flow/935df07f-6718-4c23-988e-f388fdb79760)", "San Francisco or remote US"],
              ],
            },
            {
              type: "p",
              text: "Two things stand out beyond the counts. A Platform Engineer for Billing Systems is a role a company opens when the pricing page has just gained a tier, which matches the arrival of Growth. And a Head of PR and External Communications alongside a $280M raise means the volume of Wispr coverage is about to rise, so a Cloudless page that argues against last quarter's Wispr will be read against this quarter's press. [[wispr-jobs]] [[wispr-ent-pricing]] [[wispr-seriesb]]",
            },
            {
              type: "p",
              text: "Wispr was founded in 2021 by Sahaj Garg and Tanay Kothari and is based in San Francisco. Kothari is CEO and wrote the Series B announcement, and Ariya Rastrow, a founding member of the Alexa team, is chief scientist and runs the research lab announced in July. Cloudless is Synth, Inc., run by Tim Lenardo, with no announced funding and no public job board. [[tracxn]] [[wispr-seriesb]] [[cloudless-home]]",
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
            "[[sw-wispr]]",
            "[[sw-cloudless]]",
            "[[meta-ads]]",
            "[[google-ads]]",
            "[[appstore-wispr]]",
            "[[appstore-cloudless]]",
            "[[play-wispr]]",
          ],
        },
        { type: "h3", text: "Wispr Flow's own pages" },
        {
          type: "links",
          items: [
            "[[wispr-pricing]]",
            "[[wispr-ent-pricing]]",
            "[[wispr-seriesb]]",
            "[[wispr-careers]]",
            "[[wispr-jobs]]",
            "[[wispr-job-exfounder]]",
            "[[wispr-docs]]",
            "[[wispr-plans-doc]]",
            "[[wispr-referral-doc]]",
            "[[wispr-security-doc]]",
            "[[wispr-enterprise-post]]",
            "[[wispr-fake-android]]",
            "[[wispr-api]]",
          ],
        },
        { type: "h3", text: "Cloudless's own pages" },
        {
          type: "links",
          items: [
            "[[cloudless-home]]",
            "[[cloudless-vs-wispr]]",
            "[[cloudless-vs-wispr-bench]]",
            "[[cloudless-privacy-security]]",
            "[[cloudless-enterprise]]",
            "[[cloudless-fr]]",
          ],
        },
        { type: "h3", text: "Reviews, roundups and press" },
        {
          type: "links",
          items: [
            "[[product-hunt]]",
            "[[roundup-plaud]]",
            "[[roundup-tactiq]]",
            "[[tracxn]]",
            "[[startx-jobs]]",
          ],
        },
        { type: "h3", text: "Social" },
        {
          type: "links",
          items: [
            "[[reddit-accuracy]]",
            "[[reddit-iphone]]",
            "[[reddit-latency]]",
            "[[reddit-bilingual]]",
            "[[reddit-language]]",
            "[[reddit-siri]]",
            "[[reddit-clipping]]",
            "[[reddit-holdsay]]",
            "[[reddit-plynn]]",
            "[[reddit-rebuild]]",
            "[[reddit-hemsa]]",
            "[[reddit-osx-dictate]]",
            "[[reddit-loopit]]",
            "[[reddit-apple-dictation]]",
            "[[reddit-fluidvoice]]",
            "[[hn-cancel]]",
            "[[hn-fnscribe]]",
            "[[hn-notetaker]]",
            "[[li-retention]]",
          ],
        },
      ],
    },
  ],
  footer: "",
  sources: {
    "sw-wispr": { label: "Similarweb, wisprflow.ai", href: "https://www.similarweb.com/website/wisprflow.ai/", logo: "similarweb" },
    "sw-cloudless": { label: "Similarweb, cloudless.so", href: "https://www.similarweb.com/website/cloudless.so/", logo: "similarweb" },
    "meta-ads": { label: "Meta Ad Library, Wispr Flow", href: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&view_all_page_id=110864474787474&search_type=page&media_type=all", logo: "meta-ad-library" },
    "google-ads": { label: "Google Ads Transparency Center, wisprflow.ai", href: "https://adstransparency.google.com/?region=US&domain=wisprflow.ai", logo: "google-ads-transparency" },
    "appstore-wispr": { label: "App Store, Wispr Flow", href: "https://apps.apple.com/us/app/id6497229487", logo: "app-store" },
    "appstore-cloudless": { label: "App Store, Cloudless", href: "https://apps.apple.com/us/app/id6760565298", logo: "app-store" },
    "play-wispr": { label: "Google Play, Wispr Flow", href: "https://play.google.com/store/apps/details?id=com.wispr.flowapp", logo: "google-play" },
    "wispr-pricing": { label: "Wispr Flow pricing", href: "https://wisprflow.ai/pricing", logo: "wispr" },
    "wispr-ent-pricing": { label: "Wispr Flow enterprise pricing", href: "https://wisprflow.ai/enterprise-pricing", logo: "wispr" },
    "wispr-seriesb": { label: "Wispr Flow, Our Series B", href: "https://wisprflow.ai/post/series-b", logo: "wispr" },
    "wispr-careers": { label: "Wispr Flow careers", href: "https://wisprflow.ai/careers", logo: "wispr" },
    "wispr-jobs": { label: "Wispr Flow job board (Ashby)", href: "https://jobs.ashbyhq.com/wispr-flow", logo: "ashby" },
    "wispr-job-exfounder": { label: "Ex-Founder role, Menlo Ventures board", href: "https://jobs.menlovc.com/companies/wispr-flow-2-6fe53922-de8d-4957-b9c1-5947be3ff563/jobs/55872772-ex-founder", logo: "menlo" },
    "wispr-docs": { label: "Wispr Flow help centre", href: "https://docs.wisprflow.ai", logo: "wispr" },
    "wispr-plans-doc": { label: "Wispr Flow plans and what's included", href: "https://docs.wisprflow.ai/articles/9559327591-flow-plans-and-what-s-included", logo: "wispr" },
    "wispr-referral-doc": { label: "Wispr Flow referral program", href: "https://docs.wisprflow.ai/articles/6496688316-how-to-find-your-referral-link", logo: "wispr" },
    "wispr-enterprise-post": { label: "Wispr Flow, Enterprise privacy and security overview", href: "https://wisprflow.ai/post/enterprise-privacy-and-security-overview", logo: "wispr" },
    "wispr-security-doc": { label: "Wispr Flow security and compliance FAQ", href: "https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq", logo: "wispr" },
    "wispr-fake-android": { label: "Wispr Flow on fake Android apps", href: "https://docs.wisprflow.ai/articles/6573848530-fake-android-apps-impersonating-wispr-flow", logo: "wispr" },
    "wispr-api": { label: "Wispr Flow Voice Interface API docs", href: "https://api-docs.wisprflow.ai/introduction", logo: "wispr" },
    "cloudless-home": { label: "Cloudless Voice homepage", href: "https://www.cloudless.so", logo: "cloudless" },
    "cloudless-vs-wispr": { label: "Cloudless Voice vs Wispr Flow", href: "https://www.cloudless.so/wispr-flow-alternative", logo: "cloudless" },
    "cloudless-vs-wispr-bench": { label: "Cloudless Voice, Wispr vs Cloudless benchmark", href: "https://www.cloudless.so/wispr-vs-cloudless", logo: "cloudless" },
    "cloudless-privacy-security": { label: "Cloudless Voice privacy and security", href: "https://www.cloudless.so/privacy-security", logo: "cloudless" },
    "cloudless-enterprise": { label: "Cloudless Voice for enterprise", href: "https://www.cloudless.so/enterprise", logo: "cloudless" },
    "cloudless-fr": { label: "Cloudless Voice, French page", href: "https://www.cloudless.so/fr", logo: "cloudless" },
    "product-hunt": { label: "Product Hunt, AI dictation apps", href: "https://www.producthunt.com/categories/ai-dictation-apps", logo: "product-hunt" },
    "roundup-plaud": { label: "Plaud, 5 best Wispr Flow alternatives", href: "https://www.plaud.ai/blogs/articles/wispr-flow-alternatives", logo: "postbeam" },
    "roundup-tactiq": { label: "Tactiq, 6 best Wispr Flow alternatives", href: "https://tactiq.io/learn/wispr-flow-alternatives", logo: "postbeam" },
    "tracxn": { label: "Tracxn, Wispr Flow company profile", href: "https://tracxn.com/d/companies/wispr-flow/__XTPty9fIPUjngX0uMeYcKZnHJVG4WCoPwSamLLI2QjE", logo: "latka" },
    "startx-jobs": { label: "StartX job board, Wispr Flow salary range", href: "https://jobs.startx.com/jobs/wispr-flow", logo: "startup-jobs" },
    "reddit-accuracy": { label: "r/WisprFlow, change in transcription accuracy", href: "https://www.reddit.com/r/WisprFlow/comments/1vzhfsu/has_anyone_else_noticed_a_change_in_transcription/", logo: "reddit" },
    "reddit-iphone": { label: "r/WisprFlow, love it on Mac, hate it on iPhone", href: "https://www.reddit.com/r/WisprFlow/comments/1vz0fnk/love_wispr_flow_on_mac_hate_it_on_iphone_what_am/", logo: "reddit" },
    "reddit-latency": { label: "r/WisprFlow, push to talk release delay", href: "https://www.reddit.com/r/WisprFlow/comments/1vzwawl/feature_requests_push_to_talk_release_delay_for/", logo: "reddit" },
    "reddit-bilingual": { label: "r/ProductivityApps, don't use Wispr Flow for bilingual dictation", href: "https://www.reddit.com/r/ProductivityApps/comments/1w0hed8/dont_use_wispr_flow_or_superwhisper_for_bilingual/", logo: "reddit" },
    "reddit-language": { label: "r/SideProject, the dictation app I pay for can't handle my home language", href: "https://www.reddit.com/r/SideProject/comments/1vwms3m/the_dictation_app_i_pay_for_cant_handle_my_home/", logo: "reddit" },
    "reddit-siri": { label: "r/MacOSBeta, Siri app and Wispr Flow", href: "https://www.reddit.com/r/MacOSBeta/comments/1vx1efz/siri_app_and_wispr_flow_weird_behavior/", logo: "reddit" },
    "reddit-clipping": { label: "r/googlehome, Wispr's iOS app clipped the first sentence for weeks", href: "https://www.reddit.com/r/googlehome/comments/1vx75pq/this_morning_i_couldnt_set_a_reminder_hey_google/", logo: "reddit" },
    "reddit-holdsay": { label: "r/macapps, HoldSay, on Wispr at $144 a year and cloud-based", href: "https://www.reddit.com/r/macapps/comments/1vzvsre/holdsay_a_voice_card_for_dictation_meeting_notes/", logo: "reddit" },
    "reddit-plynn": { label: "r/SideProject, Plynn, a local version of WisprFlow", href: "https://www.reddit.com/r/SideProject/comments/1w18lwn/built_my_own_local_version_of_wisprflow_called/", logo: "reddit" },
    "reddit-rebuild": { label: "r/SideProject, I refused to pay for Wispr Flow so I rebuilt it", href: "https://www.reddit.com/r/SideProject/comments/1w0h2df/i_built_an_opensource_dictation_app_so_i_could/", logo: "reddit" },
    "reddit-hemsa": { label: "r/SideProject, Hemsa, a Windows dictation app that runs locally", href: "https://www.reddit.com/r/SideProject/comments/1w0sx5a/i_built_a_windows_dictation_app_that_runs/", logo: "reddit" },
    "reddit-osx-dictate": { label: "r/osx, Dictate, a free local-first alternative to Wispr Flow", href: "https://www.reddit.com/r/osx/comments/1vyhwgl/dictate_a_free_localfirst_alternative_to_wispr/", logo: "reddit" },
    "reddit-loopit": { label: "r/SideProject, week 3 of building a Wispr Flow alternative", href: "https://www.reddit.com/r/SideProject/comments/1vxtnzc/loopitio/", logo: "reddit" },
    "reddit-apple-dictation": { label: "r/AssistiveTechnology, Apple Dictation vs AI voice keyboards", href: "https://www.reddit.com/r/AssistiveTechnology/comments/1w0p2vm/apple_dictation_vs_ai_voice_keyboards_what/", logo: "reddit" },
    "reddit-fluidvoice": { label: "r/WisprFlow, Pro quality dropped, switched to FluidVoice", href: "https://www.reddit.com/r/WisprFlow/comments/1vpzwrc/ive_started_to_use_pro_wisprflow_but_i_feel_the/", logo: "reddit" },
    "hn-cancel": { label: "Hacker News, canceled WisprFlow for a free local alternative", href: "https://news.ycombinator.com/item?id=49334327", logo: "hacker-news" },
    "hn-fnscribe": { label: "Hacker News, Show HN: FnScribe, offline dictation for macOS", href: "https://news.ycombinator.com/item?id=49475160", logo: "hacker-news" },
    "hn-notetaker": { label: "Hacker News, Wispr Flow launches a Granola-styled meeting notetaker", href: "https://news.ycombinator.com/item?id=49179950", logo: "hacker-news" },
    "li-retention": { label: "LinkedIn, concerns about Wispr Flow voice data retention", href: "https://www.linkedin.com/posts/shahank42_yikes-this-is-highly-concerning-this-activity-7493232262054998016-o8PE", logo: "linkedin" },
  },
};
