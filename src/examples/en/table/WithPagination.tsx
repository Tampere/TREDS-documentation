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
  status: i % 3 === 0 ? 'In progress' : 'Granted',
}));
const pageSize = 3;
const pageCount = Math.ceil(permits.length / pageSize);

export default function WithPagination() {
  const [page, setPage] = useState(0);

  return (
    <div style={{ width: '100%' }}>
      <Table>
        <TableHeader title={`Parking permits, page ${page + 1} of ${pageCount}`}>
          <TableRow>
            <TableHeaderCell scope="col">ID</TableHeaderCell>
            <TableHeaderCell scope="col">Status</TableHeaderCell>
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
          getAriaLabelForButton={(index) => `Page ${index + 1} of ${pageCount}`}
          leftButtonLabel="Previous page"
          rightButtonLabel="Next page"
        />
      </TableFooter>
    </div>
  );
}
