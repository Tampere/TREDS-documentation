'use client';

import { DownloadIcon, EditIcon, IconButton, TrashcanIcon } from '@tampere/treds';

export default function Hero() {
  return (
    <>
      <IconButton size="md" aria-label="Muokkaa">
        <EditIcon />
      </IconButton>
      <IconButton size="md" aria-label="Lataa">
        <DownloadIcon />
      </IconButton>
      <IconButton size="md" aria-label="Poista">
        <TrashcanIcon />
      </IconButton>
    </>
  );
}
