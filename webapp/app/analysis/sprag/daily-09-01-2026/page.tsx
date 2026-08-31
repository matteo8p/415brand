import type { Metadata } from "next";
import { deepgramDaily } from "../../../samples/briefs/deepgram-daily";
import { BriefArticle } from "../../../samples/ui";

export const metadata: Metadata = {
  title: "Deepgram daily brief for Sprag, September 1, 2026",
  description:
    "Five open source voice projects running Deepgram that Sprag can send a pull request to, five accounts that look like a competitor's customer, and the threads worth replying to today. Every claim sourced.",
};

export default function DeepgramDailyPage() {
  return <BriefArticle brief={deepgramDaily} />;
}
