import type { Lang } from '@/i18n';

// Usage guidance is prose, so it is written by hand; the values beside it are not.
export const colorUsage: Record<string, Record<Lang, string>> = {
  'text.primary': { fi: 'Leipäteksti.', en: 'Body text.' },
  'text.secondary': {
    fi: 'Tukiteksti: aputekstit, p2- ja caption-tyylit.',
    en: 'Supporting text: helper text, the p2 and caption styles.',
  },
  'text.disabled': {
    fi: 'Pois käytöstä olevien kontrollien teksti. Ei sisällölle.',
    en: 'Text of disabled controls. Not for content.',
  },
  'text.header': { fi: 'Otsikot h2–h5.', en: 'Headings h2–h5.' },
  'text.primaryHeader': {
    fi: 'Sivun pääotsikko (h1).',
    en: 'The page title (h1).',
  },
  'states.default': {
    fi: 'Linkit ja interaktiiviset elementit levossa.',
    en: 'Links and interactive elements at rest.',
  },
  'states.hover': { fi: 'Hiiren ollessa päällä.', en: 'On hover.' },
  'states.focus': { fi: 'Fokusoitu elementti.', en: 'Focused element.' },
  'states.active': {
    fi: 'Painettuna. Ei riitä tekstin väriksi, vain suurelle tekstille ja käyttöliittymäosille.',
    en: 'While pressed. Not enough for text — large text and UI parts only.',
  },
  'states.disabled': {
    fi: 'Pois käytöstä olevien kontrollien täyttö ja reunat.',
    en: 'Fill and borders of disabled controls.',
  },
  'states.error': {
    fi: 'Virheviestit ja virheelliset kentät.',
    en: 'Error messages and invalid fields.',
  },
  'states.visited': {
    fi: 'Vieraillut linkit. Tummempi kuin Figman linkkiväri, joka ei täytä AA-tasoa.',
    en: "Visited links. Darker than Figma's link colour, which fails AA.",
  },
  'inputStates.default': {
    fi: 'Lomakekenttien reunat levossa.',
    en: 'Form field borders at rest.',
  },
  'background.default': {
    fi: 'Sivun ja pintojen tausta.',
    en: 'Page and surface background.',
  },
  'background.disabled': {
    fi: 'Pois käytöstä olevien kenttien tausta.',
    en: 'Background of disabled fields.',
  },
  'focus.visible': {
    fi: 'Fokusrengas vaalealla taustalla.',
    en: 'Focus ring on light backgrounds.',
  },
  'focus.visibleInverted': {
    fi: 'Fokusrengas tummalla tai värillisellä taustalla.',
    en: 'Focus ring on dark or coloured backgrounds.',
  },
  contrast: {
    fi: 'Teksti ja ikonit värillisillä pinnoilla.',
    en: 'Text and icons on coloured surfaces.',
  },
  divider: {
    fi: 'Erotinviivat, kuten taulukon rivit. Koristeellinen: ei merkitystä kantaville reunoille.',
    en: 'Dividers such as table rows. Decorative: not for borders that carry meaning.',
  },
  error: { fi: 'Sama kuin states.error.', en: 'Same as states.error.' },
};
