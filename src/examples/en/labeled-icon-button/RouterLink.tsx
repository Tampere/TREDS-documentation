'use client';

import Link from 'next/link';
import { HomeIcon, LabeledIconButton } from '@tampere/treds';

export default function RouterLink() {
  return (
    <LabeledIconButton
      icon={<HomeIcon />}
      label="Home"
      renderRoot={(props) => <Link href="/en/" {...props} />}
    />
  );
}
