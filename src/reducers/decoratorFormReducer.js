import { CHANGE_DECORATOR_FORM, CLEAR_DECORATOR_FORM } from "../components/NewDecDialog/actions";
import initialState from "./initialState";

const decoratorFormReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case CHANGE_DECORATOR_FORM:
            return { ...state, ...action.payload };
        case CLEAR_DECORATOR_FORM:
            return initialState;
        default:
            return state;
    }
};

export default decoratorFormReducer;