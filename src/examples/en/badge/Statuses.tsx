'use client';

import { Badge } from '@tampere/treds';

export default function Statuses() {
  return (
    <>
      <Badge status="info" showIcon>
        In progress
      </Badge>
      <Badge status="success" showIcon>
        Approved
      </Badge>
      <Badge status="warning" showIcon>
        Attachment missing
      </Badge>
      <Badge status="error" showIcon>
        Rejected
      </Badge>
    </>
  );
}
