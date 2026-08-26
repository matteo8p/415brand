import type { Metadata } from "next";
import { CONTACT, SAMPLE_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "415brand is a competitive analysis service. We believe the analysis, not the data, is the product. How we work, what we read, and what we refuse to do.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="band hero">
        <div className="wrap">
          <h1 className="display">We do the research. You get the answers.</h1>
          <p className="lede">
            The competitive intelligence industry mostly sells access to data and leaves the thinking to you.
            415brand exists because the thinking is the hard part.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="cols three">
            <div>
              <span className="num">I</span>
              <h3>Dashboards are homework</h3>
              <p className="muted">
                A feed of mentions is not intelligence. Someone still has to read it, weigh it, and turn it into a
                decision. Most subscriptions to monitoring tools quietly become a tab nobody opens.
              </p>
            </div>
            <div>
              <span className="num">II</span>
              <h3>Claims need sources</h3>
              <p className="muted">
                Every number in a 415brand report links to where it came from, and estimates are labeled as
                estimates. If we can't source a claim, it doesn't ship. You should be able to check our work.
              </p>
            </div>
            <div>
              <span className="num">III</span>
              <h3>Findings need deadlines</h3>
              <p className="muted">
                "Your competitor is weak at X" is trivia. "Their enterprise team doesn't exist yet, and this
                advantage ends when the open role fills" is a decision with a date on it. Our moves come with
                windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="cols two">
            <div>
              <h2>Where the information comes from.</h2>
              <ul className="plain">
                <li>Meta and Google ad transparency libraries, TikTok</li>
                <li>App store rankings, reviews and metadata</li>
                <li>SEO and traffic databases: Semrush, SpyFu, Ahrefs, Similarweb</li>
                <li>The competitor's own pricing pages, changelogs and comparison pages, captured and dated</li>
                <li>Their public job board: open roles, salary ranges, refresh dates, closed postings</li>
                <li>Hand-read samples of X, Reddit and review sites, tallied by a person</li>
              </ul>
            </div>
            <div>
              <h2>What we won't do.</h2>
              <ul className="plain">
                <li>No private data, no scraped accounts, no pretexting, nothing a competitor could sue you over</li>
                <li>No selling the same watch to both sides of a rivalry</li>
                <li>No disclosing who our clients are or who they watch</li>
                <li>No unlabeled AI output: models help us collect, a person decides what's true and what matters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Who this is for.</h2>
          <p className="muted">
            Founders deciding where to attack. Marketers who want the angle their rival left unclaimed. Product
            teams sizing up a roadmap against a funded competitor. Agencies and investors who need the teardown
            without staffing it. If you have one competitor who keeps you up at night, that's the job we're built
            for.
          </p>
          <div className="cta-row">
            <a className="button primary" href={SAMPLE_MAILTO}>
              Get the sample report
            </a>
            <a className="button" href={`mailto:${CONTACT}`}>
              {CONTACT}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
