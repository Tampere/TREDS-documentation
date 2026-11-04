'use client';

import { Button, ArrowRightIcon, DownloadIcon, SearchIcon } from '@tampere/treds';

export default function WithIcons() {
  return (
    <>
      <Button variant="secondary" leftIcon={<DownloadIcon />}>
        Download PDF
      </Button>
      <Button rightIcon={<ArrowRightIcon />}>Next step</Button>
      <Button iconOnly aria-label="Search">
        <SearchIcon />
      </Button>
    </>
  );
}
