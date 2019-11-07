import { 
    SWITCH_DEC_DIALOG_TAB,
    RESET_DEC_DIALOG_TAB, 
} from "../../components/NewDecDialog/actions";

const initialState = 5;

const openedTabReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_DEC_DIALOG_TAB:
            return action.payload;
        case RESET_DEC_DIALOG_TAB:
            return initialState;
        default:
            return state;
    }
};

export default openedTabReducer;