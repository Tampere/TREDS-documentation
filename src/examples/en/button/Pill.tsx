'use client';

import { Button } from '@tampere/treds';

export default function Pill() {
  return (
    <>
      <Button radius="pill">Save</Button>
      <Button variant="secondary" radius="pill">
        Cancel
      </Button>
    </>
  );
}
