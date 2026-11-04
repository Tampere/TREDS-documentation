import { languages, type Lang } from './i18n';
import { componentSlug, components, groups } from './components';

type Localized = Record<Lang, string>;

export interface DocPage {
  /** URL path after the language, without slashes; '' is the front page. */
  slug: string;
  title: Localized;
  /** Sub-heading within the section, shown in the sidebar. */
  group?: Localized;
}

export interface DocSection {
  id: string;
  title: Localized;
  pages: DocPage[];
}

// Client-safe: no content imports here, or the MDX (and its server-only code) would be
// bundled for the browser via Sidebar. Content loaders live in content.ts.
// The single source for routes, sidebar, header navigation, breadcrumbs and prev/next.
export const sections: DocSection[] = [
  {
    id: 'getting-started',
    title: { en: 'Getting started' },
    pages: [
      {
        slug: '',
        title: { en: 'Home' },
      },
      {
        slug: 'introduction',
        title: { en: 'Introduction' },
      },
    ],
  },
  {
    id: 'foundations',
    title: { en: 'Foundations' },
    pages: [
      {
        slug: 'foundations',
        title: { en: 'Overview' },
      },
      {
        slug: 'foundations/colours',
        title: { en: 'Colours' },
      },
      {
        slug: 'foundations/typography',
        title: { en: 'Typography' },
      },
      {
        slug: 'foundations/spacing-and-layout',
        title: { en: 'Spacing and layout' },
      },
      {
        slug: 'foundations/icons',
        title: { en: 'Icons' },
      },
      {
        slug: 'foundations/tokens',
        title: { en: 'Design tokens' },
      },
    ],
  },
  {
    id: 'components',
    title: { en: 'Components' },
    pages: [
      { slug: 'components', title: { en: 'Overview' } },
      ...Object.entries(groups).flatMap(([id, group]) =>
        components
          .filter((c) => c.group === id)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((c) => ({ slug: componentSlug(c.name), title: { en: c.name }, group }))
      ),
    ],
  },
];

// Linked from the footer, not the sidebar.
export const standalonePages: DocPage[] = [
  {
    slug: 'accessibility',
    title: { en: 'Accessibility statement' },
  },
];

const ordered = sections.flatMap((section) => section.pages.map((page) => ({ section, page })));

export const allPages = [...ordered.map(({ page }) => page), ...standalonePages];

export const href = (lang: Lang, slug: string) => (slug ? `/${lang}/${slug}/` : `/${lang}/`);

export function findPage(slug: string) {
  const i = ordered.findIndex(({ page }) => page.slug === slug);
  if (i === -1) {
    const page = standalonePages.find((p) => p.slug === slug);
    return page && { page, section: undefined, prev: undefined, next: undefined };
  }
  return {
    ...ordered[i],
    prev: ordered[i - 1]?.page,
    next: ordered[i + 1]?.page,
  };
}

/** Pathname → slug, tolerant of trailing slashes. */
export const slugFromPath = (pathname: string) =>
  pathname.replace(new RegExp(`^/(${languages.join('|')})`), '').replace(/^\/|\/$/g, '');
