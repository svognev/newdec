export const CHANGE_DEC_FORM = "CHANGE_DEC_FORM";
export const CLEAR_DEC_FORM = "CLEAR_DEC_FORM";
export const SHOW_DEC_DIALOG = "SHOW_DEC_DIALOG";
export const HIDE_DEC_DIALOG = "HIDE_DEC_DIALOG";
export const SWITCH_DEC_DIALOG_TAB = "SWITCH_DEC_DIALOG_TAB";
export const RESET_DEC_DIALOG_TAB = "RESET_DEC_DIALOG_TAB";
export const SWITCH_ON_DEC_DIALOG_EDIT_MODE = "SWITCH_ON_DEC_DIALOG_EDIT_MOD";
export const SWITCH_OFF_DEC_DIALOG_EDIT_MODE = "SWITCH_OFF_DEC_DIALOG_EDIT_MODE";
export const SWITCH_ON_DEC_DIALOG_VALIDATION_ERROR_MODE = "SWITCH_ON_DEC_DIALOG_VALIDATION_ERROR_MODE";
export const SWITCH_OFF_DEC_DIALOG_VALIDATION_ERROR_MODE = "SWITCH_OFF_DEC_DIALOG_VALIDATION_ERROR_MODE";

export const changeDecoratorForm = payload => {
    return {
        type: CHANGE_DEC_FORM,
        payload,
    };
};

export const clearDecoratorForm = payload => {
    return {
        type: CLEAR_DEC_FORM,
        payload,
    };
};

export const showDecoratorDialog = () => {
    return {
        type: SHOW_DEC_DIALOG,
    };
};

export const hideDecoratorDialog = () => {
    return {
        type: HIDE_DEC_DIALOG,
    };
};

export const switchDecDialogTab = payload => {
    return {
        type: SWITCH_DEC_DIALOG_TAB,
        payload,
    };
};

export const resetDecDialogTab = () => {
    return {
        type: RESET_DEC_DIALOG_TAB,
    };
}

export const switchOnDecDialogEditMode = () => {
    return {
        type: SWITCH_ON_DEC_DIALOG_EDIT_MODE,
    };
};

export const switchOffDecDialogEditMode = () => {
    return {
        type: SWITCH_OFF_DEC_DIALOG_EDIT_MODE,
    };
};

export const switchOnDecDialogValidationErrorMode = () => {
    return {
        type: SWITCH_ON_DEC_DIALOG_VALIDATION_ERROR_MODE,
    };
};

export const switchOffDecDialogValidationErrorMode = () => {
    return {
        type: SWITCH_OFF_DEC_DIALOG_VALIDATION_ERROR_MODE,
    };
};

export const openDialog = dispatch => dec => {
    if (dec) {
        dispatch(changeDecoratorForm(dec));
        dispatch(switchOnDecDialogEditMode());
    } 
    dispatch(showDecoratorDialog());
};

export const closeDialog = dispatch => () => {
    dispatch(hideDecoratorDialog());
    dispatch(switchOffDecDialogEditMode());
    dispatch(switchOffDecDialogValidationErrorMode());
    dispatch(resetDecDialogTab());
    dispatch(clearDecoratorForm());
};