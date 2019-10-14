export const CHANGE_DECORATOR_FORM = "CHANGE_DECORATOR_FORM";
export const CLEAR_DECORATOR_FORM = "CLEAR_DECORATOR_FORM";

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