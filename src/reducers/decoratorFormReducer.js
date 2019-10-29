import { CHANGE_DECORATOR_FORM, CLEAR_DECORATOR_FORM } from "../components/NewDecDialog/actions";
import getInitialState from "../components/NewDecDialog/getInitialState";

const decoratorFormReducer = (state = getInitialState(), action) =>  {
    switch (action.type) {
        case CHANGE_DECORATOR_FORM:
            return { ...state, ...action.payload };
        case CLEAR_DECORATOR_FORM:
            return getInitialState();
        default:
            return state;
    }
};

export const getDecoratorFormReducer = initial => (state = initial, action) => decoratorFormReducer(state, action);

export default decoratorFormReducer;