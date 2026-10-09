'use client';

import { NavigationLink, vars } from '@tampere/treds';

export default function Small() {
  return (
    <nav
      aria-label="Tietoa sivustosta"
      style={{ display: 'flex', flexDirection: 'column', gap: vars.primitives.spacing['1'] }}
    >
      <NavigationLink href="#saavutettavuus" size="sm">
        Saavutettavuusseloste
      </NavigationLink>
      <NavigationLink href="#tietosuoja" size="sm">
        Tietosuoja
      </NavigationLink>
    </nav>
  );
}
