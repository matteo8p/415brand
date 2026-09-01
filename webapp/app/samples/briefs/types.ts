// An analysis brief is plain data. Prose fields ("inline text" below) use a
// tiny markup: **bold**, [label](https://href), and [[source-id]] — a source
// pill defined once in `sources` and reusable anywhere, with an optional
// per-use label override: [[source-id|Custom label]].

/** A citation pill. `logo` is a LogoId from ../logos (defaults to none). */
export type SourceDef = { label: string; href: string; logo?: string };

/** Series tokens: `primary` (the subject), `us` (our product), `other`
 *  (de-emphasized context), and sentiment tones for share charts. */
export type Series = "primary" | "us" | "other";
export type ShareTone = "pos" | "neg" | "neu";

export type NumberFormat = "num" | "usd" | "k" | "k$" | "pct";

/** [label, value] with an optional series token; `rows` charts also accept
 *  [label, lo, hi, series?] for range bars. */
export type ChartRow = (string | number)[];

export type Chart =
  | {
      kind: "columns";
      rows: ChartRow[];
      fmt: NumberFormat;
      /** Indexes of rows that get a direct value label. */
      label?: number[];
      aria: string;
    }
  | {
      kind: "rows";
      rows: ChartRow[];
      fmt: NumberFormat;
      label?: number[];
      labelAll?: boolean;
      axis?: boolean;
      aria: string;
    }
  | { kind: "share"; rows: [string, number, ShareTone][]; aria: string }
  /** Weekly trend lines: one series per tracked metric, points as [label, value]. */
  | {
      kind: "lines";
      series: { label: string; series: Series; points: [string, number][] }[];
      fmt: NumberFormat;
      aria: string;
    };

export type LegendEntry = { series: Series | ShareTone; label: string };

export type FigPanel = { cap: string; sub?: string; chart: Chart; legend?: LegendEntry[] };

/** A collapsible claim → evidence line. */
export type Finding = { claim: string; body: Block[] };

/** Direction of a change, judged from the client's point of view. */
export type Tone = "good" | "bad" | "neutral";

/** One KPI row of the head-to-head scorecard. `change` is this week's delta
 *  (inline text, e.g. "▲ +80 since Aug 21"); `source` is inline pills. */
export type ScoreRow = {
  metric: string;
  primary: string;
  us: string;
  change?: string;
  tone?: Tone;
  source?: string;
};

/** A ranked recommendation for this week. `window` says how long the
 *  opportunity stays open; `evidence` is a section id to link to. */
export type Move = { action: string; why: string; window?: string; evidence?: string };

export type Change = { text: string; tone?: Tone };

export type Block =
  /** `p` prose · `note` muted aside · `why` green-ruled "why it matters" callout */
  | { type: "p" | "note" | "why"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  /** Link-dense list (the Sources section) — pills render as plain links here. */
  | { type: "links"; items: string[] }
  /** List of collapsible findings. `do` = green recommendation rule, `did` = blue. */
  | { type: "findings"; style?: "do" | "did"; items: Finding[] }
  /** A single standalone collapsible (e.g. "Evidence"). */
  | { type: "toggle"; claim: string; body: Block[] }
  | { type: "fig"; panels: FigPanel[] }
  /** `w` is a CSS width for the column; `nw` keeps its cells on one line. */
  | { type: "table"; headers: { text: string; n?: boolean; w?: string; nw?: boolean }[]; rows: string[][] }
  /** Head-to-head KPI table, subject vs client, with this week's deltas. */
  | { type: "scorecard"; rows: ScoreRow[] }
  /** Ranked list of this week's recommended actions, with windows.
   *  `collapsed` hides each action's reasoning behind a toggle. */
  | { type: "moves"; items: Move[]; collapsed?: boolean }
  /** "What changed since last report" bullets, colored by tone. */
  | { type: "changes"; items: Change[] };

export type Section = { id: string; title: string; blocks: Block[] };

export type Brief = {
  slug: string;
  /** Which report this is. Client reports set it; tools/report.py reads it to pick
   *  the email layout (daily: full, weekly: summary plus link) and the checks. */
  kind?: "daily" | "weekly" | "leads";
  title: string;
  sub: string;
  /** Display names for the scorecard columns: the competitor and the client. */
  subject: string;
  client: string;
  /** One or two sentences for the page's <meta name="description">. */
  description?: string;
  /** Email metadata read by tools/report.py: the subject line and the preview text
   *  (for a daily, the counts: "5 complaints to reply to, 4 people shopping, 5 ads to copy"). */
  email?: { subject: string; preview: string };
  intro: Block[];
  sections: Section[];
  footer: string;
  sources: Record<string, SourceDef>;
};
