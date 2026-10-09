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
        Uimahallit
      </Chip>
      <Chip checked={libraries} onChange={setLibraries}>
        Kirjastot
      </Chip>
      {area && (
        <Chip onRemove={() => setArea(false)} removeLabel="Poista Hervanta">
          Hervanta
        </Chip>
      )}
    </>
  );
}
