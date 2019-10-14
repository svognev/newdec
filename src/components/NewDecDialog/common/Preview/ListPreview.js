import React from "react";
import "./style.css";

const ListPreview = (props) => {
    const { 
        listPreviewStyle, 
        listChars, 
        prefix, 
        suffix, 
        suffixDistance, 
        sideNumberStyle,
    } = props;

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
                        <div>
                            <span 
                                className="listItemBeginning"
                                style={listItemBeginingStyle}
                            >{`${listItemsBeginnings[0]}`}</span><span>The first list item</span>
                        </div>
                        <div>
                            <span 
                                className="listItemBeginning"
                                style={listItemBeginingStyle}
                            >{`${listItemsBeginnings[1]}`}</span><span>The second list item</span>
                        </div>
                        <div>
                            <span 
                                className="listItemBeginning"
                                style={listItemBeginingStyle}
                            >{`${listItemsBeginnings[2]}`}</span><span>The third list item</span>
                        </div>
                        <div>
                            <span 
                                className="listItemBeginning"
                                style={listItemBeginingStyle}
                            >{`${listItemsBeginnings[3]}`}</span><span>The fourth list item</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListPreview;