'use client';

import { DownloadIcon, EditIcon, LabeledIconButton, TrashcanIcon } from '@tampere/treds';

export default function Hero() {
  return (
    <>
      <LabeledIconButton icon={<EditIcon />} label="Edit" />
      <LabeledIconButton icon={<DownloadIcon />} label="Download" />
      <LabeledIconButton icon={<TrashcanIcon />} label="Delete" />
    </>
  );
}
