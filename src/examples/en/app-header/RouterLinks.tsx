'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppHeader } from '@tampere/treds';

const pages = [
  { label: 'Foundations', href: '/en/foundations/colours/', section: '/en/foundations/' },
  { label: 'Components', href: '/en/components/', section: '/en/components/' },
];

export default function RouterLinks() {
  const pathname = usePathname();

  return (
    <AppHeader
      siteName="Design System"
      homeHref="/en/"
      navAriaLabel="Main menu"
      menuButtonLabel="Menu"
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
