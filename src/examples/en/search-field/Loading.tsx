'use client';

import { useEffect, useState } from 'react';
import { SearchField } from '@tampere/treds';

type Street = { value: string; label: string };

const streets = [
  'Hämeenkatu',
  'Hämeenpuisto',
  'Hatanpään valtatie',
  'Hallituskatu',
  'Hervannan valtaväylä',
];

// Stands in for a server call.
function fetchStreets(query: string): Promise<Street[]> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          streets
            .filter((s) => s.toLowerCase().startsWith(query.toLowerCase()))
            .map((s) => ({ value: s, label: s }))
        ),
      800
    )
  );
}

export default function Loading() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<Street[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) return;
    let current = true;
    fetchStreets(query).then((result) => {
      if (!current) return;
      setData(result);
      setLoading(false);
    });
    return () => {
      current = false;
    };
  }, [query]);

  return (
    <SearchField
      inputLabel="Street address"
      data={query.length < 2 ? [] : data}
      isLoading={loading}
      onChange={(e) => {
        setQuery(e.currentTarget.value);
        setLoading(e.currentTarget.value.length >= 2);
      }}
      onSearch={() => {}}
      clearButtonLabel="Clear search"
      searchButtonLabel="Search addresses"
    />
  );
}
