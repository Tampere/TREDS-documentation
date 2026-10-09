'use client';

import { FacebookIcon, IconButton, InstagramIcon } from '@tampere/treds';

export default function AsLink() {
  return (
    <>
      <IconButton
        component="a"
        href="https://facebook.example/esimerkki"
        size="lg"
        aria-label="Tampereen kaupunki Facebookissa"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://instagram.example/esimerkki"
        size="lg"
        aria-label="Tampereen kaupunki Instagramissa"
      >
        <InstagramIcon />
      </IconButton>
    </>
  );
}
