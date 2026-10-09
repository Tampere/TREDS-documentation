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
      getAriaLabelForButton={(index) => `Page ${index + 1} of 20`}
      leftButtonLabel="Previous page"
      rightButtonLabel="Next page"
    />
  );
}
