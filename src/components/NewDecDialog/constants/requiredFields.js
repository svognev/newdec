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