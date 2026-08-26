"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { type ReactNode, useState } from "react";

// Inlined at build time. When unset, the site runs without Convex and the
// forms fall back to composing an email instead of saving to the database.
export const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL;

export function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(() => (CONVEX_URL ? new ConvexReactClient(CONVEX_URL) : null));
  if (!client) return <>{children}</>;
  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}
