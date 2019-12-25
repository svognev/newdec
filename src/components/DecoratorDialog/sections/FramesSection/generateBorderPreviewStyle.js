import { getCorrectColor } from "../../helpers";

const generateBorderPreviewStyle = formState => {
    const { 
        borderLeft,
        borderRight,
        borderTop,
        borderBottom,
        borderColor,
        borderThickness,
        borderType,
    } = formState;

    const correctColor = getCorrectColor(borderColor);
    const previewBorderWidth = borderThickness && !isNaN(parseFloat(borderThickness))
                                ? `${borderThickness <= 15 ? borderThickness : 15}pt`
                                : "0";

    const previewStyle = {
        borderLeft: borderLeft ? `${previewBorderWidth} ${borderType} #${correctColor}` : "none",
        marginLeft: borderLeft ? "0" : previewBorderWidth, 
        borderRight: borderRight ? `${previewBorderWidth} ${borderType} #${correctColor}` : "none",
        marginRight: borderRight ? "0" : previewBorderWidth, 
        borderTop: borderTop ? `${previewBorderWidth} ${borderType} #${correctColor}` : "none",
        marginTop: borderTop ? "0" : previewBorderWidth, 
        borderBottom: borderBottom ? `${previewBorderWidth} ${borderType} #${correctColor}` : "none",
        marginBottom: borderBottom ? "0" : previewBorderWidth, 
    };

    return previewStyle;
};

export default generateBorderPreviewStyle;