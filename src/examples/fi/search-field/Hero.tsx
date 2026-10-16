'use client';

import { useState } from 'react';
import { SearchField } from '@tampere/treds';

const services = [
  { value: 'kirjastot', label: 'Kirjastot' },
  { value: 'kirjastoauto', label: 'Kirjastoauto' },
  { value: 'uimahallit', label: 'Uimahallit' },
  { value: 'pysakointi', label: 'Pysäköinti' },
  { value: 'jatehuolto', label: 'Jätehuolto' },
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
        inputLabel="Hae palvelua"
        helperText="Kirjoita vähintään kaksi kirjainta ja valitse palvelu listasta."
        data={data}
        onChange={(e) => setQuery(e.currentTarget.value)}
        onSearch={(item) => setResult(`Siirrytään sivulle: ${item.label}`)}
        clearButtonLabel="Tyhjennä haku"
        searchButtonLabel="Hae"
      />
      <p role="status">{result}</p>
    </div>
  );
}
