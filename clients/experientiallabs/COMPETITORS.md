# Experiential Labs competitors: OpenRouter, LiteLLM, Portkey, and the training layer

*Research date: 2026-08-28. Sources: OpenRouter's own docs, FAQ, pricing and Series B post, plus Stripe's newsroom and the Bloomberg, TechCrunch, Fortune and Sacra coverage of the acquisition. litellm.ai and its enterprise page. portkey.ai pricing and the Palo Alto Prisma AIRS notice. CoreWeave and Rubrik acquisition press. The GitHub REST API on seven repositories, all pulled the same day. An Apify pull of X and Reddit over a 72-hour window. Prices are public list, checked 2026-08-28. Items marked **[unverified]** rest on a single source or could not be cross-checked. Read `EXPERIENTIAL_LABS.md` first, this file assumes it.*

---

## The short version

Experiential Labs is a two-person company that has picked a fight in a market where the independents are being bought, and where the company it named itself after just sold for more than seven billion dollars.

- **OpenRouter** is the reference point, and as of 16 August it is **being acquired by Stripe for more than $7B**, confirmed on Stripe's own newsroom. It runs 25 trillion tokens a week, serves 8 million developers, and Sacra estimates $160M in annualized revenue. Its fee is 5.5% on credit purchases plus a **5% BYOK fee above a monthly allowance**. That BYOK fee is the single most attackable thing in this entire report and Experiential is not attacking it clearly enough.
- **LiteLLM** is who Experiential will actually be compared against, and the comparison happened on their own launch thread within three hours. 57,450 GitHub stars, SOC 2 Type 2, ISO 27001, and Netflix, NASA, Okta, Ramp, Zurich and Cloudera on the logo wall. It also carries **4,862 open issues**, which is the crack.
- **Portkey** stopped being an independent company. Its open-source gateway **has not been pushed since 25 May 2026**, four days before the Palo Alto Networks acquisition completed, and its own pricing page now sends buyers to paloaltonetworks.com. A dormant repo and a redirected checkout is a real opening for anyone selling open source.
- **The training layer has already consolidated.** OpenPipe went to CoreWeave and its repo has been dead since May 2024. Predibase went to Rubrik. Experiential's second product has fewer live competitors than its first, and that is the more defensible half of the company.

**The single clearest read: Experiential's gateway is a commodity and its training layer is not, but the website leads with the gateway.** Nine credible gateways exist, four of them free. Nobody else combines a free gateway with a training loop that turns the traffic into a model the customer owns. That is the whole story and the homepage tells a weaker one.

---

## Head-to-head at a glance

| | **Experiential** | **OpenRouter** | **LiteLLM** | **Portkey** | **Bifrost** |
|---|---|---|---|---|---|
| Shape | Open-source gateway plus training | Hosted marketplace | Open-source proxy plus SDK | Governance gateway, now enterprise security | Open-source gateway |
| Founded | 2026 | 2023 | 2023 | 2023 | 2025 |
| Team | **2** | **[unverified]** Not disclosed, NY | Berrie AI, hiring on Ashby | Inside Palo Alto Networks | Maxim AI |
| Funding / owner | YC S26, amount undisclosed | **$154M raised, $1.3B Series B May 2026. Being acquired by Stripe for >$7B** | Not disclosed | **Acquired by Palo Alto Networks, May 2026** | Maxim AI |
| Revenue | None disclosed | **[unverified]** Sacra estimates **$160M annualized**, Aug 2026 | Not disclosed | Not disclosed | Not disclosed |
| Scale | **581 GitHub stars** | 25T tokens/week, 8M developers | 57,450 stars, 10,974 forks | 12,842 stars | 7,609 stars |
| Open source | **Yes, Apache-2.0, whole gateway** | **No, proprietary** | Yes, core | Yes, MIT, **repo dormant since 25 May** | Yes, Apache-2.0 |
| Language | **Rust** data plane | Not disclosed | Python | TypeScript | Go |
| Open issues | **2** | n/a | **4,862** | 248 | 960 |
| Last push | 28 Aug 2026 | n/a | 28 Aug 2026 | **25 May 2026** | 28 Aug 2026 |
| Models | 600+ | 400+ | 100+ providers | 1,600+ | Not disclosed |
| Token markup | **0%** | 0% on tokens | 0%, you run it | 0%, you run it | 0%, you run it |
| Platform fee | **$0.00** | **5.5% on credits, 5% crypto, $0.80 min** | Free OSS | $0 free, **$49/mo**, custom | Free OSS |
| BYOK fee | **None, every plan** | **5% above allowance.** $25k/mo free on pay-as-you-go, $200k on Enterprise | None | None | None |
| Self-host | **Yes, one command** | **No** | Yes, air-gapped | Yes | Yes |
| Compliance | **SOC 1 only** | SOC 2 | **SOC 2 Type 2, ISO 27001** | **SOC 2, ISO 27001, GDPR, HIPAA** | **[unverified]** Not published |
| SSO / SCIM | Enterprise conversation | SSO on Enterprise | **SSO + SCIM shipped** | SSO with Okta | Not published |
| Support SLA | Community | Discord and email | **Sev 0 in 1 hour, 24/7** | Dedicated on Enterprise | Not published |
| Named customers | **0** | 8M developers claimed | **Netflix, NASA, Okta, Ramp, Zurich, Cloudera** | Qoala, Haptik, Ario, a Fortune 500 pharma | Not published |
| Trains you a model | **Yes, you own the weights** | No | No | Autonomous fine-tune listed, Enterprise | No |
| Comparison pages | **0** | 0 | 0 | **Many, plus a buyers guide** | Some |

