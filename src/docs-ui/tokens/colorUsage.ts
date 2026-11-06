import type { Lang } from '@/i18n';

// Usage guidance is prose, so it is written by hand; the values beside it are not.
export const colorUsage: Record<string, Record<Lang, string>> = {
  'text.primary': { en: 'Body text.' },
  'text.secondary': {
    en: 'Supporting text: helper text, the p2 and caption styles.',
  },
  'text.disabled': {
    en: 'Text of disabled controls. Not for content.',
  },
  'text.header': { en: 'Headings h2–h5.' },
  'text.primaryHeader': {
    en: 'The page title (h1).',
  },
  'states.default': {
    en: 'Links and interactive elements at rest.',
  },
  'states.hover': { en: 'On hover.' },
  'states.focus': { en: 'Focused element.' },
  'states.active': {
    en: 'While pressed. Not enough for text — large text and UI parts only.',
  },
  'states.disabled': {
    en: 'Fill and borders of disabled controls.',
  },
  'states.error': {
    en: 'Error messages and invalid fields.',
  },
  'states.visited': {
    en: 'Visited links.',
  },
  'inputStates.default': {
    en: 'Form field borders at rest.',
  },
  'background.default': {
    en: 'Page and surface background.',
  },
  'background.disabled': {
    en: 'Background of disabled fields.',
  },
  'focus.visible': {
    en: 'Focus ring on light backgrounds.',
  },
  'focus.visibleInverted': {
    en: 'Focus ring on dark or coloured backgrounds.',
  },
  contrast: {
    en: 'Text and icons on coloured surfaces.',
  },
  divider: {
    en: 'Dividers such as table rows. Decorative: not for borders that carry meaning.',
  },
  error: { en: 'Same as states.error.' },
};
