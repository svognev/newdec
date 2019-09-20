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
import { getCorrectColor } from 'utils.js';
import { alignmentsMap } from 'constants.js';

import "./style.css";

class NewDecDialog extends React.Component {
    state = { 
        openedTab: 5,
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
        firstRowIndent: "",
        otherRowsIndent: "",
        lineSpacing: "",
        previewText: `<div>Sample Text. You can change it.</div><div><br /></div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam.</div>`,
        bold: false,
        italic: false,
        underlined: false,
        stroke: false,
        connectToPrevious: false,
    };

    toggleStateProperty = (propName) => (e) => {
        this.setState({
            [propName]: e.target.checked
        });
    }

    setStateProperty = (propName) => (e, newValue) => {
        this.setState({
            [propName]: e.target.value ? e.target.value : typeof newValue === "number" ? newValue : "",
        });
    }

    setBulletField = (e) => {
        this.setState({
            bulletField: e.target.value.length > 1 ? e.target.value[e.target.value.length - 1] : e.target.value 
        });
    } 

    setColor = (propName) => (e) => {
        let input = e.target.value || "";
        
        const filteredInput = input.replace("#", "").trim().match(/[0-9a-f]+/i) 
                              ? input.replace("#", "").trim().match(/[0-9a-f]+/i)[0].slice(0, 6)
                              : "" ;
        
        if (filteredInput === this.state[propName]) {
            return;
        }
        this.setState({
            [propName]: filteredInput,
        });
    }

    setNumber = (propName) => (e) => {
        let input = e.target.value || "";

        const filteredInput = input.replace(",", ".").trim().match(/[0-9]+/i) 
                              ? input.replace(",", ".").trim().match(/\d+[.,]?\d*/)[0]
                              : "" ;

        if (filteredInput === this.state[propName]) {
            return;
        }
        this.setState({
            [propName]: filteredInput,
        });
    }

    render() {
        const { isOpen, onClose } = this.props;
        const { openedTab, 
                isList, 
                listType, 
                bulletField, 
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
            } = this.state;

        const { setBulletField } = this;
        const changeOpenedTab = this.setStateProperty("openedTab");
        const changeIsList = this.toggleStateProperty("isList");
        const changeListType = this.setStateProperty("listType");
        const changeVerticalAlign = this.setStateProperty("verticalAlign");
        const changeTextTransform = this.setStateProperty("textTransform");
        const changeLeftBorder = this.toggleStateProperty("leftBorder");
        const changeRightBorder = this.toggleStateProperty("rightBorder");
        const changeTopBorder = this.toggleStateProperty("topBorder");
        const changeBottomBorder = this.toggleStateProperty("bottomBorder");
        const changeBorderColor = this.setColor("borderColor");
        const changeFontColor = this.setColor("fontColor");
        const changeFillingColor = this.setColor("fillingColor");
        const changeBorderThickness = this.setNumber("borderThickness");
        const changeFirstRowIndent = this.setNumber("firstRowIndent");
        const changeOtherRowsIndent = this.setNumber("otherRowsIndent");
        const changeLineSpacing = this.setNumber("lineSpacing");
        const changeBorderColorName = this.setStateProperty("borderColorName");
        const changeFontSize = this.setNumber("fontSize");
        const changeFontColorName = this.setStateProperty("fontColorName");
        const changeFont = this.setStateProperty("font");
        const changeAlignment = this.setStateProperty("alignment");
        const changeBold = this.toggleStateProperty("bold");
        const changeItalic = this.toggleStateProperty("italic");
        const changeUnderlined = this.toggleStateProperty("underlined");
        const changeStroke = this.toggleStateProperty("stroke");
        const changeFillingColorName = this.setStateProperty("fillingColorName");
        const changeConnectToPrevious = this.toggleStateProperty("connectToPrevious");

        const changePreviewText = (e) => {
            if (e.target.value && e.target.value !== "<div></div>" && e.target.value !== "<br>") {
                if (e.target.value[0] !== "<") {
                    this.setStateProperty("previewText")({ target: { value: `<div>${e.target.value}</div>`}});
                } else {
                    this.setStateProperty("previewText")(e);
                }
            } else {
                this.setStateProperty("previewText")({ target: { value: `<div><br></div>`}});
            }
        };

        const changeBorderType = (e) => {
            this.setStateProperty("borderType")(e);
            if (e.target.value === "double" && borderThickness === "2") {
                changeBorderThickness({ target: { value: "3"}});
            }
            if (e.target.value !== "double" && borderThickness === "3") {
                changeBorderThickness({ target: { value: "2"}});
            }
         };

        const previewStyle = {
            fontSize: !fontSize ? "0" : `${fontSize <= 120 ? fontSize : 120}pt`,
            color: `#${getCorrectColor(fontColor, "f5f5f5")}`,
            fontFamily: font,
            alignItems: alignmentsMap[alignment],
            textAlign: alignment,
            fontWeight: bold ? "bold" : "normal",
            fontStyle: italic ? "italic" : "normal",
            textDecoration: `${underlined ? "underline" : ""}${stroke ? " line-through" : ""}`.trim() || "none",
            verticalAlign,
            textTransform: textTransform !== "small-caps" ? textTransform : "none",
            fontVariant: textTransform === "small-caps" ? textTransform : "normal",
            background: `content-box #${getCorrectColor(fillingColor, "f5f5f5")}`,
        };

        const previewProps = { previewText, changePreviewText, previewStyle };

        const listSectionProps = { 
            isList, 
            listType, 
            changeIsList, 
            changeListType, 
            bulletField, 
            setBulletField,
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
            firstRowIndent,
            otherRowsIndent,
            lineSpacing,
            changeFirstRowIndent,
            changeOtherRowsIndent,
            changeLineSpacing,
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
                        { openedTab === 11 && <TestSection {...fillingSectionProps} /> }
                    </div>
                </DialogContent>
            </CustomDialog>
            </ThemeProvider>
        );
    }
};

export default NewDecDialog;