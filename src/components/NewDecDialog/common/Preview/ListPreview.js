import React from "react";
import { connect } from "react-redux";

import { generatePreviewStyle, generateSideNumberStyle } from "./generators";
import { getListChars } from "../../helpers"

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
        numberingStyle,
        sideNumber,
    } = props;

    const isOrderedList = listType === "ordered";

    const listChars = getListChars({ 
        isOrderedList, 
        numberingStyle, 
        listItem, 
        unicodeChar 
    });

    const listItemBeginnings = listChars.map(listChar => {
        return (`${prefix}${listChar}${suffix}`);
    });

    const previewStyle = generatePreviewStyle(formState);
    const sideNumberStyle = isOrderedList && sideNumber ? generateSideNumberStyle(formState) : {};
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
                        className={"demonstrationElement"+"-text"}
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
        suffixDistance: form.suffixDistance,
        listType: form.listType,
        listItem: form.listItem, 
        unicodeChar: form.unicodeChar,
        numberingStyle: form.numberingStyle,
        sideNumber: form.sideNumber,
    };
};

export default (connect(mapStateToProps)(ListPreview));