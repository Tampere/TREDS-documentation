export const languages = ['en'] as const;
export type Lang = (typeof languages)[number];

export const dict = {
  en: {
    siteName: 'Design System',
    navAriaLabel: 'Main navigation',
    languagesAriaLabel: 'Language',
    menu: 'Menu',
    home: 'Home',
    breadcrumbs: 'Breadcrumb',
    onThisPage: 'On this page',
    pages: 'Pages',
    sidebar: 'Documentation pages',
    previous: 'Previous',
    next: 'Next',
    search: 'Search the documentation',
    searchButton: 'Search',
    clear: 'Clear',
    noResults: 'No results',
    accessibility: 'Accessibility statement',
  },
} satisfies Record<Lang, Record<string, string>>;
