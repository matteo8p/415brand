import Link from "next/link";
import { HeroForm } from "./hero-form";
import { BriefChart } from "./samples/charts";

export default function Home() {
  return (
    <main>
      <section className="band hero">
        <div className="wrap">
          <h1 className="display">Track what people are saying about your brand and your competitors.</h1>
          <p className="lede">
            We read every public mention of your brand and theirs: Reddit threads, X and LinkedIn posts, reviews on
            G2, the app stores and Trustpilot, plus their ads, prices, job postings and Google rankings. Every
            month, you get a written report on what we found and exactly what to do about it.
          </p>
          <div className="cta-row">
            <HeroForm />
          </div>
          <p className="hero-sub">
            <Link href="/samples/wispr">Read the full sample report →</Link>
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Brand tracking: what we find about you.</h2>
          <table className="sheet">
            <thead>
              <tr>
                <th className="n">#</th>
                <th>The finding</th>
                <th>What you learn</th>
                <th>Your move</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="n">1</td>
                <td>
                  <b>Social mentions</b>
                </td>
                <td>
                  Every post that names you on Reddit, X, LinkedIn and the forums your buyers use, ranked by reach,
                  with the ones nobody from your team has replied to.
                </td>
                <td>
                  Answer the unanswered ones. A public reply from the company turns a complaint into a
                  recommendation, and a question into a trial.
                </td>
              </tr>
              <tr>
                <td className="n">2</td>
                <td>
                  <b>Reviews</b>
                </td>
                <td>
                  New reviews on G2, Capterra, Trustpilot, Google and the app stores, with the recurring complaints
                  and the words happy customers use to describe you.
                </td>
                <td>
                  Fix the top complaint, then put the happy customers' own words on your landing page. They convert
                  better than anything you would write.
                </td>
              </tr>
              <tr>
                <td className="n">3</td>
                <td>
                  <b>Sentiment over time</b>
                </td>
                <td>
                  The split of positive, neutral and negative mentions each month, and what changed it: a launch, a
                  price change, an outage, a viral post.
                </td>
                <td>
                  Know before your numbers do. Sentiment moves weeks ahead of churn and ratings, so you get to
                  respond while it is still cheap.
                </td>
              </tr>
              <tr>
                <td className="n">4</td>
                <td>
                  <b>Who is talking</b>
                </td>
                <td>
                  The accounts, creators and communities that mention you most, and which ones are also
                  recommending a competitor.
                </td>
                <td>
                  Thank your advocates and recruit them. A handful of people drive most of the word of mouth in any
                  niche.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Competitor tracking: what we find about them.</h2>
          <table className="sheet">
            <thead>
              <tr>
                <th className="n">#</th>
                <th>The finding</th>
                <th>What you learn</th>
                <th>Your move</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="n">1</td>
                <td>
                  <b>Their mentions and reviews</b>
                </td>
                <td>
                  What their users are unhappy about on social media and review sites, and every public "what
                  should I switch to?" post nobody has answered, ranked by reach.
                </td>
                <td>
                  Reply to the list. People asking for an alternative in public are the easiest customers you will
                  ever win, often with a single helpful comment.
                </td>
              </tr>
              <tr>
                <td className="n">2</td>
                <td>
                  <b>Their ads</b>
                </td>
                <td>Every ad they are paying to run, what it says, and which ones they keep making copies of.</td>
                <td>
                  Copy what works, claim what they dropped. Companies only duplicate ads that make money, so their
                  library shows what converts before you spend a dollar.
                </td>
              </tr>
              <tr>
                <td className="n">3</td>
                <td>
                  <b>Search rankings</b>
                </td>
                <td>
                  Which Google searches send them customers, which they pay for, and which they ignore, with
                  monthly volumes and click costs.
                </td>
                <td>
                  Take the searches they ignore. Phrases like "[competitor] alternative" are typed by people ready
                  to buy, and they are cheap to win.
                </td>
              </tr>
              <tr>
                <td className="n">4</td>
                <td>
                  <b>Pricing and plans</b>
                </td>
                <td>
                  What they charge, the limits hidden in their plans, and factual mistakes on their comparison
                  pages.
                </td>
                <td>
                  Sell against their hidden caps and "contact sales" walls, and publicly correct what they get
                  wrong about you.
                </td>
              </tr>
              <tr>
                <td className="n">5</td>
                <td>
                  <b>Hiring</b>
                </td>
                <td>
                  Every open job, what it pays, what has sat unfilled for months, and what they stopped staffing.
                </td>
                <td>
                  Attack where they can't respond. An unfilled role is something they can't do yet, and your window
                  until the seat fills.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>How it works.</h2>
          <div className="cols three">
            <div>
              <span className="num">Step 1</span>
              <h3>Tell us which brands to track</h3>
              <p className="muted">
                Your own, a competitor, or both. We'll hop on an optional call to walk through your business and
                which competitor matters most. Prefer to skip the call? Just send us the company names.
              </p>
            </div>
            <div>
              <span className="num">Step 2</span>
              <h3>Get your first report</h3>
              <p className="muted">
                Within 5 business days you get the full report: every mention and review, everything they do in
                public, what it means, and your recommended moves in order.
              </p>
            </div>
            <div>
              <span className="num">Step 3</span>
              <h3>Keep it, or get your money back</h3>
              <p className="muted">
                Don't like the first report? Your first month is fully refunded, no questions asked. Otherwise a
                fresh report lands every month with what changed. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Examples from real reports.</h2>
          <div className="excerpt">
            <p className="claim">
              They mostly disappeared from free Google results this year, and now pay an estimated $446K a month to
              make up the difference.
            </p>
            <p className="detail">
              98% of their search visits are now paid. The searches that describe the product, like "best dictation
              app", are won by review roundups and small competitors, not by them.
            </p>
            <div className="mini-fig">
              <div className="cap">Google searches they show up in for free, 2026</div>
              <BriefChart
                spec={{
                  kind: "columns",
                  rows: [
                    ["Feb", 35961],
                    ["May", 19382],
                    ["Jun", 5248],
                    ["Aug", 3542],
                  ],
                  fmt: "num",
                  label: [0, 3],
                  aria: "Free Google search visibility collapsing from 35,961 phrases in February to 3,542 in August",
                }}
              />
            </div>
            <p className="move">
              Recommended move: build pages and buy ads for the searches they abandoned, starting with the phrases
              people type when they're ready to buy, like "best dictation app" and "[their name] alternative".
              Their ad budget isn't defending those searches, so they're cheap to take right now.
            </p>
          </div>
          <div className="excerpt">
            <p className="claim">
              27% of recent posts about them are complaints or people asking for alternatives. Nobody from the
              company has replied to any of them.
            </p>
            <p className="detail">
              The report listed 18 live posts worth answering, ranked by reach, with the words to answer them.
            </p>
            <div className="mini-fig">
              <div className="cap">120 recent posts about them, read and tallied by hand</div>
              <BriefChart
                spec={{
                  kind: "rows",
                  rows: [
                    ["News, neutral", 43, "neu"],
                    ["Positive", 30, "pos"],
                    ["Complaints, switching", 27, "neg"],
                  ],
                  fmt: "pct",
                  labelAll: true,
                  aria: "Sentiment split: 43% neutral, 30% positive, 27% complaints or switching",
                }}
              />
            </div>
            <p className="move">
              Recommended move: give one person on your team the list and have them answer every post with a
              helpful reply and a trial link. A rival was already replying to these threads, and the posts go stale
              within days, so speed matters more than polish.
            </p>
          </div>
          <div className="excerpt">
            <p className="claim">
              Their job board shows zero customer care staff and an unfilled enterprise engineering lead with
              "unblock major Fortune 100 deals" in the description.
            </p>
            <p className="detail">
              Companies don't write that unless deals are actually blocked. Their enterprise motion is stuck until
              that seat fills.
            </p>
            <table className="sheet">
              <thead>
                <tr>
                  <th>What their job board says</th>
                  <th className="n">Salary</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enterprise engineering lead, "unblock major Fortune 100 deals"</td>
                  <td className="n">$320K–400K</td>
                  <td>Open, relisted at a higher level</td>
                </tr>
                <tr>
                  <td>AI researchers (the people who'd fix accuracy)</td>
                  <td className="n">$250K–400K</td>
                  <td>Open for over a year</td>
                </tr>
                <tr>
                  <td>Customer care, account managers</td>
                  <td className="n">n/a</td>
                  <td>All closed, none filled</td>
                </tr>
              </tbody>
            </table>
            <p className="move">
              Recommended move: go after the big-company buyers they can't serve yet. Publish your security
              certifications and pricing while theirs sit behind "contact sales", and move now, because this window
              closes the day that hire starts.
            </p>
          </div>
          <div className="cta-row">
            <Link className="button" href="/samples/wispr">
              Read the full sample report
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>$295 a month per brand. One report a month.</h2>
          <p className="muted">
            Track your own brand, a competitor, or both. Each brand gets a full report every month. If you don't
            like your first report, your first month is refunded, no questions asked.
          </p>
          <div className="cta-row">
            <Link className="button primary" href="/pricing">
              See pricing
            </Link>
            <Link className="button" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
