import React from 'react';
import "./style.css";

const Preview = ({previewText, changePreviewText, previewStyle}) => {
    return (
        <div className="preview">
            <span className="preview-title">
                Preview
            </span>
            <div className="preview-content">
                <div className="demonstrationElement">
                    
                </div>
            </div>
        </div>
    );
};

export default Preview;