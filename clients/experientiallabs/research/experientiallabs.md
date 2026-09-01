# Experiential Labs: business overview

*Research date: 2026-08-28. Sources: the YC company page and launch post, a full Firecrawl map and crawl of experientiallabs.ai (homepage, /pricing, /custom-models, /intelligence, /security, /about, /startups, /blog/claas, both case studies), the GitHub REST API on `experientiallabs/experiential`, the PyPI API on the `experiential` package, and the Hacker News Algolia API. Every claim is what the company says on its own site unless marked otherwise. Items marked **[unverified]** come from a single third-party source. Not to be confused with the many education companies using "experiential lab" as a term of art, which is a real search problem covered in `../CLIENT.md`.*

## One-liner

Experiential Labs sells an **open source AI gateway** that is free, and an **intelligence layer** on top of it that is not. The gateway is the wedge. The business is training companies a small model they own, using the traffic the gateway sees.

## The positioning split, and why it matters

The company describes itself two different ways depending on where you look, and the gap is the most useful thing to understand about them.

| Surface | The pitch |
|---|---|
| YC page | "Open source OpenRouter that turns your traffic into a better model" |
| YC launch post | "Turn your AI spend into a cheaper + better model you own" |
| Website title and homepage | "The open source AI gateway. One API key for every model" |
| Show HN, Aug 27 | "We built open OpenRouter that turns usage into a better model" |

The website leads with the gateway. The fundraising and launch material leads with the model. The `/about` page reconciles them: gateway first, "on top of the gateway sits an intelligence layer." Read it as a land-and-expand: free open-source infrastructure to win placement in the request path, then sell the thing that only works once you are in that path.

## Company

