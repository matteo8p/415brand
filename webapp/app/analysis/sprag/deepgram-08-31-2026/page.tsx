import type { Metadata } from "next";
import { deepgram } from "../../../samples/briefs/deepgram";
import { BriefArticle } from "../../../samples/ui";

export const metadata: Metadata = {
  title: "Deepgram weekly brief for Sprag, August 31, 2026",
  description:
    "Five named people at companies running Deepgram right now, what Deepgram shipped and priced this week, and the three moves Sprag should make. Every claim sourced.",
};

export default function DeepgramAnalysisPage() {
  return <BriefArticle brief={deepgram} />;
}
