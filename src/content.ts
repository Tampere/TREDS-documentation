import 'server-only';
import type { ComponentType } from 'react';
import type { Lang } from './i18n';

type Loader = () => Promise<{ default: ComponentType }>;

// Keyed by nav.ts slug.
// Pages without an entry: components get a generated stub, `components` the overview.
export const content: Partial<Record<string, Record<Lang, Loader>>> = {
  '': {
    fi: () => import('./content/fi/introduction.mdx'),
    en: () => import('./content/en/introduction.mdx'),
  },
  'foundations/colours': {
    fi: () => import('./content/fi/colours.mdx'),
    en: () => import('./content/en/colours.mdx'),
  },
  'foundations/typography': {
    fi: () => import('./content/fi/typography.mdx'),
    en: () => import('./content/en/typography.mdx'),
  },
  'foundations/spacing-and-layout': {
    fi: () => import('./content/fi/spacing-and-layout.mdx'),
    en: () => import('./content/en/spacing-and-layout.mdx'),
  },
  'foundations/icons': {
    fi: () => import('./content/fi/icons.mdx'),
    en: () => import('./content/en/icons.mdx'),
  },
  'foundations/tokens': {
    fi: () => import('./content/fi/tokens.mdx'),
    en: () => import('./content/en/tokens.mdx'),
  },
  'components/text-area': {
    fi: () => import('./content/fi/text-area.mdx'),
    en: () => import('./content/en/text-area.mdx'),
  },
  'components/switch': {
    fi: () => import('./content/fi/switch.mdx'),
    en: () => import('./content/en/switch.mdx'),
  },
  'components/navigation-link': {
    fi: () => import('./content/fi/navigation-link.mdx'),
    en: () => import('./content/en/navigation-link.mdx'),
  },
  'components/skip-link': {
    fi: () => import('./content/fi/skip-link.mdx'),
    en: () => import('./content/en/skip-link.mdx'),
  },
  'components/breadcrumbs': {
    fi: () => import('./content/fi/breadcrumbs.mdx'),
    en: () => import('./content/en/breadcrumbs.mdx'),
  },
  'components/typography': {
    fi: () => import('./content/fi/typography-component.mdx'),
    en: () => import('./content/en/typography-component.mdx'),
  },
  'components/loading-spinner': {
    fi: () => import('./content/fi/loading-spinner.mdx'),
    en: () => import('./content/en/loading-spinner.mdx'),
  },
  'components/modal': {
    fi: () => import('./content/fi/modal.mdx'),
    en: () => import('./content/en/modal.mdx'),
  },
  'components/pagination': {
    fi: () => import('./content/fi/pagination.mdx'),
    en: () => import('./content/en/pagination.mdx'),
  },
  'components/table': {
    fi: () => import('./content/fi/table.mdx'),
    en: () => import('./content/en/table.mdx'),
  },
  'components/paper': {
    fi: () => import('./content/fi/paper.mdx'),
    en: () => import('./content/en/paper.mdx'),
  },
  'components/card': {
    fi: () => import('./content/fi/card.mdx'),
    en: () => import('./content/en/card.mdx'),
  },
  'components/linkbox': {
    fi: () => import('./content/fi/linkbox.mdx'),
    en: () => import('./content/en/linkbox.mdx'),
  },
  'components/accordion': {
    fi: () => import('./content/fi/accordion.mdx'),
    en: () => import('./content/en/accordion.mdx'),
  },
  'components/tabs': {
    fi: () => import('./content/fi/tabs.mdx'),
    en: () => import('./content/en/tabs.mdx'),
  },
  'components/badge': {
    fi: () => import('./content/fi/badge.mdx'),
    en: () => import('./content/en/badge.mdx'),
  },
  'components/checkbox': {
    fi: () => import('./content/fi/checkbox.mdx'),
    en: () => import('./content/en/checkbox.mdx'),
  },
  'components/radio-button': {
    fi: () => import('./content/fi/radio-button.mdx'),
    en: () => import('./content/en/radio-button.mdx'),
  },
  'components/fieldset': {
    fi: () => import('./content/fi/fieldset.mdx'),
    en: () => import('./content/en/fieldset.mdx'),
  },
  'components/icon-button': {
    fi: () => import('./content/fi/icon-button.mdx'),
    en: () => import('./content/en/icon-button.mdx'),
  },
  'components/labeled-icon-button': {
    fi: () => import('./content/fi/labeled-icon-button.mdx'),
    en: () => import('./content/en/labeled-icon-button.mdx'),
  },
  'components/chip': {
    fi: () => import('./content/fi/chip.mdx'),
    en: () => import('./content/en/chip.mdx'),
  },
  'components/button': {
    fi: () => import('./content/fi/button.mdx'),
    en: () => import('./content/en/button.mdx'),
  },
  'components/file-input': {
    fi: () => import('./content/fi/file-input.mdx'),
    en: () => import('./content/en/file-input.mdx'),
  },
  'components/dropzone': {
    fi: () => import('./content/fi/dropzone.mdx'),
    en: () => import('./content/en/dropzone.mdx'),
  },
  'components/file-list': {
    fi: () => import('./content/fi/file-list.mdx'),
    en: () => import('./content/en/file-list.mdx'),
  },
  'components/date-field': {
    fi: () => import('./content/fi/date-field.mdx'),
    en: () => import('./content/en/date-field.mdx'),
  },
  'components/time-field': {
    fi: () => import('./content/fi/time-field.mdx'),
    en: () => import('./content/en/time-field.mdx'),
  },
  'components/search-field': {
    fi: () => import('./content/fi/search-field.mdx'),
    en: () => import('./content/en/search-field.mdx'),
  },
  'components/app-header': {
    fi: () => import('./content/fi/app-header.mdx'),
    en: () => import('./content/en/app-header.mdx'),
  },
  'components/footer': {
    fi: () => import('./content/fi/footer.mdx'),
    en: () => import('./content/en/footer.mdx'),
  },
  'components/select': {
    fi: () => import('./content/fi/select.mdx'),
    en: () => import('./content/en/select.mdx'),
  },
  'components/text-field': {
    fi: () => import('./content/fi/text-field.mdx'),
    en: () => import('./content/en/text-field.mdx'),
  },
  'components/text-link': {
    fi: () => import('./content/fi/text-link.mdx'),
    en: () => import('./content/en/text-link.mdx'),
  },
  accessibility: {
    fi: () => import('./content/fi/accessibility.mdx'),
    en: () => import('./content/en/accessibility.mdx'),
  },
};
