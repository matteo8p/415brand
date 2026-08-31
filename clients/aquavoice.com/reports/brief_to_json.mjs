// Converts the rendered brief (webapp/app/samples/briefs/aqua-daily.ts) to JSON so the
// email builder reads the exact same prose the web report does. Run: node brief_to_json.mjs
import fs from "node:fs";
import path from "node:path";

const SRC = path.resolve("../../../webapp/app/samples/briefs/aqua-daily.ts");
let src = fs.readFileSync(SRC, "utf8");
src = src.replace(/^import[^\n]*\n/gm, "").replace(/export const \w+\s*:\s*Brief\s*=/, "return");
const brief = new Function(src.trim().replace(/;\s*$/, ""))();
fs.writeFileSync("brief.json", JSON.stringify(brief, null, 2));
console.log("brief.json written,", Object.keys(brief).length, "keys,", brief.sections.length, "sections");
