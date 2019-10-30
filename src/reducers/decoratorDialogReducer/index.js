import { combineReducers } from "redux";

import isOpenReducer from "./isOpenReducer";
import decoratorFormReducer from "./decoratorFormReducer";
import hasValidationErrorReducer from "./hasValidationErrorReducer";
import isEditModeReducer from "./isEditModeReducer";
import openedTabReducer from "./openedTabReducer";

const decoratorDialogReducer = combineReducers({
    isOpen: isOpenReducer,
    openedTab: openedTabReducer,
    validationError: hasValidationErrorReducer,
    isEditMode: isEditModeReducer,
    form: decoratorFormReducer,
});

export default decoratorDialogReducer;