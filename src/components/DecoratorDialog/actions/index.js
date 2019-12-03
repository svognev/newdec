import { getShortCutUtils } from "../helpers";

export const UPDATE_DEC_FORM = "UPDATE_DEC_FORM";
export const CLEAR_DEC_FORM = "CLEAR_DEC_FORM";
export const SHOW_DEC_DIALOG = "SHOW_DEC_DIALOG";
export const HIDE_DEC_DIALOG = "HIDE_DEC_DIALOG";
export const SWITCH_DEC_DIALOG_TAB = "SWITCH_DEC_DIALOG_TAB";
export const RESET_DEC_DIALOG_TAB = "RESET_DEC_DIALOG_TAB";
export const SWITCH_ON_DEC_DIALOG_EDIT_MODE = "SWITCH_ON_DEC_DIALOG_EDIT_MOD";
export const SWITCH_OFF_DEC_DIALOG_EDIT_MODE = "SWITCH_OFF_DEC_DIALOG_EDIT_MODE";
export const UPDATE_VALIDATION_ERROR = "UPDATE_VALIDATION_ERROR";
export const REMOVE_VALIDATION_ERROR = "REMOVE_VALIDATION_ERROR";

export const updateDecoratorForm = payload => {
    return {
        type: UPDATE_DEC_FORM,
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

export const updateValidationError = payload => {
    return {
        type: UPDATE_VALIDATION_ERROR,
        payload,
    };
};

export const removeValidationError = () => {
    return {
        type: REMOVE_VALIDATION_ERROR,
    };
};

export const openDialog = dispatch => dec => {
    if (dec) {
        dispatch(updateDecoratorForm(dec));
        dispatch(switchOnDecDialogEditMode());
    } 
    dispatch(showDecoratorDialog());
};

export const closeDialog = dispatch => () => {
    dispatch(hideDecoratorDialog());
    dispatch(switchOffDecDialogEditMode());
    dispatch(removeValidationError());
    dispatch(resetDecDialogTab());
    dispatch(clearDecoratorForm());
};

export const setValue = dispatch => propName => (e, secondArg = "") => {
    const newValue = (e && e.target.value !== "" && e.target.value !== undefined) ? e.target.value : secondArg;
    dispatch(updateDecoratorForm({
        [propName]: newValue,
    }));
};

export const toggleValue = dispatch => propName => (e, secondArg) => {
    const newValue = e ? e.target.checked : secondArg;
    dispatch(updateDecoratorForm({
        [propName]: newValue,
    }));
};

export const setBullet = dispatch => propName => (e, secondArg) => {
    const input = e ? (e.target.value || "") : (secondArg || "");

    const newBullet = input.length > 1 ? input[input.length - 1] : input;
    dispatch(updateDecoratorForm({
        [propName]: newBullet,
    }));
    return newBullet;
};

export const setColor = dispatch => propName => (e, secondArg) => {
    const input = e ? (e.target.value || "") : (secondArg || "");
    
    const filteredInput = input.replace("#", "").trim().match(/[0-9a-f]+/i) 
                          ? input.replace("#", "").trim().match(/[0-9a-f]+/i)[0].slice(0, 6)
                          : "" ;
    
    dispatch(updateDecoratorForm({
        [propName]: filteredInput,
    }));
    return filteredInput;
};

export const setNumber = dispatch => propName => (e, secondArg) => {
    let input = e ? (e.target.value || "") : (secondArg || "");

    const filteredInput = input.replace(",", ".").trim().match(/[0-9]+/i) 
                          ? input.replace(",", ".").trim().match(/\d+[.,]?\d*/)[0]
                          : "" ;

    dispatch(updateDecoratorForm({
        [propName]: filteredInput,
    }));
    return filteredInput;
};

export const setShortCut = dispatch => (valuePropName, viewPropName) => e => {
    const systemName = valuePropName.search(/mac/gi) !== -1 ? "MacOS" : "Windows";
    const shortCut = getShortCutUtils(systemName).convertEventToShortCut(e);
    if (shortCut && shortCut.deleteKey) {
        setTimeout(() => {
            dispatch(updateDecoratorForm({ 
                [valuePropName]: "" 
            }));
            dispatch(updateDecoratorForm({ 
                [viewPropName]: "" 
            }));
        }, 100);
    } else if (shortCut) {
        dispatch(updateDecoratorForm({ 
            [valuePropName]: shortCut.value 
        }));
        dispatch(updateDecoratorForm({ 
            [viewPropName]: shortCut.stringValue 
        }));
    }
};