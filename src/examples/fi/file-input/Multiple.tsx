'use client';

import { FileInput } from '@tampere/treds';

export default function Multiple() {
  return (
    <FileInput
      inputLabel="Valokuvat"
      helperText="JPG- tai PNG-kuvia, enintään 3 kpl"
      multiple
      maxFiles={3}
      accept="image/jpeg,image/png"
    />
  );
}
