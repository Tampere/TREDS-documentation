'use client';

import { LabeledIconButton, TrashcanIcon } from '@tampere/treds';

export default function Disabled() {
  return <LabeledIconButton icon={<TrashcanIcon />} label="Delete" disabled />;
}
