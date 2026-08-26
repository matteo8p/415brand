"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Chart, ChartRow, NumberFormat, Series, ShareTone } from "./briefs/types";
import { CHART_AXIS, CHART_GRID, CHART_INK, CHART_MUTED, SERIES_COLORS } from "./palette";

function fmtK(v: number): string {
  if (v >= 1e6) return `${(v / 1e6).toFixed(v % 1e6 === 0 ? 0 : 1).replace(/\.0$/, "")}M`;
  if (v >= 1000) return `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1).replace(/\.0$/, "")}K`;
  return String(v);
}

const FMT: Record<NumberFormat, (v: number) => string> = {
  num: (v) => v.toLocaleString("en-US"),
  usd: (v) => (v >= 1000 ? `$${fmtK(v)}` : `$${v}`),
  k: fmtK,
  k$: (v) => (v ? `$${v}K` : "$0"),
  pct: (v) => `${v}%`,
};

type Datum = {
  name: string;
  value: number | [number, number];
  series: Series;
  labelText: string | null;
};

function parseRows(rows: ChartRow[], fmt: NumberFormat, show: (index: number) => boolean): Datum[] {
  return rows.map((r, i) => {
    const nums = r.filter((x): x is number => typeof x === "number");
    const last = r[r.length - 1];
    const value = nums.length === 2 ? ([nums[0], nums[1]] as [number, number]) : nums[0];
    return {
      name: String(r[0]),
      value,
      series: (typeof last === "string" && last !== r[0] ? last : "primary") as Series,
      labelText: show(i) ? fmtValue(fmt, value) : null,
    };
  });
}

function fmtValue(fmt: NumberFormat, value: number | [number, number]): string {
  const f = FMT[fmt];
  return Array.isArray(value) ? `${f(value[0])}\u00A0to\u00A0${f(value[1])}` : f(value);
}

function TipBubble({ active, payload, fmt }: { active?: boolean; payload?: unknown; fmt: NumberFormat }) {
  const entry = (payload as { payload: Datum }[] | undefined)?.[0];
  if (!active || !entry) return null;
  const d = entry.payload;
  return (
    <div className="chart-tip on">
      <b>{d.name}</b> · {fmtValue(fmt, d.value)}
    </div>
  );
}

const TICK = { fontSize: 11, fill: CHART_MUTED } as const;
const VALUE_LABEL = { fontSize: 11.5, fontWeight: 600, fill: CHART_INK } as const;

