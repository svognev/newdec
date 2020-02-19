import { GLOBAL_FALLBACK_MARK, fontsSet, lineSpacings } from "../../constants";
import prepareColorCode from "../prepareColorCode";

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
    // eslint-disable-next-line
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
        dec.marginTop && (styles["margin-top"] = `${dec.marginTop}pt`);
        dec.marginBottom && (styles["margin-bottom"] = `${dec.marginBottom}pt`);
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
        styles["font-family"] = dec.customSideNumberFont || dec.sideNumberFont;
    }

    styles["text-align"] = dec.sideNumberAlignment || "center";
    if (dec.sideNumberFontSize && dec.fontSize !== dec.sideNumberFontSize) {
        styles["font-size"] = `${dec.sideNumberFontSize}pt`;
    }
    
    dec.sideNumberFontColor && (styles.color = `#${dec.sideNumberFontColor}`);
    dec.sideNumberFillingColor && (styles["background-color"] = `#${dec.sideNumberFillingColor}`);
    dec.sideNumberWidth && (styles["min-width"] = `${dec.sideNumberWidth}pt`);
    dec.sideNumberLineHeight && (styles["line-height"] = `${dec.sideNumberLineHeight}pt`);
    dec.sideNumberRadius && (styles["border-radius"] = `${dec.sideNumberRadius}pt`);
    dec.sideNumberBold && (styles["font-weight"] = "bold");
    dec.sideNumberItalic && (styles["font-style"] = "italic");
    dec.sideNumberUnderlined && (styles["text-decoration"] = "underline");

    return Object.entries(styles).reduce((acc, [key, value]) => (`${acc} ${key}:${value};`), "").trim();
};

