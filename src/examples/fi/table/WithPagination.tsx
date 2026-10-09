'use client';

import { useState } from 'react';
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@tampere/treds';

const permits = Array.from({ length: 9 }, (_, i) => ({
  id: `PL-${1041 + i}`,
  status: i % 3 === 0 ? 'Käsittelyssä' : 'Myönnetty',
}));
const pageSize = 3;
const pageCount = Math.ceil(permits.length / pageSize);

export default function WithPagination() {
  const [page, setPage] = useState(0);

  return (
    <div style={{ width: '100%' }}>
      <Table>
        <TableHeader title={`Pysäköintiluvat, sivu ${page + 1} / ${pageCount}`}>
          <TableRow>
            <TableHeaderCell scope="col">Tunnus</TableHeaderCell>
            <TableHeaderCell scope="col">Tila</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {permits.slice(page * pageSize, (page + 1) * pageSize).map((permit) => (
            <TableRow key={permit.id}>
              <TableHeaderCell scope="row">{permit.id}</TableHeaderCell>
              <TableCell>{permit.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableFooter variant="div">
        <Pagination
          pageCount={pageCount}
          activePageIndex={page}
          onPageChange={setPage}
          getAriaLabelForButton={(index) => `Sivu ${index + 1} / ${pageCount}`}
          leftButtonLabel="Edellinen sivu"
          rightButtonLabel="Seuraava sivu"
        />
      </TableFooter>
    </div>
  );
}
