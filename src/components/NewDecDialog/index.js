import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';

import NamesSection from './sections/NamesSection';
import WordExportSection from './sections/WordExportSection';
import PositioningSection from './sections/PositioningSection';
import ListSection from './sections/ListSection';
import ReferencingSection from './sections/ReferencingSection';
import TypographySection from './sections/TypographySection';
import DistancesSection from './sections/DistancesSection';
import FramesSection from './sections/FramesSection';
import FillingSection from './sections/FillingSection';
import TocSection from './sections/TocSection';
import ShortCutsSection from './sections/ShortCutsSection';
import TestSection from './sections/TestSection';

import theme from '../../theme';
import CustomTab from '../common/CustomTab';
import CustomTabs from '../common/CustomTabs';
import CustomDialog from '../common/CustomDialog';
import { alignmentsMap, sampleText } from "constants.js";
import getShortCutUtils from "utils/getShortCutUtils";
import { 
    getCorrectColor, 
    getUnstyledText, 
    unicodeNumberToChar, 
    unicodeCharToNumber, 
    getListChars, 
} from "utils";


import "./style.css";

class NewDecDialog extends React.Component {
    state = { 
        openedTab: 0,
        previewText: sampleText,
        decKey: "",
        group: "",
        groupToCreate: "",
        active: false,
        styleNameEn: "",
        styleNameDe: "",
        styleNameRu: "",
        styleNameFr: "",
        wordStyleName: "",
        softReturn: false,
        indentationalLevel: "",
        backspaceActionWithContent: "merge",
        backspaceActionWithoutContent: "apply_other_pd",
        returnActionNextSection: "default",
        returnActionEmptySection: "default",
        tabAction: "",
        shiftTabAction: "",
        isList: false,
        listName: "",
        orderLevel: "",
        prefix: "",
        suffix: "",
        suffixDistance: "0.25",
        magicTabs: false,
        listType: "unordered",
        listItem: "bulletpoint",
        unicodeNumber: "",
        unicodeChar: "",
        numberingStyle: "decimal",
        continueNumbering: false,
        allowRestartNumbering: false,
        includePreviousFrom: "",
        sideNumber: false,
        sideNumberFont: "Roboto",
        sideNumberAlignment: "center",
        sideNumberFontSize: "12",
        sideNumberFontColor: "FFF",
        sideNumberFillingColor: "1E88E5",
        sideNumberWidth: "20",
        sideNumberRadius: "10",
        referenceGroup: "",
        xrefToCreate: "",
        font: "Roboto",
        alignment: "left",
        fontSize: "12",
        fontColorName: "Black",
        fontColor: "000",
        bold: false,
        italic: false,
        underlined: false,
        stroke: false,
        textTransform: "none",
        verticalAlign: "baseline",
        marginTop: "6",
        marginBottom: "6",
        firstRowIndent: "0",
        otherRowsIndent: "0",
        lineSpacing: "1.15",
        customLineSpacing: "",
        wordSpacing: "0",   
        leftBorder: false,
        rightBorder: false,
        topBorder: false,
        bottomBorder: false,
        borderColorName: "Red",
        borderColor: "f00",
        borderThickness: "2",
        borderType: "solid",
        fillingColorName: "",
        fillingColor: "",
        connectToPrevious: false,
        tocIndentation: "",
        shortCutWin: "",
        shortCutWinView: "",
        shortCutMac: "",
        shortCutMacView: "",
    };

    toggleStateProperty = propName => e => {
        this.setState({
            [propName]: e.target.checked
        });
    };

    setStateProperty = propName => (e, secondArg = "") => {
        const newValue = (e && e.target.value !== "" && e.target.value !== undefined) ? e.target.value : secondArg;
        this.setState({
            [propName]: newValue,
        });
    };

    setBullet = propName => e => {
        const newBullet = e.target.value.length > 1 ? e.target.value[e.target.value.length - 1] : e.target.value;
        this.setState({
            [propName]: newBullet,
        });
        return newBullet;
    };

    setColor = propName => (e, secondArg) => {
        let input = e ? (e.target.value || "") : secondArg;
        
        const filteredInput = input.replace("#", "").trim().match(/[0-9a-f]+/i) 
                              ? input.replace("#", "").trim().match(/[0-9a-f]+/i)[0].slice(0, 6)
                              : "" ;
        
        if (filteredInput !== this.state[propName]) {
            this.setState({
                [propName]: filteredInput,
            });
        }
        return filteredInput;
    };

    setNumber = propName => e => {
        let input = e.target.value || "";

        const filteredInput = input.replace(",", ".").trim().match(/[0-9]+/i) 
                              ? input.replace(",", ".").trim().match(/\d+[.,]?\d*/)[0]
                              : "" ;

        if (filteredInput !== this.state[propName]) {
          this.setState({
              [propName]: filteredInput,
          });
        }
        return filteredInput;
    };

