'use client';

import { AiIcon, Badge } from '@tampere/treds';

export default function WithIcon() {
  return (
    <>
      <Badge icon={<AiIcon aria-hidden />}>Luotu tekoälyllä</Badge>
      <Badge icon={<AiIcon aria-hidden />}>Muokattu tekoälyllä</Badge>
    </>
  );
}
