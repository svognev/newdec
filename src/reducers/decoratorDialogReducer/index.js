import { combineReducers } from "redux";

import isOpenReducer from "./isOpenReducer";
import decoratorFormReducer from "./decoratorFormReducer";
import validationErrorReducer from "./validationErrorReducer";
import isEditModeReducer from "./isEditModeReducer";
import openedTabReducer from "./openedTabReducer";

const decoratorDialogReducer = combineReducers({
    isOpen: isOpenReducer,
    openedTab: openedTabReducer,
    validationError: validationErrorReducer,
    isEditMode: isEditModeReducer,
    form: decoratorFormReducer,
});

export default decoratorDialogReducer;