'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@tampere/treds';

const days = ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'];
const rooms = ['Kokoushuone Aalto', 'Studio', 'Ryhmätila Näsi'];

export default function Scroll() {
  return (
    <div
      role="region"
      aria-label="Tilojen varaustilanne"
      tabIndex={0}
      style={{ overflowX: 'auto', width: '100%' }}
    >
      <Table aria-label="Tilojen varaustilanne">
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Tila</TableHeaderCell>
            {days.map((day) => (
              <TableHeaderCell key={day} scope="col">
                {day}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room}>
              <TableHeaderCell scope="row">{room}</TableHeaderCell>
              {days.map((day) => (
                <TableCell key={day}>Vapaa</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
