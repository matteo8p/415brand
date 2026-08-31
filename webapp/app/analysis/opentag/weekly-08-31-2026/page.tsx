import type { Metadata } from "next";
import { opentagWeekly } from "../../../samples/briefs/opentag-weekly";
import { BriefArticle } from "../../../samples/ui";

export const metadata: Metadata = {
  title: "Claude Tag weekly brief for OpenTag, August 31, 2026",
  description:
    "Anthropic added spending caps and cancelled the Sept 1 price rise, two free rivals launched into the same slot, and OpenTag's own pages give three different savings numbers. Four moves, every claim sourced.",
};

export default function OpenTagWeeklyPage() {
  return <BriefArticle brief={opentagWeekly} />;
}
