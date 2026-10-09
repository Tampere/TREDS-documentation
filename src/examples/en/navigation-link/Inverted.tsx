'use client';

import { NavigationLink, vars } from '@tampere/treds';

export default function Inverted() {
  return (
    <nav
      aria-label="Housing"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: vars.primitives.spacing['1'],
        background: vars.brand.blue.mainDark,
        padding: vars.primitives.spacing['2'],
      }}
    >
      <NavigationLink href="#rental-housing" variant="inverted">
        Rental housing
      </NavigationLink>
      <NavigationLink href="#plots" variant="inverted" isSelected>
        Plots
      </NavigationLink>
    </nav>
  );
}
