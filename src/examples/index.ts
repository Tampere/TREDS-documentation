import type { ComponentType } from 'react';
import type { Lang } from '@/i18n';
import FiDisabled from './fi/button/Disabled';
import FiHero from './fi/button/Hero';
import FiIconOnly from './fi/button/IconOnly';
import FiPill from './fi/button/Pill';
import FiPrimary from './fi/button/Primary';
import FiSecondary from './fi/button/Secondary';
import FiTertiary from './fi/button/Tertiary';
import FiWithIcons from './fi/button/WithIcons';
import EnDisabled from './en/button/Disabled';
import EnHero from './en/button/Hero';
import EnIconOnly from './en/button/IconOnly';
import EnPill from './en/button/Pill';
import EnPrimary from './en/button/Primary';
import EnSecondary from './en/button/Secondary';
import EnTertiary from './en/button/Tertiary';
import EnWithIcons from './en/button/WithIcons';
import FiHeroTL from './fi/text-link/Hero';
import FiInTextTL from './fi/text-link/InText';
import FiExternalTL from './fi/text-link/External';
import FiVisitedTL from './fi/text-link/Visited';
import FiHeadingSizeTL from './fi/text-link/HeadingSize';
import FiRouterLinkTL from './fi/text-link/RouterLink';
import EnHeroTL from './en/text-link/Hero';
import EnInTextTL from './en/text-link/InText';
import EnExternalTL from './en/text-link/External';
import EnVisitedTL from './en/text-link/Visited';
import EnHeadingSizeTL from './en/text-link/HeadingSize';
import EnRouterLinkTL from './en/text-link/RouterLink';
import FiHeroB from './fi/badge/Hero';
import FiNeutralB from './fi/badge/Neutral';
import FiWithIconB from './fi/badge/WithIcon';
import FiStatusesB from './fi/badge/Statuses';
import FiStatusLabelB from './fi/badge/StatusLabel';
import EnHeroB from './en/badge/Hero';
import EnNeutralB from './en/badge/Neutral';
import EnWithIconB from './en/badge/WithIcon';
import EnStatusesB from './en/badge/Statuses';
import EnStatusLabelB from './en/badge/StatusLabel';
import FiHeroC from './fi/chip/Hero';
import FiFilterC from './fi/chip/Filter';
import FiWithIconC from './fi/chip/WithIcon';
import FiRemovableC from './fi/chip/Removable';
import FiDisabledC from './fi/chip/Disabled';
import EnHeroC from './en/chip/Hero';
import EnFilterC from './en/chip/Filter';
import EnWithIconC from './en/chip/WithIcon';
import EnRemovableC from './en/chip/Removable';
import EnDisabledC from './en/chip/Disabled';
import FiHeroRB from './fi/radio-button/Hero';
import FiErrorRB from './fi/radio-button/Error';
import FiDisabledRB from './fi/radio-button/Disabled';
import EnHeroRB from './en/radio-button/Hero';
import EnErrorRB from './en/radio-button/Error';
import EnDisabledRB from './en/radio-button/Disabled';
import FiHeroFS from './fi/fieldset/Hero';
import FiRequiredFS from './fi/fieldset/Required';
import FiErrorFS from './fi/fieldset/Error';
import FiWithBorderFS from './fi/fieldset/WithBorder';
import EnHeroFS from './en/fieldset/Hero';
import EnRequiredFS from './en/fieldset/Required';
import EnErrorFS from './en/fieldset/Error';
import EnWithBorderFS from './en/fieldset/WithBorder';
import FiHeroCB from './fi/checkbox/Hero';
import FiSingleCB from './fi/checkbox/Single';
import FiSelectAllCB from './fi/checkbox/SelectAll';
import FiErrorCB from './fi/checkbox/Error';
import FiDisabledCB from './fi/checkbox/Disabled';
import EnHeroCB from './en/checkbox/Hero';
import EnSingleCB from './en/checkbox/Single';
import EnSelectAllCB from './en/checkbox/SelectAll';
import EnErrorCB from './en/checkbox/Error';
import EnDisabledCB from './en/checkbox/Disabled';
import FiHeroTF from './fi/text-field/Hero';
import FiHelperTextTF from './fi/text-field/HelperText';
import FiRequiredTF from './fi/text-field/Required';
import FiErrorTF from './fi/text-field/Error';
import FiDisabledTF from './fi/text-field/Disabled';
import FiSearchTF from './fi/text-field/Search';
import FiClearButtonTF from './fi/text-field/ClearButton';
import EnHeroTF from './en/text-field/Hero';
import EnHelperTextTF from './en/text-field/HelperText';
import EnRequiredTF from './en/text-field/Required';
import EnErrorTF from './en/text-field/Error';
import EnDisabledTF from './en/text-field/Disabled';
import EnSearchTF from './en/text-field/Search';
import EnClearButtonTF from './en/text-field/ClearButton';
import FiHeroSE from './fi/select/Hero';
import FiHelperRequiredSE from './fi/select/HelperRequired';
import FiErrorSE from './fi/select/Error';
import FiGroupedSE from './fi/select/Grouped';
import FiSearchSE from './fi/select/Search';
import FiDisabledSE from './fi/select/Disabled';
import FiControlledSE from './fi/select/Controlled';
import EnHeroSE from './en/select/Hero';
import EnHelperRequiredSE from './en/select/HelperRequired';
import EnErrorSE from './en/select/Error';
import EnGroupedSE from './en/select/Grouped';
import EnSearchSE from './en/select/Search';
import EnDisabledSE from './en/select/Disabled';
import EnControlledSE from './en/select/Controlled';

