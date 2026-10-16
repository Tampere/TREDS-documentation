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
import FiHeroIB from './fi/icon-button/Hero';
import FiSizesIB from './fi/icon-button/Sizes';
import FiInvertedIB from './fi/icon-button/Inverted';
import FiAsLinkIB from './fi/icon-button/AsLink';
import FiDisabledIB from './fi/icon-button/Disabled';
import EnHeroIB from './en/icon-button/Hero';
import EnSizesIB from './en/icon-button/Sizes';
import EnInvertedIB from './en/icon-button/Inverted';
import EnAsLinkIB from './en/icon-button/AsLink';
import EnDisabledIB from './en/icon-button/Disabled';
import FiHeroLIB from './fi/labeled-icon-button/Hero';
import FiInvertedLIB from './fi/labeled-icon-button/Inverted';
import FiRouterLinkLIB from './fi/labeled-icon-button/RouterLink';
import FiDisabledLIB from './fi/labeled-icon-button/Disabled';
import EnHeroLIB from './en/labeled-icon-button/Hero';
import EnInvertedLIB from './en/labeled-icon-button/Inverted';
import EnRouterLinkLIB from './en/labeled-icon-button/RouterLink';
import EnDisabledLIB from './en/labeled-icon-button/Disabled';
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
import FiHeroTA from './fi/text-area/Hero';
import EnHeroTA from './en/text-area/Hero';
import FiAutosizeTA from './fi/text-area/Autosize';
import EnAutosizeTA from './en/text-area/Autosize';
import FiRequiredTA from './fi/text-area/Required';
import EnRequiredTA from './en/text-area/Required';
import FiErrorTA from './fi/text-area/Error';
import EnErrorTA from './en/text-area/Error';
import FiDisabledTA from './fi/text-area/Disabled';
import EnDisabledTA from './en/text-area/Disabled';
import FiHeroSW from './fi/switch/Hero';
import EnHeroSW from './en/switch/Hero';
import FiGroupSW from './fi/switch/Group';
import EnGroupSW from './en/switch/Group';
import FiHeroNL from './fi/navigation-link/Hero';
import EnHeroNL from './en/navigation-link/Hero';
import FiSmallNL from './fi/navigation-link/Small';
import EnSmallNL from './en/navigation-link/Small';
import FiWithIconsNL from './fi/navigation-link/WithIcons';
import EnWithIconsNL from './en/navigation-link/WithIcons';
import FiInvertedNL from './fi/navigation-link/Inverted';
import EnInvertedNL from './en/navigation-link/Inverted';
import FiRouterLinkNL from './fi/navigation-link/RouterLink';
import EnRouterLinkNL from './en/navigation-link/RouterLink';
import FiHeroSL from './fi/skip-link/Hero';
import EnHeroSL from './en/skip-link/Hero';
import FiHeroBC from './fi/breadcrumbs/Hero';
import EnHeroBC from './en/breadcrumbs/Hero';
import FiMobileBC from './fi/breadcrumbs/Mobile';
import EnMobileBC from './en/breadcrumbs/Mobile';
import FiRouterLinkBC from './fi/breadcrumbs/RouterLink';
import EnRouterLinkBC from './en/breadcrumbs/RouterLink';
import FiHeroPA from './fi/paper/Hero';
import EnHeroPA from './en/paper/Hero';
import FiBorderPA from './fi/paper/Border';
import EnBorderPA from './en/paper/Border';
import FiPaddingPA from './fi/paper/Padding';
import EnPaddingPA from './en/paper/Padding';
import FiHeroCA from './fi/card/Hero';
import EnHeroCA from './en/card/Hero';
import FiMediaTopCA from './fi/card/MediaTop';
import EnMediaTopCA from './en/card/MediaTop';
import FiMediaLeftCA from './fi/card/MediaLeft';
import EnMediaLeftCA from './en/card/MediaLeft';
import FiSizesCA from './fi/card/Sizes';
import EnSizesCA from './en/card/Sizes';
import FiBackgroundCA from './fi/card/Background';
import EnBackgroundCA from './en/card/Background';
import FiHeroLB from './fi/linkbox/Hero';
import EnHeroLB from './en/linkbox/Hero';
import FiMediaLB from './fi/linkbox/Media';
import EnMediaLB from './en/linkbox/Media';
import FiInvertedLB from './fi/linkbox/Inverted';
import EnInvertedLB from './en/linkbox/Inverted';
import FiExternalLB from './fi/linkbox/External';
import EnExternalLB from './en/linkbox/External';
import FiHeroAC from './fi/accordion/Hero';
import EnHeroAC from './en/accordion/Hero';
import FiNoSpacingAC from './fi/accordion/NoSpacing';
import EnNoSpacingAC from './en/accordion/NoSpacing';
import FiOpenCloseLabelsAC from './fi/accordion/OpenCloseLabels';
import EnOpenCloseLabelsAC from './en/accordion/OpenCloseLabels';
import FiHeroTB from './fi/tabs/Hero';
import EnHeroTB from './en/tabs/Hero';
import FiCenteredTB from './fi/tabs/Centered';
import EnCenteredTB from './en/tabs/Centered';
import FiScrollableTB from './fi/tabs/Scrollable';
import EnScrollableTB from './en/tabs/Scrollable';

