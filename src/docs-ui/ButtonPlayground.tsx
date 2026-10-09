'use client';

import { Button } from '@tampere/treds';
import props from '@/generated/Button.props.json';
import type { Lang } from '@/i18n';
import { Playground } from './Playground';

// iconOnly needs an icon child and aria-label together, which a lone checkbox can't express.
export function ButtonPlayground({ lang }: { lang: Lang }) {
  return (
    <Playground
      component={Button as never}
      componentName="Button"
      props={props}
      exclude={['iconOnly']}
      lang={lang}
      defaultChildren={lang === 'fi' ? 'Tallenna' : 'Save'}
    />
  );
}
