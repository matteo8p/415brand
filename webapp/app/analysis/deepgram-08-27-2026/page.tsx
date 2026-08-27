import type { Metadata } from "next";
import { deepgram } from "../../samples/briefs/deepgram";
import { BriefArticle } from "../../samples/ui";

export const metadata: Metadata = {
  title: "Deepgram weekly brief for Sprag, August 27, 2026",
  description:
    "Who is building on Deepgram right now, what Deepgram shipped and priced this week, and the four moves Sprag should make. Every claim sourced.",
};

export default function DeepgramAnalysisPage() {
  return <BriefArticle brief={deepgram} />;
}