---

## 1. OpenRouter, the company they named themselves after

**openrouter.ai · New York · CEO Alex Atallah**

### What they are

The hosted model marketplace. One account and one key reach more than 400 models from more than 60 providers behind an OpenAI-compatible endpoint. Nothing to run, nothing to deploy. Atallah has described the company as the AI equivalent of Stripe, which turned out to be a prophecy.

### The number that changes everything

On 16 August Bloomberg reported that Stripe had finalized an agreement to buy OpenRouter for **more than $7 billion**. Stripe's own newsroom carries the announcement: "Stripe agrees to acquire OpenRouter to help businesses optimize token routing and usage." The Wall Street Journal had earlier reported talks at about $10B. The price is roughly 5.4 times the $1.3B valuation OpenRouter set in its Series B three months earlier.

That Series B was $113M in May 2026, led by CapitalG, with NVentures, ServiceNow Ventures, MongoDB Ventures, Snowflake Ventures, Databricks Ventures, AMP PBC and Pace Capital joining a16z and Menlo. Total raised is about $154M. Weekly volume went from 5 trillion to 25 trillion tokens in six months. Sacra estimates **$160M annualized revenue in August 2026**, up from $50M at the end of 2025, growing about 14% month over month. **[unverified]** on the revenue figure, which is a third-party estimate.

### Pricing, and the fee nobody talks about

Two separate fees, and Experiential's marketing only answers the first one:

1. **5.5% when you buy credits** ($0.80 minimum, 5% for crypto). No markup on the tokens themselves.
2. **A 5% BYOK fee.** Bring your own provider key and you get a free allowance measured by list-price inference cost: **$25,000 a month on pay-as-you-go, $200,000 on Enterprise**. Above that, OpenRouter charges 5% of what the same model and provider would have cost on OpenRouter.

The second fee is the interesting one. A company spending $40k a month on its own OpenAI key pays OpenRouter roughly $750 a month for the privilege of using keys it already owns. Experiential charges nothing for BYOK on any plan, forever, and says so on the pricing page. They are not saying it loudly enough.

Other terms: credits expire after one year. No volume discounts. Zero logging by default, with a 1% discount if you opt in to logging.

### Where Experiential wins

- **Self-hosting.** OpenRouter cannot be run in your own infrastructure at all. Experiential runs with one command and prompts never leave.
- **The BYOK fee.** See above. This is the sharpest single comparison available and it is under-used.
- **Quantization and quality.** OpenRouter routes across pooled hosts. One X user this week: "Openrouter is terrible! I did deepseek with them and got garbage at the end of the response likely routed to some cheap ultra quanticized version!" Experiential's quality dial prefers the provider serving at full precision and says so in the interface.
- **Acquisition uncertainty.** Buyers who dislike routing their AI traffic through a payments company now have a reason to look elsewhere. This window closes once the deal settles.

### Where Experiential loses

- Everything about scale. 8 million developers against 581 GitHub stars.
- 400+ models with lab partnerships that get new models on day one.
- SOC 2, against Experiential's SOC 1.
- A brand so established that "use OpenRouter" is written into other people's documentation.

---

## 2. LiteLLM, the comparison that will actually be made

**litellm.ai · Berrie AI Incorporated**

### What they are

The open-source gateway everyone already runs. A Python SDK and a proxy server standardizing 100+ providers behind one OpenAI-compatible interface. **57,450 GitHub stars and 10,974 forks**, created July 2023, pushed the same day as this research. It is the default answer to "we need a gateway."

