'use client';

import { Badge } from '@tampere/treds';

export default function Hero() {
  return (
    <>
      <Badge>Luonnos</Badge>
      <Badge status="success" showIcon>
        Hyväksytty
      </Badge>
    </>
  );
}
