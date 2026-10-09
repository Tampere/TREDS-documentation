'use client';

import { Select } from '@tampere/treds';

const services = [
  { group: 'Sports', items: ['Swimming pools', 'Gyms', 'Sports fields'] },
  { group: 'Culture', items: ['Libraries', 'Museums', 'Theatres'] },
];

export default function Grouped() {
  return (
    <Select
      inputLabel="Service"
      options={services}
      clearButtonLabel="Clear selection"
      expandButtonLabel="Show options"
      collapseButtonLabel="Hide options"
    />
  );
}
