import React from 'react';
import "./style.css";
import ContentEditable from "components/common/ContentEditable";
import { getOffset, selectAllEditableContent } from "utils"

const Preview = ({previewText, changePreviewText, previewStyle}) => {
    const { verticalAlign, fontSize } = previewStyle;

    const editableContentStyle = {
        ...previewStyle, 
        outline: "none",
        marginTop: `${parseFloat(previewStyle.marginTop) + getOffset(verticalAlign, fontSize)}pt`,
        marginBottom: `${parseFloat(previewStyle.marginBottom) - getOffset(verticalAlign, fontSize)}pt`,
    };

    const demonstrationElementClassName = "demonstrationElement";

    return (
        <div className="preview">
            <span className="preview-title">Preview</span>
            <div 
                className="preview-content preview-content_withPointer" 
                onClick={selectAllEditableContent(demonstrationElementClassName)}
            >
                <div className={demonstrationElementClassName}>
                    <ContentEditable
                        className={`${demonstrationElementClassName}-text`}
                        onChange={changePreviewText} 
                        html={previewText}
                        style={editableContentStyle}
                    />
                </div>
            </div>
        </div>
    );
};

export default Preview;