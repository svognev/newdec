import { 
    UPDATE_VALIDATION_ERROR, 
    REMOVE_VALIDATION_ERROR, 
} from "../../components/DecoratorDialog/actions";

const initialErrorState = {};

const validationErrorReducer = (state = initialErrorState, action) => {
    switch (action.type) {
        case UPDATE_VALIDATION_ERROR:
            return action.payload;
        case REMOVE_VALIDATION_ERROR:
            return initialErrorState;
        default:
            return state;
    }
};

export default validationErrorReducer;