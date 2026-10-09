'use client';

import Link from 'next/link';
import { TextLink } from '@tampere/treds';

export default function RouterLink() {
  return (
    <TextLink
      renderLink={(className) => (
        <Link href="/fi/" className={className}>
          Etusivulle
        </Link>
      )}
    />
  );
}
