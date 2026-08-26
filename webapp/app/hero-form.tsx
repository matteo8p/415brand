"use client";

import { useMutation } from "convex/react";
import { type FormEvent, useState } from "react";
import { api } from "@/convex/_generated/api";
import { CONTACT } from "@/lib/site";
import { CONVEX_URL } from "./providers";

function ConvexHeroForm() {
  const addEmailSignup = useMutation(api.leads.addEmailSignup);
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    setStatus("saving");
    try {
      await addEmailSignup({ email, source: "hero" });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p>Thanks. We'll be in touch within a day.</p>;
  }

  return (
    <form className="hero-form" onSubmit={onSubmit}>
      <input name="email" type="email" placeholder="you@company.com" aria-label="Your work email" required />
      <button className="button primary" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Sending..." : "Request a report"}
      </button>
      {status === "error" && (
        <p className="muted hero-form-note">Something went wrong. Email us at {CONTACT} instead.</p>
      )}
    </form>
  );
}

function MailtoHeroForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    const subject = "Report request";
    const body = `I'd like a competitor report.\n\nMy email: ${email}\nCompetitor to research: `;
    window.location.href = `mailto:${CONTACT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form className="hero-form" onSubmit={onSubmit}>
      <input name="email" type="email" placeholder="you@company.com" aria-label="Your work email" required />
      <button className="button primary" type="submit">
        Request a report
      </button>
      {opened && (
        <p className="muted hero-form-note">
          This opened a draft in your email app. If nothing happened, write to {CONTACT}.
        </p>
      )}
    </form>
  );
}

export function HeroForm() {
  return CONVEX_URL ? <ConvexHeroForm /> : <MailtoHeroForm />;
}
