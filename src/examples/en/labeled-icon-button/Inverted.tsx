'use client';

import { LabeledIconButton, MenuIcon, SearchIcon, vars } from '@tampere/treds';

export default function Inverted() {
  return (
    <div
      style={{
        display: 'flex',
        background: vars.brand.blue.mainDark,
        padding: vars.primitives.spacing['2'],
      }}
    >
      <LabeledIconButton variant="inverted" icon={<SearchIcon />} label="Search" />
      <LabeledIconButton variant="inverted" icon={<MenuIcon />} label="Menu" />
    </div>
  );
}
