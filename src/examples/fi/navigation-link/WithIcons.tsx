'use client';

import { ArrowRightIcon, HomeIcon, NavigationLink, vars } from '@tampere/treds';

export default function WithIcons() {
  return (
    <nav
      aria-label="Pikalinkit"
      style={{ display: 'flex', flexDirection: 'column', gap: vars.primitives.spacing['1'] }}
    >
      <NavigationLink href="#etusivu" startIcon={<HomeIcon aria-hidden />}>
        Etusivu
      </NavigationLink>
      <NavigationLink href="#kaikki-palvelut" endIcon={<ArrowRightIcon aria-hidden />}>
        Kaikki palvelut
      </NavigationLink>
    </nav>
  );
}
