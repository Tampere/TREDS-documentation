import type { ComponentType } from 'react';
import type { Lang } from '@/i18n';
import EnDisabled from './en/button/Disabled';
import EnHero from './en/button/Hero';
import EnIconOnly from './en/button/IconOnly';
import EnPill from './en/button/Pill';
import EnPrimary from './en/button/Primary';
import EnSecondary from './en/button/Secondary';
import EnTertiary from './en/button/Tertiary';
import EnWithIcons from './en/button/WithIcons';
import EnHeroTL from './en/text-link/Hero';
import EnInTextTL from './en/text-link/InText';
import EnExternalTL from './en/text-link/External';
import EnVisitedTL from './en/text-link/Visited';
import EnHeadingSizeTL from './en/text-link/HeadingSize';
import EnRouterLinkTL from './en/text-link/RouterLink';
import EnHeroB from './en/badge/Hero';
import EnNeutralB from './en/badge/Neutral';
import EnWithIconB from './en/badge/WithIcon';
import EnStatusesB from './en/badge/Statuses';
import EnStatusLabelB from './en/badge/StatusLabel';
import EnHeroC from './en/chip/Hero';
import EnFilterC from './en/chip/Filter';
import EnWithIconC from './en/chip/WithIcon';
import EnRemovableC from './en/chip/Removable';
import EnDisabledC from './en/chip/Disabled';
import EnHeroRB from './en/radio-button/Hero';
import EnErrorRB from './en/radio-button/Error';
import EnDisabledRB from './en/radio-button/Disabled';
import EnHeroFS from './en/fieldset/Hero';
import EnRequiredFS from './en/fieldset/Required';
import EnErrorFS from './en/fieldset/Error';
import EnWithBorderFS from './en/fieldset/WithBorder';
import EnHeroIB from './en/icon-button/Hero';
import EnSizesIB from './en/icon-button/Sizes';
import EnInvertedIB from './en/icon-button/Inverted';
import EnAsLinkIB from './en/icon-button/AsLink';
import EnDisabledIB from './en/icon-button/Disabled';
import EnHeroLIB from './en/labeled-icon-button/Hero';
import EnInvertedLIB from './en/labeled-icon-button/Inverted';
import EnRouterLinkLIB from './en/labeled-icon-button/RouterLink';
import EnDisabledLIB from './en/labeled-icon-button/Disabled';
import EnHeroCB from './en/checkbox/Hero';
import EnSingleCB from './en/checkbox/Single';
import EnSelectAllCB from './en/checkbox/SelectAll';
import EnErrorCB from './en/checkbox/Error';
import EnDisabledCB from './en/checkbox/Disabled';
import EnHeroTF from './en/text-field/Hero';
import EnHelperTextTF from './en/text-field/HelperText';
import EnRequiredTF from './en/text-field/Required';
import EnErrorTF from './en/text-field/Error';
import EnDisabledTF from './en/text-field/Disabled';
import EnSearchTF from './en/text-field/Search';
import EnClearButtonTF from './en/text-field/ClearButton';
import EnHeroSE from './en/select/Hero';
import EnHelperRequiredSE from './en/select/HelperRequired';
import EnErrorSE from './en/select/Error';
import EnGroupedSE from './en/select/Grouped';
import EnSearchSE from './en/select/Search';
import EnDisabledSE from './en/select/Disabled';
import EnControlledSE from './en/select/Controlled';
import EnHeroTA from './en/text-area/Hero';
import EnAutosizeTA from './en/text-area/Autosize';
import EnRequiredTA from './en/text-area/Required';
import EnErrorTA from './en/text-area/Error';
import EnDisabledTA from './en/text-area/Disabled';
import EnHeroSW from './en/switch/Hero';
import EnGroupSW from './en/switch/Group';
import EnHeroNL from './en/navigation-link/Hero';
import EnSmallNL from './en/navigation-link/Small';
import EnWithIconsNL from './en/navigation-link/WithIcons';
import EnInvertedNL from './en/navigation-link/Inverted';
import EnRouterLinkNL from './en/navigation-link/RouterLink';
import EnHeroSL from './en/skip-link/Hero';
import EnHeroBC from './en/breadcrumbs/Hero';
import EnMobileBC from './en/breadcrumbs/Mobile';
import EnRouterLinkBC from './en/breadcrumbs/RouterLink';
import EnHeroPA from './en/paper/Hero';
import EnBorderPA from './en/paper/Border';
import EnPaddingPA from './en/paper/Padding';
import EnHeroCA from './en/card/Hero';
import EnMediaTopCA from './en/card/MediaTop';
import EnMediaLeftCA from './en/card/MediaLeft';
import EnSizesCA from './en/card/Sizes';
import EnBackgroundCA from './en/card/Background';
import EnHeroLB from './en/linkbox/Hero';
import EnMediaLB from './en/linkbox/Media';
import EnInvertedLB from './en/linkbox/Inverted';
import EnExternalLB from './en/linkbox/External';
import EnHeroAC from './en/accordion/Hero';
import EnNoSpacingAC from './en/accordion/NoSpacing';
import EnOpenCloseLabelsAC from './en/accordion/OpenCloseLabels';
import EnHeroTB from './en/tabs/Hero';
import EnCenteredTB from './en/tabs/Centered';
import EnScrollableTB from './en/tabs/Scrollable';

