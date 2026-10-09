'use client';

import { NavigationLink, vars } from '@tampere/treds';

export default function Hero() {
  return (
    <nav
      aria-label="Asuminen"
      style={{ display: 'flex', flexDirection: 'column', gap: vars.primitives.spacing['1'] }}
    >
      <NavigationLink href="#vuokra-asunnot">Vuokra-asunnot</NavigationLink>
      <NavigationLink href="#tontit" isSelected>
        Tontit
      </NavigationLink>
      <NavigationLink href="#asumisneuvonta">Asumisneuvonta</NavigationLink>
    </nav>
  );
}
