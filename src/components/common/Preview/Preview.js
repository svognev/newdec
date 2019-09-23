import React from 'react';
import "./style.css";
import ContentEditable from "components/common/ContentEditable";
import { getOffset } from "utils.js"

const Preview = ({previewText, changePreviewText, previewStyle}) => {
    const { verticalAlign, fontSize } = previewStyle;
    console.log(parseFloat(previewStyle.marginTop));
    const editableContentStyle = {
        ...previewStyle, 
        outline: "none",
        marginTop: `${parseFloat(previewStyle.marginTop) + getOffset(verticalAlign, fontSize)}pt`,
        marginBottom: `${parseFloat(previewStyle.marginBottom) - getOffset(verticalAlign, fontSize)}pt`,
    };

    console.log(editableContentStyle);

    const demonstrationElementClassName = "demonstrationElement";
    const selectAllPreviewContent = e => {
        if (e.target.className === demonstrationElementClassName) {
            window.getSelection().selectAllChildren(e.target.children[0]);
        }
    };

    return (
        <div className="preview">
            <span className="preview-title">Preview</span>
            <div className="preview-content" onClick={selectAllPreviewContent}>
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