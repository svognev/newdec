import React from "react";
import { connect } from "react-redux";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";

import NamesSection from "./sections/NamesSection";
import WordExportSection from "./sections/WordExportSection";
import PositioningSection from "./sections/PositioningSection";
import ListSection from "./sections/ListSection";
import ReferencingSection from "./sections/ReferencingSection";
import TypographySection from "./sections/TypographySection";
import DistancesSection from "./sections/DistancesSection";
import FramesSection from "./sections/FramesSection";
import FillingSection from "./sections/FillingSection";
import TocSection from "./sections/TocSection";
import ShortCutsSection from "./sections/ShortCutsSection";
import TestSection from "./sections/TestSection";

import withDialogControl from "./hoc/withDialogControl";
import theme from "./theme";
import Handlers from "./Handlers";
import CustomTab from "./common/CustomTab";
import CustomErrorTab from "./common/CustomErrorTab";
import CustomTabs from "./common/CustomTabs";
import CustomDialog from "./common/CustomDialog";
import { alignmentsMap, HOLDER, requiredFields } from "./constants";
import { 
    getCorrectColor, 
    getUnstyledText, 
    unicodeNumberToChar, 
    unicodeCharToNumber, 
    getListChars, 
    getErrorSections,
} from "./helpers";
import {
    changeDecoratorForm, 
    clearDecoratorForm, 
    switchDecDialogTab, 
    switchOnDecDialogValidationErrorMode, 
    switchOffDecDialogValidationErrorMode,
} from "./actions";

import { saveDecoratorForm } from "../../actions"

import "./style.css";

