import React from "react";
import { connect } from "react-redux";

import Handlers from "../Handlers";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import LabelWithAsterisk from "../common/LabelWithAsterisk";
import { getWordExportSectionErrorState } from "../helpers";
import { changeDecoratorForm, updateValidationError } from "../actions";

class WordExportSection extends React.Component {
    handlers = Handlers(this.props.updateForm);
    setStateProperty = this.handlers.setStateProperty;
    toggleStateProperty = this.handlers.toggleStateProperty;

    changeWordStyleName = this.setStateProperty("wordStyleName");
    changeSoftReturn = this.toggleStateProperty("softReturn");

    componentDidUpdate() {
        if (this.props.validationError && !getWordExportSectionErrorState(this.props.formState)) {
            this.props.updateValidationError({ wordExportSection: false });
        }
    }

    render() {
        const { wordStyleName, softReturn, validationError } = this.props;
        console.log(2);

        return (
            <div className="dialogGrid dialogGrid_2cols">
                <LabelWithAsterisk>Style name in WORD</LabelWithAsterisk>
                <TextField 
                    value={wordStyleName}
                    onChange={this.changeWordStyleName}
                    error={validationError && !wordStyleName}
                    autoFocus={validationError && !wordStyleName}
                    variant="outlined" 
                    margin="dense" 
                />
                
                <span>Soft return</span>
                <div>
                    <Checkbox 
                        checked={softReturn}
                        onChange={this.changeSoftReturn}
                        color="primary" 
                    />
                </div>
            </div>
        );
    }
}

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
        updateForm: payload => dispatch(changeDecoratorForm(payload)),
        updateValidationError: payload => dispatch(updateValidationError(payload)),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(WordExportSection));