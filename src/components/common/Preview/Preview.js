import React from 'react';
import "./style.css";

const Preview = ({previewText, changePreviewText, previewStyle}) => {
    console.log(previewText);
    const inputStyle = { ...previewStyle, backgroundColor: "none" };
    const spanStyle = { ...previewStyle, color: previewStyle.backgroundColor || "whitesmoke" };
    return (
        <div className="preview">
            <span className="preview-title">
                Preview
            </span>
            <div className="preview-content">
                <div className="demonstrationElement">
                    <input className="demonstrationElement-input" 
                        value={previewText} 
                        onChange={changePreviewText} 
                        style={inputStyle}
                    />
                    <span className="demonstrationElement-text" style={spanStyle}>
                        {(previewText).replace(/ /g, "-")}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Preview;