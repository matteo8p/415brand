import Link from "next/link";
import { SAMPLE_MAILTO } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section className="band hero">
        <div className="wrap">
          <h1 className="display">We study your competitor and tell you how to beat them.</h1>
          <p className="lede">
            We dig through everything your competitor does in public: their ads, their prices, their job postings,
            their Google rankings, and what their customers say about them online. Then we send you a written
            report that makes sense of what we found and recommends your next moves.
          </p>
          <div className="cta-row">
            <a className="button primary" href={SAMPLE_MAILTO}>
              Get a sample report
            </a>
            <Link className="button" href="/report">
              See what's inside
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap stats">
          <div className="stat">
            <b>5</b>
            <span>areas covered per report: sentiment, ads, search, pricing, hiring</span>
          </div>
          <div className="stat">
            <b>400+</b>
            <span>competitor ads read and scored in a recent report</span>
          </div>
          <div className="stat">
            <b>100%</b>
            <span>of claims linked to a source you can check</span>
          </div>
          <div className="stat">
            <b>5 days</b>
            <span>from order to report in your inbox</span>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Other tools give you data. We give you answers.</h2>
          <div className="cols three">
            <div>
              <h3>Monitoring tools</h3>
              <p className="muted">
                Brand24, Awario and friends collect mentions into a dashboard for $49 to $1,499 a month. Then you
                read the feed, interpret it, and decide what to do. The analysis is your job.
              </p>
            </div>
            <div>
              <h3>Intelligence platforms</h3>
              <p className="muted">
                Klue and Crayon cost $16,000 to $40,000 a year and assume you employ someone to run them. The
                analysis is your analyst's job.
              </p>
            </div>
            <div>
              <h3>415brand</h3>
              <p className="muted">
                A finished document a smart colleague would write after a week inside your competitor's ad
                accounts, job board and support threads. The analysis is the product.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Name a competitor. Get a report in 5 days.</h2>
          <div className="cols three">
            <div>
              <span className="num">Step 1</span>
              <h3>Name a competitor</h3>
              <p className="muted">
                Email us a company name. That's the whole onboarding. No seats, no setup call, no dashboard login.
              </p>
            </div>
            <div>
              <span className="num">Step 2</span>
              <h3>We do the research</h3>
              <p className="muted">
                We pull their entire ad library, search rankings, app store presence, pricing pages, job board and
                a hand-read sample of what their customers say online.
              </p>
            </div>
            <div>
              <span className="num">Step 3</span>
              <h3>You get the report</h3>
              <p className="muted">
                A plain, sourced document with the findings up top and ranked moves below, each with the reason it
                works and the date its window closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Real findings from a real report.</h2>
          <p className="muted">
            Excerpts from a recent teardown of a voice software company. The whole report is on this site, free.
          </p>
          <div className="excerpt">
            <span className="tag">Finding · Search</span>
            <p className="claim">
              They mostly disappeared from free Google results this year, and now pay an estimated $446K a month to
              make up the difference.
            </p>
            <p className="detail">
              98% of their search visits are now paid. The searches that describe the product, like "best dictation
              app", are won by review roundups and small competitors, not by them.
            </p>
            <p className="move">→ Move: take the free search real estate they abandoned. Window: open now.</p>
          </div>
          <div className="excerpt">
            <span className="tag">Finding · Sentiment</span>
            <p className="claim">
              27% of recent posts about them are complaints or people asking for alternatives. Nobody from the
              company has replied to any of them.
            </p>
            <p className="detail">
              The report listed 18 live posts worth answering, ranked by reach, with the words to answer them.
            </p>
            <p className="move">→ Move: have a named person answer the queue. Window: posts go stale in days.</p>
          </div>
          <div className="excerpt">
            <span className="tag">Finding · Hiring</span>
            <p className="claim">
              Their job board shows zero customer care staff and an unfilled enterprise engineering lead with
              "unblock major Fortune 100 deals" in the description.
            </p>
            <p className="detail">
              Companies don't write that unless deals are actually blocked. Their enterprise motion is stuck until
              that seat fills.
            </p>
            <p className="move">→ Move: sell enterprise readiness now. Window: closes when they hire.</p>
          </div>
          <div className="cta-row">
            <Link className="button" href="/sample">
              Read the full sample report
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>$495 per report. Money back if it isn't worth it.</h2>
          <p className="muted">
            A one-time Teardown is $495. The weekly Competitor Watch is $295 a month. If the first report isn't
            obviously worth more than you paid, we refund it.
          </p>
          <div className="cta-row">
            <Link className="button primary" href="/pricing">
              See pricing
            </Link>
            <Link className="button" href="/about">
              How we work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