import FiHeroTY from './fi/typography/Hero';
import EnHeroTY from './en/typography/Hero';
import FiScaleTY from './fi/typography/Scale';
import EnScaleTY from './en/typography/Scale';
import FiLevelTY from './fi/typography/Level';
import EnLevelTY from './en/typography/Level';
import FiHeroLSP from './fi/loading-spinner/Hero';
import EnHeroLSP from './en/loading-spinner/Hero';
import FiSizesLSP from './fi/loading-spinner/Sizes';
import EnSizesLSP from './en/loading-spinner/Sizes';
import FiStatusLSP from './fi/loading-spinner/Status';
import EnStatusLSP from './en/loading-spinner/Status';
import FiHeroMOD from './fi/modal/Hero';
import EnHeroMOD from './en/modal/Hero';
import FiFormMOD from './fi/modal/Form';
import EnFormMOD from './en/modal/Form';
import FiSizeMOD from './fi/modal/Size';
import EnSizeMOD from './en/modal/Size';
import FiHeroPGN from './fi/pagination/Hero';
import EnHeroPGN from './en/pagination/Hero';
import FiResultsPGN from './fi/pagination/Results';
import EnResultsPGN from './en/pagination/Results';
import FiMaxVisiblePGN from './fi/pagination/MaxVisible';
import EnMaxVisiblePGN from './en/pagination/MaxVisible';
import FiHeroTBL from './fi/table/Hero';
import EnHeroTBL from './en/table/Hero';
import FiScrollTBL from './fi/table/Scroll';
import EnScrollTBL from './en/table/Scroll';
import FiWithPaginationTBL from './fi/table/WithPagination';
import EnWithPaginationTBL from './en/table/WithPagination';

