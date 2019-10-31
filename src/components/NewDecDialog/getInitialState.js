import { sampleText, emptyDecFormState } from "./constants";


const getInitialState = (currentDecFormState = {}) => {
    return { 
        previewText: sampleText,
        ...emptyDecFormState,
        ...currentDecFormState,
    };
};

export default getInitialState;