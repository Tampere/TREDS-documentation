import type { ComponentType } from 'react';
import type { Lang } from '@/i18n';
import EnEmphasis from './en/button/Emphasis';
import EnHero from './en/button/Hero';
import EnPill from './en/button/Pill';
import EnWithIcons from './en/button/WithIcons';
import EnHeroTL from './en/text-link/Hero';
import EnInTextTL from './en/text-link/InText';
import EnExternalTL from './en/text-link/External';
import EnRouterLinkTL from './en/text-link/RouterLink';
import EnHeroB from './en/badge/Hero';
import EnNeutralB from './en/badge/Neutral';
import EnStatusesB from './en/badge/Statuses';
import EnStatusLabelB from './en/badge/StatusLabel';
import EnHeroC from './en/chip/Hero';
import EnFilterC from './en/chip/Filter';
import EnWithIconC from './en/chip/WithIcon';
import EnRemovableC from './en/chip/Removable';
import EnHeroRB from './en/radio-button/Hero';
import EnHeroFS from './en/fieldset/Hero';
import EnRequiredFS from './en/fieldset/Required';
import EnErrorFS from './en/fieldset/Error';
import EnHeroIB from './en/icon-button/Hero';
import EnInvertedIB from './en/icon-button/Inverted';
import EnAsLinkIB from './en/icon-button/AsLink';
import EnHeroLIB from './en/labeled-icon-button/Hero';
import EnInvertedLIB from './en/labeled-icon-button/Inverted';
import EnRouterLinkLIB from './en/labeled-icon-button/RouterLink';
import EnHeroCB from './en/checkbox/Hero';
import EnSingleCB from './en/checkbox/Single';
import EnSelectAllCB from './en/checkbox/SelectAll';
import EnHeroTF from './en/text-field/Hero';
import EnHelperTextTF from './en/text-field/HelperText';
import EnSearchTF from './en/text-field/Search';
import EnClearButtonTF from './en/text-field/ClearButton';
import EnHeroSE from './en/select/Hero';
import EnGroupedSE from './en/select/Grouped';
import EnSearchSE from './en/select/Search';
import EnControlledSE from './en/select/Controlled';
import EnHeroTA from './en/text-area/Hero';
import EnAutosizeTA from './en/text-area/Autosize';
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
import EnScrollableTB from './en/tabs/Scrollable';

import EnHeroTY from './en/typography/Hero';
import EnScaleTY from './en/typography/Scale';
import EnLevelTY from './en/typography/Level';
import EnHeroLSP from './en/loading-spinner/Hero';
import EnSizesLSP from './en/loading-spinner/Sizes';
import EnStatusLSP from './en/loading-spinner/Status';
import EnHeroMOD from './en/modal/Hero';
import EnFormMOD from './en/modal/Form';
import EnHeroPGN from './en/pagination/Hero';
import EnResultsPGN from './en/pagination/Results';
import EnHeroTBL from './en/table/Hero';
import EnScrollTBL from './en/table/Scroll';
import EnWithPaginationTBL from './en/table/WithPagination';

// Static maps: the bundler must see every example import to include it. Each language has
// its own files so the code a reader copies carries labels in the page language.
import EnHeroFIN from './en/file-input/Hero';
import EnMultipleFIN from './en/file-input/Multiple';
import EnSendFIN from './en/file-input/Send';
import EnHeroDZ from './en/dropzone/Hero';
import EnSingleDZ from './en/dropzone/Single';
import EnCustomMessageDZ from './en/dropzone/CustomMessage';
import EnHeroFL from './en/file-list/Hero';
import EnHeroDF from './en/date-field/Hero';
import EnRangeDF from './en/date-field/Range';
import EnControlledDF from './en/date-field/Controlled';
import EnHeroTMF from './en/time-field/Hero';
import EnRangeStepTMF from './en/time-field/RangeStep';
import EnDateAndTimeTMF from './en/time-field/DateAndTime';
import EnHeroSRF from './en/search-field/Hero';
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
  'dropzone/Hero': EnHeroDZ,
  'dropzone/Single': EnSingleDZ,
  'dropzone/CustomMessage': EnCustomMessageDZ,
  'file-list/Hero': EnHeroFL,
  'date-field/Hero': EnHeroDF,
  'date-field/Range': EnRangeDF,
  'date-field/Controlled': EnControlledDF,
  'time-field/Hero': EnHeroTMF,
  'time-field/RangeStep': EnRangeStepTMF,
  'time-field/DateAndTime': EnDateAndTimeTMF,
  'typography/Hero': EnHeroTY,
  'typography/Scale': EnScaleTY,
  'typography/Level': EnLevelTY,
  'loading-spinner/Hero': EnHeroLSP,
  'loading-spinner/Sizes': EnSizesLSP,
  'loading-spinner/Status': EnStatusLSP,
  'modal/Hero': EnHeroMOD,
  'modal/Form': EnFormMOD,
  'pagination/Hero': EnHeroPGN,
  'pagination/Results': EnResultsPGN,
  'table/Hero': EnHeroTBL,
  'table/Scroll': EnScrollTBL,
  'table/WithPagination': EnWithPaginationTBL,
  'paper/Hero': EnHeroPA,
  'paper/Border': EnBorderPA,
  'paper/Padding': EnPaddingPA,
  'card/Hero': EnHeroCA,
  'card/MediaTop': EnMediaTopCA,
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
  'tabs/Scrollable': EnScrollableTB,
  'text-area/Hero': EnHeroTA,
  'text-area/Autosize': EnAutosizeTA,
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
  'icon-button/Inverted': EnInvertedIB,
  'icon-button/AsLink': EnAsLinkIB,
  'labeled-icon-button/Hero': EnHeroLIB,
  'labeled-icon-button/Inverted': EnInvertedLIB,
  'labeled-icon-button/RouterLink': EnRouterLinkLIB,
  'fieldset/Hero': EnHeroFS,
  'fieldset/Required': EnRequiredFS,
  'fieldset/Error': EnErrorFS,
  'radio-button/Hero': EnHeroRB,
  'checkbox/Hero': EnHeroCB,
  'checkbox/Single': EnSingleCB,
  'checkbox/SelectAll': EnSelectAllCB,
  'select/Hero': EnHeroSE,
  'select/Grouped': EnGroupedSE,
  'select/Search': EnSearchSE,
  'select/Controlled': EnControlledSE,
  'text-field/Hero': EnHeroTF,
  'text-field/HelperText': EnHelperTextTF,
  'text-field/Search': EnSearchTF,
  'text-field/ClearButton': EnClearButtonTF,
  'badge/Hero': EnHeroB,
  'badge/Neutral': EnNeutralB,
  'badge/Statuses': EnStatusesB,
  'badge/StatusLabel': EnStatusLabelB,
  'chip/Hero': EnHeroC,
  'chip/Filter': EnFilterC,
  'chip/WithIcon': EnWithIconC,
  'chip/Removable': EnRemovableC,
  'text-link/Hero': EnHeroTL,
  'text-link/InText': EnInTextTL,
  'text-link/External': EnExternalTL,
  'text-link/RouterLink': EnRouterLinkTL,
  'button/Emphasis': EnEmphasis,
  'button/Hero': EnHero,
  'button/Pill': EnPill,
  'button/WithIcons': EnWithIcons,
};

export type ExampleName = keyof typeof en;

export const examples: Record<Lang, Record<ExampleName, ComponentType>> = { en };
