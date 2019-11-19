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

import theme from "./theme";
import Handlers from "./Handlers";
import CustomTab from "./common/CustomTab";
import CustomErrorTab from "./common/CustomErrorTab";
import CustomTabs from "./common/CustomTabs";
import CustomDialog from "./common/CustomDialog";
import { alignmentsMap, HOLDER } from "./constants";

import { 
    fillMissedFields, 
    DecDataParser, 
    getTabsErrorState,
    getCorrectColor, 
    getUnstyledText,
    getListChars, 
    getTabNumberToSwitch,
    getPreviewFont,
} from "./helpers";

import {
    updateDecoratorForm, 
    clearDecoratorForm, 
    switchDecDialogTab, 
    updateValidationError, 
} from "./actions";

import { saveDecoratorForm } from "../../actions"

import "./style.css";

const NewDecDialog = props => {
    const { 
        isOpen, 
        closeDialog, 
        clearForm, 
        saveForm,
        updateForm, 
        formState, 
        openedTab,
        validationError, 
        isEditMode,
        switchTab,
        updateValidationError,
    } = props;

    const onClose = () => {
        closeDialog();
        clearForm();
    };

    const onSaveButtonClick = () => {
        const tabsErrorState = getTabsErrorState(formState)
        if (tabsErrorState) {
            updateValidationError(tabsErrorState);
            switchTab(getTabNumberToSwitch(tabsErrorState));
        } else {
            const formToSave = DecDataParser.parseToSend(fillMissedFields(formState));
            saveForm(formToSave);
            onClose();
        }
    };

    const { 
        setValue, 
        toggleValue, 
        setNumber, 
        setColor, 
        setShortCut 
    } = Handlers(updateForm, formState);

    const { 
        previewText,
        prefix,
        suffix,
        suffixDistance,
        listType,
        listItem,
        unicodeChar,
        numberingStyle,
        sideNumber,
        sideNumberFont,
        customSideNumberFont,
        sideNumberAlignment,
        sideNumberFontSize,
        sideNumberFontColor,
        sideNumberFillingColor,
        sideNumberWidth,
        sideNumberRadius,
        font,
        customFont,
        alignment,
        fontSize,
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
    console.log(0);

    const changeLeftBorder = toggleValue("leftBorder");
    const changeRightBorder = toggleValue("rightBorder");
    const changeTopBorder = toggleValue("topBorder");
    const changeBottomBorder = toggleValue("bottomBorder");
    const changeBorderColorName = setValue("borderColorName");
    const changeBorderColor = setColor("borderColor");
    const changeBorderThickness = setNumber("borderThickness");
    const changeFillingColorName = setValue("fillingColorName");
    const changeFillingColor = setColor("fillingColor");
    const changeConnectToPrevious = toggleValue("connectToPrevious");
    const changeTocIndentation = setValue("tocIndentation");
    const changeShortCutWin = setShortCut("shortCutWin", "shortCutWinView");
    const changeShortCutMac = setShortCut("shortCutMac", "shortCutMacView", true);

    const changePreviewText = e => {
        const { value } = e.target;
        if (value && value !== "<div></div>" && value !== "<br>") {
            setValue("previewText")(null, getUnstyledText(value));
        } else {
            setValue("previewText")(null, `<div><br></div>`);
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
        fontFamily: getPreviewFont(font, customFont),
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
        fontFamily: getPreviewFont(sideNumberFont, customSideNumberFont),
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

    const listSectionProps = { 
        listPreviewProps,
    };

    const typographySectionProps = { 
        previewProps,
    };

    const distancesSectionProps = {
        previewProps,
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
                            { validationError.namesSection 
                                ? ( <CustomErrorTab className="dialogTab" label="Names" /> )
                                :  ( <CustomTab className="dialogTab" label="Names" /> ) }

                            { validationError.wordExportSection 
                                ? ( <CustomErrorTab className="dialogTab" label="WORD export" /> ) 
                                : ( <CustomTab className="dialogTab" label="WORD export" /> ) }

                            <CustomTab className="dialogTab" label="Positioning" />

                            { validationError.listSection 
                                ? ( <CustomErrorTab className="dialogTab" label="List" /> ) 
                                : ( <CustomTab className="dialogTab" label="List" /> ) }

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
                        { openedTab === 0 && <NamesSection /> }
                        { openedTab === 1 && <WordExportSection /> }
                        { openedTab === 2 && <PositioningSection /> }
                        { openedTab === 3 && <ListSection {...listSectionProps} /> }
                        { openedTab === 4 && <ReferencingSection /> }
                        { openedTab === 5 && <TypographySection {...typographySectionProps} /> }
                        { openedTab === 6 && <DistancesSection {...distancesSectionProps} /> }
                        { openedTab === 7 && <FramesSection /> }
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
        updateForm: payload => dispatch(updateDecoratorForm(payload)),
        clearForm: () => dispatch(clearDecoratorForm()),
        switchTab: payload => dispatch(switchDecDialogTab(payload)),
        updateValidationError: payload => dispatch(updateValidationError(payload)),
        saveForm: payload => dispatch(saveDecoratorForm(payload)),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(NewDecDialog);