'use client';

import { useState } from 'react';
import { Button, Modal, Typography, vars } from '@tampere/treds';

export default function Hero() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setOpened(true)}>
        Delete application
      </Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Delete the application?"
        closeButtonProps={{ 'aria-label': 'Close' }}
      >
        <Typography variant="p1">A deleted application cannot be restored.</Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: vars.primitives.spacing['2'],
            marginTop: vars.primitives.spacing['3'],
          }}
        >
          <Button onClick={() => setOpened(false)}>Delete</Button>
          <Button variant="secondary" onClick={() => setOpened(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
}
