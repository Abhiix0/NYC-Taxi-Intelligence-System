/** Shared recharts tooltip style — matches the sketch design system */
export const tooltipStyle: React.CSSProperties = {
  fontFamily: "'Patrick Hand'",
  borderRadius: "2px 6px 4px 8px",
  border: "2px solid #2d2d2d",
  boxShadow: "3px 3px 0 #2d2d2d",
  background: "hsl(40, 33%, 97%)",
};

/** Format a raw number to K / M shorthand with one decimal */
export function fmtShort(v: number): string {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(2)}M`;
  if (v >= 1_000)     return `${(v / 1_000).toFixed(1)}K`;
  return v.toLocaleString();
}

/** Format as dollar amount with K / M shorthand */
export function fmtDollar(v: number): string {
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(2)}M`;
  if (v >= 1_000)     return `$${(v / 1_000).toFixed(1)}K`;
  return `$${v.toLocaleString()}`;
}
