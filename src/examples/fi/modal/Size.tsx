'use client';

import { useState } from 'react';
import { Button, Modal, Typography, vars } from '@tampere/treds';

export default function Size() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setOpened(true)}>
        Lue käyttöehdot
      </Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Kirjaston käyttöehdot"
        size="lg"
        closeButtonProps={{ 'aria-label': 'Sulje' }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: vars.primitives.spacing['2'] }}
        >
          <Typography variant="p1">
            Lainaajana sitoudut palauttamaan aineiston ajallaan ja korvaamaan kadonneen tai
            vahingoittuneen aineiston.
          </Typography>
          <Typography variant="p1">
            Kirjastokortti on henkilökohtainen. Ilmoita kadonneesta kortista heti kirjastoon.
          </Typography>
        </div>
      </Modal>
    </>
  );
}
