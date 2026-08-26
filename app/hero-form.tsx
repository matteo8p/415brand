"use client";

import { type FormEvent, useState } from "react";
import { CONTACT } from "@/lib/site";

export function HeroForm() {
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
