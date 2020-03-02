import { sections } from "../constants";

export const checkNames = ({ name }) => !!name.en_EN;
export const checkDecKey = ({ decKey }, isEditMode) => (isEditMode || !!decKey);
export const checkListName = ({ isList, listType, listName }) => {
    if (!isList || (isList && listType === "unordered")) {
        return true;
    } else {
        return !!listName;
    }
};

const getValidationChecks = (form, isEditMode) => {
    return { 
        namesSection: [
            {
                field: "name",
                check: () => checkNames(form),
            },
            {
                field: "decKey",
                check: () => checkDecKey(form, isEditMode),
            },
        ],
        listSection: [
            {
                field: "listName",
                check: () => checkListName(form),
            },
        ],
    };
};

export const getErrorState = (form, isEditMode) => {
    const errorState = {};
    const validationChecks = getValidationChecks(form, isEditMode);

    for (let propName in validationChecks) {
        const errorFields = validationChecks[propName].filter(({ check }) => !check()).map(({ field }) => field);
        if (errorFields.length) {
            errorState[propName] = errorFields;
        }
    }

    return errorState;
};

export const getTabNumberToSwitch = tabsErrorState => {
    // eslint-disable-next-line
    for (const { name, number } of sections) {
        if (tabsErrorState[name]) {
            return number;
        }
    }
};