    setShortCut = (valuePropName, viewPropName, isMac) => e => {
        const systemName = isMac ? "MacOS" : "Windows";
        const shortCut = getShortCutUtils(systemName).convertEventToShortCut(e);
        if (shortCut && shortCut.deleteKey) {
          setTimeout(() => {
            this.setState({ [valuePropName]: "" });
            this.setState({ [viewPropName]: "" });
          }, 100);
        } else if (shortCut) {
          this.setState({ [valuePropName]: shortCut.value });
          this.setState({ [viewPropName]: shortCut.stringValue });
        }
    };

    render() {
        const { isOpen, onClose } = this.props;
        const { setStateProperty, toggleStateProperty, setNumber, setColor, setBullet, setShortCut } = this;
        const { 
            openedTab,
            previewText,
            decKey,
            group,
            groupToCreate,
            active,
            styleNameEn,
            styleNameDe,
            styleNameRu,
            styleNameFr,
            wordStyleName,
            softReturn,
            indentationalLevel,
            backspaceActionWithContent,
            backspaceActionWithoutContent,
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
            xrefToCreate,
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
        } = this.state;

        const changeOpenedTab = setStateProperty("openedTab");
        const changeDecKey = setStateProperty("decKey");
        const changeGroup = setStateProperty("group");
        const changeActive = toggleStateProperty("active");
        const changeStyleNameEn = setStateProperty("styleNameEn");
        const changeStyleNameDe = setStateProperty("styleNameDe");
        const changeStyleNameRu = setStateProperty("styleNameRu");
        const changeStyleNameFr = setStateProperty("styleNameFr");
        const changeIsList = toggleStateProperty("isList");
        const changeVerticalAlign = setStateProperty("verticalAlign");
        const changeTextTransform = setStateProperty("textTransform");
        const changeLeftBorder = toggleStateProperty("leftBorder");
        const changeRightBorder = toggleStateProperty("rightBorder");
        const changeTopBorder = toggleStateProperty("topBorder");
        const changeBottomBorder = toggleStateProperty("bottomBorder");
        const changeBorderColor = setColor("borderColor");
        const changeFontColor = setColor("fontColor");
        const changeFillingColor = setColor("fillingColor");
        const changeBorderThickness = setNumber("borderThickness");
        const changeFirstRowIndent = setNumber("firstRowIndent");
        const changeOtherRowsIndent = setNumber("otherRowsIndent");
        const changeLineSpacing = setStateProperty("lineSpacing");
        const changeCustomLineSpacing = setNumber("customLineSpacing");
        const changeBorderColorName = setStateProperty("borderColorName");
        const changeFontSize = setNumber("fontSize");
        const changeFontColorName = setStateProperty("fontColorName");
        const changeFont = setStateProperty("font");
        const changeAlignment = setStateProperty("alignment");
        const changeBold = toggleStateProperty("bold");
        const changeItalic = toggleStateProperty("italic");
        const changeUnderlined = toggleStateProperty("underlined");
        const changeStroke = toggleStateProperty("stroke");
        const changeFillingColorName = setStateProperty("fillingColorName");
        const changeConnectToPrevious = toggleStateProperty("connectToPrevious");
        const changeMarginTop = setNumber("marginTop");
        const changeMarginBottom = setNumber("marginBottom");
        const changeWordSpacing = setNumber("wordSpacing");
        const changeListName = setStateProperty("listName");
        const changePrefix = setStateProperty("prefix");
        const changeSuffix = setStateProperty("suffix");
        const changeOrderLevel = setStateProperty("orderLevel");
        const changeSuffixDistance = setStateProperty("suffixDistance");
        const changeMagicTabs = toggleStateProperty("magicTabs");
        const changeListItem = setStateProperty("listItem");
        const changeNumberingStyle = setStateProperty("numberingStyle");
        const changeContinueNumbering = toggleStateProperty("continueNumbering");
        const changeAllowRestartNumbering = toggleStateProperty("allowRestartNumbering");
        const changencludePreviousFrom = setStateProperty("includePreviousFrom");
        const changeSideNumberFont = setStateProperty("sideNumberFont");
        const changeSideNumberAlignment = setStateProperty("sideNumberAlignment");
        const changeSideNumberFontSize = setNumber("sideNumberFontSize");
        const changeSideNumberFontColor = setColor("sideNumberFontColor");
        const changeSideNumberFillingColor = setColor("sideNumberFillingColor");
        const changeSideNumberWidth = setNumber("sideNumberWidth");
        const changeSideNumberRadius = setNumber("sideNumberRadius");
        const changeTocIndentation = setStateProperty("tocIndentation");
        const changeGroupToCreate = setStateProperty("groupToCreate");
        const changeXrefToCreate = setStateProperty("xrefToCreate");
        const changeReferenceGroup = setStateProperty("referenceGroup");
        const changeShortCutWin = setShortCut("shortCutWin", "shortCutWinView");
        const changeShortCutMac = setShortCut("shortCutMac", "shortCutMacView", true);
        const changeWordStyleName = setStateProperty("wordStyleName");
        const changeSoftReturn = toggleStateProperty("softReturn");
        const changeIndentationalLevel = setStateProperty("indentationalLevel")
        const changeBackspaceActionWithContent = setStateProperty("backspaceActionWithContent");
        const changeBackspaceActionWithoutContent = setStateProperty("backspaceActionWithoutContent")
        const changeReturnActionNextSection = setStateProperty("returnActionNextSection");
        const changeReturnActionEmptySection = setStateProperty("returnActionEmptySectionStyle")
        const changeTabAction = setStateProperty("tabAction");
        const changeShiftTabAction = setStateProperty("shiftTabAction");

        const changeListType = e => {
            const { value } = e.target;
            setStateProperty("listType")(null, value);
            if (value === "ordered" && suffix === "") {
                setStateProperty("suffix")(null, ".");
            } else if (value === "unordered" && suffix === ".") {
                setStateProperty("suffix")(null, "");
            }
        };

        const changeSideNumber = e => {
            toggleStateProperty("sideNumber")(e);
            if (e.target.checked && suffix === ".") {
                setStateProperty("suffix")(null, "");
            } else if (!e.target.checked && suffix === "") {
                setStateProperty("suffix")(null, ".");
            }
        } 
        
        const changeUnicodeChar = e => {
            const newUnicodeChar = setBullet("unicodeChar")(e);
            const newUnicodeNumber = newUnicodeChar !== "" ? unicodeCharToNumber(newUnicodeChar) : "";
            setStateProperty("unicodeNumber")(null, newUnicodeNumber);
        };

        const changeUnicodeNumber = e => {
            const newUnicodeNumber = setColor("unicodeNumber")(e);
            const newUnicodeChar = newUnicodeNumber !== "" ? unicodeNumberToChar(newUnicodeNumber) : "";
            setStateProperty("unicodeChar")(null, newUnicodeChar);
        };

        const changePreviewText = e => {
            const { value } = e.target;
            if (value && value !== "<div></div>" && value !== "<br>") {
                setStateProperty("previewText")(null, getUnstyledText(value));
            } else {
                setStateProperty("previewText")(null, `<div><br></div>`);
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
            styleNameEn, changeStyleNameEn,
            styleNameDe, changeStyleNameDe,
            styleNameRu, changeStyleNameRu,
            styleNameFr, changeStyleNameFr,
        }; 

        const wordExportProps = {
            wordStyleName, changeWordStyleName,
            softReturn, changeSoftReturn,
        };

        const positioningSectionProps = {
            indentationalLevel, changeIndentationalLevel,
            backspaceActionWithContent, changeBackspaceActionWithContent,
            backspaceActionWithoutContent, changeBackspaceActionWithoutContent,
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
            includePreviousFrom, changencludePreviousFrom,
            sideNumber, changeSideNumber,
            sideNumberFont, changeSideNumberFont,
            sideNumberAlignment, changeSideNumberAlignment,
            sideNumberFontSize, changeSideNumberFontSize,
            sideNumberFontColor, changeSideNumberFontColor,
            sideNumberFillingColor, changeSideNumberFillingColor,
            sideNumberWidth, changeSideNumberWidth,
            sideNumberRadius, changeSideNumberRadius,
        };

        const referencingSectionProps = {
            referenceGroup, changeReferenceGroup,
            newGroup: xrefToCreate, changeXrefToCreate,
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
                            onClick={() => {}}
                            className="topNavButton"
                        >
                            Create
                        </Button>
                    </div>
                </div>
                    
                <DialogContent className="content">
                    <div className="content-leftSide">
                        <CustomTabs 
                            className="dialogTabs"
                            value={openedTab} 
                            onChange={changeOpenedTab} 
                            orientation="vertical"
                            color="primary"
                            indicatorColor="primary"
                        >
                            <CustomTab className="dialogTab" label="Names" />
                            <CustomTab className="dialogTab" label="WORD export" />
                            <CustomTab className="dialogTab" label="Positioning" />
                            <CustomTab className="dialogTab" label="List" />
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
                        { openedTab === 1 && <WordExportSection {...wordExportProps} /> }
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
    }
};

export default NewDecDialog;