'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationLink } from '@tampere/treds';

export default function RouterLink() {
  const href = '/en/components/navigation-link/';
  const isSelected = usePathname() === href;

  return (
    <NavigationLink
      isSelected={isSelected}
      renderLink={(className, ariaCurrent) => (
        <Link href={href} className={className} aria-current={ariaCurrent}>
          NavigationLink
        </Link>
      )}
    />
  );
}
