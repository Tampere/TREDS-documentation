import { breakpoint } from '@tampere/treds';

export type BreakpointKey = keyof typeof breakpoint;

// Widest first, matching TREDS's own breakpointKeys order.
export const bpKeys = Object.keys(breakpoint) as BreakpointKey[];

// Mantine's rem() emits `calc(1.5rem * var(--mantine-scale))`; show it as px.
export function toPx(value: string): string {
  const m = value.match(/^calc\(([\d.]+)rem \* var\(--mantine-scale\)\)$/);
  return m ? `${Math.round(parseFloat(m[1]) * 16 * 100) / 100}px` : value;
}

// A bucket's values apply *below* its own appWidth, down to the next-narrower key's
// (theme.css.ts mediaQueryFor); the widest bucket is open-ended upwards.
export function viewportRange(bp: BreakpointKey): string {
  const i = bpKeys.indexOf(bp);
  const lower = bpKeys[i + 1];
  if (i === 0) return `≥ ${breakpoint[lower].appWidth}`;
  if (!lower) return `≤ ${breakpoint[bp].appWidth}`;
  return `${breakpoint[lower].appWidth}–${breakpoint[bp].appWidth}`;
}

function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// WCAG 2.x contrast ratio.
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export const isHex = (v: unknown): v is string =>
  typeof v === 'string' && /^#[0-9a-f]{6}$/i.test(v);
