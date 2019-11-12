import { 
    UPDATE_VALIDATION_ERROR, 
    REMOVE_VALIDATION_ERROR, 
} from "../../components/NewDecDialog/actions";

import { tabsErrorInitialState } from "../../components/NewDecDialog/constants";

const validationErrorReducer = (state = tabsErrorInitialState, action) => {
    switch (action.type) {
        case UPDATE_VALIDATION_ERROR:
            return { ...state, ...action.payload };
        case REMOVE_VALIDATION_ERROR:
            return tabsErrorInitialState;
        default:
            return state;
    }
};

export default validationErrorReducer;