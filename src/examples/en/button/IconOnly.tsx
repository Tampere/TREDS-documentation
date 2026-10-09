'use client';

import { Button, SearchIcon } from '@tampere/treds';

export default function IconOnly() {
  return (
    <Button iconOnly aria-label="Search">
      <SearchIcon />
    </Button>
  );
}