Within three hours of Experiential's Show HN going up, a commenter asked: "I have not tried it yet. Is it similar to LiteLLM? If so, what sets it apart?" The CEO answered: "Router and model optimization from traffic is the main differentiator." The CTO added: "Also a hosted marketplace, not just BYOK." That is the whole positioning battle, and it will be fought every single time.

### What their enterprise tier proves

LiteLLM's enterprise page is the bar Experiential has to clear to sell to anyone large:

- **SOC 2 Type 2 and ISO 27001.** Experiential has SOC 1.
- **SSO and SCIM, OIDC and JWT auth, RBAC, secret managers and key rotation.** Shipped, not "contact us."
- **Air-gapped deployment** and a multi-region control plane.
- **24/7 support with published response targets.** Sev 0, meaning all production traffic failing, gets a one-hour target. Vulnerabilities get 72 hours.
- **Logos:** Netflix, Okta, Ramp, NASA, Zurich, Cloudera. A named testimonial from a Netflix staff engineer: "LiteLLM has let my team provide the latest LLM models to our users usually within a day of them being released."
- A 30-day trial key with no sales call and no credit card.

### The crack

**4,862 open issues.** That is the largest maintenance backlog in the competitive set by an order of magnitude, and it is what a Python codebase carrying 100+ provider integrations and 10,974 forks looks like after three years. Third-party comparisons put LiteLLM's added latency at 50 to 200 ms against TrueFoundry's claimed 3 to 4 ms. **[unverified]**, and both are vendor-published, but the direction is consistent.

There is also a reported **March 2026 supply-chain attack**: a poisoned GitHub Action compromised specific LiteLLM PyPI packages with a credential-stealing payload, quarantined quickly, patched at v1.83.0 and later. **[unverified, single vendor source.]** Do not repeat this as fact. If a prospect raises it, Experiential's answer is already written on their security page: pinned dependency graph, releases cut from CI, a build path anyone can audit in the open repo.

### Where Experiential wins

- **Rust against Python.** Experiential deleted its Python data plane on 26 August and confirmed the rewrite publicly. Latency is the one axis where a new entrant can beat a three-year-old incumbent on merit.
- **Two open issues against 4,862.** A small, current codebase is a genuine selling point to a platform team that has to own this thing.
- **A hosted option.** LiteLLM has no first-party managed cloud. You run it or you pay someone else to.
- **The training layer.** LiteLLM routes. It does not make your traffic into an asset.

### Where Experiential loses

- Every compliance and support line above.
- 57,450 stars against 581. Nobody was ever fired for picking LiteLLM.
- Named enterprise customers, against zero.

---

## 3. Portkey, the one that stopped being a company

**portkey.ai · now Prisma AIRS AI Gateway, Palo Alto Networks**

### What happened

Palo Alto Networks completed its acquisition on **29 May 2026**. Portkey is now the core AI Gateway inside the Prisma AIRS security platform, and the banner on its own site reads "Portkey is now PRISMA AIRS AI Gateway, generally available for all enterprises," pointing at a Palo Alto blog post from July 2026.

### The detail that matters

**The open-source gateway repo has not been pushed since 25 May 2026.** Four days before the acquisition completed. Three months of silence on a 12,842-star MIT repo.

And on the pricing page, the "Upgrade Now" button under the $49 Production plan does not go to Portkey. It goes to `paloaltonetworks.com/ai-security/ai-gateway`. So does "Talk to sales." The self-serve product is now a lead form for an enterprise security platform.

Pricing as published: Free with 10k logged requests a month and 3-day retention. Production at **$49/month** for 100k requests, $9 per additional 100k up to 3M. Enterprise custom, with SOC 2, ISO 27001, GDPR, HIPAA, VPC hosting and private tenancy. Named customers include Qoala, Haptik, Ario and an unnamed Fortune 500 pharma company.

### Where Experiential wins

This is the clearest opening in the report and it needs no argument. A developer who chose Portkey because it was open source now has a dormant repo and a checkout flow that routes to a firewall company. Experiential ships releases daily under Apache-2.0. "Read the code your traffic flows through" is a real answer to a real anxiety, and right now there is a pool of people feeling it.

### Where Experiential loses

Palo Alto's compliance, sales force and enterprise relationships. If the buyer is a CISO rather than a platform engineer, Prisma AIRS wins on the first slide.

---

## 4. The training layer, where the competition already left

Experiential's second product has fewer live rivals than its first, which is the opposite of what you would expect and is the strongest structural fact about the company.

