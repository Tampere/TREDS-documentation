'use client';

import { TextLink } from '@tampere/treds';

export default function Visited() {
  return (
    <>
      <TextLink href="https://www.tampere.fi">Avaamaton linkki</TextLink>
      <TextLink href="https://www.tampere.fi" visited>
        Avattu linkki
      </TextLink>
    </>
  );
}
