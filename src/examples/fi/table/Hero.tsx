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
  { name: 'Tesoma', weekdays: '12–19', saturday: 'Suljettu' },
];

export default function Hero() {
  return (
    <Table>
      <TableHeader title="Kirjastojen aukioloajat">
        <TableRow>
          <TableHeaderCell scope="col">Kirjasto</TableHeaderCell>
          <TableHeaderCell scope="col">Ma–pe</TableHeaderCell>
          <TableHeaderCell scope="col">La</TableHeaderCell>
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