- **OpenPipe went to CoreWeave.** The clearest "turn your prompts into a fine-tuned model" company. Its distillation work migrated onto CoreWeave's platform, and the public repo, at 2,831 stars, **has not been pushed since 25 May 2024**. Founder Kyle Corbitt's "Why RL Won" talk is still the canonical statement of this thesis, and it is now a talk rather than a product you can buy standalone.
- **Predibase went to Rubrik.** Fine-tuning open-source models into production systems, folded into an agentic-AI story for a data-security company.
- **Fireworks, Together, Baseten, Modal.** Fine-tuning as a feature of an inference platform, not the whole product. Note that Modal and Fireworks are both providers Experiential routes **to**, so they are suppliers as much as rivals.
- **Tinker, from Thinking Machines Lab.** Not a competitor. The CEO said on Hacker News: "We are going to add continual RL via Tinker soon," and `tinker tml-` sits in their own key-detection list. Treat it as a dependency, and as a dependency risk.

**What Experiential has that none of them had:** the gateway. OpenPipe and Predibase both needed a customer to commit to a fine-tuning project before anything happened. Experiential gets into the request path for free, watches the traffic, and only then proposes a model, with the evidence already in hand. That sequencing is the actual company.

---

## 5. The rest of the field, briefly

| Who | Why they matter |
|---|---|
| **Bifrost** (Maxim AI) | 7,609 stars, Go, Apache-2.0, actively pushed, 960 open issues. The real open-source challenger by traction after LiteLLM, and nobody is watching it. |
| **Helicone** | 6,106 stars, Apache-2.0, absorbed by Mintlify. **[unverified]** One vendor comparison calls it "maintenance mode," but the repo was pushed 26 August, so treat that label as unconfirmed. |
| **TrueFoundry** | $499/mo, SOC 2 Type II, VPC and air-gapped, 1,000+ models, claims 3 to 4 ms. Publishing comparison SEO almost daily. The most aggressive marketer in the category. |
| **Cloudflare AI Gateway** | Managed, edge-routed, **5% fee** on Unified Billing credits. Same tax as OpenRouter, different logo. |
| **Vercel AI Gateway** | For teams already on Vercel. Distribution, not technology. |
| **Kong AI Gateway** | $500/mo per control plane. Wins where an API platform already exists. |
| **AISIX** (api7) | Rust, Apache-2.0, semantic routing and ensemble in the open-source core, from the Apache APISIX creators. Architecturally the closest thing to Experiential. **But only 123 stars and 112 open issues, created April 2026.** An earlier draft of this file overstated them as a threat. They are one to watch, not one to fear. |
| **Requesty, Respan, Martian, Not Diamond, Recompose** | Managed routers. Not Diamond powers OpenRouter's auto-router. Recompose launched to r/ClaudeCode on 27 August. |

---

## Cross-cutting reads

### 1. The BYOK fee is the best argument they own and they are burying it

Everyone in this market says "0% markup on tokens." OpenRouter says it, LiteLLM says it, Portkey says it. It is not differentiating. What **is** differentiating is that OpenRouter charges 5% to use your own keys above $25k a month, and Experiential charges nothing on any plan, forever. A company at $40k a month of BYOK traffic is paying OpenRouter about $750 a month for nothing. That is a number a buyer can check in ten seconds and it belongs on the pricing page in bold.

### 2. The category is consolidating and that is the pitch, not the problem

OpenRouter to Stripe. Portkey to Palo Alto. Helicone to Mintlify. OpenPipe to CoreWeave. Predibase to Rubrik. Every independent gateway or training company of consequence has been bought inside eighteen months. Experiential should not hide from this. It is the reason to choose an Apache-2.0 gateway you can run yourself: when the vendor gets bought, your infrastructure does not change hands with it. Portkey's dormant repo is the proof, and it is three months old and checkable.

### 3. The gateway is a commodity and the training layer is not

Nine credible gateways, four free. Routing, failover, budgets, allowlists and attribution are now table stakes and Experiential is late to all of them. The training loop is the opposite: two of its three natural competitors were acquired and their products absorbed. Experiential's homepage leads with the commodity half. The YC launch leads with the defensible half. The website is the one that is wrong.

### 4. Zero named customers is the gap that decides deals

LiteLLM has Netflix, NASA, Okta, Ramp, Zurich and Cloudera on one page. Portkey has a Fortune 500 pharma quote. Experiential has one unnamed customer in one case study. In a market where the product sits in the critical request path, a logo wall is not vanity, it is risk reduction. Getting one nameable customer is worth more than any feature on the roadmap.

### 5. SOC 1 is not the certification anyone asked for

