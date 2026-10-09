'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@tampere/treds';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const rooms = ['Meeting room Aalto', 'Studio', 'Group room Näsi'];

export default function Scroll() {
  return (
    <div
      role="region"
      aria-label="Room availability"
      tabIndex={0}
      style={{ overflowX: 'auto', width: '100%' }}
    >
      <Table aria-label="Room availability">
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Room</TableHeaderCell>
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
                <TableCell key={day}>Free</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
