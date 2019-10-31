import { combineReducers } from "redux";

import decoratorDialogReducer from "./decoratorDialogReducer";
import savedFormReducer from "./savedFormReducer";

const rootReducer = combineReducers({
    decoratorDialog: decoratorDialogReducer,
    savedForm: savedFormReducer,
});

export default rootReducer;