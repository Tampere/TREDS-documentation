'use client';

import { IconButton, SearchIcon } from '@tampere/treds';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export default function Sizes() {
  return sizes.map((size) => (
    <IconButton key={size} size={size} aria-label="Search">
      <SearchIcon />
    </IconButton>
  ));
}