// Static maps: the bundler must see every example import to include it. Each language has
// its own files so the code a reader copies carries labels in the page language.
const fi = {
  'fieldset/Hero': FiHeroFS,
  'fieldset/Required': FiRequiredFS,
  'fieldset/Error': FiErrorFS,
  'fieldset/WithBorder': FiWithBorderFS,
  'radio-button/Hero': FiHeroRB,
  'radio-button/Error': FiErrorRB,
  'radio-button/Disabled': FiDisabledRB,
  'checkbox/Hero': FiHeroCB,
  'checkbox/Single': FiSingleCB,
  'checkbox/SelectAll': FiSelectAllCB,
  'checkbox/Error': FiErrorCB,
  'checkbox/Disabled': FiDisabledCB,
  'select/Hero': FiHeroSE,
  'select/HelperRequired': FiHelperRequiredSE,
  'select/Error': FiErrorSE,
  'select/Grouped': FiGroupedSE,
  'select/Search': FiSearchSE,
  'select/Disabled': FiDisabledSE,
  'select/Controlled': FiControlledSE,
  'text-field/Hero': FiHeroTF,
  'text-field/HelperText': FiHelperTextTF,
  'text-field/Required': FiRequiredTF,
  'text-field/Error': FiErrorTF,
  'text-field/Disabled': FiDisabledTF,
  'text-field/Search': FiSearchTF,
  'text-field/ClearButton': FiClearButtonTF,
  'badge/Hero': FiHeroB,
  'badge/Neutral': FiNeutralB,
  'badge/WithIcon': FiWithIconB,
  'badge/Statuses': FiStatusesB,
  'badge/StatusLabel': FiStatusLabelB,
  'chip/Hero': FiHeroC,
  'chip/Filter': FiFilterC,
  'chip/WithIcon': FiWithIconC,
  'chip/Removable': FiRemovableC,
  'chip/Disabled': FiDisabledC,
  'text-link/Hero': FiHeroTL,
  'text-link/InText': FiInTextTL,
  'text-link/External': FiExternalTL,
  'text-link/Visited': FiVisitedTL,
  'text-link/HeadingSize': FiHeadingSizeTL,
  'text-link/RouterLink': FiRouterLinkTL,
  'button/Disabled': FiDisabled,
  'button/Hero': FiHero,
  'button/IconOnly': FiIconOnly,
  'button/Pill': FiPill,
  'button/Primary': FiPrimary,
  'button/Secondary': FiSecondary,
  'button/Tertiary': FiTertiary,
  'button/WithIcons': FiWithIcons,
};

export type ExampleName = keyof typeof fi;

export const examples: Record<Lang, Record<ExampleName, ComponentType>> = {
  fi,
  en: {
    'fieldset/Hero': EnHeroFS,
    'fieldset/Required': EnRequiredFS,
    'fieldset/Error': EnErrorFS,
    'fieldset/WithBorder': EnWithBorderFS,
    'radio-button/Hero': EnHeroRB,
    'radio-button/Error': EnErrorRB,
    'radio-button/Disabled': EnDisabledRB,
    'checkbox/Hero': EnHeroCB,
    'checkbox/Single': EnSingleCB,
    'checkbox/SelectAll': EnSelectAllCB,
    'checkbox/Error': EnErrorCB,
    'checkbox/Disabled': EnDisabledCB,
    'select/Hero': EnHeroSE,
    'select/HelperRequired': EnHelperRequiredSE,
    'select/Error': EnErrorSE,
    'select/Grouped': EnGroupedSE,
    'select/Search': EnSearchSE,
    'select/Disabled': EnDisabledSE,
    'select/Controlled': EnControlledSE,
    'text-field/Hero': EnHeroTF,
    'text-field/HelperText': EnHelperTextTF,
    'text-field/Required': EnRequiredTF,
    'text-field/Error': EnErrorTF,
    'text-field/Disabled': EnDisabledTF,
    'text-field/Search': EnSearchTF,
    'text-field/ClearButton': EnClearButtonTF,
    'badge/Hero': EnHeroB,
    'badge/Neutral': EnNeutralB,
    'badge/WithIcon': EnWithIconB,
    'badge/Statuses': EnStatusesB,
    'badge/StatusLabel': EnStatusLabelB,
    'chip/Hero': EnHeroC,
    'chip/Filter': EnFilterC,
    'chip/WithIcon': EnWithIconC,
    'chip/Removable': EnRemovableC,
    'chip/Disabled': EnDisabledC,
    'text-link/Hero': EnHeroTL,
    'text-link/InText': EnInTextTL,
    'text-link/External': EnExternalTL,
    'text-link/Visited': EnVisitedTL,
    'text-link/HeadingSize': EnHeadingSizeTL,
    'text-link/RouterLink': EnRouterLinkTL,
    'button/Disabled': EnDisabled,
    'button/Hero': EnHero,
    'button/IconOnly': EnIconOnly,
    'button/Pill': EnPill,
    'button/Primary': EnPrimary,
    'button/Secondary': EnSecondary,
    'button/Tertiary': EnTertiary,
    'button/WithIcons': EnWithIcons,
  },
};
