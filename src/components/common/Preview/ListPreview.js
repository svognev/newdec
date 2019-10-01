import React from 'react';
import "./style.css";
import { getOffset } from "utils.js";
import { numberingSets } from "constants.js";

const ListPreview = ({ listPreviewStyle, numberingStyle, prefix, suffix, }) => {

    console.log(1);

    const numberingChars = numberingSets[numberingStyle];
    const demonstrationElementClassName = "demonstrationElement";

    return (
        <div className="preview preview_list">
            <span className="preview-title">Preview</span>
            <div className="preview-content">
                <div className={demonstrationElementClassName}>
                    <div
                        className={`${demonstrationElementClassName}-text`}
                        style={listPreviewStyle}
                    >
                        <p>
                            <span>{`${numberingChars[0]} The first item`}</span>
                            <br />
                            <span>{`${numberingChars[1]} The second item`}</span>
                            <br />
                            <span>{`${numberingChars[2]} The third item`}</span>
                            <br />
                            <span>{`${numberingChars[3]} The fourth item`}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListPreview;