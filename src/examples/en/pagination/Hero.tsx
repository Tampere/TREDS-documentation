'use client';

import { useState } from 'react';
import { Pagination } from '@tampere/treds';

export default function Hero() {
  const [page, setPage] = useState(0);

  return (
    <Pagination
      pageCount={5}
      activePageIndex={page}
      onPageChange={setPage}
      getAriaLabelForButton={(index) => `Page ${index + 1} of 5`}
      leftButtonLabel="Previous page"
      rightButtonLabel="Next page"
    />
  );
}
