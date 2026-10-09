'use client';

import { useState } from 'react';
import { Switch } from '@tampere/treds';

export default function Hero() {
  const [openOnly, setOpenOnly] = useState(false);

  return (
    <Switch
      label="Näytä vain avoinna olevat"
      checked={openOnly}
      onChange={(e) => setOpenOnly(e.currentTarget.checked)}
    />
  );
}
