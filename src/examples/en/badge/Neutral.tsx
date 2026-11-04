'use client';

import { AiIcon, Badge } from '@tampere/treds';

export default function Neutral() {
  return (
    <>
      <Badge>Draft</Badge>
      <Badge inverted>New</Badge>
      <Badge icon={<AiIcon aria-hidden />}>Created with AI</Badge>
    </>
  );
}
