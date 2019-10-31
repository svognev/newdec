export const SAVE_DEC_FORM = "SAVE_DEC_FORM";
export const CLEAR_SAVED_DEC_FORM = "CLEAR_SAVED_DEC_FORM";

export const saveDecoratorForm = payload => {
    return {
        type: SAVE_DEC_FORM,
        payload,
    };
};

export const clearSavedDecoratorForm = () => {
    return {
        type: CLEAR_SAVED_DEC_FORM,
    };
};