SOC 1 covers controls relevant to financial reporting. Security reviews ask for SOC 2. LiteLLM has SOC 2 Type 2 and ISO 27001. Portkey has SOC 2, ISO 27001, GDPR and HIPAA. OpenRouter has SOC 2. Experiential's security page is the most honest document in this entire competitive set, control by control, including "not shipped today, and we won't pretend otherwise" about guardrails. That honesty will win them technical respect and it will not get them through procurement.

### 6. The caching objection is unanswered and it is the one that will be asked

On their own launch thread, three separate people raised it: switching models throws away cached input tokens, and cached input is where the savings already were. The answer given was "we rarely switch, or switch at task boundaries," and a commenter replied with the obvious follow-up, which is that if you rarely switch you do not need a switching gateway. There is no published benchmark. Until there is, every technical evaluator will ask this and every answer will sound defensive.

### 7. Where they are structurally exposed

Two people. No middle pricing tier, so no self-serve revenue between free and a sales call. A dependency on Tinker for the continual-RL roadmap. A name that cannot be searched. And a free product whose entire economic logic depends on converting to an enterprise engagement that has not been publicly proven once.

---

## What to watch, per competitor

| Competitor | Watch for | Why it matters |
|---|---|---|
| **OpenRouter** | Whether the Stripe deal closes, and what happens to the BYOK fee and free tier under Stripe | A fee change resets the whole price argument. Integration disruption is a migration window. |
| **LiteLLM** | Whether the open-issue count keeps climbing, and any further supply-chain incident | The maintenance burden is the only soft spot on an otherwise very strong incumbent. |
| **Portkey** | Any push to `Portkey-AI/gateway` after 25 May | If it stays dormant past six months, the open-source argument writes itself. |
| **Bifrost** | Star growth and whether Maxim AI funds it properly | The most likely open-source challenger nobody is tracking. |
| **AISIX** | Whether it gets past a few hundred stars | Same architecture, same license. Only a threat if it finds distribution. |
| **CoreWeave / OpenPipe** | Whether CoreWeave relaunches distillation as a standalone product | That is the only way the training layer gets crowded again. |
| **Tinker** | Pricing, availability and terms | Experiential's roadmap depends on it. A dependency, not a competitor, until it is both. |

---

## Sources

**Company pages.** [openrouter.ai/docs/faq](https://openrouter.ai/docs/faq) · [openrouter.ai Series B](https://openrouter.ai/blog/announcements/series-b/) · [litellm.ai/enterprise](https://www.litellm.ai/enterprise) · [portkey.ai/pricing](https://portkey.ai/pricing) · experientiallabs.ai homepage, /pricing, /custom-models, /intelligence, /security, /startups, both case studies

**Acquisitions.** [Stripe newsroom](https://stripe.com/newsroom/news/stripe-agrees-to-acquire-openrouter) · [Bloomberg, 16 Aug](https://www.bloomberg.com/news/articles/2026-08-16/stripe-nears-deal-to-buy-ai-firm-openrouter-for-over-7-billion) · [TechCrunch](https://techcrunch.com/2026/08/16/stripe-will-reportedly-acquire-ai-gateway-startup-openrouter-for-7b/) · [Fortune](https://fortune.com/2026/08/16/stripe-7-billion-deal-ai-firm-openrouter-acquisition/) · [CoreWeave on OpenPipe](https://www.coreweave.com/news/coreweave-to-acquire-openpipe-leader-in-reinforcement-learning) · [Rubrik on Predibase](https://www.rubrik.com/company/newsroom/press-releases/25/rubrik-to-acquire-predibase-to-accelerate-agentic-ai-adoption)

**Revenue and funding estimates.** [Sacra on OpenRouter](https://sacra.com/c/openrouter/) · [Contrary Research](https://research.contrary.com/company/openrouter) · [Menlo Ventures](https://menlovc.com/perspective/openrouter-now-processes-more-than-a-quadrillion-tokens-a-year/). All third-party estimates.

**Repository data.** GitHub REST API, pulled 2026-08-28, on `experientiallabs/experiential`, `BerriAI/litellm`, `Portkey-AI/gateway`, `maximhq/bifrost`, `Helicone/helicone`, `OpenPipe/OpenPipe`, `api7/aisix`.

**Launch thread.** [Show HN, 27 Aug, 157 points](https://news.ycombinator.com/item?id=49471407), all 26 comments read.

**Vendor comparison write-ups**, all published by competitors and read as positioning rather than fact: api7.ai, requesty.ai, truefoundry.com, respan.ai, portkey.ai, qveris.ai.

**Social.** Apify `scraper_one/x-posts-search` and `harshmaur/reddit-scraper`, 72-hour window, 2026-08-28.
