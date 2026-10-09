'use client';

import { Badge } from '@tampere/treds';

export default function Statuses() {
  return (
    <>
      <Badge status="info" showIcon>
        Käsittelyssä
      </Badge>
      <Badge status="success" showIcon>
        Hyväksytty
      </Badge>
      <Badge status="warning" showIcon>
        Liite puuttuu
      </Badge>
      <Badge status="error" showIcon>
        Hylätty
      </Badge>
    </>
  );
}
