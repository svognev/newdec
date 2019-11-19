import React from "react";
import { connect } from "react-redux";

import NativeSelect from "@material-ui/core/NativeSelect";

import CustomInputShort from "../common/CustomInputShort";
import { setValue } from "../actions";

const TocSection = ({ tocIndentation, changeTocIndentation }) => {
    return (
        <div className="dialogGrid dialogGrid_2cols">
            <span>ToC indentation</span>
            <div>
                <NativeSelect
                    value={tocIndentation}
                    onChange={changeTocIndentation} 
                    input={ <CustomInputShort /> }
                >
                    <option value="">...</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </NativeSelect>
            </div>                    
        </div>
    );
};

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        tocIndentation: form.tocIndentation,
    };
};

const mapDispatchToProps = dispatch => {
    return {       
        changeTocIndentation: setValue(dispatch)("tocIndentation"),
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(TocSection));