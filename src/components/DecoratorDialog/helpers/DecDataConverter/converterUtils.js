import { GLOBAL_FALLBACK_MARK } from "../../constants";

const DEFAULT_DECORATOR = "Text 2000";

export const replaceDecNameIfDefault = decName => {
    if (decName === DEFAULT_DECORATOR) {
        return GLOBAL_FALLBACK_MARK;
    }
    if (decName === GLOBAL_FALLBACK_MARK) {
        return DEFAULT_DECORATOR;
    }
    return decName;
};

export const getNumber = val => val ? +val : null;

export const getNumberString = val => typeof val === "number" ? `${val}` : "";

export const getNumeratedListPattern = (order, prefix, suffix) => {
    return `${prefix || ""}{${order || 0}}${suffix || ""}`;
};

export const getStyleString = (rawDec, initialState) => {
    const dec = {};
    for (let propName in rawDec) {
        if (rawDec[propName] !== initialState[propName]) {
            dec[propName] = rawDec[propName];
        }
    }
    const styles = {};
    
    dec.font && (styles["font-family"] = dec.customFont || dec.font);
    dec.fontSize && (styles["font-size"] = `${dec.fontSize}pt`);
    dec.fontColor && dec.fontColor !== "000000" && (styles.color = `#${dec.fontColor}`);
    dec.verticalAlign && (styles["vertical-align"] = dec.verticalAlign);
    dec.bold && (styles["font-weight"] = "bold");
    dec.italic && (styles["font-style"] = "italic");

    const textDecoration = `${dec.underlined ? "underline" : ""} ${dec.stroke ? "line-through" : ""}`.trim()
    textDecoration && (styles["text-decoration"] = textDecoration);

    if (dec.textTransform) {
        if (dec.textTransform === "small-caps") {
            styles["font-variant"] = "small-caps";
        } else {
            styles["text-transform"] = dec.textTransform;
        }
    }

    if (dec.connectToPrevious) {
        styles["margin-top"] = "-1px";
        styles["margin-bottom"] = "-1px";
        styles["padding-top"] = "1px";
        styles["padding-bottom"] = "1px";
    } else {
        dec.marginTop && (styles["margin-top"] = dec.marginTop);
        dec.marginBottom && (styles["margin-bottom"] = dec.marginBottom);
    }

    if (dec.firstRowIndent || dec.otherRowsIndent) {
        const indentsDifference = +(dec.firstRowIndent || 0) - +(dec.otherRowsIndent || 0);
        if (!indentsDifference) {
            styles["margin-left"] = `${dec.otherRowsIndent}cm`;
        } else {
            styles["text-indent"] = `${indentsDifference}cm`;
            dec.otherRowsIndent && (styles["margin-left"] = `${dec.otherRowsIndent}cm`);
        }
    }

    if (dec.customLineSpacing !== "1.4em") {
        styles["line-height"] = dec.customLineSpacing || rawDec.lineSpacing;
    }

    if (dec.borderLeft || dec.borderRight || dec.borderTop || dec.borderBottom) {
        const borderThickness = dec.borderThickness || initialState.borderThickness;
        const borderType = dec.borderType || initialState.borderType;
        const borderColor = dec.borderColor || initialState.borderColor;
        const borderStyle = ` ${borderThickness}pt ${borderType} #${borderColor}`;

        dec.borderLeft && (styles["border-left"] = borderStyle);
        dec.borderRight && (styles["border-right"] = borderStyle);
        dec.borderTop && (styles["border-top"] = borderStyle);
        dec.borderBottom && (styles["border-bottom"] = borderStyle);
    }
    
    dec.wordSpacing && (styles["word-spacing"] = `${dec.wordSpacing}pt`);

    dec.fillingColor && (styles["background-color"] = `#${dec.fillingColor}`);

    return Object.entries(styles).reduce((acc, [key, value]) => (`${acc} ${key}:${value};`), "").trim();
};

export const getSideNumberStyleString = dec => {
    const styles = {};

    if (dec.font !== dec.sideNumberFont || dec.customFont !== dec.customSideNumberFont) {
        styles.font = dec.customSideNumberFont || dec.customFont;
    }

    styles["text-align"] = dec.sideNumberAlignment;
    dec.fontSize !== dec.sideNumberFontSize && (styles["font-size"] = `${dec.sideNumberFontSize}pt`);
    dec.sideNumberFontColor && (styles.color = `#${dec.sideNumberFontColor}`);
    dec.sideNumberFillingColor && (styles["background-color"] = `#${dec.sideNumberFillingColor}`);
    dec.sideNumberWidth && (styles["min-width"] = `${dec.sideNumberWidth}pt`);
    dec.sideNumberLineHeight && (styles["line-height"] = `${dec.sideNumberLineHeight}pt`);
    dec.sideNumberRadius && (styles["border-radius"] = `${dec.sideNumberRadius}pt`);
    dec.sideNumberBold && (styles["font-weight"] = "bold");
    dec.sideNumberItalic && (styles["font-style"] = "italic");
    dec.sideNumberUnderline && (styles["text-decoration"] = "underline");

    return Object.entries(styles).reduce((acc, [key, value]) => (`${acc} ${key}:${value};`), "").trim();
};