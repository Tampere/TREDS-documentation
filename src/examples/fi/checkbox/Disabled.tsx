'use client';

import { Checkbox } from '@tampere/treds';

export default function Disabled() {
  return (
    <>
      <Checkbox label="Tekstiviesti-ilmoitukset" disabled />
      <Checkbox label="Sähköposti-ilmoitukset" disabled defaultChecked />
    </>
  );
}
