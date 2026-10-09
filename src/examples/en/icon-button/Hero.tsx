'use client';

import { DownloadIcon, EditIcon, IconButton, TrashcanIcon } from '@tampere/treds';

export default function Hero() {
  return (
    <>
      <IconButton size="md" aria-label="Edit">
        <EditIcon />
      </IconButton>
      <IconButton size="md" aria-label="Download">
        <DownloadIcon />
      </IconButton>
      <IconButton size="md" aria-label="Delete">
        <TrashcanIcon />
      </IconButton>
    </>
  );
}