const NewDecDialog = props => {
    const { 
        isOpen, 
        onClose, 
        onSaveButtonClick, 
        updateForm, 
        formState, 
        openedTab,
        validationError, 
        isEditMode,
        switchTab,
        switchOffErrorMode,
    } = props;

    const { 
        setStateProperty, 
        toggleStateProperty, 
        setNumber, 
        setColor, 
        setBullet, 
        setShortCut 
    } = Handlers(updateForm, formState);

    const { 
        previewText,
        decKey,
        group,
        groupToCreate,
        active,
        decNameEn,
        decNameDe,
        decNameRu,
        decNameFr,
        decNameFrCa,
        decNameEs,
        wordStyleName,
        softReturn,
        indentationalLevel,
        backspaceActionWithContent,
        backspaceActionWithContentStyle,
        backspaceActionWithoutContent,
        backspaceActionWithoutContentStyle,
        returnActionNextSection,
        returnActionEmptySection,
        tabAction,
        shiftTabAction,
        isList,
        listName,
        orderLevel,
        prefix,
        suffix,
        suffixDistance,
        magicTabs,
        listType,
        listItem,
        unicodeNumber,
        unicodeChar,
        numberingStyle,
        continueNumbering,
        allowRestartNumbering,
        includePreviousFrom,
        sideNumber,
        sideNumberFont,
        sideNumberAlignment,
        sideNumberFontSize,
        sideNumberFontColor,
        sideNumberFillingColor,
        sideNumberWidth,
        sideNumberRadius,
        referenceGroup,
        referenceGroupToCreate,
        font,
        alignment,
        fontSize,
        fontColorName,
        fontColor,
        bold,
        italic,
        underlined,
        stroke,
        textTransform,
        verticalAlign,
        marginTop,
        marginBottom,
        firstRowIndent,
        otherRowsIndent,
        lineSpacing,
        customLineSpacing,
        wordSpacing,   
        leftBorder,
        rightBorder,
        topBorder,
        bottomBorder,
        borderColorName,
        borderColor,
        borderThickness,
        borderType,
        fillingColorName,
        fillingColor,
        connectToPrevious,
        tocIndentation,
        shortCutWinView,
        shortCutMacView,
    } = formState;
    
    const changeDecKey = setStateProperty("decKey");
    const changeGroup = setStateProperty("group");
    const changeGroupToCreate = setStateProperty("groupToCreate");
    const changeActive = toggleStateProperty("active");
    const changeDecNameEn = setStateProperty("decNameEn");
    const changeDecNameDe = setStateProperty("decNameDe");
    const changeDecNameRu = setStateProperty("decNameRu");
    const changeDecNameFr = setStateProperty("decNameFr");
    const changeDecNameFrCa = setStateProperty("decNameFrCa");
    const changeDecNameEs = setStateProperty("decNameEs");
    const changeWordStyleName = setStateProperty("wordStyleName");
    const changeSoftReturn = toggleStateProperty("softReturn");
    const changeIndentationalLevel = setStateProperty("indentationalLevel")
    const changeBackspaceActionWithContent = setStateProperty("backspaceActionWithContent");
    const changeBackspaceActionWithContentStyle = setStateProperty("backspaceActionWithContentStyle");
    const changeBackspaceActionWithoutContent = setStateProperty("backspaceActionWithoutContent");
    const changeBackspaceActionWithoutContentStyle = setStateProperty("backspaceActionWithoutContentStyle");
    const changeReturnActionNextSection = setStateProperty("returnActionNextSection");
    const changeReturnActionEmptySection = setStateProperty("returnActionEmptySectionStyle")
    const changeTabAction = setStateProperty("tabAction");
    const changeShiftTabAction = setStateProperty("shiftTabAction");
    const changeListName = setStateProperty("listName");
    const changeOrderLevel = setStateProperty("orderLevel");
    const changePrefix = setStateProperty("prefix");
    const changeSuffix = setStateProperty("suffix");
    const changeSuffixDistance = setStateProperty("suffixDistance");
    const changeMagicTabs = toggleStateProperty("magicTabs");
    const changeListItem = setStateProperty("listItem");
    const changeNumberingStyle = setStateProperty("numberingStyle");
    const changeContinueNumbering = toggleStateProperty("continueNumbering");
    const changeAllowRestartNumbering = toggleStateProperty("allowRestartNumbering");
    const changeIncludePreviousFrom = setStateProperty("includePreviousFrom");
    const changeSideNumberFont = setStateProperty("sideNumberFont");
    const changeSideNumberAlignment = setStateProperty("sideNumberAlignment");
    const changeSideNumberFontSize = setNumber("sideNumberFontSize");
    const changeSideNumberFontColor = setColor("sideNumberFontColor");
    const changeSideNumberFillingColor = setColor("sideNumberFillingColor");
    const changeSideNumberWidth = setNumber("sideNumberWidth");
    const changeSideNumberRadius = setNumber("sideNumberRadius");
    const changeReferenceGroup = setStateProperty("referenceGroup");
    const changeReferenceGroupToCreate = setStateProperty("referenceGroupToCreate");
    const changeFont = setStateProperty("font");
    const changeAlignment = setStateProperty("alignment");
    const changeFontSize = setNumber("fontSize");
    const changeFontColorName = setStateProperty("fontColorName");
    const changeFontColor = setColor("fontColor");
    const changeBold = toggleStateProperty("bold");
    const changeItalic = toggleStateProperty("italic");
    const changeUnderlined = toggleStateProperty("underlined");
    const changeStroke = toggleStateProperty("stroke");
    const changeTextTransform = setStateProperty("textTransform");
    const changeVerticalAlign = setStateProperty("verticalAlign");
    const changeMarginTop = setNumber("marginTop");
    const changeMarginBottom = setNumber("marginBottom");
    const changeFirstRowIndent = setNumber("firstRowIndent");
    const changeOtherRowsIndent = setNumber("otherRowsIndent");
    const changeLineSpacing = setStateProperty("lineSpacing");
    const changeCustomLineSpacing = setNumber("customLineSpacing");
    const changeWordSpacing = setNumber("wordSpacing");
    const changeLeftBorder = toggleStateProperty("leftBorder");
    const changeRightBorder = toggleStateProperty("rightBorder");
    const changeTopBorder = toggleStateProperty("topBorder");
    const changeBottomBorder = toggleStateProperty("bottomBorder");
    const changeBorderColorName = setStateProperty("borderColorName");
    const changeBorderColor = setColor("borderColor");
    const changeBorderThickness = setNumber("borderThickness");
    const changeFillingColorName = setStateProperty("fillingColorName");
    const changeFillingColor = setColor("fillingColor");
    const changeConnectToPrevious = toggleStateProperty("connectToPrevious");
    const changeTocIndentation = setStateProperty("tocIndentation");
    const changeShortCutWin = setShortCut("shortCutWin", "shortCutWinView");
    const changeShortCutMac = setShortCut("shortCutMac", "shortCutMacView", true);

    const changePreviewText = e => {
        const { value } = e.target;
        if (value && value !== "<div></div>" && value !== "<br>") {
            setStateProperty("previewText")(null, getUnstyledText(value));
        } else {
            setStateProperty("previewText")(null, `<div><br></div>`);
        }
    };

    const changeIsList = e => {
        if (e.target.checked) {
            if (validationError && requiredFields.every(field => formState[field])) {
                switchOffErrorMode();
            }
            if (listName === HOLDER) {
                changeListName(null, "");
            }
        } else if (listName === ""){
            changeListName(null, HOLDER);
        }
        toggleStateProperty("isList")(e);
    };

    const changeListType = e => {
        const { value } = e.target;
        setStateProperty("listType")(null, value);
        if (value === "ordered" && suffix === "") {
            setStateProperty("suffix")(null, ".");
        } else if (value === "unordered" && suffix === ".") {
            setStateProperty("suffix")(null, "");
        }
    };

    const changeUnicodeNumber = e => {
        const newUnicodeNumber = setColor("unicodeNumber")(e);
        const newUnicodeChar = newUnicodeNumber !== "" ? unicodeNumberToChar(newUnicodeNumber) : "";
        setStateProperty("unicodeChar")(null, newUnicodeChar);
    };
    
    const changeUnicodeChar = e => {
        const newUnicodeChar = setBullet("unicodeChar")(e);
        const newUnicodeNumber = newUnicodeChar !== "" ? unicodeCharToNumber(newUnicodeChar) : "";
        setStateProperty("unicodeNumber")(null, newUnicodeNumber);
    };

    const changeSideNumber = e => {
        toggleStateProperty("sideNumber")(e);
        if (e.target.checked && suffix === ".") {
            setStateProperty("suffix")(null, "");
        } else if (!e.target.checked && suffix === "") {
            setStateProperty("suffix")(null, ".");
        }
    };

    const changeBorderType = e => {
        setStateProperty("borderType")(e);
        if (e.target.value === "double" && borderThickness === "2") {
            setStateProperty("borderThickness")(null, "3");
        }
        if (e.target.value !== "double" && borderThickness === "3") {
            setStateProperty("borderThickness")(null, "2");
        }
    };

    const previewFontColor = getCorrectColor(fontColor, "f5f5f5");
    const previewFillingColor = getCorrectColor(fillingColor, "f5f5f5");
    const previewAdditionalFillingColor = connectToPrevious ? previewFillingColor : "f5f5f5";
    const indentsDifference = (firstRowIndent || 0) - (otherRowsIndent || 0);
    const previewMarginLeft = otherRowsIndent ? `${otherRowsIndent >= 12 ? 12 : otherRowsIndent}cm` : 0;
    const previewTextIndent = indentsDifference ? `${indentsDifference >= 12 ? 12 : indentsDifference}cm` : 0;

    const previewStyle = {
        fontSize: !fontSize ? "0" : `${fontSize <= 120 ? fontSize : 120}pt`,
        color: `#${previewFontColor}`,
        fontFamily: font,
        alignItems: alignmentsMap[alignment],
        textAlign: alignment,
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
        textDecoration: `${underlined ? "underline" : ""}${stroke ? " line-through" : ""}`.trim() || "none",
        verticalAlign,
        textTransform: textTransform !== "small-caps" ? textTransform : "none",
        fontVariant: textTransform === "small-caps" ? textTransform : "normal",
        backgroundColor: `#${previewFillingColor}`,
        backgroundImage:  `linear-gradient(#${previewAdditionalFillingColor}, #${previewAdditionalFillingColor})`,
        marginLeft: previewMarginLeft,
        textIndent: previewTextIndent,
        wordSpacing: `${wordSpacing || 0}pt`,
        lineHeight: (lineSpacing !== "custom" ? lineSpacing : (!customLineSpacing ? "1.15" : `${customLineSpacing || 0}`)),
        marginBottom: `${marginBottom || 0}pt`,
        marginTop: `${marginTop || 0}pt`,
    };

    const previewProps = { previewText, changePreviewText, previewStyle };

    const previewSideNumberFontColor = getCorrectColor(sideNumberFontColor, "f5f5f5");
    const previewSideNumberFillingColor = getCorrectColor(sideNumberFillingColor, "f5f5f5");

    const sideNumberStyle = (!sideNumber || listType === "unordered") ? {} : {
        fontFamily: sideNumberFont,
        textAlign: sideNumberAlignment,
        fontSize: !sideNumberFontSize ? "0" : `${sideNumberFontSize <= 120 ? sideNumberFontSize : 120}pt`,
        color: `#${previewSideNumberFontColor}`,
        backgroundColor: `#${previewSideNumberFillingColor}`,
        minWidth: `${sideNumberWidth || 0}pt`,
        borderRadius: `${sideNumberRadius || 0}pt`,
    };

    const listPreviewProps = { 
        listChars: getListChars({
                isOrderedList: listType === "ordered", 
                numberingStyle, 
                listItem,
                unicodeChar,
            }),
        listPreviewStyle: previewStyle,
        prefix, 
        suffix, 
        suffixDistance,
        sideNumberStyle,
    };

    const namesSectionProps = {
        decKey, changeDecKey,
        group, changeGroup,
        newGroup: groupToCreate, changeGroupToCreate,
        active, changeActive,
        decNameEn, changeDecNameEn,
        decNameDe, changeDecNameDe,
        decNameRu, changeDecNameRu,
        decNameFr, changeDecNameFr,
        decNameFrCa, changeDecNameFrCa,
        decNameEs, changeDecNameEs,
        validationError,
    }; 

    const wordExportSectionProps = {
        wordStyleName, changeWordStyleName,
        softReturn, changeSoftReturn,
        validationError,
    };

    const positioningSectionProps = {
        indentationalLevel, changeIndentationalLevel,
        backspaceActionWithContent, changeBackspaceActionWithContent,
        backspaceActionWithContentStyle, changeBackspaceActionWithContentStyle,
        backspaceActionWithoutContent, changeBackspaceActionWithoutContent,
        backspaceActionWithoutContentStyle, changeBackspaceActionWithoutContentStyle,
        returnActionNextSection, changeReturnActionNextSection,
        returnActionEmptySection, changeReturnActionEmptySection,
        tabAction, changeTabAction,
        shiftTabAction, changeShiftTabAction,
    };

    const listSectionProps = { 
        listPreviewProps,
        isList, changeIsList, 
        listName, changeListName,
        orderLevel, changeOrderLevel,
        prefix, changePrefix,
        suffix, changeSuffix,
        suffixDistance, changeSuffixDistance,
        magicTabs, changeMagicTabs,
        listType, changeListType, 
        listItem, changeListItem,
        unicodeNumber, changeUnicodeNumber,
        unicodeChar, changeUnicodeChar,
        numberingStyle, changeNumberingStyle,
        continueNumbering, changeContinueNumbering,
        allowRestartNumbering, changeAllowRestartNumbering,
        includePreviousFrom, changeIncludePreviousFrom,
        sideNumber, changeSideNumber,
        sideNumberFont, changeSideNumberFont,
        sideNumberAlignment, changeSideNumberAlignment,
        sideNumberFontSize, changeSideNumberFontSize,
        sideNumberFontColor, changeSideNumberFontColor,
        sideNumberFillingColor, changeSideNumberFillingColor,
        sideNumberWidth, changeSideNumberWidth,
        sideNumberRadius, changeSideNumberRadius,
        validationError,
    };

    const referencingSectionProps = {
        referenceGroup, changeReferenceGroup,
        newGroup: referenceGroupToCreate, changeReferenceGroupToCreate,
    };

    const typographySectionProps = { 
        previewProps,
        font, changeFont,
        alignment, changeAlignment,
        fontSize, changeFontSize,
        fontColorName, changeFontColorName,
        fontColor, changeFontColor,
        bold, changeBold,
        italic, changeItalic,
        underlined, changeUnderlined,         
        stroke, changeStroke,
        textTransform, changeTextTransform,
        verticalAlign, changeVerticalAlign, 
    };

    const distancesSectionProps = {
        previewProps,
        marginTop, changeMarginTop,
        marginBottom, changeMarginBottom,
        firstRowIndent, changeFirstRowIndent,
        otherRowsIndent, changeOtherRowsIndent,
        lineSpacing, changeLineSpacing,
        customLineSpacing, changeCustomLineSpacing,
        wordSpacing, changeWordSpacing,
    };

    const framesSectionProps = { 
        leftBorder, changeLeftBorder, 
        rightBorder, changeRightBorder,
        topBorder, changeTopBorder, 
        bottomBorder, changeBottomBorder, 
        borderColorName, changeBorderColorName,
        borderColor, changeBorderColor,
        borderThickness, changeBorderThickness,
        borderType, changeBorderType,
    };

    const fillingSectionProps = { 
        previewProps,
        fillingColorName, changeFillingColorName,
        fillingColor, changeFillingColor,
        connectToPrevious, changeConnectToPrevious,
    };

    const tocSectionProps = {
        tocIndentation, changeTocIndentation,
    };

    const shortCutsSectionProps = {
        shortCutWinView, changeShortCutWin, 
        shortCutMacView, changeShortCutMac,
    };

    const [
       isErrorInNames,
       isErrorInWordExport,
       isErrorInList,
    ] = validationError ? getErrorSections(requiredFields, namesSectionProps, wordExportSectionProps, listSectionProps) 
        : [false, false, false];
        
    return (
        <ThemeProvider theme={theme}>
            <CustomDialog
                open={isOpen}
                onClose={onClose}
                aria-labelledby="form-dialog-title"
                scroll="body"
                className="paragraphDecorators-dialog"
                fullWidth={true}
                maxWidth={false}
                id="dialog"
            >
                <div className="header">
                    <DialogTitle className="header-title">
                        <p>Create new paragraph decorator</p>
                    </DialogTitle>
                    <div className="header-buttons">
                        <Button 
                            variant="contained"
                            color="default"
                            onClick={onClose}
                            className="topNavButton"
                        >
                            Cancel
                        </Button>
                        <Button 
                            variant="contained"
                            color="primary"
                            onClick={onSaveButtonClick}
                            className="topNavButton"
                        >
                            {isEditMode ? "Save" : "Create"}
                        </Button>
                    </div>
                </div>

                <DialogContent className="content">
                    <div className="content-leftSide">
                        <CustomTabs 
                            className="dialogTabs"
                            value={openedTab} 
                            onChange={(e, tabNumber) => { switchTab(tabNumber) }} 
                            orientation="vertical"
                            color="primary"
                            indicatorColor="primary"
                        >
                            { isErrorInNames ? ( <CustomErrorTab className="dialogTab" label="Names" /> )
                                :  ( <CustomTab className="dialogTab" label="Names" /> ) }

                            { isErrorInWordExport ? ( <CustomErrorTab className="dialogTab" label="WORD export" /> ) 
                                : ( <CustomTab className="dialogTab" label="WORD export" /> ) }

                            <CustomTab className="dialogTab" label="Positioning" />

                            { isErrorInList ? ( <CustomErrorTab className="dialogTab" label="List" /> ) 
                                :( <CustomTab className="dialogTab" label="List" /> ) }

                            <CustomTab className="dialogTab" label="Referencing" />
                            <CustomTab className="dialogTab" label="Typography" />
                            <CustomTab className="dialogTab" label="Distances" />
                            <CustomTab className="dialogTab" label="Frames" />
                            <CustomTab className="dialogTab" label="Filling" />
                            <CustomTab className="dialogTab" label="ToC" />
                            <CustomTab className="dialogTab" label="Short cuts" />
                            <CustomTab className="dialogTab" label="Test" />
                        </CustomTabs>
                    </div>
                    <div className="content-rightSide">
                        { openedTab === 0 && <NamesSection {...namesSectionProps} /> }
                        { openedTab === 1 && <WordExportSection {...wordExportSectionProps} /> }
                        { openedTab === 2 && <PositioningSection {...positioningSectionProps} /> }
                        { openedTab === 3 && <ListSection {...listSectionProps} />}
                        { openedTab === 4 && <ReferencingSection {...referencingSectionProps} /> }
                        { openedTab === 5 && <TypographySection {...typographySectionProps} /> }
                        { openedTab === 6 && <DistancesSection {...distancesSectionProps} /> }
                        { openedTab === 7 && <FramesSection {...framesSectionProps} /> }
                        { openedTab === 8 && <FillingSection {...fillingSectionProps} /> }
                        { openedTab === 9 && <TocSection {...tocSectionProps} /> }
                        { openedTab === 10 && <ShortCutsSection {...shortCutsSectionProps} /> }
                        { openedTab === 11 && <TestSection {...typographySectionProps} /> }
                    </div>
                </DialogContent>
            </CustomDialog>
        </ThemeProvider>
    );
};

const mapStateToProps = ({ decoratorDialog: { form, openedTab, validationError, isEditMode }}) => {
    return { 
        formState: form,
        openedTab,
        validationError, 
        isEditMode,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateForm: payload => dispatch(changeDecoratorForm(payload)),
        clearForm: () => dispatch(clearDecoratorForm()),
        switchTab: payload => dispatch(switchDecDialogTab(payload)),
        switchOnErrorMode: () => dispatch(switchOnDecDialogValidationErrorMode()),
        switchOffErrorMode: () => dispatch(switchOffDecDialogValidationErrorMode()),
        saveForm: payload => dispatch(saveDecoratorForm(payload)),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(withDialogControl(NewDecDialog));