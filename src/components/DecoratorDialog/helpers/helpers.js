import { 
    numberingSets, 
    bulletNamesMap, 
    autoFillingRequiredFields, 
    DEFAULT_FONT, 
} from "../constants";
import isFontAvailable from "./isFontAvailable";

export const getCorrectColor = (hex, backgroundColor = "FFF") => {
    const correctColor = typeof hex === "string" && (hex.length === 6 || hex.length === 3) ? hex : backgroundColor;
    return correctColor;
};

export const selectAllOnClick = defaultValue => e => {
    if (!defaultValue || e.target.value === defaultValue) {
        e.target.focus();
        e.target.select();
    }
};

export const getOffset = (alignType, fontSize) => {
    if (alignType === "baseline") {
        return 0;
    }
    return (parseFloat(fontSize.slice()) / 2) * (alignType === "sub" ? 1 : -1);
};

export const getUnstyledText = styledText => {
    const unstyledText = styledText.replace(/<\/(.*?)>/gm, "</div>").replace(/(?!(?:<\/(.*?)>|<br(.*?)>)$)<(.*?)>/gm, "<div>");
    return unstyledText[0] !== "<" ? `<div>${unstyledText}</div>` : unstyledText;
};

export const unicodeNumberToChar = unicodeNumber => {
    return String.fromCharCode(parseInt(unicodeNumber, 16));
};

export const unicodeCharToNumber = unicodeChar => {
    return unicodeChar.charCodeAt(0).toString(16);
};

export const scrollToBottom = className => {
    setTimeout(() => { document.getElementsByClassName(className)[0].scrollTo({
        top: Number.MAX_SAFE_INTEGER,
        behavior: "smooth",
    })}, 0);
};

export const changeAndScroll = (changeFunction, timeOut) => (...args) => {
    changeFunction(...args);
    if (!timeOut) {
        scrollToBottom("content-rightSide");
    } else {
        setTimeout(() => {
            scrollToBottom("content-rightSide");
        }, timeOut);
    }
};

export const selectAllEditableContent = className => e => {
    if (e.target.className === className) {
        window.getSelection().selectAllChildren(e.target.children[0]);
    }
};

export const getListChars = ({ isOrderedList, numberingStyle, listItem, unicodeChar }) => {
    if (isOrderedList) {
        return numberingSets[numberingStyle];
    }
    const newBullet = bulletNamesMap.get(listItem) || unicodeChar;
    return Array(4).fill(newBullet);
};

export const detectOS = () => {
    if (navigator && navigator.appVersion) {
        if (navigator.appVersion.indexOf("Win") !== -1) {
            return "Windows";
        } else if (navigator.appVersion.indexOf("Mac") !== -1) {
            return "MacOS";
        }
    }
};

export const focusInput = (inputRef, timeout = 300) => {
    setTimeout(() => {
        inputRef.current.focus();
    }, timeout);
};

export const focusOnEmptyField = refs => {
    for (let i = 0; i < refs.length; i++) {
        if (!refs[i].current.value) {
            focusInput(refs[i]);
            return;
        }
    }
};

export const getPreviewFont = (font, customFont) => {
    if (font !== "custom" && isFontAvailable(font)) {
        return font;
    } else if (font === "custom" && customFont && isFontAvailable(customFont)) {
        return customFont;
    }
    return `'${DEFAULT_FONT}', 'Roboto', sans-serif`;
}

export const fillMissedFields = currentFormState => {
    const { 
        font, customFont,
        sideNumberFont, customSideNumberFont,
        lineSpacing, customLineSpacing,
    } = currentFormState;

    const formStateWithoutMissedFields = { ...currentFormState };
    
    [
        [font, customFont],
        [sideNumberFont, customSideNumberFont], 
        [lineSpacing, customLineSpacing],
    ].forEach(([option, customOption]) => {
        if (option === "custom" && !customOption) {
            formStateWithoutMissedFields[option] = null;
        }
    });

    // eslint-disable-next-line
    for (let fieldName in autoFillingRequiredFields) {
        if (!currentFormState[fieldName] && autoFillingRequiredFields[fieldName]) {
            formStateWithoutMissedFields[fieldName] = autoFillingRequiredFields[fieldName];
        }
    }
    return formStateWithoutMissedFields;
};