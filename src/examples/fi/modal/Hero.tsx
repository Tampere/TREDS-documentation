'use client';

import { useState } from 'react';
import { Button, Modal, Typography, vars } from '@tampere/treds';

export default function Hero() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setOpened(true)}>
        Poista hakemus
      </Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Poistetaanko hakemus?"
        closeButtonProps={{ 'aria-label': 'Sulje' }}
      >
        <Typography variant="p1">Poistettua hakemusta ei voi palauttaa.</Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: vars.primitives.spacing['2'],
            marginTop: vars.primitives.spacing['3'],
          }}
        >
          <Button onClick={() => setOpened(false)}>Poista</Button>
          <Button variant="secondary" onClick={() => setOpened(false)}>
            Peruuta
          </Button>
        </div>
      </Modal>
    </>
  );
}
