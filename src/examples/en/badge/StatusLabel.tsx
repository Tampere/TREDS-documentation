'use client';

import { Badge } from '@tampere/treds';

export default function StatusLabel() {
  return (
    <Badge status="error" showIcon statusLabel="Error">
      Unpaid
    </Badge>
  );
}
