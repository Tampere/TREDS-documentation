'use client';

import { useState } from 'react';
import { SearchField } from '@tampere/treds';

const services = [
  { value: 'libraries', label: 'Libraries' },
  { value: 'mobile-library', label: 'Mobile library' },
  { value: 'swimming-halls', label: 'Swimming halls' },
  { value: 'parking', label: 'Parking' },
  { value: 'waste', label: 'Waste management' },
];

export default function Hero() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const data =
    query.length < 2
      ? []
      : services.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ display: 'grid', gap: '1rem', width: '100%' }}>
      <SearchField
        inputLabel="Search for a service"
        helperText="Type at least two letters and pick a service from the list."
        data={data}
        onChange={(e) => setQuery(e.currentTarget.value)}
        onSearch={(item) => setResult(`Going to: ${item.label}`)}
        clearButtonLabel="Clear search"
        searchButtonLabel="Search"
      />
      <p role="status">{result}</p>
    </div>
  );
}