function Columns({ spec }: { spec: Extract<Chart, { kind: "columns" }> }) {
  const show = (i: number) => spec.label?.includes(i) ?? false;
  const data = parseRows(spec.rows, spec.fmt, show);
  const tick = FMT[spec.fmt === "usd" ? "usd" : "k"];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 20, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid vertical={false} stroke={CHART_GRID} strokeWidth={1} />
        <XAxis dataKey="name" tickLine={false} axisLine={{ stroke: CHART_AXIS }} tick={TICK} interval={0} />
        <YAxis width={44} tickLine={false} axisLine={false} tick={TICK} tickFormatter={tick} />
        <Tooltip content={<TipBubble fmt={spec.fmt} />} cursor={{ fill: "rgba(0,0,0,0.04)" }} />
        <Bar dataKey="value" maxBarSize={22} radius={[4, 4, 0, 0]} isAnimationActive={false}>
          {data.map((d) => (
            <Cell key={d.name} fill={SERIES_COLORS[d.series]} />
          ))}
          <LabelList dataKey="labelText" position="top" offset={6} style={VALUE_LABEL} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function Rows({ spec }: { spec: Extract<Chart, { kind: "rows" }> }) {
  const show = (i: number) => (spec.labelAll ? true : (spec.label?.includes(i) ?? false));
  const data = parseRows(spec.rows, spec.fmt, show);
  const hasRange = data.some((d) => Array.isArray(d.value));
  const labelWidth = Math.min(180, Math.max(70, Math.max(...data.map((d) => d.name.length)) * 7 + 12));
  const valueGutter = Math.max(54, Math.max(...data.map((d) => d.labelText?.length ?? 0)) * 7 + 12);
  const height = 6 + data.length * 26 + (spec.axis ? 24 : 6);
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 6, right: valueGutter, bottom: spec.axis ? 0 : 6, left: 0 }}
      >
        {spec.axis && <CartesianGrid horizontal={false} stroke={CHART_GRID} strokeWidth={1} />}
        <XAxis
          type="number"
          hide={!spec.axis}
          tickLine={false}
          axisLine={false}
          tick={TICK}
          tickFormatter={FMT[spec.fmt]}
        />
        <YAxis
          type="category"
          dataKey="name"
          width={labelWidth}
          tickLine={false}
          axisLine={{ stroke: CHART_AXIS }}
          tick={TICK}
          interval={0}
        />
        <Tooltip content={<TipBubble fmt={spec.fmt} />} cursor={{ fill: "rgba(0,0,0,0.04)" }} />
        <Bar dataKey="value" barSize={12} radius={hasRange ? [4, 4, 4, 4] : [0, 4, 4, 0]} isAnimationActive={false}>
          {data.map((d) => (
            <Cell key={d.name} fill={SERIES_COLORS[d.series]} />
          ))}
          <LabelList dataKey="labelText" position="right" offset={6} style={VALUE_LABEL} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function Share({ spec }: { spec: Extract<Chart, { kind: "share" }> }) {
  const total = spec.rows.reduce((a, [, v]) => a + v, 0);
  return (
    <div style={{ display: "flex", gap: 2, height: 28, margin: "8px 0" }}>
      {spec.rows.map(([label, pct, tone], i) => {
        const share = (pct / total) * 100;
        return (
          <div
            key={label}
            title={`${label}: ${pct}%`}
            style={{
              width: `${share}%`,
              background: SERIES_COLORS[tone as ShareTone],
              borderRadius: i === 0 ? "4px 0 0 4px" : i === spec.rows.length - 1 ? "0 4px 4px 0" : 0,
              display: "flex",
              alignItems: "center",
              paddingLeft: 8,
              minWidth: 0,
            }}
          >
            {share >= 15 && (
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: tone === "neu" ? CHART_INK : "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                {pct}% {label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Lines({ spec }: { spec: Extract<Chart, { kind: "lines" }> }) {
  const xs = Array.from(new Set(spec.series.flatMap((s) => s.points.map(([x]) => x))));
  const data = xs.map((x) => {
    const row: Record<string, string | number | null> = { x };
    for (const s of spec.series) row[s.label] = s.points.find(([px]) => px === x)?.[1] ?? null;
    return row;
  });
  const fmt = FMT[spec.fmt];
  const tick = FMT[spec.fmt === "usd" ? "usd" : spec.fmt === "num" ? "k" : spec.fmt];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 20, right: 48, bottom: 0, left: 0 }}>
        <CartesianGrid vertical={false} stroke={CHART_GRID} strokeWidth={1} />
        <XAxis dataKey="x" tickLine={false} axisLine={{ stroke: CHART_AXIS }} tick={TICK} interval={0} />
        <YAxis width={44} tickLine={false} axisLine={false} tick={TICK} tickFormatter={tick} />
        <Tooltip
          content={({ active, payload, label }) =>
            active && payload?.length ? (
              <div className="chart-tip on">
                <b>{String(label)}</b>
                {payload.map((p) => (
                  <div key={String(p.name)}>
                    {String(p.name)} · {fmt(Number(p.value))}
                  </div>
                ))}
              </div>
            ) : null
          }
        />
        {spec.series.map((s) => (
          <Line
            key={s.label}
            type="monotone"
            dataKey={s.label}
            stroke={SERIES_COLORS[s.series]}
            strokeWidth={2}
            dot={{ r: 4, fill: SERIES_COLORS[s.series], stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 5 }}
            isAnimationActive={false}
            connectNulls
          >
            <LabelList
              dataKey={s.label}
              position="right"
              offset={8}
              style={VALUE_LABEL}
              content={(props) =>
                props.index === data.length - 1 && props.value != null ? (
                  <text x={Number(props.x) + 8} y={Number(props.y) + 4} style={VALUE_LABEL}>
                    {fmt(Number(props.value))}
                  </text>
                ) : null
              }
            />
          </Line>
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BriefChart({ spec }: { spec: Chart }) {
  return (
    <figure aria-label={spec.aria}>
      {spec.kind === "columns" ? (
        <Columns spec={spec} />
      ) : spec.kind === "rows" ? (
        <Rows spec={spec} />
      ) : spec.kind === "lines" ? (
        <Lines spec={spec} />
      ) : (
        <Share spec={spec} />
      )}
    </figure>
  );
}
