'use client';

import { useState } from 'react';
import { Chip } from '@tampere/treds';

export default function Hero() {
  const [pools, setPools] = useState(true);
  const [libraries, setLibraries] = useState(false);
  const [area, setArea] = useState(true);
  return (
    <>
      <Chip checked={pools} onChange={setPools}>
        Swimming pools
      </Chip>
      <Chip checked={libraries} onChange={setLibraries}>
        Libraries
      </Chip>
      {area && (
        <Chip onRemove={() => setArea(false)} removeLabel="Remove Hervanta">
          Hervanta
        </Chip>
      )}
    </>
  );
}
