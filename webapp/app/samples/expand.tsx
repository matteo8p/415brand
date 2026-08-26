"use client";

import { useEffect } from "react";

// ?expand=1 opens every collapsible on load — handy for printing and for
// linking someone straight to the full evidence.
export function ExpandOnQuery() {
  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("expand")) return;
    for (const d of document.querySelectorAll<HTMLDetailsElement>(".analysis details")) {
      d.open = true;
    }
  }, []);
  return null;
}
