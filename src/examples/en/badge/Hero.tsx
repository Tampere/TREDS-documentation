'use client';

import { Badge } from '@tampere/treds';

export default function Hero() {
  return (
    <>
      <Badge>Draft</Badge>
      <Badge status="success" showIcon>
        Approved
      </Badge>
    </>
  );
}