import EnHeroTY from './en/typography/Hero';
import EnScaleTY from './en/typography/Scale';
import EnLevelTY from './en/typography/Level';
import EnHeroLSP from './en/loading-spinner/Hero';
import EnSizesLSP from './en/loading-spinner/Sizes';
import EnStatusLSP from './en/loading-spinner/Status';
import EnHeroMOD from './en/modal/Hero';
import EnFormMOD from './en/modal/Form';
import EnSizeMOD from './en/modal/Size';
import EnHeroPGN from './en/pagination/Hero';
import EnResultsPGN from './en/pagination/Results';
import EnMaxVisiblePGN from './en/pagination/MaxVisible';
import EnHeroTBL from './en/table/Hero';
import EnScrollTBL from './en/table/Scroll';
import EnWithPaginationTBL from './en/table/WithPagination';

// Static maps: the bundler must see every example import to include it. Each language has
// its own files so the code a reader copies carries labels in the page language.
import EnHeroFIN from './en/file-input/Hero';
import EnMultipleFIN from './en/file-input/Multiple';
import EnSendFIN from './en/file-input/Send';
import EnErrorFIN from './en/file-input/Error';
import EnDisabledFIN from './en/file-input/Disabled';
import EnHeroDZ from './en/dropzone/Hero';
import EnSingleDZ from './en/dropzone/Single';
import EnCustomMessageDZ from './en/dropzone/CustomMessage';
import EnErrorDZ from './en/dropzone/Error';
import EnDisabledDZ from './en/dropzone/Disabled';
import EnHeroFL from './en/file-list/Hero';
import EnDisabledFL from './en/file-list/Disabled';
import EnHeroDF from './en/date-field/Hero';
import EnRangeDF from './en/date-field/Range';
import EnControlledDF from './en/date-field/Controlled';
import EnRequiredDF from './en/date-field/Required';
import EnErrorDF from './en/date-field/Error';
import EnDisabledDF from './en/date-field/Disabled';
import EnHeroTMF from './en/time-field/Hero';
import EnRangeStepTMF from './en/time-field/RangeStep';
import EnDateAndTimeTMF from './en/time-field/DateAndTime';
import EnErrorTMF from './en/time-field/Error';
import EnDisabledTMF from './en/time-field/Disabled';
import EnHeroSRF from './en/search-field/Hero';
import EnSearchOnSelectSRF from './en/search-field/SearchOnSelect';
import EnLoadingSRF from './en/search-field/Loading';
import EnCustomOptionSRF from './en/search-field/CustomOption';
import EnNoVisibleLabelSRF from './en/search-field/NoVisibleLabel';
import EnHeroAH from './en/app-header/Hero';
import EnMultiRowAH from './en/app-header/MultiRow';
import EnActionsAH from './en/app-header/Actions';
import EnRouterLinksAH from './en/app-header/RouterLinks';
import EnHeroFT from './en/footer/Hero';
import EnExtendedFT from './en/footer/Extended';
import EnDenseFT from './en/footer/Dense';

const en = {
  'search-field/Hero': EnHeroSRF,
  'search-field/SearchOnSelect': EnSearchOnSelectSRF,
  'search-field/Loading': EnLoadingSRF,
  'search-field/CustomOption': EnCustomOptionSRF,
  'search-field/NoVisibleLabel': EnNoVisibleLabelSRF,
  'app-header/Hero': EnHeroAH,
  'app-header/MultiRow': EnMultiRowAH,
  'app-header/Actions': EnActionsAH,
  'app-header/RouterLinks': EnRouterLinksAH,
  'footer/Hero': EnHeroFT,
  'footer/Extended': EnExtendedFT,
  'footer/Dense': EnDenseFT,
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
};

export type ExampleName = keyof typeof en;

export const examples: Record<Lang, Record<ExampleName, ComponentType>> = { en };
