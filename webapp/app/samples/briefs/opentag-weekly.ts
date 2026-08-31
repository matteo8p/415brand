import type { Brief } from "./types";

export const opentagWeekly: Brief = {
  slug: "opentag-weekly-08-31-2026",
  title: "Claude Tag weekly brief: brand & competitive analysis",
  sub: "For the OpenTag founders, August 31, 2026",
  subject: "Claude Tag",
  client: "OpenTag",
  intro: [
    { type: "h3", text: "Recommended actions for OpenTag from the analysis" },
    {
      type: "moves",
      collapsed: true,
      items: [
        {
          action: "Get a call with Ryan Katz at Moore this week, and decide first whether you will open Teams for them.",
          why: "Moore is 5,000 people built out of 33 acquired companies, and on Jul 29 it hired a chief information officer whose stated job is to \"expand the responsible use of AI\". He is 32 days in, which is exactly when a new CIO spends money. Katz became president of the agency the same day promising clients \"one connected partnership\", which is the internal fragmentation problem your wiki solves. Their own staff describe not knowing what other parts of the company are doing. One catch. Moore runs on Microsoft Teams and yours is invite-only, so settle that before the first call. Scope the pitch to one team with no donor data, because your SOC 2 is unfinished.",
          evidence: "moore",
        },
        {
          action: "Go back to your own launch thread and answer the 11 people who asked a real question and got nothing.",
          why: "We pulled all 106 replies. Most are congratulations from your Y Combinator batch. But 11 people asked something specific and nobody replied. @kar2905, who runs a background-check company with 7,116 followers, asked \"do you have zdr\", meaning do you delete his data. @broukhim, an investor with 3,535 followers, asked \"but are you locked into OpenTag?\". @Viswana34226652 asked for access so he could test you against Viktor. Answering these does two things at once: the person may start a trial, and everyone else reading that thread sees the objection answered instead of hanging there. Half a day of work, and the thread is already five days old.",
          evidence: "advertising-and-social-media",
        },
        {
          action: "Ask your 10 teams to leave a Product Hunt review, and ask the one who gave you 4 stars what the missing star was.",
          why: "You have one review, at 4.0. The products Product Hunt shows next to you on your own page have 8, 13, 14 and 22 reviews. Anyone comparing tools there sees a product nobody has vouched for. You already have 10 teams using it. Ask all of them today while the listing is still marked as launched this week. Then go find the person who gave you 4 stars and ask what cost you the fifth. Fix that thing, tell them you fixed it, and ask them to update the score. A 4.0 turning into a 5.0 is worth more than the next ten cold emails you send.",
          evidence: "search-and-marketplaces",
        },
        {
          action: "Build one page that shows what Claude Tag really costs, and put your prices next to it.",
          why: "tryopentag.com/compare/claude-tag is a dead link. When somebody has had enough of their Claude Tag bill, the thing they type into Google is \"claude tag alternative\", and you have nothing there. Put the real numbers on a page: you have to buy a Claude Team or Enterprise seat before any work is billed, and every channel runs the most expensive model whatever the job is. Then price five ordinary jobs both ways. The payoff is that you stop having to be personally present in every thread. People paste the link for you. Your Slackbot comparison page is already good and fair, so you know how to do this.",
          evidence: "search-and-marketplaces",
        },
      ],
    },
    { type: "h3", text: "Posts worth replying to this week" },
    {
      type: "note",
      text: "Refreshed Aug 30, 9pm UTC. The top four are from the last 48 hours. The rest are people who asked you something directly and are still waiting.",
    },
    {
      type: "table",
      headers: [
        { text: "Where", w: "16%" },
        { text: "When", w: "7%", nw: true },
        { text: "What they said" },
        { text: "Status", w: "10%" },
        { text: "What to say, and what you get", w: "26%" },
      ],
      rows: [
        [
          "X, @UINYON_",
          "Aug 30",
          "[Started running coding agents through Claude Tag and it is helping, but Slack threads are piling up ridiculously, so now I need something to deal with the information overload](https://x.com/UINYON_/status/2093719700895310085)",
          "No replies",
          "Freshest post in the pull and it describes your product. Tell him OpenTag only wakes up when tagged, and that the wiki is where the answer lives so the thread does not have to. Gets you a trial from someone already sold on the idea.",
        ],
        [
          "X, @kubo_vbapg",
          "Aug 30",
          "[Apparently Claude Tag cannot be used on the individual plan](https://x.com/kubo_vbapg/status/2093746470398873630)",
          "No replies",
          "He wants it and cannot buy it. Tell him your trial is $100 with no card and no seat requirement. This is the cheapest possible conversion: he has already decided he wants the thing.",
        ],
        [
          "X, @KellySutton",
          "Aug 30",
          "[Claude Tag racks up usage quite fast, and is most useful in Slack](https://x.com/KellySutton/status/2093758589487943977)",
          "No replies",
          "He is making your argument for you in a thread about Anthropic and Salesforce. Agree, add the detail that every channel runs the top model whatever the job. Gets your point in front of his audience without you pitching.",
        ],
        [
          "X, @geoffnegiar",
          "Aug 30",
          "[For folks actually named Claude, how does your organization handle Claude tag etc? Must be terrible in Slack](https://x.com/geoffnegiar/status/2093778586863861996)",
          "1 reply",
          "A joke, but it is about the bot butting in. Reply lightly that OpenTag only speaks when tagged. Cheap visibility in a thread people are enjoying.",
        ],
        [
          "X, @kar2905 (7,116 followers)",
          "Aug 26",
          "[Nice! Just what I was looking for. Do you have zdr](https://x.com/kar2905/status/2092424963458474216)",
          "Never answered",
          "He runs an employee background-check company, so he is asking whether you delete his data. He said this is exactly what he was looking for and you left him on read. Answer it and you likely get a trial from a company with real compliance needs.",
        ],
        [
          "X, @broukhim (3,535)",
          "Aug 26",
          "[But are you locked into OpenTag?](https://x.com/broukhim/status/2092435544764788771)",
          "Never answered",
          "An investor asking the one question your whole pitch invites. Leaving it unanswered under a post about not being locked in is the worst place to be silent. Answer it publicly and it stops being an objection for everyone else reading.",
        ],
        [
          "X, @AIVibeCoding",
          "Aug 26",
          "[I need this! Codex just coded a bridge to Codex and Slack because as a longtime ChatGPT pro user, we can't connect to Slack!! I'd LOVE to try out OpenTag.](https://x.com/AIVibeCoding/status/2092422177685434492)",
          "Never answered",
          "About as close to \"take my money\" as a reply gets, and nobody sent him a link. Send the signup link. He teaches a coding camp, so he talks to a room of people every week.",
        ],
        [
          "X, @Viswana34226652",
          "Aug 26",
          "[Give me access i wanna test it against @viktor_com](https://x.com/Viswana34226652/status/2092573548066083194)",
          "Never answered",
          "He volunteered to run the comparison you cannot publish yourself. Give him access. If he posts the result, that is a comparison from a stranger, which is worth more than anything on your own site.",
        ],
        [
          "Product Hunt, Aleksandar Blazhev",
          "Aug 28",
          "[What makes you different compared to Claude Tag/Victor/Scarlett and other solutions on the market?](https://www.producthunt.com/products/opentag)",
          "2 days, no answer",
          "The single most important question on your launch page, sitting unanswered where every visitor sees it. Write the answer once and reuse it. Every day it sits there it costs you the people reading before they scroll past.",
        ],
        [
          "Product Hunt, Kamal Sharma",
          "Aug 29",
          "[the wiki learning how the team actually works is a really useful idea. does it pick up those workflows automatically from the tasks, or does the team have to teach it things at the start?](https://www.producthunt.com/products/opentag)",
          "1 day, no answer",
          "Someone is interested in the exact feature nobody else sells and you have not replied. Answer it properly. This is the demo you should be leading with anyway.",
        ],
        [
          "Product Hunt, Ningyu Gao",
          "Aug 28",
          "[Our Claude Tag bill is way to high for it to burn tokens doing nothing](https://www.producthunt.com/products/opentag)",
          "One-line reply",
          "He told you he has the problem you solve and got a one-line pitch back. Go again: ask what the bill was and offer to price the same work on OpenTag. Turns a comment into a real conversation.",
        ],
        [
          "X, @eve_silb (1,885)",
          "Aug 26",
          "[how is it different from glean](https://x.com/eve_silb/status/2092441821401972915)",
          "Never answered",
          "Glean finds the answer, OpenTag does the job and writes the answer down. That is a two-line reply and it is the comparison you will get asked forever. Write it once.",
        ],
        [
          "X, @OnFinality (3,199)",
          "Aug 26",
          "[How are you handling fallbacks when the primary model times out?](https://x.com/OnFinality/status/2092443226963878386)",
          "Never answered",
          "A real engineering question about the thing you claim as your advantage. Answering it well makes the 80-model claim sound built rather than marketed.",
        ],
        [
          "X, @stevecaldwell (1,237)",
          "Aug 26",
          "[When Open Source?](https://x.com/stevecaldwell/status/2092589640318341320)",
          "Never answered",
          "He is a CTO whose company helps businesses get a return on their AI spend, which means he sends people to tools like yours. Answer the open-source question straight, even if the answer is no, and ask if he wants to try it with a client.",
        ],
        [
          "X, @jjmendozay",
          "Aug 26",
          "[Why the MS teams logo in promo if not supported is offer by OpenTag?](https://x.com/jjmendozay/status/2092453422364573884)",
          "Never answered",
          "He caught the Teams problem in public. Say Teams is in beta and offer him an invite. Fixes the credibility hit and possibly wins the person who spotted it.",
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
              claim: "Moore is the best prospect OpenTag has, its new CIO is 32 days into an AI mandate, and the whole thing hangs on whether Teams gets opened.",
              body: [
                {
                  type: "p",
                  text: "Moore is a 5,000-person company assembled out of roughly 33 acquired businesses, and it is the largest marketing, data and fundraising company in North America serving nonprofits. On Jul 29 it hired Shamyo Chatterjee as chief information officer, whose own quoted mandate is to \"accelerate our technology strategy, expand the responsible use of AI\". On the same day it made Ryan Katz president of the agency with a public brief to deliver \"one connected partnership\" across those businesses. Moore runs on Microsoft Teams: it is named as a required skill in their job ads. OpenTag's Teams is invite-only. [[moore-leadership]] [[moore-jobs]] [[opentag-llms]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** a brand-new CIO with a written AI mandate buys things in his first two quarters, and that window is open right now. Nothing else in this report is worth as much as this one account. Decide this week whether Moore is worth opening Teams for, because if the answer is no there is no deal. [[moore-leadership]]",
                },
              ],
            },
            {
              claim: "Anthropic gave Claude Tag spending caps and cancelled the Sept 1 price rise, so the bill-shock argument is smaller than it was a week ago.",
              body: [
                {
                  type: "p",
                  text: "Anthropic's own help page now documents hard caps on total Claude Tag spending for the whole organisation, limits per channel that new channels inherit, alerts to admins at 75% and 95% of any limit, and a breakdown of spend by channel. Separately, the token price rise that was scheduled for Sept 1 will not happen: the introductory $2 and $10 per million words in and out for Sonnet 5 is now the standard price. [[claude-tag-help]] [[claude-pricing]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** the story that Claude Tag hands you an unpredictable bill is now half true. The bill is still usage on top of a seat, and every channel still runs the expensive model, but an admin can cap it. Keep selling to people who have already been burned, and move the main pitch to the wiki, which nobody else sells. [[opentag-home]]",
                },
              ],
            },
            {
              claim: "Two free open-source rivals launched into the exact Claude Tag alternative slot in the same week OpenTag did, and one of them already does Teams.",
              body: [
                {
                  type: "p",
                  text: "SandboxAQ released Switch on Aug 26 under an Apache licence at no cost. It puts agents built with Claude Code, Google's kit, LangChain or OpenAI's tooling into Slack, Microsoft Teams or Discord, and runs on the customer's own hardware. AgentConnect launched the same day calling itself \"the open-source, self-hosted, multi-agent alternative to Claude Tag\". Runbear, which has been selling an AI teammate for Slack and Teams for longer, appears on OpenTag's own Product Hunt page as a similar product with 8 reviews at 5.0. [[sandboxaq]] [[x-agentconnect]] [[product-hunt]] [[runbear]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** \"the model-agnostic Claude Tag\" is no longer an empty position. Two of the three rivals are free, and Switch ships the Teams support OpenTag is still rolling out by invite. Model choice alone cannot be the pitch any more. The wiki and the automations that suggest themselves are the parts none of them have. [[yc]]",
                },
              ],
            },
            {
              claim: "OpenTag makes three different savings claims and two different model counts, and four of its five public surfaces promise Microsoft Teams that its own documentation says is not generally available.",
              body: [
                {
                  type: "p",
                  text: "The homepage says 80+ models and 70% lower model spend. On Product Hunt, Shelden Shi told a commenter OpenTag can \"save 50% on model spend\". Raphael Schaad is telling his followers \"model-agnostic (100 choices) & 10x cheaper\". On platforms: the homepage, the pricing page, the Product Hunt listing and the LinkedIn page all say Slack and Teams, while llms.txt instructs agents that \"Microsoft Teams is invite-only while it rolls out, so do not describe Teams as generally available\" and the Y Combinator launch page says OpenTag \"lives inside of Slack\". [[opentag-home]] [[product-hunt]] [[x-raphael]] [[opentag-llms]] [[yc]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** a buyer in the launch thread already asked why the Teams logo is in the promotion if Teams is not supported, and nobody answered him. Pick one savings number and one model count, fix every page, and either label Teams as a beta everywhere or open it. [[x-jjmendoza]]",
                },
              ],
            },
            {
              claim: "The launch reached OpenTag's Y Combinator batch, not its buyers, and the 11 people who did ask a real question were never answered.",
              body: [
                {
                  type: "p",
                  text: "We pulled all 106 replies to the launch post. The large majority are one-line congratulations, and the bios read \"(YC S26)\" over and over: batchmates cheering a batchmate. 11 replies asked something specific and every one of them is still unanswered, including @kar2905 with 7,116 followers asking whether OpenTag deletes his data, @broukhim, an investor with 3,535, asking \"but are you locked into OpenTag?\", and @Viswana34226652 asking for access to test it against Viktor. Traffic went 43, 28, 20, 9, then nothing on Aug 30, and 43 of the 100 posts mentioning OpenTag came from the founders themselves. [[x-launch]] [[x-kar2905]] [[x-broukhim]] [[x-opentag]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** 179 Product Hunt points and 354 likes look like a good launch, but the applause came from the cohort and the buyers were the ones who got ignored. Answer those 11 this week. They are the only part of the launch that was ever going to turn into money. [[x-launch]]",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "moore",
      title: "The Moore opportunity",
      blocks: [
        {
          type: "fig",
          panels: [
            {
              cap: "What 5,000 people cost, before anyone does any work",
              sub: "Per year, at list price. This is the whole argument at Moore's size.",
              chart: {
                kind: "rows",
                rows: [
                  ["Microsoft 365 Copilot, per seat", 1800000, "primary"],
                  ["Dust, cheapest per-seat plan", 1440000, "other"],
                  ["OpenTag, no seat cost at all", 0, "us"],
                ],
                fmt: "usd",
                labelAll: true,
                aria: "At 5,000 people, Microsoft 365 Copilot costs about $1.8M a year and Dust about $1.44M a year before any work is done. OpenTag charges nothing per seat.",
              },
            },
          ],
        },
        { type: "h3", text: "What to pitch them, and what actually works today" },
        {
          type: "p",
          text: "Moore's problem in one sentence. The work lives in four project tools, the conversation lives in Teams, and nobody can see across either. Their own job ads ask for Workfront and Smartsheet and Microsoft Project and Asana in the same role. That is the pitch. The catch is that OpenTag documents 14 connectors and none of those four is one of them, so be precise about what you can show on day one and what you would have to build. [[moore-jobs]] [[opentag-llms]]",
        },
        {
          type: "table",
          headers: [
            { text: "The job Moore has" },
            { text: "What OpenTag does about it" },
            { text: "Tools it needs", w: "22%" },
            { text: "Works today?", w: "15%" },
          ],
          rows: [
            [
              "Nobody can say where a campaign stands without asking three people",
              "Ask in the channel, get one answer pulled from wherever the work is tracked",
              "Workfront, Smartsheet, Microsoft Project, Asana",
              "No. None of the four is a supported connector. Custom build",
            ],
            [
              "The weekly client status report gets assembled by hand every Monday",
              "A routine: same report, every Monday at 9, posted in the channel with the sources attached",
              "Google Sheets, Docs, Drive, Gmail",
              "Yes, all four ship today",
            ],
            [
              "Nobody knows what a different Moore company already did for the same client",
              "The wiki writes down how the company runs, sourced to the thread the decision was made in",
              "The chat tool plus Drive",
              "Yes, and nobody else sells this",
            ],
            [
              "Proposal and RFP responses start from a blank page every time",
              "A first draft assembled from past work, with sources shown so a human can check it",
              "Google Docs, Drive, the wiki",
              "Yes",
            ],
            [
              "What did we actually agree on that client call",
              "Answers pulled from the meeting notes rather than someone's memory",
              "Granola",
              "Yes",
            ],
            [
              "Last week's numbers live in five different ad platforms",
              "One weekly pull into one post",
              "The Trade Desk, Campaign Manager, Google Ads, Microsoft Ads, Meta",
              "No. Custom build, and probably phase two",
            ],
            [
              "Anything touching donor records",
              "Do not offer this",
              "Blackbaud, Classy, Engaging Networks",
              "Out of scope until SOC 2 Type II is done",
            ],
          ],
        },
        {
          type: "note",
          text: "Read down the last column before the first call. Four of these seven can be demonstrated on day one with connectors OpenTag already ships, and they sit in the same place: the Google stack a marketing agency lives in all day.",
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          style: "did",
          items: [
            {
              claim: "Moore hired a new CIO on Jul 29 and told the world his job is to expand the use of AI.",
              body: [
                {
                  type: "p",
                  text: "Shamyo Chatterjee joined as chief information officer from a career running enterprise technology at Silicon Valley companies, and Moore's own announcement says his experience \"building enterprise AI organizations\" is why they hired him. His quote in that release: \"help accelerate our technology strategy, expand the responsible use of AI and continue building innovative solutions.\" The same announcement promoted Steve Harrison to chief revenue officer and made Ryan Katz president of the agency. [[moore-leadership]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** he is 32 days into the job. New CIOs spend budget early, before the existing stack is theirs to defend, and they want one visible win. Get in front of him now, not in November. [[moore-leadership]]",
                },
              ],
            },
            {
              claim: "Moore is 33 companies wearing one name, and its own people say nobody knows what is going on.",
              body: [
                {
                  type: "p",
                  text: "Moore was assembled from roughly 33 acquired businesses. Employees on Glassdoor describe \"a serious lack of communication about strategy, financials, execution, and performance, with many disparate pockets of leadership advocating for competing priorities, making it hard for teams or individuals to know what is going on or why\". One Moore job ad asks for Workfront and Smartsheet and Microsoft Project and Asana, which is what it looks like when acquired units never converged. Ryan Katz's own line for his new job is \"clients don't think about individual capabilities. They think about outcomes.\" [[moore-glassdoor]] [[moore-jobs]] [[moore-leadership]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** this is not an assistant problem, it is a nobody-can-find-anything problem, and the self-writing wiki is the only product in your competitive set that answers it. Lead the demo with the wiki, not the eighty models. [[opentag-home]]",
                },
              ],
            },
            {
              claim: "Moore sells its own agentic AI platform, so OpenTag has to be internal tooling or the meeting ends.",
              body: [
                {
                  type: "p",
                  text: "Moore launched SimioAccelerate at a fundraising conference on Apr 27, built on Microsoft Azure with Microsoft, where \"AI agents orchestrate, automate and execute the entire process of effective fundraising\". Moore is a Microsoft Elevate Partner and Microsoft publishes a Moore case study on its own site. In July Moore extended the platform to planned giving, donor-advised funds and major-donor modelling. [[moore-simioaccelerate]] [[microsoft-chop]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** say the words \"internal operations\" in the first two minutes. If OpenTag sounds like anything that touches donors or campaigns, it reads as a competitor to their flagship product and the conversation is over. The upside is that this buyer already understands agents and needs no education. [[moore-simioaccelerate]]",
                },
              ],
            },
            {
              claim: "The real competitor at Moore is Microsoft Copilot, not Claude Tag.",
              body: [
                {
                  type: "p",
                  text: "Moore runs on Microsoft. Azure underneath SimioAccelerate, Microsoft Teams named as a required skill in its job ads, Microsoft Office throughout, and an Elevate Partner relationship with a Microsoft co-sell motion attached. Copilot will arrive pre-approved by their security team and probably discounted. At about $30 a person a month across 5,000 people that is roughly $1.8M a year before anyone does anything. [[moore-jobs]] [[microsoft-chop]] [[moore-simioaccelerate]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** do not fight on features. Copilot is one assistant per person. OpenTag is one coworker the whole channel shares, and it costs nothing per head. Also ask, directly, whether Copilot is already in the building, because the answer changes the whole plan. [[opentag-pricing]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What OpenTag should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Decide this week whether Moore is worth opening Microsoft Teams for, and say so out loud.",
              body: [
                {
                  type: "p",
                  text: "Moore is a Teams company. Your Teams is invite-only and your own llms.txt says not to call it generally available. There is no version of this deal that happens on Slack. Either offer Moore a named Teams design-partner slot with a date on it, or tell them Slack is what is supported today and let them decide. What you get: either a marquee logo and a reason to finish Teams, or your week back to spend on people who are already on Slack. Do not let this stay vague past the second call. [[opentag-llms]] [[moore-jobs]]",
                },
              ],
            },
            {
              claim: "Email Ryan Katz first, not the CIO.",
              body: [
                {
                  type: "p",
                  text: "Katz just became president of the agency with a public promise to give clients \"one connected partnership\" across 33 businesses. Quote his own line back to him, then ask one question: how does somebody at Moore find out what a different Moore company already did for the same client? Let him answer it. What you get: a champion who controls a real budget and can sponsor a pilot without triggering a company-wide security review, which the CIO cannot avoid. [[moore-leadership]]",
                },
              ],
            },
            {
              claim: "Pick one of Moore's four project tools and build that connector before the demo, not after.",
              body: [
                {
                  type: "p",
                  text: "Workfront, Smartsheet, Microsoft Project and Asana all appear in a single Moore job ad, and OpenTag supports none of them. Custom MCP servers are the answer, but \"we could build that\" loses to a demo every time. Ask Katz which one his agency actually runs on, build that one connector, and show OpenTag answering \"where does this campaign stand\" from it. What you get: the vaguest part of the pitch, connecting everything, becomes one concrete thing they watch work. The rest of the demo already runs on connectors you ship. [[moore-jobs]] [[opentag-llms]]",
                },
              ],
            },
            {
              claim: "Pitch one team and no donor data, because your SOC 2 is not finished.",
              body: [
                {
                  type: "p",
                  text: "Moore says it processes more than half of all nonprofit donations in the country and handles hospital donor data. Your SOC 2 Type II is still in progress, so a company-wide deal will die in security review. Propose 60 to 90 days with one team, agency operations or marketing, no donor records in scope, one recurring job such as the weekly client report, plus the wiki. Your free trial covers most of it. What you get: procurement never enters the picture, and you have a real reference before the audit lands. [[opentag-security]] [[moore-home]]",
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
              text: "Who Moore is, in one paragraph. Founded around 2011 by Jim Moore, who is still chairman, run by Gretchen Littlefield as chief executive since 2019, privately held with no outside investors on record. It calls itself a constituent experience management company, which means it does the fundraising for nonprofits: direct mail, television, digital, data and the processing of the donations themselves. Its own homepage claims 1.4 billion fundraising packages mailed and more than half of all nonprofit donations in the country processed. Named clients include Children's Hospital of Philadelphia, the American Red Cross, Save the Children, Wounded Warrior Project and the International Rescue Committee. Outside estimates of revenue range from $680M to $1.7B, which is too wide a spread to quote to them. [[moore-home]] [[microsoft-chop]]",
            },
            {
              type: "p",
              text: "What they run, from their job ads. Microsoft Teams is named as a required proficiency, which is the single most important fact in this section. Alongside it: Microsoft Office with heavy Excel, Azure, and for project management Workfront, Smartsheet, Microsoft Project and Asana all in the same posting. On the advertising side, Google Campaign Manager, The Trade Desk, Google Ads, Microsoft Ads, Meta and Google Analytics. Client-side donation systems they expect staff to know include Blackbaud Luminate, Classy, Salsa and Engaging Networks. Their careers portal runs on UKG. [[moore-jobs]]",
            },
            {
              type: "p",
              text: "The four people to know. Shamyo Chatterjee, chief information officer since Jul 29, holds the AI mandate and the budget, and is the hardest security conversation. Ryan Katz, president of the agency since the same day, owns the cross-company fragmentation problem and is the champion to find first. Steve Harrison, promoted to chief revenue officer, cares about how fast the agency can turn around proposals and is the fallback path. Gretchen Littlefield, chief executive, led an AI panel at CES in January, so she is friendly to the idea but far too senior for a cold first email. [[moore-leadership]]",
            },
            {
              type: "p",
              text: "What could kill it, in order. One, Teams: fatal unless OpenTag opens it. Two, Microsoft Copilot arriving pre-approved through the Elevate Partner relationship. Three, SOC 2 Type II being unfinished at a company that processes donations and touches hospital data. Four, ordinary vendor risk, because a 5,000-person company will ask how a three-person company stays in business. The honest counter to the last one is the thing Anthropic and Microsoft cannot offer: a founder who answers in an hour and a roadmap they can influence. Say that plainly rather than pretending to be bigger. [[opentag-security]] [[moore-simioaccelerate]]",
            },
            {
              type: "p",
              text: "Two things we could not find out, and both change the plan. Whether Microsoft 365 Copilot is already deployed at Moore, which nothing public says either way. And whether any Moore business unit runs Slack rather than Teams, with Moore Digital, launched in 2022, the most likely candidate. If a Slack pocket exists inside Moore, it is the beachhead and the Teams problem stops being on the critical path. Ask both questions on the first call. The longer background is in the research file at clients/opentag/WEAREMOORE.md. [[moore-jobs]]",
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
              cap: "What a 40-person team pays before anyone does any work",
              sub: "Monthly, at list price. Claude Tag needs the seats first, then bills the work on top.",
              chart: {
                kind: "rows",
                rows: [
                  ["Claude Team seats, then usage on top", 1200, "primary"],
                  ["Dust, per seat", 960, "other"],
                  ["OpenTag Team, whole workspace", 50, "us"],
                ],
                fmt: "usd",
                labelAll: true,
                aria: "Monthly cost before any work for a 40-person team: Claude Team seats about $1,200 plus usage, Dust $960, OpenTag $50.",
              },
            },
          ],
        },
        {
          type: "table",
          headers: [
            { text: "" },
            { text: "Claude Tag" },
            { text: "OpenTag" },
          ],
          rows: [
            [
              "What you buy first",
              "A Claude Team or Enterprise subscription. Claude Tag is not sold on its own",
              "Nothing. A $100 trial with 10,000 credits, no card",
            ],
            [
              "Then what",
              "The work is billed on usage on top of the seats. Tagging in a channel bills the organisation, a direct message bills the person's own account",
              "$50 a month for 5,000 shared credits, up to $1,000 for 100,000. Annual is 15% off",
            ],
            [
              "Does adding people cost more",
              "Yes, every person needs a seat",
              "No, credits are shared across the workspace",
            ],
            [
              "Spending controls",
              "Hard cap for the organisation, limits per channel that new channels inherit, alerts at 75% and 95%, spend broken down by channel",
              "Approval before anything irreversible, per-person permissions, credits that simply run out",
            ],
            [
              "Which model runs the job",
              "Claude only. Every channel runs the frontier model whatever the job is",
              "Routed through Conifer to whichever of 80+ models fits, per the homepage",
            ],
            [
              "Where it runs",
              "Slack only. A Microsoft 365 connector reaches Teams conversations but is not the embedded product",
              "Slack live. Microsoft Teams by invite, not generally available",
            ],
            [
              "Security audit",
              "Anthropic's enterprise programme",
              "SOC 2 Type II in progress, stated plainly on the site",
            ],
          ],
        },
        { type: "h3", text: "What happened" },
        {
          type: "findings",
          style: "did",
          items: [
            {
              claim: "Anthropic added spending caps and per-channel limits to Claude Tag.",
              body: [
                {
                  type: "p",
                  text: "The help page now documents a hard cap on total Claude Tag spending across the organisation, limits per channel with new channels inheriting a default, alerts to admins at 75% and 95% of any limit, and usage analytics that break spend down by channel. It also confirms the billing split: a tag in a channel bills the organisation, a direct message bills the individual's own Claude account. [[claude-tag-help]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** every attack that starts \"you cannot predict the bill\" now has an answer an admin can point at. The attack that still works is different and narrower: the seat has to be bought first, and every job runs the expensive model. Rewrite the pitch around those two. [[opentag-pricing]]",
                },
              ],
            },
            {
              claim: "The Sept 1 token price rise was cancelled, so the deadline OpenTag was going to sell against does not exist.",
              body: [
                {
                  type: "p",
                  text: "The $2 and $10 per million words in and out for Sonnet 5, announced as an introductory price through Aug 31, is now the standard price. The increase to $3 and $15 that was scheduled for Sept 1 will not happen. Separately, promotional credits for eligible Pro and Team subscribers expire Sept 17 rather than Sept 1. [[claude-pricing]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** last week's plan was to point everything at bill shock from Sept 1. Do not build a campaign on that date. The credits that were seeded to Claude Tag customers still run out, so watch for bill complaints through September, but treat them as they arrive rather than as a scheduled event. [[x-claude-tag]]",
                },
              ],
            },
            {
              claim: "Claude Tag now reads a whole channel and decides on its own whether to speak.",
              body: [
                {
                  type: "p",
                  text: "Anthropic removed the classifier that used to judge each Slack message on its own. Claude now reads the channel's full context, its memory and its standing instructions, and picks one of four moves: reply in the channel, start work in a thread, route the message into existing work, or say nothing. Anthropic's own example is two engineers chasing the same bug from opposite ends, neither addressing Claude, with Claude opening a thread that already has the investigation running. Reporting puts the improvement at roughly 30% better at judging when to jump in. Anthropic also says the most popular use of Claude Tag by far is being on call. [[venturebeat]] [[x-noahzweben]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** this cuts both ways and OpenTag should use both edges. An agent that decides for itself when to speak is an agent that decides for itself when to spend, which is a fair question to raise. But one person in the window said out loud that he does not want Slack noise back. Sell the fact that OpenTag only runs when it is tagged. [[x-kirknewcombe]]",
                },
              ],
            },
            {
              claim: "OpenTag shipped a Runway integration and a new model, and put its own numbers in conflict.",
              body: [
                {
                  type: "p",
                  text: "OpenTag announced Runway as a native integration on Aug 29 and added GLM-5.3-Flash on Aug 26. It also launched on Product Hunt on Aug 28 with a 50% off for two months offer, reaching 179 points and fifth for the day, with Garry Tan on the launch team. In the Product Hunt comments Shelden Shi wrote that OpenTag can \"save 50% on model spend\", against the homepage figure of 70%. [[x-runway]] [[x-glm]] [[product-hunt]] [[opentag-home]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** shipping weekly is the right speed and the integrations are worth announcing. The savings figure is not something to improvise in a comment. Decide what the number is, write it down, and give it to Shelden, Tony and every advocate. [[x-raphael]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What OpenTag should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Decide what the savings number is, then make every page say the same thing.",
              body: [
                {
                  type: "p",
                  text: "Right now it is 70% on your homepage, 50% from Shelden on Product Hunt, and 10x from Raphael Schaad on X. A motion designer pitching you a video on Aug 30 quoted the 80+ figure back at you, so this is the number strangers repeat. Work out the real one from the routing logs on your 10 teams, publish it with a line on how you got it, and message the people using the old numbers. What you get: a buyer who checks two of your pages stops finding two different claims and walking away. [[opentag-home]] [[product-hunt]] [[x-quartzmotion]]",
                },
              ],
            },
            {
              claim: "Say Teams is in beta on every page, or finish it.",
              body: [
                {
                  type: "p",
                  text: "Four places promise Teams. Your own llms.txt says do not claim that. Somebody already asked about it in public and got silence. Tony told a different person \"Teams is still beta right now\" and offered an invite, which is the right answer. Put that sentence on the homepage, the pricing page, Product Hunt and LinkedIn. What you get: you stop losing the first buyer who checks, and the people who do want Teams end up on your beta list instead of walking. [[opentag-llms]] [[x-jjmendoza]]",
                },
              ],
            },
            {
              claim: "Make the wiki the first thing on the homepage, not the eighty models.",
              body: [
                {
                  type: "p",
                  text: "Anthropic has spend caps now. Switch and AgentConnect are free. Runbear has been in Slack and Teams longer than you. Every one of them can say model choice and cheap. None of them writes down how your company runs. Two people asked you about the wiki this week, and one is still waiting. What you get: you stop arguing about price against products that cost nothing, and start selling the one thing that has no equivalent. [[product-hunt]] [[sandboxaq]]",
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
              text: "The pricing shape is still OpenTag's strongest argument and it is still under-used. Claude Tag cannot be bought on its own: an organisation buys Claude Team or Enterprise seats and the Claude Tag work is billed on top of that. Dust charges $24 to $120 a person a month. OpenTag charges $50 a month for the whole workspace at the entry tier and nothing per person at any tier. The bigger the company, the wider the gap, which makes the argument strongest exactly where OpenTag currently cannot sell because the security audit is unfinished. [[opentag-pricing]] [[claude-tag-help]]",
            },
            {
              type: "p",
              text: "One post in the window made the seat argument better than OpenTag's own site does. Replying in the launch thread, @RHLSTHRM wrote that companies over 150 people cannot use Claude subscriptions and are forced onto API pricing, and that \"all these companies are dying to reduce token spend\". That is the customer OpenTag is built for, described by a stranger, in OpenTag's own thread. Nobody from the company followed up on it. [[x-rhlsthrm]]",
            },
            {
              type: "p",
              text: "The strongest cost attack on Claude Tag this week was also written by somebody else. @Suryanshti777 told readers to pull last month's Claude Tag bill, then pull the list of what they actually asked it to do, and pointed out that summarising a thread, chasing an invoice and reformatting a document all ran on the frontier model, because every Claude Tag channel runs on the frontier model. That post took 33 likes and 10 reposts. It is the OpenTag pitch, unpaid, with better copy than the homepage. Ask to use it. [[x-suryansh]]",
            },
            {
              type: "p",
              text: "On security nothing moved. SOC 2 Type II is still in progress and the site still says so, which is the right way to handle it. It remains the reason to aim at startups and small teams rather than anything that runs a vendor review, and it is worth publishing a target date rather than a status. [[opentag-security]]",
            },
            {
              type: "p",
              text: "Anthropic is still widening the surface OpenTag sells into rather than leaving it. Claude in Slack was switched over to Claude Tag on Aug 3 in a migration customers could not opt out of, which is how a large part of the current user base arrived. On Aug 25 Salesforce and Anthropic announced Claudeforce, putting the customer relationship system inside Claude rather than adding another assistant beside it. A guide to it was the most-discussed Claude Tag item on Reddit in the window, posted into two subreddits and drawing 12 comments each time. [[claude-tag-help]] [[reddit]]",
            },
            {
              type: "p",
              text: "The one job Anthropic says Claude Tag is used for most is being on call. Noah Zweben, posting from the Anthropic side, wrote that on-call is \"the most popular use case for Claude Tag by far\" and published a guide to running it, which took 219 likes and 17 reposts, the second-highest reach of any post in the window. On-call is a job where the work happens at 3am, runs on a schedule, and repeats. That is exactly what OpenTag's routines feature is for, and OpenTag has no on-call page, no on-call example and no on-call skill in its documentation. [[x-noahzweben]] [[opentag-llms]]",
            },
            {
              type: "p",
              text: "A note on the 70% saving and who owns the router. OpenTag routes through Conifer, and Conifer also appears on OpenTag's own customer logo wall. This week the relationship became public in both directions: Tony Kam announced a partnership on Aug 29, and Conifer's Charles wrote that OpenTag is \"truly N of 1\" and that it is good \"to see more apps building around model agnostic endpoints\". That is fine, and the endorsement is worth having. It does mean the savings figure should be stated with the method next to it, because a buyer who notices that the router is also a partner will ask how the number was worked out. [[x-charles]] [[opentag-home]]",
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
              cap: "Where OpenTag can be found by someone who is looking",
              sub: "Listings and pages that exist, Aug 30",
              chart: {
                kind: "rows",
                rows: [
                  ["Product Hunt listing, 179 points", 1, "us"],
                  ["Y Combinator company page", 1, "us"],
                  ["LinkedIn company page", 1, "us"],
                  ["Comparison page vs Claude Tag", 0, "us"],
                  ["G2 listing", 0, "us"],
                  ["Slack Marketplace listing", 0, "us"],
                  ["Hacker News posts, ever", 0, "us"],
                  ["Reddit posts about the company", 0, "us"],
                ],
                fmt: "num",
                labelAll: true,
                aria: "OpenTag has a Product Hunt listing, a Y Combinator page and a LinkedIn page. It has no Claude Tag comparison page, no G2 listing, no Slack Marketplace listing, no Hacker News posts and no Reddit posts.",
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
              claim: "The Product Hunt launch worked and is the only place a buyer can currently browse to OpenTag.",
              body: [
                {
                  type: "p",
                  text: "OpenTag launched on Product Hunt on Aug 28 and took 179 points and fifth place for the day, with 433 followers and one review at 4.0, offering 50% off for two months. Garry Tan is listed on the launch team. Product Hunt's own similar products panel puts OpenTag next to Runbear, which has 8 reviews at 5.0 and sells an AI teammate for Slack and Teams, and next to four other agent builders. [[product-hunt]] [[runbear]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** one review against eight and twenty-two for the products listed beside it is the gap to close, and it is cheap. Ask the ten teams already using OpenTag for a review this week while the listing is still new. [[yc]]",
                },
              ],
            },
            {
              claim: "Viktor is now buying ad space on OpenTag's own Product Hunt page.",
              body: [
                {
                  type: "p",
                  text: "The promoted slot on OpenTag's Product Hunt listing is currently Viktor.com, under the line \"An AI coworker that actually does the work\" with a Try Viktor.com button. Two days earlier the same slot held a different company. Product Hunt sells that placement, so anyone who lands on OpenTag's launch page is shown a competitor before they reach the comments. The comments themselves still have two unanswered questions, one of them two days old. [[product-hunt]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** you paid attention to get people onto that page and a rival is renting the top of it. You cannot stop that, but you can make the page worth the visit: answer the two open questions and get reviews on it, so a visitor who scrolls past the ad finds something. [[product-hunt]]",
                },
              ],
            },
            {
              claim: "The name still returns everything except OpenTag, and a rival project with the same name is being promoted.",
              body: [
                {
                  type: "p",
                  text: "Of 53 Reddit results for \"opentag\", zero are this company. They are job ads for a betting company in Sofia, a Rust command-line tool from 2021, 3D printer filament threads and GNU Radio discussions. Hacker News returns nothing for \"tryopentag\", ever. On Aug 29 an account listing five lesser-known agent repositories put fancyboi999/open-tag first, describing it as putting multiple agents in a shared Slack-style room, and took 20 likes and 10 replies. [[reddit]] [[hacker-news]] [[x-zenad]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** the brand name cannot be the way people find the company, so the category pages have to be. Build the Claude Tag comparison page and the pricing arithmetic page, and let people find those instead. [[opentag-compare-slackbot]]",
                },
              ],
            },
            {
              claim: "The rebrand from Gini moved this week.",
              body: [
                {
                  type: "p",
                  text: "The LinkedIn company page now reads \"OpenTag (YC S26)\" with 179 followers and the description \"Model agnostic AI coworker on Slack and Teams\". A week ago the same page was still Gini Agent. The Y Combinator batch is now confirmed in public as S26, which we could not verify last week. [[linkedin]] [[yc]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** good, and it removes one of the two credibility problems flagged last week. Finish the job: the docs tree still carries stale Gini copies of pages, and duplicate pages compete with each other in search. [[opentag-llms]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What OpenTag should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Ask all 10 of your teams for a Product Hunt review this week, and chase the missing star on the one you have.",
              body: [
                {
                  type: "p",
                  text: "You have one review at 4.0. The products Product Hunt puts beside you on your own page have 8, 13, 14 and 22. Ask the 10 teams while the listing still says launched this week. Then find the person who gave you 4 and ask what the fifth star would have taken. Fix it, tell them, ask them to update. What you get: one review becomes ten, and a 4.0 becomes a 5.0, so the next person comparing tools sees a product other people vouch for instead of a blank. [[product-hunt]] [[yc]]",
                },
              ],
            },
            {
              claim: "Build the page that shows what Claude Tag actually costs.",
              body: [
                {
                  type: "p",
                  text: "tryopentag.com/compare/claude-tag is a dead link. Put the real facts on it: you buy a Claude Team or Enterprise seat before any work is billed, and every channel runs the top model whatever the job. Price five ordinary jobs both ways. Be fair about the spending caps Anthropic just shipped, the way your Slackbot page is fair about Slackbot. What you get: people paste your link in threads instead of you having to be in every thread. [[opentag-compare-slackbot]] [[claude-tag-help]]",
                },
              ],
            },
            {
              claim: "Get into the Slack app directory and onto G2.",
              body: [
                {
                  type: "p",
                  text: "You are in neither. Someone browsing either one cannot find you at all, and the Slack directory matters twice because it is a way to be found by people who will never search your brand name, which currently returns a betting company and a Rust tool. Seed G2 with the same 10 teams. What you get: two more places a buyer can stumble into you without knowing the name. [[reddit]] [[product-hunt]]",
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
              text: "Traffic and paid-search figures are not in this report. Similarweb has no data for tryopentag.com, which is expected for a site that went public on Aug 26, and Anthropic's site-wide numbers are not a meaningful comparison for one feature inside Claude. Paid-search and ad-library tools were not pulled this week. Both gaps are named in the footer and both should be closed next week, when OpenTag will have three weeks of traffic history worth trending. [[similarweb]]",
            },
            {
              type: "p",
              text: "Reddit is not worth much effort for this category and the data says so clearly. 293 results were pulled across three search terms. Five mentioned Claude Tag at all, and two of those five were the same Claudeforce guide posted into two different subreddits by the same account. The two older OpenTag mentions that exist are from June and July, one of them a post complaining that OpenTag was promoting itself in a thread about something else. Spend the time on X and Product Hunt instead. [[reddit]]",
            },
            {
              type: "p",
              text: "Hacker News is the surprising gap. One Claude Tag story landed in the window, \"Tracing Claude Tag, Anthropic's Slack Agent\" on Aug 25, at 3 points. Older threads show real appetite: a self-hosted Claude Tag alternative was posted on Jul 1, and a comment from Jul 4 reads \"Claude Tag seems awesome, but a single query can run over a dollar\". For a Y Combinator company in this category, having never appeared on Hacker News is unusual and fixable. [[hacker-news]]",
            },
            {
              type: "p",
              text: "Runbear shows what the missing page looks like. It sells the same thing to the same buyer, has been in Slack and Teams longer than OpenTag, and runs a page at runbear.io/runbear-vs-claude built entirely around the argument that a per-seat Claude licence \"stays locked to one person's browser\" while a shared agent does not. That is OpenTag's argument, on a page OpenTag has not built, from a company that also appears next to OpenTag on its own Product Hunt listing with eight reviews to OpenTag's one. Read the page before writing yours. [[runbear]] [[product-hunt]]",
            },
            {
              type: "p",
              text: "The half-finished rebrand still costs search traffic. The company name changed on LinkedIn this week, but the documentation tree still carries stale Gini copies of pages alongside their OpenTag twins. Two versions of the same page compete with each other in Google, and neither wins. This is cheap to fix with redirects and it should be done in the same pass as the comparison page, because both are the same job: making sure that when somebody does look for this, there is one good page rather than two weak ones. [[opentag-llms]] [[linkedin]]",
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
              cap: "Posts about Claude Tag per day",
              sub: "Aug 24 to 30, 174 posts, duplicates removed",
              chart: {
                kind: "columns",
                rows: [
                  ["Aug 24", 34],
                  ["Aug 25", 34],
                  ["Aug 26", 32],
                  ["Aug 27", 27],
                  ["Aug 28", 21],
                  ["Aug 29", 16],
                  ["Aug 30", 10],
                ],
                fmt: "num",
                label: [0, 6],
                aria: "Posts about Claude Tag per day fell from 34 on Aug 24 to 10 on Aug 30.",
              },
            },
            {
              cap: "Why people are unhappy with Claude Tag",
              sub: "8 complaints sorted, Aug 24 to 30. First weekly, so no prior mix to compare.",
              chart: {
                kind: "share",
                rows: [
                  ["Price", 38, "neg"],
                  ["Locked to one model company", 38, "neg"],
                  ["Platform gap", 12, "neu"],
                  ["Workflow and noise", 12, "neu"],
                ],
                aria: "Of eight complaints about Claude Tag, three were about price, three about being locked to Anthropic's models, one about a platform gap and one about noise in Slack.",
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
              claim: "Price and being locked to one model company tie as the biggest complaints, three each out of eight.",
              body: [
                {
                  type: "p",
                  text: "Every one of the 174 posts in the window was read. Eight named a problem with Claude Tag. Three led with price: @jmckenty on $250 of tokens burned, @Suryanshti777 on every channel running the frontier model, and @rickwong888 calling Claude Tag the current winner \"but the price point\". Three led with being tied to Anthropic. One was a platform gap, @The10XCFO unable to use it on his Slack plan. One was noise, @KirkNewcombe not wanting to go back to managing Slack. [[x-claude-tag]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** eight complaints is a small sample and it should be treated as one. What it does tell you is that the two objections OpenTag is built to answer are the two that come up, and that they need different replies. Price wants arithmetic. Lock-in wants the model list. [[opentag-home]]",
                },
              ],
            },
            {
              claim: "AgentConnect's launch was amplified by about eleven accounts using near-identical wording, including two press-release services.",
              body: [
                {
                  type: "p",
                  text: "AgentConnect launched on Aug 26 and the same framing about handing a task from one specialised agent to another appeared across @LearnWithBishal, @Damn_coder, @atulkumarzz, @riyazmd774, @TechByMarkandey, @LoopandPixels, @ai_for_success, @David_eficaz in Spanish, and the accounts @prunderground and @247pressnews, which are paid distribution. This is the second week running the pattern has appeared. The launch is real. The enthusiasm around it is bought. [[x-agentconnect]] [[x-claude-tag]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** do not read these as the category getting hot, and do not copy the tactic. What matters is that a free open-source rival is buying the words \"alternative to Claude Tag\" while OpenTag has no page for them. Take the words with a page, not with paid posts. [[opentag-compare-slackbot]]",
                },
              ],
            },
            {
              claim: "Nearly half of all posts about OpenTag were written by OpenTag, and attention was gone in four days.",
              body: [
                {
                  type: "p",
                  text: "100 posts mentioned OpenTag from Aug 26 to 29: 43, then 28, 20, 9, then nothing on Aug 30. 43 of the 100 came from @kamikariat, @sheldenshi or @TryOpenTag, most of them one-line thank-yous in the launch thread. 54 other accounts wrote the rest. The launch post itself was the highest-reach post about Claude Tag in the entire window at 354 likes, 108 replies and 32 reposts, ahead of anything Anthropic-related. [[x-opentag]] [[x-launch]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** thanking people is not the same as selling to them. Those 108 replies contain buying questions that were never answered. Go back through the thread and answer the ones that asked something. [[x-launch]]",
                },
              ],
            },
            {
              claim: "The launch thread and the Product Hunt page contain the objections OpenTag has to beat, and several went unanswered.",
              body: [
                {
                  type: "p",
                  text: "Six questions came in the launch thread. @dudutwizer wrote \"another slack bot, so unique\". @eve_silb asked \"how is it different from glean\". @realcaptmarbles asked whether it does more than a Hermes agent in Slack. @stevecaldwell asked \"When Open Source?\". @Levi_Researcher asked how it handles context across a long team thread. @jjmendozay asked why the Teams logo is in the promotion. On Product Hunt, @byalexai asked what makes it different from Claude Tag, Viktor and Scarlett, and @kamal_sharma26 asked whether the wiki learns workflows on its own. Both Product Hunt questions are unanswered. [[x-launch]] [[product-hunt]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** these are the same three questions in different words: how is this different, does the wiki really work, and is Teams real. Write one answer to each, put them in the FAQ, and reply everywhere they were asked. [[opentag-home]]",
                },
              ],
            },
            {
              claim: "One prospect the founders chased said no and named where he went instead.",
              body: [
                {
                  type: "p",
                  text: "Tony Kam replied to @farez, who had complained in July about spending $100 on roughly 30 Claude Tag messages, offering $100 of free credits and promising it would last more than 30 messages. @farez replied: \"Thanks. But already using Hermes now and Slack integration comes free.\" Tony also replied to @jmckenty offering $500 of tokens, to @ptaranat asking what Claude Tag had been costing, and posted an open offer to anyone who had been \"a victim of token burn for absolutely nothing\". [[x-farez]] [[x-opentag]]",
                },
                {
                  type: "why",
                  text: "**Why it matters for OpenTag:** the outreach is working as a process and the founders are fast, which is the hard part. The loss is the useful part: free beat cheap. When the competitor is free, credits are not the answer and the wiki has to be. [[x-farez]]",
                },
              ],
            },
          ],
        },
        { type: "h3", text: "What OpenTag should do" },
        {
          type: "findings",
          style: "do",
          items: [
            {
              claim: "Answer the 11 people in your launch thread who asked something and got nothing.",
              body: [
                {
                  type: "p",
                  text: "We pulled all 106 replies and read them. 11 asked a real question. The ones worth doing first: @kar2905 with 7,116 followers asked whether you delete his data, right after saying you are exactly what he was looking for. @broukhim, an investor with 3,535, asked whether people get locked into OpenTag. @AIVibeCoding said \"I need this\" and got no link. What you get: some of them start a trial, and the rest of the thread stops showing an unanswered objection to everyone who reads it later. [[x-launch]] [[x-kar2905]] [[x-broukhim]]",
                },
              ],
            },
            {
              claim: "Give @Viswana34226652 access so he can run the Viktor comparison for you.",
              body: [
                {
                  type: "p",
                  text: "He asked, in public, for access so he could test OpenTag against Viktor, and nobody replied. You cannot publish your own head-to-head and be believed. He can. Give him a workspace and enough credits to do it properly. What you get: if he posts the result, that is a comparison written by a stranger, which does more than any page you write yourself. [[x-viswana]]",
                },
              ],
            },
            {
              claim: "Reply to the four people who posted about Claude Tag in the last two days, today.",
              body: [
                {
                  type: "p",
                  text: "@UINYON_ says Claude Tag is useful but his Slack threads are now piling up and he needs a way to handle the overload. @kubo_vbapg found out he cannot use it on his plan. @KellySutton said it racks up usage fast. None of them has a single reply. What you get: three conversations with people who described your product without knowing it exists, while their posts are still fresh enough that a reply gets read. [[x-uinyon]] [[x-kubo]] [[x-kellysutton]]",
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
              text: "How the objections were sorted. Every post in the seven-day window was read and each complaint was filed under the thing the person led with, not everything they mentioned. @jmckenty's post names both cost and permission failures, and is filed under price because that is the first thing he says. The standard buckets in our method are price, privacy, accuracy, latency, workflow, platform gap, and account and billing. This category needs one more, which is being locked to a single model company, because it is the objection the whole product argument turns on and it does not fit anywhere else. Three of eight complaints were that. [[x-claude-tag]]",
            },
            {
              type: "p",
              text: "What this does not tell you. Eight complaints in a week is a small enough number that the split between price and lock-in could reverse next week on two posts. More importantly, complaint volume shows that customers are available and says nothing about whether Claude Tag is keeping the ones it has. Nobody outside Anthropic can see that. Treat this section as a description of who is reachable and why they are annoyed, not as evidence that Anthropic is losing users. [[x-claude-tag]]",
            },
            {
              type: "p",
              text: "Where people go when they leave. One clear move was visible this week and it was away from OpenTag rather than towards it: @farez to Hermes, on the grounds that the Slack integration comes free. @The10XCFO is trying Hermes and Buzz because he cannot run Claude Tag on his Slack plan. @abdulazeem_s, replying to Tony's launch post, listed the alternatives he knows about as OpenTag, Open Claude Tag, Switch by SandboxAQ, Marvin and Hermes. Hermes appears in all three. It is worth a proper look next week. [[x-farez]] [[x-abdulazeem]]",
            },
            {
              type: "p",
              text: "Paid footprint. Neither company's paid activity was pulled this week, so this is what is knowable from the posts alone. OpenTag ran a 50% off for two months offer on Product Hunt and has no visible creator or referral programme. Its distribution this week came from the founders' own accounts, from Conifer's team publicly endorsing the launch, and from a Y Combinator launches round-up. AgentConnect's distribution came from about eleven accounts posting near-identical copy plus two paid press-release services, which is a different thing entirely and should not be copied. [[product-hunt]] [[x-charles]] [[x-agentconnect]]",
            },
            {
              type: "p",
              text: "One partnership became public. Conifer's Charles wrote that \"the team at OpenTag is truly N of 1\" and that it is \"great to see more apps building around model agnostic endpoints\", and Tony announced a partnership with that team on Aug 29. Conifer is the router OpenTag's 80+ model claim depends on and it also sits on OpenTag's own customer logo wall. Now that the relationship is public, the 70% saving claim needs to be stated in a way that survives someone noticing both facts. [[x-charles]] [[opentag-home]]",
            },
            {
              type: "p",
              text: "How durable each of these prospects is. @jmckenty is paying and angry, has run out of credits twice, and is the top of the list. @rickwong888 is paying and weighing the price, which is the same position one step earlier. @ningyu_gao complained about the bill on OpenTag's own Product Hunt page, which makes him the cheapest to reach of the three. @The10XCFO cannot buy Claude Tag at all on his Slack plan and is shopping right now. @farez is already gone to a free competitor and is not a lead, but he is the only piece of evidence in this report about where people land, so he is worth more as information than as a sale. [[x-jmckenty]] [[x-rickwong]] [[product-hunt]] [[x-farez]]",
            },
            {
              type: "p",
              text: "What Switch actually is, because it will come up in sales calls. SandboxAQ released it on Aug 26 under an Apache licence with a Commons Clause, free for enterprise deployment and personal use. It puts agents built with Claude Code, Google's kit, LangChain, OpenAI's tooling and others into Slack, Microsoft Teams or Discord, running on the customer's own hardware. The company says the platform layer, where governance and measurement live, is cloud-based and not yet released. The honest read for a buyer: Switch is plumbing that a team with engineers can run itself, and it does not write a wiki, propose automations or carry per-person permissions. Say that, rather than pretending it is not a real product. [[sandboxaq]]",
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
            "Social, pulled Aug 30, 2026: [[x-launch|all 106 replies to the OpenTag launch post]] (all replies, with follower and reply counts per author), a 48-hour refresh sweep for \"claude tag\" (23 posts), [[x-claude-tag|X, \"claude tag\", latest and top]] (284 posts pulled, 174 unique in the Aug 24 to 30 window after removing duplicates), [[x-opentag|X, tryopentag and \"open tag\" slack agent]] (100 posts, Aug 26 to 29), [[reddit|Reddit]] for \"claude tag\", \"AI agent slack\" and \"opentag\" (293 results, 5 relevant), [[hacker-news|Hacker News via the Algolia search API]] for \"claude tag slack\" and \"tryopentag\".",
            "Claude Tag's own pages: [[claude-tag-help|What is Claude Tag]] (plans, billing, spending caps, alerts, surfaces), [Introducing Claude Tag](https://www.anthropic.com/news/introducing-claude-tag), [[claude-pricing|Claude platform pricing]].",
            "OpenTag's own pages: [[opentag-home|homepage]], [[opentag-pricing|pricing]], [[opentag-security|security]], [[opentag-llms|llms.txt]], [[opentag-compare-slackbot|compare: Slackbot]], [[yc|Y Combinator launch page]], [[linkedin|LinkedIn]], [[product-hunt|Product Hunt]]. Checked and returning page not found: /compare/claude-tag, /careers.",
            "Moore (wearemoore.com), the prospect: [[moore-home|homepage and services]], [[moore-leadership|the Jul 29 executive announcement]] naming Shamyo Chatterjee as CIO, Steve Harrison as CRO and Ryan Katz as agency president, [[moore-simioaccelerate|the SimioAccelerate launch]], [[microsoft-chop|Microsoft's Moore case study]], [[moore-jobs|Moore job ads]] naming Microsoft Teams, Workfront, Smartsheet, Microsoft Project and Asana, [[moore-glassdoor|Glassdoor employee reviews]]. Fuller background in the research file at clients/opentag/WEAREMOORE.md.",
            "Competitors named this week: [[sandboxaq|SandboxAQ on open-sourcing Switch]] (Aug 26, Slack, Teams and Discord, Apache licence), [[x-agentconnect|AgentConnect's launch post]] (Aug 26), [[runbear|Runbear]].",
            "Press and reporting: [[venturebeat|VentureBeat on the Claude Tag context update]], [Tracing Claude Tag, Anthropic's Slack Agent](https://news.ycombinator.com/item?id=49441197) on Hacker News, Aug 25.",
            "Posts cited individually: [[x-suryansh|@Suryanshti777 on the Claude Tag bill]], [[x-rickwong|@rickwong888 on the price point]], [[x-jmckenty|@jmckenty on $250 burned]], [[x-farez|@farez choosing Hermes]], [[x-rhlsthrm|@RHLSTHRM on companies over 150 people]], [[x-jjmendoza|@jjmendozay on the Teams logo]], [[x-raphael|@raphaelschaad's 100 models and 10x claim]], [[x-zenad|@0xZenad promoting fancyboi999/open-tag]], [[x-kirknewcombe|@KirkNewcombe on Slack noise]], [[x-noahzweben|@noahzweben on on-call being the most popular use]], [[x-charles|@charles_v11 of Conifer on the partnership]], [[x-launch|the OpenTag launch post and its 108 replies]], [[x-runway|the Runway integration announcement]], [[x-glm|the GLM-5.3-Flash announcement]], [[x-abdulazeem|@abdulazeem_s listing the alternatives]], [[x-uinyon|@UINYON_ on Slack threads piling up]], [[x-kubo|@kubo_vbapg on the individual plan]], [[x-kellysutton|@KellySutton on usage racking up]], [[x-kar2905|@kar2905 asking about data deletion]], [[x-broukhim|@broukhim asking about lock-in]], [[x-viswana|@Viswana34226652 offering to test against Viktor]], [[x-aivibecoding|@AIVibeCoding asking to try it]], [[x-quartzmotion|@Quartzmotion quoting the 80+ figure]].",
            "Checked and returned nothing usable: [[similarweb|Similarweb]] has no traffic data for tryopentag.com yet. Paid-search and ad-library tools were not pulled this week.",
          ],
        },
      ],
    },
  ],
  footer:
    "Social data pulled Aug 30, 2026 and refreshed at 9pm UTC, covering Aug 24 to 30. Reach is likes, replies and reposts as X reported them at pull time, and X has kept likes private since June 2024, so who liked a post cannot be seen. No traffic figures this week, because Similarweb has no data for a site that went public on Aug 26. Eight complaints is a small sample and is presented as one. Complaint volume shows which customers are reachable. It is not evidence about whether Claude Tag keeps the customers it has, which nobody outside Anthropic can see.",
  sources: {
    "x-claude-tag": {
      label: "X",
      href: "https://x.com/search?q=%22claude%20tag%22&f=live",
      logo: "x",
    },
    "x-opentag": { label: "X", href: "https://x.com/TryOpenTag", logo: "x" },
    "x-launch": { label: "X", href: "https://x.com/kamikariat/status/2092373312286707844", logo: "x" },
    "x-suryansh": { label: "X", href: "https://x.com/Suryanshti777/status/2093434627721711709", logo: "x" },
    "x-rickwong": { label: "X", href: "https://x.com/rickwong888/status/2093157222624956764", logo: "x" },
    "x-jmckenty": { label: "X", href: "https://x.com/jmckenty/status/2093060936873676840", logo: "x" },
    "x-farez": { label: "X", href: "https://x.com/farez/status/2093664830028705949", logo: "x" },
    "x-rhlsthrm": { label: "X", href: "https://x.com/RHLSTHRM/status/2092601061282648516", logo: "x" },
    "x-jjmendoza": { label: "X", href: "https://x.com/jjmendozay/status/2092453422364573884", logo: "x" },
    "x-raphael": { label: "X", href: "https://x.com/raphaelschaad/status/2092405005051416790", logo: "x" },
    "x-zenad": { label: "X", href: "https://x.com/0xZenad/status/2093460266885230916", logo: "x" },
    "x-kirknewcombe": { label: "X", href: "https://x.com/KirkNewcombe/status/2091888061659443471", logo: "x" },
    "x-noahzweben": { label: "X", href: "https://x.com/noahzweben/status/2093133238311239808", logo: "x" },
    "x-charles": { label: "X", href: "https://x.com/charles_v11/status/2093443375089467477", logo: "x" },
    "x-agentconnect": { label: "X", href: "https://x.com/getAgentConnect/status/2092583438130000175", logo: "x" },
    "x-runway": { label: "X", href: "https://x.com/kamikariat/status/2093219221018939653", logo: "x" },
    "x-glm": { label: "X", href: "https://x.com/TryOpenTag/status/2092787172613202403", logo: "x" },
    "x-abdulazeem": { label: "X", href: "https://x.com/abdulazeem_s/status/2093313588530454764", logo: "x" },
    "x-kar2905": { label: "X", href: "https://x.com/kar2905/status/2092424963458474216", logo: "x" },
    "x-broukhim": { label: "X", href: "https://x.com/broukhim/status/2092435544764788771", logo: "x" },
    "x-viswana": { label: "X", href: "https://x.com/Viswana34226652/status/2092573548066083194", logo: "x" },
    "x-uinyon": { label: "X", href: "https://x.com/UINYON_/status/2093719700895310085", logo: "x" },
    "x-kubo": { label: "X", href: "https://x.com/kubo_vbapg/status/2093746470398873630", logo: "x" },
    "x-kellysutton": { label: "X", href: "https://x.com/KellySutton/status/2093758589487943977", logo: "x" },
    "x-quartzmotion": { label: "X", href: "https://x.com/Quartzmotion/status/2093630698943054128", logo: "x" },
    "x-aivibecoding": { label: "X", href: "https://x.com/AIVibeCoding/status/2092422177685434492", logo: "x" },
    "moore-home": { label: "Moore", href: "https://wearemoore.com/", logo: "" },
    "moore-leadership": {
      label: "Moore",
      href: "https://wearemoore.com/press-release/moore-expands-executive-leadership-team-to-accelerate-growth-innovation-and-client-success/",
      logo: "",
    },
    "moore-simioaccelerate": {
      label: "PRNewswire",
      href: "https://www.prnewswire.com/news-releases/moore-launches-simioaccelerate-an-agentic-fundraising-platform-to-accelerate-nonprofit-growth-302753127.html",
      logo: "",
    },
    "moore-jobs": {
      label: "ZipRecruiter",
      href: "https://www.ziprecruiter.com/c/Moore-DM-Group-LLC/Job/Digital-Media-Planner/-in-Lanham,MD?jid=b6deaf0fffbb9ae9",
      logo: "ziprecruiter",
    },
    "moore-glassdoor": {
      label: "Glassdoor",
      href: "https://www.glassdoor.com/Reviews/Moore-Reviews-E6483920.htm",
      logo: "",
    },
    "microsoft-chop": {
      label: "Microsoft",
      href: "https://www.microsoft.com/en/customers/story/1787571963406239797-chop-azure-nonprofit-en-united-states",
      logo: "",
    },
    reddit: {
      label: "Reddit",
      href: "https://www.reddit.com/search/?q=%22claude%20tag%22&sort=new&t=week",
      logo: "reddit",
    },
    "hacker-news": {
      label: "Hacker News",
      href: "https://hn.algolia.com/?q=claude+tag+slack",
      logo: "hacker-news",
    },
    "product-hunt": {
      label: "Product Hunt",
      href: "https://www.producthunt.com/products/opentag",
      logo: "product-hunt",
    },
    yc: { label: "Y Combinator", href: "https://www.ycombinator.com/companies/opentag", logo: "ycombinator" },
    linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/company/gini-agent/", logo: "linkedin" },
    "claude-tag-help": {
      label: "Anthropic",
      href: "https://support.claude.com/en/articles/15594475-what-is-claude-tag",
      logo: "anthropic",
    },
    "claude-pricing": {
      label: "Anthropic",
      href: "https://platform.claude.com/docs/en/about-claude/pricing",
      logo: "anthropic",
    },
    "opentag-home": { label: "OpenTag", href: "https://www.tryopentag.com/", logo: "opentag" },
    "opentag-pricing": { label: "OpenTag", href: "https://www.tryopentag.com/pricing", logo: "opentag" },
    "opentag-security": { label: "OpenTag", href: "https://www.tryopentag.com/security", logo: "opentag" },
    "opentag-llms": { label: "OpenTag", href: "https://www.tryopentag.com/llms.txt", logo: "opentag" },
    "opentag-compare-slackbot": {
      label: "OpenTag",
      href: "https://www.tryopentag.com/compare/slackbot",
      logo: "opentag",
    },
    sandboxaq: {
      label: "SandboxAQ",
      href: "https://www.sandboxaq.com/press/sandboxaq-open-sources-switch-bring-any-ai-agent-into-any-team-chat",
    },
    runbear: { label: "Runbear", href: "https://runbear.io/runbear-vs-claude" },
    venturebeat: {
      label: "VentureBeat",
      href: "https://venturebeat.com/orchestration/anthropics-new-claude-tag-update-lets-its-slack-agent-read-the-full-conversation-and-jump-in-unprompted",
      logo: "venturebeat",
    },
    similarweb: {
      label: "Similarweb",
      href: "https://www.similarweb.com/website/tryopentag.com/",
      logo: "similarweb",
    },
  },
};
