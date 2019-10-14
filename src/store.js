import { createStore } from "redux";
import decoratorFormReducer from "./reducers/decoratorFormReducer";

export default createStore(
    decoratorFormReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);