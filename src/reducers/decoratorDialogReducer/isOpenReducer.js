import { SHOW_NEW_DECORATOR_DIALOG, HIDE_NEW_DECORATOR_DIALOG } from "../../components/NewDecDialog/actions";

const isOpenReducer = (state = true, action) => {
    switch (action.type) {
        case SHOW_NEW_DECORATOR_DIALOG:
            return true;
        case HIDE_NEW_DECORATOR_DIALOG:
            return false;
        default:
            return state;
    }
};

export default isOpenReducer;