// Static maps: the bundler must see every example import to include it. Each language has
// its own files so the code a reader copies carries labels in the page language.
import FiHeroFIN from './fi/file-input/Hero';
import EnHeroFIN from './en/file-input/Hero';
import FiMultipleFIN from './fi/file-input/Multiple';
import EnMultipleFIN from './en/file-input/Multiple';
import FiSendFIN from './fi/file-input/Send';
import EnSendFIN from './en/file-input/Send';
import FiErrorFIN from './fi/file-input/Error';
import EnErrorFIN from './en/file-input/Error';
import FiDisabledFIN from './fi/file-input/Disabled';
import EnDisabledFIN from './en/file-input/Disabled';
import FiHeroDZ from './fi/dropzone/Hero';
import EnHeroDZ from './en/dropzone/Hero';
import FiSingleDZ from './fi/dropzone/Single';
import EnSingleDZ from './en/dropzone/Single';
import FiCustomMessageDZ from './fi/dropzone/CustomMessage';
import EnCustomMessageDZ from './en/dropzone/CustomMessage';
import FiErrorDZ from './fi/dropzone/Error';
import EnErrorDZ from './en/dropzone/Error';
import FiDisabledDZ from './fi/dropzone/Disabled';
import EnDisabledDZ from './en/dropzone/Disabled';
import FiHeroFL from './fi/file-list/Hero';
import EnHeroFL from './en/file-list/Hero';
import FiDisabledFL from './fi/file-list/Disabled';
import EnDisabledFL from './en/file-list/Disabled';
import FiHeroDF from './fi/date-field/Hero';
import EnHeroDF from './en/date-field/Hero';
import FiRangeDF from './fi/date-field/Range';
import EnRangeDF from './en/date-field/Range';
import FiControlledDF from './fi/date-field/Controlled';
import EnControlledDF from './en/date-field/Controlled';
import FiRequiredDF from './fi/date-field/Required';
import EnRequiredDF from './en/date-field/Required';
import FiErrorDF from './fi/date-field/Error';
import EnErrorDF from './en/date-field/Error';
import FiDisabledDF from './fi/date-field/Disabled';
import EnDisabledDF from './en/date-field/Disabled';
import FiHeroTMF from './fi/time-field/Hero';
import EnHeroTMF from './en/time-field/Hero';
import FiRangeStepTMF from './fi/time-field/RangeStep';
import EnRangeStepTMF from './en/time-field/RangeStep';
import FiDateAndTimeTMF from './fi/time-field/DateAndTime';
import EnDateAndTimeTMF from './en/time-field/DateAndTime';
import FiErrorTMF from './fi/time-field/Error';
import EnErrorTMF from './en/time-field/Error';
import FiDisabledTMF from './fi/time-field/Disabled';
import EnDisabledTMF from './en/time-field/Disabled';
const fi = {
  'file-input/Hero': FiHeroFIN,
  'file-input/Multiple': FiMultipleFIN,
  'file-input/Send': FiSendFIN,
  'file-input/Error': FiErrorFIN,
  'file-input/Disabled': FiDisabledFIN,
  'dropzone/Hero': FiHeroDZ,
  'dropzone/Single': FiSingleDZ,
  'dropzone/CustomMessage': FiCustomMessageDZ,
  'dropzone/Error': FiErrorDZ,
  'dropzone/Disabled': FiDisabledDZ,
  'file-list/Hero': FiHeroFL,
  'file-list/Disabled': FiDisabledFL,
  'date-field/Hero': FiHeroDF,
  'date-field/Range': FiRangeDF,
  'date-field/Controlled': FiControlledDF,
  'date-field/Required': FiRequiredDF,
  'date-field/Error': FiErrorDF,
  'date-field/Disabled': FiDisabledDF,
  'time-field/Hero': FiHeroTMF,
  'time-field/RangeStep': FiRangeStepTMF,
  'time-field/DateAndTime': FiDateAndTimeTMF,
  'time-field/Error': FiErrorTMF,
  'time-field/Disabled': FiDisabledTMF,
  'typography/Hero': FiHeroTY,
  'typography/Scale': FiScaleTY,
  'typography/Level': FiLevelTY,
  'loading-spinner/Hero': FiHeroLSP,
  'loading-spinner/Sizes': FiSizesLSP,
  'loading-spinner/Status': FiStatusLSP,
  'modal/Hero': FiHeroMOD,
  'modal/Form': FiFormMOD,
  'modal/Size': FiSizeMOD,
  'pagination/Hero': FiHeroPGN,
  'pagination/Results': FiResultsPGN,
  'pagination/MaxVisible': FiMaxVisiblePGN,
  'table/Hero': FiHeroTBL,
  'table/Scroll': FiScrollTBL,
  'table/WithPagination': FiWithPaginationTBL,
  'paper/Hero': FiHeroPA,
  'paper/Border': FiBorderPA,
  'paper/Padding': FiPaddingPA,
  'card/Hero': FiHeroCA,
  'card/MediaTop': FiMediaTopCA,
  'card/MediaLeft': FiMediaLeftCA,
  'card/Sizes': FiSizesCA,
  'card/Background': FiBackgroundCA,
  'linkbox/Hero': FiHeroLB,
  'linkbox/Media': FiMediaLB,
  'linkbox/Inverted': FiInvertedLB,
  'linkbox/External': FiExternalLB,
  'accordion/Hero': FiHeroAC,
  'accordion/NoSpacing': FiNoSpacingAC,
  'accordion/OpenCloseLabels': FiOpenCloseLabelsAC,
  'tabs/Hero': FiHeroTB,
  'tabs/Centered': FiCenteredTB,
  'tabs/Scrollable': FiScrollableTB,
  'text-area/Hero': FiHeroTA,
  'text-area/Autosize': FiAutosizeTA,
  'text-area/Required': FiRequiredTA,
  'text-area/Error': FiErrorTA,
  'text-area/Disabled': FiDisabledTA,
  'switch/Hero': FiHeroSW,
  'switch/Group': FiGroupSW,
  'navigation-link/Hero': FiHeroNL,
  'navigation-link/Small': FiSmallNL,
  'navigation-link/WithIcons': FiWithIconsNL,
  'navigation-link/Inverted': FiInvertedNL,
  'navigation-link/RouterLink': FiRouterLinkNL,
  'skip-link/Hero': FiHeroSL,
  'breadcrumbs/Hero': FiHeroBC,
  'breadcrumbs/Mobile': FiMobileBC,
  'breadcrumbs/RouterLink': FiRouterLinkBC,
  'icon-button/Hero': FiHeroIB,
  'icon-button/Sizes': FiSizesIB,
  'icon-button/Inverted': FiInvertedIB,
  'icon-button/AsLink': FiAsLinkIB,
  'icon-button/Disabled': FiDisabledIB,
  'labeled-icon-button/Hero': FiHeroLIB,
  'labeled-icon-button/Inverted': FiInvertedLIB,
  'labeled-icon-button/RouterLink': FiRouterLinkLIB,
  'labeled-icon-button/Disabled': FiDisabledLIB,
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
    'file-input/Hero': EnHeroFIN,
    'file-input/Multiple': EnMultipleFIN,
    'file-input/Send': EnSendFIN,
    'file-input/Error': EnErrorFIN,
    'file-input/Disabled': EnDisabledFIN,
    'dropzone/Hero': EnHeroDZ,
    'dropzone/Single': EnSingleDZ,
    'dropzone/CustomMessage': EnCustomMessageDZ,
    'dropzone/Error': EnErrorDZ,
    'dropzone/Disabled': EnDisabledDZ,
    'file-list/Hero': EnHeroFL,
    'file-list/Disabled': EnDisabledFL,
    'date-field/Hero': EnHeroDF,
    'date-field/Range': EnRangeDF,
    'date-field/Controlled': EnControlledDF,
    'date-field/Required': EnRequiredDF,
    'date-field/Error': EnErrorDF,
    'date-field/Disabled': EnDisabledDF,
    'time-field/Hero': EnHeroTMF,
    'time-field/RangeStep': EnRangeStepTMF,
    'time-field/DateAndTime': EnDateAndTimeTMF,
    'time-field/Error': EnErrorTMF,
    'time-field/Disabled': EnDisabledTMF,
    'typography/Hero': EnHeroTY,
    'typography/Scale': EnScaleTY,
    'typography/Level': EnLevelTY,
    'loading-spinner/Hero': EnHeroLSP,
    'loading-spinner/Sizes': EnSizesLSP,
    'loading-spinner/Status': EnStatusLSP,
    'modal/Hero': EnHeroMOD,
    'modal/Form': EnFormMOD,
    'modal/Size': EnSizeMOD,
    'pagination/Hero': EnHeroPGN,
    'pagination/Results': EnResultsPGN,
    'pagination/MaxVisible': EnMaxVisiblePGN,
    'table/Hero': EnHeroTBL,
    'table/Scroll': EnScrollTBL,
    'table/WithPagination': EnWithPaginationTBL,
    'paper/Hero': EnHeroPA,
    'paper/Border': EnBorderPA,
    'paper/Padding': EnPaddingPA,
    'card/Hero': EnHeroCA,
    'card/MediaTop': EnMediaTopCA,
    'card/MediaLeft': EnMediaLeftCA,
    'card/Sizes': EnSizesCA,
    'card/Background': EnBackgroundCA,
    'linkbox/Hero': EnHeroLB,
    'linkbox/Media': EnMediaLB,
    'linkbox/Inverted': EnInvertedLB,
    'linkbox/External': EnExternalLB,
    'accordion/Hero': EnHeroAC,
    'accordion/NoSpacing': EnNoSpacingAC,
    'accordion/OpenCloseLabels': EnOpenCloseLabelsAC,
    'tabs/Hero': EnHeroTB,
    'tabs/Centered': EnCenteredTB,
    'tabs/Scrollable': EnScrollableTB,
    'text-area/Hero': EnHeroTA,
    'text-area/Autosize': EnAutosizeTA,
    'text-area/Required': EnRequiredTA,
    'text-area/Error': EnErrorTA,
    'text-area/Disabled': EnDisabledTA,
    'switch/Hero': EnHeroSW,
    'switch/Group': EnGroupSW,
    'navigation-link/Hero': EnHeroNL,
    'navigation-link/Small': EnSmallNL,
    'navigation-link/WithIcons': EnWithIconsNL,
    'navigation-link/Inverted': EnInvertedNL,
    'navigation-link/RouterLink': EnRouterLinkNL,
    'skip-link/Hero': EnHeroSL,
    'breadcrumbs/Hero': EnHeroBC,
    'breadcrumbs/Mobile': EnMobileBC,
    'breadcrumbs/RouterLink': EnRouterLinkBC,
    'icon-button/Hero': EnHeroIB,
    'icon-button/Sizes': EnSizesIB,
    'icon-button/Inverted': EnInvertedIB,
    'icon-button/AsLink': EnAsLinkIB,
    'icon-button/Disabled': EnDisabledIB,
    'labeled-icon-button/Hero': EnHeroLIB,
    'labeled-icon-button/Inverted': EnInvertedLIB,
    'labeled-icon-button/RouterLink': EnRouterLinkLIB,
    'labeled-icon-button/Disabled': EnDisabledLIB,
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
