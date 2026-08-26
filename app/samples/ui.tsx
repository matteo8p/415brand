import { Fragment } from "react";
import type { Block, Brief, Change, FigPanel, Finding, Move, ScoreRow, SourceDef } from "./briefs/types";
import { BriefChart } from "./charts";
import { ExpandOnQuery } from "./expand";
import { LogoSprite } from "./logos";
import { renderInline } from "./markup";
import { SERIES_COLORS } from "./palette";

type Ctx = Record<string, SourceDef>;
type Names = { subject: string; client: string };

function FindingItem({ finding, sources, names }: { finding: Finding; sources: Ctx; names: Names }) {
  return (
    <details>
      <summary>
        <b>{renderInline(finding.claim, sources)}</b>
        {"\u00A0"}
        <span className="tog" />
      </summary>
      <div className="body">
        <Blocks blocks={finding.body} sources={sources} names={names} />
      </div>
    </details>
  );
}

function Scorecard({ rows, sources, names }: { rows: ScoreRow[]; sources: Ctx; names: Names }) {
  const hasSource = rows.some((r) => r.source);
  return (
    <div className="tbl">
      <table className="data scorecard">
        <thead>
          <tr>
            <th>Metric</th>
            <th className="n">{names.subject}</th>
            <th className="n">{names.client}</th>
            <th>Notes</th>
            {hasSource && <th>Source</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.metric}>
              <td>{renderInline(row.metric, sources)}</td>
              <td className="n">{row.primary}</td>
              <td className="n">{row.us}</td>
              <td>{row.change ? renderInline(row.change, sources) : ""}</td>
              {hasSource && <td>{row.source ? renderInline(row.source, sources) : null}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Moves({ items, sources }: { items: Move[]; sources: Ctx }) {
  return (
    <ol className="moves">
      {items.map((move) => (
        <li key={move.action}>
          <b>{renderInline(move.action, sources)}</b>
          {move.window && <span className="win">{renderInline(move.window, sources)}</span>}
          <p>
            {renderInline(move.why, sources)}
            {move.evidence && (
              <>
                {" "}
                <a className="ev" href={`#${move.evidence}`}>
                  evidence ↓
                </a>
              </>
            )}
          </p>
        </li>
      ))}
    </ol>
  );
}

function Changes({ items, sources }: { items: Change[]; sources: Ctx }) {
  return (
    <ul className="changes">
      {items.map((item) => (
        <li key={item.text} className={`tone-${item.tone ?? "neutral"}`}>
          {renderInline(item.text, sources)}
        </li>
      ))}
    </ul>
  );
}

function Fig({ panels }: { panels: FigPanel[] }) {
  const body = panels.map((panel) => (
    <div key={panel.cap}>
      <div className="cap">{panel.cap}</div>
      {panel.sub && <div className="s">{panel.sub}</div>}
      <BriefChart spec={panel.chart} />
      {panel.legend && (
        <div className="legend">
          {panel.legend.map((entry) => (
            <span key={entry.label}>
              <i style={{ background: SERIES_COLORS[entry.series] }} />
              {entry.label}
            </span>
          ))}
        </div>
      )}
    </div>
  ));
  return <div className="fig">{panels.length > 1 ? <div className="multi">{body}</div> : body}</div>;
}

function Blocks({ blocks, sources, names }: { blocks: Block[]; sources: Ctx; names: Names }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{renderInline(block.text, sources)}</p>;
          case "note":
            return (
              <p key={i} className="note">
                {renderInline(block.text, sources)}
              </p>
            );
          case "why":
            return (
              <p key={i} className="why">
                {renderInline(block.text, sources)}
              </p>
            );
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{renderInline(item, sources)}</li>
                ))}
              </ul>
            );
          case "links":
            return (
              <div key={i} className="plain">
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{renderInline(item, sources)}</li>
                  ))}
                </ul>
              </div>
            );
          case "findings":
            return (
              <ul key={i} className={block.style}>
                {block.items.map((finding) => (
                  <li key={finding.claim}>
                    <FindingItem finding={finding} sources={sources} names={names} />
                  </li>
                ))}
              </ul>
            );
          case "toggle":
            return <FindingItem key={i} finding={block} sources={sources} names={names} />;
          case "fig":
            return <Fig key={i} panels={block.panels} />;
          case "table":
            return (
              <div key={i} className="tbl">
                <table className="data">
                  <thead>
                    <tr>
                      {block.headers.map((h) => (
                        <th key={h.text} className={h.n ? "n" : undefined}>
                          {h.text}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} className={block.headers[c]?.n ? "n" : undefined}>
                            {renderInline(cell, sources)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "scorecard":
            return <Scorecard key={i} rows={block.rows} sources={sources} names={names} />;
          case "moves":
            return <Moves key={i} items={block.items} sources={sources} />;
          case "changes":
            return <Changes key={i} items={block.items} sources={sources} />;
          default:
            return null;
        }
      })}
    </>
  );
}

export function BriefArticle({ brief }: { brief: Brief }) {
  const names = { subject: brief.subject, client: brief.client };
  return (
    <Fragment>
      <LogoSprite />
      <ExpandOnQuery />
      <div className="page">
        <h1>{brief.title}</h1>
        <p className="sub">{brief.sub}</p>
        <Blocks blocks={brief.intro} sources={brief.sources} names={names} />
        <div className="contents">
          <div className="t">Contents</div>
          <ol>
            {brief.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </div>
        {brief.sections.map((section, i) => (
          <Fragment key={section.id}>
            <h2 id={section.id}>
              <span className="num">{i + 1}</span>
              {section.title}
            </h2>
            <Blocks blocks={section.blocks} sources={brief.sources} names={names} />
          </Fragment>
        ))}
        <footer>{renderInline(brief.footer, brief.sources)}</footer>
      </div>
    </Fragment>
  );
}
