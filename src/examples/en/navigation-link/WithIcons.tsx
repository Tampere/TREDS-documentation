'use client';

import { ArrowRightIcon, HomeIcon, NavigationLink, vars } from '@tampere/treds';

export default function WithIcons() {
  return (
    <nav
      aria-label="Quick links"
      style={{ display: 'flex', flexDirection: 'column', gap: vars.primitives.spacing['1'] }}
    >
      <NavigationLink href="#home" startIcon={<HomeIcon aria-hidden />}>
        Home
      </NavigationLink>
      <NavigationLink href="#all-services" endIcon={<ArrowRightIcon aria-hidden />}>
        All services
      </NavigationLink>
    </nav>
  );
}
