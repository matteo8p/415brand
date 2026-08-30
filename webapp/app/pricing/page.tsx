import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "research415 pricing: a two-week trial for $299, fully refundable, with daily and weekly reports included. Weekly reports $249 a month. Daily lead briefs plus weekly reports $899 a month.",
};

const TRIAL_URL = "https://buy.stripe.com/aFa4gycd9asr8lI5bJaZi04";
const WEEKLY_URL = "https://buy.stripe.com/fZueVc6SP2ZZ9pMgUraZi05";
const DAILY_URL = "https://buy.stripe.com/4gM9ASdhdeIHcBYbA7aZi03";

export default function PricingPage() {
  return (
    <main>
      <section className="band">
        <div className="wrap">
          <div className="plans">
            <div className="plan">
              <div className="name">Two-week trial</div>
              <div className="price">
                $299 <small>once, fully refundable</small>
              </div>
              <ul>
                <li>Everything in Daily + weekly, for two weeks</li>
                <li>A lead brief every business day, plus the Monday report</li>
                <li>First report in 2 business days</li>
                <li>Ask for your money back any time in the two weeks</li>
              </ul>
              <a className="button" href={TRIAL_URL}>
                Start the trial
              </a>
            </div>
            <div className="plan">
              <div className="name">Weekly</div>
              <div className="price">
                $249 <small>/mo per brand tracked</small>
              </div>
              <ul>
                <li>One full report every Monday morning</li>
                <li>Their ads, pricing, search and hiring</li>
                <li>Ranked moves with closing windows</li>
                <li>Cancel anytime</li>
              </ul>
              <a className="button" href={WEEKLY_URL}>
                Get weekly reports
              </a>
            </div>
            <div className="plan featured">
              <div className="name">Daily + weekly</div>
              <div className="price">
                $899 <small>/mo per brand tracked</small>
              </div>
              <ul>
                <li>Everything in Weekly</li>
                <li>A lead brief every business day</li>
                <li>Named people to reply to, with the reply written</li>
                <li>People already paying your competitor</li>
                <li>Cancel anytime</li>
              </ul>
              <a className="button primary" href={DAILY_URL}>
                Get daily leads
              </a>
            </div>
          </div>
          <p className="muted" style={{ marginTop: "1.25rem" }}>
            Start with the trial. If the reports are not worth it, say so inside the two weeks and we refund the $299, no
            questions asked.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>What you get.</h2>
          <table className="sheet">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="n">Trial</th>
                <th className="n">Weekly</th>
                <th className="n">Daily + weekly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Social mentions on Reddit, X, LinkedIn, Hacker News and niche forums, read by hand</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Reviews on G2, Capterra, Trustpilot, Google and the app stores</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Sentiment split and what moved it</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Unanswered posts worth replying to, ranked by reach</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Their ads: every live creative and which ones they keep duplicating</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Search rankings, paid keywords and estimated ad spend</td>
                <td className="n">–</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Pricing, plan limits and comparison-page errors</td>
                <td className="n">–</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Hiring: open roles, salaries, long-unfilled seats</td>
                <td className="n">–</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Ranked moves with closing windows, every claim linked to its source</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Named people to reply to today, with what to say</td>
                <td className="n">✓</td>
                <td className="n">–</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>People already paying your competitor, and why we think so</td>
                <td className="n">–</td>
                <td className="n">–</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Cadence</td>
                <td className="n">Daily for 2 weeks</td>
                <td className="n">Weekly</td>
                <td className="n">Daily + weekly</td>
              </tr>
              <tr>
                <td>Money back if it is not worth it</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>What everything else costs.</h2>
          <p className="muted">
            Published rates and reported deal ranges, collected August 2026. Sources linked below.
          </p>
          <table className="sheet">
            <thead>
              <tr>
                <th>Approach</th>
                <th>Examples</th>
                <th className="n">Typical price</th>
                <th>What you still have to do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monitoring dashboards</td>
                <td>Brand24, Mention, Awario, YouScan</td>
                <td className="n">$49–$1,499/mo</td>
                <td>Read the feed, do the analysis yourself</td>
              </tr>
              <tr>
                <td>Enterprise listening</td>
                <td>Brandwatch, Meltwater</td>
                <td className="n">$800–$5,000/mo</td>
                <td>Staff an analyst, sign an annual contract</td>
              </tr>
              <tr>
                <td>Intelligence platforms</td>
                <td>Klue, Crayon, Contify</td>
                <td className="n">$16K–$40K+/yr</td>
                <td>Employ a competitive intelligence team</td>
              </tr>
              <tr>
                <td>Signal and intent tools</td>
                <td>Common Room, Clay</td>
                <td className="n">$500–$1,500/mo</td>
                <td>Wire it up, then read the firehose yourself</td>
              </tr>
              <tr>
                <td>An SDR doing the research</td>
                <td>One junior hire</td>
                <td className="n">$4,000–$6,000/mo</td>
                <td>Hire them, train them, manage them</td>
              </tr>
              <tr>
                <td>Research agencies</td>
                <td>Aqute, boutique retainers</td>
                <td className="n">$500–$3,000/mo</td>
                <td>Wait weeks, get pricing by phone</td>
              </tr>
              <tr className="us">
                <td>research415</td>
                <td>Reports and leads, delivered</td>
                <td className="n">$249–$899/mo</td>
                <td>Read it once, reply to three people</td>
              </tr>
            </tbody>
          </table>
          <p className="smallprint">
            Sources: <a href="https://checkthat.ai/brands/brand24/pricing">Brand24 pricing (CheckThat.ai)</a> ·{" "}
            <a href="https://octolens.com/blog/best-brand-monitoring-tools">brand monitoring tools (Octolens)</a> ·{" "}
            <a href="https://youscan.io/youscan-vs-brandwatch/">YouScan vs Brandwatch</a> ·{" "}
            <a href="https://parano.ai/blog/klue-vs-crayon">Klue vs Crayon (Parano.ai)</a> ·{" "}
            <a href="https://www.userintuition.ai/posts/competitive-intelligence-pricing/">
              CI pricing breakdown (UserIntuition)
            </a>{" "}
            · <a href="https://competely.ai/">Competely</a> ·{" "}
            <a href="https://benchspy.com/blog/white-label-competitor-analysis-report-agency-guide-2026">
              agency retainer rates (BenchSpy)
            </a>
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Common questions.</h2>
          <div className="cols two">
            <div>
              <h3>What is in a daily brief?</h3>
              <p className="muted">
                Named people who posted something in the last two days that makes them worth contacting, with their own
                words, a link to the post, and one line on what to reply. Plus the people we think already pay your
                competitor, and the evidence for why we think so.
              </p>
              <h3>How fast is the first report?</h3>
              <p className="muted">
                Two business days from signup for the trial. After that the weekly lands Monday morning and the daily
                lands every business day.
              </p>
              <h3>What counts as one brand?</h3>
              <p className="muted">
                One company, all its products and channels, whether it is yours or a competitor&apos;s. A parent company
                with distinct brands counts per brand.
              </p>
              <h3>Can you cover my niche?</h3>
              <p className="muted">
                If your brand or competitor gets talked about online, advertises, hires or ranks in search, yes. If they
                do none of those, there is nothing to read and we will say so before you pay.
              </p>
            </div>
            <div>
              <h3>Where does the data come from?</h3>
              <p className="muted">
                Public sources only: social platforms, review sites, ad transparency libraries, app stores, SEO
                databases, pricing pages and job boards. Nothing behind a login. Mentions are read by hand, not scored
                by a bot. Estimates are labeled as estimates.
              </p>
              <h3>Is this confidential?</h3>
              <p className="muted">
                We never disclose who our clients are or which competitors they watch, and we never sell the same watch
                to your competitor.
              </p>
              <h3>What is the refund policy?</h3>
              <p className="muted">
                Ask inside the two-week trial and we refund the $299 in full. On a monthly plan, if the first month is
                not worth it, say so and we refund it.
              </p>
              <h3>Do I have to start with the trial?</h3>
              <p className="muted">
                No. If you already know what you want, start on a monthly plan and cancel any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
