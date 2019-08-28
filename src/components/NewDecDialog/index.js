import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';

import "./style.css";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

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
import QuickSelectSection from './sections/QuickSelectSection';

const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: pink,
    },
});

class NewDecDialog extends React.Component {
    state = { 
        openedTab: 0,
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
        this.setState({ [propName]: e.target.checked });
    }

    setStateProperty = (propName) => (e, newValue) => {
        this.setState({
            [propName]: newValue === undefined ? e.target.value : newValue,
        });
    }

    setBulletField = (e) => {
        this.setState({ bulletField: e.target.value.length > 1 ? e.target.value[e.target.value.length - 1] : e.target.value });
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
            <Dialog
                open={isOpen}
                onClose={onClose}
                aria-labelledby="form-dialog-title"
                scroll="body"
                maxWidth={false}
                className="paragraphDecorators-dialog"
                style={{ verticalAlign: "200px" }}                
            >
                <div className="paragraphDecorators-dialog__header">
                    <DialogTitle className="paragraphDecorators-dialog__title">
                        <p>Create new paragraph decorator</p>
                    </DialogTitle>
                    <div className="paragraphDecorators-dialog__header-buttons">
                        <Button 
                            variant="contained"
                            color="default"
                            onClick={onClose}
                            className="paragraphDecorators-dialog_top-button"
                        >
                            Cancel
                        </Button>
                        <Button 
                            variant="contained"
                            color="primary"
                            onClick={() => {}}
                            className="paragraphDecorators-dialog_top-button"
                        >
                            Create
                        </Button>
                    </div>
                </div>
                    
                <DialogContent className="paragraphDecorators-dialog__content">
                    <div className="paragraphDecorators-dialog__left-side">
                        <Tabs 
                            className="paragraphDecorators-dialog__tabs"
                            value={openedTab} 
                            onChange={changeOpenedTab} 
                            orientation="vertical"
                            color="primary"
                            indicatorColor="primary"
                        >
                            <Tab className="paragraphDecorators-dialog__tab" label="Names" />
                            <Tab className="paragraphDecorators-dialog__tab" label="WORD export" />
                            <Tab className="paragraphDecorators-dialog__tab" label="Positioning" />
                            <Tab className="paragraphDecorators-dialog__tab" label="List" />
                            <Tab className="paragraphDecorators-dialog__tab" label="Referencing" />
                            <Tab className="paragraphDecorators-dialog__tab" label="Typography" />
                            <Tab className="paragraphDecorators-dialog__tab" label="Distances" />
                            <Tab className="paragraphDecorators-dialog__tab" label="Frames" />
                            <Tab className="paragraphDecorators-dialog__tab" label="Filling" />
                            <Tab className="paragraphDecorators-dialog__tab" label="ToC" />
                            <Tab className="paragraphDecorators-dialog__tab" label="Short cuts" />
                            <Tab className="paragraphDecorators-dialog__tab" label="Quick select" />
                        </Tabs>
                    </div>
                    <div className="paragraphDecorators-dialog__right-side">
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
                        { openedTab === 11 && <QuickSelectSection /> }
                    </div>
                </DialogContent>
            </Dialog>
            </ThemeProvider>
        );
    }
};

export default NewDecDialog;