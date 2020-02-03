import { LANGS } from "./localeConstants";
import { sectionTypesMap } from "./constants";

export const HOLDER = "HOLDER-POLDER";
export const GLOBAL_FALLBACK_MARK = "GLOBAL FALLBACK";
export const DEFAULT_FONT = "Helvetica";
export const DEFAULT_FONT_SIZE = "11";
export const DEFAULT_SIDE_NUMBER_FONT_COLOR = "FFF";
export const DEFAULT_SIDE_NUMBER_FILLING_COLOR = "1E88E5";
export const DEFAULT_SIDE_NUMBER_WIDTH = "20";
export const DEFAULT_SIDE_NUMBER_RADIUS = "10";
export const DEFAULT_FONT_COLOR = "000";
export const DEFAULT_ROW_INDENT = "0";
export const DEFAULT_MARGIN = "6";
export const DEFAULT_WORD_SPACING = "0";
export const DEFAULT_LINE_SPACING = "1.5";
export const DEFAULT_BORDER_COLOR = "F00";
export const DEFAULT_BORDER_THICKNESS = "2";

export const autoFillingRequiredFields = {
    sideNumberFont: DEFAULT_FONT,
    sideNumberFontSize: DEFAULT_FONT_SIZE,
    sideNumberFontColor: DEFAULT_SIDE_NUMBER_FONT_COLOR,
    sideNumberFillingColor: DEFAULT_SIDE_NUMBER_FILLING_COLOR,
    sideNumberWidth: DEFAULT_SIDE_NUMBER_WIDTH,
    sideNumberRadius: DEFAULT_SIDE_NUMBER_RADIUS,
    font: DEFAULT_FONT,
    fontSize: DEFAULT_FONT_SIZE,
    fontColor: DEFAULT_FONT_COLOR,
    marginTop: DEFAULT_MARGIN,
    marginBottom: DEFAULT_MARGIN,
    firstRowIndent: DEFAULT_ROW_INDENT,
    otherRowsIndent: DEFAULT_ROW_INDENT,
    wordSpacing: DEFAULT_WORD_SPACING,   
    lineSpacing: DEFAULT_LINE_SPACING,
    borderColor: DEFAULT_BORDER_COLOR,
    borderThickness: DEFAULT_BORDER_THICKNESS,
};

export const initialFormState = {
    ...autoFillingRequiredFields,
    decKey: "",
    sectionTypes: { ...Array.from(sectionTypesMap).reduce((acc, [ key ], i) => ({ ...acc, [key]: !i }), {})},
    group: "",
    groupToCreate: "",
    active: true,
    name: { ...LANGS.reduce((acc, { langKey }) => ({ ...acc, [langKey]: "" }), {}) },
    indentationalLevel: "",
    fixedIndentation: true,
    softReturn: false,
    backspaceActionWithContent: "merge",
    backspaceActionWithContentStyle: "",
    returnActionNextSection: GLOBAL_FALLBACK_MARK,
    returnActionEmptySection: GLOBAL_FALLBACK_MARK,
    tabAction: "",
    shiftTabAction: "",
    isList: false,
    listName: HOLDER,
    orderLevel: "",
    prefix: "",
    suffix: "",
    suffixDistance: "0.25",
    magicTabs: false,
    listType: "unordered",
    listItem: "2022",
    unicodeNumber: "",
    unicodeChar: "",
    listItemString: "",
    numberingStyle: "decimal",
    continueNumbering: false,
    allowRestartNumbering: false,
    includePreviousFrom: "",
    sideNumber: false,
    customSideNumberFont: "",
    sideNumberAlignment: "center",
    sideNumberBold: false,
    sideNumberItalic: false,
    sideNumberUnderlined: false,
    sideNumberLineHeight: "",
    referenceGroup: "",
    referenceGroupToCreate: "",
    customFont: "",
    alignment: "left",
    bold: false,
    italic: false,
    underlined: false,
    stroke: false,
    textTransform: "none",
    readOnly: false,
    connectToPrevious: false,
    verticalAlign: "baseline",
    customLineSpacing: "",
    borderLeft: false,
    borderRight: false,
    borderTop: false,
    borderBottom: false,
    borderType: "solid",
    fillingColor: "",
    tocIndentation: "",
    shortCutWin: "",
    shortCutWinView: "",
    shortCutMac: "",
    shortCutMacView: "",
};