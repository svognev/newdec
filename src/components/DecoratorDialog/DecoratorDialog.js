import React from "react";
import { connect } from "react-redux";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";

import NamesSection from "./sections/NamesSection";
import PositioningSection from "./sections/PositioningSection";
import ListSection from "./sections/ListSection";
import ReferencingSection from "./sections/ReferencingSection";
import TypographySection from "./sections/TypographySection";
import DistancesSection from "./sections/DistancesSection";
import FramesSection from "./sections/FramesSection";
import FillingSection from "./sections/FillingSection";
import TocSection from "./sections/TocSection";
import ShortCutsSection from "./sections/ShortCutsSection";
// import TestSection from "./sections/TestSection";

import theme from "./theme";
import CustomTab from "./common/CustomTab";
import CustomErrorTab from "./common/CustomErrorTab";
import CustomTabs from "./common/CustomTabs";
import CustomDialog from "./common/CustomDialog";
import { saveDecoratorForm } from "../../actions";
import { 
    closeDialog, 
    clearDecoratorForm, 
    switchDecDialogTab, 
    updateValidationError 
} from "./actions";
import { 
    fillMissedFields, 
    DecDataParser, 
    getTabsErrorState,
    getTabNumberToSwitch,
} from "./helpers";

import "./style.css";

class DecoratorDialog extends React.Component {
    onClose = () => {
        this.props.closeDialog();
        this.props.clearForm();
    };

    onSaveButtonClick = () => {
        const { formState, updateValidationError, switchTab, sendForm } = this.props;
        const tabsErrorState = getTabsErrorState(formState);
        if (tabsErrorState) {
            updateValidationError(tabsErrorState);
            switchTab(getTabNumberToSwitch(tabsErrorState));
        } else {
            const formToSend = DecDataParser.parseToSend(fillMissedFields(formState));
            sendForm(formToSend);
            this.onClose();
        }
    };

    onTabSwitch = (e, tabNumber) => {
        this.props.switchTab(tabNumber);
    }

    render() {
        const { 
            isOpen, 
            openedTab,
            validationError, 
            isEditMode,
        } = this.props;
    
        return (
            <ThemeProvider theme={theme}>
                <CustomDialog
                    open={isOpen}
                    onClose={this.onClose}
                    aria-labelledby="form-dialog-title"
                    scroll="body"
                    className="decoratorDialog"
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
                                onClick={this.onClose}
                                className="topNavButton"
                            >
                                Cancel
                            </Button>
                            <Button 
                                variant="contained"
                                color="primary"
                                onClick={this.onSaveButtonClick}
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
                                onChange={this.onTabSwitch} 
                                orientation="vertical"
                                color="primary"
                                indicatorColor="primary"
                            >
                                { validationError.namesSection 
                                    ? ( <CustomErrorTab className="dialogTab" label="Decorator's name" /> )
                                    :  ( <CustomTab className="dialogTab" label="Decorator's name" /> ) }
    
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
                                {/* <CustomTab className="dialogTab" label="Test" /> */}
                            </CustomTabs>
                        </div>
                        <div className="content-rightSide">
                            { openedTab === 0 && <NamesSection /> }
                            { openedTab === 1 && <PositioningSection /> }
                            { openedTab === 2 && <ListSection /> }
                            { openedTab === 3 && <ReferencingSection /> }
                            { openedTab === 4 && <TypographySection /> }
                            { openedTab === 5 && <DistancesSection /> }
                            { openedTab === 6 && <FramesSection /> }
                            { openedTab === 7 && <FillingSection /> }
                            { openedTab === 8 && <TocSection /> }
                            { openedTab === 9 && <ShortCutsSection /> }
                            {/* openedTab === 10 && <TestSection /> */}
                        </div>
                    </DialogContent>
                </CustomDialog>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form, isOpen, openedTab, validationError, isEditMode }}) => {
    return { 
        formState: form,
        isOpen,
        openedTab,
        validationError, 
        isEditMode,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeDialog: closeDialog(dispatch),
        clearForm: () => dispatch(clearDecoratorForm()),
        switchTab: payload => dispatch(switchDecDialogTab(payload)),
        updateValidationError: payload => dispatch(updateValidationError(payload)),
        saveForm: payload => dispatch(saveDecoratorForm(payload)),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(DecoratorDialog);