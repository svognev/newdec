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

import "./style.css";

class NewDecDialog extends React.Component {
    state = { 
        openedTab: 11,
        isList: true,
        listType: "unordered",
        bulletField: "",
        verticalAlign: "",
        textTransform: "",
        leftBorder: true,
        rightBorder: true,
        topBorder: true,
        bottomBorder: true,
        borderColor: "",
        fontColor: "",
        fillingColor: "",
        borderThickness: "",
        firstRowIndent: "",
        otherRowsIndent: "",
        lineSpacing: "",
    };

    toggleStateProperty = (propName) => (e) => {
        this.setState({
            [propName]: e.target.checked
        });
    }

    setStateProperty = (propName) => (e, newValue) => {
        this.setState({
            [propName]: newValue === undefined ? e.target.value : newValue,
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

        const filteredInput = input.replace(",", ".").trim().match(/[0-9a-f]+/i) 
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
                borderColor,
                fontColor,
                fillingColor,
                borderThickness,
                firstRowIndent,
                otherRowsIndent,
                lineSpacing,
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
        };

        const fillingSectionProps = { fillingColor, changeFillingColor };
        
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
                        { openedTab === 11 && <TestSection /> }
                    </div>
                </DialogContent>
            </CustomDialog>
            </ThemeProvider>
        );
    }
};

export default NewDecDialog;