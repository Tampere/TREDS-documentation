'use client';

import { TextLink } from '@tampere/treds';
import props from '@/generated/TextLink.props.json';
import type { Lang } from '@/i18n';
import { Playground } from './Playground';

export function TextLinkPlayground({ lang }: { lang: Lang }) {
  return (
    <Playground
      component={TextLink as never}
      componentName="TextLink"
      props={props}
      fixedProps={
        lang === 'fi'
          ? { href: 'https://www.tampere.fi' }
          : { href: 'https://www.tampere.fi', openExternalLabel: ' (opens in a new tab)' }
      }
      lang={lang}
      defaultChildren={lang === 'fi' ? 'Tampereen kaupunki' : 'City of Tampere'}
    />
  );
}
