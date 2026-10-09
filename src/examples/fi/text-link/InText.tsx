'use client';

import { TextLink, Typography } from '@tampere/treds';

export default function InText() {
  return (
    <Typography variant="p2">
      Pienemmässä tekstissä linkki saa saman koon:{' '}
      <TextLink href="https://www.tampere.fi" size="p2">
        lue lisää palveluista
      </TextLink>
      .
    </Typography>
  );
}
