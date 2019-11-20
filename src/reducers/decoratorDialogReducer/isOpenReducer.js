import { SHOW_DEC_DIALOG, HIDE_DEC_DIALOG } from "../../components/DecoratorDialog/actions";

const isOpenReducer = (state = true, action) => {
    switch (action.type) {
        case SHOW_DEC_DIALOG:
            return true;
        case HIDE_DEC_DIALOG:
            return false;
        default:
            return state;
    }
};

export default isOpenReducer;