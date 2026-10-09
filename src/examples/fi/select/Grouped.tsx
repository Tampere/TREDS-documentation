'use client';

import { Select } from '@tampere/treds';

const services = [
  { group: 'Liikunta', items: ['Uimahallit', 'Kuntosalit', 'Urheilukentät'] },
  { group: 'Kulttuuri', items: ['Kirjastot', 'Museot', 'Teatterit'] },
];

export default function Grouped() {
  return (
    <Select
      inputLabel="Palvelu"
      options={services}
      clearButtonLabel="Tyhjennä valinta"
      expandButtonLabel="Näytä vaihtoehdot"
      collapseButtonLabel="Piilota vaihtoehdot"
    />
  );
}
