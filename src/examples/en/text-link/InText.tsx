'use client';

import { TextLink, Typography } from '@tampere/treds';

export default function InText() {
  return (
    <Typography variant="p2">
      In smaller text the link takes the same size:{' '}
      <TextLink href="https://www.tampere.fi" size="p2">
        read more about our services
      </TextLink>
      .
    </Typography>
  );
}
