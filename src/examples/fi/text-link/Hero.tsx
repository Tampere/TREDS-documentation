'use client';

import { TextLink, Typography } from '@tampere/treds';

export default function Hero() {
  return (
    <Typography variant="p1">
      Tarkista ajantasaiset tiedot{' '}
      <TextLink href="https://www.tampere.fi">Tampereen kaupungin verkkosivuilta</TextLink>.
    </Typography>
  );
}
