import React from "react";

import isFormValid from "../helpers/isFormValid";
import DecDataParser from "../helpers/DecDataParser";
import { fillMissedFields } from "../helpers";

const withDialogControl = Wrapped => {
    return class extends React.Component {

        render() {
            const { 
                closeDialog, 
                clearForm, 
                formState, 
                updateForm, 
                switchOnErrorMode, 
                saveForm,
                ...otherProps 
            } = this.props;

            const onClose = () => {
                closeDialog();
                clearForm();
            };

            const onSaveButtonClick = () => {
                if (!isFormValid(formState)) {
                    console.log(0);
                    switchOnErrorMode();
                } else {
                    console.log(1);
                    const formToSave = DecDataParser.parseToSend(fillMissedFields(formState));
                    saveForm(formToSave);
                    onClose();
                }
            };
            
            return (
                <Wrapped 
                    { ...{ 
                    onClose, 
                    onSaveButtonClick, 
                    clearForm, 
                    updateForm, 
                    formState, 
                    switchOnErrorMode, 
                    ...otherProps 
                    } } 
                />
            );
        }
    }
};

export default withDialogControl;