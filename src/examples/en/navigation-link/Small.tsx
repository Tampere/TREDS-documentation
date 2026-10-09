'use client';

import { NavigationLink, vars } from '@tampere/treds';

export default function Small() {
  return (
    <nav
      aria-label="About this site"
      style={{ display: 'flex', flexDirection: 'column', gap: vars.primitives.spacing['1'] }}
    >
      <NavigationLink href="#accessibility" size="sm">
        Accessibility statement
      </NavigationLink>
      <NavigationLink href="#privacy" size="sm">
        Privacy
      </NavigationLink>
    </nav>
  );
}
