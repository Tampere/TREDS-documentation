'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppHeader } from '@tampere/treds';

const pages = [
  { label: 'Perusteet', href: '/fi/foundations/colours/', section: '/fi/foundations/' },
  { label: 'Komponentit', href: '/fi/components/', section: '/fi/components/' },
];

export default function RouterLinks() {
  const pathname = usePathname();

  return (
    <AppHeader
      siteName="Design System"
      homeHref="/fi/"
      navAriaLabel="Päävalikko"
      navigation={pages.map((page) => ({
        label: page.label,
        isSelected: pathname.startsWith(page.section),
        renderLink: (className, ariaCurrent) => (
          <Link href={page.href} className={className} aria-current={ariaCurrent}>
            {page.label}
          </Link>
        ),
      }))}
    />
  );
}
