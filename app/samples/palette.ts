import type { Series, ShareTone } from "./briefs/types";

// Chart series colors. primary/us pass the dataviz categorical checks on a
// white surface; `other` is a deliberate de-emphasis neutral (every bar is
// direct-labeled, so identity never rides on the gray). pos/neg are the
// status greens/reds; neu is the neutral fold for share bars.
export const SERIES_COLORS: Record<Series | ShareTone, string> = {
  primary: "#3366cc",
  us: "#0f8f63",
  other: "#b9c0c8",
  pos: "#0ca30c",
  neg: "#d03b3b",
  neu: "#c8ccd1",
};

export const CHART_INK = "#202122";
export const CHART_MUTED = "#72777d";
export const CHART_GRID = "#eaecf0";
export const CHART_AXIS = "#c8ccd1";
