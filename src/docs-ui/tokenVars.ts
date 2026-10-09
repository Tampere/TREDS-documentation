import type { CSSProperties } from 'react';
import { vars } from '@tampere/treds';

// TREDS's CSS variable names carry a build hash, so the site's plain CSS can't reference
// them (#180). Re-expose the ones globals.css needs under stable names, once, at the root.
const scale = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const tokenVars = {
  // Two spacing scales; globals.css switches at 768px, where TREDS moves from the md bucket
  // to lg (a bucket applies *below* its own appWidth).
  ...Object.fromEntries(
    scale.flatMap((s) => [
      [`--space-${s}-wide`, vars.breakpoint.lg.spacing[s]],
      [`--space-${s}-narrow`, vars.breakpoint.md.spacing[s]],
    ])
  ),
  // Lists have no TREDS component yet (#56), so they borrow p1 to match paragraphs.
  '--p1-font-size': vars.theme.components.typography.p1.fontSize,
  '--p1-line-height': vars.theme.components.typography.p1.lineHeight,
  // Documentation tables are dense reference material, so they set cells in p2.
  '--p2-font-size': vars.theme.components.typography.p2.fontSize,
  '--p2-line-height': vars.theme.components.typography.p2.lineHeight,
  '--text-primary': vars.theme.text.primary,
  '--text-header': vars.theme.text.header,
  '--weight-bold': vars.theme.components.typography.h3.fontWeight,
  // focusRing is an object (outline + offset), so the docs' own controls rebuild it.
  '--focus-outline': vars.theme.focusRing.outline,
  '--focus-offset': vars.theme.focusRing.outlineOffset,
  '--stroke-weight': vars.theme.strokeWeight,
  '--surface': vars.theme.background.default,
  '--surface-subtle': vars.theme.background.disabled,
  '--divider': vars.theme.divider,
  '--accent': vars.theme.states.default,
  // TREDS has no code style (#185). Neutral 100 is Figma's tag fill; text.primary on it is 12:1.
  '--code-surface': vars.primitives.colors.neutral['100'],
  '--corner-radius': vars.theme.cornerRadius.sharp,
} as CSSProperties;
