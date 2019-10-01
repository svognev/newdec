export const getCorrectColor = (hex, backgroundColor = "FFF") => {
    const correctColor = typeof hex === "string" && (hex.length === 6 || hex.length === 3) ? hex : backgroundColor;
    return correctColor;
}

export const selectAllOnClick = defaultValue => e => {
    if (!defaultValue || e.target.value === defaultValue) {
        e.target.focus();
        e.target.select();
    }
}

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
}

export const unicodeCharToNumber = unicodeChar => {
    return unicodeChar.charCodeAt(0).toString(16);
}

export const scrollToBottom = className => {
    setTimeout(() => { document.getElementsByClassName(className)[0].scrollTo(0, Number.MAX_SAFE_INTEGER) }, 0);
}

export const selectAllEditableContent = className => e => {
    if (e.target.className === className) {
        window.getSelection().selectAllChildren(e.target.children[0]);
    }
}