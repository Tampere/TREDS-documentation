'use client';

import { TextLink } from '@tampere/treds';

export default function Visited() {
  return (
    <>
      <TextLink href="https://www.tampere.fi">Unvisited link</TextLink>
      <TextLink href="https://www.tampere.fi" visited>
        Visited link
      </TextLink>
    </>
  );
}
