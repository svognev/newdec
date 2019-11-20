import React from "react";

const LabelWithAsterisk = ({ children }) => {
    return (
        <div className="labelWithAsterisk">
            <div className="labelWithAsterisk-labelBox">
                <span>{children}</span>
            </div>
            <div className="labelWithAsterisk-asteriskBox">
                <span className="labelWithAsterisk-asteriskMark">*</span>
            </div>
        </div>
    );
};

export default LabelWithAsterisk;