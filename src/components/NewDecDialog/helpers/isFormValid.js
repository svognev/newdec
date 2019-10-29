import { requiredFields } from "../constants";

const isFormValid = form => {
    return requiredFields.every(fieldName => form[fieldName]);
}

export default isFormValid;