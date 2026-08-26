import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The report",
  description:
    "What a 415brand report contains: sentiment and the reply queue, advertising, search and app stores, pricing and product, hiring. Every claim sourced, every move with a deadline.",
};

const AREAS = [
  {
    num: "01",
    name: "What their customers complain about",
    what: "We read what your competitor's customers say on X, Reddit and review sites, and tally the sentiment by hand rather than trusting keyword matching.",
    get: "A sentiment split, the complaint themes, and a table of every live complaint and \"looking for an alternative\" post nobody has answered, ranked by reach. It is a work queue: each row is a customer you could win this week.",
    excerpt: {
      tag: "Excerpt · Sentiment",
      claim: "Paying users are saying the product is getting worse, and nobody from the company is responding.",
      detail:
        "A thread in their own subreddit is still growing, commenters name the tools they switched to, and a rival's account is already replying to the alternative requests.",
    },
  },
  {
    num: "02",
    name: "What ads they run, and which ones work",
    what: "We pull their entire active ad library on Meta and TikTok: every ad, its launch date, its landing page, and how many copies of it exist.",
    get: "Which messages they are scaling (companies duplicate the ads that make money), which influencers they pay, what they conspicuously don't advertise, and which of their angles you can take.",
    excerpt: {
      tag: "Excerpt · Advertising",
      claim: "Of their 400 active ads, exactly 4 mention accuracy, the number one thing their users complain about.",
      detail: "The accuracy message was free to take, and the report said exactly how to take it.",
    },
  },
  {
    num: "03",
    name: "Which Google searches they win, and which you can take",
    what: "Which Google searches they win for free, which they buy, and which they ignore. Where they rank in the app stores and why.",
    get: "A list of specific search terms you can take, each with monthly volume, cost per click and who ranks today. Plus the cheapest app store ranking moves available to you.",
    excerpt: {
      tag: "Excerpt · Search",
      claim: "Roughly 700 people a month Google their name plus the word alternative. Every one of them has already decided to leave.",
      detail: "The pages ranking for those searches belonged to small competitors. The only question is whose page they land on.",
    },
  },
  {
    num: "04",
    name: "What they charge, and where their plans are weak",
    what: "Their plans, limits and hidden caps, captured and dated, plus what shipped recently and what it says about their direction.",
    get: "A feature-by-feature comparison, the gaps in their tiers you can sell against, and any factual errors on their own comparison pages that you can publicly correct.",
    excerpt: {
      tag: "Excerpt · Pricing",
      claim: "Their comparison page about a rival got the rival's free plan wrong and contradicted itself on language support.",
      detail: "A dated correction page is fair game, and answer engines quote that kind of page.",
    },
  },
  {
    num: "05",
    name: "Who they are hiring, and what it gives away",
    what: "A company's job board is its strategy, published. We read every open role, salary range, refresh date and closed posting.",
    get: "Which teams they are building, which they have chosen not to staff, and which of their gaps are windows for you, with a note on what closes each window.",
    excerpt: {
      tag: "Excerpt · Hiring",
      claim: "Their two highest-paid research roles have been unfilled for a year. The accuracy problems won't get fixed until those seats fill.",
      detail: "A year of trying suggests candidates aren't biting, which also makes them recruitable by you.",
    },
  },
];

export default function ReportPage() {
  return (
    <main>
      <section className="band hero">
        <div className="wrap">
          <h1 className="display">One report that answers five questions about your competitor.</h1>
          <p className="lede">
            A 415brand report opens with a scorecard of you versus them, then the moves we recommend in order, each
            with its evidence and its closing window. Everything below that is the proof, organized so you can stop
            reading whenever you're convinced.
          </p>
        </div>
      </section>

      {AREAS.map((area) => (
        <section className="band" key={area.num}>
          <div className="wrap">
            <div className="cols two">
              <div>
                <span className="num">{area.num}</span>
                <h2>{area.name}</h2>
                <p className="muted">{area.what}</p>
                <h3>What you get</h3>
                <p className="muted">{area.get}</p>
              </div>
              <div>
                <div className="excerpt">
                  <span className="tag">{area.excerpt.tag}</span>
                  <p className="claim">{area.excerpt.claim}</p>
                  <p className="detail">{area.excerpt.detail}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="band">
        <div className="wrap">
          <h2>Get it once, or get an update every week.</h2>
          <p className="muted">
            The one-time Teardown covers all five areas for one competitor. The Competitor Watch re-runs it weekly
            and reports only what changed: which ads survived (those are the ones working), new complaints worth
            answering, pricing and hiring changes, and which windows are closing. Change is the signal a one-off
            snapshot can't give you.
          </p>
          <div className="cta-row">
            <Link className="button primary" href="/sample">
              Read the full sample report
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
