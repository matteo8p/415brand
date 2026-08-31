import type { Metadata } from "next";
import { aquaDaily } from "../../../samples/briefs/aqua-daily";
import { BriefArticle } from "../../../samples/ui";

export const metadata: Metadata = {
  title: "Wispr Flow daily brief for the Aqua Voice team, September 1, 2026",
  description:
    "Japan is most of Aqua's users and Wispr spends nothing there, while superwhisper started buying Japanese traffic on Aug 30. Plus a swipe file of the Wispr ads and creators that actually work, and why small creators beat big ones. Every claim sourced.",
};

export default function AquaDailyPage() {
  return <BriefArticle brief={aquaDaily} />;
}
