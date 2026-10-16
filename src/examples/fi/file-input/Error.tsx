'use client';

import { FileInput } from '@tampere/treds';

export default function WithError() {
  return <FileInput inputLabel="Liite" error="Tiedoston lataus epäonnistui. Yritä uudelleen." />;
}
