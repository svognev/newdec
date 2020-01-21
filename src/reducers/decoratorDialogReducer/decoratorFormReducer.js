import { UPDATE_DEC_FORM, CLEAR_DEC_FORM } from "../../components/DecoratorDialog/actions";
import { sampleText, initialFormState } from "../../components/DecoratorDialog/constants";

const initialState = { 
    previewText: sampleText,
    ...initialFormState,
};

const decoratorFormReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case UPDATE_DEC_FORM:
            return { ...state, ...action.payload };
        case CLEAR_DEC_FORM:
            return initialState;
        default:
            return state;
    }
};

export default decoratorFormReducer;