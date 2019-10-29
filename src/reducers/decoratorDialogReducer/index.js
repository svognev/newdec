import { combineReducers } from "redux";

import isOpenReducer from "./isOpenReducer";
import decoratorFormReducer from "./decoratorFormReducer";

const decoratorDialogReducer = combineReducers({
    isOpen: isOpenReducer,
    form: decoratorFormReducer,
});

export default decoratorDialogReducer;