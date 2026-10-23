import 'server-only';
import type { ComponentType } from 'react';
import type { Lang } from './i18n';

type Loader = () => Promise<{ default: ComponentType }>;

// Keyed by nav.ts slug.
// Pages without an entry: components get a generated stub, `components` the overview.
export const content: Partial<Record<string, Record<Lang, Loader>>> = {
  '': {
    en: () => import('./content/en/introduction.mdx'),
  },
  'foundations/colours': {
    en: () => import('./content/en/colours.mdx'),
  },
  'foundations/typography': {
    en: () => import('./content/en/typography.mdx'),
  },
  'foundations/spacing-and-layout': {
    en: () => import('./content/en/spacing-and-layout.mdx'),
  },
  'foundations/icons': {
    en: () => import('./content/en/icons.mdx'),
  },
  'foundations/tokens': {
    en: () => import('./content/en/tokens.mdx'),
  },
  'components/text-area': {
    en: () => import('./content/en/text-area.mdx'),
  },
  'components/switch': {
    en: () => import('./content/en/switch.mdx'),
  },
  'components/navigation-link': {
    en: () => import('./content/en/navigation-link.mdx'),
  },
  'components/skip-link': {
    en: () => import('./content/en/skip-link.mdx'),
  },
  'components/breadcrumbs': {
    en: () => import('./content/en/breadcrumbs.mdx'),
  },
  'components/typography': {
    en: () => import('./content/en/typography-component.mdx'),
  },
  'components/loading-spinner': {
    en: () => import('./content/en/loading-spinner.mdx'),
  },
  'components/modal': {
    en: () => import('./content/en/modal.mdx'),
  },
  'components/pagination': {
    en: () => import('./content/en/pagination.mdx'),
  },
  'components/table': {
    en: () => import('./content/en/table.mdx'),
  },
  'components/paper': {
    en: () => import('./content/en/paper.mdx'),
  },
  'components/card': {
    en: () => import('./content/en/card.mdx'),
  },
  'components/linkbox': {
    en: () => import('./content/en/linkbox.mdx'),
  },
  'components/accordion': {
    en: () => import('./content/en/accordion.mdx'),
  },
  'components/tabs': {
    en: () => import('./content/en/tabs.mdx'),
  },
  'components/badge': {
    en: () => import('./content/en/badge.mdx'),
  },
  'components/checkbox': {
    en: () => import('./content/en/checkbox.mdx'),
  },
  'components/radio-button': {
    en: () => import('./content/en/radio-button.mdx'),
  },
  'components/fieldset': {
    en: () => import('./content/en/fieldset.mdx'),
  },
  'components/icon-button': {
    en: () => import('./content/en/icon-button.mdx'),
  },
  'components/labeled-icon-button': {
    en: () => import('./content/en/labeled-icon-button.mdx'),
  },
  'components/chip': {
    en: () => import('./content/en/chip.mdx'),
  },
  'components/button': {
    en: () => import('./content/en/button.mdx'),
  },
  'components/file-input': {
    en: () => import('./content/en/file-input.mdx'),
  },
  'components/dropzone': {
    en: () => import('./content/en/dropzone.mdx'),
  },
  'components/file-list': {
    en: () => import('./content/en/file-list.mdx'),
  },
  'components/date-field': {
    en: () => import('./content/en/date-field.mdx'),
  },
  'components/time-field': {
    en: () => import('./content/en/time-field.mdx'),
  },
  'components/search-field': {
    en: () => import('./content/en/search-field.mdx'),
  },
  'components/app-header': {
    en: () => import('./content/en/app-header.mdx'),
  },
  'components/footer': {
    en: () => import('./content/en/footer.mdx'),
  },
  'components/select': {
    en: () => import('./content/en/select.mdx'),
  },
  'components/text-field': {
    en: () => import('./content/en/text-field.mdx'),
  },
  'components/text-link': {
    en: () => import('./content/en/text-link.mdx'),
  },
  accessibility: {
    en: () => import('./content/en/accessibility.mdx'),
  },
};
