import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

import LabelWithAsterisk from "../common/LabelWithAsterisk";
import { getWordExportSectionErrorState } from "../helpers";
import { setValue, toggleValue, updateValidationError } from "../actions";

const WordExportSection = props => {
    const { 
        validationError,
        formState,
        wordStyleName, changeWordStyleName,
        softReturn, changeSoftReturn,
    } = props;

    if (validationError && !getWordExportSectionErrorState(formState)) {
        this.props.updateValidationError({ wordExportSection: false });
    }

    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
            <LabelWithAsterisk>Style name in WORD</LabelWithAsterisk>
            <TextField 
                value={wordStyleName}
                onChange={changeWordStyleName}
                error={validationError && !wordStyleName}
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
        formState: form,
        wordStyleName: form.wordStyleName, 
        softReturn: form.softReturn,
        validationError: validationError.wordExportSection,
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