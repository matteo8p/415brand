# Run log

Newest first. One entry per report sent or built. The daily and weekly skills read the top entry before starting.

## 2026-08-29 daily (window Aug 27 to 28)

**Output.** `reports/daily-08-29-2026.html`, `reports/daily-08-29-2026.email.html`, `reports/daily-08-29-2026.email.txt`. Email copy built as a file only. **No Resend broadcast created.** Prospect, nothing sent.

**Found.**
- Lead story: Anthropic published [The AI-Native SDLC Playbook](https://claude.com/blog/the-ai-native-sdlc-playbook) on Aug 26. It validates Ref's thesis ("code is no longer the bottleneck, your SDLC is", human attention moves "from reading every line to judging intent and risk") and then prescribes markdown artifacts committed to git, which is the approach Ref already argues against. Tailwind and threat in one document.
- Best single lead: [@_jsolly](https://x.com/_jsolly/status/2093115956620833214), who found out cloud Cursor agents do not support plan mode. Ref Plans is cloud plan mode that launches Cursor Background Agents.
- The AGENTS.md versus CLAUDE.md split is the loudest complaint in the category: nine posts in two days across five languages, all describing one team ending up with two sets of instructions. Nobody is selling the answer.
- Traycer shipped twice more (HuggingFace open models Aug 27, mobile confirmed Aug 28). Their founders replied to individual users on both days.
- Share of voice, measured: Matt Dailey's own HN submission got 1 point and 0 comments. Across 196 posts pulled in the window, Ref was named by nobody except Matt Dailey.
- An academic paper is now measuring whether AGENTS.md files help coding agents at all, and SPECMINE is a large-scale corpus of spec-driven development artifacts. The category is becoming a field.

**Seen but not sent.** @akbrouwer4 and @caiopizzol, both Aug 26, both still unanswered, were kept out of the tables because they are already in `leads/08-28-2026.md`. They went in the week bullets as follow-ups instead.

**Follow up next run.**
- Watch how the market reacts to the Anthropic playbook over the next week.
- Check whether @akbrouwer4 and @caiopizzol were answered.
- Watch the "Shopify CEO considering banning Claude Code over the config file problem" claim from @yagiryuuu. Unverified, second-hand, do not repeat as fact.

**Tooling.**
- The X query cap is **100 characters**. Both queries had to be split to fit.
- Reddit on `plan mode claude` returned almost pure noise. Keep Reddit to product names only.
- Hacker News is worth keeping: the Algolia API (`hn.algolia.com/api/v1/search_by_date`) needs https, and its plain query does fuzzy matching, so read the hits rather than trusting the ranking. It produced two of the better leads.
- Reddit blocks both Firecrawl and plain curl JSON, so engagement numbers on Reddit threads have to come from the Apify pull or be left out.
- The email's "Where this came from" section named Apify and actor names. That is now against the house style: never name the tool that fetched a source in anything a client reads.

## 2026-08-28 research and leads sheet

**Output.** `research/ref.md`, `research/competitors.md`, `IGNORE_RULES.md`, `leads/08-28-2026.md` (the sample used to open the conversation, not sent). Pulled 2026-08-28 from X (180 posts, 7-day window, terms `context7`, `ref.tools`, `traycer`, `spec driven development`, `spec-driven`, plus a problem-space query on `plan mode`, `plan review`, `AGENTS.md`, `too many PRs`) and Reddit across the same product terms.

**Found.**
- Best lead by a distance: [@akbrouwer4](https://x.com/akbrouwer4/status/2092658340434182579) (Aug 27): "HELP! I'm struggling with my AI Agents... bouncing between Cursor, Claude Code, Codex, and Hermes agents... Memory doesn't carry across any of them. I'm still the router." Traycer's founder replied within hours. Ref never showed up. This single thread is the whole pitch.
- Context7 has a pricing crack. [@caiopizzol](https://x.com/caiopizzol/status/2092721310648455255): "add 'use context7' to every coding agent — also context7: monthly quota reached. self-hosting is enterprise-only."
- The SDD backlash is real and quotable. Four separate "waterfall with extra steps" posts in one week, plus a study of 100,247 PRs where none of five hypotheses held.
- Traycer shipped Desktop, headless host, and HuggingFace support in a single week, and teased mobile plus a cross-harness memory layer.
- Ref has no comparison page for Traycer. Free, specific advice to open a conversation with.

**Seen but not sent.** The full lead list is in `leads/08-28-2026.md`.

**Follow up next run.** Build the first daily.

**Tooling.** Reddit search on problem descriptions returned heavy noise. Product names only from here on.
