import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "415brand pricing: $295 a month per brand tracked, your own or a competitor's, one report a month. Money back on the first month if you don't like the report.",
};

export default function PricingPage() {
  return (
    <main>
      <section className="band">
        <div className="wrap">
          <div className="plans">
            <div className="plan featured">
              <div className="name">Monthly</div>
              <div className="price">
                $295 <small>/mo per brand tracked</small>
              </div>
              <ul>
                <li>Your brand or a competitor</li>
                <li>One full report every month</li>
                <li>First report in 5 business days</li>
                <li>Cancel anytime</li>
              </ul>
              <a className="button primary" href="/contact">
                Get started
              </a>
            </div>
            <div className="plan">
              <div className="name">Custom</div>
              <div className="price">
                Quote <small>by email</small>
              </div>
              <ul>
                <li>Your brand plus several competitors</li>
                <li>Weekly, quarterly or one-off</li>
                <li>White-label for agencies and investors</li>
              </ul>
              <a className="button" href="/contact">
                Tell us what you need
              </a>
            </div>
          </div>
          <p className="muted" style={{ marginTop: "1.25rem" }}>
            Don't like the first report? Your first month is refunded, no questions asked.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>What's in a report.</h2>
          <table className="sheet">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="n">Your brand</th>
                <th className="n">A competitor</th>
                <th className="n">Custom</th>
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
                <td>Sentiment split each month and what moved it</td>
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
                <td>Top accounts and communities talking about the brand</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Their ads: every live creative and which ones they keep duplicating</td>
                <td className="n">–</td>
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
                <td>Several brands in one digest</td>
                <td className="n">–</td>
                <td className="n">–</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>Cadence</td>
                <td className="n">Monthly</td>
                <td className="n">Monthly</td>
                <td className="n">Weekly to quarterly</td>
              </tr>
              <tr>
                <td>White-label reports</td>
                <td className="n">–</td>
                <td className="n">–</td>
                <td className="n">✓</td>
              </tr>
              <tr>
                <td>First-month refund if you don't like the report</td>
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
                <td>AI auto-analysis</td>
                <td>Competely</td>
                <td className="n">$0–$99/mo</td>
                <td>Verify it, then deepen it</td>
              </tr>
              <tr>
                <td>Research agencies</td>
                <td>Aqute, boutique retainers</td>
                <td className="n">$500–$3,000/mo</td>
                <td>Wait weeks, get pricing by phone</td>
              </tr>
              <tr className="us">
                <td>415brand</td>
                <td>Reports, delivered</td>
                <td className="n">$295/mo</td>
                <td>Read it once, act on it</td>
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
              <h3>How fast is the first report?</h3>
              <p className="muted">
                Five business days from signup. After that, one report a month, same time each month.
              </p>
              <h3>What counts as one brand?</h3>
              <p className="muted">
                One company, all its products and channels, whether it is yours or a competitor's. A parent company with distinct brands counts per brand.
              </p>
              <h3>Which sites do you watch?</h3>
              <p className="muted">
                Reddit, X, LinkedIn, Hacker News, YouTube, niche forums and Discords your buyers use, and the review
                sites that matter for your category: G2, Capterra, Trustpilot, Google, the App Store and Google
                Play. If your customers talk somewhere else, tell us and we add it.
              </p>
              <h3>Can you cover my niche?</h3>
              <p className="muted">
                If your brand or competitor gets talked about online, advertises, hires or ranks in search, yes. If they do
                none of those, there is nothing to read and we'll say so before you pay.
              </p>
            </div>
            <div>
              <h3>Where does the data come from?</h3>
              <p className="muted">
                Public sources only: social platforms, review sites, ad transparency libraries, app stores, SEO
                databases, pricing pages and job boards. Mentions are read by hand, not scored by a bot. Estimates are labeled as estimates.
              </p>
              <h3>Is this confidential?</h3>
              <p className="muted">
                We never disclose who our clients are or which competitors they watch, and we never sell the same
                watch to your competitor.
              </p>
              <h3>What's the refund policy?</h3>
              <p className="muted">
                If you don't like your first report, say so and we refund your first month, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
