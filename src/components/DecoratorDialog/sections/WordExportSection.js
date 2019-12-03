import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

import LabelWithAsterisk from "../common/LabelWithAsterisk";
import { setValue, toggleValue, updateValidationError } from "../actions";

const WordExportSection = props => {
    const { 
        validationErrorInSection, updateValidationError,
        wordStyleName, changeWordStyleName,
        softReturn, changeSoftReturn,
    } = props;

    if (validationErrorInSection && wordStyleName) {
        updateValidationError({ wordExportSection: false });
    }

    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
            <LabelWithAsterisk>Style name in WORD</LabelWithAsterisk>
            <TextField 
                value={wordStyleName}
                onChange={changeWordStyleName}
                error={validationErrorInSection && !wordStyleName}
                autoFocus={!wordStyleName}
                variant="outlined" 
                margin="dense" 
            />
            
            <span>Soft return</span>
            <div className="unlabeledCheckbox">
                <Checkbox 
                    checked={softReturn}
                    onChange={changeSoftReturn}
                    color="primary" 
                />
            </div>
        </div>
    );
};

const mapStateToProps = ({ decoratorDialog: { form, validationError }}) => {
    return { 
        validationErrorInSection: validationError.wordExportSection,
        formState: form,
        wordStyleName: form.wordStyleName, 
        softReturn: form.softReturn,
    };
};

const mapDispatchToProps = dispatch => {
    return {       
        updateValidationError: payload => dispatch(updateValidationError(payload)),
        changeWordStyleName: setValue(dispatch)("wordStyleName"),
        changeSoftReturn: toggleValue(dispatch)("softReturn"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(WordExportSection));