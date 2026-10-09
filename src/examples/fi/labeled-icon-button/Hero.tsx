'use client';

import { DownloadIcon, EditIcon, LabeledIconButton, TrashcanIcon } from '@tampere/treds';

export default function Hero() {
  return (
    <>
      <LabeledIconButton icon={<EditIcon />} label="Muokkaa" />
      <LabeledIconButton icon={<DownloadIcon />} label="Lataa" />
      <LabeledIconButton icon={<TrashcanIcon />} label="Poista" />
    </>
  );
}
