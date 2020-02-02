import { GLOBAL_FALLBACK_MARK } from "../../constants";

const DEFAULT_DECORATOR = "Text 2000";

export const replaceDecNameIfDefault = decName => {
    if (decName === DEFAULT_DECORATOR) {
        return GLOBAL_FALLBACK_MARK;
    }
    if (decName === GLOBAL_FALLBACK_MARK) {
        return DEFAULT_DECORATOR;
    }
    return decName;
};

export const getNumber = val => val ? +val : null;

export const getNumberString = val => typeof val === "number" ? `${val}` : "";

export const getNumeratedListPattern = (order = 0, prefix = "", suffix = "") => {
    return `${prefix || ""}{${order}}${suffix || ""}`;
};