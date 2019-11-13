export const namesSectionRequiredFields = ["decKey", "decNameEn"];

export const wordExportSectionRequiredFields = ["wordStyleName"];

export const listSectionRequiredFields = ["listName"];

export const requiredFields = [ 
    ...namesSectionRequiredFields, 
    ...wordExportSectionRequiredFields, 
    ...listSectionRequiredFields, 
];

export const tabsErrorInitialState = {
    namesSection: false,
    wordExportSection: false,
    listSection: false,
};

export const sectionsTabNumbers = [
    { tabName: "namesSection", tabNumber: 0 },
    { tabName: "wordExportSection", tabNumber: 1},
    { tabName: "listSection", tabNumber: 3 },
];