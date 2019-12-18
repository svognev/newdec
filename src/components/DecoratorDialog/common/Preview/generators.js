import { getOffset, getCorrectColor, getPreviewFont } from "../../helpers";
import { alignmentsMap, DEFAULT_FONT_SIZE, DEFAULT_LINE_SPACING } from "../../constants";

export const generatePreviewStyle = formState => {
    const {
        font,
        customFont,
        alignment,
        fontSize,
        fontColor,
        bold,
        italic,
        underlined,
        stroke,
        textTransform,
        verticalAlign,
        marginTop,
        marginBottom,
        firstRowIndent,
        otherRowsIndent,
        lineSpacing,
        customLineSpacing,
        wordSpacing,   
        fillingColor,
        fillingConnectToPrevious,
    } = formState;
    
    const previewFontColor = getCorrectColor(fontColor, "f5f5f5");
    const previewFillingColor = getCorrectColor(fillingColor, "f5f5f5");
    const previewAdditionalFillingColor = fillingConnectToPrevious ? previewFillingColor : "f5f5f5";
    const indentsDifference = (firstRowIndent || 0) - (otherRowsIndent || 0);
    const previewMarginLeft = `${!otherRowsIndent ? 0 : (otherRowsIndent >= 6 ? 6 : otherRowsIndent)}cm`;
    const previewTextIndent = `${!indentsDifference ? 0 : (indentsDifference >= 6 ? 6 : indentsDifference)}cm`;
    const previewLineSpacing = lineSpacing !== "custom" ? lineSpacing : (customLineSpacing || DEFAULT_LINE_SPACING);

    const previewStyle = {
        fontSize: !fontSize ? `${DEFAULT_FONT_SIZE}pt` : `${fontSize <= 120 ? fontSize : 120}pt`,
        color: `#${previewFontColor}`,
        fontFamily: getPreviewFont(font, customFont),
        alignItems: alignmentsMap[alignment],
        textAlign: alignment,
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
        textDecoration: `${underlined ? "underline" : ""}${stroke ? " line-through" : ""}`.trim() || "none",
        verticalAlign,
        textTransform: textTransform !== "small-caps" ? textTransform : "none",
        fontVariant: textTransform === "small-caps" ? textTransform : "normal",
        backgroundColor: `#${previewFillingColor}`,
        backgroundImage:  `linear-gradient(#${previewAdditionalFillingColor}, #${previewAdditionalFillingColor})`,
        marginLeft: previewMarginLeft,
        textIndent: previewTextIndent,
        wordSpacing: `${wordSpacing || 0}pt`,
        lineHeight: previewLineSpacing,
        marginTop: `${parseFloat(marginTop) + getOffset(verticalAlign, fontSize)}pt`,
        marginBottom: `${parseFloat(marginBottom) - getOffset(verticalAlign, fontSize)}pt`,
        outline: "none",
    };

    return previewStyle;
};

export const generateSideNumberStyle = formState => {
    const { 
        listType,
        suffixDistance,
        sideNumber,
        sideNumberFont,
        customSideNumberFont,
        sideNumberAlignment,
        sideNumberFontSize,
        sideNumberFontColor,
        sideNumberFillingColor,
        sideNumberWidth,
        sideNumberRadius,
    } = formState;

    const previewSideNumberFontColor = getCorrectColor(sideNumberFontColor, "f5f5f5");
    const previewSideNumberFillingColor = getCorrectColor(sideNumberFillingColor, "f5f5f5");

    const sideNumberStyle = (!sideNumber || listType === "unordered") ? {} : {
        fontFamily: getPreviewFont(sideNumberFont, customSideNumberFont),
        textAlign: sideNumberAlignment,
        fontSize: !sideNumberFontSize ? `${DEFAULT_FONT_SIZE}pt` : `${sideNumberFontSize <= 120 ? sideNumberFontSize : 120}pt`,
        color: `#${previewSideNumberFontColor}`,
        backgroundColor: `#${previewSideNumberFillingColor}`,
        minWidth: `${!sideNumberWidth ? 0 : (sideNumberWidth < 150 ? sideNumberWidth : 150)}pt`,
        borderRadius: `${sideNumberRadius || 0}pt`,
        marginRight: `${suffixDistance || 0}cm`,
    };

    return sideNumberStyle;
};