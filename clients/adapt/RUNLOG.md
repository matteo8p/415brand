# Run log

Newest first. One entry per report sent or built. The daily and weekly skills read the top entry before starting.

## 2026-08-17 weekly (window Aug 10 to 17)

**Output.** `reports/weekly-08-17-2026.html`, saved from a browser render of the Next.js page. Source data in `webapp/app/samples/briefs/viktor.ts`, rendered publicly at `/samples/viktor`. No email, no broadcast: delivered as a link and a file.

**Found.**
- Viktor's social media reach is mostly paid for: creators paid up to $10K a post, referral commissions, paid consultants, and a group of big accounts that reply to each other on launch day.
- 54 G2 reviews averaging 4.9, but 7 of the 9 written in August 2026 complain about the cost of credits in the dislike box.
- 238 Meta ads live in late August, about 646K monthly site visits, about $176K a month in estimated US Google Ads spend. SpyFu and Semrush disagree by more than 2x on spend, so both numbers were printed.
- Viktor pays for search terms like "chatgpt alternative" and "slack" rather than its own category. The category searches belong to nobody yet.
- Viktor doubled its cheapest plan.

**Seen but not sent.** None recorded.

**Follow up next run.**
- Re-check the creative watch list: which Meta ads have the most copies since Aug 17.
- Re-read the August G2 reviews and count the credit-cost complaints again.
- Check whether Viktor's paid search terms changed.

**Tooling.**
- The report HTML was made by loading the page in a browser, scrolling so every Recharts figure measured, then taking `document.querySelector('.analysis').outerHTML` and prepending the `<title>` and an inlined `webapp/app/samples/analysis.css`. A plain `curl` of the dev server renders every chart blank.
