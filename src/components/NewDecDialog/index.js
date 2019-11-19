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
import { alignmentsMap } from "./constants";

import { 
    fillMissedFields, 
    DecDataParser, 
    getTabsErrorState,
    getCorrectColor, 
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
                        { openedTab === 3 && <ListSection /> }
                        { openedTab === 4 && <ReferencingSection /> }
                        { openedTab === 5 && <TypographySection /> }
                        { openedTab === 6 && <DistancesSection /> }
                        { openedTab === 7 && <FramesSection /> }
                        { openedTab === 8 && <FillingSection /> }
                        { openedTab === 9 && <TocSection /> }
                        { openedTab === 10 && <ShortCutsSection /> }
                        { openedTab === 11 && <TestSection /> }
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