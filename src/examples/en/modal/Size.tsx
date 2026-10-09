'use client';

import { useState } from 'react';
import { Button, Modal, Typography, vars } from '@tampere/treds';

export default function Size() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setOpened(true)}>
        Read the terms of use
      </Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Library terms of use"
        size="lg"
        closeButtonProps={{ 'aria-label': 'Close' }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: vars.primitives.spacing['2'] }}
        >
          <Typography variant="p1">
            As a borrower you agree to return items on time and to replace lost or damaged items.
          </Typography>
          <Typography variant="p1">
            Your library card is personal. Report a lost card to the library straight away.
          </Typography>
        </div>
      </Modal>
    </>
  );
}
