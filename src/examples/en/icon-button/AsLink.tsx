'use client';

import { FacebookIcon, IconButton, InstagramIcon } from '@tampere/treds';

export default function AsLink() {
  return (
    <>
      <IconButton
        component="a"
        href="https://facebook.example/example"
        size="lg"
        aria-label="City of Tampere on Facebook"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://instagram.example/example"
        size="lg"
        aria-label="City of Tampere on Instagram"
      >
        <InstagramIcon />
      </IconButton>
    </>
  );
}
