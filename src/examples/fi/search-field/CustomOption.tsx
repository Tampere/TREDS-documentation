'use client';

import { useState } from 'react';
import { SearchField, Typography } from '@tampere/treds';

const libraries = [
  { value: 'metso', label: 'Pääkirjasto Metso', district: 'Keskusta' },
  { value: 'hervanta', label: 'Hervannan kirjasto', district: 'Hervanta' },
  { value: 'tesoma', label: 'Tesoman kirjasto', district: 'Tesoma' },
];

export default function CustomOption() {
  const [query, setQuery] = useState('');

  const data = libraries
    .filter((l) => l.label.toLowerCase().includes(query.toLowerCase()))
    .map((l) => ({
      ...l,
      labelElement: (
        <span>
          {l.label}
          <Typography variant="caption" component="span" style={{ display: 'block' }}>
            {l.district}
          </Typography>
        </span>
      ),
    }));

  return (
    <SearchField
      inputLabel="Kirjasto"
      data={query ? data : []}
      onChange={(e) => setQuery(e.currentTarget.value)}
      onSearch={() => {}}
      clearButtonLabel="Tyhjennä haku"
      searchButtonLabel="Hae kirjasto"
    />
  );
}
