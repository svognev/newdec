import DecDataParser from "./DecDataParser";
import getShortCutUtils from "./getShortCutUtils";
import isFontAvailable from "./isFontAvailable";
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
    DecDataParser,
    getShortCutUtils,
    isFontAvailable,
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