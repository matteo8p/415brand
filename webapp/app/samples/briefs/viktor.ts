import type { Brief } from "./types";

export const viktor: Brief = {
  slug: "viktor",
  title: "Viktor weekly brief: brand & competitive analysis",
  sub: "For the Adapt team, August 27, 2026",
  subject: "Viktor",
  client: "Adapt",
  intro: [
    { type: "h3", text: "Scorecard" },
    {
      type: "scorecard",
      rows: [
        {
          metric: "Monthly website visits",
          primary: "646K",
          us: "82K",
          change: "Viktor gets 8 times the visitors, but the number hasn't moved since June. Adapt's grew 21% in July. Half of Viktor's visitors type the address in; about 30% click an ad.",
        },
        {
          metric: "Share of visitors who arrive from free Google results",
          primary: "9%",
          us: "5%",
          change: "Almost nobody finds either company by searching Google. Most of Viktor's search visitors typed \"viktor\". The most common search that brings people to Adapt is \"viktor ai\".",
        },
        {
          metric: "Search terms it pays Google to show up for (US)",
          primary: "13,810",
          us: "894",
          change: "Viktor pays to show up for searches like \"chatgpt alternative\", \"cowork\" and \"slack\", not for searches about its own category.",
        },
        {
          metric: "Estimated monthly Google Ads spend (US)",
          primary: "$176K",
          us: "$903",
          change: "Up from $99K in May. A second tool (Semrush) puts July at $82K; the truth is likely in between. Neither figure includes banner ads, YouTube or paid social posts.",
        },
        {
          metric: "Different Google searches it shows up in for free (worldwide)",
          primary: "662",
          us: "530",
          change: "Both started near zero in May (Viktor 56, Adapt 142).",
        },
        {
          metric: "G2 reviews (average rating)",
          primary: "54 (4.9)",
          us: "no listing",
          change: "G2 is the main review site for business software. Viktor added 10 reviews in two weeks; 7 of the 9 written in August complain about the cost of credits in the \"dislike\" box.",
        },
        {
          metric: "Facebook and Instagram ads running right now",
          primary: "238",
          us: "0",
          change: "Every one was launched Aug 24 to 26. Viktor switches its ads off and replaces them constantly, so nothing in its library is more than three days old.",
        },
        {
          metric: "Of those ads, how many are made by creators rather than the company",
          primary: "5 of 238",
          us: "n/a",
          change: "Facebook ads are in-house. Paid creators are used on TikTok, Instagram and X instead.",
        },
        {
          metric: "TikTok followers on the company's own account",
          primary: "323",
          us: "none",
          change: "Viktor's TikTok reach comes from creators it pays, not its own account: 44 creator videos with 294K plays.",
        },
        {
          metric: "Posts about it on X per day",
          primary: "12",
          us: "under 1",
          change: "236 posts in 20 days, but 129 of them landed on Aug 20 and 21, when Viktor launched a new feature. Adapt was mentioned once.",
        },
        {
          metric: "X posts that complain, mention switching, or ask for an alternative",
          primary: "4 of 236 (2%)",
          us: "n/a",
          change: "Found by scanning posts for complaint words, Aug 6 to 26. Praise and paid promotion drown out the doubts.",
        },
        {
          metric: "Reddit posts mentioning it since Jul 20",
          primary: "0",
          us: "0",
          change: "Searched for both company names exactly. Neither company exists on Reddit.",
        },
        {
          metric: "LinkedIn followers (employees listed on LinkedIn)",
          primary: "11,507 (50)",
          us: "2,069 (19)",
          change: "Viktor added 2,900 followers and 10 employees in six weeks.",
        },
        {
          metric: "Open jobs",
          primary: "27",
          us: "1",
          change: "Viktor: 8 marketing, 5 engineering, 4 sales. Adapt: one salesperson.",
        },
      ],
    },
    { type: "h3", text: "Recommended actions for Adapt from the analysis" },
    {
      type: "moves",
      collapsed: true,
      items: [
        {
          action: "Buy the Google searches Viktor isn't buying: \"viktor alternative\", \"viktor pricing\", \"credits\" and security.",
          why: "Viktor's $176K a month goes to searches like \"chatgpt alternative\", \"cowork\" and \"slack\". It does not buy \"viktor alternative\" (a search that didn't exist before May, now 90 a month at $6 to 20 per click) or \"viktor pricing\". Those are the searches people make when they're already thinking about leaving Viktor. Adapt should bid on them.",
          evidence: "search-and-marketplaces",
        },
        {
          action: "Fix adapt.com/compare/viktor. Lead with price and spending limits.",
          why: "Adapt's page still says Viktor costs \"$50/mo\" and works \"in Slack only\". Both are now wrong: in early August Viktor doubled its cheapest plan to $100 a month, and it has since added a web app, Discord and a way for other software to plug into it. Replace the stale rows with the two things Viktor's own customers complain about (bills they can't predict, a half-finished security audit) and spending limits that Adapt now has.",
          evidence: "pricing-and-product",
        },
        {
          action: "Copy Viktor's creator machine, aimed at the technical people Viktor ignores.",
          why: "Viktor pays creators $200 to $10,000 per post depending on how many people see it, pays anyone who refers a customer 15 to 20% of what that customer spends for a year, and pays consultants who set Viktor up 20% of the client's spending. About 29% of the views on videos about Viktor come from people being paid this way. Adapt has no creator, referral or commission program at all. Y'all should spin one up.",
          evidence: "advertising-and-social-media",
        },
      ],
    },
    { type: "h3", text: "Posts worth replying to this week" },
    {
      type: "table",
      headers: [{ text: "Where", w: "18%" }, { text: "Date", w: "7%", nw: true }, { text: "Post" }, { text: "Reach", w: "13%" }],
      rows: [
        [
          "X, @dierre (1.2K followers)",
          "Jul 30",
          "[Who rips Viktor - AI employee? Curious to hear testimonies / applicable use cases. Worth or fade?](https://x.com/dierre/status/2082671414281191634)",
          "1.9K views, 9 replies",
        ],
        [
          "X, @norbertbodziony (11.4K)",
          "Aug 7",
          "[If you are looking for better and cheaper alternative to @viktor_com try @Infeld_ai](https://x.com/norbertbodziony/status/2085671141247488332)",
          "1.4K views",
        ],
        [
          "TikTok, @thepmfguy (1.5K)",
          "May 14",
          "[Viktor's default settings let the whole Slack see your Gmail and meeting notes](https://www.tiktok.com/@thepmfguy/video/7639886206251109646)",
          "855 plays",
        ],
        [
          "TikTok, @theaiconsultinglab (35.9K)",
          "Jun 16",
          "[A consultant's skeptical take on \"Victor AI and Pulsia\"](https://www.tiktok.com/@theaiconsultinglab/video/7652108959129603342)",
          "734 plays",
        ],
        [
          "G2, a reviewer at a law firm",
          "Aug 21",
          "[\"Sometimes the token usage can creep up unexpectedly\"](https://www.g2.com/products/viktor-com/reviews)",
          "5-star review, \"dislike\" box",
        ],
        [
          "G2, Vivianne C., consultant",
          "Aug 16",
          "[\"Kind of a black box on how tokens are used / spent\"](https://www.g2.com/products/viktor-com/reviews)",
          "5-star review, \"dislike\" box",
        ],
        [
          "G2, Esly C., clinic president",
          "Aug 14",
          "[\"The price tag. I wish I could afford to use it more\"](https://www.g2.com/products/viktor-com/reviews)",
          "5-star review, \"dislike\" box",
        ],
        [
          "X, @pshenianykov (259)",
          "Aug 20",
          "[Every Viktor (AI employee) ad I see is about how they raised $75m. If I were their investor I would be furious. Not only is the product meh…](https://x.com/pshenianykov/status/2090311550364225565)",
          "25 views",
        ],
        [
          "X, @asapdar (516)",
          "Aug 20",
          "[@Scobleizer @Benioff fair enough — have you tried Viktor in Slack? how do you like that?](https://x.com/asapdar/status/2090331762996269418)",
          "13 views",
        ],
        [
          "X, @ajs6888 (19.8K)",
          "Aug 22",
          "[Live in 76 seconds, then spend the rest of the time fixing bugs? (a reply to Viktor's launch, in Chinese)](https://x.com/ajs6888/status/2090953093009809845)",
          "9 views",
        ],
        [
          "Hacker News (a forum popular with programmers)",
          "Mar 2026",
          "[Reverse-engineering Viktor and making it open source](https://news.ycombinator.com/item?id=47409885)",
          "181 points, 85 comments; the code was taken down within three days",
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
              claim: "Viktor's traffic is 8x Adapt's, but most of it is bought.",
              body: [
                {
                  type: "p",
                  text: "Viktor got 646K website visits in July, Adapt 82K. But half of Viktor's visitors typed the address in and another 30% clicked an ad. Only 9% came from free Google results, and almost all of those had searched for \"viktor\" by name. Viktor's traffic hasn't grown since June. [[similarweb]] [[semrush]] [[keyword-planner]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Viktor's lead is paid-for name recognition, not a better product. Adapt is growing 21% a month on almost no ad spend. The searches that describe what both companies sell, like \"slack ai agent\", have no winner yet. Adapt can take them with a better comparison page and the right search terms. [[similarweb-adapt]] [[semrush]]",
                },
              ],
            },
            {
              claim: "Viktor spends about $176K a month on Google ads, aimed at people searching for ChatGPT, Claude and Slack.",
              body: [
                {
                  type: "p",
                  text: "Viktor's estimated Google Ads budget is $176K a month, up from $99K in May. Its biggest paid search is \"chatgpt alternative\", followed by its own name, \"cowork\" and \"slack\". Adapt spends about $900 a month, mostly on searches like \"claude cost\" that have little to do with Adapt. [[spyfu]] [[semrush]] [[google-ads-transparency]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Viktor's spending isn't touching the searches Adapt should want. \"viktor alternative\" (new since May, 90 searches a month) and \"viktor pricing\" are cheap, unclaimed, and typed by people already thinking of leaving. Adapt has the comparison page for them; it just needs to bid. Viktor is about to hire a Google Ads lead with \"$1M+/month\" experience, so move before that seat is filled. [[keyword-planner]] [[ashby]]",
                },
              ],
            },
            {
              claim: "Viktor's social media buzz is paid for: creators, commissions, and friendly accounts cheering on launch day.",
              body: [
                {
                  type: "p",
                  text: "Viktor pays creators $200 to $10,000 a post, gives 15 to 20% of a customer's spending to whoever referred them, and pays consultants 20% of what their clients spend. About 29% of views on videos about Viktor come from people paid this way. On X, its Aug 20 launch produced 129 posts in two days, mostly one-line replies between big accounts. Only 4 of 236 posts were complaints. [[tiktok-search]] [[youtube-search]] [[viktor-creators]] [[x]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Adapt has no creator or referral program at all. Viktor's creators are marketers and office managers; nobody is being paid to talk to developers, the people Adapt is built for. Copy the machine, pay in credits (nearly free for Adapt), and point it at the audience Viktor ignores. [[x-adapt]] [[youtube-adapt]]",
                },
              ],
            },
            {
              claim: "Viktor's own job ads admit most paying customers are a single person, and it's hiring marketers, not engineers, to fix that.",
              body: [
                {
                  type: "p",
                  text: "Viktor has 27 open jobs: 8 in marketing, 5 in engineering, 4 in sales and support, the rest in product, design and operations. The job descriptions say what the marketing doesn't: \"half of paying workspaces still have only one active human\" and \"one power user drives most of the usage\". None lists a salary except the New York sales job ($100K to 270K). [[ashby]] [[linkedin-jobs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** \"one AI assistant the whole company shares\" is Adapt's pitch, and Viktor is admitting that's exactly where it's weak. The people Viktor is hiring to fix it are all in Warsaw and none had started when we checked. Adapt can't out-hire Viktor, but it can sell team-wide adoption while that gap is open. [[ashby]] [[linkedin-adapt]]",
                },
              ],
            },
            {
              claim: "Viktor doubled its cheapest plan, its customers can't predict their bills, and Adapt's comparison page still shows the old price.",
              body: [
                {
                  type: "p",
                  text: "Both companies charge in \"credits\", pre-paid units the AI uses up as it works. In early August Viktor's cheapest plan went from $50 to $100 a month. On G2, 7 of the 9 reviews written in August complain about credit costs (\"a black box on how tokens are used\"). Viktor has only done the first, lighter stage of SOC 2, the security audit big companies ask for; Adapt has the full version. Adapt's comparison page still says Viktor costs \"$50/mo\" and works \"in Slack only\", both now wrong. [[viktor-pricing]] [[slack-marketplace]] [[g2]] [[adapt-compare-viktor]] [[viktor-changelog]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Adapt's best selling points (a $50 start, a clear itemized bill, spending limits per person, a completed security audit) sit behind a page with wrong facts. Anyone who checks it against Viktor's site will stop trusting it. Fix the page, then say the price out loud in ads; none of Viktor's 238 ads mentions price, credits or security. [[adapt-changelog]] [[meta-ad-library]]",
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
            { text: "Viktor" },
            { text: "Adapt" },
            { text: "Charge per user?" },
            { text: "Spending limits" },
            { text: "Security audit" },
          ],
          rows: [
            [
              "Free",
              "$0, comes with $100 of credits that never expire, no card needed",
              "$0, comes with $25 of credits, plus $100 for connecting Slack, plus up to $300 for a work email address",
              "No, on either",
              "Viktor: none. Adapt: limits per person",
              "Viktor: SOC 2 stage one. Adapt: SOC 2 full (stage two)",
            ],
            [
              "Cheapest paid plan",
              "Team, $100 a month for 40,000 credits (was $50 for 20,000 until early August); unused credits roll over; you can buy more",
              "Pro, $50 to $5,000 a month paid up front; 1 credit = 1 cent; up to 10% bonus credits",
              "No, on either",
              "Viktor: one limit for the whole workspace. Adapt: a monthly limit per person, with warnings at 75% and 90%",
              "Same as above",
            ],
            [
              "Enterprise",
              "Custom price; per-person spending limits, invoicing, European data storage, security review",
              "Custom price; a dedicated Adapt engineer, discounts for committed spending, invoicing",
              "No, on either",
              "Both",
              "Viktor: single sign-on listed on its site, but its Slack listing says \"no SAML\"; Adapt: role-based permissions, audit logs, approval rules",
            ],
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          items: [
            {
              claim: "Viktor doubled its cheapest plan quietly.",
              body: [
                {
                  type: "p",
                  text: "Reviews up to Aug 12 quote $50 for 20,000 credits; by Aug 9 it was $100 for 40,000. The price per credit didn't change, the minimum did. Customers report spending $750 to 1,000 a month, and \"$200 in two days while learning\". Viktor's only budgeting help is rough ranges; Adapt prints the price per credit and itemizes every bill. [[viktor-pricing]] [[thisandthat]] [[saascrmreview]] [[chiefmarketingdad]] [[latka]] [[adapt-pricing]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** the price doubled quietly, and the reviews written since follow the same pattern: five stars, then a complaint about cost. Nobody has called it a price increase yet. Adapt can, with a page that says \"Viktor doubled its minimum; we didn't\" and shows the spending limits. [[g2]]",
                },
              ],
            },
            {
              claim: "Both shipped plug-ins for other software in August. Adapt shipped what customers ask for: spending limits.",
              body: [
                {
                  type: "p",
                  text: "Viktor in August: Discord, a web chat, video generation, and a plug-in that lets coding tools send it work (the Aug 20 launch that lit up X). Adapt in the same window: its own coding-tool plug-in, a Slack assistant branded with the customer's name, and monthly spending limits per person with warnings at 75% and 90%. Viktor's pace slowed from daily to weekly. [[viktor-changelog]] [[adapt-changelog]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Viktor is adding places to use it (Discord, the web, other software) while its customers ask for a way to see what they're spending. Adapt built the spending meter. Lead with it everywhere, because Viktor only offers per-person limits on its most expensive plan. [[viktor-pricing]] [[adapt-changelog]]",
                },
              ],
            },
          ],
          style: "did",
        },
        { type: "h3", text: "What Adapt should do" },
        {
          type: "findings",
          items: [
            {
              claim: "Rewrite the comparison page around Viktor's three weak spots.",
              body: [
                {
                  type: "p",
                  text: "Lead with bills you can't predict (7 of 9 August G2 reviews), a half-finished security audit while selling to law firms, and one spending limit for the whole workspace versus Adapt's per person. Delete the rows that are now wrong (\"$50/mo\", \"Slack only\"). Keep the ones that still hold: full audit versus stage one, a full record of what the AI did, connections that start private. [[adapt-compare-viktor]] [[g2]] [[viktor-security]]",
                },
              ],
            },
            {
              claim: "Publish a cost calculator.",
              body: [
                {
                  type: "p",
                  text: "Viktor's customers say they can't tell what uses up credits. A calculator that prices five everyday tasks in dollars becomes the page people link to whenever someone asks \"what does Viktor actually cost\". Adapt already itemizes usage, so it has the data. [[viktor-pricing]] [[adapt-pricing]]",
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
            { type: "h3", text: "What Adapt's comparison page claims" },
            {
              type: "table",
              headers: [
                { text: "Claim on adapt.com/compare/viktor" },
                { text: "The page says" },
                { text: "What's actually true" },
                { text: "Source" },
              ],
              rows: [
                [
                  "Viktor's price",
                  "\"$50/mo + credit-based scaling\", \"Team plan is $50/month for 20,000 credits\"",
                  "$100 a month for 40,000 credits since early August",
                  "[[viktor-pricing]]",
                ],
                [
                  "Where Viktor works",
                  "\"Slack only\", \"There is no standalone web app today\"",
                  "A web chat for everyone since Aug 6, Discord since Aug 1, Microsoft Teams since June, and a plug-in for other software since Aug 20",
                  "[[viktor-changelog]]",
                ],
                [
                  "Security audit",
                  "\"Type II in progress\"",
                  "Still true: Viktor has stage one; stage two and ISO 27001 are listed as \"in progress\"",
                  "[[viktor-security]]",
                ],
                [
                  "What customers spend",
                  "\"active workspaces spend $300–$400 a month\"",
                  "An outside estimate says $400 on average; reviewers report $750 to 1,000; the new minimum is $100",
                  "[[latka]] [[chiefmarketingdad]]",
                ],
                [
                  "How it decides to speak up",
                  "\"Heartbeat polls Slack about four times a day\"",
                  "Still what Viktor's engineering blog describes; nothing in the August updates contradicts it",
                  "[[viktor-changelog]]",
                ],
                [
                  "Privacy",
                  "\"Per-user Private Mode is on the public roadmap\"",
                  "No private mode has shipped as of Aug 26; per-person channel privacy has existed since February",
                  "[[viktor-changelog]]",
                ],
                [
                  "Headquarters",
                  "\"Warsaw / Munich / NY\"",
                  "Warsaw and Munich, Dublin added, a New York office \"setting up now\"; the legal company is registered in Delaware",
                  "[[ashby]]",
                ],
              ],
            },
            { type: "h3", text: "Prices" },
            {
              type: "p",
              text: "Viktor: Free ($100 of credits that never expire), Team ($100 a month for 40,000 credits shared by the workspace, unused credits roll over), Enterprise (custom, with per-person limits and EU data storage). Adapt: Starter ($0 with $25 of credits, more for connecting Slack and email), Pro ($50 to $5,000 a month at one cent per credit), Enterprise (custom, with a dedicated engineer). Neither charges per user. Adapt's $50 start dates from May 26; Viktor doubled its start in August. [[viktor-pricing]] [[adapt-pricing]] [[latka]]",
            },
            { type: "h3", text: "What Viktor shipped" },
            {
              type: "p",
              text: "August: transparent images (26), a plug-in for coding tools (20), Supermemory (19), Wispr Flow notes and memory in Teams (12), custom web addresses and video clips (11), shared saved instructions (8), archiving and search (7), web chat for everyone (6), Discord (1). Late July was bigger: a public API, the plug-in, 19 connections and a usage report. [[viktor-changelog]]",
            },
            { type: "h3", text: "What Adapt shipped" },
            {
              type: "p",
              text: "Aug 19: a post on Adapt's beliefs. Aug 14: spending limits per person. Aug 13: a company-branded Slack assistant (Jim's LinkedIn post got 102 likes, more than every company post combined). Aug 7: the coding-tool plug-in, a week after Viktor's. Late July: app version history, suggested prompts, a Chrome extension update, personal writing preferences. [[adapt-changelog]] [[linkedin-benton]]",
            },
            { type: "h3", text: "Full feature matrix" },
            {
              type: "table",
              headers: [
                { text: "Feature" },
                { text: "Viktor Free" },
                { text: "Viktor Team" },
                { text: "Viktor Enterprise" },
                { text: "Adapt Starter" },
                { text: "Adapt Pro" },
                { text: "Adapt Enterprise" },
              ],
              rows: [
                ["Price", "$0", "$100/mo", "Custom", "$0", "$50 to $5,000/mo", "Custom"],
                ["Included credits", "$100, never expire", "40,000 a month, unused roll over", "Volume pricing", "$25, plus $100 for Slack, plus up to $300 for a work email", "Paid up front, up to 10% bonus", "Discounts for committed spending"],
                ["Price per credit", "Not published", "A quarter of a cent (implied)", "Custom", "1 cent", "1 cent", "Custom"],
                ["Charge per user", "No", "No", "No", "No", "No", "No"],
                ["Where it works", "Slack, Teams, Discord, web", "Same", "Same", "Slack, web, GitHub, Linear, iMessage, Chrome; Teams coming", "Same", "Same"],
                ["Connections to other software", "27 built in, \"3,200+\" through third-party connectors", "Same", "Same", "140+ built in", "Same", "Same"],
                ["Spending limits", "A cap on automatic top-ups", "One cap for the workspace", "A cap per person", "A monthly cap per person", "Per-person caps, automatic refills", "Per-person caps"],
                ["How detailed the bill is", "Rough ranges", "Rough ranges", "Custom", "Itemized per conversation and automation", "Same", "Same"],
                ["Plug-in for other software", "Yes", "Yes", "Yes", "Yes (beta)", "Same", "Same"],
                ["Can run on your own servers", "No", "No", "No", "Claimed, not documented", "Claimed", "Claimed"],
                ["Security audit", "SOC 2 stage one", "SOC 2 stage one", "Stage one, plus a data agreement, European data storage, single sign-on", "SOC 2 full", "SOC 2 full", "Full, plus a data agreement, permissions, audit logs"],
                ["Asks before doing risky things", "Yes", "Yes", "Yes", "Yes, with rules you set", "Same", "Same"],
              ],
            },
            {
              type: "note",
              text: "Captured from viktor.com/pricing, viktor.com/security, adapt.com/pricing and adapt.com/security on Aug 26, 2026. Viktor's price per credit is worked out from $100 for 40,000 credits; it isn't printed anywhere. [[viktor-pricing]] [[adapt-pricing]] [[viktor-security]] [[adapt-security]]",
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
              cap: "Google searches Viktor shows up in without paying",
              sub: "Number of different searches where viktor.com appears in the free results. Semrush, worldwide, 2026",
              chart: {
                kind: "columns",
                rows: [
                  ["May", 56],
                  ["Jun", 335],
                  ["Jul", 542],
                  ["Aug", 662],
                ],
                aria: "Semrush global organic keywords for viktor.com, May to Aug 2026",
                fmt: "num",
                label: [0, 3],
              },
            },
            {
              cap: "Estimated US Google Ads budget",
              sub: "SpyFu's estimate, dollars per month",
              chart: {
                kind: "columns",
                rows: [
                  ["May", 98570],
                  ["Jun", 149900],
                  ["Jul", 149900],
                  ["Aug", 175585],
                ],
                aria: "SpyFu estimated US Google Ads budget per month for viktor.com",
                fmt: "usd",
                label: [0, 3],
              },
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          items: [
            {
              claim: "Viktor bought its way onto Google. Its free traffic is mostly people typing its name.",
              body: [
                {
                  type: "p",
                  text: "In May Viktor showed up in free Google results for 56 different searches; by August it was 662, while its ad budget went from $99K to $176K. The free traffic is thin: 87% of it is people typing \"viktor\" or a misspelling, and 88% of Viktor's Google clicks are on paid ads. [[semrush]] [[spyfu]] [[ahrefs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** the searches that describe the category are wide open: \"slack ai agent\" (320 a month, $11 a click), \"viktor alternative\" (90 a month, brand new), \"viktor vs claude tag\". None has a winner. Adapt's one page that wins search traffic today is a comparison page; make more, aimed at Viktor. [[keyword-planner]] [[ahrefs-adapt]]",
                },
              ],
            },
            {
              claim: "Viktor's ads chase ChatGPT, Claude and Slack searchers.",
              body: [
                {
                  type: "p",
                  text: "Viktor's biggest paid search is \"chatgpt alternative\" (18,100 searches a month, 12% of the clicks it pays for), then its own name and \"cowork\". It bids against claude.ai and fin.ai, not other Slack assistants. 13 unrelated companies also run Google ads pointing at viktor.com, most likely to collect its referral commission. [[semrush]] [[spyfu]] [[google-ads-transparency]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Viktor's spending isn't making Adapt's searches expensive. Adapt's current paid terms (\"claude cost\", \"hermes agent vs openclaw\") are cheap and beside the point. Move the money to the searches Viktor ignores and the ones people make when leaving it. [[semrush]] [[keyword-planner]]",
                },
              ],
            },
          ],
          style: "did",
        },
        {
          type: "table",
          headers: [
            { text: "Viktor vs Adapt, by the numbers" },
            { text: "Viktor", n: true },
            { text: "Adapt", n: true },
            { text: "Source" },
          ],
          rows: [
            ["Website visits in July", "646,267", "82,324", "[[similarweb]] [[similarweb-adapt]]"],
            ["Change from June", "+1.0%", "+21.2%", "[[similarweb]]"],
            ["Share of visitors from free Google results", "8.9%", "5.4%", "[[similarweb]]"],
            ["Share of visitors who clicked an ad (banners, Google ads, paid social posts)", "30%", "4%", "[[similarweb]]"],
            ["Share of free search visitors who typed the company's name", "32%", "15%", "[[semrush]]"],
            ["Search terms it pays Google for (US, SpyFu)", "13,810", "894", "[[spyfu]]"],
            ["Estimated monthly Google Ads spend (US, SpyFu)", "$176K", "$903", "[[spyfu]]"],
            ["Estimated monthly Google Ads spend (US, Semrush, July)", "$82K", "$1.5K", "[[semrush]]"],
            ["Share of Google clicks that are paid ads (SpyFu)", "88%", "16%", "[[spyfu]]"],
            ["Google ads ever run", "200+ (182 its own, 18 by other companies)", "31", "[[google-ads-transparency]]"],
            ["Other websites linking to it (Semrush / Ahrefs)", "1,366 / 1,963", "985 / 1,052", "[[semrush]] [[ahrefs]]"],
            ["Link strength score, 0 to 100 (Ahrefs)", "63", "34", "[[ahrefs]]"],
            ["Pages cited by AI assistants / times mentioned (Semrush)", "92 / 49", "46 / 12", "[[semrush]]"],
            ["Monthly US searches for \"[brand] ai\" in July", "5,400", "320", "[[keyword-planner]]"],
            ["G2 reviews (average rating)", "54 (4.9)", "no listing", "[[g2]]"],
            ["Product Hunt upvotes, followers", "696, 2.2K", "134, 172", "[[product-hunt]] [[product-hunt-adapt]]"],
            ["Comparison pages on its website", "13, none about Adapt", "5, one about Viktor", "[[viktor-blog]] [[adapt-compare-viktor]]"],
          ],
        },
        { type: "h3", text: "What Adapt should do" },
        {
          type: "findings",
          items: [
            {
              claim: "Be the answer for \"viktor alternative\".",
              body: [
                {
                  type: "p",
                  text: "Nobody searched for it before May. Now it's 90 a month at $6 to 20 a click, and Viktor doesn't buy it. Update the comparison page (current price, a row on credits, a row on security) and add a small page for each variation people type (\"viktor ai alternative\", \"viktor vs claude tag\"). These people have already decided to shop around. [[keyword-planner]] [[adapt-compare-viktor]]",
                },
              ],
            },
            {
              claim: "Take \"slack ai agent\" before Viktor's Google lead does.",
              body: [
                {
                  type: "p",
                  text: "\"slack ai agent\" gets 320 searches a month at $11 a click and nobody owns it. Viktor's Google Ads lead job (posted Jul 21, \"$1M+/month\" experience) will make it expensive once filled. A few thousand dollars buys the position now. [[keyword-planner]] [[ashby]]",
                },
              ],
            },
            {
              claim: "Get on G2 and Slack's app directory.",
              body: [
                {
                  type: "p",
                  text: "Viktor added ten G2 reviews in two weeks and will pass 100 by October. Adapt has no G2 listing (the \"Adapt\" on G2 is a different company) and isn't in Slack's app directory either. Anyone browsing either finds Viktor and not Adapt. Seed a listing with the customers already on Adapt's case-study page. [[g2]] [[slack-marketplace]] [[adapt-customers]]",
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
              text: "Viktor's visitors: 48% type the address in, 30% click an ad, 9% come from free Google results. Adapt's: 72% type the address in, 5% free Google, 2% ads. Adapt's visitors stay eight minutes and view six pages, meaning they're using the product, not reading marketing. On link strength (a 0-to-100 score of how many reputable sites link to you), Viktor scores 63 and Adapt 34; both domains date from 2006 and carry old links, so both are flattered. [[similarweb]] [[similarweb-adapt]] [[ahrefs]] [[semrush]]",
            },
            {
              type: "fig",
              panels: [
                {
                  cap: "Monthly website visits",
                  sub: "Similarweb, July 2026",
                  chart: {
                    kind: "rows",
                    rows: [
                      ["viktor.com", 646267],
                      ["adapt.com", 82324, "us"],
                    ],
                    aria: "Monthly website visits by domain",
                    fmt: "k",
                    labelAll: true,
                  },
                  legend: [
                    { series: "primary", label: "Viktor" },
                    { series: "us", label: "Adapt" },
                  ],
                },
                {
                  cap: "Search terms it pays Google for, US",
                  sub: "SpyFu, Aug 27",
                  chart: {
                    kind: "rows",
                    rows: [
                      ["viktor.com", 13810],
                      ["adapt.com", 894, "us"],
                    ],
                    aria: "Paid keywords by domain",
                    fmt: "num",
                    labelAll: true,
                  },
                  legend: [
                    { series: "primary", label: "Viktor" },
                    { series: "us", label: "Adapt" },
                  ],
                },
              ],
            },
            {
              type: "fig",
              panels: [
                {
                  cap: "Monthly website visits, May to July",
                  sub: "Similarweb. Viktor tripled in June and then stopped; Adapt keeps climbing",
                  chart: {
                    kind: "lines",
                    series: [
                      {
                        label: "viktor.com",
                        series: "primary",
                        points: [
                          ["May", 243204],
                          ["Jun", 639780],
                          ["Jul", 646267],
                        ],
                      },
                      {
                        label: "adapt.com",
                        series: "us",
                        points: [
                          ["May", 48717],
                          ["Jun", 67905],
                          ["Jul", 82324],
                        ],
                      },
                    ],
                    aria: "Monthly visits for viktor.com and adapt.com, May to July 2026",
                    fmt: "k",
                  },
                  legend: [
                    { series: "primary", label: "Viktor" },
                    { series: "us", label: "Adapt" },
                  ],
                },
                {
                  cap: "How many people Google the brand each month, US",
                  sub: "Google Keyword Planner, \"viktor ai\" vs \"adapt ai\"",
                  chart: {
                    kind: "lines",
                    series: [
                      {
                        label: "viktor ai",
                        series: "primary",
                        points: [
                          ["Jan", 110],
                          ["Feb", 590],
                          ["Mar", 2400],
                          ["Apr", 4400],
                          ["May", 4400],
                          ["Jun", 4400],
                          ["Jul", 5400],
                        ],
                      },
                      {
                        label: "adapt ai",
                        series: "us",
                        points: [
                          ["Jan", 320],
                          ["Feb", 320],
                          ["Mar", 1000],
                          ["Apr", 590],
                          ["May", 480],
                          ["Jun", 480],
                          ["Jul", 320],
                        ],
                      },
                    ],
                    aria: "Monthly US searches for viktor ai and adapt ai, January to July 2026",
                    fmt: "num",
                  },
                  legend: [
                    { series: "primary", label: "viktor ai" },
                    { series: "us", label: "adapt ai" },
                  ],
                },
              ],
            },
            { type: "h3", text: "Searches that describe the category, which neither company owns" },
            {
              type: "table",
              headers: [
                { text: "Search (US)" },
                { text: "Searches/mo", n: true, w: "12%" },
                { text: "Cost per click", n: true, w: "13%" },
                { text: "Who shows up today" },
              ],
              rows: [
                ["viktor ai", "5,400", "$5.62", "Viktor is the top free result; it is also the search that sends Adapt the most valuable visitors"],
                ["viktor alternative", "90 (new since May)", "$8.68; advertisers pay $6 to 20", "Nobody buys it; no page ranks for it"],
                ["viktor.com / \"viktor com\"", "260", "$4.54", "Viktor"],
                ["slack ai agent", "320", "$11.26", "No clear winner; Viktor and Adapt both absent"],
                ["ai employee slack", "under 10", "n/a", "Viktor's own phrase; almost nobody searches it"],
                ["chatgpt alternative", "18,100", "$1.22", "Viktor's biggest paid search; the ad goes to its Claude Tag comparison page"],
                ["cowork / what is claude cowork", "8,100 / 5,400", "$4.26 / $5.69", "Viktor buys these; Adapt buys \"claude cost\" (2,900 searches, $5.32)"],
                ["how to build an ai agent", "2,400", "$7.55", "Adapt buys it (ad headline: \"Don't Build 30 AI Agents\")"],
                ["adapt ai", "320 (peaked at 1,000 in March)", "$5.44", "Adapt is the second free result; unrelated \"Adapt\" companies sit above it"],
              ],
            },
            {
              type: "note",
              text: "Counts from Google Keyword Planner (July 2026) and Semrush. \"viktor\" alone gets 12,100 searches a month, mostly for the League of Legends character. [[keyword-planner]] [[semrush]]",
            },
            { type: "h3", text: "App directories and review sites (Aug 26)" },
            {
              type: "table",
              headers: [
                { text: "Where" },
                { text: "Viktor", n: true },
                { text: "Adapt", n: true },
              ],
              rows: [
                ["G2 reviews (average rating)", "54 (4.9)", "none"],
                ["G2 reviews added Aug 10 to 26", "10", "n/a"],
                ["Product Hunt upvotes (rank on launch day)", "696 (#4 of the day)", "134 (#13 of the day)"],
                ["Product Hunt followers, reviews", "2.2K, 16 reviews at 4.9", "172, 2 reviews at 5.0"],
                ["Product Hunt launches", "4 (Mar 3, Mar 31, Apr 10, Jun 18)", "1 (June)"],
                ["Listed in Slack's app directory", "Yes, under ZETA AI, Inc.; no rating shown; listing says \"no HIPAA, no SAML\"", "Not found"],
                ["Trustpilot", "4.5 from 16 reviews by one count, 3.4 by another", "none"],
                ["Hacker News", "A 181-point thread about reverse-engineering it (March)", "none"],
              ],
            },
            {
              type: "p",
              text: "Viktor built this the same way as everything else: four Product Hunt launches, a review push (10 G2 reviews in two weeks), and a Community Manager job that names \"Trustpilot, G2\" as targets. Adapt launched once and has never asked for reviews. [[g2]] [[product-hunt]] [[product-hunt-adapt]] [[ashby]]",
            },
            { type: "h3", text: "AI search" },
            {
              type: "p",
              text: "When someone asks ChatGPT or Gemini about Viktor, the answers draw on YouTube, viktor.com, a video-game wiki (the League of Legends character) and an unrelated Dutch company at viktor.ai. Semrush counts 49 AI mentions for Viktor and 12 for Adapt, with the same visibility score (14). Adapt's citations come from funding databases and job boards, not product coverage. Neither company is winning AI answers. [[semrush]]",
            },
            {
              type: "table",
              headers: [{ text: "Signal" }, { text: "Viktor", n: true }, { text: "Adapt", n: true }],
              rows: [
                ["Semrush AI visibility score (typical score for the category)", "14 (24)", "14 (25)"],
                ["Times mentioned by AI assistants", "49", "12"],
                ["Pages cited by AI assistants", "92", "46"],
                ["ChatGPT mentions / pages cited", "13 / 64", "2 / 44"],
                ["Google AI Mode mentions", "18", "5"],
                ["Share of website visitors sent by AI assistants", "0.97% (about 6.3K)", "1.5% (about 1.2K)"],
              ],
            },
            { type: "h3", text: "The brand leaks" },
            {
              type: "p",
              text: "\"Viktor\" is also a League of Legends character, a Dutch engineering firm (viktor.ai) and a language app whose TikToks have 10.8 million plays. Misspellings are 14% of Viktor's free search traffic, and it ranks first for all of them. 13 unrelated companies run Google ads to viktor.com, likely farming its referral commission. Adapt's problem runs the other way: \"adapt\" is an ordinary word, and the search that sends Adapt its best visitors is \"viktor ai\". [[semrush]] [[google-ads-transparency]] [[viktor-creators]] [[similarweb-adapt]]",
            },
            { type: "h3", text: "The narrative the market uses against them" },
            {
              type: "p",
              text: "Doubt is forming in search: \"viktor alternative\" (90 a month, none before May), \"viktor com\" (people checking whether it's real). Viktor's own marketing job ad lists the objections it needs answers for, including \"the Slack bot built in a weekend\". In March a Hacker News thread on reverse-engineering Viktor hit 181 points before the code was taken down. A TikTok clip says Viktor's default settings let the whole Slack see your Gmail. On X the doubt is quieter: a rival pitching a cheaper alternative, a developer calling the product \"meh\". Adapt is not named anywhere in Viktor's materials. [[keyword-planner]] [[ashby]] [[hacker-news]] [[tiktok-search]] [[x]]",
            },
            {
              type: "note",
              text: "The Hacker News thread and the TikTok privacy clip are other people's claims. Verify the specifics before repeating any of it in marketing.",
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
              cap: "Facebook and Instagram ads by launch date",
              sub: "238 running on Aug 26",
              chart: {
                kind: "rows",
                rows: [
                  ["Aug 25", 126],
                  ["Aug 24", 73],
                  ["Aug 26", 39],
                  ["Aug 23 or earlier", 0],
                ],
                fmt: "num",
                labelAll: true,
                aria: "Active Meta ads by launch date, Aug 26",
              },
            },
            {
              cap: "X posts about Viktor, by type",
              sub: "236 posts, Aug 6 to 26, sorted by keyword and then checked by hand",
              chart: {
                kind: "share",
                rows: [
                  ["praise, testimonials", 34, "pos"],
                  ["complaints, alternatives", 2, "neg"],
                  ["launch hype, lists, news", 64, "neu"],
                ],
                aria: "Split of X posts about Viktor by type",
              },
              legend: [
                { series: "pos", label: "Praise" },
                { series: "neg", label: "Complaints, alternatives" },
                { series: "neu", label: "Launch hype, news" },
              ],
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          items: [
            {
              claim: "All 238 Viktor ads are three days old, made in-house, and a fifth target law firms.",
              body: [
                {
                  type: "p",
                  text: "All 238 ads were launched Aug 24 to 26; the old ones were switched off, so none has run long enough to prove it works. Only 5 look creator-made. 180 send people to the homepage and 42 to a new law-firm page. Themes: \"Slack or Teams\" (148 ads), hiring and payroll (112, \"One founder gave the $90K ops role to Viktor\"), \"45,000+ teams\" (30), the funding round (14). Price, credits or security: none. [[meta-ad-library]]",
                },
                {
                  type: "fig",
                  panels: [
                    {
                      cap: "What the ads talk about",
                      sub: "Running ads mentioning each theme, Aug 26",
                      chart: {
                        kind: "rows",
                        rows: [
                          ["Slack or Teams", 148],
                          ["Hiring, employee, payroll", 112],
                          ["Law firms, paralegals", 42],
                          ["\"45,000+ teams\"", 30],
                          ["Funding, \"backed by $87M\"", 14],
                          ["Choice of AI models", 9],
                          ["Free credits", 6],
                          ["Price, credits, security", 0],
                        ],
                        fmt: "num",
                        labelAll: true,
                        aria: "Themes mentioned in Viktor's active Meta ads",
                      },
                    },
                    {
                      cap: "Where the ads send people",
                      sub: "Landing page, 238 running ads",
                      chart: {
                        kind: "rows",
                        rows: [
                          ["/ (homepage)", 180],
                          ["/for/legal", 42],
                          ["/for/agencies", 7],
                          ["/business", 5],
                          ["ref.viktor.com test page", 3],
                          ["/enterprise", 1],
                        ],
                        fmt: "num",
                        labelAll: true,
                        aria: "Landing pages of Viktor's active Meta ads",
                      },
                    },
                  ],
                },
                { type: "h3", text: "Creative watch list" },
                {
                  type: "note",
                  text: "The ads Viktor made the most copies of. Whatever is still running in two weeks is what works. Re-checked every report.",
                },
                {
                  type: "table",
                  headers: [
                    { text: "Ad" },
                    { text: "Angle" },
                    { text: "Launched", w: "10%", nw: true },
                    { text: "Days live", n: true, w: "8%" },
                    { text: "Copies", n: true, w: "8%" },
                    { text: "Sends people to" },
                  ],
                  rows: [
                    ["\"Founders get pitched AI companies every day and reject most on sight. Viktor clears the bar\"", "credibility: 45,000+ teams, $87M raised", "Aug 25", "1", "4", "/"],
                    ["\"One founder gave the $90K ops role to Viktor. The work is done daily in Slack, and the budget stayed.\"", "pay for it from the hiring budget", "Aug 25", "1", "4", "/"],
                    ["\"Viktor raised $75M because the work he returns is real\"", "funding; a demo pulling from Stripe, HubSpot and Linear", "Aug 25", "1", "3", "/"],
                    ["\"Viktor is one hire that comes with every frontier model built in\"", "choice of AI models", "Aug 25", "1", "3", "/"],
                    ["\"Tools help you work. Viktor does the work.\"", "the category line", "Aug 24", "2", "3", "/"],
                    ["\"Your 5 paralegals should not have to remember every deadline across every matter\"", "law firms, deadlines", "Aug 25", "1", "2", "/for/legal"],
                    ["\"We tried a legal intern for the admin backlog. Then we tried Viktor.\"", "law firms, new-client intake", "Aug 25", "1", "2", "/for/legal"],
                    ["\"The fastest growing AI power users are not engineers. They are legal teams.\"", "law firms", "Aug 25", "1", "2", "/for/legal"],
                    ["\"Your law firm should not run on 15 open tabs.\"", "law firms, too many tools", "Aug 26", "0", "2", "/for/legal"],
                    ["\"Comment VIKTOR for $100 worth of free work :)\"", "creator video, a week in the life", "Aug 24", "2", "2", "/"],
                  ],
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Viktor is selling \"an AI employee you pay for from the hiring budget\" and saying nothing about price, credits or security, the three things its customers complain about. It's also chasing law firms with a half-finished security audit. Run the message Viktor won't, and watch this list to learn which law-firm angle works without paying for the lesson. [[meta-ad-library]] [[g2]]",
                },
              ],
            },
            {
              claim: "Viktor's TikTok and YouTube audience belongs to paid creators and a podcast.",
              body: [
                {
                  type: "p",
                  text: "Viktor's own TikTok has 323 followers. The 44 creator videos about it have 294K plays, but 192K are two podcast clips and 79K are one Brazilian creator's #ad posts; strip those out and a typical creator video gets about 300 plays. YouTube is the same: 772K lifetime views, mostly from ads, on a channel with 781 subscribers. Of 34 creator reviews on YouTube, only one is labelled as paid. Instagram (17,601 followers) is the one company channel that works. [[tiktok-getviktor]] [[tiktok-search]] [[youtube-search]] [[youtube-getviktor]] [[instagram]]",
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
                    ["Aug 21", "[20vc_tok](https://www.tiktok.com/@20vc_tok/video/7676344984995433745)", "273K", "184K", "Podcast clip: Viktor's Head of Growth on creators earning $20 to 30K a month"],
                    ["Jul 3", "[ricardomartinsbrk](https://www.tiktok.com/@ricardomartinsbrk/video/7658296335380008193)", "3.5M", "28.9K", "#ad, in Portuguese; his four #ad posts total 79K plays"],
                    ["Aug 15", "[20vc_tok](https://www.tiktok.com/@20vc_tok/video/7674257955419606273)", "273K", "8.0K", "Podcast clip introducing the Head of Growth"],
                    ["Mar 17", "[usefulaiwebsites](https://www.tiktok.com/@usefulaiwebsites/video/7618328149356498206)", "406K", "7.8K", "\"3 brand new AI tools\"; TikTok marks it as an ad"],
                    ["Jun 11", "[keltysage](https://www.tiktok.com/@keltysage/video/7650281327924858142)", "20.6K", "901", "\"Yall gotta try the new Viktor tool!\"; no disclosure"],
                    ["May 14", "[thepmfguy](https://www.tiktok.com/@thepmfguy/video/7639886206251109646)", "1.5K", "855", "Critical: default settings share your Gmail and meeting notes with the whole Slack"],
                    ["May 25", "[jeromesdigitalshopllc](https://www.tiktok.com/@jeromesdigitalshopllc/video/7643946083210562830)", "5.0K", "808", "Commission link in bio, not disclosed"],
                    ["Jul 13", "[theagencymavericks](https://www.tiktok.com/@theagencymavericks/video/7661892495344717063)", "405", "772", "A paid set-up partner"],
                    ["Aug 6", "[realkimbarrett](https://www.tiktok.com/@realkimbarrett/video/7670785952075222290)", "15.2K", "316", "#ad, \"employee of the month\""],
                    ["Aug 20", "[iamaprillittle](https://www.tiktok.com/@iamaprillittle/video/7676195776304811295)", "9.9K", "271", "Uses Viktor's creator-program script (\"$100 in credits, no card. Full link in first comment\"), no #ad"],
                  ],
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** these creators post for whoever pays, and most posts get a few hundred plays. The two things that actually reached people were free: a podcast clip and the CEO's conference talk. Adapt's CEO has the résumé for that kind of attention and hasn't used it on video. [[tiktok-search]] [[youtube-search]]",
                },
              ],
            },
            {
              claim: "Viktor's launch-day X buzz was big accounts cheering each other. Adapt's X reach is paid promotion with no likes.",
              body: [
                {
                  type: "p",
                  text: "129 of 236 X posts landed on Aug 20 and 21, when Viktor launched its plug-in. 31 came from accounts with over 50,000 followers, mostly one-line replies to each other (\"Excellent contribution\", \"noice\"); Viktor's own staff were the most frequent posters. Outside launch days the real conversation is 5 to 10 posts a day, mostly praise. Adapt's reach comes from two paid-promotion posts (649K and 617K views, under 100 likes each). Adapt was mentioned once. [[x]] [[x-adapt]] [[x-viktor-com]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Viktor's launch-day numbers are manufactured, and Adapt's are too, just bought from X instead of from creators; 6,000 views per like reads as an ad. The cheapest fix is founders posting about what Viktor's cheerleaders never mention: spending limits, a full record of what the AI did, the completed security audit. [[x]]",
                },
              ],
            },
            {
              claim: "How the machine works: pay creators per view, referrers per sale, consultants to install it, and replace ads constantly.",
              body: [
                {
                  type: "p",
                  text: "Creators get $200 for a post seen by 1,000 to 5,000 people, up to $10,000 for 100,000+, or 50% more in credits (83% take credits); every creator gets a referral link at sign-up. Referrers get 15 to 20% of a customer's spending for a year. Consultants who set Viktor up keep their fee plus 20% of the client's spending for a year; Viktor's own example is $44,000 to 79,000 a year from five clients. Plus newsletter deals and podcast ads. Job ads describe paid spend \"scaling toward 2x\" and a marketer managing \"around $400k\" a month. [[viktor-creators]] [[viktor-ways-to-earn]] [[viktor-experts]] [[ashby]] [[x-viktor-com]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** copy the machine (credits for creators, a revenue share for consultants, a referral link at sign-up), not the message. Viktor's story is \"hire an employee from the hiring budget\". The story it dropped is the one Adapt tells: one assistant for the whole company, your own knowledge, spending you can see. [[viktor-ways-to-earn]]",
                },
              ],
            },
          ],
          style: "did",
        },
        { type: "h3", text: "What Adapt should do" },
        {
          type: "findings",
          items: [
            {
              claim: "Answer the doubts Viktor isn't answering.",
              body: [
                {
                  type: "p",
                  text: "Set up saved searches on X, TikTok and G2 for \"viktor\" plus words like credits, worth it, alternative and pricing, and have a named Adapt employee answer each one with a real number and a trial link. Start with the table at the top of this brief. Nobody from Viktor or Adapt answered @dierre's \"worth or fade?\" question in a month. [[x]] [[g2]]",
                },
              ],
            },
            {
              claim: "Copy the machine, not the message.",
              body: [
                {
                  type: "p",
                  text: "Adapt has no creator, referral or partner program; adapt.com/affiliates, /referral and /partners all return \"page not found\". Credits cost Adapt almost nothing to give away. Launch a credits-only creator program aimed at developers and technical operators on YouTube and X, the audience Viktor's creators never reach, and pay consultants the way Viktor does. [[viktor-ways-to-earn]] [[adapt-pricing]]",
                },
              ],
            },
            {
              claim: "Run the message Viktor won't: know what it costs before you run it.",
              body: [
                {
                  type: "p",
                  text: "None of Viktor's 238 ads mentions price, credits or security; its customers mention little else. A small Facebook and LinkedIn test saying \"spending limits per person, an itemized bill, $50 to start\", aimed at founders and ops leads, costs a few thousand dollars and tells Adapt within two weeks whether the pricing story sells. Add a law-firm version while Viktor's law-firm ads are still being tested. [[meta-ad-library]] [[g2]]",
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
                  "X, Jul 30",
                  "\"Who rips Viktor - AI employee? Curious to hear testimonies / applicable use cases. Worth or fade?\" 1.9K views, 9 replies.",
                  "Someone openly asking whether to buy; the replies are other users, no company",
                  "[[x-dierre]]",
                ],
                [
                  "X, Aug 7",
                  "\"If you are looking for better and cheaper alternative to @viktor_com try @Infeld_ai.\" 1.4K views.",
                  "A rival is already answering the price objection in public",
                  "[[x-infeld]]",
                ],
                [
                  "X, Aug 20",
                  "\"Every Viktor (AI employee) ad I see is about how they raised $75m. If I were their investor I would be furious. Not only is the product meh...\"",
                  "Names the exact weakness of the new ads",
                  "[[x-pshenianykov]]",
                ],
                [
                  "X, Aug 20",
                  "\"@Scobleizer @Benioff fair enough — have you tried Viktor in Slack? how do you like that?\"",
                  "A question aimed at two people with big audiences, unanswered",
                  "[[x-asapdar]]",
                ],
                [
                  "G2, Aug 14 to 24",
                  "Eight 5-star reviews whose \"dislike\" box is about credits: \"kind of a black box on how tokens are used / spent\", \"sometimes I am not sure what uses a lot of credits\", \"the price tag\".",
                  "Happy customers who can't predict the bill; Adapt's spending-limits pitch, in their own words",
                  "[[g2]]",
                ],
                [
                  "TikTok, May 14",
                  "A product manager: Viktor's default settings let the whole Slack see your Gmail and meeting notes.",
                  "Adapt's \"connections start private\" argument, made by a stranger",
                  "[[tiktok-thepmfguy]]",
                ],
                [
                  "TikTok, Jun 16",
                  "A consultant files Viktor under \"skeptical\" alongside another tool.",
                  "Small, but the only skeptical voice with a 36K audience",
                  "[[tiktok-search]]",
                ],
                [
                  "Hacker News, March",
                  "\"Reverse-engineering Viktor and making it open source\", 181 points, 85 comments, the code removed within three days.",
                  "The technical crowd's first impression of Viktor was a takedown",
                  "[[hacker-news]]",
                ],
              ],
            },
            { type: "h3", text: "What people said on X (236 posts, Aug 6 to 26)" },
            {
              type: "p",
              text: "About a third praise (\"best SaaS I have ever used\"), 2% complaints, the rest launch hype and listicles. Every Viktor announcement produces the same shape: five or six near-identical posts from big accounts within an hour. The unpaid praise is real and specific. The unpaid doubt is thin and unanswered. Adapt appears once. [[x]] [[x-adapt]]",
            },
            { type: "h3", text: "Paid footprint, Aug 26" },
            {
              type: "table",
              headers: [{ text: "Channel", w: "20%" }, { text: "What's running" }, { text: "Since", w: "10%", nw: true }, { text: "Source", w: "12%" }],
              rows: [
                [
                  "Facebook, Instagram, Messenger, Threads",
                  "238 ads, all launched Aug 24 to 26 in batches of 73, 126 and 39. Made in-house; 42 aimed at law firms",
                  "Page active since 2025; ads rebuilt Aug 24",
                  "[[meta-ad-library]]",
                ],
                [
                  "Google Search",
                  "200+ ads from ZETA AI, Inc.; 89 shown in the last week; new batches of text ads on Jun 9, Jun 17, Jul 2, Jul 24 and Aug 9 to 14. Estimated budget $176K a month (SpyFu) or $82K (Semrush, July)",
                  "Mar 12, 2026",
                  "[[google-ads-transparency]] [[spyfu]] [[semrush]]",
                ],
                [
                  "YouTube",
                  "36 video ads in Google's records; 772K lifetime views on a channel with 781 subscribers",
                  "Mar 2026",
                  "[[google-ads-transparency]] [[youtube-getviktor]]",
                ],
                [
                  "Banner ads",
                  "12.5% of website visits; shown on sites like Digital Spy and Ecosia",
                  "2026",
                  "[[similarweb]]",
                ],
                [
                  "LinkedIn",
                  "\"Paid is scaling on Meta, LinkedIn and Google\", per the video editor job ad; not measurable from outside",
                  "2026",
                  "[[ashby]]",
                ],
                [
                  "TikTok",
                  "No ads under Viktor's own name. It advertises through creators: 16 of 37 creator videos carry #ad",
                  "n/a",
                  "[[tiktok-search]]",
                ],
                [
                  "Creators and referrers",
                  "$200 to $10,000 a post depending on views, or 50% more in credits; 15 to 20% commission on referred customers for a year; 20% of client spending for consultants who install it; 5% for referring other partners",
                  "2026, \"5x'd\" in May",
                  "[[viktor-creators]] [[viktor-ways-to-earn]] [[viktor-experts]]",
                ],
                [
                  "Newsletters and podcasts",
                  "A co-branded $100-credit page for a newsletter with 180,000 subscribers; the first podcast ad cost $1,000",
                  "Mar 2026",
                  "[[viktor-strategy-breakdowns]] [[x-viktor-com]]",
                ],
                [
                  "Adapt, for comparison",
                  "31 Google ads since Apr 23, $903 to 3K a month; two paid-promotion posts on X with 649K and 617K views; one YouTube ad with 268K views; no Facebook ads, no creators, no referral program",
                  "Apr 2026",
                  "[[google-ads-transparency]] [[x-adapt]] [[youtube-adapt]]",
                ],
              ],
            },
            {
              type: "fig",
              panels: [
                {
                  cap: "Facebook and Instagram ads by format",
                  sub: "Meta Ad Library, Aug 26",
                  chart: {
                    kind: "rows",
                    rows: [
                      ["Auto-mixed headline and image", 112],
                      ["Video", 81],
                      ["Still image", 30],
                      ["Swipeable carousel", 15],
                    ],
                    aria: "Active Meta ads by format",
                    fmt: "num",
                    labelAll: true,
                  },
                },
                {
                  cap: "Views of creator videos, by who paid for them",
                  sub: "84 TikTok and YouTube videos, 349K views",
                  chart: {
                    kind: "share",
                    rows: [
                      ["free (podcast clips, CEO talk)", 57, "neu"],
                      ["paid, commission, partner", 29, "neg"],
                      ["unlabelled creators, company", 14, "pos"],
                    ],
                    aria: "Share of creator video views by source",
                  },
                  legend: [
                    { series: "neu", label: "Free coverage" },
                    { series: "neg", label: "Paid, commission, partner" },
                    { series: "pos", label: "Unlabelled, company" },
                  ],
                },
              ],
            },
            {
              type: "p",
              text: "Actual ad spend isn't public. SpyFu's $176K and Semrush's $82K are estimates that disagree by two to one, and both cover only US Google search; banners, YouTube, LinkedIn and paid social come on top. Viktor's own job ads point higher: \"$500K+/month\", \"$1M+/month\", a marketer managing \"around $400k\" a month. Only a paid ad tracker like Pathmatics would give a firmer number. [[spyfu]] [[semrush]] [[ashby]] [[linkedin]]",
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
              cap: "Open jobs by department",
              sub: "Viktor: 27 jobs on its job board and Built In, Aug 27. Adapt: 1",
              chart: {
                kind: "rows",
                rows: [
                  ["Marketing, growth, creative", 8],
                  ["Engineering", 5],
                  ["Product and design", 5],
                  ["Operations and hiring", 5],
                  ["Sales, success, support", 4],
                  ["Adapt: sales", 1, "us"],
                ],
                aria: "Open roles by function, Viktor and Adapt",
                fmt: "num",
                labelAll: true,
              },
              legend: [
                { series: "primary", label: "Viktor" },
                { series: "us", label: "Adapt" },
              ],
            },
            {
              cap: "Viktor's headcount as reported",
              sub: "From press, job ads and LinkedIn; the job ads say \"heading toward 100\"",
              chart: {
                kind: "columns",
                rows: [
                  ["May 19", 15],
                  ["Jul 6", 18],
                  ["Jul 16", 40],
                  ["Aug 6", 35],
                  ["Aug 27", 50],
                ],
                aria: "Viktor headcount over time: 15 in May, 18 on Jul 6, 40 on LinkedIn Jul 16, 35 per Next Play Aug 6, 50 on LinkedIn Aug 27",
                fmt: "num",
                label: [0, 4],
              },
            },
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          items: [
            {
              claim: "Eight marketers, four salespeople, five engineers, no salary numbers.",
              body: [
                {
                  type: "p",
                  text: "Viktor's 27 openings: 8 in marketing (a Head of Conversion to turn free users into paying ones, a Lifecycle Manager for onboarding emails, two Google Ads roles, community, social, product marketing, a video editor), 4 in sales and support, 5 in engineering, 10 in product, design and operations. 25 of 26 require the office, mostly Warsaw. None lists a salary except the New York sales job ($100K to 270K). Ten were posted after the new sales chief arrived Jul 29; none is engineering. [[ashby]] [[linkedin-jobs]] [[builtin]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Viktor thinks the product is good enough and distribution is the problem: it's building a sales floor and a marketing operation while leaving five engineering seats open. Adapt's 13-person, mostly-engineering team can out-build Viktor for the next two quarters; it can't out-market it. Pick the fight accordingly. [[ashby]] [[linkedin-adapt]]",
                },
              ],
            },
            {
              claim: "The job ads admit what the marketing doesn't: most paying accounts are one person, and the numbers live in spreadsheets.",
              body: [
                {
                  type: "p",
                  text: "In Viktor's own words: \"half of paying workspaces still have only one active human\"; \"one power user drives most of the usage\"; \"our biggest leak is between a user's first message and their first scheduled task\"; onboarding emails are \"run by the Head of Growth as a side quest\"; decisions on \"retention, pricing, channel mix, and unit economics happen from spreadsheets... no data lead\"; \"hiring is the bottleneck\". [[ashby]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Adapt:** Viktor's public numbers ($25 to 30 million in annual revenue, 56,000 workspaces) come from a company that says, in its own job ads, that half its paying customers are one person and nobody is in charge of the data. Treat the numbers as marketing until that analyst is hired, and sell the whole-team story now. [[ashby]] [[latka]]",
                },
              ],
            },
          ],
          style: "did",
        },
        { type: "h3", text: "What Adapt should do" },
        {
          type: "findings",
          items: [
            {
              claim: "Sell team-wide adoption while Viktor is still hiring the people who'd answer that objection.",
              body: [
                {
                  type: "p",
                  text: "The hires meant to fix single-user accounts (lifecycle, conversion, community, customer success) are all still open. Until they start, Viktor's answer to \"how do we get the whole company using it\" is an email system an outside agency is rebuilding. Adapt's story (one shared assistant, private-by-default connections, spending limits per person) is the answer. Put Adapt's own adoption numbers (CEO 161 sessions a month, ops 142, CTO 128) in front of every prospect. [[ashby]] [[adapt-blog-workflows]]",
                },
              ],
            },
            {
              claim: "Recruit the engineers Viktor's office rule shuts out.",
              body: [
                {
                  type: "p",
                  text: "Viktor's engineering jobs require Warsaw or Munich, with one remote exception limited to Europe. Every US engineer who reads Viktor's ads is ineligible. Adapt requires five days a week in San Francisco, its own filter, but it's the only one of the two hiring engineers in the US. Say so on a careers page; Adapt doesn't have one. [[ashby]] [[adapt-company]]",
                },
              ],
            },
            {
              claim: "Win big-company buyers before Viktor finishes its security audit.",
              body: [
                {
                  type: "p",
                  text: "Viktor's operations job ad names the goal: \"compliance, security questionnaires, and the processes that let us sell to companies bigger than us.\" Adapt already has the full SOC 2 audit, a data-processing agreement, approval rules and audit logs, while Viktor's Slack listing says no HIPAA (US health-privacy law) and no SAML (single sign-on). That gap closes the day Viktor's audit report arrives. Use it in every legal, healthcare and finance deal now. [[ashby]] [[adapt-security]] [[slack-marketplace]]",
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
            { type: "h3", text: "The job board, Aug 27" },
            {
              type: "p",
              text: "**Marketing and growth (8):** a Head of Conversion (ads \"scaling toward 2x\"), a Google Ads lead (\"$1M+/month\") and specialist, a Lifecycle Manager, a Product Marketing Manager, Community and Social Media managers, and a video editor. All Warsaw-first. [[ashby]]",
            },
            {
              type: "p",
              text: "**Sales, success and support (4):** founding salespeople for Europe and the US (New York, $100K to 270K), a Customer Success Manager, and a Support Specialist because Teams \"is adding load\". These are the only jobs Viktor posts on LinkedIn; each drew 39 to 144 applicants. [[ashby]] [[linkedin-jobs]]",
            },
            {
              type: "p",
              text: "**Engineering (5):** two \"agent harness\" engineers, a Product Engineer, a Backend Engineer (\"5M+ tool calls a day\"), and a Growth Analytics Engineer to build the data warehouse. No new engineering job since Jun 22. [[ashby]]",
            },
            {
              type: "p",
              text: "**Product, design and operations (10):** a Product Manager, a Product Designer, three ad and web designers, a recruiter (\"25 open roles, a pipeline currently carried by founders\"), a hiring coordinator, an operations engineer, an operations lead for compliance, and an executive assistant. [[ashby]] [[builtin]]",
            },
            {
              type: "p",
              text: "**Not hiring:** anyone in the US except one salesperson, remote engineers outside Europe, security specialists, or a head of finance. [[ashby]]",
            },
            { type: "h3", text: "All 27 open jobs" },
            {
              type: "table",
              headers: [
                { text: "Job" },
                { text: "Department" },
                { text: "Salary", n: true, w: "12%" },
                { text: "Location" },
                { text: "Posted", w: "10%", nw: true },
              ],
              rows: [
                ["[Head of Conversion](https://jobs.ashbyhq.com/viktor/a6c84161-2162-4926-aebe-b77002593166)", "Growth", "Not disclosed", "Warsaw or other EU cities; NYC second", "May 3"],
                ["[Product Marketing Manager](https://jobs.ashbyhq.com/viktor/fbc8f479-0579-4f1d-a7fc-09b8994ce1c5)", "Growth", "Not disclosed", "Warsaw or NYC", "May 13"],
                ["[Community Manager](https://jobs.ashbyhq.com/viktor/75622999-77c5-45cf-a908-828be23d1153)", "Growth", "Not disclosed", "Warsaw or NYC", "Jun 1"],
                ["[Social Media Manager](https://jobs.ashbyhq.com/viktor/42d719bd-5fc5-4f3f-871f-540fdcce8f93)", "Growth", "Not disclosed", "Warsaw or NYC", "Jun 1"],
                ["[Performance Marketing Lead (Google Ads)](https://jobs.ashbyhq.com/viktor/90f377f3-5256-4e8d-86d2-7c99dda0760a)", "Growth", "Not disclosed", "Warsaw", "Jul 21"],
                ["[Performance Marketing Specialist (Google Ads)](https://jobs.ashbyhq.com/viktor/96a8f957-65ef-4c63-80fb-d234f52af418)", "Growth", "Not disclosed", "Warsaw", "Jul 21"],
                ["[Lifecycle Manager](https://jobs.ashbyhq.com/viktor/6f795cf0-8cd0-41ec-ae0c-0d9d80d17788)", "Growth", "Not disclosed", "Warsaw, Dublin or NYC", "Jul 29"],
                ["[Senior Video Editor (Performance Creative)](https://jobs.ashbyhq.com/viktor/26312e5f-15e2-4a9b-b11d-31fa0d3c2790)", "Creative", "Not disclosed", "Warsaw", "Aug 10"],
                ["[Founding Account Executive (Europe)](https://jobs.ashbyhq.com/viktor/397b8d80-6796-42e2-bdb6-2afb73122ede)", "Sales", "Not disclosed", "Warsaw or Dublin", "Apr 13"],
                ["[Founding Account Executive (US)](https://jobs.ashbyhq.com/viktor/042fe81b-17e7-4de7-8d41-6a4000ab4dea)", "Sales", "$100K to 270K (LinkedIn version)", "New York", "Jul 21"],
                ["[Customer Success Manager](https://jobs.ashbyhq.com/viktor/8d4a478f-4512-4819-912c-826d52470be4)", "Sales", "Not disclosed", "Warsaw or Dublin", "May 22"],
                ["[Support Specialist](https://jobs.ashbyhq.com/viktor/e12bb64f-c3c0-460f-9d9e-be020dba5d2d)", "Sales", "Not disclosed", "Warsaw or Dublin", "Jul 14"],
                ["[Agent Harness Engineer (On-site)](https://jobs.ashbyhq.com/viktor/d5d2d0fa-e10d-42f9-a2fb-384274b4f3e8)", "Product & Engineering", "Not disclosed", "Warsaw or Munich", "Apr 29"],
                ["[Agent Harness Engineer (Remote)](https://jobs.ashbyhq.com/viktor/c750869a-1859-4339-bfc9-161a9ee2dc9f)", "Product & Engineering", "Not disclosed", "Remote, Europe only", "Apr 29"],
                ["[Product Engineer](https://jobs.ashbyhq.com/viktor/9047eb98-7826-42f6-ac76-e6e41da5779a)", "Product & Engineering", "Not disclosed", "Warsaw or Munich", "Jun 19"],
                ["[Backend Engineer](https://jobs.ashbyhq.com/viktor/143f3943-33ab-4614-87b8-8435517d8830)", "Product & Engineering", "Not disclosed", "Warsaw or Munich", "Jun 22"],
                ["[Growth Analytics Engineer](https://jobs.ashbyhq.com/viktor/a53cb9dd-c899-4086-b0c3-b686551f45f4)", "Product & Engineering", "Not disclosed", "Warsaw or Munich", "May 3, re-posted Aug 11"],
                ["[Product Manager](https://jobs.ashbyhq.com/viktor/1b446e5b-f08b-403f-8eb5-e1daef065012)", "Product & Engineering", "Not disclosed", "Warsaw or Munich", "Apr 27"],
                ["[Product Designer](https://jobs.ashbyhq.com/viktor/bda542f5-d0c7-4eec-a7c0-78d7b6e1fb35)", "Product & Engineering", "Not disclosed", "Warsaw or Munich", "Jun 2"],
                ["[Senior Performance & Marketing Designer](https://jobs.ashbyhq.com/viktor/9e8a99be-3f95-46b9-baf5-9d005a510502)", "Product & Engineering", "Not disclosed", "Warsaw or Munich", "Aug 18"],
                ["[Junior Performance & Marketing Designer](https://jobs.ashbyhq.com/viktor/def2dde8-a8b5-4526-b2dc-b3a1f19ac0bb)", "Product & Engineering", "Not disclosed", "Warsaw or Munich", "Aug 24"],
                ["[Senior Designer (Web)](https://builtin.com/job/senior-designer-web/10293196)", "Design", "Not disclosed", "Warsaw or Munich", "Jul 21, re-posted Aug 27"],
                ["[Founding Recruiter (Non-Tech)](https://jobs.ashbyhq.com/viktor/c35254c4-f76f-43de-9bfd-04276d6f7313)", "Operations", "Not disclosed", "Warsaw", "Jun 25"],
                ["[Talent Operations](https://jobs.ashbyhq.com/viktor/a77de559-9c42-46c2-a101-0b975b75f122)", "Operations", "Not disclosed", "Warsaw", "Jul 21"],
                ["[Operations](https://jobs.ashbyhq.com/viktor/f4ab93a5-d814-4e39-9c0f-37880a25ad67)", "Operations", "Not disclosed", "Warsaw", "Apr 13"],
                ["[Operations Engineer](https://jobs.ashbyhq.com/viktor/78c742fc-7c20-457c-a026-4beb16a97940)", "Operations", "Not disclosed", "Warsaw", "Jul 29"],
                ["[Executive Assistant](https://jobs.ashbyhq.com/viktor/7a914013-4186-449b-ac3e-0bea3e03a243)", "Operations", "Not disclosed", "Warsaw", "May 11"],
              ],
            },
            {
              type: "note",
              text: "Checked against Viktor's job board Aug 27, 2026. None lists a salary except the New York LinkedIn post. [[ashby]] [[linkedin-jobs]]",
            },
            { type: "h3", text: "Who joined" },
            {
              type: "p",
              text: "Announced: Robbie O'Connor, Chief Revenue Officer (Jul 29; ex-Google, Dropbox, Asana, Notion), Matt Swulinski, Head of Growth (Aug 6; from Wispr Flow), Michael Matloka, Product Engineer (Aug 19; PostHog's fifth employee). About a dozen more joined quietly since June: engineers, a data engineer, a founding salesperson, a partnerships hire in Dublin, a recruiter. LinkedIn's count went from 40 to 50 in six weeks; real staff is about 37 to 40, with 26 in Poland and 8 in the US. [[linkedin]] [[linkedin-viktor-people]]",
            },
            { type: "h3", text: "Adapt's side" },
            {
              type: "table",
              headers: [{ text: "Job", w: "26%" }, { text: "Location", w: "16%" }, { text: "Salary", n: true, w: "12%" }, { text: "Notes" }],
              rows: [
                ["[Account Executive](https://ats.rippling.com/adapt/jobs/0a7c6983-469b-45d1-aa7b-7e4be1498310)", "San Francisco, in office", "Not disclosed; the form asks for \"desired annual salary\"", "Created Sep 2025, re-posted Feb 3; 38 applicants. Deals of $10K to 50K a year, 8 to 12 week sales cycle, 4-week pilots. The form asks for a GitHub link."],
                ["Product Specialist", "San Francisco", "Not disclosed", "Only visible in ZipRecruiter's index; the page itself is blocked"],
                ["General Application: Exceptional Talent", "San Francisco", "Not disclosed", "Only visible in ZipRecruiter's index"],
              ],
            },
            {
              type: "p",
              text: "Adapt has no careers page. Its LinkedIn lists 19 people; minus advisors and investors that's about 13 staff: 7 in engineering, 5 in business development, 3 in sales, all in San Francisco five days a week. Nine joined in 2026 without a public job ad, including a VP of Product and Engineering (April) and a Solutions Architect (August). Neither company has reviews on Glassdoor, Indeed or Blind. [[adapt-company]] [[linkedin-adapt]] [[rippling]]",
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
            "Data tools, pulled Aug 27, 2026 via Apify: [[semrush]] (search terms, traffic, share of brand-name searches, and AI-assistant citations, US and worldwide), [[spyfu]] (May to August history of free and paid search terms, estimated ad budgets, ad history), [[ahrefs]] (links from other sites, link-strength score, search traffic history), [[similarweb]] and [[similarweb-adapt]] (website visits, where visitors come from, countries, search terms), [[google-ads-transparency]] (Google's public record of every ad a company has run), [[keyword-planner]] (Google's own monthly search counts and cost-per-click estimates).",
            "Viktor's own pages: [pricing](https://viktor.com/pricing), [changelog](https://viktor.com/changelog), [blog](https://viktor.com/blog), [security](https://viktor.com/security), [creator program](https://viktor.com/creators), [ways to earn](https://viktor.com/ways-to-earn), [implementation specialists](https://viktor.com/experts), [law-firm page](https://viktor.com/for/legal), [Strategy Breakdowns partner page](https://viktor.com/partners/strategy-breakdowns), [job board](https://jobs.ashbyhq.com/viktor), [[slack-marketplace]].",
            "Adapt's own pages: [pricing](https://adapt.com/pricing), [changelog](https://adapt.com/changelog), [security](https://adapt.com/security), [compare: Viktor](https://adapt.com/compare/viktor), [customers](https://adapt.com/customers), [company](https://adapt.com/company), [AI workflows post](https://adapt.com/blog/ai-workflows), [job board](https://ats.rippling.com/adapt/jobs).",
            "Reviews, press and teardowns: [[g2]], [[product-hunt]], [[product-hunt-adapt]], [[hacker-news]], [Fortune on the funding round](https://fortune.com/2026/05/19/viktor-ai-startup-raises-75-million-for-virtual-coworker-exclusive/), [Next Play on joining Viktor](https://nextplayso.substack.com/p/should-you-join-viktor), [[latka]], [thisandthat review](https://www.thisandthat.chat/blog/viktor-review-2026/), [SaaS CRM Review](https://saascrmreview.com/viktor-review/), [Chief Marketing Dad](https://chiefmarketingdad.com/blogs/learn/viktor-ai-review), [Built In listing](https://builtin.com/job/senior-designer-web/10293196), [VentureBeat on Claude Tag](https://venturebeat.com/orchestration/anthropics-new-claude-tag-update-lets-its-slack-agent-read-the-full-conversation-and-jump-in-unprompted), [Slack on Add to Slack](https://slack.com/blog/news/add-to-slack).",
            "Social, Aug 6 to 26: [X search](https://x.com/search?q=viktor.com%20OR%20%22viktor%20ai%22%20OR%20%40viktor_com&f=live), [@viktor_com](https://x.com/viktor_com), [@frydwia](https://x.com/frydwia), [@Adapt](https://x.com/Adapt), [@jim_benton](https://x.com/jim_benton), [[linkedin]], [[linkedin-adapt]], [[instagram]], [[youtube-getviktor]], [[youtube-adapt]], [[tiktok-getviktor]].",
            "Ads and video, pulled Aug 26 to 27, 2026 via Apify: [[meta-ad-library]] (238 running ads for the Viktor page: launch dates, formats, landing pages, wording), [[tiktok-search|TikTok search results for \"viktor ai employee\"]] (44 relevant videos after removing the language app and the video-game character), [[youtube-search|YouTube search results]] (40 relevant videos), [[instagram]] posts tagged #getviktor and #viktorai.",
            "Social, pulled Aug 27, 2026 via Apify: [[x|X, latest 300 posts]] for viktor.com / \"viktor ai\" / @viktor_com (236 relevant, Aug 6 to 26) and 60 for Adapt (1 relevant); [[reddit|Reddit]] exact-name search for both companies since Jul 20 (0 posts); [[linkedin-jobs|LinkedIn jobs and company pages]] for both companies; [[x-adapt|Adapt's X profile and posts]].",
          ],
        },
      ],
    },
  ],
  footer:
    "Traffic, search and ad-spend figures are estimates from outside tools and disagree by up to two to one; trust the shapes, not the exact numbers. Revenue figures are unaudited. Data pulled Aug 26 to 27, 2026 via Apify. Compiled Aug 27, 2026.",
  sources: {
    semrush: { label: "Semrush", href: "https://www.semrush.com/analytics/overview/?q=viktor.com&searchType=domain", logo: "semrush" },
    spyfu: { label: "SpyFu", href: "https://www.spyfu.com/overview/domain?query=viktor.com", logo: "spyfu" },
    ahrefs: { label: "Ahrefs", href: "https://ahrefs.com/traffic-checker/?input=viktor.com&mode=subdomains", logo: "ahrefs" },
    "ahrefs-adapt": { label: "Ahrefs", href: "https://ahrefs.com/traffic-checker/?input=adapt.com&mode=subdomains", logo: "ahrefs" },
    similarweb: { label: "Similarweb", href: "https://www.similarweb.com/website/viktor.com/", logo: "similarweb" },
    "similarweb-adapt": { label: "Similarweb", href: "https://www.similarweb.com/website/adapt.com/", logo: "similarweb" },
    "google-ads-transparency": {
      label: "Google Ads Transparency",
      href: "https://adstransparency.google.com/?region=anywhere&domain=viktor.com",
      logo: "google-ads-transparency",
    },
    "keyword-planner": {
      label: "Google Keyword Planner",
      href: "https://ads.google.com/aw/keywordplanner/home",
      logo: "google",
    },
    "meta-ad-library": {
      label: "Meta Ad Library",
      href: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&view_all_page_id=973849642483367",
      logo: "meta-ad-library",
    },
    "viktor-pricing": { label: "Viktor", href: "https://viktor.com/pricing", logo: "viktor" },
    "viktor-changelog": { label: "Viktor", href: "https://viktor.com/changelog", logo: "viktor" },
    "viktor-blog": { label: "Viktor", href: "https://viktor.com/blog", logo: "viktor" },
    "viktor-security": { label: "Viktor", href: "https://viktor.com/security", logo: "viktor" },
    "viktor-creators": { label: "Viktor", href: "https://viktor.com/creators", logo: "viktor" },
    "viktor-ways-to-earn": { label: "Viktor", href: "https://viktor.com/ways-to-earn", logo: "viktor" },
    "viktor-experts": { label: "Viktor", href: "https://viktor.com/experts", logo: "viktor" },
    "viktor-strategy-breakdowns": { label: "Viktor", href: "https://viktor.com/partners/strategy-breakdowns", logo: "viktor" },
    "adapt-pricing": { label: "Adapt", href: "https://adapt.com/pricing", logo: "adapt" },
    "adapt-changelog": { label: "Adapt", href: "https://adapt.com/changelog", logo: "adapt" },
    "adapt-security": { label: "Adapt", href: "https://adapt.com/security", logo: "adapt" },
    "adapt-company": { label: "Adapt", href: "https://adapt.com/company", logo: "adapt" },
    "adapt-customers": { label: "Adapt", href: "https://adapt.com/customers", logo: "adapt" },
    "adapt-compare-viktor": { label: "Adapt", href: "https://adapt.com/compare/viktor", logo: "adapt" },
    "adapt-blog-workflows": { label: "Adapt", href: "https://adapt.com/blog/ai-workflows", logo: "adapt" },
    "slack-marketplace": {
      label: "Slack Marketplace",
      href: "https://slack.com/marketplace/A0A2VN5TR5K-viktor",
      logo: "slack",
    },
    g2: { label: "G2", href: "https://www.g2.com/products/viktor-com/reviews", logo: "g2" },
    "product-hunt": { label: "Product Hunt", href: "https://www.producthunt.com/products/viktor", logo: "product-hunt" },
    "product-hunt-adapt": { label: "Product Hunt", href: "https://www.producthunt.com/products/adapt-3", logo: "product-hunt" },
    "hacker-news": { label: "Hacker News", href: "https://news.ycombinator.com/item?id=47409885", logo: "hacker-news" },
    latka: { label: "Latka", href: "https://getlatka.com/companies/viktor", logo: "latka" },
    thisandthat: { label: "thisandthat", href: "https://www.thisandthat.chat/blog/viktor-review-2026/", logo: "thisandthat" },
    saascrmreview: { label: "SaaS CRM Review", href: "https://saascrmreview.com/viktor-review/", logo: "saascrmreview" },
    chiefmarketingdad: {
      label: "Chief Marketing Dad",
      href: "https://chiefmarketingdad.com/blogs/learn/viktor-ai-review",
      logo: "chiefmarketingdad",
    },
    ashby: { label: "Ashby", href: "https://jobs.ashbyhq.com/viktor", logo: "ashby" },
    builtin: { label: "Built In", href: "https://builtin.com/job/senior-designer-web/10293196", logo: "builtin" },
    rippling: { label: "Rippling", href: "https://ats.rippling.com/adapt/jobs", logo: "rippling" },
    "linkedin-jobs": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/jobs/view/founding-account-executive-us-at-viktor-com-4438752232",
      logo: "linkedin",
    },
    linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/company/viktor_com/posts/", logo: "linkedin" },
    "linkedin-viktor-people": { label: "LinkedIn", href: "https://www.linkedin.com/company/viktor_com/people/", logo: "linkedin" },
    "linkedin-adapt": { label: "LinkedIn", href: "https://www.linkedin.com/company/adaptcom/", logo: "linkedin" },
    "linkedin-benton": {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/benton_were-moving-from-asking-what-ai-do-you-ugcPost-7493747782290206720-YWrC",
      logo: "linkedin",
    },
    x: { label: "X", href: "https://x.com/search?q=viktor.com%20OR%20%22viktor%20ai%22%20OR%20%40viktor_com&f=live", logo: "x" },
    "x-adapt": { label: "X", href: "https://x.com/Adapt", logo: "x" },
    "x-viktor-com": { label: "X", href: "https://x.com/viktor_com", logo: "x" },
    "x-dierre": { label: "X", href: "https://x.com/dierre/status/2082671414281191634", logo: "x" },
    "x-infeld": { label: "X", href: "https://x.com/norbertbodziony/status/2085671141247488332", logo: "x" },
    "x-pshenianykov": { label: "X", href: "https://x.com/pshenianykov/status/2090311550364225565", logo: "x" },
    "x-asapdar": { label: "X", href: "https://x.com/asapdar/status/2090331762996269418", logo: "x" },
    reddit: { label: "Reddit", href: "https://www.reddit.com/search/?q=%22viktor.com%22&sort=new&t=month", logo: "reddit" },
    instagram: { label: "Instagram", href: "https://www.instagram.com/meet.viktor", logo: "instagram" },
    "tiktok-getviktor": { label: "TikTok", href: "https://www.tiktok.com/@getviktor", logo: "tiktok" },
    "tiktok-search": { label: "TikTok", href: "https://www.tiktok.com/search?q=viktor%20ai%20employee", logo: "tiktok" },
    "tiktok-thepmfguy": { label: "TikTok", href: "https://www.tiktok.com/@thepmfguy/video/7639886206251109646", logo: "tiktok" },
    "youtube-search": {
      label: "YouTube",
      href: "https://www.youtube.com/results?search_query=viktor+ai+employee+review",
      logo: "youtube",
    },
    "youtube-getviktor": { label: "YouTube", href: "https://www.youtube.com/@getviktor_com", logo: "youtube" },
    "youtube-adapt": { label: "YouTube", href: "https://www.youtube.com/@adaptdotcom", logo: "youtube" },
  },
};
