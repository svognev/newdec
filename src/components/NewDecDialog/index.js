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
import { alignmentsMap } from 'constants.js';
import getShortCutUtils from "utils/getShortCutUtils";
import { 
    getCorrectColor, 
    getUnstyledText, 
    unicodeNumberToChar, 
    unicodeCharToNumber, 
    getListChars, 
} from 'utils';

import "./style.css";

class NewDecDialog extends React.Component {
    state = { 
        openedTab: 0,
        decKey: "",
        group: "",
        active: false,
        styleNameEn: "",
        styleNameDe: "",
        styleNameRu: "",
        styleNameFr: "",
        isList: false,
        listType: "unordered",
        bulletField: "",
        verticalAlign: "baseline",
        textTransform: "none",
        leftBorder: false,
        rightBorder: false,
        topBorder: false,
        bottomBorder: false,
        borderType: "solid",
        borderColor: "f00",
        borderColorName: "Red",
        borderThickness: "2",
        fontSize: "12",
        fontColor: "000",
        fontColorName: "Black",
        alignment: "left",
        font: "Roboto",
        fillingColor: "",
        fillingColorName: "",
        firstRowIndent: "0",
        otherRowsIndent: "0",
        lineSpacing: "1.15",
        customLineSpacing: "",
        previewText: `<div>Sample Text. You can change it.</div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam.</div>`,
        bold: false,
        italic: false,
        underlined: false,
        stroke: false,
        connectToPrevious: false,
        marginTop: "6",
        marginBottom: "6",
        wordSpacing: "0",   
        listName: "",
        prefix: "",
        suffix: "",
        orderLevel: "",
        suffixDistance: "0.25",
        magicTabs: false,
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
        tocIndentation: "",
        groupToCreate: "",
        xrefToCreate: "",
        referenceGroup: "",
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
            decKey,
            group,
            active,
            styleNameEn,
            styleNameDe,
            styleNameRu,
            styleNameFr,
            isList, 
            listType, 
            verticalAlign, 
            textTransform,
            leftBorder, 
            rightBorder,
            topBorder,
            bottomBorder, 
            borderType,
            borderColor,
            borderColorName,
            fontColor,
            fillingColor,
            borderThickness,
            firstRowIndent,
            otherRowsIndent,
            lineSpacing,
            customLineSpacing,
            previewText,
            fontSize,
            fontColorName,
            font,
            alignment,
            bold,
            italic,
            underlined,
            stroke,
            fillingColorName,
            connectToPrevious,
            marginTop,
            marginBottom,
            wordSpacing,
            listName,
            prefix,
            suffix,
            orderLevel,
            suffixDistance,
            magicTabs,
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
            tocIndentation,
            groupToCreate,
            xrefToCreate,
            referenceGroup,
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
            active, changeActive,
            styleNameEn, changeStyleNameEn,
            styleNameDe, changeStyleNameDe,
            styleNameRu, changeStyleNameRu,
            styleNameFr, changeStyleNameFr,
            newGroup: groupToCreate, 
            changeGroupToCreate,
        }; 

        const listSectionProps = { 
            listPreviewProps,
            isList, changeIsList, 
            listType, changeListType, 
            listName, changeListName,
            prefix, changePrefix,
            suffix, changeSuffix,
            orderLevel, changeOrderLevel,
            suffixDistance, changeSuffixDistance,
            magicTabs, changeMagicTabs,
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
            newGroup: xrefToCreate,
            changeXrefToCreate,
        };

        const typographySectionProps = { 
            verticalAlign, 
            textTransform, 
            changeVerticalAlign, 
            changeTextTransform,
            fontColor,
            changeFontColor,
            previewProps,
            fontSize,
            changeFontSize,
            fontColorName,
            changeFontColorName,
            font, 
            changeFont,
            alignment, changeAlignment,
            bold, changeBold,
            italic, changeItalic,
            underlined, changeUnderlined,
            stroke, changeStroke,
        };

        const distancesSectionProps = {
            previewProps,
            firstRowIndent,
            otherRowsIndent,
            lineSpacing,
            changeFirstRowIndent,
            changeOtherRowsIndent,
            changeLineSpacing,
            marginTop, changeMarginTop,
            marginBottom, changeMarginBottom,
            wordSpacing, changeWordSpacing,
            customLineSpacing, changeCustomLineSpacing,
        };

        const framesSectionProps = { 
            leftBorder, 
            rightBorder, 
            topBorder, 
            bottomBorder, 
            changeLeftBorder, 
            changeRightBorder, 
            changeTopBorder, 
            changeBottomBorder, 
            borderColor,
            changeBorderColor,
            borderThickness,
            changeBorderThickness,
            borderType,
            changeBorderType,
            borderColorName,
            changeBorderColorName,
        };

        const fillingSectionProps = { 
            fillingColor, 
            changeFillingColor,
            fillingColorName,
            changeFillingColorName,
            previewProps,
            connectToPrevious,
            changeConnectToPrevious,
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
                        { openedTab === 1 && <WordExportSection /> }
                        { openedTab === 2 && <PositioningSection /> }
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