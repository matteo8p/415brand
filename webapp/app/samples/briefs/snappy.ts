import type { Brief } from "./types";

export const snappy: Brief = {
  slug: "snappy",
  title: "Snappy weekly brief: brand & competitive analysis",
  sub: "For the Goody team, August 31, 2026",
  subject: "Snappy",
  client: "Goody",
  intro: [
    { type: "h3", text: "Recommended actions for Goody from the analysis" },
    {
      type: "moves",
      collapsed: true,
      items: [
        {
          action: "Reply to the bad reviews you have already fixed, and ask them to change the score.",
          why: "Three of the loudest complaints on your G2 page are for features you shipped months ago. Two reviewers on Aug 19 and one in January asked to let employees top up a gift with their own money. You shipped that in May as Recipient Gift Upgrade. A May 20 reviewer said you have no company store. You shipped Company Stores that month. An Apr 15 reviewer asked for HubSpot. You shipped it in July. These are paying customers publicly arguing against you about problems that no longer exist, on the page every prospect reads before they buy. Reply to each one, name the feature, link the changelog, ask them to update the rating. Outcome: your highest-intent page stops selling against you, for one afternoon of work and zero dollars.",
          evidence: "pricing-and-product",
        },
        {
          action: "Build the Snappy comparison page. You do not have one, and the two things you do say about Snappy are wrong.",
          why: "ongoody.com/compare, /compare/snappy, /vs/snappy and /snappy-alternative all return 404. You have no comparison page for anyone. What you have instead is a blog roundup that says Snappy charges a 15% processing fee, which appears nowhere on Snappy's site, and supports 40+ countries, when Snappy's own pages say 150+ and 176+. Your other blog post says Snappy has global shipping, so your two pages contradict each other about the same competitor. Meanwhile SnackNation ranks for Snappy vs Goody and Sendoso publishes a page that names you. Outcome: you stop handing that search to other people, and the page survives a Snappy rep reading it.",
          evidence: "search-and-marketplaces",
        },
        {
          action: "Get Meta ads live in September. Snappy has 41 running and you have never run one.",
          why: "Not one, in any country, active or inactive, ever. Snappy launched 25 of its 41 in the eight days from Aug 12 to Aug 19, which is a holiday campaign being built while you read this, and Q4 is the only quarter that matters in gifting. You already run Google ads as a verified advertiser, so you have the account, the creative process and the people. This is a channel you have simply never switched on. Copy Snappy's structure, all five placements and video-first. Do not copy its copy: not one of those 41 ads mentions price, and free with no contract is the best sentence you own. Outcome: you are in market before October instead of arriving after the budgets are spent.",
          evidence: "advertising-and-social-media",
        },
      ],
    },
    { type: "h3", text: "Posts worth replying to this week" },
    {
      type: "table",
      headers: [
        { text: "Where", w: "16%" },
        { text: "When", w: "7%", nw: true },
        { text: "What they said" },
        { text: "Status", w: "10%" },
        { text: "What to say, and what you get", w: "27%" },
      ],
      rows: [
        [
          "r/SmallBusiness_US",
          "Aug 31",
          "[\"We have 24 people and most of us use sendoso for birthdays and welcome gifts. Some months the platform costs more than the gifts we're sending... We just need to send someone a code and let them pick a gift. Anyone using something simpler and cheaper for this?\"](https://www.reddit.com/r/SmallBusiness_US/comments/1w33n9u/simpler_way_to_send_employee_gifts/)",
          "Shopping",
          "Posted hours ago with zero replies. This is your free tier described by a stranger, down to the code-and-pick mechanic. Answer plainly: no platform fee, no contract, they pick their own gift and enter their own address. Gets you a 24-person account that is already leaving Sendoso.",
        ],
        [
          "X and LinkedIn, Henry Schuck, founder and CEO of ZoomInfo (5,799 followers)",
          "Aug 26",
          "[\"Most corporate gifting SUCKS so at @ZoomInfo events, we've started doing something different: giving out custom jewelry made by my sister. After 1000s of events and dinners, I've got a closet filled with YETI mugs, patagonia quarter zips and branded backpacks\"](https://x.com/HenryLSchuck/status/2092600700996079918)",
          "Venting",
          "The CEO of a public company saying in two places that swag is waste, which is the exact argument Snappy started running ads on nine days earlier. Do not pitch him. Agree, and say the fix is letting the recipient choose. Gets your position in front of a go-to-market audience that buys this category.",
        ],
        [
          "X, @howard",
          "Aug 27",
          "[\"I would like this too! a Company Library. with an amazon / rewards integration as well for corporate gifting\"](https://x.com/howard/status/2093077745555140938)",
          "Shopping",
          "Small thread, one reply, but he is asking for a rewards catalog wired into a workplace tool and that is your Commerce API. Low effort, low odds. Answer it last.",
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
          text: "Snappy against Goody, pulled Aug 30 and 31. Every number is sourced on its row. Traffic is a Similarweb estimate and both review bases are small, which the footer sets out.",
        },
        {
          type: "scorecard",
          rows: [
            { metric: "Monthly website visits", primary: "211K", us: "171K", tone: "good",
              change: "Goody gets 81% of Snappy's traffic on a quarter of the money raised. Sendoso, which raised $153M, gets 102K.",
              source: "[[similarweb-snappy|Similarweb]] [[similarweb-goody|Goody]]" },
            { metric: "Share of visitors who type the address in", primary: "68%", us: "60%", tone: "neutral",
              change: "Both are found by people who already know the name. Neither wins the searches that describe the category.",
              source: "[[similarweb-snappy|Similarweb]] [[similarweb-goody|Goody]]" },
            { metric: "Pages viewed per visit", primary: "5.82", us: "6.81", tone: "good",
              change: "Goody wins, and also wins time on site at 3:27 against 3:14. Sendoso is 2.49 pages and 1:19.",
              source: "[[similarweb-snappy|Similarweb]] [[similarweb-goody|Goody]]" },
            { metric: "Share who leave from the first page", primary: "33%", us: "39%", tone: "bad",
              change: "The one traffic number Goody loses. Six points more of its visitors arrive, look at one page and go. Fix this before paying to send anyone there.",
              source: "[[similarweb-snappy|Similarweb]] [[similarweb-goody|Goody]]" },
            { metric: "Facebook and Instagram ads running now", primary: "41", us: "0", tone: "bad",
              change: "Goody has never run a Meta ad, in any country, active or inactive. 25 of Snappy's 41 launched between Aug 12 and Aug 19, which is the holiday build.",
              source: "[[meta-snappy|Meta Ad Library]] [[meta-goody|Goody search]]" },
            { metric: "Of those ads, how many are made by creators", primary: "0 of 41", us: "n/a", tone: "neutral",
              change: "Every Snappy ad is made in-house. Neither company runs a creator, referral or affiliate program.",
              source: "[[meta-snappy|Meta Ad Library]]" },
            { metric: "Google ads on record (US, all time)", primary: "~300", us: "~300", tone: "neutral",
              change: "Both advertise and both are verified advertisers. Google rounds this and it covers all time, not what is running today. Goody's gap is Meta, not paid advertising.",
              source: "[[google-ads-snappy|Google Ads]] [[google-ads-goody|Goody]]" },
            { metric: "G2 rating, where the buyer reviews", primary: "4.8 (312)", us: "4.8 (235)", tone: "neutral",
              change: "A tie. Goody's own blog says 4.9 for both, which is out of date. Goody's reviews cluster on May 20 to 21 and Aug 19 to 20, which is a webinar review drive.",
              source: "[[g2-snappy|G2]] [[g2-goody|Goody]]" },
            { metric: "Trustpilot rating, where the recipient reviews", primary: "1.9", us: "3.4", tone: "neutral",
              change: "Goody's figure covers its 50 most recent. Snappy's covers 13 reviews, every one of them a single star. Both bases are small, so read the direction and not the decimal.",
              source: "[[trustpilot-snappy|Trustpilot]] [[trustpilot-goody|Goody]]" },
            { metric: "Recent Trustpilot reviews at one or two stars", primary: "13 of 13", us: "20 of 50", tone: "bad",
              change: "In 2026 alone Goody is 13 of 30. This is Goody's own number. Goody's blog calls its Trustpilot rating Excellent. It is not.",
              source: "[[trustpilot-snappy|Trustpilot]] [[trustpilot-goody|Goody]]" },
            { metric: "Biggest objection, and its share of complaints sorted", primary: "Delivery, 35%", us: "Delivery, 33%", tone: "bad",
              change: "17 Snappy complaints and 12 Goody complaints sorted into one bucket each. Second place differs: Snappy is catalog quality at 29%, Goody is redemption at 25%.",
              source: "[[trustpilot-snappy|Trustpilot]] [[g2-snappy|G2]] [[trustpilot-goody|Goody]]" },
            { metric: "Posts about it on X per day", primary: "under 1", us: "under 1", tone: "neutral",
              change: "67 posts on gifting terms in the seven days to Aug 31 named neither company once. X does not exist as a channel here.",
              source: "[[x-search|X]]" },
            { metric: "Reddit posts naming it since Aug 24", primary: "0", us: "0", tone: "neutral",
              change: "651 posts pulled in the window and none named either company. One genuine buyer thread appeared on Aug 31 and is in the reply table.",
              source: "[[reddit|Reddit]]" },
            { metric: "Employees, and open jobs", primary: "200+ (6)", us: "~59 (4)", tone: "neutral",
              change: "Snappy has more than three times the headcount and one open engineering job, in Tel Aviv, with no marketing role open. Goody's headcount is a third-party estimate.",
              source: "[[snappy-careers|Snappy jobs]] [[goody-jobs|Goody jobs]] [[latka|GetLatka]]" },
          ],
        },
        {
          type: "findings",
          items: [
            {
              claim:
                "Snappy has 41 live Facebook and Instagram ads and Goody has never run one, in any country, ever.",
              body: [
                {
                  type: "p",
                  text: "Snappy's page runs 41 active ads across Facebook, Instagram, Messenger, Audience Network and Threads. 25 of them launched in the eight days from Aug 12 to Aug 19. A search of the Meta Ad Library for Goody, across all countries and including inactive ads, returns nothing belonging to Goody Technologies. The only matches are an Oregon sweet shop called Goody's of Bend and a page called Ooo Goody. [[meta-snappy]] [[meta-goody]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Corporate gifting is a fourth-quarter business and Snappy is building its holiday campaign right now. Goody already runs Google ads, so the skill is in the building and only the channel is missing. Start on Meta this month and lead with the free tier, because none of Snappy's 41 ads mentions price. [[google-ads-goody]] [[goody-pricing]]",
                },
              ],
            },
            {
              claim:
                "Both companies are rated 4.8 by the people who buy and badly by the people who receive, and Goody's own recipient reviews are the more urgent problem.",
              body: [
                {
                  type: "p",
                  text: "On G2, where the HR or operations buyer writes the review, Snappy is 4.8 across 312 reviews and Goody is 4.8 across 235. On Trustpilot, where the person who received the gift writes the review, Snappy holds 1.9 and every one of its 13 reviews is a single star. Goody holds 3.4 across its 50 most recent, but 20 of those 50 are one or two stars, and in 2026 alone it is 13 of 30. [[g2-snappy]] [[g2-goody]] [[trustpilot-snappy]] [[trustpilot-goody]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Goody's own blog calls its Trustpilot rating \"Excellent\". It is not. Goody cannot attack Snappy's recipient experience until its own is fixed, and the moment it is fixed it becomes the only real differentiator in a category where every competitor sells the same catalog. Fix the delivery and expiry mechanics, then say so. [[goody-blog-platforms]]",
                },
              ],
            },
            {
              claim:
                "Snappy has shipped no product in 2026. Goody has shipped something every month.",
              body: [
                {
                  type: "p",
                  text: "Snappy has published four press releases in 2026: three workforce studies and a Telly Awards win. Its last product launch was the AI Gifting Assistant in October 2025. Over the same period Goody shipped Company Stores, Forms, a gifting MCP server for Claude and ChatGPT, a Chrome extension, HubSpot, Salesforce Flow automation, and moved from 30-odd HR system integrations to more than 200. [[snappy-press]] [[goody-updates]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Snappy's marketing engine is original research and it is genuinely good at it, but research is what a company publishes when the roadmap is quiet. Goody's shipping pace is its clearest advantage and it is almost invisible outside the changelog. Put the ship log in the sales deck and in the ads. [[snappy-careers]]",
                },
              ],
            },
            {
              claim:
                "Eight of Snappy's live ads have been showing unrendered template code as their headline for eleven days.",
              body: [
                {
                  type: "p",
                  text: "Eight ads launched on Aug 18 and 19 carry the literal string {{product.brand}} as the body text and {{product.name}} as the title. These are dynamic catalog ads where the product feed never filled in. They point at snappy.com/corporate-gifting and they were still running when we pulled the library on Aug 30. Snappy's other 30 ads use the headline \"#1 Employee Gifting Platform\". [[meta-snappy]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Snappy is running its holiday build with nobody checking the output, which is what a marketing team looks like when it is stretched. It is also a warning for Goody's first Meta campaign: use dynamic catalog ads only after the feed is verified. Screenshot these before they are fixed. [[meta-snappy]]",
                },
              ],
            },
            {
              claim:
                "Goody has no comparison page for anyone, and the two claims it does make about Snappy are both wrong.",
              body: [
                {
                  type: "p",
                  text: "ongoody.com/compare, /compare/snappy, /business/compare, /vs/snappy, /alternatives/snappy and /snappy-alternative all return 404. The only competitor content Goody owns is two blog posts, and they disagree with each other. The platform roundup says Snappy supports \"40+ countries\" and charges a \"15% processing fee on gifts\". The address-free post says Snappy has \"global shipping\". Snappy's own homepage says 150+ countries and its pricing page says 176+, and the fee appears nowhere on Snappy's site. Both posts also cite 4.9/5 on G2 for both companies, where the live pages read 4.8. [[goody-blog-platforms]] [[goody-blog-address]] [[snappy-home]] [[snappy-pricing]] [[g2-snappy]] [[g2-goody]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** A wrong country count is checkable in a minute, and once a Snappy rep finds it every true claim on that page dies with it. Fix both lines, then build the page you do not have: Snappy paywalls Slack and Teams at $2,000 a year and you give them away. That is the comparison, and SnackNation currently owns the search for it. [[snappy-pricing]] [[goody-pricing]] [[snacknation]]",
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
              cap: "Product launches announced, by year",
              sub: "Snappy press releases that announce a product, versus months in which Goody shipped something to its public changelog",
              chart: {
                kind: "lines",
                series: [
                  {
                    label: "Snappy product launches",
                    series: "primary",
                    points: [["2022", 2], ["2023", 4], ["2024", 0], ["2025", 4], ["2026", 0]],
                  },
                  {
                    label: "Goody months with a release",
                    series: "us",
                    points: [["2022", 0], ["2023", 0], ["2024", 0], ["2025", 0], ["2026", 8]],
                  },
                ],
                fmt: "num",
                aria:
                  "Snappy announced 2 product launches in 2022, 4 in 2023, 0 in 2024, 4 in 2025 and 0 in 2026. Goody shipped in all 8 months of 2026 so far.",
              },
              legend: [
                { series: "primary", label: "Snappy" },
                { series: "us", label: "Goody" },
              ],
            },
            {
              cap: "HR systems each platform connects to",
              sub: "Native integrations claimed on each company's own pricing or support pages",
              chart: {
                kind: "rows",
                rows: [
                  ["Goody, Jun 2026", 200, "us"],
                  ["Goody, before Jun", 30, "us"],
                  ["Snappy", 40, "primary"],
                ],
                fmt: "num",
                labelAll: true,
                aria: "Goody 200+ HR integrations after June 2026, about 30 before. Snappy 40+.",
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
              claim: "Snappy's 2026 announcements are all research and awards, with no product in them.",
              body: [
                {
                  type: "p",
                  text: "The four 2026 press releases are a workforce study on personalisation (Jun 3), two Telly Awards for a campaign called The Gifting Intervention (May 26), a study saying 72% of employees would stay longer for work anniversary gifts (May 14), and a study saying appreciation beats pay raises (Apr 28). The last product announcement was the AI Gifting Assistant on Oct 15, 2025. Before that, 2025 carried the Covver acquisition, the Enterprise API Suite, and Snappy Stores. [[snappy-press]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Snappy still owns the research argument in this category and Goody has nothing like it. But a competitor that stops shipping for eight months is a competitor whose feature gaps stay open. The 200 HR integrations Goody shipped in June are unlikely to be matched this year. [[goody-updates]]",
                },
              ],
            },
            {
              claim:
                "Goody's most common G2 complaints are for three features Goody has already built.",
              body: [
                {
                  type: "p",
                  text: "Three reviewers asked to let employees top up a gift with their own money, one on Jan 28 and two on Aug 19. Goody shipped exactly that in May 2026 as Recipient Gift Upgrade. A May 20 reviewer wrote that Goody does not \"have a company store feature, but its coming soon\". Company Stores shipped that month and went global in June. An Apr 15 reviewer asked for HubSpot. Goody for HubSpot shipped in July. A Trustpilot reviewer in January 2025 complained there was \"no way\" to exchange a gift for a pricier item and pay the difference, which is the same feature. [[g2-goody]] [[goody-updates]] [[trustpilot-goody]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** These are paying customers publishing complaints about solved problems, and prospects read those reviews. Goody is doing the hard part and skipping the free part. Send the changelog to every account and ask the three named reviewers to update their reviews. [[goody-updates]]",
                },
              ],
            },
            {
              claim:
                "Snappy's own pages disagree with each other about how big Snappy is, on the same page.",
              body: [
                {
                  type: "p",
                  text: "The careers page header says Snappy serves 56% of the Fortune 100 and has sent more than 9M gifts. The job description printed underneath it says \"over 43% of Fortune 100 companies\" and \"more than five million gifts worldwide\". Elsewhere the homepage says 150+ countries and the pricing page says 176+, the homepage says 350,000+ gift options and the pricing page says more than 250,000, and the homepage says 5,000+ companies while the about page says 7,000+. TechCrunch reported 47% of the Fortune 100 in January 2025. [[snappy-careers]] [[snappy-home]] [[snappy-pricing]] [[snappy-about]] [[techcrunch]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Goody has the same disease. Its homepage says 25,000+ companies while its boilerplate says 12,000, and its API page says 600+ brands while its blog says 400+. Neither company can raise this in a sales call until its own numbers agree. Pick one set and change every page. [[goody-home]] [[goody-api]] [[goody-blog-platforms]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Goody should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Reply to the three G2 reviewers asking for features you already built.",
              body: [
                {
                  type: "p",
                  text: "Recipient Gift Upgrade, Company Stores, Forms, HubSpot, Salesforce Flow and 200+ HR integrations all shipped between May and July and customers are still asking for them in public reviews. Name the three G2 reviewers who asked, reply to their reviews with the changelog link, and send the same note to the account list. Cost is one afternoon of a marketer's time and it moves the G2 page, which is what prospects read. [[g2-goody]] [[goody-updates]]",
                },
              ],
            },
            {
              claim: "Put a number on the Team tier. Snappy publishes $2,000 and you publish nothing.",
              body: [
                {
                  type: "p",
                  text: "Snappy publishes $2,000 a year for Elevated. Goody's Team tier says \"chat with us\", which is the exact behaviour Goody's own blog criticises Sendoso, Postal, Reachdesk and Loop & Tie for. A starting-from number costs nothing and removes the only opaque thing on an otherwise transparent pricing page. [[snappy-pricing]] [[goody-pricing]] [[goody-blog-platforms]]",
                },
              ],
            },
            {
              claim: "Make the Slack paywall the headline of the comparison page you have not built.",
              body: [
                {
                  type: "p",
                  text: "Snappy charges $2,000 a year before Slack or Teams notifications work. Goody has more than 200 HR integrations against Snappy's 40-plus, a gifting MCP server that Snappy has no answer to, and a free tier that sends unlimited gifts. Goody currently has no page targeting anyone searching for Snappy. SnackNation already ranks for that comparison and it is not Goody's page. [[snappy-pricing]] [[goody-pricing]] [[snacknation]]",
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
                { text: "Plan" },
                { text: "Snappy" },
                { text: "Goody" },
              ],
              rows: [
                [
                  "Free",
                  "Essential, $0 a year. Unlimited users and gifts, 176+ countries, automated campaigns, branded messaging, Zapier and Make, on-demand swag with no inventory, fulfilment in 30+ countries",
                  "Starter, $0 forever. Unlimited gifts to the US, UK and Canada, up to 1,000+ recipients at once, on-demand swag with no minimums, custom Collections, scheduling, tracking, Google and Microsoft sign-in",
                ],
                [
                  "Middle",
                  "Elevated, $2,000 a year. Adds swag experts, Snappy Stores, 40+ HR systems, Slack and Teams notifications, Chili Piper, branded unwrapping",
                  "Pro, $20 per user per month billed annually. Adds 140+ countries, digital gift cards, custom branding, Calendly, custom cards, send from your own Gmail",
                ],
                [
                  "Top",
                  "Enterprise, on quote. Adds dedicated onboarding, custom kits and bulk with inventory storage, the API suite, Salesforce, single sign-on, custom reveal animations, augmented reality, in-house creative services",
                  "Team, priced per company by size. Adds unlimited seats, budgets, Salesforce and HubSpot, 200+ HR systems, Autogifting, Company Stores, Smart Links, Forms, SAML single sign-on, priority support",
                ],
                [
                  "Gift budget range",
                  "$5 to $15,000",
                  "Not published as a range. Gift prices start around $19 per third-party reviews",
                ],
                [
                  "Slack and Teams",
                  "Paywalled at $2,000 a year, native",
                  "Free tier, but routed through Zapier rather than native",
                ],
                [
                  "AI assistants",
                  "A ChatGPT plugin from Aug 2023 and an in-house Gifting Assistant on the site",
                  "A gifting MCP server shipped Jun 2026 for Claude, ChatGPT and any MCP client",
                ],
              ],
            },
            {
              type: "p",
              text: "The shape of the two pricing pages tells you who each company is built for. Snappy's free tier is unusually generous on geography, covering 176+ countries where Goody's free tier covers three. Goody's free tier is unusually generous on function, giving away swag with no minimums, custom Collections and unlimited sends that Snappy also gives away. The paid step is where they part: Snappy's $2,000 buys integrations, and Goody's $20 a seat buys geography and branding. A ten-person team that gifts internationally is cheaper on Snappy. A fifty-person team that gifts domestically and wants HR automation is cheaper on Goody. [[snappy-pricing]] [[goody-pricing]]",
            },

            {
              type: "table",
              headers: [
                { text: "Feature", w: "30%" },
                { text: "Snappy", w: "35%" },
                { text: "Goody", w: "35%" },
              ],
              rows: [
                ["Send without a shipping address", "Yes", "Yes, and it is the founding idea of the product"],
                ["Recipient chooses their own gift", "Yes, from a curated collection", "Yes, from a collection or the whole store"],
                ["Recipient tops up to a pricier item", "Not offered", "Yes, Recipient Gift Upgrade, shipped May 2026"],
                ["Recipient can donate the value to charity", "Yes, via GetChange and Make-A-Wish", "Charity brands sit in the catalog"],
                ["Countries for physical gifts", "150+ on the homepage, 176+ on the pricing page", "US, UK and Canada free. 140+ on Pro"],
                ["Catalog size", "250,000+ on pricing, 350,000+ on the homepage", "600+ brands on the API page, 400+ on the blog"],
                ["Digital gift cards", "Not listed as a tier feature", "Yes, on Pro"],
                ["Branded swag, no minimums", "Yes, on-demand, fulfilment in 30+ countries", "Yes, print on demand, no minimums"],
                ["Bulk swag with warehousing", "Yes, Enterprise, plus six months free storage", "No warehousing"],
                ["Company store", "Snappy Stores, from $2,000 a year", "Company Stores, free tier, global since June"],
                ["HR system integrations", "40+, from $2,000 a year", "200+, on Team"],
                ["Salesforce", "Enterprise only", "Yes, with Flow automation since July"],
                ["HubSpot", "Not listed", "Yes, since July"],
                ["Slack and Microsoft Teams", "Native, from $2,000 a year", "Via Zapier on the free tier"],
                ["Zapier or Make", "8,000+ apps, free tier", "5,000+ apps"],
                ["AI assistant support", "A ChatGPT plugin from 2023", "An MCP server for Claude, ChatGPT and any MCP client"],
                ["Public API", "Gifting, Rewards and Marketplace, Enterprise only", "Commerce API with revenue share, plus an Automation API"],
                ["Single sign-on", "Enterprise", "SAML as a paid add-on, Google and Microsoft free"],
                ["Named security certification", "Not published on the pricing page", "Not published on the site we could find"],
                ["Public changelog", "No", "Yes, monthly"],
              ],
            },
            { type: "h3", text: "Audit of every claim Goody makes about Snappy" },
            {
              type: "p",
              text: "Goody has no comparison page. Every likely URL returns 404. Its competitor content is two blog posts, and this is every claim in them that touches Snappy, checked against Snappy's own pages on Aug 30. [[goody-blog-platforms]] [[goody-blog-address]]",
            },
            {
              type: "table",
              headers: [
                { text: "Goody says", w: "30%" },
                { text: "Where", w: "16%" },
                { text: "Actually", w: "30%" },
                { text: "Verdict", w: "12%" },
              ],
              rows: [
                ["Snappy supports \"40+ countries\"", "Platform roundup", "Snappy's homepage says 150+, its pricing page says 176+", "Wrong"],
                ["Snappy has \"global shipping\"", "Address-free post", "Broadly right, and it contradicts Goody's other post", "Contradicts"],
                ["Snappy charges a \"15% processing fee on gifts\"", "Platform roundup", "Appears nowhere on Snappy's pricing page or public materials", "Unsourced"],
                ["Snappy has \"4.9/5 stars on G2\"", "Platform roundup", "The live page reads 4.8 across 312 reviews", "Stale"],
                ["Snappy integrates with \"about 30 HRIS platforms\"", "Platform roundup", "Snappy's pricing page says 40+", "Understated"],
                ["Snappy's catalog \"can skew corporate\"", "Platform roundup", "Supported. Catalog quality is 29% of Snappy's complaints", "Holds up"],
                ["Snappy offers \"unlimited gifts on a free plan\"", "Platform roundup", "Correct. Essential is $0 a year", "Holds up"],
              ],
            },
            {
              type: "p",
              text: "Goody's own numbers do not survive the same audit. The roundup says Goody has \"400+ well-known brands\" while the address-free post and the API page say 600+. The roundup says Zapier connects \"9,000+\" apps while Goody's own pricing page says 5,000+. The roundup claims Goody holds an \"Excellent\" rating on Trustpilot, where 20 of the 50 most recent reviews are one or two stars and the average across them is 3.4. It also claims 4.9/5 on G2, where the live page reads 4.8. Fix these before fixing the Snappy lines, because a prospect checking one will check the other. [[goody-blog-platforms]] [[goody-blog-address]] [[goody-api]] [[goody-pricing]] [[trustpilot-goody]] [[g2-goody]]",
            },
            {
              type: "p",
              text: "One open question is now answered. Goody states plainly in its address-free post that \"Goody is SOC 2 certified\", which is Goody's own claim rather than the third-party directory we had before. There is still no security or trust page on the site carrying the certificate, and for an enterprise buyer a line in a blog post is not where procurement looks. Snappy sells \"top-tier compliance\" at its Enterprise tier without naming a certification anywhere public. Whoever publishes a real security page first wins every deal that has a security review in it. [[goody-blog-address]] [[snappy-pricing]]",
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
              cap: "Monthly website visits",
              sub: "Similarweb, pulled Aug 30, 2026",
              chart: {
                kind: "rows",
                rows: [
                  ["Snappy", 210646, "primary"],
                  ["Goody", 170801, "us"],
                  ["Sendoso", 101993, "other"],
                ],
                fmt: "num",
                labelAll: true,
                aria: "Snappy 210,646 monthly visits, Goody 170,801, Sendoso 101,993.",
              },
            },
            {
              cap: "How far visitors go once they arrive",
              sub: "Pages viewed per visit. Higher is better",
              chart: {
                kind: "rows",
                rows: [
                  ["Goody", 6.81, "us"],
                  ["Snappy", 5.82, "primary"],
                  ["Sendoso", 2.49, "other"],
                ],
                fmt: "num",
                labelAll: true,
                aria: "Goody 6.81 pages per visit, Snappy 5.82, Sendoso 2.49.",
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
                "Goody gets 81% of Snappy's traffic on a quarter of the funding, and its visitors go deeper.",
              body: [
                {
                  type: "p",
                  text: "Snappy took 210,646 visits in the month to Aug 30 and Goody took 170,801. Snappy has raised about $130M and Goody about $32M. Goody's visitors view 6.81 pages against Snappy's 5.82 and stay 3:27 against 3:14. Sendoso, which raised $153M, gets 101,993 visits at 2.49 pages and 1:19. The one traffic measure Goody loses is the share who leave from the first page, 39% against Snappy's 33%. [[similarweb-snappy]] [[similarweb-goody]] [[similarweb-sendoso]] [[calcalist]] [[tracxn]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** The funding gap is not showing up as an audience gap, and the engagement numbers say Goody's site is the better one once someone lands. The gap is the landing page: six points more of Goody's visitors bounce. That is a fixable page problem, not a brand problem. [[similarweb-goody]]",
                },
              ],
            },
            {
              claim:
                "Both companies are found by people who already know the name, and neither owns the category search.",
              body: [
                {
                  type: "p",
                  text: "68% of Snappy's visits and 60% of Goody's come from someone typing the address in or clicking a bookmark. For both, direct traffic is the largest single source by a wide margin, ahead of search, mail and referrals. Sendoso is at 44% direct with mail second, which is a different and more campaign-driven mix. [[similarweb-snappy]] [[similarweb-goody]] [[similarweb-sendoso]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Neither company is winning the searches a buyer types when they do not yet have a shortlist. Goody's comparison post ranks twelve platforms and puts itself first, which is useful, but it does not target anyone searching for a named competitor. Build the pages that do. [[goody-blog-platforms]]",
                },
              ],
            },
            {
              claim:
                "Both brand names are close to unsearchable, and it is costing both companies.",
              body: [
                {
                  type: "p",
                  text: "A search for Snappy returns Wirecutter reviews praising \"snappy performance\", Snappy Shopper the UK grocery service, Snappy Tots crochet patterns and Google's Snappy compression library. A search for Goody returns goody bags, Goody Products the hair-accessory brand, Goody's of Bend in Oregon, and Goody Garage Doors in Mesa, Arizona, which owns the Greenhouse job board at boards.greenhouse.io/goody. When we searched the Meta Ad Library for gifting ads, the two highest-volume advertisers matching were Goody's of Bend with 112 ads and an unrelated page called Ooo Goody. [[meta-goody]] [[greenhouse-goody]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Every dollar Goody spends building awareness of the word \"Goody\" partly builds awareness of a garage door company. Bid on and rank for \"ongoody\" and \"Goody business gifting\", never the bare word, and use ongoody consistently in every ad and profile. [[goody-home]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Goody should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Ship three comparison pages. You currently have zero and every URL 404s.",
              body: [
                {
                  type: "p",
                  text: "We checked every likely URL. ongoody.com/compare, /compare/snappy, /business/compare, /vs/snappy, /alternatives/snappy, /snappy-alternative and /compare/sendoso all return 404. Goody owns one blog roundup that ranks twelve platforms with itself first, and nothing that targets a competitor's name. SnackNation ranks for \"Snappy vs. Goody\" and Sendoso publishes a page that names Goody. Three pages, one afternoon each, using the feature matrix already in this report. [[snacknation]] [[sendoso-alternatives]] [[goody-blog-platforms]]",
                },
              ],
            },
            {
              claim: "Fix the 39% bounce before you pay to send anyone to that page.",
              body: [
                {
                  type: "p",
                  text: "39% of Goody's visitors leave from the first page against Snappy's 33%. Anyone Goody pays to send there arrives at that same page. Six points of bounce on paid traffic is six points of wasted budget, and this is the cheapest thing to fix before the Meta campaign in the next section starts. [[similarweb-goody]] [[similarweb-snappy]]",
                },
              ],
            },
            {
              claim: "Answer the r/SmallBusiness_US thread today, while it still has no replies.",
              body: [
                {
                  type: "p",
                  text: "The r/SmallBusinessOwners thread on Sendoso renewal pricing, the r/RecruitmentAgencies thread on consolidating four vendors costing $14k a year in platform fees, and the r/sales thread from an individual rep who cannot get a new vendor approved are each Goody's free tier written as a problem statement. In the single most-cited gifting recommendation thread on Reddit, Goody was named once and by a Goody employee identifying as one. That is honest and it is not organic mention volume. [[reddit]]",
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
                { text: "Measure", w: "26%" },
                { text: "Snappy", n: true, w: "16%" },
                { text: "Goody", n: true, w: "16%" },
                { text: "Sendoso", n: true, w: "16%" },
                { text: "Reading" },
              ],
              rows: [
                ["Monthly visits", "210,646", "170,801", "101,993", "Goody is at 81% of Snappy"],
                ["Global rank", "156,436", "167,701", "374,215", "Snappy and Goody are close, Sendoso is far behind"],
                ["Typed the address in", "68%", "60%", "44%", "Both are brand-led, Sendoso is campaign-led"],
                ["Pages per visit", "5.82", "6.81", "2.49", "Goody wins"],
                ["Time on site", "3:14", "3:27", "1:19", "Goody wins"],
                ["Left from first page", "33%", "39%", "41%", "Snappy wins, and this is Goody's fixable gap"],
                ["Visitors from the US", "82%", "77%", "74%", "All three are US businesses"],
              ],
            },
            {
              type: "p",
              text: "Read the traffic table as a story about money. Snappy has raised roughly four times what Goody has and converts that into 23% more visits, with worse engagement on every measure except bounce. Sendoso raised more than either and gets half of Snappy's traffic with a third of the depth. In a category where the product is a catalog and a checkout, time on site and pages per visit are close proxies for whether people are actually browsing gifts. Goody wins both. [[similarweb-snappy]] [[similarweb-goody]] [[similarweb-sendoso]]",
            },
            {
              type: "p",
              text: "One caveat on all of this. Similarweb figures are estimates built from panel data and they carry real error bars at this traffic level. The ratios between three sites measured the same way on the same day are more trustworthy than any single number. Nothing here should be quoted as Snappy's actual traffic. [[similarweb-snappy]]",
            },
            {
              type: "p",
              text: "On review sites, the two companies are level and both are growing. Snappy has 312 G2 reviews at 4.8 and Goody has 235 at 4.8. Goody's reviews cluster hard on specific dates, with large batches on May 20 and 21 and again on Aug 19 and 20, and several reviewers mention a webinar in the text. That is a review drive, which is a normal and legitimate tactic, but it means Goody's G2 score reflects a prompted audience while its Trustpilot score reflects an unprompted one. The gap between the two is the honest measure. [[g2-goody]] [[g2-snappy]] [[trustpilot-goody]]",
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
              cap: "Snappy's live Meta ads, by launch date",
              sub: "38 of 41 active ads captured. Goody's bar would be zero on every date",
              chart: {
                kind: "columns",
                rows: [
                  ["May 29", 3],
                  ["Jun 24", 10],
                  ["Aug 12", 7],
                  ["Aug 17", 18],
                ],
                fmt: "num",
                label: [0, 3],
                aria:
                  "Snappy Meta ad launches: 3 in late May, 10 in late June, 7 on August 12 to 13, 18 on August 17 to 19.",
              },
            },
            {
              cap: "Why people complain, sorted",
              sub: "17 Snappy complaints sorted into one bucket each, the one the reviewer led with. Counts: 6, 5, 2, 2, 1, 1",
              chart: {
                kind: "share",
                rows: [
                  ["Delivery and fulfilment", 35, "neg"],
                  ["Catalog and choice", 29, "neg"],
                  ["Value and pricing", 12, "neu"],
                  ["Support and billing", 12, "neu"],
                  ["Redemption mechanics", 6, "neu"],
                  ["Country not supported", 6, "neu"],
                ],
                aria:
                  "Snappy objection mix: delivery 35%, catalog 29%, value 12%, support 12%, redemption 6%, country 6%.",
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
                "Snappy is building its holiday campaign now: 25 of its 41 live ads launched between Aug 12 and Aug 19.",
              body: [
                {
                  type: "p",
                  text: "Snappy's live ads fall into four launch clusters: 3 on May 29 and 30, 10 on Jun 24 and 25, 7 on Aug 12 and 13, and 18 on Aug 17 to 19. All 41 run across Facebook, Instagram, Messenger, Audience Network and Threads at once. 20 are video, 10 are image and 8 are dynamic catalog ads. 20 point at the homepage, 15 at snappy.com/corporate-gifting and 3 at a campaign page called 805-corporate-gifting. Every one is made in-house. [[meta-snappy]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Gifting revenue is concentrated in the fourth quarter and Snappy is buying attention in August to be in-market by October. Goody publishes a holiday gift guide but buys no social distribution for it. The window to start is now, not November. [[goody-updates]]",
                },
              ],
            },
            {
              claim:
                "The Aug 17 batch is Snappy converting its research into ad copy, and it is the sharpest work either company is doing.",
              body: [
                {
                  type: "p",
                  text: "The ten ads launched on Aug 17 drop the old \"send 1 to 1,000+ gifts\" line for retention arguments taken from Snappy's own workforce studies. Examples: \"Appreciation is the #1 retention driver\", \"Retention isn't about bigger paychecks, it's about feeling valued\", \"Stop sending gifts nobody wears\" and \"Most branded swag ends up in a drawer. Snappy's doesn't.\" One ad cites \"Rated 4.9/5 by 300+ reviewers on G2\". Four of the ten are about swag, which is new since the Covver acquisition. [[meta-snappy]] [[snappy-press]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** This is the playbook to copy: publish research, then buy distribution for the conclusion. Goody has better data than Snappy on what people actually choose, because recipients pick their own gift, and it publishes none of it. That is a report Goody could write from its own database. [[goody-updates]]",
                },
              ],
            },
            {
              claim:
                "Eight of the 41 ads have been serving unrendered template code for eleven days.",
              body: [
                {
                  type: "p",
                  text: "The eight dynamic catalog ads launched Aug 18 and 19 show {{product.brand}} where the body text should be and {{product.name}} where the headline should be. The product feed is not resolving. They point at snappy.com/corporate-gifting and were still live on Aug 30. Snappy's other 30 ads carry the headline \"#1 Employee Gifting Platform\" and the call to action is \"Learn more\" on 25 of them and \"See details\" on 13. [[meta-snappy]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Twenty percent of a competitor's live holiday inventory is broken and nobody has noticed in eleven days. Take screenshots now. It is also the specific mistake for Goody to avoid when it launches: verify the catalog feed before turning dynamic ads on. [[meta-snappy]]",
                },
              ],
            },
            {
              claim:
                "The reason people are unhappy with Snappy is delivery and catalog quality, not price.",
              body: [
                {
                  type: "p",
                  text: "Sorting 17 Snappy complaints into one bucket each, the one the reviewer led with: delivery and fulfilment 6, catalog and choice 5, value and pricing 2, support and billing 2, redemption mechanics 1, country not supported 1. In their words: \"Picked a gift on Dec 28, still waiting February 3\", \"I received a used and refurbished item\", \"selected trio gourmet chocolate and they sent 1 shortbread, 1 mint crunch and 1 lindor\", \"The choices are awful. They buy the last crap that no one else wants\", \"Site selection is awful\". [[trustpilot-snappy]] [[g2-snappy]] [[capterra-snappy]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Catalog quality is 29% of Snappy's complaints and it is Goody's single strongest asset, described by one G2 reviewer as \"like Amazon but with all the junky stuff filtered out\". That is the comparison to make. Goody should not touch the delivery argument until its own delivery is fixed. [[g2-goody]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Goody should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Launch on Meta in September and lead with the price Snappy never mentions.",
              body: [
                {
                  type: "p",
                  text: "Copy Snappy's structure: all five placements, video-first, a small number of creatives with several copies each, one campaign landing page rather than the homepage. Do not copy the copy. None of Snappy's 41 ads mentions price, and Goody's free tier with no software contract is the strongest sentence available to it. Goody already runs Google ads as a verified advertiser, so the account structure and creative process exist. [[meta-snappy]] [[google-ads-goody]] [[goody-pricing]]",
                },
              ],
            },
            {
              claim: "Publish what recipients actually chose. You have the data Snappy has to survey for.",
              body: [
                {
                  type: "p",
                  text: "Snappy's four 2026 press releases are all workforce research and it is working, because the Aug 17 ads are built from it. Goody sits on something Snappy cannot easily match: a record of what recipients actually chose when given a budget, by season, region and price point. That is one analyst and two weeks, and it feeds a year of ad copy. Goody is hiring a Data Analyst right now. [[snappy-press]] [[goody-jobs]]",
                },
              ],
            },
            {
              claim: "Fix expiry and substitution, then make the recipient experience the whole pitch.",
              body: [
                {
                  type: "p",
                  text: "Goody's own top two complaint buckets are delivery at 4 of 12 and redemption at 3 of 12: a gift substituted without consent, funds forfeited, a gift expired without notice after the vendor failed to deliver. Recipient Gift Upgrade already fixed the exchange complaint. Fix the expiry and substitution rules, publish the policy, and Goody owns the only ground in this category nobody is standing on. [[trustpilot-goody]] [[goody-updates]]",
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
              type: "fig",
              panels: [
                {
                  cap: "Why people complain about Goody, sorted",
                  sub: "12 Goody complaints sorted the same way. Counts: 4, 3, 2, 1, 1, 1. Percentages are rounded and sum to 99",
                  chart: {
                    kind: "share",
                    rows: [
                      ["Delivery and fulfilment", 33, "neg"],
                      ["Redemption mechanics", 25, "neg"],
                      ["Advertised versus delivered", 17, "neu"],
                      ["Value and pricing", 8, "neu"],
                      ["Catalog and choice", 8, "neu"],
                      ["Support and billing", 8, "neu"],
                    ],
                    aria:
                      "Goody objection mix: delivery 33%, redemption 25%, advertised versus delivered 17%, value 8%, catalog 8%, support 8%.",
                  },
                },
              ],
            },
            {
              type: "p",
              text: "This is the first report in this series, so there is no previous mix to compare against. Both mixes above are the baseline. From next week the two numbers to watch are Snappy's catalog share, currently 29%, and Goody's redemption share, currently 25%. Goody sorted 12 of the 20 one and two star Trustpilot reviews in its 50 most recent, because the other 8 had no readable body text in the pull. Snappy sorted 17 across Trustpilot, G2 and Capterra. Neither sample is large and both should be read as direction, not measurement. [[trustpilot-goody]] [[trustpilot-snappy]]",
            },
            {
              type: "p",
              text: "The two mixes are not the same shape and the difference is the whole competitive story. Snappy's problem is what is in the box: 29% of its complaints are that the catalog is cheap, thin or out of stock, with one reviewer writing that Snappy buys \"the last crap that no one else wants to buy anymore for a big discount\". Goody's problem is what happens around the box: 25% of its complaints are about money that could not be spent, exchanged or refunded, and 17% are about the product not matching what was advertised. Goody's catalog is not the complaint. Goody's mechanics are. [[trustpilot-snappy]] [[trustpilot-goody]]",
            },
            {
              type: "p",
              text: "Say plainly what this is not. Complaint volume shows that customers are available and why they are unhappy. It does not show that either company is losing users. Activation and retention live in each company's own analytics and no outside tool can see them. One Snappy customer of three years wrote on Jul 15 that they are \"currently shopping for alternatives\", and that is a lead, not evidence of a trend. [[trustpilot-snappy]]",
            },
            {
              type: "table",
              headers: [
                { text: "Channel", w: "20%" },
                { text: "Snappy" },
                { text: "Goody" },
              ],
              rows: [
                [
                  "Facebook and Instagram",
                  "41 active ads, all in-house, five placements, 20 video and 10 image and 8 dynamic. Page named Snappy Gifts",
                  "None. No record of any ad, active or inactive, in any country",
                ],
                [
                  "Google",
                  "About 300 ads on record in the US as Snappy App inc, verified",
                  "About 300 ads on record in the US as Goody Technologies, Inc., verified",
                ],
                [
                  "Creator and referral programs",
                  "None found on Meta. No published creator or affiliate program",
                  "None found. No published creator or affiliate program",
                ],
                [
                  "X",
                  "Named in 0 of 100 top posts across 14 days of gifting searches",
                  "Named in 0 of 100 top posts across the same pull",
                ],
                [
                  "Reddit",
                  "Named in 0 of 400 posts pulled since Jul 30",
                  "Named in 0 of 400 posts pulled since Jul 30",
                ],
                [
                  "Original research",
                  "Four 2026 press releases, all workforce studies or awards. Feeds the Aug 17 ad copy directly",
                  "None. Blog is gift guides and product posts",
                ],
              ],
            },
            { type: "h3", text: "Creative watch list" },
            {
              type: "p",
              text: "The ads to re-check every week. Meta shows how many copies of each creative are running, and a creative that Snappy keeps duplicating is one that is working for it. Three of Snappy's June creatives run at three copies each, which is the highest in the set and the closest thing to a public signal of what Snappy believes in. [[meta-snappy]]",
            },
            {
              type: "table",
              headers: [
                { text: "Launched", w: "9%", nw: true },
                { text: "Copies", n: true, w: "8%" },
                { text: "Ad" },
                { text: "Lands on", w: "22%" },
              ],
              rows: [
                [
                  "Jun 24",
                  "3",
                  "\"Simplify your client and employee holiday gifting with Snappy. Try Snappy's employee gifting. Send unique, curated gifts employees love, fast, scalable, and 100% HR-approved.\" The holiday message, running since June",
                  "snappy.com",
                ],
                [
                  "Aug 12",
                  "3",
                  "\"Snappy makes client and employee gifting effortless. Send 1 to 1,000+ gifts for personalized moments.\" The volume message, moved onto the campaign page for the holiday build",
                  "snappy.com/corporate-gifting",
                ],
                [
                  "Aug 17",
                  "1",
                  "\"Retention isn't about bigger paychecks, it's about feeling valued. Snappy makes corporate gifting effortless, with curated gifts your team and clients will actually love. Rated 4.9/5 by 300+ reviewers on G2.\" The only ad in the set that cites a review score",
                  "snappy.com",
                ],
                [
                  "Aug 17",
                  "1",
                  "\"Most branded swag ends up in a drawer. Snappy's doesn't.\" The swag argument, new since the Covver acquisition and the sharpest line in the set",
                  "snappy.com",
                ],
                [
                  "Aug 18",
                  "1",
                  "Eight dynamic catalog ads showing the literal text {{product.brand}} as the body and {{product.name}} as the headline. Broken since launch and still running on Aug 30",
                  "snappy.com/corporate-gifting",
                ],
              ],
            },
            { type: "h3", text: "Switch evidence" },
            {
              type: "p",
              text: "Every post in this window where somebody says they actually moved, or are actively moving, and where they went. This is a thin table and it should be read as thin. It is also the only view anyone outside these companies gets of whether customers stay. [[trustpilot-snappy]] [[reddit]]",
            },
            {
              type: "table",
              headers: [
                { text: "Date", w: "8%", nw: true },
                { text: "Who", w: "24%" },
                { text: "What they said" },
                { text: "Moving to", w: "16%" },
              ],
              rows: [
                [
                  "Jul 15",
                  "A Snappy customer of three years",
                  "\"Over the past year there is more than a $1000 discrepancy... I have been ghosted and cannot escalate my concerns. I'm currently shopping for alternatives.\"",
                  "Not named yet. This is the one to reach",
                ],
                [
                  "Apr 11",
                  "A 40-person startup on r/SmallBusinessOwners",
                  "Sendoso renewal quote they \"had to read twice because I thought there was a mistake\", for birthday gifts, welcome kits and thank-yous",
                  "Asking the thread",
                ],
                [
                  "May 16",
                  "HR at a 200-person company on r/RecruitmentAgencies",
                  "Four gifting vendors costing \"roughly $14k\" a year in platform access fees before anyone ordered anything, consolidating to two",
                  "Asking the thread",
                ],
                [
                  "Mar 20",
                  "An individual rep on r/sales",
                  "\"My company currently uses Thnks as a gifting platform and I can't stand it... the company is huge so wouldn't consider a new vendor\"",
                  "Wants something they can buy alone",
                ],
              ],
            },
            {
              type: "p",
              text: "Three of those four are people asking a public forum which platform to buy, and Goody answered none of them. In the most-cited gifting recommendation thread on Reddit, Snappy is named twice by different people, PerkUp three times and Awardco twice. Goody is named once, by a Goody employee who says \"my company, ongoody.com, does this\". That is honest of them and it is not organic mention volume, and it should never be counted as such. [[reddit]]",
            },
            {
              type: "p",
              text: "What is knowable from outside and what is not. Meta publishes every active ad and its launch date, so the 41 count and the Aug 12 to 19 build are facts. Google publishes a rounded count of ads on record but not spend, dates or whether they are still running, so \"about 300 each\" says both companies advertise and nothing about who spends more. Neither library publishes budget. Any dollar figure for either company's ad spend would be a guess and none appears in this report. [[meta-snappy]] [[google-ads-snappy]] [[google-ads-goody]]",
            },
            {
              type: "p",
              text: "X is worth one paragraph and then ignoring. A pull of the 100 top posts over 14 days on gifting terms returned almost entirely small vendors in India, Nigeria and the Gulf advertising hampers and branded notebooks, plus old TechCrunch funding stories. Neither Snappy nor Goody was named once. The one genuinely useful post was from Will Manidis on Jul 30, with 918 likes, arguing that corporate gifting declined because \"counter parties so rarely know home addresses (no ea to ask)\". That is Goody's product thesis stated by a stranger to an audience of thousands, and nobody from Goody replied. [[x-search]]",
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
              sub: "Snappy's Ashby board and Goody's job site, Aug 30, 2026",
              chart: {
                kind: "rows",
                rows: [
                  ["Snappy: customer success", 2, "primary"],
                  ["Snappy: engineering", 1, "primary"],
                  ["Snappy: product", 1, "primary"],
                  ["Snappy: legal", 1, "primary"],
                  ["Snappy: swag operations", 1, "primary"],
                  ["Goody: engineering and design", 2, "us"],
                  ["Goody: marketing, both contract", 2, "us"],
                ],
                fmt: "num",
                labelAll: true,
                aria:
                  "Snappy has 6 open jobs: 2 customer success, 1 engineering, 1 product, 1 legal, 1 swag operations. Goody has 4: 2 engineering and design, 2 contract marketing.",
              },
            },
            {
              cap: "Open jobs per hundred employees",
              sub: "Snappy says more than 200 staff. Goody is estimated at about 59",
              chart: {
                kind: "rows",
                rows: [
                  ["Goody", 6.8, "us"],
                  ["Snappy", 3.0, "primary"],
                ],
                fmt: "num",
                labelAll: true,
                aria: "Goody 6.8 open jobs per hundred employees, Snappy 3.0.",
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
                "Snappy has more than 200 employees and one open engineering job, and it is in Tel Aviv.",
              body: [
                {
                  type: "p",
                  text: "Snappy's board carries six roles: a Senior Full Stack Engineer and a Lead Product Manager, both hybrid in Tel Aviv, plus an Enterprise Customer Success Manager, a Strategic CSM, an Associate General Counsel and a Solutions Consultant for swag, all remote in the US. There is no marketing role open at all. The careers page says Snappy is \"headquartered in New York City and has an office in Tel Aviv\" with \"more than 200 talented employees\". [[snappy-careers]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** One engineer across 200 people is not a company about to out-ship anyone, which matches the eight-month product silence. Two of the six roles are customer success, which is where you hire when accounts need holding rather than winning. Goody's integration lead is safe this year. [[snappy-press]] [[goody-updates]]",
                },
              ],
            },
            {
              claim:
                "Snappy's swag job says the swag business is still being invented and is chasing $500,000 programs.",
              body: [
                {
                  type: "p",
                  text: "The Solutions Consultant listing asks for \"4+ years of distributor-side experience in the branded merchandise or promotional products industry\" and \"experience with complex projects at or above the $500k+ level\". It says outright that \"the playbook here is still being written\" and that \"if you've spent your career moving high volumes of inexpensive items, this role probably isn't the right fit\". It pays $80,000 to $95,000 plus bonus, and Snappy states \"we feel passionately about transparency in compensation\". [[snappy-careers]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** Twenty months after buying Covver, Snappy still needs an outside hire to make swag work, and it is aiming at half-million-dollar enterprise programs. That is the opposite end of the market from Goody's no-minimum, print-on-demand swag. Goody should sell hard to everyone below that line while Snappy staffs up above it. [[techcrunch]] [[goody-updates]]",
                },
              ],
            },
            {
              claim:
                "Goody is hiring a $200,000 product designer and two contract marketers, which is a product-led company with a thin marketing bench.",
              body: [
                {
                  type: "p",
                  text: "Goody's four roles are a Data Analyst at $80,000 to $140,000 plus equity, a Lead Product Designer at $200,000 to $250,000 plus equity, a Field Marketing and Events Coordinator in San Francisco at $7,000 to $10,000 a month on contract, and a Product Marketing Manager on contract. Both marketing roles are contract and both product roles are permanent with equity. Goody publishes a salary band on three of the four. [[goody-jobs]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for Goody:** The highest-paid open role at Goody is a designer and the marketing roles are contractors, which explains why a company shipping monthly has no Meta presence and no research program. If the Meta campaign in the previous section is going to happen, it needs an owner, and right now that owner is a contractor who has not started. [[goody-jobs]] [[meta-goody]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What Goody should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Point the Data Analyst you are already hiring at the gift-choice report first.",
              body: [
                {
                  type: "p",
                  text: "The role is already open at $80,000 to $140,000. Snappy's entire 2026 marketing output is research, and its best ads are built from it. Goody's recipient-choice model generates the data Snappy has to survey for. Make the first deliverable a public report on what people actually pick, and it pays for the hire in ad copy alone. [[goody-jobs]] [[snappy-press]]",
                },
              ],
            },
            {
              claim: "Give the Meta campaign to the contract marketer on day one. Nobody else can own it.",
              body: [
                {
                  type: "p",
                  text: "The role is open and unfilled, the holiday window closes in September, and there is no permanent marketer to hand it to. Scope the contract around one deliverable: a live Meta campaign by the end of September, built on the free tier message, with a verified product feed. Snappy's eight broken ads show what happens without that last check. [[goody-jobs]] [[meta-snappy]]",
                },
              ],
            },
            {
              claim: "Recruit from Snappy's customer success team. They know which accounts are unhappy.",
              body: [
                {
                  type: "p",
                  text: "Snappy is hiring two customer success managers and no marketers, and third-party employee reviews put its sales organisation at 2.8 out of 5. People who have spent two years apologising for delivery problems know exactly which accounts are unhappy and why. Goody has no open GTM role, and one experienced hire from that team would be worth more than the contract marketing spend. [[repvue]] [[snappy-careers]]",
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
                { text: "Company", w: "10%" },
                { text: "Role" },
                { text: "Where", w: "16%" },
                { text: "Pay", w: "20%" },
              ],
              rows: [
                [
                  "Snappy",
                  "[Senior Full Stack Engineer](https://www.snappy.com/careers?ashby_jid=c18e68d0-9c2c-4aa8-8bc7-7264849c16eb)",
                  "Tel Aviv, hybrid",
                  "Not published",
                ],
                [
                  "Snappy",
                  "[Lead Product Manager](https://www.snappy.com/careers?ashby_jid=d2fb3514-a044-4268-a0e6-7a2d1ac864ba)",
                  "Tel Aviv, hybrid",
                  "Not published",
                ],
                [
                  "Snappy",
                  "[Enterprise Customer Success Manager](https://www.snappy.com/careers?ashby_jid=a7867fc5-a57d-4390-9af5-cd2894247ad7)",
                  "Remote, US",
                  "Not published",
                ],
                [
                  "Snappy",
                  "[Strategic CSM](https://www.snappy.com/careers?ashby_jid=e5e994d8-1746-40ae-9707-2fb6e3eb52d7)",
                  "Remote, US",
                  "Not published",
                ],
                [
                  "Snappy",
                  "[Associate General Counsel, Director](https://www.snappy.com/careers?ashby_jid=51b7f7a0-3d60-47cb-8e20-e7f08229bbc5)",
                  "Remote, US",
                  "Not published",
                ],
                [
                  "Snappy",
                  "[Solutions Consultant, Swag](https://www.snappy.com/careers?ashby_jid=e6fc7257-c674-43a9-9b69-23fdb68a4a67)",
                  "Remote, US",
                  "$80K to 95K plus bonus",
                ],
                [
                  "Goody",
                  "[Lead Product Designer](https://jobs.ongoody.com/lead-product-designer)",
                  "US or Canada, remote",
                  "$200K to 250K plus equity",
                ],
                [
                  "Goody",
                  "[Data Analyst](https://jobs.ashbyhq.com/goody/df70c3ea-1233-463c-8a7f-70e4ebe3342d)",
                  "US, remote",
                  "$80K to 140K plus equity",
                ],
                [
                  "Goody",
                  "[Field Marketing & Events Coordinator](https://jobs.ashbyhq.com/goody/74d4d5c5-55e8-45a9-8306-d3b9955080cd)",
                  "San Francisco, onsite",
                  "$7K to 10K a month, contract",
                ],
                [
                  "Goody",
                  "[Product Marketing Manager](https://jobs.ashbyhq.com/goody/76e659a5-dece-43de-821e-fd0b409346de)",
                  "US, remote",
                  "Contract, not published",
                ],
              ],
            },
            {
              type: "p",
              text: "Job ads say what marketing will not, and Snappy's swag listing is the clearest example this week. It asks for someone \"comfortable in ambiguity\" who is \"genuinely curious about and fluent with AI tools\", and it describes a role where the person will be \"the resource GTM actively request on every swag conversation\". Read together with \"the playbook here is still being written\", that is a swag business twenty months past acquisition that has not yet been made repeatable. [[snappy-careers]] [[techcrunch]]",
            },
            {
              type: "p",
              text: "The same page carries the clearest example of Snappy's numbers problem. The careers header says 56% of the Fortune 100 and more than 9M gifts. The job description below it, on the same page, says \"over 43% of Fortune 100 companies\" and \"more than five million gifts worldwide\". TechCrunch reported 47% in January 2025. Somebody is updating the marketing pages and nobody is updating the recruiting boilerplate. [[snappy-careers]] [[snappy-about]] [[techcrunch]]",
            },
            {
              type: "p",
              text: "Neither company is growing headcount quickly. Snappy has six openings against more than 200 staff, which is 3.0 per hundred. Goody has four against an estimated 59, which is 6.8 per hundred, though the estimate comes from a third-party model rather than from Goody. Two of Goody's four are contracts. Neither of these is a company in a hiring sprint, and in Snappy's case the mix of two customer success roles and one engineer is the more telling detail. [[snappy-careers]] [[goody-jobs]] [[latka]]",
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
            "Data tools, all pulled Aug 30, 2026: [[similarweb-snappy]], [[similarweb-goody]] and [[similarweb-sendoso]] (visits, traffic sources, pages per visit, time on site, bounce, countries, ranks), [[meta-snappy]] and [[meta-goody]] (every active Meta ad for both companies: launch dates, formats, placements, headlines, body text, landing pages, copy counts), [[google-ads-snappy]] and [[google-ads-goody]] (Google's public record of ads and advertiser verification), [[trustpilot-snappy]], [[trustpilot-goody]], [[g2-snappy]], [[g2-goody]] and [[capterra-snappy]] (full review text and ratings), [[x-search]] (100 top posts over 14 days), [[reddit]] (400 posts on five gifting search terms, 14 on topic).",
            "Snappy's own pages: [homepage](https://www.snappy.com/), [pricing](https://www.snappy.com/pricing), [about us](https://www.snappy.com/about-us), [press release archive](https://www.snappy.com/press-release-archive), [careers and the Ashby board](https://www.snappy.com/careers), [corporate gifting landing page](https://www.snappy.com/corporate-gifting), [API suite](https://www.snappy.com/api), [swag](https://www.snappy.com/swag), [HRIS integrations](https://www.snappy.com/hris-integrations).",
            "Goody's own pages: [homepage](https://www.ongoody.com/), [pricing](https://www.ongoody.com/business/pricing), [product updates](https://www.ongoody.com/business/product-updates), [gift API](https://www.ongoody.com/business/gift-api), [the 12 best corporate gifting platforms post](https://www.ongoody.com/blog/best-corporate-gifting-platforms), [gifting MCP](https://www.ongoody.com/blog/gifting-mcp), [swag](https://www.ongoody.com/swag), [careers](https://jobs.ongoody.com/).",
            "Press and third parties: [[techcrunch|TechCrunch on the Covver acquisition]], [[calcalist|Calcalist on the Series D at half the previous valuation]], [[tracxn|Tracxn on Goody's total raised]], [[latka|GetLatka's headcount and revenue estimate for Goody]], [[repvue|RepVue employee ratings for Snappy]], [[snacknation|SnackNation's Snappy versus Goody comparison]], [[sendoso-alternatives|Sendoso's own alternatives page, which names Goody]], [[saleshive|SalesHive's Goody profile and its unconfirmed SOC 2 claim]], [[greenhouse-goody|the Greenhouse board belonging to Goody Garage Doors]].",
            "Posts and reviews quoted in the reply table: [a Snappy customer of three years shopping for alternatives](https://www.trustpilot.com/reviews/6a57cf277256d6fc08612cf6), [the $225 gift with under $100 of options](https://www.trustpilot.com/reviews/6a5fdd33d9c6fcb5d4d7595f), [r/SmallBusinessOwners on Sendoso renewal pricing](https://www.reddit.com/r/SmallBusinessOwners/comments/1sinicb/budgetfriendly_sendoso_alternatives/), [r/RecruitmentAgencies on consolidating four gifting vendors](https://www.reddit.com/r/RecruitmentAgencies/comments/1tef2bs/consolidating_corporate_gifting_companies_4/), [r/sales on gifting platforms an individual rep can use](https://www.reddit.com/r/sales/comments/1rz3ced/gifting_platforms_like_sendoso_that_an_ic_can_use/), [Will Manidis on addresses and corporate gifting](https://x.com/WillManidis/status/2081847567566954519).",
          ],
        },
      ],
    },
  ],
  footer:
    "Traffic figures are Similarweb estimates, so trust the ratios between the three sites rather than any single number. Meta ad counts are exact and dated. Review samples are small, so read direction rather than decimals. Pulled Aug 30, 2026.",
  sources: {
    "similarweb-snappy": { label: "Similarweb", href: "https://www.similarweb.com/website/snappy.com/", logo: "similarweb" },
    "similarweb-goody": { label: "Similarweb", href: "https://www.similarweb.com/website/ongoody.com/", logo: "similarweb" },
    "similarweb-sendoso": { label: "Similarweb", href: "https://www.similarweb.com/website/sendoso.com/", logo: "similarweb" },
    "meta-snappy": {
      label: "Meta Ad Library",
      href: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&view_all_page_id=829755773552633",
      logo: "meta-ad-library",
    },
    "meta-goody": {
      label: "Meta Ad Library",
      href: "https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&q=ongoody&search_type=keyword_unordered",
      logo: "meta-ad-library",
    },
    "google-ads-snappy": {
      label: "Google Ads Transparency",
      href: "https://adstransparency.google.com/?region=US&domain=snappy.com",
      logo: "google-ads-transparency",
    },
    "google-ads-goody": {
      label: "Google Ads Transparency",
      href: "https://adstransparency.google.com/?region=US&domain=ongoody.com",
      logo: "google-ads-transparency",
    },
    "g2-snappy": { label: "G2", href: "https://www.g2.com/products/snappy-snappy/reviews", logo: "g2" },
    "g2-goody": { label: "G2", href: "https://www.g2.com/products/goody-goody/reviews", logo: "g2" },
    "trustpilot-snappy": { label: "Trustpilot", href: "https://www.trustpilot.com/review/meetsnappy.com", logo: "trustpilot" },
    "trustpilot-goody": { label: "Trustpilot", href: "https://www.trustpilot.com/review/ongoody.com", logo: "trustpilot" },
    "capterra-snappy": { label: "Capterra", href: "https://www.capterra.com/p/180346/Snappy/reviews/", logo: "capterra" },
    "x-search": { label: "X", href: "https://x.com/search?q=%22corporate%20gifting%22%20OR%20snappy.com%20OR%20ongoody&f=top", logo: "x" },
    reddit: { label: "Reddit", href: "https://www.reddit.com/search/?q=corporate%20gifting%20platform&sort=new", logo: "reddit" },
    "snappy-home": { label: "Snappy", href: "https://www.snappy.com/", logo: "snappy" },
    "snappy-pricing": { label: "Snappy", href: "https://www.snappy.com/pricing", logo: "snappy" },
    "snappy-about": { label: "Snappy", href: "https://www.snappy.com/about-us", logo: "snappy" },
    "snappy-press": { label: "Snappy", href: "https://www.snappy.com/press-release-archive", logo: "snappy" },
    "snappy-careers": { label: "Snappy", href: "https://www.snappy.com/careers", logo: "ashby" },
    "goody-home": { label: "Goody", href: "https://www.ongoody.com/", logo: "goody" },
    "goody-pricing": { label: "Goody", href: "https://www.ongoody.com/business/pricing", logo: "goody" },
    "goody-updates": { label: "Goody", href: "https://www.ongoody.com/business/product-updates", logo: "goody" },
    "goody-api": { label: "Goody", href: "https://www.ongoody.com/business/gift-api", logo: "goody" },
    "goody-blog-address": {
      label: "Goody",
      href: "https://www.ongoody.com/blog/send-employee-gifts-without-collecting-home-addresses",
      logo: "goody",
    },
    "goody-blog-platforms": { label: "Goody", href: "https://www.ongoody.com/blog/best-corporate-gifting-platforms", logo: "goody" },
    "goody-jobs": { label: "Goody", href: "https://jobs.ongoody.com/", logo: "ashby" },
    techcrunch: {
      label: "TechCrunch",
      href: "https://techcrunch.com/2025/01/10/snappy-aquires-swag-gifting-startup-covver-as-it-seks-to-roll-up-players/",
      logo: "techcrunch",
    },
    calcalist: { label: "Calcalist", href: "https://www.calcalistech.com/ctechnews/article/rkta8m3ec", logo: "calcalist" },
    tracxn: { label: "Tracxn", href: "https://tracxn.com/d/companies/goody/__bmnzFes48_ip3-M6Nmy1J4_Oqrs9WOrXWkXE1NDz8RM", logo: "latka" },
    latka: { label: "GetLatka", href: "https://getlatka.com/companies/ongoody.com", logo: "latka" },
    repvue: { label: "RepVue", href: "https://www.repvue.com/companies/SnappyGifts", logo: "linkedin" },
    snacknation: { label: "SnackNation", href: "https://snacknation.com/blog/snappy-vs-goody/", logo: "google" },
    "sendoso-alternatives": {
      label: "Sendoso",
      href: "https://www.sendoso.com/resources/blog/reachdesk-alternatives-competitors",
      logo: "sendoso",
    },
    saleshive: { label: "SalesHive", href: "https://saleshive.com/vendors/goody", logo: "google" },
    "greenhouse-goody": { label: "Greenhouse", href: "https://boards.greenhouse.io/goody", logo: "ashby" },
  },
};
