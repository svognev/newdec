import { clone } from "lodash";

import {
    namesSectionRequiredFields,
    wordExportSectionRequiredFields,
    listSectionRequiredFields,
    tabsErrorInitialState,
    sectionsTabNumbers,
} from "../constants";

export const getNamesSectionErrorState = form => {
    return !namesSectionRequiredFields.every(fieldName => form[fieldName]);
};

export const getWordExportSectionErrorState = form => {
    return !wordExportSectionRequiredFields.every(fieldName => form[fieldName]);
}

export const getListSectionErrorState = form => {
    return !listSectionRequiredFields.every(fieldName => form[fieldName]);
}

export const getTabsErrorState = form => {
    const tabsState = clone(tabsErrorInitialState);

    if (getNamesSectionErrorState(form)) {
        tabsState.namesSection = true;
    }

    if (getWordExportSectionErrorState(form)) {
        tabsState.wordExportSection = true;
    }

    if (getListSectionErrorState(form)) {
        tabsState.listSection = true;
    }

    // eslint-disable-next-line no-unused-vars
    for (let tabName in tabsState) {
        if (tabsState[tabName]) {
            return tabsState;
        }
    }

    return false;
};

export const getTabNumberToSwitch = tabsErrorState => {
    // eslint-disable-next-line no-unused-vars
    for (const { tabName, tabNumber } of sectionsTabNumbers) {
        if (tabsErrorState[tabName]) {
            return tabNumber;
        }
    }
};