import React from "react";

import isFormValid from "../helpers/isFormValid";

const withDialogControl = Wrapped => {
    return class extends React.Component {

        render() {
            const { closeDialog, clearForm, formState, updateForm, ...otherProps } = this.props;

            const onClose = () => {
                closeDialog();
                clearForm();
            };

            const onSaveButtonClick = () => {
                if (!isFormValid(formState)) {
                    console.log(0);
                    updateForm({ validationError: true });
                } else {
                    console.log(1);  //saveForm(formState);
                    onClose();
                }
            }
            
            return (
                <Wrapped { ...{ onClose, onSaveButtonClick, clearForm, updateForm, formState, ...otherProps } } />
            );
        }
    }
};

export default withDialogControl;