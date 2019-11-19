import DecDataParser from "./DecDataParser";
import getShortCutUtils from "./getShortCutUtils";
import isFontAvailable from "./isFontAvailable";
import { getBorderPreviewStyle, } from "./getPreviewStyle";
import {
    getTabsErrorState, 
    getNamesSectionErrorState,
    getWordExportSectionErrorState,
    getListSectionErrorState,
    getTabNumberToSwitch,
} from "./validationFunctions";
import {
    getCorrectColor,
    selectAllOnClick,
    getOffset,
    getPreviewFont,
    getUnstyledText,
    unicodeNumberToChar,
    unicodeCharToNumber,
    scrollToBottom,
    changeAndScroll,
    selectAllEditableContent,
    getListChars,
    detectOS,
    getErrorSections,
    fillMissedFields,
    focusInput,
} from "./helpers.js";

export {
    DecDataParser,
    getShortCutUtils,
    isFontAvailable,
    getBorderPreviewStyle,
    getTabsErrorState,
    getNamesSectionErrorState,
    getWordExportSectionErrorState,
    getListSectionErrorState,
    getTabNumberToSwitch,
    getCorrectColor,
    getPreviewFont,
    selectAllOnClick,
    getOffset,
    getUnstyledText,
    unicodeNumberToChar,
    unicodeCharToNumber,
    scrollToBottom,
    changeAndScroll,
    selectAllEditableContent,
    getListChars,
    detectOS,
    getErrorSections,
    fillMissedFields,
    focusInput,
};