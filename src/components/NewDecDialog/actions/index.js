export const CHANGE_DECORATOR_FORM = "CHANGE_DECORATOR_FORM";
export const CLEAR_DECORATOR_FORM = "CLEAR_DECORATOR_FORM";
export const SHOW_NEW_DECORATOR_DIALOG = "SHOW_NEW_DECORATOR_DIALOG";
export const HIDE_NEW_DECORATOR_DIALOG = "HIDE_NEW_DECORATOR_DIALOG";

export const changeDecoratorForm = payload => {
    return {
        type: CHANGE_DECORATOR_FORM,
        payload,
    };
};

export const clearDecoratorForm = payload => {
    return {
        type: CLEAR_DECORATOR_FORM,
        payload,
    };
};

export const showNewDecoratorDialog = () => {
    return {
        type: SHOW_NEW_DECORATOR_DIALOG,
    };
};

export const hideNewDecoratorDialog = () => {
    return {
        type: HIDE_NEW_DECORATOR_DIALOG,
    };
};

export const openDialog = dispatch => dec => {
    dec && dispatch(changeDecoratorForm(dec));
    dispatch(showNewDecoratorDialog());
};

export const closeDialog = dispatch => () => {
    dispatch(clearDecoratorForm());
    dispatch(hideNewDecoratorDialog());
};