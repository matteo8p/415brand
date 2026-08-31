import type { Metadata } from "next";
import { deepgram } from "../../../samples/briefs/deepgram";
import { BriefArticle } from "../../../samples/ui";

export const metadata: Metadata = {
  title: "Deepgram weekly brief for Sprag, August 31, 2026",
  description:
    "Five named people who wrote Deepgram provider-switching code this week, what Deepgram shipped and what its real price is, and the four moves Sprag should make. Every claim sourced.",
};

export default function DeepgramAnalysisPage() {
  return <BriefArticle brief={deepgram} />;
}
