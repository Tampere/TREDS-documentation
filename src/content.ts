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
  'components/badge': {
    fi: () => import('./content/fi/badge.mdx'),
    en: () => import('./content/en/badge.mdx'),
  },
  'components/chip': {
    fi: () => import('./content/fi/chip.mdx'),
    en: () => import('./content/en/chip.mdx'),
  },
  'components/button': {
    fi: () => import('./content/fi/button.mdx'),
    en: () => import('./content/en/button.mdx'),
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
