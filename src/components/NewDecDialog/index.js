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
import { getCorrectColor, getUnstyledText, unicodeNumberToChar, unicodeCharToNumber } from 'utils.js';
import { alignmentsMap } from 'constants.js';

import "./style.css";

class NewDecDialog extends React.Component {
    state = { 
        openedTab: 11,
        isList: true,
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
    };

    toggleStateProperty = (propName) => (e) => {
        this.setState({
            [propName]: e.target.checked
        });
    };

    setStateProperty = (propName) => (e, secondArg = "") => {
        const newValue = (e && e.target.value !== "" && e.target.value !== undefined) ? e.target.value : secondArg;
        this.setState({
            [propName]: newValue,
        });
    };

    setBullet = (propName) => (e) => {
        const newBullet = e.target.value.length > 1 ? e.target.value[e.target.value.length - 1] : e.target.value;
        this.setState({
            [propName]: newBullet,
        });
        return newBullet;
    };

    setColor = (propName) => (e) => {
        let input = e.target.value || "";
        
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

    setNumber = (propName) => (e) => {
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

    render() {
        const { isOpen, onClose } = this.props;
        const { setStateProperty, toggleStateProperty, setNumber, setColor, setBullet } = this;
        const { openedTab, 
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
            } = this.state;

        const changeOpenedTab = setStateProperty("openedTab");
        const changeIsList = toggleStateProperty("isList");
        const changeListType = setStateProperty("listType");
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
        
        const changeUnicodeChar = (e) => {
            const newUnicodeChar = setBullet("unicodeChar")(e);
            const newUnicodeNumber = newUnicodeChar !== "" ? unicodeCharToNumber(newUnicodeChar) : "";
            setStateProperty("unicodeNumber")(null, newUnicodeNumber);
        };

        const changeUnicodeNumber = (e) => {
            const newUnicodeNumber = setColor("unicodeNumber")(e);
            const newUnicodeChar = newUnicodeNumber !== "" ? unicodeNumberToChar(newUnicodeNumber) : "";
            setStateProperty("unicodeChar")(null, newUnicodeChar);
        };

        const changePreviewText = (e) => {
            const { value } = e.target;
            if (value && value !== "<div></div>" && value !== "<br>") {
                setStateProperty("previewText")(null, getUnstyledText(value));
            } else {
                setStateProperty("previewText")(null, `<div><br></div>`);
            }
        };

        const changeBorderType = (e) => {
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

        const listSectionProps = { 
            isList, 
            listType, 
            changeIsList, 
            changeListType, 
            listName, changeListName,
            prefix, changePrefix,
            suffix, changeSuffix,
            orderLevel, changeOrderLevel,
            suffixDistance, changeSuffixDistance,
            magicTabs, changeMagicTabs,
            listItem, changeListItem,
            unicodeNumber, changeUnicodeNumber,
            unicodeChar, changeUnicodeChar,
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
                        { openedTab === 0 && <NamesSection /> }
                        { openedTab === 1 && <WordExportSection /> }
                        { openedTab === 2 && <PositioningSection /> }
                        { openedTab === 3 && <ListSection {...listSectionProps} />}
                        { openedTab === 4 && <ReferencingSection /> }
                        { openedTab === 5 && <TypographySection {...typographySectionProps} /> }
                        { openedTab === 6 && <DistancesSection {...distancesSectionProps} /> }
                        { openedTab === 7 && <FramesSection {...framesSectionProps} /> }
                        { openedTab === 8 && <FillingSection {...fillingSectionProps} /> }
                        { openedTab === 9 && <TocSection /> }
                        { openedTab === 10 && <ShortCutsSection /> }
                        { openedTab === 11 && <TestSection {...listSectionProps} /> }
                    </div>
                </DialogContent>
            </CustomDialog>
            </ThemeProvider>
        );
    }
};

export default NewDecDialog;