'use client';

import { AiIcon, Badge } from '@tampere/treds';

export default function WithIcon() {
  return (
    <>
      <Badge icon={<AiIcon aria-hidden />}>Created with AI</Badge>
      <Badge icon={<AiIcon aria-hidden />}>Edited with AI</Badge>
    </>
  );
}
