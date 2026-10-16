'use client';

import { useState } from 'react';
import { SearchField } from '@tampere/treds';

const districts = ['Hervanta', 'Kaleva', 'Lielahti', 'Linnainmaa', 'Tesoma', 'Hatanpää'].map(
  (name) => ({ value: name.toLowerCase(), label: name })
);

export default function SearchOnSelect() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const data = districts.filter((d) => d.label.toLowerCase().startsWith(query.toLowerCase()));

  return (
    <div style={{ display: 'grid', gap: '1rem', width: '100%' }}>
      <SearchField
        inputLabel="District"
        data={query ? data : []}
        onChange={(e) => setQuery(e.currentTarget.value)}
        onSearch={(item) => setResult(`Selected: ${item.label}`)}
        searchOnItemSelect
        clearButtonLabel="Clear search"
        searchButtonLabel="Search districts"
      />
      <p role="status">{result}</p>
    </div>
  );
}
