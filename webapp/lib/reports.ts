import fs from "node:fs";
import path from "node:path";
import type { Brief } from "@/app/samples/briefs/types";

// Client reports are plain JSON files at webapp/reports/<client>/<slug>.json,
// one per report, in the Brief shape from app/samples/briefs/types.ts. They are
// rendered at /analysis/<client>/<slug>. Add a report by adding a file; nothing
// else in the app has to change. tools/report.py scaffolds, checks and builds them.

const ROOT = path.join(process.cwd(), "reports");
const SAFE = /^[a-z0-9-]+$/;

export type ReportRef = { client: string; slug: string };

export function listReports(): ReportRef[] {
  if (!fs.existsSync(ROOT)) return [];
  const out: ReportRef[] = [];
  for (const client of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!client.isDirectory() || !SAFE.test(client.name)) continue;
    for (const file of fs.readdirSync(path.join(ROOT, client.name))) {
      if (file.endsWith(".json")) out.push({ client: client.name, slug: file.slice(0, -5) });
    }
  }
  return out;
}

export function getReport(client: string, slug: string): Brief | null {
  if (!SAFE.test(client) || !SAFE.test(slug)) return null;
  const file = path.join(ROOT, client, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as Brief;
}
