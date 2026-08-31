import type { Brief } from "./types";

export const wispr: Brief = {
  slug: "wispr",
  title: "Wispr Flow weekly brief: brand & competitive analysis",
  sub: "For the Willow Voice team, August 23, 2026",
  subject: "Wispr Flow",
  client: "Willow",
  intro: [
    { type: "h3", text: "Scorecard" },
    {
      type: "scorecard",
      rows: [
        {
          metric: "Monthly site visits",
          primary: "4.4M",
          us: "179K",
          change: "97% of Wispr's organic visits are brand searches; 98% of its search clicks are paid.",
        },
        { metric: "Share of site visits that come from free Google results", primary: "30%", us: "29%" },
        {
          metric: "Paid keywords (US)",
          primary: "21,582",
          us: "1,615",
          change: "Mostly other apps' names (docs, slack, chat gpt login).",
        },
        {
          metric: "Est. monthly Google Ads (US)",
          primary: "$446K",
          us: "$10K to 39K",
          change: "Flat since June. Keyword count fell as the budget rose.",
        },
        {
          metric: "Organic keywords (Semrush, global)",
          primary: "3,542",
          us: "not public",
          change: "Down 81% since February.",
        },
        {
          metric: "App Store ratings (average)",
          primary: "14,030 (4.8)",
          us: "995 (4.6)",
          change: "Ratings lag sentiment; watch weekly velocity, not the average.",
        },
        {
          metric: "Active Meta ads",
          primary: "400",
          us: "0",
          change: "Nothing in Wispr's library is older than 23 days.",
        },
        {
          metric: "Meta creative that is UGC",
          primary: "279 of 400",
          us: "n/a",
          change: "Trybe creator videos, mostly Cursor, Claude and ChatGPT angles.",
        },
        {
          metric: "TikTok followers, brand account",
          primary: "973",
          us: "1,316",
          change: "Wispr's reach is creators with affiliate codes, not the account.",
        },
        {
          metric: "X mentions per day",
          primary: "143",
          us: "under 1",
          change: "300 Wispr posts in 2.5 days vs 300 Willow posts since 2020.",
        },
        {
          metric: "X posts that are complaints, switching or asking for alternatives",
          primary: "47 of 300 (16%)",
          us: "11 of 300 (all-time)",
          change: "Keyword-flagged, Aug 21 to 23. Hand tally for Aug 20 to 21 was 27%.",
        },
        {
          metric: "Reddit posts mentioning, since Jul 20",
          primary: "170",
          us: "32",
          change: "11 of Willow's 32 are its own Aug 21 to 22 posts, at one upvote each.",
        },
      ],
    },
    { type: "h3", text: "Recommended actions for Willow Voice from the analysis" },
    {
      type: "moves",
      items: [
        {
          action: "Answer the accuracy complaints Wispr is ignoring.",
          why: 'The r/WisprFlow "quality is getting worse" thread is still growing and 27% of X posts are complaints or switching. Nobody from the Wispr team has replied. Have real Willow employees reply to those who are complaining about Wispr Flow on X, show customer care and increase trust and social media presence.',
          evidence: "advertising-and-social-media",
        },
        {
          action: "Push Willow's unlimited dictation offering and correct their vs-Willow page in public.",
          why: 'Wispr caps desktop at 2,000 words a week and iPhone at 1,000. Willow Voice has unlimited. This unlimited dictation offering should be offered everywhere. Also, Wispr Flow\'s "Wispr vs Willow Voice" page gets the facts about Willow wrong. Call them out on it and get it fixed, because search engines index on it.',
          evidence: "pricing-and-product",
        },
        {
          action: "Buy search terms Wispr isn't bidding on: alternative, vs, medical, legal, privacy and offline.",
          why: "98% of Wispr's search clicks are paid and its top terms are docs, slack and chat gpt login. The category auction Willow bids in is a different one. The non-brand keywords Wispr ignores are where Willow's dollars go furthest.",
          evidence: "search-and-app-stores",
        },
        {
          action: "Tap into the existing creator channel Wispr's reach depends on.",
          why: "279 of Wispr's 400 ads are Trybe creator UGC. The reach comes from creators with affiliate codes. \"Free Wispr Flow alternatives\" already gets 25K plays on its own, which makes it Willow's cheapest TikTok entry.",
          evidence: "advertising-and-social-media",
        },
      ],
    },
    { type: "h3", text: "Wispr Flow social media mentions (negative sentiment)" },
    {
      type: "note",
      text: "Live posts pulled Aug 23 where someone is complaining about Wispr or asking for an alternative, ranked by reach. None has a Willow reply yet.",
    },
    {
      type: "table",
      headers: [{ text: "Where", w: "18%" }, { text: "Date", w: "7%", nw: true }, { text: "Post" }, { text: "Reach", w: "13%" }],
      rows: [
        [
          "r/WisprFlow",
          "Aug 16",
          "[I've started to use Pro WisprFlow, but I feel the quality is getting worse](https://www.reddit.com/r/WisprFlow/comments/1vpzwrc/ive_started_to_use_pro_wisprflow_but_i_feel_the/)",
          "21 up, 33 comments",
        ],
        [
          "r/ProductivityApps",
          "Aug 11",
          "[Best Free Dictation App for Mac?](https://www.reddit.com/r/ProductivityApps/comments/1vli8un/best_free_dictation_app_for_mac/)",
          "12 up, 41 comments",
        ],
        [
          "r/ProductivityApps",
          "Aug 21",
          "[Privacy-first dictation apps?](https://www.reddit.com/r/ProductivityApps/comments/1vugq48/privacyfirst_dictation_apps/)",
          "12 up, 22 comments",
        ],
        [
          "r/ProductivityApps",
          "Aug 13",
          "[Best system-wide dictation apps (Wispr Flow alternatives) for macOS?](https://www.reddit.com/r/ProductivityApps/comments/1vnq6c1/best_systemwide_dictation_apps_wispr_flow/)",
          "28 comments",
        ],
        [
          "r/WisprFlow",
          "Aug 18",
          "[Pretty sure I just broke the Wispr Flow state machine. I am now in word debt](https://www.reddit.com/r/WisprFlow/comments/1vs3w1b/pretty_sure_i_just_broke_the_wispr_flow_state/)",
          "30 up, 10 comments",
        ],
        [
          "r/WisprFlow",
          "Aug 13",
          "[Beyond the Wispr Flow paywall: alternatives for heavy users?](https://www.reddit.com/r/WisprFlow/comments/1vnq4qt/beyond_the_wispr_flow_paywall_alternatives_for/)",
          "12 comments",
        ],
        [
          "r/WisprFlow",
          "Aug 10",
          "[Has Wispr on iOS improved in the last 6 months?](https://www.reddit.com/r/WisprFlow/comments/1vko57u/has_wispr_on_ios_improved_in_the_last_6_months/)",
          "21 comments",
        ],
        [
          "r/AssistiveTechnology",
          "Aug 13",
          "[long-time user. the product has gotten noticeably worse over the last few months](https://www.reddit.com/r/AssistiveTechnology/comments/1vn5hok/longtime_user_the_product_has_gotten_noticeably/)",
          "9 up, 5 comments",
        ],
        [
          "X, @myles_snider (29.8K followers)",
          "Aug 21",
          "[What's the best free Wispr Flow alternative that works on iOS and Mac?](https://x.com/myles_snider/status/2090840249505079588)",
          "4.3K views, 14 replies",
        ],
        [
          "X, @dansemperepico (103.6K)",
          "Aug 23",
          "[WisprFlow is getting worse and worse each day for me](https://x.com/dansemperepico/status/2091443073381494789)",
          "1.6K views, 7 replies",
        ],
        [
          "X, @ColinGardiner (6.3K)",
          "Aug 23",
          "[The Wispr Flow keyboard on iPhone is just absolutely awful.](https://x.com/ColinGardiner/status/2091325618063360297)",
          "2.2K views, 6 replies",
        ],
        [
          "X, @VadimStrizheus (36.6K)",
          "Aug 22",
          "[Wisprflow adds a ton of random emojis after my last word](https://x.com/VadimStrizheus/status/2091307729637765563)",
          "1.8K views, 12 replies",
        ],
        [
          "X, @jonpbaker (3K)",
          "Aug 23",
          "[I just unsubscribed to @WisprFlow. It's become inconsistent and super annoying on iphone. Whats a better option?](https://x.com/jonpbaker/status/2091360928340038074)",
          "846 views",
        ],
        [
          "X, @ChadHamzeh (2.1K)",
          "Aug 21",
          "[What's the best alternative right now for Wispr Flow?](https://x.com/ChadHamzeh/status/2090940063588999604)",
          "750 views, 3 replies",
        ],
        [
          "X, @mattlam_ (3.1K)",
          "Aug 22",
          "[@WisprFlow has gotten so inaccurate, need to look at alternatives. What are people using?](https://x.com/mattlam_/status/2091164647357313131)",
          "238 views",
        ],
        [
          "X, @dneighbors (4.3K)",
          "Aug 21",
          "[@WisprFlow has eaten the same 5min brain dump 3 times](https://x.com/dneighbors/status/2090888192371360172)",
          "272 views",
        ],
        [
          "X, @AgiWhen",
          "Aug 23",
          "[the new wispr 2k/words/week limit is absurdly low](https://x.com/AgiWhen/status/2091426502336565389)",
          "29 views",
        ],
        [
          "X, @solar2029",
          "Aug 23",
          "[iOS keyboard is TRASH. Actively looking for alternatives](https://x.com/solar2029/status/2091379813239992627)",
          "29 views",
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
                "Wispr mostly disappeared from free Google results this year, and is now paying to make up the difference.",
              body: [
                {
                  type: "p",
                  text: "At the start of the year, wisprflow.ai showed up in free Google results for tens of thousands of different searches (SpyFu counted 20,250 in January, Semrush counted 35,961 in February). By this summer, both counts had fallen below 4,000. Over the same months, Wispr's estimated Google ad spending grew to $446K a month, and 98% of its visits from Google now come from paid ads rather than free results. The most likely cause is a flood of new competitors crowding it out of those free results. [[spyfu]] [[semrush]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Willow:** Wispr looks 25x bigger than Willow on paper. But most of that traffic is people typing \"wispr flow\" into Google because they already know the name. Only about 2% of its search visitors find it by searching for what the product actually does. Strip out the brand name and the two companies may be closer than the raw numbers suggest. Wispr's real edge right now is name recognition. Building Willow's name up the same way is worth considering, though it could be costly. [[similarweb]]",
                },
              ],
            },
            {
              claim: "Paying Wispr users are saying the product is getting worse, and nobody from Wispr is responding.",
              body: [
                {
                  type: "p",
                  text: "A thread in Wispr's own subreddit titled \"I've started to use Pro, quality is getting worse\" (Aug 16) is still growing, and commenters mention switching to a competitor called FluidVoice. On X, 27% of a 120-post sample was complaints or people looking to switch. Users are asking about Canto, the new model Wispr says will fix accuracy, but nobody from the company has responded to the complaints or shared any Canto news. [[reddit]] [[x]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Willow:** accuracy and ease of use are the main reasons people pay for dictation, and right now there is loud public doubt about whether Wispr delivers them. Willow should openly challenge Wispr on accuracy: publish head-to-head numbers, show improvement over time, show accuracy across languages. Expect Wispr to punch back when Canto ships. [[reddit]]",
                },
              ],
            },
            {
              claim:
                "Wispr's big-company deals appear stuck because the team to close them doesn't exist yet. Its own job board says so.",
              body: [
                {
                  type: "p",
                  text: "Wispr relisted its enterprise engineering job at a higher level and a higher salary ($320K to 400K, the highest on its board) with \"unblock major Fortune 100 deals\" written right in the description. Companies don't write that unless deals are actually blocked. New openings for security, billing and infrastructure engineers point the same direction: the plumbing that big companies require isn't built yet. This is also our best guess for why the Notetaker isn't available to enterprise customers. [[ashby-2]] [[wispr-pricing]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Willow:** the deals Wispr wants are stalling on things it hasn't built, while Willow already sells a business plan with the security certifications big companies ask for (SOC 2, HIPAA, and a guarantee that customer audio is never stored). Willow can win those buyers now with its published pricing and ready-to-buy business plan. [[ashby]]",
                },
              ],
            },
            {
              claim:
                "Wispr has chosen not to staff sales or customer care. A customer with a problem has nobody to call.",
              body: [
                {
                  type: "p",
                  text: "Wispr removed its customer-care and account-manager job openings rather than filling them. Our read on why: the vast majority of its revenue is individuals buying a single subscription with a credit card. The product sells itself, so the company decided that people to look after customers can wait. [[ashby]] [[postbeam]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Willow:** Wispr can't run a serious business sales effort with this staffing. Willow can go the other way: sell to the whole company at once with its more complete business plan, offer one bill for the whole team, and actually help teams get set up properly. [[postbeam]]",
                },
              ],
            },
            {
              claim:
                'Half of Wispr\'s newest ads sell the Notetaker, two weeks after users started posting "will not renew" over it.',
              body: [
                {
                  type: "p",
                  text: '25 of the 51 ads Wispr launched on Aug 21 point to its new Notetaker, a meeting notes feature that shipped Aug 5. It comes free with every plan, the meeting audio is processed on Wispr\'s servers, and it switched itself on for some users without asking. From X that same week: "activating meeting notes features without ANY opt-in. Invasive and stupid. Will not renew." and "your meeting summaries are shit, the only good thing is your transcript." Wispr\'s lead investor has been open about the strategy: "It isn\'t a dictation market. Dictation is how you get in the door." [[meta-ad-library]] [[x-wispr-flow-notetaker]] [[menlo]]',
                },
                {
                  type: "why",
                  text: "**Why it matters for Willow:** Wispr is spending its money to enter the meeting-notes fight against Granola and Otter, and it is dragging a trust problem in with it. That hands Willow a clean pitch for privacy-minded buyers: dictation that doesn't record your meetings, doesn't switch features on for you, and doesn't send audio anywhere you didn't agree to. It also predicts where Wispr's ad money goes next: meeting-notes searches, not dictation ones. [[meta-ad-library]]",
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
          type: "table",
          headers: [
            { text: "Plan" },
            { text: "Price" },
            { text: "Word limit" },
            { text: "Notetaker" },
            { text: "Team admin" },
            { text: "Compliance" },
          ],
          rows: [
            [
              "Free",
              "$0",
              "2,000/wk desktop, 1,000/wk iPhone, unlimited Android",
              "Yes, weekly meeting cap",
              "No",
              "HIPAA-ready",
            ],
            [
              "Pro",
              "$15/mo or $12/mo annual",
              "Unlimited",
              "Yes, more meetings, longer retention",
              "Central billing, shared dictionary, admin controls",
              "HIPAA-ready",
            ],
            [
              "Enterprise",
              "Contact sales",
              "Unlimited",
              "Coming soon",
              "Advanced analytics, IT admin seats",
              "SOC 2 Type II, ISO 27001, BAA, SSO, SCIM",
            ],
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          items: [
            {
              claim: "The Notetaker is free for everyone except for enterprise customers.",
              body: [
                {
                  type: "p",
                  text: 'Speaker identification, ask-anything search and MCP access ship on the $0 plan with a weekly meeting cap. Pro gets more meetings kept for longer. Enterprise gets "coming soon." The meeting cap itself is unpublished. [[wispr-pricing]]',
                },
                {
                  type: "why",
                  text: '**Why it matters for Willow:** Wispr is using its dictation install base as free distribution against Granola, Otter and Fireflies, and it means the accounts that pay the most are the last to get the new product. Enterprise buyers who just got a "coming soon" are the easiest audience for a vendor with a listed enterprise price. [[wispr-pricing]]',
                },
              ],
            },
            {
              claim: "A $12 seat now includes the team features rivals sell at a business tier.",
              body: [
                {
                  type: "p",
                  text: "Central billing, user management, shared dictionary and snippets and admin controls all sit in Pro at $15 monthly or $12 annual, and the old 3-seat minimum is gone. [[wispr-pricing]] [[postbeam]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Willow:** on a feature-by-feature comparison Willow's business tier looks expensive for the admin basics, and Wispr's looks cheap. Either those basics move down a tier, or Willow's business tier has to be sold on what Wispr makes you call sales for (SOC 2 Type II, HIPAA BAA, ZDR). [[wispr-pricing]]",
                },
              ],
            },
          ],
          style: "did",
        },
        { type: "h3", text: "What Willow should do" },
        {
          type: "findings",
          items: [
            {
              claim: "Make the free tier the headline of every comparison.",
              body: [
                {
                  type: "p",
                  text: "Wispr caps desktop at 2,000 words a week and iPhone at 1,000. Willow is unlimited. That is the cheapest differentiating line in the category and it belongs in the App Store subtitle, the comparison page hero and every Reddit reply. It also directly contradicts what Wispr's own comparison page says about Willow. [[wispr-pricing]]",
                },
              ],
            },
            {
              claim: "Publish the enterprise price they hide.",
              body: [
                {
                  type: "p",
                  text: "Freestyle has SOC 2 Type II, HIPAA BAA, SSO and ZDR at a transparent listed number, unlike Wispr's \"Contact Sales\". Wispr's enterprise infrastructure is still a hiring plan, its Enterprise tier is the only one without the Notetaker. [[wispr-pricing]] [[ashby]]",
                },
              ],
            },
            {
              claim: "Correct their comparison page, in public.",
              body: [
                {
                  type: "p",
                  text: 'The vs-Willow post says Willow\'s free tier is 2,000 words a week, lists Willow at "10+" and "50" languages on the same page, and says Wispr\'s own Android app is "coming soon" six months after it launched. A dated "what their page gets wrong" section on Willow\'s comparison page is fair game, and answer engines quote that kind of page. [[wispr-wispr-flow-vs-willow]] [[techcrunch-wispr-flow]]',
                },
              ],
            },
          ],
          style: "do",
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "What their comparison page claims" },
            {
              type: "table",
              headers: [
                { text: "Claim on wisprflow.ai" },
                { text: "Their page says" },
                { text: "What's actually true" },
                { text: "Source" },
              ],
              rows: [
                ["Willow free tier", "2,000 words a week", "Unlimited dictation on Willow's free plan", "[[willow]]"],
                [
                  "Willow languages",
                  '"10+" in one table, "50" in another',
                  "The page contradicts itself",
                  "[[wispr-wispr-flow-vs-willow]]",
                ],
                [
                  "Wispr on Android",
                  '"Coming soon"',
                  "Launched February 23, 2026, 1M+ installs",
                  "[[techcrunch-wispr-flow]] [[google-play]]",
                ],
                [
                  "Accuracy",
                  "Wispr 95%+, Willow 85 to 90%",
                  "No method published; Willow's own page claims 98%+ vs 90%+ with latency and RAM measurements",
                  "[[willow]]",
                ],
                [
                  "HIPAA",
                  'Wispr "across all plans," Willow "enterprise only"',
                  "Wispr's BAA and enforcement are Enterprise-only too",
                  "[[wispr-pricing]]",
                ],
              ],
            },
            { type: "h3", text: "Prices" },
            {
              type: "p",
              text: 'Free is $0. Pro is $15 per user monthly or $12 on annual billing. Enterprise is contact sales with volume discounts. Students and educators get 50% off, nonprofits get a discounted rate, no card to start, cancel anytime. Nothing changed from the prior capture and the Series B post doesn\'t hint at a change, but a Billing Systems engineer who works directly with the CEO is being hired for "rapid SKU deployment and pricing experimentation," so static now is not static for long. [[wispr-pricing]] [[ashby-3]]',
            },
            { type: "h3", text: "Notetaker" },
            {
              type: "p",
              text: 'Launched August 5 on Mac. It captures system audio on the device (no bot joins the call), works with Zoom, Meet, Teams, Slack huddles and browser calls, pulls speaker names from the calendar invite, reuses the dictation dictionary for names, and exposes notes to Claude, ChatGPT and custom agents over MCP. Processing happens on Wispr\'s servers. English only at launch; Windows "on the way," iPhone and Android "on the roadmap." TechCrunch spotted the launch early through updated terms of service, and the privacy policy now has sections on meeting data. [[wispr-notetaker]] [[craftnote]] [[techcrunch-wispr-flow-is]]',
            },
            { type: "h3", text: "What else shipped" },
            {
              type: "p",
              text: 'Audio playback for the last 14 days of history (v1.6.399, Aug 5). Rich-text snippets, team leaderboards and bulk invites (v1.6.288, Jul 29). A reliability post claiming 99.9% uptime and a 30% latency cut since January (Jul 9). A public status page, Cloud Sync split from Privacy Mode, desktop localization in five languages and a "model consistency rollout" (June). Scratchpad and Transforms betas, Claude Code and Codex terminal support, 24-hour local transcript auto-delete (May). Lots of retention surface, one accuracy fix, and a new model still in preview. [[wispr-whats-new]]',
            },
            { type: "h3", text: "Full feature matrix" },
            {
              type: "table",
              headers: [{ text: "Feature" }, { text: "Free" }, { text: "Pro" }, { text: "Enterprise" }],
              rows: [
                ["Price", "$0", "$15/user/mo, or $12 annual", "Contact sales"],
                ["Word limit", "2,000/wk desktop; 1,000/wk iPhone; unlimited Android", "Unlimited", "Unlimited"],
                ["Advanced AI models, early access", "No", "Yes", "Yes"],
                ["Notetaker (Mac)", "Yes, weekly meeting limit", "Yes, higher limits, longer retention", "Coming soon"],
                ["Speaker ID, ask-anything, MCP", "Yes", "Yes", "Coming soon"],
                ["Central billing, user management", "No", "Yes", "Yes"],
                ["Shared dictionary and snippets", "No", "Yes", "Yes"],
                ["Usage dashboards", "No", "Basic (admin only)", "Advanced"],
                ["Admin controls", "No", "Yes", "Yes"],
                ["Free IT admin seats", "No", "No", "Yes"],
                ["Support", "Standard", "Prioritized", "Dedicated"],
                ["HIPAA-ready", "Yes", "Yes", "Enforced; BAA available"],
                ["Opt out of model training", "Yes", "Yes", "Enforced for the team"],
                ["SOC 2 Type II, ISO 27001", "No", "No", "Yes"],
                ["SSO/SAML, SCIM, audit logs, MDM", "No", "No", "Yes"],
                ["MSA and DPA", "No", "No", "Yes"],
              ],
            },
            {
              type: "note",
              text: "Captured from wisprflow.ai/pricing on Aug 21, 2026. A few Pro cells are shown as icons on the page and inferred from the plan cards and FAQ. [[wispr-pricing]]",
            },
          ],
        },
      ],
    },
    {
      id: "search-and-app-stores",
      title: "Search and app stores",
      blocks: [
        {
          type: "fig",
          panels: [
            {
              cap: "Google searches Wispr shows up in without paying",
              sub: "Distinct search phrases ranking organically. Semrush, global, 2026",
              chart: {
                kind: "columns",
                rows: [
                  ["Feb", 35961],
                  ["May", 19382],
                  ["Jun", 5248],
                  ["Aug", 3542],
                ],
                aria: "Semrush global organic keywords for wisprflow.ai, Feb to Aug 2026",
                fmt: "num",
                label: [0, 3],
              },
            },
            {
              cap: "Estimated US Google Ads budget",
              sub: "SpyFu, USD per month, known months only",
              chart: {
                kind: "columns",
                rows: [
                  ["Oct 25", 0],
                  ["Nov", 6600],
                  ["Dec", 196000],
                  ["Apr 26", 294000],
                  ["May", 386000],
                  ["Jun", 446000],
                  ["Jul", 446000],
                ],
                aria: "SpyFu estimated US Google Ads budget per month",
                fmt: "usd",
                label: [2, 6],
              },
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          items: [
            {
              claim: "Wispr stopped showing up in free Google results at the same time it started buying ads.",
              body: [
                {
                  type: "p",
                  text: 'Between February and August, the number of everyday searches Wispr shows up in for free (searches that describe the product, like "best dictation app", rather than its own name) fell by roughly 90%. Over the same months, its estimated Google Ads spending went from $0 to $446K a month, stepping up right after each new round of funding. The order matters: Wispr didn\'t lose its free Google visibility and then start buying ads to compensate. It started buying ads and let the free visibility go. [[semrush]] [[spyfu]]',
                },
                {
                  type: "why",
                  text: '**Why it matters for Willow:** the searches that describe the product ("best dictation app", "dictation app for mac", "voice to text app", and every "alternative" search) are won today by review roundups and small competitors, not by Wispr. Willow already has more comparison pages and content better aimed at those searches, so that free Google real estate is up for grabs. [[semrush]]',
                },
              ],
            },
            {
              claim: "Wispr's search ads chase people looking for other apps, not people looking for dictation.",
              body: [
                {
                  type: "p",
                  text: "Wispr's top paid search terms are the names of other products: Google Docs, Slack, Notion, ChatGPT. The bet is to catch people searching for the apps they'd dictate into and pitch Flow to them there. The tool it shares the most ad keywords with is Otter, a meeting-transcription app, not a dictation one. And its most-shown ad is headlined \"Transcribe Audio to Text\", meaning upload a recording and get a transcript back. Flow doesn't actually do that (it only types out what you say live). Wispr's own affiliate rules forbid partners from claiming the product does this. [[spyfu]] [[dub]]",
                },
                {
                  type: "why",
                  text: '**Why it matters for Willow:** because Wispr\'s ads chase other apps\' names, its $446K a month isn\'t driving up the price of the searches Willow actually bids on, like "speech to text" and "voice to text". Those stay cheap. Cheaper still are the searches Wispr ignores completely: "wispr flow alternative", the vs comparisons, medical, legal, privacy and offline. That is where Willow\'s ad dollars go furthest. [[spyfu]]',
                },
              ],
            },
          ],
          style: "did",
        },
        {
          type: "table",
          headers: [
            { text: "Wispr vs Willow, by the numbers" },
            { text: "Wispr Flow", n: true },
            { text: "Willow", n: true },
            { text: "Source" },
          ],
          rows: [
            ["Monthly site visits", "4.4M", "179K", "[[similarweb]]"],
            ["Share of site visits that come from free Google results", "30%", "29%", "[[similarweb]]"],
            ["Branded share of US organic visits", "97%", "n/a", "[[semrush]]"],
            ["Paid keywords (US)", "21,582", "1,615", "[[spyfu]]"],
            ["Est. monthly Google Ads (US)", "$446K", "$10K to 39K", "[[spyfu]]"],
            ["Share of search clicks that are paid", "98%", "55%", "[[spyfu]]"],
            ["Referring domains", "8,477", "1,602", "[[semrush]]"],
            ["App Store ratings (US)", "14,030 at 4.8", "995 at 4.6", "[[app-store]]"],
            ["AI-cited pages", "693", "471", "[[semrush]]"],
            ["Comparison and alternative pages on site", "13", "14", "[[wispr-sitemap-xml]] [[willow-sitemap-xml]]"],
          ],
        },
        { type: "h3", text: "What Willow should do" },
        {
          type: "findings",
          items: [
            {
              claim: 'Be the answer when someone Googles "wispr flow alternative".',
              body: [
                {
                  type: "p",
                  text: 'Roughly 700 people a month Google some version of "wispr flow alternative", and these searches are easy to win: the pages ranking today belong to small competitors like Voibe and Dictation Daddy, and Wispr itself can never credibly show up for its own alternatives. The play is one main alternatives page, a small page for each variant people type (windows, android, ios, linux, free, open source, local), and head-to-head comparison pages ("superwhisper vs wispr flow" alone gets 650 searches a month). Everyone typing these has already decided to leave Wispr. The only question is whose page they land on. [[semrush]] [[google]]',
                },
              ],
            },
            {
              claim: "Take medical and legal before they notice.",
              body: [
                {
                  type: "p",
                  text: 'Doctors and lawyers are the best-paying customers in the category, and nobody big is competing for them. "Medical dictation app" gets 880 searches a month, and advertisers pay up to $17 per click on related terms, a sign of how valuable these buyers are. Wispr has no medical page at all. Willow already has /healthcare. Add a HIPAA FAQ, a signable privacy agreement (BAA), and a comparison page against Dragon Medical, the incumbent doctors already know, then repeat the same for /lawyers. These buyers pay more per seat and care most about exactly the privacy story Wispr is losing. [[semrush]]',
                },
              ],
            },
            {
              claim: "Tell the App Store what the app is, then close the ratings gap.",
              body: [
                {
                  type: "p",
                  text: 'When someone searches the App Store for "voice to text", "speech to text" or "dictation app", Wispr shows up near the top and Willow doesn\'t appear in the first 200 results. The App Store ranks apps largely on the words in their title, subtitle and keyword field, so putting those three phrases there is the cheapest ranking move available. After that, the fight is review volume: Wispr has 14,030 ratings to Willow\'s 995, and the app with more ratings wins every search they both appear in. Ask for a rating right after a long successful dictation, and give a free month for referrals. [[app-store]]',
                },
              ],
            },
          ],
          style: "do",
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Traffic and authority" },
            {
              type: "p",
              text: 'Wispr\'s site is roughly 15 to 25 times the size of any direct competitor, yet its organic-search share of traffic (30%) is no better than Willow\'s (29%) and well below Superwhisper\'s (48%). Direct and paid fill the gap. Its 8,477 referring domains are mostly press and directories ("wispr flow" anchors from 3,333 domains, "visit website" from 293 directory-style domains) plus two sitewide sponsor placements worth about 10,400 links from two domains. Ahrefs puts the domain rating at 77. [[similarweb]] [[semrush]] [[ahrefs]]',
            },
            {
              type: "fig",
              panels: [
                {
                  cap: "Monthly website visits",
                  sub: "Similarweb, latest month",
                  chart: {
                    kind: "rows",
                    rows: [
                      ["wisprflow.ai", 4400000],
                      ["superwhisper.com", 284700, "other"],
                      ["willowvoice.com", 179000, "us"],
                      ["aquavoice.com", 173500, "other"],
                      ["monologue.to", 46200, "other"],
                    ],
                    aria: "Monthly website visits by domain",
                    fmt: "k",
                    labelAll: true,
                  },
                  legend: [
                    { series: "primary", label: "Wispr Flow" },
                    { series: "us", label: "Willow" },
                    { series: "other", label: "Others" },
                  ],
                },
                {
                  cap: "Paid keywords, US",
                  sub: "SpyFu, Aug 21",
                  chart: {
                    kind: "rows",
                    rows: [
                      ["wisprflow.ai", 21582],
                      ["willowvoice.com", 1615, "us"],
                      ["superwhisper.com", 790, "other"],
                      ["aquavoice.com", 445, "other"],
                    ],
                    aria: "Paid keywords by domain",
                    fmt: "num",
                    labelAll: true,
                  },
                  legend: [
                    { series: "primary", label: "Wispr Flow" },
                    { series: "us", label: "Willow" },
                    { series: "other", label: "Others" },
                  ],
                },
              ],
            },
            { type: "h3", text: "Category terms Wispr doesn't hold" },
            {
              type: "table",
              headers: [
                { text: "Keyword (Semrush, US)" },
                { text: "Searches/mo", n: true },
                { text: "CPC", n: true },
                { text: "Difficulty", n: true },
                { text: "Who ranks today" },
              ],
              rows: [
                ["dictation app", "1,300", "$2.53", "50", "Wispr #1 (homepage), its only category win"],
                ["best dictation app", "390", "$2.57", "46", "Zapier, Product Hunt, Voibe roundups"],
                ["medical dictation app", "880", "$9.70", "20", "Specialist vendors, no dictation startup"],
                ["best medical dictation app", "320", "$16.99", "19", "Specialist vendors"],
                [
                  "voice to text app / software",
                  "2,900 / 2,400",
                  "$2.14",
                  "45",
                  "Play Store apps, voicetonotes.ai, Voicy",
                ],
                [
                  "wispr flow alternative (all variants)",
                  "~700",
                  "$3.22 to 3.94",
                  "8 to 15",
                  "Voibe, Saner, Dictation Daddy, Willow",
                ],
                ["superwhisper vs wispr flow (both orders)", "650", "n/a", "5 to 15", "Willow, Spokenly"],
                ["is wispr flow safe", "110", "n/a", "n/a", "Voibe"],
                ["wispr flow free alternative", "110", "n/a", "8", "Competitor roundups"],
              ],
            },
            {
              type: "note",
              text: 'In SERP samples on Aug 21, wisprflow.ai didn\'t appear on page one for "best AI dictation app 2026," "dictation app for mac," "voice to text app" or "speech to text software for windows." Willow appeared for the last one. [[semrush]] [[google-best-ai-dictation-app]]',
            },
            { type: "h3", text: "App Store rankings (US, iOS, Aug 21)" },
            {
              type: "table",
              headers: [
                { text: "Keyword" },
                { text: "Wispr Flow", n: true },
                { text: "Willow", n: true },
                { text: "Superwhisper", n: true },
                { text: "Aqua Voice", n: true },
              ],
              rows: [
                ["voice keyboard", "1", "49", "122", "26"],
                ["voice typing", "2", "44", "57", ">200"],
                ["ai dictation", "2", "6", "4", "52"],
                ["dictation", "4", "9", "60", "78"],
                ["dictation app", "5", ">200", "54", "129"],
                ["voice to text", "6", ">200", ">200", ">200"],
                ["speech to text", "71", ">200", ">200", ">200"],
                ["transcription", "171", ">200", ">200", ">200"],
              ],
            },
            {
              type: "p",
              text: 'Wispr\'s rank comes from its title ("AI Voice Keyboard") and subtitle ("Voice dictation"). It\'s weak on transcription vocabulary, where Otter (74K ratings) and Speechify (516K) live. Two copycats squat the misspelling: "Whisper Flow AI Voice Keyboard" by Butterfly AI ranks #7 for "wispr flow" on iOS, and "Flow Wispr" by AppxLabs squats the reversed name on Google Play. Google Play wasn\'t returned by the rank tracker, so this is iOS only. [[app-store]] [[google-play-details]]',
            },
            {
              type: "fig",
              panels: [
                {
                  cap: "App Store ratings count (US)",
                  sub: "Apple App Store, Aug 21; average rating in brackets",
                  chart: {
                    kind: "rows",
                    rows: [
                      ["Wispr Flow (4.8)", 14030],
                      ["Willow (4.6)", 995, "us"],
                      ["Superwhisper (4.4)", 815, "other"],
                      ["Aqua Voice (4.3)", 64, "other"],
                    ],
                    aria: "App Store ratings count by app",
                    fmt: "num",
                    labelAll: true,
                  },
                  legend: [
                    { series: "primary", label: "Wispr Flow" },
                    { series: "us", label: "Willow" },
                    { series: "other", label: "Others" },
                  ],
                },
              ],
            },
            { type: "h3", text: "AI search" },
            {
              type: "p",
              text: "When ChatGPT looks Wispr up, it finds a 2.7-star Trustpilot page. Ahrefs tracks 44 AI citations for the brand across six months; ChatGPT cited it twice, Perplexity once. The cited domains are YouTube (6, one video cited 4 times), the app stores (5 each), Trustpilot (3, rated 2.7 out of 5), eesel.ai's review and pricing posts (3 each) and Voibe's pricing post (3); wisprflow.ai itself is 11 of the 44. Wispr's AI visibility score is 17 against a benchmark of 33. Willow has 471 AI-cited pages off only 100 brand mentions, so its long tail of \"best X for Y\" posts is doing citation work even without the brand. Product Hunt's AI dictation category gives Wispr the \"People's Champ\" badge and Willow the \"Everyday Communication\" award, the kind of third-party language answer engines reuse. Zapier's roundup, updated December 2025, lists Wispr at #4 and doesn't list Willow at all. [[ahrefs]] [[trustpilot]] [[semrush]] [[product-hunt]] [[zapier]]",
            },
            {
              type: "fig",
              panels: [
                {
                  cap: "AI citations of Wispr Flow, by engine",
                  sub: "Ahrefs Brand Radar, Feb to Aug 2026 (plus 19 keyword-level Google AI Mode hits)",
                  chart: {
                    kind: "rows",
                    rows: [
                      ["Copilot", 10],
                      ["Grok", 4],
                      ["Google AI Mode", 3],
                      ["AI Overviews", 3],
                      ["ChatGPT", 2],
                      ["Gemini", 2],
                      ["Perplexity", 1],
                    ],
                    aria: "AI citations by engine",
                    fmt: "num",
                    labelAll: true,
                  },
                },
              ],
            },
            {
              type: "table",
              headers: [
                { text: "Signal" },
                { text: "Wispr Flow", n: true },
                { text: "Superwhisper", n: true },
                { text: "Willow", n: true },
                { text: "Aqua Voice", n: true },
              ],
              rows: [
                ["Semrush AI visibility score (benchmark)", "17 (33)", "16 (33)", "14 (22)", "15 (37)"],
                ["Semrush AI mentions", "1,283", "420", "100", "27"],
                ["Semrush AI-cited pages", "693", "142", "471", "28"],
              ],
            },
            { type: "h3", text: "The brand leaks" },
            {
              type: "p",
              text: '"whisper flow," the misspelling, sends about 24K visits a month to Wispr and is squatted by copycat apps in both stores. At least eight third-party advertisers run Google ads pointing at wisprflow.ai ("Digital Funda" since October 2025, "Cao Cự Quốc Cường" at 15 to 20K impressions, "GYMAPEX LLC," a new one on Aug 20). Wispr\'s affiliate terms (25% recurring, 60-day cookie) prohibit bidding on the brand, so these are either unpoliced affiliates or arbitrageurs. Either way the auction on their own name is crowded, and "wispr flow" itself costs $3.07 to 3.82 a click. [[ahrefs]] [[google-ads-transparency]] [[dub]]',
            },
            { type: "h3", text: "The narrative the market uses against them" },
            {
              type: "p",
              text: 'Search demand shows what people worry about: "is wispr flow safe" (110 a month), "wispr flow privacy" (50), "wispr flow offline mode" (30), "wispr flow open source" (40), "wispr flow not working" (40), "wispr flow free alternative" (110). Competitor content has organized the incidents into a timeline: active-window screenshot uploads (2025), the March 2026 Delve audit problem that tainted earlier SOC 2 and ISO certificates, an April forensic write-up describing a system-wide keyboard event tap, multi-day outages in May and June, and the August 10 LinkedIn post publishing word-frequency data from user dictations. Wikipedia notes the company confirmed the app "can read the device user\'s keystrokes." [[semrush]] [[voibe]] [[wikipedia]]',
            },
            {
              type: "note",
              text: "The incident timeline is competitor-authored, mostly by Voibe. Verify the specifics before repeating any of it in marketing.",
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
              cap: "Active Meta ads by launch date",
              sub: "400 active on Aug 23, 4:30 PM PT",
              chart: {
                kind: "rows",
                rows: [
                  ["Aug 21", 166],
                  ["Aug 12", 152],
                  ["Aug 14", 27],
                  ["Aug 22", 23],
                  ["Aug 13", 11],
                  ["Aug 18", 9],
                  ["Jul 31 to Aug 20, other", 12],
                ],
                fmt: "num",
                labelAll: true,
                aria: "Active Meta ads by launch date, Aug 23",
              },
            },
            {
              cap: "X posts about Wispr Flow, by sentiment",
              sub: "120-post sample, Aug 20 to 21, hand tally",
              chart: {
                kind: "share",
                rows: [
                  ["positive", 30, "pos"],
                  ["complaints", 27, "neg"],
                  ["news, neutral", 43, "neu"],
                ],
                aria: "Sentiment split of X posts about Wispr Flow",
              },
              legend: [
                { series: "pos", label: "Positive" },
                { series: "neg", label: "Complaints, switching" },
                { series: "neu", label: "News, neutral" },
              ],
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          items: [
            {
              claim:
                "Every Wispr ad running today is less than a month old, most are influencer videos, and they sell coding, not dictation.",
              body: [
                {
                  type: "p",
                  text: "All 400 of Wispr's active Facebook and Instagram ads launched within the last four weeks, and half launched in the last seven days. Nothing has run long enough to prove it works yet, so this week's real signal is what Wispr chose to make more copies of: the most-duplicated ads are demos of coding by voice in Cursor, not everyday dictation. Almost none of the ads mention accuracy. Roughly 70% of the library is casual influencer-made video that Wispr licenses through a platform called Trybe, rather than ads the company produced itself. Most of them point to the homepage. [[meta-ad-library]]",
                },
                {
                  type: "fig",
                  panels: [
                    {
                      cap: "What the ads sell",
                      sub: "Active ads mentioning each theme, Aug 23",
                      chart: {
                        kind: "rows",
                        rows: [
                          ["Claude, Cursor, ChatGPT, prompts", 79],
                          ["Free", 45],
                          ["Notetaker", 43],
                          ["Speed, 4x faster", 36],
                          ["Hands, wrists, RSI", 14],
                          ["Accuracy", 4],
                        ],
                        fmt: "num",
                        labelAll: true,
                        aria: "Themes mentioned in Wispr Flow's active Meta ads",
                      },
                    },
                    {
                      cap: "Where the ads land",
                      sub: "Landing path, 400 active ads",
                      chart: {
                        kind: "rows",
                        rows: [
                          ["/ (homepage)", 316],
                          ["/notetaker", 55],
                          ["/india", 15],
                          ["/developers", 8],
                          ["/meta", 5],
                        ],
                        fmt: "num",
                        labelAll: true,
                        aria: "Landing pages of Wispr Flow's active Meta ads",
                      },
                    },
                  ],
                },
                { type: "h3", text: "Creative watch list" },
                {
                  type: "note",
                  text: "The longest-running and most-copied ads. Companies keep the ads that make money and kill the rest, so whatever is still running in two weeks is what actually works. This table is re-checked every report.",
                },
                {
                  type: "table",
                  headers: [
                    { text: "Creative" },
                    { text: "Angle" },
                    { text: "Launched" },
                    { text: "Days live", n: true },
                    { text: "Variants", n: true },
                    { text: "Lands on" },
                  ],
                  rows: [
                    [
                      '"Same job, half the effort"',
                      "Influencer video, coworker done by lunch",
                      "Jul 31",
                      "23",
                      "1",
                      "/",
                    ],
                    ['"Talk to AI. 10x the answers."', "Influencer video, AI prompts", "Jul 31", "23", "1", "/"],
                    ['"Catch ideas before they go"', "Influencer video, ideas at the gym", "Jul 31", "23", "1", "/"],
                    ['"Typed scripts sound typed"', "Influencer video, creators", "Jul 31", "23", "1", "/"],
                    [
                      '"The S-tier way to write"',
                      "ranks every typing method",
                      "Aug 1, relaunched Aug 12",
                      "22",
                      "2",
                      "/",
                    ],
                    ["\"Writer's block isn't real\"", "Influencer video, talk it out", "Aug 1", "22", "1", "/"],
                    ['"Code with one finger"', "Cursor demo", "Aug 12", "11", "4", "/"],
                    ['"Stop clicking files"', "Cursor demo", "Aug 12", "11", "4", "/"],
                    ['"Bad prompts = bad results"', "ChatGPT, static image", "Aug 13", "10", "3", "/"],
                    [
                      '"We built a better dictation app"',
                      'accuracy, "2x more accurate than Siri"',
                      "Aug 12",
                      "11",
                      "2",
                      "/",
                    ],
                    ['"Ask It About Yesterday"', "Notetaker", "Aug 11", "12", "1", "/notetaker"],
                  ],
                },
                {
                  type: "why",
                  text: '**Why it matters for Willow:** Wispr is spending to be known as "the voice tool for AI coding" and has left accuracy, the thing its users complain about most, out of its own ads entirely. Willow can run the accuracy message Wispr won\'t, hire the same kind of influencers through the same platform, and watch this list to learn which ads work without paying for the lesson. [[meta-ad-library]]',
                },
              ],
            },
            {
              claim: "Wispr's TikTok audience belongs to influencers, not to Wispr.",
              body: [
                {
                  type: "p",
                  text: "@wisprflow, the official account, has under 1,000 followers and hasn't posted since February. All of Wispr's TikTok reach comes from influencers instead: videos mentioning Wispr since late July have been played roughly 292K times, led by big review accounts and influencers earning a commission on signups, and the biggest Wispr video of the year is a paid promotion pitching it for coding with Claude. TikTok's own related searches show shoppers asking about price and pros and cons. [[tiktok-wisprflow]] [[tiktok-search]]",
                },
                {
                  type: "table",
                  headers: [
                    { text: "Date", w: "8%", nw: true },
                    { text: "Creator" },
                    { text: "Followers", n: true, w: "11%" },
                    { text: "Plays", n: true, w: "9%" },
                    { text: "What it is" },
                  ],
                  rows: [
                    [
                      "Aug 8",
                      "[talha_reviews](https://www.tiktok.com/@talha_reviews/video/7671594087279054098)",
                      "1.6M",
                      "198K",
                      '"AI prompt master app", #wisprflow',
                    ],
                    [
                      "Aug 22",
                      "[victorcrespovaillo](https://www.tiktok.com/@victorcrespovaillo/video/7676889999148584214)",
                      "367K",
                      "45.5K",
                      "Best AI tools of 2026 comparison (Spanish)",
                    ],
                    [
                      "Aug 13",
                      "[mytechceo](https://www.tiktok.com/@mytechceo/video/7673592881818406174)",
                      "117K",
                      "37.8K",
                      '"Get one month off Wispr Flow with link in bio", affiliate',
                    ],
                    [
                      "Aug 21",
                      "[.smartaihub](https://www.tiktok.com/@.smartaihub/video/7676533609842494742)",
                      "14",
                      "1.9K",
                      '"Stop typing. Just talk.", AI tools account',
                    ],
                    [
                      "Aug 17",
                      "[tayontech](https://www.tiktok.com/@tayontech/video/7675064997591944461)",
                      "96K",
                      "1.2K",
                      '"@Wisprflow is goated"',
                    ],
                    [
                      "Aug 17",
                      "[ty.farrago](https://www.tiktok.com/@ty.farrago/video/7674799234335493394)",
                      "34K",
                      "1.0K",
                      "Voice prompting across Claude and Codex",
                    ],
                    [
                      "Aug 13",
                      "[sam_oneyouknow](https://www.tiktok.com/@sam_oneyouknow/video/7673509634983955728)",
                      "87K",
                      "314",
                      "Tagged #ad",
                    ],
                    [
                      "Jun 25",
                      "[jakeabrams21](https://www.tiktok.com/@jakeabrams21/video/7655118098151771422)",
                      "40K",
                      "48.2K",
                      '"You\'re too slow #claude #claudecode", paid partnership',
                    ],
                    [
                      "May 16",
                      "[benkaluza](https://www.tiktok.com/@benkaluza/video/7640596377453546774)",
                      "507K",
                      "24.8K",
                      '"Free Wispr Flow alternatives for speech to text"',
                    ],
                  ],
                },
                {
                  type: "why",
                  text: '**Why it matters for Willow:** these influencers aren\'t loyal to Wispr, they promote whoever pays the commission. One video titled "Free Wispr Flow alternatives" (from benkaluza, 507K followers) already has 25K plays without anyone paying for it. Willow should offer the same influencers a better commission and feed the "alternatives" content TikTok viewers are already searching for. [[tiktok-search]]',
                },
              ],
            },
            {
              claim: "Wispr's own accounts went quiet the same week its customers got loud.",
              body: [
                {
                  type: "p",
                  text: "Over the two days sampled, Wispr's X account posted once (a sales pitch to someone complaining about Notion), the founder hadn't posted anything beyond a two-word reply since Aug 19, and the Instagram account hadn't posted since the funding announcement. All this while 320 ads were running and paying subscribers complained in public. A telling detail: on Wispr's own Instagram, the funding announcement got 306 likes while an influencer's video four days earlier got 5,200. [[x-wisprflow]] [[instagram]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Willow:** the online conversation about Wispr is happening without Wispr in it, and when people ask for alternatives, the answers default to free open source tools because no company shows up with a real human. A named Willow employee answering those threads with a real accuracy number is the cheapest way to win customers in this entire report. [[reddit-wispr-flow]]",
                },
              ],
            },
            {
              claim: "How the ad machine works: rent influencer videos, replace them constantly.",
              body: [
                {
                  type: "p",
                  text: 'Almost all of Wispr\'s Facebook and Instagram ads are videos made by influencers that Wispr licenses and runs as ads, rather than spots the company produced. They launch in big batches: 178 in one day on Aug 12, 51 more on Aug 21. The dominant pitch is "stop typing your AI prompts", aimed at people who use Cursor, Claude Code and Codex. Wispr\'s own growth lead has said the quiet parts out loud: the Facebook machine needs 400 to 500 fresh ads a month to keep working, commission-earning partners are their most profitable channel at 10 to 15% of new customers, and TikTok ads "haven\'t worked yet." [[meta-ad-library]] [[20vc]]',
                },
                {
                  type: "why",
                  text: '**Why it matters for Willow:** the story Wispr is paying to tell is "voice is how you talk to AI." The story it has dropped is plain dictation: email, documents, accessibility, privacy, reliability. Nobody is currently paying to own those. The machine is worth copying (influencer videos in volume, commissions for referrals). The message isn\'t: Willow should run the dictation story Wispr abandoned. [[meta-ad-library]]',
                },
              ],
            },
          ],
          style: "did",
        },
        { type: "h3", text: "What Willow should do" },
        {
          type: "findings",
          items: [
            {
              claim: "Answer the complaints Wispr isn't answering.",
              body: [
                {
                  type: "p",
                  text: 'Set up a saved search on X and Reddit for "wispr flow" plus words like worse, accuracy, alternative or switch, and have a named Willow employee answer each hit with a real accuracy number and a trial link. Right now, when people ask for alternatives, the replies default to free tools like Handy, FluidVoice, VoiceInk and OpenWhispr, not Willow. The posts to start with are listed in the full analysis below. [[reddit-wispr-flow]] [[x]]',
                },
              ],
            },
            {
              claim: "Copy the machine, not the message.",
              body: [
                {
                  type: "p",
                  text: "Wispr's growth machine is simple to describe: license influencer videos in volume, run hundreds of fresh ads a month, and pay commissions for referrals. Willow already has a referral program. Fund it and feed it influencers. But sell the message Wispr dropped: accuracy you don't have to fix, private by default, and no meeting recorder you didn't ask for. [[meta-ad-library]] [[20vc]]",
                },
              ],
            },
            {
              claim: "If the templated Reddit posts are ours, stop.",
              body: [
                {
                  type: "p",
                  text: "Five near-identical \"I researched voice tools, I'd choose Willow\" posts hit five subreddits within 100 minutes on Aug 21 from fresh accounts, each ranking Wispr third with the same copy. Mods flag that pattern, it hands Wispr a story, and it undercuts the honest reply motion above. One detailed post from a known account beats five templates. If they're not ours, find out who is using the name. [[reddit-wispr-flow-willow]]",
                },
              ],
            },
          ],
          style: "do",
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Posts worth replying to" },
            {
              type: "table",
              headers: [{ text: "Where", w: "14%" }, { text: "What was said" }, { text: "Why it matters" }, { text: "Post", w: "12%" }],
              rows: [
                [
                  "r/WisprFlow, Aug 16",
                  '"I\'ve started to use Pro, quality is getting worse." 20 upvotes, 32 comments and growing: "massive degradation in quality," "steady decline in usability, accuracy and overall satisfaction, Pro subscriber here," "I have since switched to FluidVoice."',
                  "Paying users, in Wispr's own community, naming the alternatives they moved to",
                  "[[reddit]]",
                ],
                [
                  "r/WisprFlow, Aug 18",
                  '"How does one access Canto?" 9 upvotes. Users can\'t find the new model; skepticism that a 30% baseline WER is usable. No staff answer.',
                  "The fix for the complaints above isn't reachable",
                  "[[reddit]]",
                ],
                [
                  "r/ProductivityApps, Aug 21",
                  '"Privacy-first dictation apps?" cites the LinkedIn filler-word post as proof privacy mode is off by default and compiles 11 local or open-source alternatives. 9 comments.',
                  "The privacy narrative is now a standard talking point with a ready-made shortlist Willow isn't on",
                  "[[reddit-privacy-first]]",
                ],
                [
                  "r/raycastapp, Aug 21",
                  'Raycast V2 reviewer hoped to "ditch Wispr Flow" but the new dictation lacks "hold and release to dictate like in Wispr Flow."',
                  "Users are actively shopping for a replacement and naming the feature that would win them",
                  "[[reddit-new]]",
                ],
                [
                  "r/overemployed, Aug 20",
                  "Asks for a browser-based Wispr alternative for locked-down work machines.",
                  "A segment that can't install Wispr at all",
                  "[[reddit-wispr]]",
                ],
                [
                  "X, Aug 20 to 21",
                  '"My @WisprFlow seems way worse now than it was 6 months ago. Spelling is off, words are wrong. What happened?"',
                  "Direct complaint at the brand, unanswered",
                  "[[x-wispr-flow-worse]]",
                ],
                [
                  "X, Aug 20 to 21",
                  '".@WisprFlow poor quality transcriptions lately it seems. This has been your moat!"',
                  "A loyal user saying the moat is slipping",
                  "[[x-wisprflow-quality]]",
                ],
                [
                  "X, Aug 20 to 21",
                  '"What\'s best alternative to @WisprFlow? finding myself have to recorrect myself on every input." 5 replies; Aqua Voice\'s account replied "sup."',
                  "A competitor is already answering these",
                  "[[x-alternative-to-wisprflow]]",
                ],
                [
                  "X, Aug 20 to 21",
                  '"What\'s the best free Wispr Flow alternative that works on iOS and Mac?" 10 replies, 13 likes.',
                  "Highest-engagement alternative request in the sample",
                  "[[x-wispr-flow-alternative]]",
                ],
                [
                  "X, Aug 20 to 21",
                  '"Wispr Flow activating meeting notes features without ANY opt-in, automatically. Invasive and stupid. Will not renew."',
                  "Annual subscriber lost over the Notetaker's consent model",
                  "[[x-wispr-flow-notetaker]]",
                ],
                [
                  "X, Aug 20 to 21",
                  "\"Has eaten the same 5 min brain dump 3 times. 2 more days, if it's not better it's getting uninstalled.\"",
                  "A churn countdown, in public",
                  "[[x-wispr-flow-uninstall]]",
                ],
                [
                  "X, Aug 20 to 21",
                  '"I\'ve been seeing a lot of sponsored ads for Wispr Flow lately. Is it actually that good, or is it just overhyped?"',
                  "Ad fatigue is visible to users; an honest comparison would land",
                  "[[x-wispr-flow-overhyped]]",
                ],
              ],
            },
            {
              type: "note",
              text: "Post links point to a live search that surfaces each post rather than to a permalink. [[x]]",
            },
            { type: "h3", text: "What people said on X (120-post sample, Aug 20 to 21)" },
            {
              type: "p",
              text: 'Sentiment split roughly a third positive, a third complaints or switching, and the rest neutral news. The complaints cluster on core accuracy, the iOS keyboard, and the Notetaker, with a long list of alternatives getting named. "I vibe-coded Wispr Flow in a day" is now a genre of post, but real loyalty posts exist too, from users who say the open source versions just don\'t work as well. The week also brought earned media: two ZDNET pieces, a "Lenny 100" spot, and an ex-growth-lead podcast tease. [[x]]',
            },
            { type: "h3", text: "Paid footprint, Aug 21" },
            {
              type: "table",
              headers: [{ text: "Channel", w: "20%" }, { text: "What's running" }, { text: "Since", w: "10%", nw: true }, { text: "Source", w: "12%" }],
              rows: [
                [
                  "Meta (FB, IG, Messenger, Threads)",
                  "320 active ads, nearly all of them influencer-made videos licensed through Trybe. 178 launched in one batch on Aug 12, 51 more on Aug 21 (25 of those for the Notetaker)",
                  "Oct 2025",
                  "[[meta-ad-library]]",
                ],
                [
                  "Google Search",
                  'Text ads running continuously for 161 days, with a new wave Aug 6 to 8 for the Notetaker, headlined "Transcribe Audio to Text"',
                  "Mar 12, 2026",
                  "[[google-ads-transparency]] [[spyfu]]",
                ],
                [
                  "YouTube",
                  "About 50 video ads launched in one batch. 60 to 70% of Google spending",
                  "May 14, 2026",
                  "[[google-ads-transparency]] [[postbeam]]",
                ],
                [
                  "TikTok",
                  "No ads under Wispr's own name in TikTok's ad library. It advertises through influencers' accounts instead. TikTok discover pages for \"wispr flow ad girl\" exist",
                  "n/a",
                  "[[tiktok]]",
                ],
                [
                  "Affiliates",
                  "Partners earn 25% of subscription revenue for each customer they refer. Brings in 10 to 15% of new customers at the best return of any channel",
                  "2025",
                  "[[dub]] [[20vc]]",
                ],
                [
                  "Street advertising",
                  "100 branded auto-rickshaws in Bengaluru, still generating organic posts",
                  "May 2026",
                  "[[campaign-india]]",
                ],
                [
                  "Promos",
                  "CRED 10 months free (India), 90-day .edu trial, Cursor hackathon credits, Oasis ring bundle. The CRED code is being resold on Reddit for ₹925 to 1,600 and redemption failures are public support complaints",
                  "Aug 2026",
                  "[[reddit-wispr-flow-cred]] [[techcrunch]]",
                ],
              ],
            },
            {
              type: "fig",
              panels: [
                {
                  cap: "Active Meta ads by format",
                  sub: "Meta Ad Library, Aug 21",
                  chart: {
                    kind: "rows",
                    rows: [
                      ["Video", 266],
                      ["Dynamic creative", 51],
                      ["Static image", 3],
                    ],
                    aria: "Active Meta ads by format",
                    fmt: "num",
                    labelAll: true,
                  },
                },
              ],
            },
            {
              type: "p",
              text: "Actual ad spending is not public. Meta only discloses dollar figures for political ads, and Google publishes the ads themselves, not the budgets behind them. The mid-six-figure Meta estimate and SpyFu's $446K Google figure are educated guesses, not measurements. On the 20VC podcast, Wispr's growth lead described a $100K a month Facebook budget running 400 to 500 new ads, so the ballpark is at least plausible. A paid tracking tool like Pathmatics or Adbeat is the only way to get a firmer number. [[meta-ad-library]] [[20vc]] [[spyfu]]",
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
              cap: "Advertised salary ranges by role",
              sub: "USD thousands. 23 of 26 open roles publish a range, and all include stock",
              chart: {
                kind: "rows",
                rows: [
                  ["Head of Eng, Enterprise", 320, 400],
                  ["ML Engineer", 250, 400],
                  ["ML Scientist", 250, 400],
                  ["Head of Talent", 250, 400],
                  ["Staff Platform Eng", 270, 350],
                  ["Design Engineer", 220, 350],
                  ["Design Engineer, Mobile", 220, 350],
                  ["Platform Eng, Billing", 220, 350],
                  ["Platform Eng, Security", 220, 350],
                  ["Head of Finance", 200, 350],
                  ["Account Executive", 250, 350],
                  ["Head of Growth, B2C", 280, 340],
                  ["SWE, Product", 180, 325],
                  ["SWE, Android", 180, 325],
                  ["SWE, Labs", 180, 300],
                  ["Platform Eng, Infra", 220, 300],
                  ["Product Lead", 150, 280],
                  ["Head of PR", 200, 250],
                  ["Product Designer", 160, 250],
                  ["B2B Marketing Lead", 180, 220],
                  ["Sr Designer, Brand", 170, 190],
                  ["Paid Search Manager", 140, 160],
                  ["Technical Support Eng", 60, 90],
                ],
                aria: "Base salary bands by role, USD thousands",
                fmt: "k$",
                label: [0, 22],
                axis: true,
              },
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          items: [
            {
              claim: "Zero customer success, one salesperson, six marketers.",
              body: [
                {
                  type: "p",
                  text: "Wispr has closed every job for taking care of existing customers (customer success, customer engagement, and both account manager levels). It has one open sales job. Meanwhile, marketing is the biggest group of openings on the board, led by a Head of Growth paying $280K to 340K who would run advertising across Google, the app stores and social media, plus a dedicated ads manager whose job description calls out driving Android downloads. [[ashby]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Willow:** Wispr is betting that cheap $12 subscriptions on employee expense reports will spread through companies on their own, with nobody assigned to look after those accounts. It also means Wispr's ad spending will jump again the day that growth hire starts, especially on App Store ads. Willow should lock in its App Store ranking and ratings before then. [[ashby-4]]",
                },
              ],
            },
            {
              claim: "The two highest-paid roles on the board have been unfilled for a year.",
              body: [
                {
                  type: "p",
                  text: "The two AI research jobs, paying $250K to 400K, have been posted since August 2025 without being filled. These are the people who would actually improve transcription accuracy: the job description asks for someone who can make the speech models faster and personalize them for each user. Wispr has said improving accuracy is the first thing the new $280M will fund. [[ashby-5]] [[wispr]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Willow:** the accuracy problems users are complaining about won't get fixed until these seats are filled, and a year of trying suggests candidates aren't biting. Researchers who want to build models that run on the device itself have a reason to pick Willow instead. And Willow's accuracy claims stay hard to challenge for as long as Wispr's new model, Canto, stays stuck in preview. [[ashby-5]]",
                },
              ],
            },
          ],
          style: "did",
        },
        { type: "h3", text: "What Willow should do" },
        {
          type: "findings",
          items: [
            {
              claim: "Sell enterprise readiness in the next six months.",
              body: [
                {
                  type: "p",
                  text: "The team Wispr needs to serve big companies doesn't exist yet. The enterprise engineering lead, the security engineer and the billing engineer are all still open jobs. Willow already has the security certifications big companies ask for (SOC 2, HIPAA) at a published price, while Wispr makes those buyers call sales. That advantage lasts until Wispr fills the enterprise leadership job, so use it now. [[ashby]]",
                },
              ],
            },
            {
              claim: "Go after the customers Wispr has nobody to take care of.",
              body: [
                {
                  type: "p",
                  text: "Thousands of companies have a few Wispr subscriptions each, and there is nobody at Wispr whose job is to look after them. A team offer with real setup help, pitched to the IT departments at those companies, is something Wispr simply can't match right now with zero customer-care staff. [[ashby]] [[postbeam]]",
                },
              ],
            },
            {
              claim: "Win Windows, and recruit from their gaps.",
              body: [
                {
                  type: "p",
                  text: "Wispr has no engineers dedicated to Windows, its Windows testing is outsourced to a contractor team, and its new Notetaker only works on Mac. Windows users are clearly second-class citizens there, so Willow can be the best dictation app on Windows. And since Wispr's AI research jobs have sat open for a year, Willow can also recruit the researchers Wispr couldn't land. [[ashby-6]]",
                },
              ],
            },
          ],
          style: "do",
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "The board, Aug 21" },
            {
              type: "p",
              text: "26 open jobs. Roughly half are engineering and AI, a quarter are marketing and sales, and the rest are company-building roles like finance and recruiting. That matches what Wispr said the new funding is for: accuracy, its own AI models, enterprise readiness, and international growth. The job postings themselves reveal the revenue story, stating that annual revenue went from $2M to $50M in under 12 months. About 60% of staff are in San Francisco most days, and remote staff fly in a few days a month. Adding up the advertised salary midpoints, filling every open job would cost about $5.9M a year, and nothing pays above $400K. [[ashby]]",
            },
            {
              type: "fig",
              panels: [
                {
                  cap: "Open roles by division",
                  sub: "26 roles on Ashby, Aug 21",
                  chart: {
                    kind: "rows",
                    rows: [
                      ["Marketing & Growth", 6],
                      ["Software, Platform", 5],
                      ["Software, Core", 5],
                      ["AI Lab", 2],
                      ["Product & Design", 2],
                      ["General", 2],
                      ["Sales", 1],
                      ["Customer Support", 1],
                      ["Finance", 1],
                      ["QA", 1],
                    ],
                    aria: "Open roles by division",
                    fmt: "num",
                    labelAll: true,
                  },
                },
              ],
            },
            {
              type: "p",
              text: '**Building for big companies:** an enterprise engineering lead ($320K to 400K, with "unblock major Fortune 100 deals" in the job description), a senior infrastructure engineer, a billing engineer hired for "rapid SKU deployment and pricing experimentation" who works directly with the CEO, and a security engineer. Three of the four were posted on Aug 3, two weeks before the funding announcement. [[ashby-7]]',
            },
            {
              type: "p",
              text: "**Marketing and sales:** a Head of Growth, an ads manager focused on Android downloads, the first marketer aimed at business customers, a Head of PR, a brand designer, a partnerships coordinator for the influencer and celebrity program (Wispr's investors include Joe Burrow, Klay Thompson, Shaun White and Livvy Dunne), and one salesperson. No junior sales team, no customer care. [[ashby-4]] [[wispr]]",
            },
            {
              type: "p",
              text: "**Not hiring at all:** Windows or Linux engineers, data analysts, customer care, recruiters, or marketers outside the US (even though about 60% of Wispr's users are outside the US). A testing team in Bangalore (paid salary only, no stock) and support are the only jobs outside the US. [[ashby]] [[similarweb]]",
            },
            { type: "h3", text: "All 26 open roles" },
            {
              type: "table",
              headers: [
                { text: "Role" },
                { text: "Division" },
                { text: "Base band", n: true },
                { text: "Location" },
                { text: "Posted" },
              ],
              rows: [
                [
                  "[ML Engineer](https://jobs.ashbyhq.com/wispr-flow/9cf022b6-55b1-4fcc-940a-6988bd94b6d3)",
                  "AI Lab",
                  "$250K to 400K",
                  "SF",
                  "Aug 2025",
                ],
                [
                  "[ML Scientist](https://jobs.ashbyhq.com/wispr-flow/ea87a981-d2f1-4150-9572-d62af2ed34d0)",
                  "AI Lab",
                  "$250K to 400K",
                  "SF",
                  "Aug 2025",
                ],
                [
                  "[Software Engineer, Labs](https://jobs.ashbyhq.com/wispr-flow/d0e97e2d-c3a8-4f27-89e2-6fe3b8db8db5)",
                  "Software, Core",
                  "$180K to 300K",
                  "SF",
                  "May 2026, refreshed Aug 19",
                ],
                [
                  "[Design Engineer](https://jobs.ashbyhq.com/wispr-flow/921f1bda-6472-463b-8eb4-b840f69a30a5)",
                  "Software, Core",
                  "$220K to 350K",
                  "SF or remote US",
                  "Jun 2026",
                ],
                [
                  "[Design Engineer, Mobile](https://jobs.ashbyhq.com/wispr-flow/2065defc-4def-4125-8ee6-fb61793de01e)",
                  "Software, Core",
                  "$220K to 350K",
                  "SF or remote US",
                  "Aug 3, 2026",
                ],
                [
                  "[Software Engineer, Product](https://jobs.ashbyhq.com/wispr-flow/8a9f60cd-ab73-42d6-9450-94dfbe80886e)",
                  "Software, Core",
                  "$180K to 325K",
                  "SF",
                  "Aug 2025",
                ],
                [
                  "[Software Engineer, Android](https://jobs.ashbyhq.com/wispr-flow/1dc4f5fb-b01c-4728-a9bc-4c7d92cf17b9)",
                  "Software, Core",
                  "$180K to 325K",
                  "SF",
                  "Sep 2025",
                ],
                [
                  "[Head of Engineering, Enterprise](https://jobs.ashbyhq.com/wispr-flow/9606fba9-021e-4daa-8e2e-efa2cbf506b7)",
                  "Software, Platform",
                  "$320K to 400K (was EM at $250K to 375K)",
                  "SF, remote considered",
                  "Jul 2026",
                ],
                [
                  "[Staff Platform Engineer, Infrastructure](https://jobs.ashbyhq.com/wispr-flow/935df07f-6718-4c23-988e-f388fdb79760)",
                  "Software, Platform",
                  "$270K to 350K",
                  "SF or remote US",
                  "Aug 3, 2026",
                ],
                [
                  "[Platform Engineer, Billing Systems](https://jobs.ashbyhq.com/wispr-flow/4dfdbbe6-09de-470a-ae7a-ffe2072e93c5)",
                  "Software, Platform",
                  "$220K to 350K",
                  "SF or remote US",
                  "Aug 3, 2026",
                ],
                [
                  "[Platform Engineer, Product Security](https://jobs.ashbyhq.com/wispr-flow/8c6a3c2a-c893-4c48-bf54-8d290f04e9e0)",
                  "Software, Platform",
                  "$220K to 350K",
                  "SF or remote US",
                  "Aug 3, 2026",
                ],
                [
                  "[Platform Engineer, Infrastructure](https://jobs.ashbyhq.com/wispr-flow/c5df87d4-73df-467c-91ca-db9a0da64a0a)",
                  "Software, Platform",
                  "$220K to 300K",
                  "SF or remote US",
                  "Aug 2025",
                ],
                [
                  "[QA Engineer (Windows / iOS)](https://jobs.ashbyhq.com/wispr-flow/82ec0fce-c0a9-4d80-915d-9836ab27a41e)",
                  "QA",
                  "Not disclosed, no equity",
                  "Bangalore",
                  "May 2026",
                ],
                [
                  "[Product Lead](https://jobs.ashbyhq.com/wispr-flow/c9c547f6-c093-492f-8e40-3fd8066dfd04)",
                  "Product & Design",
                  "$150K to 280K",
                  "SF",
                  "May 2026",
                ],
                [
                  "[Product Designer](https://jobs.ashbyhq.com/wispr-flow/2cfc837d-a99e-4b5c-8e7e-bc14b3aad7aa)",
                  "Product & Design",
                  "$160K to 250K",
                  "SF or remote US",
                  "Jul 2026",
                ],
                [
                  "[Head of Growth, B2C](https://jobs.ashbyhq.com/wispr-flow/365a017d-49e7-41cc-9b7c-e2834b86b813)",
                  "Marketing & Growth",
                  "$280K to 340K",
                  "SF",
                  "Jul 27, 2026",
                ],
                [
                  "[Head of PR & External Communications](https://jobs.ashbyhq.com/wispr-flow/27629388-99ad-416c-b64e-aabd12e7b741)",
                  "Marketing & Growth",
                  "$200K to 250K",
                  "SF",
                  "Jul 2026",
                ],
                [
                  "[B2B Marketing Lead](https://jobs.ashbyhq.com/wispr-flow/92221cc5-5d02-4431-9633-fc07c2539790)",
                  "Marketing & Growth",
                  "$180K to 220K",
                  "SF",
                  "Apr 2026",
                ],
                [
                  "[Senior Designer, Brand & Growth](https://jobs.ashbyhq.com/wispr-flow/d565cc8e-1ba0-4d6e-8009-5e6afd8b4787)",
                  "Marketing & Growth",
                  "$170K to 190K",
                  "SF",
                  "Jul 2026",
                ],
                [
                  "[Paid Search Performance Marketing Manager](https://jobs.ashbyhq.com/wispr-flow/d5e62bef-ab04-4eab-85ad-684ec968cc3e)",
                  "Marketing & Growth",
                  "$140K to 160K",
                  "SF or NY",
                  "Feb 2026",
                ],
                [
                  "[Cultural Partnerships Coordinator (contract)](https://jobs.ashbyhq.com/wispr-flow/d5af228c-be41-4950-9ef7-2702bcf19e41)",
                  "Marketing & Growth",
                  "Not disclosed",
                  "SF",
                  "Jul 2026",
                ],
                [
                  "[Account Executive](https://jobs.ashbyhq.com/wispr-flow/54cf9313-9311-4b81-aabd-ca34a8bd9062)",
                  "Sales",
                  "$250K to 350K (likely OTE)",
                  "SF",
                  "Dec 2025, refreshed Aug 20",
                ],
                [
                  "[Technical Support Engineer](https://jobs.ashbyhq.com/wispr-flow/c45eb438-a872-4dc0-9b81-9d76560f33df)",
                  "Customer Support",
                  "$60K to 90K",
                  "SF, NY or Bangalore",
                  "Aug 2025",
                ],
                [
                  "[Head of Finance](https://jobs.ashbyhq.com/wispr-flow/70221938-a75a-41f8-b4ef-aea3cec45d1c)",
                  "Finance",
                  "$200K to 350K",
                  "SF",
                  "May 2026",
                ],
                [
                  "[Head of Talent](https://jobs.ashbyhq.com/wispr-flow/6cdebeca-ae06-4b1b-97f8-28f7f6373490)",
                  "General",
                  "$250K to 400K",
                  "SF",
                  "Jul 2026, refreshed Aug 19",
                ],
                [
                  "[Ex-Founder](https://jobs.ashbyhq.com/wispr-flow/658fb613-3dcc-4932-9927-dadbf83f95cd)",
                  "General",
                  "Not disclosed",
                  "SF",
                  "Apr 2026",
                ],
              ],
            },
            {
              type: "note",
              text: "Checked live against Ashby on Aug 21, 2026. Full-time US roles also carry equity, 100% health premiums, a 4% 401k match and 16 weeks of parental leave. [[ashby]]",
            },
            {
              type: "p",
              text: "**Closed recently:** Office Administrator, Customer Engagement Manager, Customer Success Operations Associate, Head of Ops, Computational Linguist, Technical Account Manager (two levels), Growth Generalist (India). They closed every job that serves existing customers and kept every engineering, growth and leadership job. [[ashby]]",
            },
          ],
        },
      ],
    },
    {
      id: "sources",
      title: "Sources",
      blocks: [
        {
          type: "links",
          items: [
            "Data tools, pulled Aug 21, 2026: [[semrush]] (US and global keyword, traffic and AI visibility data), [[spyfu]] (19-month organic and paid series, ad history), [[ahrefs]] (backlinks, AI citations), [[similarweb]] (traffic), [[meta-ad-library]], [[google-ads-transparency]], [[app-store]] rank tracking.",
            "Wispr's own pages: [pricing](https://wisprflow.ai/pricing), [changelog](https://wisprflow.ai/whats-new), [Series B post](https://wisprflow.ai/post/series-b), [Notetaker](https://wisprflow.ai/notetaker), [vs-Willow page](https://wisprflow.ai/post/wispr-flow-vs-willow-voice), [affiliate terms](https://partners.dub.co/flow), [job board](https://jobs.ashbyhq.com/wispr-flow).",
            "Press and teardowns: [TechCrunch on the Series B](https://techcrunch.com/2026/08/17/wispr-raises-280m-at-2b-valuation-as-it-looks-beyond-dictation/), [[the-next-web]], [TechCrunch on the Notetaker](https://techcrunch.com/2026/08/05/wispr-flow-is-preparing-to-launch-a-meeting-notetaker-updated-terms-suggest/), [Shashi.co on the accuracy complaints](https://www.shashi.co/2026/08/wispr-flow-triples-to-2-billion-as.html), [Menlo's thesis](https://menlovc.com/perspective/the-keyboard-is-dying-on-schedule-the-text-box-is-next/), [Postbeam growth teardown](https://www.postbeam.ai/blog/how-wisprflow-grows), [20VC episode summary](https://finance.biggo.com/podcast/5b45d03fc082dfec), [[campaign-india]], [Voibe on the LinkedIn post](https://www.getvoibe.com/resources/wispr-flow-linkedin-dictation-analysis/).",
            "Social, Aug 20 to 21: [r/WisprFlow](https://www.reddit.com/r/WisprFlow/new/), [Reddit search](https://www.reddit.com/search/?q=%22wispr+flow%22&sort=new&t=week), [X search](https://x.com/search?q=%22wispr%20flow%22&f=live), [@WisprFlow](https://x.com/WisprFlow), [@tankots](https://x.com/tankots), [[instagram]], [[trustpilot]].",
            'Ads and TikTok, pulled Aug 23, 2026: [[meta-ad-library]] (400 active ads for the Wispr Flow page, start dates, variants, landing URLs), [[tiktok-wisprflow|@wisprflow]] and the top 54 [[tiktok-search|TikTok video results for "wispr flow"]].',
            'Social, pulled Aug 23, 2026: [[x-wispr-latest|X, latest 300 posts]] for "wispr flow" / wisprflow (Aug 21 to 23) and 300 for "willow voice"; [[reddit-wispr-new|Reddit]] posts since Jul 20 mentioning Wispr Flow, Willow Voice, plus r/WisprFlow in full (324 posts); [[willow-meta|Willow Voice\'s Meta Ad Library page]] (0 active ads); [[willow-tiktok|@willowvoice on TikTok]].',
          ],
        },
      ],
    },
  ],
  footer:
    "Keyword, traffic and spend figures are estimates from the US database unless stated, so treat the shapes and ratios as the signal. X complaint counts are keyword-flagged rather than hand-read. Pulled Aug 21 to 23, 2026.",
  sources: {
    techcrunch: {
      label: "TechCrunch",
      href: "https://techcrunch.com/2026/08/17/wispr-raises-280m-at-2b-valuation-as-it-looks-beyond-dictation/",
      logo: "techcrunch",
    },
    spyfu: {
      label: "SpyFu",
      href: "https://www.spyfu.com/overview/domain?query=wisprflow.ai",
      logo: "spyfu",
    },
    "meta-ad-library": {
      label: "Meta Ad Library",
      href: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&view_all_page_id=110864474787474",
      logo: "meta-ad-library",
    },
    wispr: { label: "Wispr", href: "https://wisprflow.ai/post/series-b", logo: "wispr" },
    ashby: { label: "Ashby", href: "https://jobs.ashbyhq.com/wispr-flow", logo: "ashby" },
    semrush: {
      label: "Semrush",
      href: "https://www.semrush.com/website/wisprflow.ai/overview/",
      logo: "semrush",
    },
    similarweb: {
      label: "Similarweb",
      href: "https://www.similarweb.com/website/wisprflow.ai/",
      logo: "similarweb",
    },
    reddit: { label: "Reddit", href: "https://www.reddit.com/r/WisprFlow/new/", logo: "reddit" },
    x: { label: "X", href: "https://x.com/search?q=%22wispr%20flow%22&f=live", logo: "x" },
    "ashby-2": {
      label: "Ashby",
      href: "https://jobs.ashbyhq.com/wispr-flow/935df07f-6718-4c23-988e-f388fdb79760",
      logo: "ashby",
    },
    "wispr-pricing": { label: "Wispr", href: "https://wisprflow.ai/pricing", logo: "wispr" },
    postbeam: {
      label: "Postbeam",
      href: "https://www.postbeam.ai/blog/how-wisprflow-grows",
      logo: "postbeam",
    },
    "x-wispr-flow-notetaker": {
      label: "X",
      href: "https://x.com/search?q=%22wispr%20flow%22%20notetaker&f=live",
      logo: "x",
    },
    menlo: {
      label: "Menlo",
      href: "https://menlovc.com/perspective/the-keyboard-is-dying-on-schedule-the-text-box-is-next/",
      logo: "menlo",
    },
    "wispr-wispr-flow-vs-willow": {
      label: "Wispr",
      href: "https://wisprflow.ai/post/wispr-flow-vs-willow-voice",
      logo: "wispr",
    },
    "techcrunch-wispr-flow": {
      label: "TechCrunch",
      href: "https://techcrunch.com/2026/02/23/wispr-flow-launches-an-android-app-for-ai-powered-dictation",
      logo: "techcrunch",
    },
    willow: { label: "Willow", href: "https://willowvoice.com/comparison/wisprflow", logo: "willow" },
    "google-play": {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.wispr.flowapp",
      logo: "google-play",
    },
    "ashby-3": {
      label: "Ashby",
      href: "https://jobs.ashbyhq.com/wispr-flow/4dfdbbe6-09de-470a-ae7a-ffe2072e93c5",
      logo: "ashby",
    },
    "wispr-notetaker": { label: "Wispr", href: "https://wisprflow.ai/notetaker", logo: "wispr" },
    craftnote: {
      label: "Craftnote",
      href: "https://craftnote.com/blog/wispr-flow-notetaker-review-2026",
      logo: "craftnote",
    },
    "techcrunch-wispr-flow-is": {
      label: "TechCrunch",
      href: "https://techcrunch.com/2026/08/05/wispr-flow-is-preparing-to-launch-a-meeting-notetaker-updated-terms-suggest/",
      logo: "techcrunch",
    },
    "wispr-whats-new": { label: "Wispr", href: "https://wisprflow.ai/whats-new", logo: "wispr" },
    dub: { label: "Dub", href: "https://partners.dub.co/flow", logo: "dub" },
    "app-store": {
      label: "App Store",
      href: "https://apps.apple.com/us/app/wispr-flow-ai-voice-keyboard/id6497229487",
      logo: "app-store",
    },
    "wispr-sitemap-xml": { label: "Wispr", href: "https://wisprflow.ai/sitemap.xml", logo: "wispr" },
    "willow-sitemap-xml": { label: "Willow", href: "https://willowvoice.com/sitemap.xml", logo: "willow" },
    google: {
      label: "Google",
      href: "https://www.google.com/search?q=wispr+flow+alternative",
      logo: "google",
    },
    ahrefs: {
      label: "Ahrefs",
      href: "https://ahrefs.com/traffic-checker/?input=wisprflow.ai&mode=subdomains",
      logo: "ahrefs",
    },
    "google-best-ai-dictation-app": {
      label: "Google",
      href: "https://www.google.com/search?q=best+ai+dictation+app+2026",
      logo: "google",
    },
    "google-play-details": {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.flow.wispr&hl=en",
      logo: "google-play",
    },
    trustpilot: {
      label: "Trustpilot",
      href: "https://www.trustpilot.com/review/wisprflow.ai",
      logo: "trustpilot",
    },
    "product-hunt": {
      label: "Product Hunt",
      href: "https://www.producthunt.com/categories/ai-dictation-apps",
      logo: "product-hunt",
    },
    zapier: {
      label: "Zapier",
      href: "https://zapier.com/blog/best-text-dictation-software/",
      logo: "zapier",
    },
    "google-ads-transparency": {
      label: "Google Ads Transparency",
      href: "https://adstransparency.google.com/advertiser/AR16474608212234993665?region=US",
      logo: "google-ads-transparency",
    },
    voibe: {
      label: "Voibe",
      href: "https://www.getvoibe.com/resources/wispr-flow-linkedin-dictation-analysis/",
      logo: "voibe",
    },
    wikipedia: { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Wispr_Flow", logo: "wikipedia" },
    "x-wisprflow": { label: "X", href: "https://x.com/WisprFlow", logo: "x" },
    instagram: { label: "Instagram", href: "https://www.instagram.com/wisprflow/", logo: "instagram" },
    "reddit-wispr-flow": {
      label: "Reddit",
      href: "https://www.reddit.com/search/?q=%22wispr+flow%22&sort=new&t=week",
      logo: "reddit",
    },
    "20vc": { label: "20VC", href: "https://finance.biggo.com/podcast/5b45d03fc082dfec", logo: "20vc" },
    "reddit-wispr-flow-willow": {
      label: "Reddit",
      href: "https://www.reddit.com/search/?q=%22wispr+flow%22+willow&sort=new&t=week",
      logo: "reddit",
    },
    "reddit-privacy-first": {
      label: "Reddit",
      href: "https://www.reddit.com/search/?q=%22privacy-first+dictation%22&sort=new",
      logo: "reddit",
    },
    "reddit-new": { label: "Reddit", href: "https://www.reddit.com/r/raycastapp/new/", logo: "reddit" },
    "reddit-wispr": {
      label: "Reddit",
      href: "https://www.reddit.com/r/overemployed/search/?q=wispr&sort=new",
      logo: "reddit",
    },
    "x-wispr-flow-worse": { label: "X", href: "https://x.com/search?q=%22wispr%20flow%22%20worse&f=live", logo: "x" },
    "x-wisprflow-quality": { label: "X", href: "https://x.com/search?q=%40WisprFlow%20quality&f=live", logo: "x" },
    "x-alternative-to-wisprflow": {
      label: "X",
      href: "https://x.com/search?q=%22alternative%20to%20%40WisprFlow%22&f=live",
      logo: "x",
    },
    "x-wispr-flow-alternative": {
      label: "X",
      href: "https://x.com/search?q=%22wispr%20flow%20alternative%22&f=live",
      logo: "x",
    },
    "x-wispr-flow-uninstall": {
      label: "X",
      href: "https://x.com/search?q=%22wispr%20flow%22%20uninstall&f=live",
      logo: "x",
    },
    "x-wispr-flow-overhyped": {
      label: "X",
      href: "https://x.com/search?q=%22wispr%20flow%22%20overhyped&f=live",
      logo: "x",
    },
    tiktok: { label: "TikTok", href: "https://www.tiktok.com/discover/wispr-flow", logo: "tiktok" },
    "campaign-india": {
      label: "Campaign India",
      href: "https://www.campaignindia.in/article/owled-media-drives-bengaluru-first-launch-for-wispr-flow/4sax8w5mzaf125hdygv388zgmn",
      logo: "campaign-india",
    },
    "reddit-wispr-flow-cred": {
      label: "Reddit",
      href: "https://www.reddit.com/search/?q=wispr+flow+cred&sort=new",
      logo: "reddit",
    },
    "ashby-4": {
      label: "Ashby",
      href: "https://jobs.ashbyhq.com/wispr-flow/365a017d-49e7-41cc-9b7c-e2834b86b813",
      logo: "ashby",
    },
    "ashby-5": {
      label: "Ashby",
      href: "https://jobs.ashbyhq.com/wispr-flow/9cf022b6-55b1-4fcc-940a-6988bd94b6d3",
      logo: "ashby",
    },
    "ashby-6": {
      label: "Ashby",
      href: "https://jobs.ashbyhq.com/wispr-flow/82ec0fce-c0a9-4d80-915d-9836ab27a41e",
      logo: "ashby",
    },
    "ashby-7": {
      label: "Ashby",
      href: "https://jobs.ashbyhq.com/wispr-flow/9606fba9-021e-4daa-8e2e-efa2cbf506b7",
      logo: "ashby",
    },
    "the-next-web": {
      label: "The Next Web",
      href: "https://thenextweb.com/news/wispr-series-b-280m-2bn-valuation-menlo-canto",
      logo: "the-next-web",
    },
    "tiktok-wisprflow": { label: "TikTok", href: "https://www.tiktok.com/@wisprflow", logo: "tiktok" },
    "tiktok-search": {
      label: "TikTok search",
      href: "https://www.tiktok.com/search/video?q=wispr%20flow",
      logo: "tiktok",
    },
    "willow-tiktok": { label: "TikTok", href: "https://www.tiktok.com/@willowvoice", logo: "tiktok" },
    "willow-meta": {
      label: "Meta Ad Library",
      href: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&view_all_page_id=558082630720403",
      logo: "meta-ad-library",
    },
    "x-wispr-latest": {
      label: "X",
      href: "https://x.com/search?q=%22wispr%20flow%22%20OR%20wisprflow&f=live",
      logo: "x",
    },
    "reddit-wispr-new": {
      label: "Reddit",
      href: "https://www.reddit.com/search/?q=%22wispr+flow%22&sort=new",
      logo: "reddit",
    },
  },
};