export const getStylesObject = (stylesString = "", sideNumberStylesString = "") => {
    const res = {};
    if (stylesString) {
        const keyValueStringsArray = stylesString.split(";");
        if (keyValueStringsArray.length) {
            const stylesArray = keyValueStringsArray.map(keyValueStr => keyValueStr.split(":"))
                .map(([key, value]) => [(key || "").trim(), (value || "").trim()])
                .filter(([key, value]) => key && value);
            
            if (stylesArray.length) {
                const styles = stylesArray.reduce((acc, [key, value]) => ({...acc, [key]: value }), {});
                
                if (styles["font-family"]) {
                    if (fontsSet.includes(styles["font-family"])) {
                        res.font = styles["font-family"];
                    } else {
                        res.font = "custom";
                        res.customFont = styles["font-family"];
                    }
                }

                styles["font-size"] && (res.fontSize = styles["font-size"].slice(0, -2));
                styles.color && (res.fontColor = styles.color.slice(1));
                styles["vertical-align"] && (res.verticalAlign = styles["vertical-align"]);
                
                if (styles["font-weight"] === "bold" || +styles["font-weight"] >= 700) {
                    res.bold = true;
                }

                styles["font-style"] === "italic" && (res.italic = true);

                if (styles["text-decoration"]) {
                    styles["text-decoration"].includes("underline") && (res.underlined = true);
                    styles["text-decoration"].includes("line-through") && (res.stroke = true);
                }

                if (styles["text-transform"] === "lowercase" || styles["text-transform"] ===  "uppercase") {
                    res.textTransform = styles["text-transform"];
                }
                
                styles["font-variant"] === "small-caps" && (res.textTransform = styles["font-variant"]);
                
                if (
                    styles["margin-top"] === "-1px" && 
                    styles["margin-bottom"] === "-1px" && 
                    styles["padding-top"] === "1px" && 
                    styles["padding-bottom"] === "1px"
                ) {
                    res.connectToPrevious = true;
                } else {
                    styles["margin-top"] && (res.marginTop = styles["margin-top"].slice(0, -2));
                    styles["margin-bottom"] && (res.marginBottom = styles["margin-bottom"].slice(0, -2));
                }

                if (styles["margin-left"] && !styles["text-indent"]) {
                    res.firstRowIndent = styles["margin-left"].slice(0, -2);
                    res.otherRowsIndent = res.firstRowIndent;
                } else if (styles["text-indent"] && !styles["margin-left"]) {
                    res.firstRowIndent = styles["text-indent"].slice(0, -2); 
                } else if (styles["margin-left"] && styles["text-indent"]) {
                    const margin = +(styles["margin-left"].slice(0, -2));
                    const indent = +(styles["text-indent"].slice(0, -2));
                    res.otherRowsIndent = `${margin}`;
                    res.firstRowIndent = `${margin + indent}`;
                }

                if (styles["line-height"]) {
                    if (lineSpacings.includes(styles["line-height"])) {
                        res.lineSpacing = styles["line-height"];
                    } else {
                        res.lineSpacing = "custom";
                        res.customLineSpacing = styles["line-height"];
                    }
                }

                const borderStyle = styles["border-top"] 
                    || styles["border-bottom"] 
                    || styles["border-left"] 
                    || styles["border-right"];

                if (borderStyle) {
                    const colorCodeMatch = borderStyle.match(/#[\da-f]{6}|#[\da-f]{3}|\(.*?\)/i);
                    const thicknessMatch = borderStyle.match(/\d+(?:\.\d+)?(?:px|pt)/i);
                    const lineTypeMatch = borderStyle.match(/solid|dotted|dashed|double|groove|ridge|inset|outset/);

                    if (colorCodeMatch && thicknessMatch && lineTypeMatch) {
                        res.borderColor = prepareColorCode(colorCodeMatch[0]);
                        res.borderThickness = thicknessMatch[0].slice(0, -2);
                        res.borderType = lineTypeMatch[0];
                    }

                    styles["border-top"] && (res.borderTop = true);
                    styles["border-bottom"] && (res.borderBottom = true);
                    styles["border-left"] && (res.borderLeft = true);
                    styles["border-right"] && (res.borderRight = true);
                }

                styles["word-spacing"] && (res.wordSpacing = styles["word-spacing"].slice(0, -2));
                styles["background-color"] && (res.fillingColor = styles["background-color"].slice(1));
            }
        }
    }

    if (sideNumberStylesString) {
        const keyValueStringsArray = sideNumberStylesString.split(";");
        if (keyValueStringsArray.length) {
            const stylesArray = keyValueStringsArray.map(keyValueStr => keyValueStr.split(":"))
                .map(([key, value]) => [(key || "").trim(), (value || "").trim()])
                .filter(([key, value]) => key && value);
            
            if (stylesArray.length) {
                res.sideNumber = true;

                const styles = stylesArray.reduce((acc, [key, value]) => ({...acc, [key]: value }), {});
                
                if (styles["font-family"]) {
                    if (fontsSet.includes(styles["font-family"])) {
                        res.sideNumberFont = styles["font-family"];
                    } else {
                        res.sideNumberFont = "custom";
                        res.sideNumberCustomFont = styles["font-family"];
                    }
                } else if (res.font) {
                    res.sideNumberFont = res.font;
                    res.sideNumberCustomFont = res.customFont;
                }

                res.sideNumberAlignment = styles["text-align"] || "center";
                res.sideNumberFontSize = styles["font-size"] ? styles["font-size"].slice(0, -2) : "";
                res.sideNumberFontColor = styles.color ? styles.color.slice(1) : "";
                res.sideNumberFillingColor = styles["background-color"] ? styles["background-color"].slice(1) : "";
                res.sideNumberWidth = styles["min-width"] ? styles["min-width"].slice(0, -2) : "";

                styles["line-height"] && (res.sideNumberLineHeight = styles["line-height"].slice(0, -2));

                res.sideNumberRadius = styles["border-radius"] ? styles["border-radius"].slice(0, -2) : "";

                if (styles["font-weight"] === "bold" || +styles["font-weight"] >= 700) {
                    res.sideNumberBold = true;
                }

                styles["font-style"] === "italic" && (res.sideNumberItalic = true);
                styles["text-decoration"] && styles["text-decoration"].includes("underline") && (res.sideNumberUnderlined = true);
            }
        }
    }

    if (!res.lineSpacing && !res.customLineSpacing) {
        res.lineSpacing = "custom";
        res.customLineSpacing = "1.4em";
    }

    return res;
};