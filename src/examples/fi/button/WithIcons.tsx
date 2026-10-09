'use client';

import { Button, ArrowRightIcon, DownloadIcon } from '@tampere/treds';

export default function WithIcons() {
  return (
    <>
      <Button variant="secondary" leftIcon={<DownloadIcon />}>
        Lataa PDF
      </Button>
      <Button rightIcon={<ArrowRightIcon />}>Seuraava vaihe</Button>
    </>
  );
}
