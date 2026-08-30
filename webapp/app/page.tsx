import Image from "next/image";
import Link from "next/link";
import { HeroForm } from "./hero-form";

export default function Home() {
  return (
    <main className="landing">
      <section className="hero">
        <h1>Know what people are saying about your brand and your competitors.</h1>
        <p className="hero-lede">
          Brand and competitor research for early-stage startups. We read every public mention of your brand and
          theirs. Reddit threads, X and LinkedIn posts, G2, Trustpilot and the app stores, the search terms they rank
          for, the ads they&apos;re running, and the roles they&apos;re hiring. You get a written report on what we
          found and exactly what to do about it.
        </p>
        <div className="hero-cta">
          <HeroForm />
          <p className="sample-link">
            <Link href="/samples/wispr">Read a sample report →</Link>
          </p>
        </div>
      </section>

      <section>
        <Image className="portrait" src="/me.jpg" alt="Matt" width={96} height={96} priority />
        <p>Hi, I&apos;m Matt,</p>
        <p>
          research415 is me. Every morning I read every thread, review and post about you and your competitors, then
          send you one written report by email or into your Slack.
        </p>
        <p>
          I run AI agents that help me do deep research. But I still put together the report and offer my human
          opinions on what to do about it. No AI slop is ever delivered to you. That&apos;s why the findings are things
          a keyword alert app can&apos;t find, and why I can personally discuss anything in my report with you.
        </p>
        <p>
          I started doing this because this was the exact strategy I ran to grow my startup at the early stage to find
          customers in my ICP.
        </p>
      </section>

      <section>
        <p className="lead-in">Every morning I deliver a report with:</p>

        <p className="group-label">Leads you should contact</p>
        <p>
          <b>Your competitors&apos; unhappy customers.</b> Customers unhappy with your competitors are looking for an
          alternative. Reaching out to them typically has a high conversion.
        </p>
        <p>
          <b>People describing your product without knowing it exists.</b> Every week somebody posts a description of
          exactly what you offer and asks whether anything like it is out there. They are already sold, you just gotta
          reach out.
        </p>

        <p className="group-label">Your brand</p>
        <p>
          <b>Everything said about your brand.</b> Sometimes people misrepresent you online: wrong price, a feature you
          do have, a bug you fixed months ago. Catch it early and correct it before it blows out of proportion.
        </p>
        <p>
          <b>What&apos;s wrong on your own side.</b> Out-of-date comparison pages, numbers that no longer match, claims
          your customers are making that aren&apos;t true. These are reputation killers.
        </p>

        <p className="group-label">Your competitor</p>
        <p>
          <b>Price changes and what they shipped.</b> Competitors change prices quietly and rarely announce it. You
          find out the morning it happens instead of hearing it from a prospect in a sales call.
        </p>
        <p>
          <b>Unannounced edits to their own docs.</b> The most valuable things a competitor publishes are the ones
          they hope nobody reads, like data policies, plan limits and security pages. A quiet edit is a decision they
          have already made, so you see where they are heading weeks before they announce it.
        </p>
        <p>
          <b>Their SEO keywords and ads.</b> What SEO keywords they rank for and pay for, so you can strategize what
          you bid on. We also show you their ad campaigns so you can replicate what works and avoid what doesn&apos;t.
        </p>
      </section>

      <section>
        <p className="lead-in">I typically work with early-stage startups in two buckets:</p>
        <p>
          <b>Consumer startups that grow through other people.</b> Distribution runs through creatives, ads, SEO, and
          brand identity is critical.
        </p>
        <p>
          <b>SaaS going up against an established incumbent.</b> Their unhappy customers say so in public, and the
          people shopping for an alternative are searching in the open.
        </p>
      </section>

      <section>
        <p className="lead-in">How we&apos;ll work:</p>
        <p>1. Just send me your company, I&apos;ll do the research. Optionally hop on a call so we get to know each other.</p>
        <p className="step">2. We&apos;ll do a $300 2-week trial. Fully refundable if you don&apos;t want to go through.</p>
        <p className="step">
          3. If you like the reports and want to go through, we have two options: daily reports and weekly deep
          reports. You choose which one suits you best.
        </p>
        <Link className="cta-button" href="/contact">
          Contact
        </Link>
      </section>
    </main>
  );
}
