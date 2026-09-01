# Posts to ignore

Standing list of post types that are not worth a reply for Aqua. Every daily report is filtered
through this before Finn sees it; the filtering is silent, so this file is the only place the rules
are recorded. Keep it current.

**None of these are confirmed by the client yet.** They are seeded from the Aqua research
(`research/aquavoice.md`), from `.claude/skills/find-leads/SKILL.md` section 5, and from what carried over from Cloudless
— same subject, same actors, same noise. Walk Finn through them on the first call and move each one
into "Confirmed" or delete it.

## Proposed (added by research415, awaiting Finn's yes/no)

| # | Rule | Why |
|---|---|---|
| 1 | **Wants offline, on-device, or local processing.** "I need it to work on a plane", "nothing leaves my machine", anyone arriving from a privacy thread. | Avalon is cloud-only and structurally always will be. Aqua cannot serve these people and Finn will look silly pitching them. Handy, superwhisper and Cloudless win here and we say so. |
| 2 | **Android users.** "wispr flow android", anyone on a Pixel or Galaxy. | No app, no announced plan, and Wispr gives Android away unlimited. This is the single worst room for Aqua to walk into. |
| 3 | **Linux users.** "dictation on linux", "arch btw". | No build. Handy owns Linux. |
| 4 | **Regulated-health and HIPAA requests.** Clinicians asking about BAAs, PHI, patient notes. | No HIPAA BAA. Wispr has SOC 2 Type I; Aqua has nothing comparable published. Pitching here invites a compliance question Aqua loses. |
| 5 | **Just subscribed to Wispr and happy.** "just paid for the year", "best $15/mo I spend". | They have just chosen to pay. **Exception:** someone who paid *and* is now asking for a refund or saying quality collapsed is a churn target and stays in. The test is sentiment, not the transaction. |
| 6 | **Price-only complaints about Wispr.** "$15 is too much", "why is dictation a subscription". | Aqua is $10, not free. A price complaint is a lead for Cloudless and Handy, not for Aqua. Aqua's wedge is accuracy — send the ones complaining about *quality*, not cost. |
| 7 | **Free-tier shoppers.** "what's the best free dictation app". | Aqua's free tier is 1,000 lifetime words, the least generous in the category. This room is lost before Finn opens his mouth. |
| 8 | **Subscription resale and deal spam.** r/IndiaDealsExchange, r/Discount_Subscription, "[H] Wispr Flow Pro 10 months [W] ₹950 UPI". | Resellers, not users. |
| 9 | **Affiliate and referral posts.** Anything carrying a `wisprflow.ai/r?WISPR…` code or `#affiliate`. | Paid promoters. Replying argues with someone's commission. |
| 10 | **Astroturf.** Templated posts from throwaway accounts. The reference pattern is Willow's Aug 24–26 2026 campaign: 11 near-identical "I started researching…" posts, 11 new accounts, 11 subreddits, all inside 48 hours. | Not real people. Log the campaign in a bullet, never list the posts as mentions, never reply. |
| 11 | **Wispr as a business-school case study.** r/SaaS, r/startups and LinkedIn teardowns analysing Wispr's growth, pricing or landing page. | The room is founders studying a company, not people looking for a dictation app. Nobody there installs anything. |
| 12 | **Off-topic name collisions.** The bare word "aqua" returns water brands, Minato Aqua and Aquaman; "flow" returns Flow state, Flowbite and perfume. | Search artefacts. Drop anything where the product name is not in the title or body. |
| 13 | **Competitors' own staff.** Check the bio before the post. | Includes Wispr, Willow, superwhisper and Cloudless employees. |

## Rules that need a decision, not a default

- **Japanese-language posts.** If the ">50% of users are in Japan" figure holds, these are not noise —
  they are the main event, and rule 12's collision list needs Japanese equivalents instead. Do not
  filter them until Finn has answered the question in `CLIENT.md`.
- **Cloudless mentions.** Cloudless is a paying client of ours and a direct competitor of Aqua.
  Posts about Cloudless are not reply targets for Finn and must not be surfaced as leads.
  See the conflict notice in `CLIENT.md`.

## Changelog

- **2026-08-31** — file created with rules 1–13 proposed, none confirmed. Rules 8–12 carried over
  from `clients/cloudless/IGNORE_RULES.md` (same subject, same pulls). Rules 1–4, 6–7 are Aqua-specific and
  derive from the product gaps listed in `research/aquavoice.md`.
