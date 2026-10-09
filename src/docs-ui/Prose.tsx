import type { ReactNode } from 'react';

// Vertical rhythm for MDX content lives in globals.css (.prose); token values come from
// tokenVars on the page root.
export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose">{children}</div>;
}
