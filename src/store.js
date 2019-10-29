import { createStore } from "redux";
import decoratorDialogReducer from "./reducers/decoratorDialogReducer";

export default createStore(
    decoratorDialogReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);