import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BriefArticle } from "@/app/samples/ui";
import { getReport, listReports } from "@/lib/reports";

// Every client report renders here from webapp/reports/<client>/<slug>.json.
// The list of pages is fixed at build time, so a new report needs a rebuild.
export const dynamicParams = false;

type Params = { client: string; slug: string };

export function generateStaticParams(): Params[] {
  return listReports();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { client, slug } = await params;
  const brief = getReport(client, slug);
  if (!brief) return {};
  // "Claude Tag daily brief" + "For the OpenTag founders, September 1, 2026"
  const who = brief.sub.replace(/^For\s+/, "for ");
  return {
    title: `${brief.title} ${who}`,
    description: brief.description,
  };
}

export default async function ReportPage({ params }: { params: Promise<Params> }) {
  const { client, slug } = await params;
  const brief = getReport(client, slug);
  if (!brief) notFound();
  return <BriefArticle brief={brief} />;
}
