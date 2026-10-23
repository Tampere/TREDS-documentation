'use client';

import { TextLink } from '@tampere/treds';
import props from '@/generated/TextLink.props.json';
import type { Lang } from '@/i18n';
import { Playground } from './Playground';

const labels = {
  en: { children: 'City of Tampere', openExternalLabel: ' (opens in a new tab)' },
};

export function TextLinkPlayground({ lang }: { lang: Lang }) {
  const l = labels[lang];
  return (
    <Playground
      component={TextLink as never}
      componentName="TextLink"
      props={props}
      fixedProps={{ href: 'https://www.tampere.fi', openExternalLabel: l.openExternalLabel }}
      lang={lang}
      defaultChildren={l.children}
    />
  );
}
