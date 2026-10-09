'use client';

import { Button } from '@tampere/treds';

export default function Disabled() {
  return (
    <>
      <Button disabled>Submit application</Button>
      <Button variant="secondary" disabled>
        Save draft
      </Button>
    </>
  );
}
