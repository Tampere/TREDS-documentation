'use client';

import { useState } from 'react';
import { Chip } from '@tampere/treds';

export default function Removable() {
  const [areas, setAreas] = useState(['Hervanta', 'Kaleva', 'City centre']);
  return areas.map((area) => (
    <Chip
      key={area}
      onRemove={() => setAreas((a) => a.filter((x) => x !== area))}
      removeLabel={`Remove ${area}`}
    >
      {area}
    </Chip>
  ));
}
