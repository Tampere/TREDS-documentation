'use client';

import { TextLink, Typography } from '@tampere/treds';

export default function Hero() {
  return (
    <Typography variant="p1">
      Check the latest information on the{' '}
      <TextLink href="https://www.tampere.fi">City of Tampere website</TextLink>.
    </Typography>
  );
}