| | |
|---|---|
| Batch | **Y Combinator Summer 2026**, active. Founded 2026. Team size **2** |
| Location | San Francisco |
| YC partner | Diana Hu |
| Domains | experientiallabs.ai (marketing), platform.experientiallabs.ai (dashboard, docs, `llms.txt`), api.experientiallabs.ai/v1 (API), xplabs.ai (alt) |
| Contact | founders@xplabs.ai · [cal.com/silen/experiential-intro](https://cal.com/silen/experiential-intro) |
| Social | X [@explabsai](https://x.com/explabsai) · [LinkedIn](https://www.linkedin.com/company/experiential-labs/) |
| Repo | [experientiallabs/experiential](https://github.com/experientiallabs/experiential), Apache-2.0, **572 stars**, 52 forks, 2 open issues. Created 24 June 2026 |
| Package | PyPI `experiential` v0.6.1, 11 releases. Self-host with `uvx --from experiential exp run` |
| Funding | Not disclosed anywhere public beyond YC backing |

### Founders

**Kion Fallah**, Founder/CEO. [@okfallah](https://x.com/okfallah) · [LinkedIn](https://www.linkedin.com/in/kfallah). PhD in Machine Learning from Georgia Tech, focused on synthetic data. Previously Staff Research Scientist at **Waabi**, leading the mixed reality simulation team. **243 commits**, the most active committer on the repo.

**Silen Naihin**, Founder/CTO. [@silennai](https://x.com/silennai) · [LinkedIn](https://linkedin.com/in/silen-naihin). Built and grew **AutoGPT to 160k GitHub stars**. AI for science at the DOE. Previously cofounded **Stackwise (YC W24)**. Research in continual learning, interpretability and evals. **145 commits**. He is the one who posts to Hacker News (user `SilenN`).

Worth noting: `devin-ai-integration[bot]` is the third-largest committer with **55 commits**. They run Devin on their own codebase.

The simulation-plus-RL thesis is not marketing invention. It is Kion's Waabi background (self-driving simulation) applied to LLM agents, and there is a paper: **CLaaS: Continual Learning as a Service**, Fallah, Naihin, Widawsky and Mao, June 2026, [arXiv 2606.05559](https://arxiv.org/abs/2606.05559).

## The product

### The gateway (free, open source, Apache-2.0)

One OpenAI-compatible `/v1` endpoint. Also speaks the **Anthropic Messages API** at `/v1/messages` and the OpenAI Responses API, which is what lets them repoint Claude Code at the gateway with two environment variables.

- **600+ models.** Hosted providers, your own provider keys (BYOK), and your own local GPUs, all behind one key.
- **0% markup on tokens.** Provider list price whether you route on their credits or your keys. This is the whole competitive argument against OpenRouter's 5.5% credit fee.
- **Provider waterfalls.** Ordered provider chains per model, org overrides, pooled accounts that absorb rate limits. Failover changes *who serves the model*, never *which model answers*, and only on capacity errors. That last detail is a direct shot at gateways that silently substitute models.
- **Quality / Speed / Cost dial** per team or per key. The quality setting prefers the provider serving at full precision, which targets the most common OpenRouter complaint (see `competitors.md`).
- **Controls.** Scoped keys per person, agent and tool. Aliases so routing is config rather than a deploy. Model allowlists. Budgets that stop requests *at* the cap. Four org roles.
- **Attribution.** Spend and latency by agent, person, model or day. Request logs showing how each call routed and what it cost. Same numbers over the API.
- **Policy.** ZDR-only routing, no-training-provider routing, provider allowlists, enforced at the gateway on every request.
- **Rust data plane.** They rewrote from Python; the commit "Delete the python gateway data plane" landed 26 August. Confirmed by the CTO on HN.
- **Latency.** Target is ~1 ms overhead. They publish that their CI badge currently shows **about 20 ms p50** against a local mock, and say the number that counts is measured in your own deployment. Unusually honest, and worth holding them to.

### The intelligence layer (Enterprise, paid)

Six things, of which three are the real product:

1. **Per-prompt model optimization.** Route each request to the cheapest model clearing your quality bar, decided from your observed traffic rather than a leaderboard.
2. **Caching.** Find cache-hit opportunities in your traces; repeated tokens return at 90% off.
3. **A model you own.** The end state.
4. Lowest-cost routing across deployments of the same model.
5. Load balancing across providers, regions and keys.
6. Prompt compression, shown as a diff you apply.

### How the custom model is actually built

This is the differentiated part and it is worth understanding precisely.

1. **Traces in.** Connect Arize, Braintrust, LangChain, LangSmith, Langfuse, PostHog, Mastra or a Postgres DSN. Or just route through the gateway, since traffic is traces.
2. **A simulation of your company.** From the traces they build what they call a digital twin of production, with your tools, data shapes and failure modes.
3. **Scenarios generated, executed, verified.** The simulation generates scenarios including rare failures, candidate models run them end to end without touching production, every outcome is verified.
4. **Training.** Three methods: distillation from a frontier teacher, **GRPO + OPSD** reinforcement learning scored against verified simulation outcomes, and supervised fine-tuning on gold responses mined from traffic.
5. **Proof before serving.** Held-out scenarios, judged against *your* evals, not the simulation. Their own line: "Simulation helps us train. Your evals decide whether the model ships."
6. **Deployment.** Shadow, then a one-line alias change. The frontier model stays as fallback. Customer owns and can download the weights.

## Pricing

| Tier | Price | What you get |
|---|---|---|
| Free | **$0** | The entire gateway. Every provider, BYOK, local models, failover, budgets, allowlists, attribution, ZDR routing, request logs. 0% markup. Community support. |
| Enterprise | **Custom** | SSO (SAML, SCIM), advanced RBAC, private networking, data residency, SOC 1 report access, audit logs, and the whole intelligence layer. |

**There is no middle tier.** You are free or you are a sales conversation. For a two-person company that is a deliberate and defensible choice, but it means no self-serve revenue at all.

**Startups deal** (`/startups`, by application): $500 in credits ($20 instantly on sign-in, the rest after review), free GPT-5.6-Luna, DeepSeek V4 Flash and Qwen 3.8 27B, and **every dollar of OpenAI spend matched up to $50k**. That last one is an aggressive customer-acquisition subsidy.

## Published results

Both case studies are public and unusually well caveated.

**Computer use** (a real customer deployment). A macOS agent reading the accessibility tree. They generated 1,000 tasks across Safari, Notes, Calculator and Activity Monitor, drove fleets of Mac VMs with **Kimi K2.6 as teacher**, filtered trajectories with an LLM judge, and distilled into **Qwen 3.5 9B**. Evaluated in a simulation built from a RAG database over the collected traces, with an LLM acting as a text world model.
- **97% cheaper** than Opus 4.8, **7× faster**, **+50%** task completion.
- **Read the +50% carefully.** It is against the *untrained Qwen 3.5 9B baseline*, not against Opus. And it is measured in their own simulation, not production.

**Claims research** (explicitly labelled "a controlled benchmark experiment, not a customer deployment"). Qwen3.5-4B trained with GRPO and a LoRA adapter on the public AVeriTeC benchmark, 500 held-out development claims, same tools and scaffold as the baseline.
- **+10.9% relative** verdict accuracy over Claude Haiku 4.5 (paired CI +4.5% to +17.3%), **+11.3%** official AVeriTeC score, **44% fewer searches**, **9.4× faster**, **90% lower cost**.
- Plus a three-model router (trained 4B, DeepSeek v4-flash, Claude Opus 5) using text-embedding-3-large plus claim metadata into a logistic classifier, fit on 2,896 claims and measured on 489 held out. At the mid setting, 76% to the 4B and 24% to Opus gives **73.6% accuracy at $27 per 1,000 claims**, against always-Opus at 77.5% and $89.
- They volunteer that the router is "a deliberately simple example" with a "modest" difficulty signal.

The honesty here is a genuine asset. Most companies would have led with "+50%" and buried the baseline.

## Security posture

- **SOC 1 audited, report on request.** Note carefully: **SOC 1, not SOC 2.** SOC 1 covers controls relevant to financial reporting. Enterprise security reviews ask for SOC 2. The site says SOC 1 is "the only one we claim," which is honest, but it is a gap against every gateway competitor of scale.
- The `/security` page grades itself control by control, and says "not shipped today, and we won't pretend otherwise" about guardrails. Shipped: identity (Google/GitHub sign-in, four roles), secrets (encrypted vault, provider keys never reach agents), residency (self-host, one command, prompts never leave). On the roadmap: signed images and provenance, dedicated vulnerability scanning. Enterprise engagement: SAML/OIDC SSO, SCIM, PII masking, prompt-injection defenses, managed KMS.
- This page is the most credible thing on the site. It will do more for them in an enterprise review than any amount of marketing.

## The go-to-market device worth noticing

The homepage ships **copy-paste prompts you drop into a coding agent** (Claude Code, Cursor, Codex, Aider, Conductor). The agent then: creates an account instantly from an email via `POST /api/signup/instant`, **searches your `.env`, `.zshrc`, `~/.aws/credentials` and `~/.modal.toml` for provider API keys by prefix**, offers to connect the ones you approve, reads your Claude Code and Codex logs for usage metadata to backfill your dashboard, and repoints every coding agent at the gateway.

It is carefully consent-worded, matches on prefix only, never echoes full keys, and asks before each step. It is also, plainly, "paste this into your agent and let it go looking for your API keys." Some security reviewers will love the transparency and some will refuse on principle. Either way it is the most distinctive distribution mechanic on the site and it should be discussed openly rather than glossed.

## SWOT (analyst view)

**Strengths.** Genuinely open source under Apache-2.0 with a real repo and 572 stars in two months. 0% markup is a clean, checkable claim against OpenRouter's 5.5%. Rust data plane. Founders with the exact research background the hard half of the product needs. Published, caveated results. A security page that reads like it was written by someone who has sat through a security review. Shipping extremely fast: 11 PyPI releases, three in the last three days.

**Weaknesses.** Two people. SOC 1 rather than SOC 2. No middle pricing tier, so no self-serve revenue. The company name is close to unsearchable. The caching objection raised repeatedly on HN (below) has no crisp public answer. Zero presence on Reddit, and the gateway category has active competitor subreddits.

**Opportunities.** OpenRouter's 5.5% fee and its quantization and quality complaints. LiteLLM's March 2026 supply-chain incident. Portkey and Helicone both losing independence. Chinese open-weight models eating OpenRouter's top volume slots, which makes "you do not need frontier for most of this" an easier argument every month. Gartner projecting AI gateway adoption from ~25% in 2025 to 70% by 2028 **[unverified, second-hand]**.

**Threats.** Every adjacent independent is being acquired (see `competitors.md`). AISIX is Rust, Apache-2.0 and shipping semantic routing in the open-source core, which is architecturally the closest thing to them. The gateway itself is becoming a commodity, and the intelligence layer is the only durable margin, which means the free tier has to convert or the whole model fails.

## What Kion and Silen would care about from us

See `../CLIENT.md`. Short version: they are having their biggest visibility moment right now, on Hacker News, and two people have no systematic way to catch everyone that moment surfaces.
