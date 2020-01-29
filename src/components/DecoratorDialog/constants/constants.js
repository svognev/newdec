export const alignmentsMap = {
    center: "center",
    left: "flex-start",
    right: "flex-end",
    justify: "flex-start",
};

export const backSpaceActions = [
    { key: "merge", value: "Merge" },
    { key: "apply_other_pd", value: "Apply other PD" },
    { key: "remove_pd", value: "Remove PD" },
    { key: "nothing", value: "Nothing" }
];

export const bulletNamesMap = {
    bulletpoint: "•",
    dash: "—",
    star: "★",
};

export const listStyleTypes = [
    { name: "1, 2, 3", value: "decimal" },
    {  name: "A, B, C", value: "upper-alpha" },
    {  name: "a, b, c", value: "lower-alpha" },
    {  name: "I, II, III", value: "upper-roman" },
    {  name: "i, ii, iii", value: "lower-roman" },
];

export const numberingSets = {
    decimal: ["1", "2", "3", "88", "888"],
    "upper-alpha": ["A", "B", "C", "XX", "XXX"],
    "lower-alpha": ["a", "b", "c", "xx", "xxx"],
    "upper-roman": ["I", "II", "III", "XX", "XXX"],
    "lower-roman": ["i", "ii", "iii", "xx", "xxx"],
};

export const sectionTypesMap = [
 { key: "text", value: "Text" },
 { key: "table", value: "Table" },
 { key: "img", value: "Image" },
];

export const sampleText = `<div>Sample Text. You can change it.</div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam.</div>`;
