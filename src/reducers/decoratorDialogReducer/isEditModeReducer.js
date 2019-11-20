import { 
    SWITCH_ON_DEC_DIALOG_EDIT_MODE, 
    SWITCH_OFF_DEC_DIALOG_EDIT_MODE, 
} from "../../components/DecoratorDialog/actions";

const isEditModeReducer = (state = false, action) => {
    switch (action.type) {
        case SWITCH_ON_DEC_DIALOG_EDIT_MODE:
            return true;
        case SWITCH_OFF_DEC_DIALOG_EDIT_MODE:
            return false;
        default:
            return state;
    }
};

export default isEditModeReducer;