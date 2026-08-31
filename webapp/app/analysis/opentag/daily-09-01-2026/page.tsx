import type { Metadata } from "next";
import { opentagDaily } from "../../../samples/briefs/opentag-daily";
import { BriefArticle } from "../../../samples/ui";

export const metadata: Metadata = {
  title: "Claude Tag daily brief for OpenTag, September 1, 2026",
  description:
    "One buyer posted three unanswered Claude Tag bills, including $1,700 for a single task, and Anthropic's free credits look like they moved to Oct 1. Nine posts to reply to and five ads to copy.",
};

export default function OpenTagDailyPage() {
  return <BriefArticle brief={opentagDaily} />;
}
