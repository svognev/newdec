export const listStyleType = [
  {
    name: '1, 2, 3',
    value: 'decimal',
  },
  {
    name: 'A, B, C',
    value: 'upper-alpha',
  },
  {
    name: 'a, b, c',
    value: 'lower-alpha',
  },
  {
    name: 'I, II, III',
    value: 'upper-roman',
  },
  {
    name: 'i, ii, iii',
    value: 'lower-roman',
  },
];

export const backSpaceActions = [
  { key: 'merge', value: 'Merge' },
  { key: 'apply_other_pd', value: 'Apply other PD' },
  { key: 'remove_pd', value: 'Remove PD' },
  { key: 'nothing', value: 'Nothing' }
];

export const returnOnEmptySectionActions = [
  { key: 'apply_other_pd', value: 'Apply other PD' },
  { key: 'create_new_section', value: 'Create new section' },
  { key: 'apply_default_pd', value: 'Apply default PD' },
  { key: 'nothing', value: 'Nothing' }
];

export const decoratorsList = [
    { name: "...", value: "" },
    { name: "Text 0", value: "quick_text_0" },
    { name: "Text 1", value: "quick_text_1" },
    { name: "Text 2", value: "quick_text_2" },
    { name: "Text 3", value: "quick_text_3" },
    { name: "Text 4", value: "quick_text_4" },
    { name: "Text 5", value: "quick_text_5" },
];

export const alignmentsMap = {
  center: "center",
  left: "flex-start",
  right: "flex-end",
  justify: "flex-start",
};

export const numberingSets = {
  decimal: ["1", "2", "3", "4"],
  "upper-alpha": ["A", "B", "C", "D"],
  "lower-alpha": ["a", "b", "c", "d"],
  "upper-roman": ["I", "II", "III", "IV"],
  "lower-roman": ["i", "ii", "iii", "iv"],
};

export const bulletNamesMap = {
  bulletpoint: "•",
  dash: "—",
  star: "★",
};

export const sampleText = `<div>Sample Text. You can change it.</div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam.</div>`;

export const namesSectionRequiredFields = [ "decKey", "styleNameEn", ];

export const WordExportSectionRequiredFields = [ "wordStyleName", ];

export const ListSectionRequiredFields = [ "listName", ];

export const requiredFields = [ 
  ...namesSectionRequiredFields, 
  ...WordExportSectionRequiredFields,
  ...ListSectionRequiredFields,
];

export const HOLDER = "HOLDER-POLDER";