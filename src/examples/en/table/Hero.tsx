'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@tampere/treds';

const libraries = [
  { name: 'Metso', weekdays: '8–20', saturday: '10–16' },
  { name: 'Hervanta', weekdays: '10–19', saturday: '10–15' },
  { name: 'Tesoma', weekdays: '12–19', saturday: 'Closed' },
];

export default function Hero() {
  return (
    <Table>
      <TableHeader title="Library opening hours">
        <TableRow>
          <TableHeaderCell scope="col">Library</TableHeaderCell>
          <TableHeaderCell scope="col">Mon–Fri</TableHeaderCell>
          <TableHeaderCell scope="col">Sat</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {libraries.map((library) => (
          <TableRow key={library.name}>
            <TableHeaderCell scope="row">{library.name}</TableHeaderCell>
            <TableCell>{library.weekdays}</TableCell>
            <TableCell>{library.saturday}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
