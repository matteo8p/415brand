import type { ReactNode } from "react";
import type { SourceDef } from "./briefs/types";

// Inline markup for brief prose: **bold**, `code`, [label](href), and
// [[source-id]] / [[source-id|Label]] citation pills resolved against the
// brief's `sources` map. One-pass tokenizer, no nesting.
const TOKEN = /(\[\[[a-z0-9-]+(?:\|[^\]]+)?\]\]|\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;

export function SourcePill({ source, label }: { source: SourceDef; label?: string }) {
  return (
    <a className="src" href={source.href} title={`Source: ${source.label}`}>
      {source.logo && (
        <svg className="lg" aria-hidden="true">
          <use href={`#lg-${source.logo}`} />
        </svg>
      )}
      {label ?? source.label}
    </a>
  );
}

export function renderInline(text: string, sources: Record<string, SourceDef>): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    const tok = m[0];

    if (tok.startsWith("[[")) {
      const [id, label] = tok.slice(2, -2).split("|");
      const source = sources[id];
      if (source) {
        out.push(<SourcePill key={key++} source={source} label={label} />);
      } else {
        out.push(tok);
      }
    } else if (tok.startsWith("**")) {
      out.push(<b key={key++}>{tok.slice(2, -2)}</b>);
    } else if (tok.startsWith("`")) {
      out.push(<code key={key++}>{tok.slice(1, -1)}</code>);
    } else {
      const close = tok.indexOf("](");
      out.push(
        <a key={key++} href={tok.slice(close + 2, -1)}>
          {tok.slice(1, close)}
        </a>,
      );
    }
    last = i + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
