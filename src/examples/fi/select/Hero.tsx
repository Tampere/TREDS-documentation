'use client';

import { Select } from '@tampere/treds';

export default function Hero() {
  return (
    <Select
      inputLabel="Kaupunginosa"
      placeholder="Valitse kaupunginosa"
      options={['Hervanta', 'Kaleva', 'Keskusta', 'Lielahti', 'Tesoma']}
      clearButtonLabel="Tyhjennä valinta"
      expandButtonLabel="Näytä vaihtoehdot"
      collapseButtonLabel="Piilota vaihtoehdot"
    />
  );
}
