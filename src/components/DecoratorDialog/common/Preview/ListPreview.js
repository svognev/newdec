import React from "react";
import { connect } from "react-redux";

import { generatePreviewStyle, generateSideNumberStyle } from "./generators";
import { getListChars } from "../../helpers";
import { bulletNamesMap } from "../../constants";

import "./style.css";

const ListPreview = props => {
    const { 
        formState,
        prefix, 
        suffix, 
        suffixDistance,
        listType,
        listItem, 
        unicodeChar,
        listItemString,
        numberingStyle,
        sideNumber,
        patternMode,
    } = props;

    const isOrderedList = listType === "ordered";

    let currentBullet;

    if (listItem === "custom") {
        currentBullet = unicodeChar;
    } else if (listItem === "string") {
        currentBullet = listItemString;
    } else {
        currentBullet = bulletNamesMap.get(listItem);
    }

    const listChars = getListChars(isOrderedList, numberingStyle, currentBullet);

    let listItemBeginnings = (listType === "ordered" && patternMode) ? listChars : listChars.map(li => (`${prefix}${li}${suffix}`));

    const previewStyle = generatePreviewStyle(formState);
    const isSideNumber = isOrderedList && sideNumber;
    const sideNumberStyle = isSideNumber ? generateSideNumberStyle(formState) : {};
    const listItemBeginningStyle = {
        marginRight: `${suffixDistance || 0}cm`,
        ...sideNumberStyle,
    };

    return (
        <div className="preview preview_list">
            <span className="preview-title">Preview</span>
            <div className="preview-content">
                <div className="demonstrationElement">
                    <div
                        className="demonstrationElement-text"
                        style={previewStyle}
                    >
                        <div>
                            <span 
                                className="listItemBeginning"
                                style={listItemBeginningStyle}
                            >{`${listItemBeginnings[0]}`}</span><span>The first list item</span>
                        </div>
                        <div>
                            <span 
                                className="listItemBeginning"
                                style={listItemBeginningStyle}
                            >{`${listItemBeginnings[1]}`}</span><span>The second list item</span>
                        </div>
                        <div>
                            <span 
                                className="listItemBeginning"
                                style={listItemBeginningStyle}
                            >{`${listItemBeginnings[2]}`}</span><span>The third list item</span>
                        </div>
                        { isSideNumber && (
                            <>
                                <div>
                                    <span 
                                        className="listItemBeginning"
                                        style={listItemBeginningStyle}
                                    >{`${listItemBeginnings[3]}`}</span><span>One more list item</span>
                                </div>
                                <div>
                                    <span 
                                        className="listItemBeginning"
                                        style={listItemBeginningStyle}
                                    >{`${listItemBeginnings[4]}`}</span><span>And one more</span>
                                </div>
                            </>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        formState: form,
        previewText: form.previewText,
        prefix: form.prefix, 
        suffix: form.suffix,
        patternMode: form.patternMode,
        suffixDistance: form.suffixDistance,
        listType: form.listType,
        listItem: form.listItem, 
        unicodeChar: form.unicodeChar,
        numberingStyle: form.numberingStyle,
        sideNumber: form.sideNumber,
        listItemString: form.listItemString,
    };
};

export default (connect(mapStateToProps)(ListPreview));