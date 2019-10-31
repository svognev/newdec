import { SAVE_DEC_FORM, CLEAR_SAVED_DEC_FORM } from "../actions";

const initialState = null;

export const savedFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DEC_FORM:
            return action.payload;
        case CLEAR_SAVED_DEC_FORM:
            return initialState;
        default:
            return state;
    }
};

export default savedFormReducer;