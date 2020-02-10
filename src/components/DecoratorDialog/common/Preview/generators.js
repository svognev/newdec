import { getOffset, getCorrectColor, getPreviewFont } from "../../helpers";
import { alignmentList, DEFAULT_FONT_SIZE, DEFAULT_LINE_SPACING } from "../../constants";

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
        borderLeft,
        borderRight,
        borderTop,
        borderBottom,
        borderType,
        borderColor,
        borderThickness,
        fillingColor,
        fillingConnectToPrevious,
        connectToPrevious,
    } = formState;
    
    const previewFontColor = getCorrectColor(fontColor, "f5f5f5");
    const previewFillingColor = getCorrectColor(fillingColor, "f5f5f5");
    const previewAdditionalFillingColor = fillingConnectToPrevious ? previewFillingColor : "f5f5f5";
    const indentsDifference = (firstRowIndent || 0) - (otherRowsIndent || 0);
    const previewMarginLeft = `${!otherRowsIndent ? 0 : (otherRowsIndent >= 6 ? 6 : otherRowsIndent)}cm`;
    const previewTextIndent = `${!indentsDifference ? 0 : (indentsDifference >= 6 ? 6 : indentsDifference)}cm`;
    const previewLineSpacing = lineSpacing !== "custom" ? lineSpacing : (customLineSpacing || DEFAULT_LINE_SPACING);
    const offset = getOffset(verticalAlign, fontSize);
    const previewMarginTop = `${(!connectToPrevious ? parseFloat(marginTop) : 0) + offset}pt`;
    const previewMarginBottom = `${(!connectToPrevious ? parseFloat(marginBottom) : 0) - offset}pt`;
    const previewBorderLeft = borderLeft ? `${borderThickness}pt ${borderType} #${borderColor}` : "none";
    const previewBorderRight = borderRight ? `${borderThickness}pt ${borderType} #${borderColor}` : "none";
    const previewBorderTop = borderTop ? `${borderThickness}pt ${borderType} #${borderColor}` : "none";
    const previewBorderBottom = borderBottom ? `${borderThickness}pt ${borderType} #${borderColor}` : "none";
    const correctFontSize = fontSize <= 120 ? fontSize : 120;
    const previewStyle = {
        fontSize: !fontSize ? `${DEFAULT_FONT_SIZE}pt` : `${correctFontSize}pt`,
        color: `#${previewFontColor}`,
        fontFamily: getPreviewFont(font, customFont),
        alignItems: alignmentList[alignment],
        textAlign: alignment,
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
        textDecoration: `${underlined ? "underline" : ""}${stroke ? " line-through" : ""}`.trim() || "none",
        verticalAlign,
        textTransform: textTransform !== "small-caps" ? textTransform : "none",
        fontVariant: textTransform === "small-caps" ? textTransform : "normal",
        backgroundColor: `#${previewFillingColor}`,
        backgroundImage:  `linear-gradient(#${previewAdditionalFillingColor}, #${previewAdditionalFillingColor})`,
        borderImage: `linear-gradient(#${previewAdditionalFillingColor}, #${previewAdditionalFillingColor})`,
        marginLeft: previewMarginLeft,
        textIndent: previewTextIndent,
        wordSpacing: `${wordSpacing || 0}pt`,
        lineHeight: previewLineSpacing,
        marginTop: previewMarginTop,
        marginBottom: previewMarginBottom,
        borderLeft: previewBorderLeft,
        borderRight: previewBorderRight,
        borderTop: previewBorderTop,
        borderBottom: previewBorderBottom,
        outline: "none",
        ...borderLeft && { paddingLeft: `${correctFontSize / 3}pt`},
        ...borderRight && { paddingRight: `${correctFontSize / 3}pt`},
        ...borderTop && { paddingTop: `${correctFontSize / 3}pt`},
        ...borderBottom && { paddingBottom: `${correctFontSize / 3}pt`},
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
        sideNumberBold,
        sideNumberItalic,
        sideNumberUnderlined,
        sideNumberLineHeight,
        fontSize,
        fontColor,
        fillingColor,
    } = formState;

    const previewSideNumberFontColor = getCorrectColor(sideNumberFontColor, getCorrectColor(fontColor ,"000"));
    const previewSideNumberFillingColor = getCorrectColor(sideNumberFillingColor, getCorrectColor(fillingColor ,"f5f5f5"));
    const fontSizeNumber = +(sideNumberFontSize || fontSize || DEFAULT_FONT_SIZE);
    const previewFontSize = `${fontSizeNumber <= 120 ? fontSizeNumber : 120}pt`;


    const sideNumberStyle = (!sideNumber || listType === "unordered") ? {} : {
        fontFamily: getPreviewFont(sideNumberFont, customSideNumberFont),
        textAlign: sideNumberAlignment,
        fontSize: previewFontSize,
        color: `#${previewSideNumberFontColor}`,
        backgroundColor: `#${previewSideNumberFillingColor}`,
        minWidth: `${!sideNumberWidth ? 0 : (+sideNumberWidth < 150 ? sideNumberWidth : 150)}pt`,
        borderRadius: `${sideNumberRadius || 0}pt`,
        fontWeight: sideNumberBold ? "bold" : "normal",
        fontStyle: sideNumberItalic ? "italic" : "normal",
        textDecoration: sideNumberUnderlined ? "underline" : "none",
        ...sideNumberLineHeight && { lineHeight: `${sideNumberLineHeight}pt`},
        marginRight: `${suffixDistance || 0}cm`,
    };

    return sideNumberStyle;
};