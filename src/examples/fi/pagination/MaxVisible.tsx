'use client';

import { useState } from 'react';
import { Pagination } from '@tampere/treds';

export default function MaxVisible() {
  const [page, setPage] = useState(9);

  return (
    <Pagination
      pageCount={20}
      activePageIndex={page}
      onPageChange={setPage}
      maxVisiblePages={7}
      getAriaLabelForButton={(index) => `Sivu ${index + 1} / 20`}
      leftButtonLabel="Edellinen sivu"
      rightButtonLabel="Seuraava sivu"
    />
  );
}
