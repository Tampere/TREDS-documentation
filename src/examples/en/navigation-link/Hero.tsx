'use client';

import { NavigationLink, vars } from '@tampere/treds';

export default function Hero() {
  return (
    <nav
      aria-label="Housing"
      style={{ display: 'flex', flexDirection: 'column', gap: vars.primitives.spacing['1'] }}
    >
      <NavigationLink href="#rental-housing">Rental housing</NavigationLink>
      <NavigationLink href="#plots" isSelected>
        Plots
      </NavigationLink>
      <NavigationLink href="#housing-advice">Housing advice</NavigationLink>
    </nav>
  );
}
