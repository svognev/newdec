import DecDataConverter from "./DecDataConverter";
import getShortCutUtils from "./getShortCutUtils";
import isFontAvailable from "./isFontAvailable";
import prepareColorCode from "./prepareColorCode";
import {
    getTabsErrorState,
    getTabNumberToSwitch,
    hasErrorInSection,
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
    fillMissedFields,
    focusInput,
    focusOnEmptyField,
} from "./helpers.js";

export {
    DecDataConverter,
    getShortCutUtils,
    isFontAvailable,
    prepareColorCode,
    getTabsErrorState,
    getTabNumberToSwitch,
    hasErrorInSection,
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
    fillMissedFields,
    focusInput,
    focusOnEmptyField,
};