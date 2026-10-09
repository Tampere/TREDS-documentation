'use client';

import { useState } from 'react';
import { Select, Typography } from '@tampere/treds';

const areas = ['Hervanta', 'Kaleva', 'Keskusta', 'Lielahti', 'Tesoma'];

export default function Controlled() {
  const [value, setValue] = useState('');
  // onChange kutsutaan myös kirjoitettaessa, joten hyväksy vain vaihtoehdot.
  const selected = areas.includes(value) ? value : '';
  return (
    <div>
      <Select
        inputLabel="Kaupunginosa"
        options={areas}
        value={value}
        onChange={setValue}
        clearButtonLabel="Tyhjennä valinta"
        expandButtonLabel="Näytä vaihtoehdot"
        collapseButtonLabel="Piilota vaihtoehdot"
      />
      <Typography variant="p2">Valittu: {selected || 'ei valintaa'}</Typography>
    </div>
  );
}
