'use client';

import { useState, type SyntheticEvent } from 'react';
import { Button, Modal, TextField, vars } from '@tampere/treds';

export default function Form() {
  const [opened, setOpened] = useState(false);
  const [name, setName] = useState('');

  function save(event: SyntheticEvent) {
    event.preventDefault();
    setOpened(false);
  }

  return (
    <>
      <Button onClick={() => setOpened(true)}>Name your favourites list</Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Name your favourites list"
        closeButtonProps={{ 'aria-label': 'Close' }}
      >
        <form onSubmit={save}>
          <TextField
            label="List name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            data-autofocus
          />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: vars.primitives.spacing['2'],
              marginTop: vars.primitives.spacing['3'],
            }}
          >
            <Button onClick={save}>Save</Button>
            <Button variant="secondary" onClick={() => setOpened(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
