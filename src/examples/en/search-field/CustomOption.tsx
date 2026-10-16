'use client';

import { useState } from 'react';
import { SearchField, Typography } from '@tampere/treds';

const libraries = [
  { value: 'metso', label: 'Metso Main Library', district: 'City centre' },
  { value: 'hervanta', label: 'Hervanta Library', district: 'Hervanta' },
  { value: 'tesoma', label: 'Tesoma Library', district: 'Tesoma' },
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
      inputLabel="Library"
      data={query ? data : []}
      onChange={(e) => setQuery(e.currentTarget.value)}
      onSearch={() => {}}
      clearButtonLabel="Clear search"
      searchButtonLabel="Search libraries"
    />
  );
}
