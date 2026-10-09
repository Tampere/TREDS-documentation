'use client';

import { useState } from 'react';
import { Chip, StarOutlinedIcon } from '@tampere/treds';

export default function WithIcon() {
  const [checked, setChecked] = useState(false);
  return (
    <Chip icon={<StarOutlinedIcon aria-hidden />} checked={checked} onChange={setChecked}>
      Favourites
    </Chip>
  );
}
