import { 
    SWITCH_ON_DEC_DIALOG_VALIDATION_ERROR_MODE, 
    SWITCH_OFF_DEC_DIALOG_VALIDATION_ERROR_MODE, 
} from "../../components/NewDecDialog/actions";

const hasValidationErrorReducer = (state = false, action) => {
    switch (action.type) {
        case SWITCH_ON_DEC_DIALOG_VALIDATION_ERROR_MODE:
            return true;
        case SWITCH_OFF_DEC_DIALOG_VALIDATION_ERROR_MODE:
            return false;
        default:
            return state;
    }
};

export default hasValidationErrorReducer;