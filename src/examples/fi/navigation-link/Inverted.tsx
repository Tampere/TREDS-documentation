'use client';

import { NavigationLink, vars } from '@tampere/treds';

export default function Inverted() {
  return (
    <nav
      aria-label="Asuminen"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: vars.primitives.spacing['1'],
        background: vars.brand.blue.mainDark,
        padding: vars.primitives.spacing['2'],
      }}
    >
      <NavigationLink href="#vuokra-asunnot" variant="inverted">
        Vuokra-asunnot
      </NavigationLink>
      <NavigationLink href="#tontit" variant="inverted" isSelected>
        Tontit
      </NavigationLink>
    </nav>
  );
}
