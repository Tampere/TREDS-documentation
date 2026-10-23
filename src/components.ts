import type { Lang } from './i18n';
import registry from './components.json';

export const repoUrl = 'https://github.com/Tampere/Tampere-design-system';
export const storybookUrl = 'https://tampere.github.io/Tampere-design-system/';

export const groups = {
  actions: { en: 'Actions' },
  forms: { en: 'Forms and selection' },
  navigation: { en: 'Navigation' },
  content: { en: 'Content and layout' },
  feedback: { en: 'Status and feedback' },
} satisfies Record<string, Record<Lang, string>>;

export interface ComponentEntry {
  /** The exported component name. */
  name: string;
  group: keyof typeof groups;
  /** First published version that has the component. */
  since: string;
  description: Record<Lang, string>;
}

// JSON so scripts/props.mjs can read the same list without a TypeScript loader.
export const components = registry as ComponentEntry[];

export const componentSlug = (name: string) =>
  `components/${name.replace(/(?<=.)([A-Z])/g, '-$1').toLowerCase()}`;

export const storybookHref = (name: string) =>
  `${storybookUrl}?path=/docs/components-${name.toLowerCase()}--docs`;

export const sourceHref = (name: string) => `${repoUrl}/tree/main/src/components/${name}`;

export function findComponent(name: string) {
  const found = components.find((c) => c.name === name);
  if (!found) throw new Error(`components.json has no entry for ${name}`);
  return found;
}
