export const alignmentList = {
    center: "center",
    left: "flex-start",
    right: "flex-end",
    justify: "flex-start",
};

export const numberingSets = {
    decimal: ["1", "2", "3", "88", "888"],
    "upper-alpha": ["A", "B", "C", "XX", "XXX"],
    "lower-alpha": ["a", "b", "c", "xx", "xxx"],
    "upper-roman": ["I", "II", "III", "XX", "XXX"],
    "lower-roman": ["i", "ii", "iii", "xx", "xxx"],
};

export const lineSpacings = ["1.0", "1.15", "1.5", "2.0", "2.5", "3.0"];

export const orderedListStylesMap = new Map([
    ["decimal", "1, 2, 3"],
    ["upper-alpha", "A, B, C"],
    ["lower-alpha", "a, b, c"],
    ["upper-roman", "I, II, III"],
    ["lower-roman", "i, ii, iii"],
]);

export const bulletNamesMap = new Map([
    ["2022", "•"],
    ["2014", "—"],
    ["2605", "★"],
]);

export const sectionTypesMap = new Map([
    ["text", "Text"],
    ["table", "Table"],
    ["image", "Image"],
]);

export const backSpaceActionsMap = new Map([
    ["merge", "Merge"],
    ["apply_other_pd", "Apply other PD"],
    ["remove_pd", "Remove PD"],
    ["nothing", "Nothing"],
]);

export const sampleText = `<div>Sample Text. You can change it.</div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam.</div>`;
