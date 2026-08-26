import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us which brands you want tracked, yours or a competitor's, and we'll reply with a quote the same day.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="band">
        <div className="wrap">
          <ContactForm />
          <p className="muted" style={{ marginTop: "1.5rem" }}>
            Prefer plain email? Write to <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
