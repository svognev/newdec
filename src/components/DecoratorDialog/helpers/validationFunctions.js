import { tabsErrorInitialState, sectionsTabNumbers, MAIN_LANG_KEY } from "../constants";

export const hasErrorInSection = refs => !refs.every(ref => ref.current.value);

export const getTabsErrorState = form => {
    const tabsErrorState = { ...tabsErrorInitialState };
    const { name, decKey, listName, isList, listType } = form;

    if (!name[MAIN_LANG_KEY] || !decKey) {
        tabsErrorState.namesSection = true;
    }
    if (isList && listType === "ordered" && !listName) {
        tabsErrorState.listSection = true;
    }
    // eslint-disable-next-line
    for (let tabName in tabsErrorState) {
        if (tabsErrorState[tabName]) {
            return tabsErrorState;
        }
    }
    return false;
};

export const getTabNumberToSwitch = tabsErrorState => {
    // eslint-disable-next-line
    for (const { tabName, tabNumber } of sectionsTabNumbers) {
        if (tabsErrorState[tabName]) {
            return tabNumber;
        }
    }
};