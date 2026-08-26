"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "main open" : "main"}>
        <details className="drop">
          <summary className="drop-label">Sample reports ▾</summary>
          <div className="drop-menu">
            <Link href="/samples/wispr" onClick={close}>
              Wispr Flow (weekly report)
            </Link>
            <Link href="/samples/wispr-daily" onClick={close}>
              Wispr Flow (daily report)
            </Link>
          </div>
        </details>
        <Link href="/pricing" onClick={close}>
          Pricing
        </Link>
        <Link className="cta" href="/contact" onClick={close}>
          Contact
        </Link>
      </nav>
    </>
  );
}
