'use client';

import { Checkbox } from '@tampere/treds';

export default function Disabled() {
  return (
    <>
      <Checkbox label="Text message notifications" disabled />
      <Checkbox label="Email notifications" disabled defaultChecked />
    </>
  );
}
