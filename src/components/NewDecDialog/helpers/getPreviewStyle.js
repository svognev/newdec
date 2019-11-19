import { getCorrectColor } from "./helpers";

export const getBorderPreviewStyle = formState => {
    const { 
        leftBorder,
        rightBorder,
        topBorder,
        bottomBorder,
        borderColor,
        borderThickness,
        borderType,
    } = formState;

    const correctColor = getCorrectColor(borderColor);
    const previewBorderWidth = borderThickness && !isNaN(parseFloat(borderThickness))
                                ? `${borderThickness <= 15 ? borderThickness : 15}pt`
                                : "0";

    const previewStyle = {
        borderLeft: leftBorder ? `${previewBorderWidth} ${borderType} #${correctColor}` : "none",
        marginLeft: leftBorder ? "0" : previewBorderWidth, 
        borderRight: rightBorder ? `${previewBorderWidth} ${borderType} #${correctColor}` : "none",
        marginRight: rightBorder ? "0" : previewBorderWidth, 
        borderTop: topBorder ? `${previewBorderWidth} ${borderType} #${correctColor}` : "none",
        marginTop: topBorder ? "0" : previewBorderWidth, 
        borderBottom: bottomBorder ? `${previewBorderWidth} ${borderType} #${correctColor}` : "none",
        marginBottom: bottomBorder ? "0" : previewBorderWidth, 
    };

    return previewStyle;
}