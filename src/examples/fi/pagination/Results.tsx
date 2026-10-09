'use client';

import { useRef, useState } from 'react';
import { Pagination, Typography, vars } from '@tampere/treds';

const events = Array.from({ length: 12 }, (_, i) => `Tapahtuma ${i + 1}`);
const pageSize = 4;
const pageCount = Math.ceil(events.length / pageSize);

export default function Results() {
  const [page, setPage] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);

  function changePage(index: number) {
    setPage(index);
    heading.current?.focus();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: vars.primitives.spacing['2'] }}>
      <Typography variant="h4" component="h3" ref={heading} tabIndex={-1}>
        Tapahtumat, sivu {page + 1} / {pageCount}
      </Typography>
      <ul>
        {events.slice(page * pageSize, (page + 1) * pageSize).map((event) => (
          <li key={event}>{event}</li>
        ))}
      </ul>
      <Pagination
        pageCount={pageCount}
        activePageIndex={page}
        onPageChange={changePage}
        getAriaLabelForButton={(index) => `Sivu ${index + 1} / ${pageCount}`}
        leftButtonLabel="Edellinen sivu"
        rightButtonLabel="Seuraava sivu"
      />
    </div>
  );
}
