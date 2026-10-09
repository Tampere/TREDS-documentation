'use client';

import { useState } from 'react';
import { Chip } from '@tampere/treds';

const options = ['Uimahallit', 'Kirjastot', 'Liikuntapaikat'];

export default function Filter() {
  const [selected, setSelected] = useState(['Uimahallit']);
  const toggle = (option: string) => (checked: boolean) =>
    setSelected((s) => (checked ? [...s, option] : s.filter((o) => o !== option)));

  return options.map((option) => (
    <Chip key={option} checked={selected.includes(option)} onChange={toggle(option)}>
      {option}
    </Chip>
  ));
}
