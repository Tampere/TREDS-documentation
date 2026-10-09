'use client';

import Link from 'next/link';
import { TextLink } from '@tampere/treds';

export default function RouterLink() {
  return (
    <TextLink
      renderLink={(className) => (
        <Link href="/en/" className={className}>
          To the front page
        </Link>
      )}
    />
  );
}
