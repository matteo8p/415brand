import type { Brief } from "./types";

export const openrouter: Brief = {
  slug: "openrouter",
  title: "OpenRouter weekly brief: brand & competitive analysis",
  sub: "For the Experiential Labs team, August 28, 2026",
  subject: "OpenRouter",
  client: "Experiential",
  intro: [
    { type: "h3", text: "Scorecard" },
    {
      type: "scorecard",
      rows: [
        {
          metric: "Monthly website visits",
          primary: "19.2M",
          us: "below the floor",
          change: "OpenRouter grew 11% last month and sits at number 2,023 in the world. Experiential sits at number 4,022,818, which is low enough that Similarweb will not publish a visit count at all. This is a standing start, not a decline.",
          tone: "neutral",
        },
        {
          metric: "Share of visitors who arrive from free Google results",
          primary: "second source, behind 59% direct",
          us: "second source, behind 75% direct",
          change: "Similarweb ranks free Google results second for both companies and does not publish the exact share for either. Both are mostly visited by people who already know the name and type it in.",
          tone: "neutral",
        },
        {
          metric: "Search terms it pays Google to show up for (US)",
          primary: "0",
          us: "0",
          change: "Similarweb puts paid search at under 0.01% of OpenRouter's traffic and 0% of Experiential's. Neither company buys a single search term. The whole category is unbought.",
          tone: "good",
        },
        {
          metric: "Estimated monthly Google Ads spend (US)",
          primary: "$0",
          us: "$0",
          change: "A company worth over $7B spends nothing on search ads. It does not need to. Its name is the search term.",
          tone: "neutral",
        },
        {
          metric: "Different Google searches it shows up in for free (worldwide)",
          primary: "49,700",
          us: "3",
          change: "Experiential ranks for \"experiential labs\", \"kion fallah\" and \"resolute labs\". That is the entire list. OpenRouter's top terms include \"janitor ai\", a roleplay site whose users route through it.",
          tone: "bad",
        },
        {
          metric: "Business software review sites (average rating)",
          primary: "no G2 page",
          us: "no G2 page",
          change: "Neither company is listed on G2. For developer tools the equivalent venues are GitHub and Hacker News, and both are covered in their own rows below.",
          tone: "neutral",
        },
        {
          metric: "Facebook and Instagram ads running right now",
          primary: "0",
          us: "0",
          change: "Twelve active US ads mention OpenRouter by name. None of them are OpenRouter's. Seven different companies are advertising against it, and OpenRouter is not answering.",
          tone: "good",
        },
        {
          metric: "Of those ads, how many are made by creators rather than the company",
          primary: "0 of 12",
          us: "0",
          change: "There is no creator or referral program on either side. Every ad mentioning OpenRouter was bought by another company selling something.",
          tone: "neutral",
        },
        {
          metric: "TikTok followers on the company's own account",
          primary: "no brand account",
          us: "no brand account",
          change: "Neither company is on TikTok. Similarweb puts YouTube first among the sites sending social traffic to OpenRouter, ahead of X and Reddit.",
          tone: "neutral",
        },
        {
          metric: "Posts about it on X per day",
          primary: "about 709",
          us: "under 1",
          change: "Measured from 200 posts pulled in the 2 hours and 22 minutes to 07:15 UTC on Aug 28, then scaled to a day. Volume is driven by model launches, not by OpenRouter posting.",
          tone: "bad",
        },
        {
          metric: "X posts that complain, mention switching, or ask for an alternative",
          primary: "6 of the 70 most recent (9%)",
          us: "0",
          change: "Complaints cluster on three things: quantized models served without warning, rate limits, and the redesigned dashboard. Viktor-style paid praise does not exist here, so the complaint share is real.",
          tone: "good",
        },
        {
          metric: "Reddit posts mentioning it since Aug 26",
          primary: "100 in 40 hours",
          us: "0",
          change: "100 is the scraper's cap, so the real number is higher. r/openrouter alone has 18,328 subscribers. Experiential appears in none of them.",
          tone: "bad",
        },
        {
          metric: "LinkedIn followers",
          primary: "30,883",
          us: "not published",
          change: "OpenRouter was at 25,936 ten months ago. Experiential's page exists but does not publish a count. The YC page lists a team of 2.",
          tone: "neutral",
        },
        {
          metric: "Open jobs",
          primary: "23",
          us: "0",
          change: "All 23 are remote in the US. 11 of them are sales and marketing, 9 are engineering. OpenRouter is hiring a go-to-market team, not a research team.",
          tone: "neutral",
        },
      ],
    },
    { type: "h3", text: "Recommended actions for Experiential from the analysis" },
    {
      type: "moves",
      collapsed: true,
      items: [
        {
          action: "Publish a page that shows what OpenRouter's 5.5% credit fee and 5% BYOK fee cost at real spend levels, and answer the caching question on it.",
          why: "OpenRouter's own FAQ says it charges 5.5% with an $0.80 minimum on every credit purchase, and 5% of list price on bring-your-own-key traffic above $25,000 a month. At $100,000 a month of routed spend that is $5,500 in credit fees. Experiential charges $0.00 per token and says so on its pricing page. The gap is arithmetic, not opinion, and it is the single fact people already repeat on X and Reddit. Two commenters on Experiential's own Show HN said caching is the thing they would want answered before switching, so the same page has to cover it.",
          evidence: "pricing",
        },
        {
          action: "Buy the search terms describing the problem, starting with the ones MixRoute and Squidcode are already paying Meta for.",
          why: "Nobody bids on this category. Similarweb shows $0 of paid search from OpenRouter and $0 from Experiential. Meanwhile MixRoute launched Facebook ads on Aug 27 using the exact words Experiential's pricing page uses, and Squidcode has been running \"Open-weight code review. Zero markup\" since Jul 28. Search terms like \"openrouter alternative\" and \"llm gateway zero markup\" are cheap because the category leader has never bid on anything. Start at a few hundred dollars a month and measure signups, not clicks.",
          evidence: "search",
        },
        {
          action: "Answer the ten live posts in the table below, in the threads, with the fee arithmetic and a link to the repo.",
          why: "There are about 709 posts a day on X mentioning OpenRouter and at least 100 Reddit posts in the last 40 hours. Nine percent of the recent X posts are complaints. One Reddit thread is literally titled \"10 USD crdit cost 13.18 USD... what I've done wrong?\" and has 12 comments. These people have already decided the fee is a problem and are asking in public what to do about it. r/openrouter has 18,328 subscribers and no rule against naming alternatives. This costs an hour a day and nothing else.",
          evidence: "advertising",
        },
        {
          action: "Ship the caching feature into the free tier and say so, because it is the one gap the Show HN comments found.",
          why: "Experiential's pricing page lists caching under Enterprise only, alongside per-prompt optimization and the owned model. On the Show HN thread, Areibman asked how caching works and akshay_akula wrote that it is the question to answer before swapping models. Silen Naihin's answer was that the router rarely switches, which sidesteps the concern rather than removing it. OpenRouter has no caching product either, so this is a gap that can be closed first rather than a feature to match.",
          evidence: "pricing",
        },
      ],
    },
    { type: "h3", text: "Posts worth replying to this week" },
    {
      type: "table",
      headers: [
        { text: "Where", w: "13%", nw: true },
        { text: "Date", w: "7%", nw: true },
        { text: "Post" },
        { text: "Reach", w: "13%", nw: true },
      ],
      rows: [
        [
          "X",
          "Aug 17",
          "[Mujtaba launches Straitly, a 0% markup gateway, with the line \"We just killed OpenRouter\"](https://x.com/Mutchtaba2/status/2089385271896822197)",
          "1,411 likes, 370 replies",
        ],
        [
          "X",
          "Aug 17",
          "[\"Stripe reportedly buys OpenRouter for $7 Billion. I think their orchestration is easy to replicate and switch from. And there's very little moat.\"](https://x.com/aleabitoreddit/status/2089148883838611460)",
          "945 likes, 112 replies",
        ],
        [
          "Reddit",
          "Aug 27",
          "[r/vibecoding: \"The LLM Model War Is Over - Time to stop obsessing over models\"](https://www.reddit.com/r/vibecoding/comments/1vzuo7o/the_llm_model_war_is_over_time_to_stop_obsessing/)",
          "61 points, 74 comments",
        ],
        [
          "X",
          "Aug 19",
          "[Mujtaba reports $13.3M in pledged annual token spend 48 hours after launching the 0% markup pitch](https://x.com/Mutchtaba2/status/2090107278137692592)",
          "226 likes, 24 replies",
        ],
        [
          "Reddit",
          "Aug 27",
          "[r/openrouter: \"10 USD crdit cost 13.18 USD... what I've done wrong?\"](https://www.reddit.com/r/openrouter/comments/1w017pf/10_usd_crdit_cost_1318_usd_what_ive_done_wrong/)",
          "6 points, 12 comments",
        ],
        [
          "Reddit",
          "Aug 26",
          "[r/openrouter: \"Is OpenRouter's $10 verification actually worth it for using free models in a small production app?\"](https://www.reddit.com/r/openrouter/comments/1vz4477/is_openrouters_10_verification_actually_worth_it/)",
          "5 points, 3 comments",
        ],
        [
          "Reddit",
          "Aug 27",
          "[r/DeepSeek: \"Deepseek on Open Router is feeling drunk and dumbed down.\"](https://www.reddit.com/r/DeepSeek/comments/1vzye2p/deepseek_on_open_router_is_feeling_drunk_and/)",
          "3 points, 6 comments",
        ],
        [
          "X",
          "Aug 28",
          "[\"Openrouter is terrible! I did deepseek with them and got garbage at the end of the response likely routed to some cheap ultra quanticized version!\"](https://x.com/iamboingist/status/2093222196059725948)",
          "Reply in a live thread",
        ],
        [
          "Reddit",
          "Aug 27",
          "[r/openrouter: \"Why do Structured outputs always fail (except OpenAI)\"](https://www.reddit.com/r/openrouter/comments/1vzlcj8/why_do_structured_outputs_always_fail_except/)",
          "3 points, 4 comments",
        ],
        [
          "X",
          "Aug 28",
          "[\"@OpenRouter's new ui is so much worse than previous one... it feels like it was vibe coded\"](https://x.com/NiravJ3/status/2093208171250860265)",
          "Live, screenshot attached",
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
                "Stripe agreed to buy OpenRouter for more than $7B, and OpenRouter's own co-founder confirmed it in public, which turns a competitor into a payments company's product line.",
              body: [
                {
                  type: "p",
                  text: "Bloomberg reported on Aug 17 that Stripe had finalized an agreement to acquire OpenRouter for more than $7 billion [[bloomberg]]. Two days later Deedy Das, a partner at Menlo Ventures and an OpenRouter backer, posted \"I can now officially say it: OpenRouter is being acquired by Stripe\" and called it one of the fastest acquisitions of this scale in history, almost exactly three years after founding [[x-deedy]]. OpenRouter raised a $113M Series B at $1.3B in May, so the sale price is more than five times a valuation set 82 days earlier [[x-vaibhav]]. The Information is running paid Facebook ads arguing the price carries a steep premium against comparable deals [[meta-ads]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** An acquired company spends the next year on integration, not on shipping. The 23 open roles are 11 sales and marketing jobs and zero research jobs, which is what a company being absorbed hires for. Experiential should say out loud, on its own pages, that the open source gateway is the one that cannot be bought out from under a customer.",
                },
              ],
            },
            {
              claim:
                "OpenRouter charges 5.5% on every credit purchase and 5% on bring-your-own-key traffic above a cap, and it publishes both numbers itself.",
              body: [
                {
                  type: "p",
                  text: "OpenRouter's FAQ states the fee plainly: 5.5% with an $0.80 minimum when you buy credits, 5% for crypto payments [[or-faq]]. Bringing your own provider keys is not free either. Pay-as-you-go includes $25,000 a month of list-price inference with no BYOK fee, Enterprise includes $200,000, and everything above the allowance is charged at 5% of what the same call would have cost on OpenRouter [[or-faq]]. Credits expire after one year and refunds are only available within 24 hours [[or-faq]]. There are no volume discounts [[or-faq]]. Experiential's pricing page says the markup is 0% on both the Free and Enterprise plans and answers the question directly: \"We add $0.00 per token\" [[xp-pricing]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** This is the whole pitch and it is not a claim, it is arithmetic from OpenRouter's own documentation. At $100,000 a month of routed spend the fee is $5,500. Put that table on the pricing page and link OpenRouter's FAQ next to it so nobody has to take Experiential's word for it.",
                },
              ],
            },
            {
              claim:
                "Nobody in this category buys search ads, and Experiential ranks for exactly three Google searches.",
              body: [
                {
                  type: "p",
                  text: "Similarweb puts paid search at under 0.01% of OpenRouter's 19.2M monthly visits and at 0% for Experiential [[similarweb-or]] [[similarweb-xp]]. OpenRouter shows up in 49,700 different free Google searches. Experiential shows up in three: \"experiential labs\", \"kion fallah\" and \"resolute labs\" [[similarweb-xp]]. OpenRouter's own top search terms are mostly its name, plus \"janitor ai\", a roleplay site whose users route through it [[similarweb-or]]. Experiential has one referring website. OpenRouter has 274, led by ycombinator.com at 4% and nvidia.com at 3.4% [[similarweb-or]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** A category where the $7B leader has never bought a single keyword is a category where a few hundred dollars a month buys the top of the page. Buy \"openrouter alternative\", \"llm gateway zero markup\" and \"open source ai gateway\" this week and measure signups.",
                },
              ],
            },
            {
              claim:
                "Seven companies are running Facebook ads that name OpenRouter, and one of them uses Experiential's exact pitch.",
              body: [
                {
                  type: "p",
                  text: "A US keyword search of the Meta Ad Library for \"openrouter\" returns about 12 active ads and none of them belong to OpenRouter [[meta-ads]]. MixRoute launched two on Aug 27 with copy that reads \"You're routing AI API calls through a middleman that charges 5.5% on every credit purchase... Same models, same price, 0% markup\" and \"Swap your base URL and you're done in 5 minutes\" [[meta-ads]]. Squidcode has run \"Open-weight code review. Zero markup. Your OpenRouter key\" since Jul 28 [[meta-ads]]. Gate AI, WPCodeBox and The Information make up the rest. On X, a gateway called Straitly launched on Aug 17 with \"We just killed OpenRouter\" and reported $13.3M in pledged annual token spend within 48 hours [[x-straitly]] [[x-straitly-results]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** The zero-markup wedge works, and other people are proving it with money. What none of them have is an Apache-2.0 repo, 592 stars and a Show HN on the front page. Experiential should run the same ad copy and add the one line the others cannot say, which is that you can read the code your traffic flows through.",
                },
              ],
            },
            {
              claim:
                "OpenRouter is hiring 23 people, 11 of them in sales and marketing and none in research, while Experiential has two people and no open roles.",
              body: [
                {
                  type: "p",
                  text: "OpenRouter's Ashby board lists 23 full-time remote US roles [[or-jobs]]. Eleven sit under Go To Market, including a Director of Business Development, a Director of Channel Partnerships, a Director of Revenue Operations and an Enterprise Account Executive [[or-jobs]]. Nine are engineering, and even those lean operational: AI Provider Operations and Support Engineer, Third-Party Risk Analyst, Partner Development Manager [[or-jobs]]. There is one marketing role and one product role. Experiential's YC page lists a team of 2 and no jobs [[yc-company]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** OpenRouter is building an enterprise sales motion, which means its attention moves upmarket and away from the individual developer who found it through a Reddit thread. That developer is the one reading Show HN. Keep shipping to that person and let OpenRouter walk away from them.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing and product",
      blocks: [
        {
          type: "fig",
          panels: [
            {
              cap: "What OpenRouter's credit fee costs per month",
              sub: "5.5% of every credit purchase, from OpenRouter's own FAQ. Experiential charges $0 at every level.",
              chart: {
                kind: "rows",
                rows: [
                  ["$10K routed", 550],
                  ["$50K routed", 2750],
                  ["$100K routed", 5500],
                  ["$250K routed", 13750],
                  ["$500K routed", 27500],
                ],
                fmt: "usd",
                labelAll: true,
                aria:
                  "OpenRouter's 5.5% credit purchase fee at five monthly spend levels, from $550 on $10,000 to $27,500 on $500,000.",
              },
            },
            {
              cap: "GitHub stars on open source gateways",
              sub: "Experiential is the youngest by two years. LiteLLM is the incumbent to displace, not OpenRouter.",
              chart: {
                kind: "rows",
                rows: [
                  ["LiteLLM", 57451, "other"],
                  ["Portkey", 12842, "other"],
                  ["Bifrost", 7609, "other"],
                  ["Helicone", 6106, "other"],
                  ["Experiential", 592, "us"],
                ],
                fmt: "num",
                labelAll: true,
                aria:
                  "GitHub stars: LiteLLM 57,451, Portkey 12,842, Bifrost 7,609, Helicone 6,106, Experiential 592.",
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
                "OpenRouter's fee structure has three separate charges and its marketing only mentions that there is no markup on tokens.",
              body: [
                {
                  type: "p",
                  text: "The FAQ answer to \"How does OpenRouter make money?\" is one sentence: a small fee when purchasing credits, and never a markup on the underlying provider [[or-faq]]. That is true and it is also incomplete. The actual charges are 5.5% with an $0.80 minimum on credit purchases, 5% on crypto payments, and 5% of equivalent list price on bring-your-own-key traffic above $25,000 a month on pay-as-you-go or $200,000 on Enterprise [[or-faq]]. Credits expire after a year, refunds close after 24 hours, platform fees are never refundable, and there are no volume discounts [[or-faq]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** The gap between \"no markup on inference\" and \"5.5% on every dollar you load\" is where the Reddit thread titled \"10 USD crdit cost 13.18 USD\" comes from. Write the comparison as a table of OpenRouter's own sentences next to Experiential's, and let the reader do the subtraction.",
                },
              ],
            },
            {
              claim:
                "The Show HN thread found one real gap in Experiential's product, and it is caching.",
              body: [
                {
                  type: "p",
                  text: "Silen Naihin posted the repo to Hacker News on Aug 27 at 21:18 UTC. It is at 163 points and 26 comments [[hn-showhn]]. The first comment, from Areibman, asked how caching works, because cached input tokens are the main reason to stay on one model and swapping models could make cost \"balloon out of control\" [[hn-showhn]]. akshay_akula followed with \"Open source and no markup is the right default for a gateway. The caching question above is the one I would want answered before swapping models though\" [[hn-showhn]]. Naihin's answer was that the router rarely switches and often concludes that one model is already right for the task [[hn-showhn]]. Experiential's pricing page lists caching under Enterprise only [[xp-pricing]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** Two of the highest-voted comments name the same objection, which means it is the objection. Answer it in the docs this week and move caching into the free tier so the answer is a link rather than a paragraph.",
                },
              ],
            },
            {
              claim:
                "Experiential is behind on the security paperwork that enterprise buyers ask for, and the pricing page says so honestly.",
              body: [
                {
                  type: "p",
                  text: "The pricing page labels each enterprise feature as available today, on request, or planned [[xp-pricing]]. SOC 1 is available with the report on request. SSO with SAML and SCIM, advanced role controls, private networking, data residency, managed keys and approval workflows are all marked \"Contact us\" rather than shipped [[xp-pricing]]. Managed upgrades, managed optimization workers, and forecasting are marked planned [[xp-pricing]]. What does ship on the free plan is worth naming: budgets that stop requests at the cap, model allowlists per key, zero-data-retention-only routing, and provider keys that never reach the agent [[xp-pricing]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** Labeling gaps honestly is the right call and it will still lose deals against a Stripe-owned OpenRouter with a full compliance page. Lead with the controls that are already free and shipped, because budgets and allowlists are the two things a finance owner actually asks for first.",
                },
              ],
            },
            {
              claim:
                "The founders named the differentiator against LiteLLM in public, and it is not price.",
              body: [
                {
                  type: "p",
                  text: "On the Show HN thread, cheema33 asked how this differs from LiteLLM. Kion Fallah answered \"Router and model optimization from traffic is the main differentiator\" and Naihin added \"Also a hosted marketplace, not just BYOK\" [[hn-showhn]]. The YC launch post is blunter still: the product is a small model trained on your traffic that you own the weights to, guaranteed at 50% lower cost with the same or better quality, backed by an SLA, with some tasks measured at 97% lower cost [[yc-launch]]. Another commenter, ceroxylon, singled out sub-1ms BYOK gateway latency and the Tinker fine-tuning integration [[hn-showhn]]. Fallah replied that continual reinforcement learning through Tinker is coming [[hn-showhn]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** LiteLLM has 57,451 stars and 4,864 open issues, so the opening is quality of maintenance, not feature count. Say \"2 open issues\" next to \"4,864\" on the comparison page and let the number carry the argument.",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Experiential should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Publish a fee calculator page and link OpenRouter's FAQ as the source.",
              body: [
                {
                  type: "p",
                  text: "One page, one input box for monthly routed spend, two output numbers. At $100,000 a month it reads $5,500 on OpenRouter and $0 on Experiential [[or-faq]] [[xp-pricing]]. Underneath it, quote OpenRouter's own sentence about the BYOK allowance so nobody can call it a strawman. This is a day of work and it is the asset every one of the ten posts in the reply table needs a link to.",
                },
              ],
            },
            {
              claim: "Move caching out of Enterprise and into the free tier, then say so on Hacker News.",
              body: [
                {
                  type: "p",
                  text: "Two of the top comments on the Show HN asked about caching before anything else [[hn-showhn]]. It currently sits under Intelligence on the Enterprise column alongside per-prompt optimization and the owned model [[xp-pricing]]. OpenRouter does not sell a caching product at all, so shipping it free is not matching a feature, it is taking ground. Post the change as a reply in the original thread while it is still on the front page.",
                },
              ],
            },
            {
              claim: "Put the open-issue counts on the comparison page next to the star counts.",
              body: [
                {
                  type: "p",
                  text: "LiteLLM has 57,451 stars and 4,864 open issues [[gh-litellm]]. Bifrost has 7,609 stars and 960 open issues [[gh-bifrost]]. Portkey's gateway has 12,842 stars and has not been pushed to since May 25, which is 95 days [[gh-portkey]]. Experiential has 592 stars, 2 open issues and a push from this morning [[gh-xp]]. Stars measure history and issues measure the present, so show both.",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Fee comparison, in both companies' own words" },
            {
              type: "table",
              headers: [
                { text: "What is charged", w: "26%" },
                { text: "OpenRouter" },
                { text: "Experiential" },
              ],
              rows: [
                ["Markup on tokens", "None. Provider list price passed through.", "None. Provider list price passed through."],
                ["Fee on buying credits", "5.5%, $0.80 minimum. 5% for crypto.", "$0.00"],
                ["Fee on your own provider keys", "5% of list price above $25K/mo pay-as-you-go, $200K/mo Enterprise", "$0.00, free on every plan"],
                ["Volume discounts", "None offered", "Not applicable, there is no fee to discount"],
                ["Credit expiry", "Reserved right to expire after one year", "No credit product on the free plan"],
                ["Refunds", "24 hours, platform fees non-refundable, crypto never", "Not applicable"],
                ["Free model rate limits", "50 requests a day, 1,000 after buying 10 credits", "Provider limits only"],
                ["Prompt logging", "Zero by default. 1% discount to opt in to logging.", "Routes only to zero-retention providers by policy"],
                ["Self-hosting", "Not offered", "Whole gateway, uvx --from experiential exp run"],
                ["Source", "[[or-faq]]", "[[xp-pricing]]"],
              ],
            },
            {
              type: "p",
              text: "The honest reading of OpenRouter's pricing is that it is cheap and clearly documented. The FAQ does not hide anything and the fee is small relative to what most people spend. What it is not is zero, and it compounds with volume in exactly the range where a company starts caring. A team at $10,000 a month pays $550, which is noise. A team at $500,000 a month pays $27,500, which is a headcount [[or-faq]].",
            },
            { type: "h3", text: "What each company shipped this window" },
            {
              type: "table",
              headers: [
                { text: "Date", w: "8%", nw: true },
                { text: "Who", w: "13%", nw: true },
                { text: "What" },
              ],
              rows: [
                ["Aug 7", "Experiential", "YC launch post goes live, positioned as \"Turn your AI spend into a cheaper + better model you own\" [[yc-launch]]"],
                ["Aug 17", "OpenRouter", "Bloomberg reports the Stripe agreement at more than $7B [[bloomberg]]"],
                ["Aug 19", "OpenRouter", "Deedy Das confirms the acquisition publicly and publishes the founding story [[x-deedy]]"],
                ["Aug 26", "OpenRouter", "Ox Alpha, the stealth model that topped the rankings for a week, is revealed as Z.ai's GLM-5.3-Flash and pulled [[reddit-ox-alpha]]"],
                ["Aug 27", "Experiential", "Show HN posted at 21:18 UTC, reaches 163 points and 26 comments [[hn-showhn]]"],
                ["Aug 28", "OpenRouter", "Users report reasoning options missing from the dashboard after a redesign [[reddit-bug]]"],
                ["Aug 28", "Experiential", "Repo pushed again, 592 stars, 2 open issues [[gh-xp]]"],
              ],
            },
            { type: "h3", text: "Where Experiential's own pages are ahead of its marketing" },
            {
              type: "p",
              text: "The pricing page already contains the best sales argument on the site and it is buried in the FAQ at the bottom. The answer to \"Is there really no markup?\" reads: \"Tokens cost the provider's list price whether you route on credits or on your own keys. We add $0.00 per token; the paid product is the intelligence layer, not a percentage of your traffic\" [[xp-pricing]]. That is the sentence that should be at the top of the home page, next to the number 5.5%.",
            },
            {
              type: "p",
              text: "The self-hosting answer is the second one. \"The whole gateway, not a demo\" with a single command, uvx --from experiential exp run, covering the endpoint, key management, budgets, provider waterfalls and the usage API [[xp-pricing]]. OpenRouter offers no self-hosted option at all. For any buyer who just watched their gateway get acquired by a payments company, being able to run it themselves is not a nice-to-have.",
            },
          ],
        },
      ],
    },
    {
      id: "search",
      title: "Search and marketplaces",
      blocks: [
        {
          type: "fig",
          panels: [
            {
              cap: "Different Google searches each company appears in",
              sub: "Free results, worldwide. Experiential ranks for its own name, its founder's name, and one unrelated term.",
              chart: {
                kind: "rows",
                rows: [
                  ["OpenRouter", 49700, "primary"],
                  ["Experiential", 3, "us"],
                ],
                fmt: "num",
                labelAll: true,
                aria: "Organic keyword count: OpenRouter 49,700, Experiential 3.",
              },
              legend: [
                { series: "primary", label: "OpenRouter" },
                { series: "us", label: "Experiential" },
              ],
            },
            {
              cap: "Where OpenRouter's visitors are",
              sub: "Share of 19.2M monthly visits by country. The rest is spread across everywhere else.",
              chart: {
                kind: "rows",
                rows: [
                  ["United States", 16.69],
                  ["India", 9.91],
                  ["China", 8.24],
                  ["Germany", 4.03],
                  ["Russia", 3.68],
                ],
                fmt: "pct",
                labelAll: true,
                aria:
                  "OpenRouter visitor share by country: United States 16.69%, India 9.91%, China 8.24%, Germany 4.03%, Russia 3.68%.",
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
                "OpenRouter grew to 19.2M monthly visits without buying a single search term, because the category search is its brand name.",
              body: [
                {
                  type: "p",
                  text: "Similarweb puts openrouter.ai at 19.2M visits in July, up 11.26% on the month, ranked 2,023 in the world and 19th in AI chatbots and tools in the US [[similarweb-or]]. Traffic quality is high for an infrastructure site: 32.3% bounce, 7.72 pages per visit, 6 minutes 13 seconds average [[similarweb-or]]. The largest source is people typing the address in at 58.63%, free Google results are second, and paid search is under 0.01% [[similarweb-or]]. Its highest-volume search terms are \"openrouter\", \"open router\", \"openrouter api\" and \"janitor ai\", the roleplay site whose users route through it [[similarweb-or]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** Owning the brand search is not a strategy Experiential can copy in year one. What it can copy is the referral pattern. OpenRouter has 274 referring sites led by ycombinator.com, and Experiential already has the YC page and a Show HN, so the next step is the model-provider and framework docs pages that link OpenRouter today.",
                },
              ],
            },
            {
              claim:
                "Experiential ranks for three Google searches and has one referring website.",
              body: [
                {
                  type: "p",
                  text: "Similarweb ranks experientiallabs.ai at 4,022,818 in the world with no category rank and no published visit count [[similarweb-xp]]. Total keywords: three, being \"experiential labs\", \"kion fallah\" and \"resolute labs\" [[similarweb-xp]]. Visitors split 68% United States and 32% India, bounce is 58.63%, average visit is 22 seconds and 1.32 pages [[similarweb-xp]]. There is one referring website and one social network sending traffic, which is X [[similarweb-xp]]. The domain xplabs.ai, used in the YC launch post, redirects to the same site [[yc-launch]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** A 22-second average visit means people arrive, do not find the thing they came for, and leave. The pricing page is the strongest page on the site and it is two clicks deep. Put the 0% markup number and the self-hosting command above the fold on the home page and the number moves.",
                },
              ],
            },
            {
              claim:
                "Hacker News is the marketplace that matters in this category, and Experiential just had its best day there.",
              body: [
                {
                  type: "p",
                  text: "OpenRouter was mentioned in 895 Hacker News items in the last 30 days, including 73 stories [[hn-search]]. Experiential has 7 mentions in its entire history [[hn-search]]. Six of those are from the last 24 hours, because the Show HN posted on Aug 27 at 21:18 UTC reached 163 points and 26 comments [[hn-showhn]]. The thread crossposted itself to Reddit twice, into r/hackernews and r/hypeurls, within seven hours [[reddit-showhn]]. Neither company has a G2 listing, so Hacker News, GitHub and r/openrouter are where reviews actually happen for this category.",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** 163 points is a real audience and it decays in days. Reply to every open question in that thread today, especially the caching ones, because the thread is the landing page right now and the answers are permanent.",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Experiential should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Buy the searches nobody bids on, starting under $500 a month.",
              body: [
                {
                  type: "p",
                  text: "OpenRouter spends $0 on Google Ads and has 49,700 free rankings, so it has no reason to start [[similarweb-or]]. That leaves the whole auction empty. Start with \"openrouter alternative\", \"llm gateway zero markup\", \"open source llm gateway\", \"litellm alternative\" and \"self hosted ai gateway\". Point every one at the fee calculator page, not the home page. Measure API keys created, not clicks, and stop any term that does not produce one in two weeks.",
                },
              ],
            },
            {
              claim: "Get listed everywhere a developer browses before they search.",
              body: [
                {
                  type: "p",
                  text: "There is no G2 page for either company, which is fine, because this category browses elsewhere [[similarweb-or]]. The venues that matter are the awesome-lists and framework docs that already link OpenRouter, plus Product Hunt, plus the provider partner pages. OpenRouter's 274 referring domains are the target list and Similarweb publishes the top of it [[similarweb-or]]. Work down it in order of traffic.",
                },
              ],
            },
            {
              claim: "Write the comparison pages for LiteLLM and OpenRouter, in that order.",
              body: [
                {
                  type: "p",
                  text: "The founders already said on Hacker News that LiteLLM is the comparison people actually ask about [[hn-showhn]]. LiteLLM has 57,451 stars and 4,864 open issues [[gh-litellm]]. OpenRouter has the fee and no self-hosting [[or-faq]]. Two pages, each one a table of sourced facts rather than adjectives, each ending at the same fee calculator.",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Traffic and search, side by side" },
            {
              type: "table",
              headers: [{ text: "Measure", w: "28%" }, { text: "OpenRouter" }, { text: "Experiential" }],
              rows: [
                ["Global rank", "2,023, up from 2,200 three months ago", "4,022,818"],
                ["US rank", "2,935", "1,866,002"],
                ["Category rank (US)", "19th in AI chatbots and tools", "none"],
                ["Monthly visits", "19.2M, up 11.26%", "not published"],
                ["Bounce rate", "32.34%", "58.63%"],
                ["Pages per visit", "7.72", "1.32"],
                ["Average visit", "6 min 13 sec", "22 sec"],
                ["Largest traffic source", "Direct, 58.63%", "Direct, 75.17%"],
                ["Paid search share", "under 0.01%", "0%"],
                ["Total keywords", "49,700", "3"],
                ["Referring websites", "274", "1"],
                ["Social networks sending traffic", "YouTube, then X, then Reddit", "X only"],
                ["Source", "[[similarweb-or]]", "[[similarweb-xp]]"],
              ],
            },
            {
              type: "p",
              text: "The audience shape is worth noting because it changes who the ads should talk to. OpenRouter's visitors are 72.1% male with the largest age band at 25 to 34 [[similarweb-or]]. The sites closest to it by audience overlap are huggingface.co at 100%, ollama.com at 92%, openai.com at 90%, artificialanalysis.ai at 85%, together.ai at 75% and helicone.ai at 73% [[similarweb-or]]. That is a list of places where an ad or a partnership reaches the same person.",
            },
            { type: "h3", text: "What people search that shows doubt" },
            {
              type: "p",
              text: "The searches that indicate someone is shopping are not in Similarweb's keyword list because they are too low-volume to register for either company. They show up instead as Reddit thread titles, which is the same intent in a different place. \"Is OpenRouter's $10 verification actually worth it for using free models in a small production app?\" was posted to r/openrouter and to r/AI_Agents on Aug 26 [[reddit-verification]]. \"10 USD crdit cost 13.18 USD... what I've done wrong?\" followed on Aug 27 [[reddit-fee]]. \"Having a decentralized private openrouter type network\" went up the same day [[reddit-decentralized]].",
            },
            { type: "h3", text: "Hacker News, 30 days" },
            {
              type: "table",
              headers: [
                { text: "Measure", w: "45%" },
                { text: "OpenRouter", n: true },
                { text: "Experiential", n: true },
              ],
              rows: [
                ["Items mentioning it, last 30 days", "895", "6"],
                ["Stories, last 30 days", "73", "1"],
                ["Items mentioning it, all time", "not counted", "7"],
                ["Best story this week", "coverage of the Stripe deal", "163 points, 26 comments"],
              ],
            },
            {
              type: "p",
              text: "The ratio is 128 to 1 and it is the honest picture of where the two companies sit. It is also the reason the Show HN matters more than any other single thing that happened this week. It moved Experiential from zero presence to a front-page thread with 26 comments from people who build this for a living [[hn-showhn]] [[hn-search]].",
            },
          ],
        },
      ],
    },
    {
      id: "advertising",
      title: "Advertising and social media",
      blocks: [
        {
          type: "fig",
          panels: [
            {
              cap: "Active US Facebook and Instagram ads that name OpenRouter",
              sub: "By advertiser. OpenRouter itself runs none. Every ad here belongs to somebody else.",
              chart: {
                kind: "rows",
                rows: [
                  ["The AI Conference", 3, "other"],
                  ["MixRoute", 2, "other"],
                  ["Squidcode", 2, "other"],
                  ["Gate AI", 2, "other"],
                  ["The Information", 1, "other"],
                  ["WPCodeBox", 1, "other"],
                  ["ClickHouse", 1, "other"],
                  ["OpenRouter", 0, "primary"],
                  ["Experiential", 0, "us"],
                ],
                fmt: "num",
                labelAll: true,
                aria:
                  "Active US Meta ads naming OpenRouter, by advertiser: The AI Conference 3, MixRoute 2, Squidcode 2, Gate AI 2, The Information 1, WPCodeBox 1, ClickHouse 1, OpenRouter 0, Experiential 0.",
              },
            },
            {
              cap: "X posts mentioning OpenRouter",
              sub: "Of the 70 most recent posts pulled on Aug 28, split by what the post is doing.",
              chart: {
                kind: "share",
                rows: [
                  ["Model launches and news, 44 posts", 63, "neu"],
                  ["Praise or recommendation, 20 posts", 28, "pos"],
                  ["Complaints and alternatives, 6 posts", 9, "neg"],
                ],
                aria:
                  "Of 70 recent X posts mentioning OpenRouter, 44 are model launch or news chatter, 20 are praise, 6 are complaints or alternative-seeking.",
              },
              legend: [
                { series: "neu", label: "News" },
                { series: "pos", label: "Praise" },
                { series: "neg", label: "Complaints" },
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
                "MixRoute started buying Facebook ads on Aug 27 that use Experiential's pitch almost word for word.",
              body: [
                {
                  type: "p",
                  text: "Two MixRoute ads went live on Aug 27, library IDs 1071329128927221 and 1066674015952484, both still under 100 impressions [[meta-ads]]. The copy opens \"You're routing AI API calls through a middleman that charges 5.5% on every credit purchase\" and closes \"Stop paying a middleman tax for infrastructure you can get at cost\" [[meta-ads]]. The landing page promises 200+ models, zero markup, reserved capacity, automatic failover, a one-line base URL switch and $5 in free credit with no card [[meta-ads]]. Experiential's own pricing page says 0% markup, provider failover, and \"One base URL swap\" [[xp-pricing]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** Somebody else is spending money to teach the market a message Experiential owns for free, and they are doing it without an open source repo behind them. Run the same ads with \"read the code your traffic flows through\" as the closing line, and do it while MixRoute is still under 100 impressions.",
                },
              ],
            },
            {
              claim:
                "A gateway called Straitly turned the same zero-markup message into $13.3M of pledged spend in 48 hours on X alone.",
              body: [
                {
                  type: "p",
                  text: "On Aug 17 Mujtaba posted \"We just killed OpenRouter. AI routers made $100+ million last year charging 5% markups on every dollar. Today that ends.\" The post has 1,411 likes, 370 replies and 90 reposts [[x-straitly]]. Two days later the follow-up reported roughly 600,000 impressions producing about $1.11M a month, or $13.3M annualized, in pledged token spend [[x-straitly-results]]. A third account summarized it as \"This guy secured $13.3M in 48 hours just by launching on X\" [[x-straitly-echo]]. Separately, Ramp launched an OpenRouter alternative the same week [[x-ramp]], and AIHubMix advertised itself as \"An OpenRouter alternative with zero platform markup\" [[x-aihubmix]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** Four separate companies ran the zero-markup pitch this month and one of them got $13.3M of pledged spend from a single thread. The message is proven. Experiential should post its own version this week, with the Show HN link and the fee arithmetic, rather than waiting for the next one.",
                },
              ],
            },
            {
              claim:
                "Nine percent of recent X posts about OpenRouter are complaints, and they cluster on three specific things.",
              body: [
                {
                  type: "p",
                  text: "Of the 70 most recent posts pulled on Aug 28, six complain, question or ask for an alternative [[apify-x]]. The themes repeat. Quantization: \"Openrouter is terrible! I did deepseek with them and got garbage at the end of the response likely routed to some cheap ultra quanticized version\" [[x-quant]]. Rate limits: \"they are so heavily rate limited on openrouter so not many people get routed to them\" [[x-ratelimit]]. The redesign: \"@OpenRouter's new ui is so much worse than previous one... it feels like it was vibe coded\" [[x-ui]]. A fourth asked whether OpenRouter has a time-to-first-token guarantee at all [[x-ttft]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** Quantization and routing transparency are exactly what an open source gateway can answer, because the routing logic is readable. Write one blog post showing how to see which provider served a request and pin it, then link it into every one of these threads.",
                },
              ],
            },
            {
              claim:
                "Reddit produces at least 100 OpenRouter posts every 40 hours and Experiential appears in none of them.",
              body: [
                {
                  type: "p",
                  text: "A search for \"openrouter\" returned 100 posts covering Aug 26 15:18 to Aug 28 07:10 UTC, which is the scraper's cap rather than the real total [[apify-reddit]]. r/openrouter has 18,328 subscribers [[apify-reddit]]. The rest spread across r/SillyTavernAI, r/JanitorAI_Refuges, r/DeepSeek, r/opencode, r/LocalLLM and about forty other communities [[apify-reddit]]. The highest-engagement threads in the window were \"GLM 5.3 Flash pricing is a slap in the face\" at 76 points and 27 comments, and \"The LLM Model War Is Over\" at 61 points and 74 comments in r/vibecoding [[reddit-glm-price]] [[reddit-modelwar]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** This is a daily audience of thousands of people arguing about routing and price, with no rule against naming alternatives. An hour a day answering questions in r/openrouter with real answers is the cheapest distribution available and it needs no budget approval.",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Experiential should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Answer the ten posts in the table at the top of this report, this week.",
              body: [
                {
                  type: "p",
                  text: "Every one is live, every one is someone who has already decided the fee or the routing is a problem. The fee threads need the calculator link [[reddit-fee]]. The quantization threads need the provider-transparency post [[x-quant]]. The \"very little moat\" thread with 945 likes needs the self-hosting command, because that is what a moat looks like from the buyer's side [[x-moat]]. Reply as the founders, from named accounts, with numbers and no marketing language.",
                },
              ],
            },
            {
              claim: "Run MixRoute's ad copy with the open source line added, at a few hundred dollars a month.",
              body: [
                {
                  type: "p",
                  text: "MixRoute's ads are 24 hours old and under 100 impressions, so there is no incumbent to outbid [[meta-ads]]. Squidcode has run the same message since Jul 28 and is still running it, which suggests it pays for itself [[meta-ads]]. Use the same structure, keep the 5.5% number, and end on the one thing neither MixRoute nor Squidcode can say, which is that the gateway is Apache-2.0 and you can run it yourself [[gh-xp]] [[xp-pricing]].",
                },
              ],
            },
            {
              claim: "Post the Straitly-style thread on X, with evidence instead of a kill claim.",
              body: [
                {
                  type: "p",
                  text: "Straitly got 1,411 likes and $13.3M of pledged spend from one post with no repo behind it [[x-straitly]] [[x-straitly-results]]. Experiential has 592 GitHub stars, a 163-point Show HN and a working self-host command [[gh-xp]] [[hn-showhn]] [[xp-pricing]]. Post the fee arithmetic, the repo link and the one-line install, and skip the \"we killed\" framing, because the audience that just watched Straitly do it will discount the second one.",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Creative watch list: every active US ad naming OpenRouter" },
            {
              type: "table",
              headers: [
                { text: "Advertiser", w: "14%", nw: true },
                { text: "Live", w: "8%", nw: true },
                { text: "What the ad says" },
                { text: "Lands on", w: "16%", nw: true },
              ],
              rows: [
                [
                  "MixRoute",
                  "Aug 27",
                  "\"You're routing AI API calls through a middleman that charges 5.5% on every credit purchase... Same models, same price, 0% markup.\" Two versions, both under 100 impressions.",
                  "mixroute.ai",
                ],
                [
                  "Squidcode",
                  "Jul 28",
                  "\"Review PRs with open-weight models through your own OpenRouter key. You pay the provider directly, zero markup.\" $10/mo flat, 14-day trial, no card. Two versions.",
                  "codemouse.ai",
                ],
                [
                  "Gate AI",
                  "Aug 25",
                  "\"Shipping AI features without a security layer is like shipping a web app without HTTPS.\" A second version promises to extend existing AI subscriptions by 20% through caching and prompt compression.",
                  "constellationgate.ai",
                ],
                [
                  "The Information",
                  "Aug 23",
                  "\"Stripe's potential acquisition of OpenRouter would carry a steep premium compared to other recent deals.\" A subscription ad built on the deal.",
                  "theinformation.com",
                ],
                [
                  "WPCodeBox",
                  "Aug 22",
                  "An AI assistant for WordPress that takes an OpenRouter key alongside OpenAI, Anthropic and Gemini keys.",
                  "wpcodebox.com",
                ],
                [
                  "ClickHouse",
                  "Aug 18",
                  "Conference promotion that matches the keyword without arguing about routing.",
                  "clickhouse.com",
                ],
                [
                  "The AI Conference",
                  "Jul 17",
                  "Three creative variants promoting a conference. Keyword match only.",
                  "aiconference.com",
                ],
              ],
            },
            {
              type: "p",
              text: "The pattern across the list is that OpenRouter's name has become a category word other companies advertise against, and OpenRouter does not respond [[meta-ads]]. Two of the seven advertisers are direct competitors using the fee as the hook. One is a media company selling subscriptions off the acquisition. Two use OpenRouter as a supported integration, which is free distribution for OpenRouter. None of them are OpenRouter.",
            },
            { type: "h3", text: "Paid footprint by channel" },
            {
              type: "table",
              headers: [{ text: "Channel", w: "24%" }, { text: "OpenRouter" }, { text: "Experiential" }],
              rows: [
                ["Google search ads", "$0, under 0.01% of traffic [[similarweb-or]]", "$0 [[similarweb-xp]]"],
                ["Facebook and Instagram", "0 ads [[meta-ads]]", "0 ads [[meta-ads]]"],
                ["Display advertising", "15 publishers, 1 ad network [[similarweb-or]]", "none [[similarweb-xp]]"],
                ["Paid creators", "none found", "none"],
                ["Referral or affiliate program", "none published", "none"],
                ["Conference sponsorship", "not verified this window", "none"],
                ["Earned coverage", "Bloomberg, The Information [[bloomberg]]", "Hacker News front page [[hn-showhn]]"],
              ],
            },
            {
              type: "p",
              text: "What is knowable from outside is the ad libraries, the search estimates and the public posts. What is not knowable is conference spend, private partner deals, and anything OpenRouter pays for that does not appear in a public archive. Similarweb lists 15 display publishers for openrouter.ai, which is the one line item suggesting any paid distribution at all, and the tool does not attach a dollar figure to it [[similarweb-or]]. Treat OpenRouter's paid marketing as effectively zero and its distribution as entirely earned.",
            },
            { type: "h3", text: "What a normal day on X looks like" },
            {
              type: "p",
              text: "200 posts arrived in the 2 hours and 22 minutes to 07:15 UTC on Aug 28, which scales to about 709 a day [[apify-x]]. Almost none of them are about OpenRouter as a company. They are about models that just launched on it. In that window alone: Tencent's Hy4 preview at 770B parameters, Alibaba's Qwen3 8 Flash, and the reveal that the stealth model Ox Alpha was Z.ai's GLM-5.3-Flash [[apify-x]]. Accounts like LLMPriceIndex and gptbotio post automated price-change and new-model alerts using OpenRouter as the source of truth [[apify-x]].",
            },
            {
              type: "p",
              text: "That is the real position OpenRouter holds and it is worth stating plainly rather than working around. It is the place model launches are announced, so every launch is free advertising. The countermove is not to compete for launch-day attention. It is to be present in the threads where someone has already used the thing and is unhappy, which is a much smaller and much more valuable set of posts.",
            },
            { type: "h3", text: "Complaint threads worth tracking, with the exact words" },
            {
              type: "table",
              headers: [
                { text: "Where", w: "16%", nw: true },
                { text: "Date", w: "7%", nw: true },
                { text: "What was said" },
              ],
              rows: [
                ["r/openrouter", "Aug 27", "\"10 USD crdit cost 13.18 USD... what I've done wrong?\" 12 comments [[reddit-fee]]"],
                ["r/openrouter", "Aug 28", "\"BUG : Most reasoning options are gone\" after the dashboard redesign [[reddit-bug]]"],
                ["r/openrouter", "Aug 27", "\"Why do Structured outputs always fail (except OpenAI)\" [[reddit-structured]]"],
                ["r/openrouter", "Aug 27", "\"It is only openrouter that adds these newlines in GLM 5.3 flash?\" [[reddit-newlines]]"],
                ["r/DeepSeek", "Aug 27", "\"Deepseek on Open Router is feeling drunk and dumbed down.\" [[reddit-quant]]"],
                ["r/openrouter", "Aug 26", "\"Since when did openrouter have age attestation?\" [[reddit-age]]"],
                ["r/LocalAIStack", "Aug 27", "\"Having a decentralized private openrouter type network\" [[reddit-decentralized]]"],
                ["X", "Aug 28", "\"Does Openrouter not have TTFT SLO? a 20K token prefill and above would slow a request to a grind\" [[x-ttft]]"],
              ],
            },
            {
              type: "p",
              text: "None of this looks like astroturfing. The accounts are ordinary, the complaints are specific and technical, and they contradict each other in the way real complaints do. That is different from what a paid campaign produces and it means the 9% complaint share can be taken at face value [[apify-x]] [[apify-reddit]].",
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
              cap: "OpenRouter's 23 open roles by department",
              sub: "All remote in the US, all full time. Eleven are sales and marketing.",
              chart: {
                kind: "rows",
                rows: [
                  ["Engineering", 9],
                  ["Go To Market", 7],
                  ["Customer Success", 2],
                  ["Sales", 2],
                  ["Marketing", 1],
                  ["Product & Design", 1],
                  ["People Operations", 1],
                ],
                fmt: "num",
                labelAll: true,
                aria:
                  "OpenRouter open roles: Engineering 9, Go To Market 7, Customer Success 2, Sales 2, Marketing 1, Product and Design 1, People Operations 1.",
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
                "OpenRouter is hiring a sales organization, not a research team, which is what a company about to be acquired hires.",
              body: [
                {
                  type: "p",
                  text: "Of 23 open roles, 11 sit under Go To Market and its sub-teams [[or-jobs]]. The titles are Director of Business Development, Director of Channel Partnerships, Director of Revenue Operations, Business Development Representative, Account Executive, Enterprise Account Executive, Customer Engineer, Customer Success Manager, Scaled Customer Success Manager for Startups, Forward Deployed Engineer and Scaled Support Specialist [[or-jobs]]. Three separate director-level revenue roles at once is a company building a sales floor plan, not filling a gap. There is one Research Scientist and one Data Scientist [[or-jobs]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** Three revenue directors and one researcher tells you where the next year of product attention goes. The individual developer who found OpenRouter through a Reddit thread is about to be handled by a Scaled Support Specialist. Experiential should keep answering that person directly, because that is a service level a 23-person go-to-market hire cannot match.",
                },
              ],
            },
            {
              claim:
                "Even OpenRouter's engineering roles are operational, which says the routing problem is now a supplier-management problem.",
              body: [
                {
                  type: "p",
                  text: "The nine engineering roles include AI Provider Operations and Support Engineer, Partner Development Manager for Provider Ecosystem, Program Manager for Provider Partnerships and Third-Party Risk Analyst [[or-jobs]]. Four of nine engineering headcount are about managing the relationship with model providers rather than building the gateway. Only Software Engineer Platform, Software Engineer Product, Applied AI Engineer, Research Scientist and Data Scientist are building roles [[or-jobs]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** The hard part of running a gateway at scale is supplier relationships and risk, not code, and OpenRouter is staffing for that. Experiential's answer is bring-your-own-key, which pushes the supplier relationship back to the customer and removes the cost entirely. Say that on the comparison page.",
                },
              ],
            },
            {
              claim:
                "Experiential has two people and needs to decide whether the next hire is a developer relations person or an engineer.",
              body: [
                {
                  type: "p",
                  text: "The YC page lists a team of 2, founded 2026, based in San Francisco, with Diana Hu as the primary partner [[yc-company]]. Kion Fallah has an ML PhD from Georgia Tech and led the mixed reality simulation team at Waabi. Silen Naihin built AutoGPT to 160,000 GitHub stars and worked on continual learning, evaluations and interpretability [[yc-company]]. The repo has 592 stars, 52 forks, 2 open issues and a push from this morning, with an Apache-2.0 licence and a Python and Rust codebase [[gh-xp]]. On the Show HN thread Naihin confirmed the Python-to-Rust rewrite happened and is visible in the commit history [[hn-showhn]].",
                },
                {
                  type: "why",
                  text: "**Why it matters for Experiential:** Two open issues on 592 stars means the maintenance load is still manageable, and that will change fast if the Show HN converts. The distribution work in this report is roughly one person's job. Do it with the founders for a month first and let the volume of unanswered threads decide whether it becomes a hire.",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Experiential should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Quote OpenRouter's own job ads on the comparison page.",
              body: [
                {
                  type: "p",
                  text: "\"Scaled Support Specialist\" and \"Scaled Customer Success Manager, Startups\" are titles that tell a small customer exactly what service they are about to get [[or-jobs]]. Put them next to \"Community (Discord and GitHub)\" from Experiential's own free plan and the founders' names on the Show HN replies [[xp-pricing]] [[hn-showhn]]. Job ads say what marketing will not, and these are public.",
                },
              ],
            },
            {
              claim: "Do not hire yet. Spend the next month on the threads instead.",
              body: [
                {
                  type: "p",
                  text: "Two people, 592 stars and 2 open issues is not a maintenance crisis [[gh-xp]]. The bottleneck is that nobody knows the product exists, which is a distribution problem the founders can fix themselves by replying in public. Reassess after 30 days using two numbers: GitHub stars and inbound calls booked through the cal.com link on the pricing page [[xp-pricing]].",
                },
              ],
            },
          ],
        },
        {
          type: "toggle",
          claim: "Full analysis",
          body: [
            { type: "h3", text: "Every open OpenRouter role" },
            {
              type: "table",
              headers: [
                { text: "Department", w: "18%", nw: true },
                { text: "Role" },
                { text: "Location", w: "16%", nw: true },
              ],
              rows: [
                ["Engineering", "[AI Provider Operations & Support Engineer](https://jobs.ashbyhq.com/openrouter/58dd70b9-f387-4ba1-8bee-1033f91e76ee)", "Remote (US)"],
                ["Engineering", "[Applied AI Engineer](https://jobs.ashbyhq.com/openrouter/407f71b5-4b1f-4666-91bd-394f3c26f19d)", "Remote (US)"],
                ["Engineering", "[Data Scientist](https://jobs.ashbyhq.com/openrouter/c8ee3a10-ae18-4d8b-9390-369ebea7b03f)", "Remote (US)"],
                ["Engineering", "[Partner Development Manager, Provider Ecosystem](https://jobs.ashbyhq.com/openrouter/99b31b81-5ee6-4f4a-990b-d4f4f1b65516)", "Remote (US)"],
                ["Engineering", "[Program Manager, Provider Partnerships](https://jobs.ashbyhq.com/openrouter/cbda7683-f4fc-41ac-b71b-81d7ccca5508)", "Remote (US)"],
                ["Engineering", "[Research Scientist](https://jobs.ashbyhq.com/openrouter/8daf0f29-2e78-4ab1-8230-52e3988fe42c)", "Remote (US)"],
                ["Engineering", "[Software Engineer, Platform](https://jobs.ashbyhq.com/openrouter/47c2bcd2-f71c-47a6-831f-a4130d607a7b)", "Remote (US)"],
                ["Engineering", "[Software Engineer, Product](https://jobs.ashbyhq.com/openrouter/0c6bbb7f-ea09-45b6-b185-8a17a8de214d)", "Remote (US)"],
                ["Engineering", "[Third-Party Risk Analyst](https://jobs.ashbyhq.com/openrouter/99aa680f-19e2-49f1-acd5-b56c4aaa679f)", "Remote (US)"],
                ["People Ops", "[Technical Recruiter](https://jobs.ashbyhq.com/openrouter/973955a0-c0d1-4bb4-9252-9ab3943a29c0)", "Remote (US)"],
                ["Go To Market", "[Business Development Representative](https://jobs.ashbyhq.com/openrouter/69c4fe23-137b-4995-8ad1-25123bee06fb)", "Remote (US)"],
                ["Go To Market", "[Customer Engineer](https://jobs.ashbyhq.com/openrouter/9f38ecfe-ee22-4338-863b-a01e43a481bc)", "Remote (US)"],
                ["Go To Market", "[Customer Success Manager](https://jobs.ashbyhq.com/openrouter/7c5cb1ca-71ba-464d-bf98-33743e8b1474)", "Remote (US)"],
                ["Go To Market", "[Director, Business Development](https://jobs.ashbyhq.com/openrouter/c5bbcca4-5591-4152-982b-d43ccbabb863)", "Remote (US)"],
                ["Go To Market", "[Director, Channel Partnerships](https://jobs.ashbyhq.com/openrouter/a25c7850-4bb1-45ce-ab08-04a2a9c42f95)", "Remote (US)"],
                ["Go To Market", "[Director, Revenue Operations](https://jobs.ashbyhq.com/openrouter/8b56aa1f-1049-499d-912b-eb869747ebdf)", "Remote (US)"],
                ["Go To Market", "[Scaled Support Specialist](https://jobs.ashbyhq.com/openrouter/89ff6b47-ba08-4418-b24b-c136dbf2ef82)", "Remote (US)"],
                ["Customer Success", "[Forward Deployed Engineer](https://jobs.ashbyhq.com/openrouter/1b26f0a2-4aab-4bef-8c21-0f8de9a059e3)", "Remote (US)"],
                ["Customer Success", "[Scaled Customer Success Manager, Startups](https://jobs.ashbyhq.com/openrouter/228539a3-70d8-4d8f-989c-8bd19db4aae0)", "Remote (US)"],
                ["Sales", "[Account Executive](https://jobs.ashbyhq.com/openrouter/22d85a56-5500-40a5-9913-c98558d77f41)", "Remote (US)"],
                ["Sales", "[Enterprise Account Executive](https://jobs.ashbyhq.com/openrouter/34db850d-579f-4b4c-9827-76bc712b1a41)", "Remote (US)"],
                ["Marketing", "[Director, Growth Marketing](https://jobs.ashbyhq.com/openrouter/9c1cb711-cd17-4d07-9be5-f122c0a865b9)", "Remote (US)"],
                ["Product & Design", "[Product Manager, Enterprise](https://jobs.ashbyhq.com/openrouter/412cfd6b-81a5-4662-bae2-d86ea1ee324c)", "Remote (US)"],
              ],
            },
            {
              type: "p",
              text: "Every role is remote in the United States and full time, with no salary bands published on the board [[or-jobs]]. There is no office requirement listed on any of the 23. An M&A summary account put headcount at around 50 people, which would mean OpenRouter is hiring to grow by roughly half [[x-ma-summary]]. That figure is a claim on X and not confirmed by OpenRouter, so treat it as indicative only.",
            },
            { type: "h3", text: "What is missing from the list" },
            {
              type: "p",
              text: "There is no security engineer, no compliance manager and no infrastructure or SRE role among the 23 [[or-jobs]]. There is a Third-Party Risk Analyst, which covers vendor risk rather than the product. For a company routing tokens for millions of developers and about to become part of a payments company, the absence of dedicated security and reliability hiring is the notable gap. There is also exactly one marketing role, which is consistent with a company whose distribution is entirely earned.",
            },
            { type: "h3", text: "The open source competitors, for context" },
            {
              type: "table",
              headers: [
                { text: "Project", w: "16%", nw: true },
                { text: "Stars", n: true, w: "11%" },
                { text: "Open issues", n: true, w: "12%" },
                { text: "Last push", w: "12%", nw: true },
                { text: "Read" },
              ],
              rows: [
                ["LiteLLM", "57,451", "4,864", "Aug 28", "The incumbent. Enormous reach and an issue backlog to match. [[gh-litellm]]"],
                ["Portkey", "12,842", "248", "May 25", "No push in 95 days. The company was acquired in May. [[gh-portkey]]"],
                ["Bifrost", "7,609", "960", "Aug 28", "Active and growing, with a heavy issue load. [[gh-bifrost]]"],
                ["Helicone", "6,106", "151", "Aug 26", "Observability first, gateway second. Still shipping. [[gh-helicone]]"],
                ["Experiential", "592", "2", "Aug 28", "Two months old. Apache-2.0, Python and Rust. [[gh-xp]]"],
              ],
            },
            {
              type: "p",
              text: "One Show HN commenter, rdslw, made the argument Experiential will keep hearing: a small team reproduced this in two months, which lowers what it is worth [[hn-showhn]]. tyre checked and confirmed the first pull request was Jun 24 [[hn-showhn]]. The answer visible in this table is that building a gateway is easy and maintaining one is not, and 4,864 open issues on LiteLLM is what the hard part looks like after three years [[gh-litellm]].",
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
            "[[similarweb-or]] traffic, keywords, referrers and audience for openrouter.ai, July 2026 figures pulled Aug 28.",
            "[[similarweb-xp]] the same for experientiallabs.ai.",
            "[[meta-ads]] Meta Ad Library, US keyword search for \"openrouter\", active ads only, pulled Aug 28.",
            "[[apify-x]] X posts search via Apify scraper_one/x-posts-search, latest and top, pulled Aug 28.",
            "[[apify-reddit]] Reddit search via Apify harshmaur/reddit-scraper, 100-post cap, pulled Aug 28.",
            "[[hn-search]] Hacker News search API, item and story counts for both names.",
          ],
        },
        { type: "h3", text: "OpenRouter's own pages" },
        {
          type: "links",
          items: [
            "[[or-faq]] the FAQ, which is where every fee number in this report comes from.",
            "[[or-pricing]] the pricing page.",
            "[[or-jobs]] the Ashby job board, 23 roles.",
            "[[or-models]] the model browser.",
            "[[or-linkedin]] the LinkedIn company page, 30,883 followers.",
          ],
        },
        { type: "h3", text: "Experiential's own pages" },
        {
          type: "links",
          items: [
            "[[xp-pricing]] the pricing page, including the enterprise-readiness labels and the FAQ.",
            "[[xp-site]] the home page.",
            "[[gh-xp]] the repository, Apache-2.0.",
            "[[yc-company]] the Y Combinator company page.",
            "[[yc-launch]] the Y Combinator launch post, published Aug 7.",
            "[[hn-showhn]] the Show HN thread from Aug 27, 163 points and 26 comments.",
          ],
        },
        { type: "h3", text: "Press and the acquisition" },
        {
          type: "links",
          items: [
            "[[bloomberg]] Bloomberg on the Stripe agreement, more than $7B, Aug 17.",
            "[[x-deedy]] Deedy Das of Menlo Ventures confirming the acquisition publicly.",
            "[[x-vaibhav]] the Series B and revenue history summarized.",
            "[[x-ma-summary]] an M&A account's headcount and volume claims, unverified.",
          ],
        },
        { type: "h3", text: "Competitors' repositories" },
        {
          type: "links",
          items: [
            "[[gh-litellm]] LiteLLM, 57,451 stars and 4,864 open issues.",
            "[[gh-portkey]] Portkey gateway, last push May 25.",
            "[[gh-bifrost]] Bifrost, 7,609 stars.",
            "[[gh-helicone]] Helicone, 6,106 stars.",
          ],
        },
        { type: "h3", text: "Social posts cited" },
        {
          type: "links",
          items: [
            "[[x-straitly]] Straitly's launch post, 1,411 likes.",
            "[[x-straitly-results]] the 48-hour results thread, $13.3M pledged.",
            "[[x-straitly-echo]] a third-party account amplifying the same claim.",
            "[[x-moat]] the \"very little moat\" thread, 945 likes and 112 replies.",
            "[[x-ramp]] Ramp building an OpenRouter alternative.",
            "[[x-aihubmix]] AIHubMix advertising zero platform markup.",
            "[[x-quant]] a user reporting quantized output.",
            "[[x-ratelimit]] a user on provider rate limits.",
            "[[x-ui]] a user on the redesigned dashboard.",
            "[[x-ttft]] a user asking about time-to-first-token guarantees.",
            "[[reddit-fee]] r/openrouter on the credit fee.",
            "[[reddit-verification]] r/openrouter on the $10 verification.",
            "[[reddit-quant]] r/DeepSeek on degraded output.",
            "[[reddit-structured]] r/openrouter on structured outputs.",
            "[[reddit-newlines]] r/openrouter on GLM formatting.",
            "[[reddit-bug]] r/openrouter on missing reasoning options.",
            "[[reddit-age]] r/openrouter on age attestation.",
            "[[reddit-decentralized]] r/LocalAIStack on a decentralized alternative.",
            "[[reddit-modelwar]] r/vibecoding, 61 points and 74 comments.",
            "[[reddit-glm-price]] r/opencode on GLM 5.3 Flash pricing.",
            "[[reddit-ox-alpha]] r/openrouter on the Ox Alpha reveal.",
            "[[reddit-showhn]] the Show HN crossposted to Reddit.",
          ],
        },
      ],
    },
  ],
  footer:
    "Traffic, keyword and audience figures are estimates from outside tools and should be read as trends and ratios, not exact numbers. Fee figures come from OpenRouter's and Experiential's own published pages. The X posts-per-day figure is scaled from a 2 hour 22 minute sample and the Reddit count is capped at 100 by the scraper, so both are floors. Headcount and revenue claims sourced to X posts are unverified and marked as such. Data pulled Aug 28, 2026 via Apify, Firecrawl and the public GitHub and Hacker News APIs. Compiled Aug 28, 2026.",
  sources: {
    "similarweb-or": { label: "Similarweb", href: "https://www.similarweb.com/website/openrouter.ai/", logo: "similarweb" },
    "similarweb-xp": { label: "Similarweb", href: "https://www.similarweb.com/website/experientiallabs.ai/", logo: "similarweb" },
    "meta-ads": {
      label: "Meta Ad Library",
      href: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=openrouter&search_type=keyword_unordered",
      logo: "meta-ad-library",
    },
    "apify-x": { label: "X via Apify", href: "https://x.com/search?q=openrouter&f=live", logo: "x" },
    "apify-reddit": { label: "Reddit via Apify", href: "https://www.reddit.com/search/?q=openrouter&sort=new", logo: "reddit" },
    "hn-search": { label: "Hacker News search", href: "https://hn.algolia.com/?query=openrouter&type=all", logo: "hacker-news" },
    "or-faq": { label: "OpenRouter FAQ", href: "https://openrouter.ai/docs/faq", logo: "openrouter" },
    "or-pricing": { label: "OpenRouter pricing", href: "https://openrouter.ai/pricing", logo: "openrouter" },
    "or-jobs": { label: "OpenRouter jobs", href: "https://jobs.ashbyhq.com/openrouter", logo: "ashby" },
    "or-models": { label: "OpenRouter models", href: "https://openrouter.ai/models", logo: "openrouter" },
    "or-linkedin": { label: "OpenRouter on LinkedIn", href: "https://www.linkedin.com/company/openrouter", logo: "linkedin" },
    "xp-pricing": { label: "Experiential pricing", href: "https://www.experientiallabs.ai/pricing", logo: "experiential" },
    "xp-site": { label: "Experiential Labs", href: "https://www.experientiallabs.ai/", logo: "experiential" },
    "gh-xp": { label: "GitHub", href: "https://github.com/experientiallabs/experiential", logo: "github" },
    "gh-litellm": { label: "GitHub", href: "https://github.com/BerriAI/litellm", logo: "github" },
    "gh-portkey": { label: "GitHub", href: "https://github.com/Portkey-AI/gateway", logo: "github" },
    "gh-bifrost": { label: "GitHub", href: "https://github.com/maximhq/bifrost", logo: "github" },
    "gh-helicone": { label: "GitHub", href: "https://github.com/Helicone/helicone", logo: "github" },
    "yc-company": { label: "Y Combinator", href: "https://www.ycombinator.com/companies/experiential-labs", logo: "ycombinator" },
    "yc-launch": {
      label: "YC launch post",
      href: "https://www.ycombinator.com/launches/STQ-experiential-labs-turn-your-ai-spend-into-a-cheaper-better-model-you-own",
      logo: "ycombinator",
    },
    "hn-showhn": { label: "Show HN", href: "https://news.ycombinator.com/item?id=49471407", logo: "hacker-news" },
    bloomberg: { label: "Bloomberg", href: "https://x.com/business/status/2089158539260404052", logo: "bloomberg" },
    "x-deedy": { label: "Deedy Das", href: "https://x.com/deedydas/status/2090129029777224033", logo: "x" },
    "x-vaibhav": { label: "X", href: "https://x.com/VaibhavSisinty/status/2089214842318307589", logo: "x" },
    "x-ma-summary": { label: "X, unverified", href: "https://x.com/OCIP_MAChen/status/2092950254534434983", logo: "x" },
    "x-straitly": { label: "Straitly launch", href: "https://x.com/Mutchtaba2/status/2089385271896822197", logo: "x" },
    "x-straitly-results": { label: "Straitly results", href: "https://x.com/Mutchtaba2/status/2090107278137692592", logo: "x" },
    "x-straitly-echo": { label: "X", href: "https://x.com/shiri_shh/status/2090111031356059701", logo: "x" },
    "x-moat": { label: "X", href: "https://x.com/aleabitoreddit/status/2089148883838611460", logo: "x" },
    "x-ramp": { label: "X", href: "https://x.com/forgebitz/status/2090156149085495648", logo: "x" },
    "x-aihubmix": { label: "AIHubMix", href: "https://x.com/AiHubMix/status/2089734270193729726", logo: "x" },
    "x-quant": { label: "X", href: "https://x.com/iamboingist/status/2093222196059725948", logo: "x" },
    "x-ratelimit": { label: "X", href: "https://x.com/NavDoesTech/status/2093218053484097848", logo: "x" },
    "x-ui": { label: "X", href: "https://x.com/NiravJ3/status/2093208171250860265", logo: "x" },
    "x-ttft": { label: "X", href: "https://x.com/pgserenade/status/2093206280848720185", logo: "x" },
    "reddit-fee": {
      label: "r/openrouter",
      href: "https://www.reddit.com/r/openrouter/comments/1w017pf/10_usd_crdit_cost_1318_usd_what_ive_done_wrong/",
      logo: "reddit",
    },
    "reddit-verification": {
      label: "r/openrouter",
      href: "https://www.reddit.com/r/openrouter/comments/1vz4477/is_openrouters_10_verification_actually_worth_it/",
      logo: "reddit",
    },
    "reddit-quant": {
      label: "r/DeepSeek",
      href: "https://www.reddit.com/r/DeepSeek/comments/1vzye2p/deepseek_on_open_router_is_feeling_drunk_and/",
      logo: "reddit",
    },
    "reddit-structured": {
      label: "r/openrouter",
      href: "https://www.reddit.com/r/openrouter/comments/1vzlcj8/why_do_structured_outputs_always_fail_except/",
      logo: "reddit",
    },
    "reddit-newlines": {
      label: "r/openrouter",
      href: "https://www.reddit.com/r/openrouter/comments/1w088mz/it_is_only_openrouter_that_adds_these_newlines_in/",
      logo: "reddit",
    },
    "reddit-bug": {
      label: "r/openrouter",
      href: "https://www.reddit.com/r/openrouter/comments/1w0hli1/bug_most_reasoning_options_are_gone/",
      logo: "reddit",
    },
    "reddit-age": {
      label: "r/openrouter",
      href: "https://www.reddit.com/r/openrouter/comments/1vz39w0/since_when_did_openrouter_have_age_attestation/",
      logo: "reddit",
    },
    "reddit-decentralized": {
      label: "r/LocalAIStack",
      href: "https://www.reddit.com/r/LocalAIStack/comments/1w05mpe/having_a_decentralized_private_openrouter_type/",
      logo: "reddit",
    },
    "reddit-modelwar": {
      label: "r/vibecoding",
      href: "https://www.reddit.com/r/vibecoding/comments/1vzuo7o/the_llm_model_war_is_over_time_to_stop_obsessing/",
      logo: "reddit",
    },
    "reddit-glm-price": {
      label: "r/opencode",
      href: "https://www.reddit.com/r/opencode/comments/1vz009n/glm_53_flash_pricing_is_a_slap_in_the_face/",
      logo: "reddit",
    },
    "reddit-ox-alpha": {
      label: "r/openrouter",
      href: "https://www.reddit.com/r/openrouter/comments/1vz92g0/ox_alpha_is_gone_its_glm_53_flash_future_posts/",
      logo: "reddit",
    },
    "reddit-showhn": {
      label: "r/hackernews",
      href: "https://www.reddit.com/r/hackernews/comments/1w0g5qs/show_hn_we_built_open_openrouter_that_turns_usage/",
      logo: "reddit",
    },
  },
};
