import React from "react";
import "./style.css";
import { getOffset } from "utils.js";

const ListPreview = (props) => {
    const { 
        listPreviewStyle, 
        listChars, 
        prefix, 
        suffix, 
        suffixDistance, 
        sideNumberStyle,
    } = props;
    console.log(1);

    const demonstrationElementClassName = "demonstrationElement";
    const listItemsBeginnings = listChars.map(listChar => {
        return (`${prefix}${listChar}${suffix}`);
    });
    const listItemBeginingStyle = {
        marginRight: `${suffixDistance || 0}cm`,
        ...sideNumberStyle,
    };

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
                            <span><span 
                                className="listItemBeginning"
                                style={listItemBeginingStyle}
                            >{`${listItemsBeginnings[0]}`}</span> The first list item</span>
                            <br /><br />
                            <span><span 
                                className="listItemBeginning"
                                style={listItemBeginingStyle}
                            >{`${listItemsBeginnings[1]}`}</span> The second list item</span>
                            <br /><br />
                            <span><span 
                                className="listItemBeginning"
                                style={listItemBeginingStyle}
                            >{`${listItemsBeginnings[2]}`}</span> The third list item</span>
                            <br /><br />
                            <span><span 
                                className="listItemBeginning"
                                style={listItemBeginingStyle}
                            >{`${listItemsBeginnings[3]}`}</span> The fourth list item</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListPreview;