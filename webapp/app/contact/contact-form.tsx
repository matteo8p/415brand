"use client";

import { useMutation } from "convex/react";
import { type FormEvent, useState } from "react";
import { api } from "@/convex/_generated/api";
import { CONTACT } from "@/lib/site";
import { CONVEX_URL } from "../providers";

function Fields() {
  return (
    <>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="company">Company (optional)</label>
        <input id="company" name="company" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="message">What do you need?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Example: Track our brand and [competitor]. We're a 10-person SaaS in the scheduling space."
          required
        />
      </div>
    </>
  );
}

function ConvexContactForm() {
  const addContactSubmission = useMutation(api.leads.addContactSubmission);
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const company = String(data.get("company") ?? "");
    setStatus("saving");
    try {
      await addContactSubmission({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        company: company || undefined,
        message: String(data.get("message") ?? ""),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p>Thanks. We read every message and reply within a day.</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Fields />
      <button className="button primary" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Sending..." : "Send"}
      </button>
      {status === "error" && <p className="muted">Something went wrong. Email us at {CONTACT} instead.</p>}
    </form>
  );
}

function MailtoContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `415brand inquiry${name ? ` from ${name}` : ""}`;
    const header = [name && `Name: ${name}`, email && `Email: ${email}`, company && `Company: ${company}`]
      .filter(Boolean)
      .join("\n");
    const body = `${header}\n\n${message}`;
    window.location.href = `mailto:${CONTACT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <Fields />
      <button className="button primary" type="submit">
        Send
      </button>
      {opened && (
        <p className="muted" style={{ marginTop: "0.5rem" }}>
          This opened a draft in your email app. If nothing happened, write to us directly at {CONTACT}.
        </p>
      )}
    </form>
  );
}

export function ContactForm() {
  return CONVEX_URL ? <ConvexContactForm /> : <MailtoContactForm />;
}
