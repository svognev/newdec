import React from 'react';
import "./style.css";
import ContentEditable from "components/common/ContentEditable";

const Preview = ({previewText, changePreviewText, previewStyle}) => {
    console.log(previewStyle);
    return (
        <div className="preview">
            <span className="preview-title">
                Preview
            </span>
            <div className="preview-content">
                <div className="demonstrationElement">
                    <ContentEditable
                        className="demonstrationElement-text"
                        onChange={(e) => {
                            console.log(e.target.value);
                            changePreviewText(e);
                        }} 
                        html={previewText}
                        style={{ ...previewStyle, outline: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Preview;