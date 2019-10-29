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

import { changeDecoratorForm, clearDecoratorForm } from "./actions";
import Handlers from "./Handlers";
import theme from "./theme";
import CustomTab from "./common/CustomTab";
import CustomTabs from "./common/CustomTabs";
import CustomDialog from "./common/CustomDialog";
import { alignmentsMap, HOLDER } from "./constants";
import isFormValid from "./utils/isFormValid";
import { 
    getCorrectColor, 
    getUnstyledText, 
    unicodeNumberToChar, 
    unicodeCharToNumber, 
    getListChars, 
} from "./utils";


const NewDecDialogContainer = props => {
    const { isOpen, closeDialog, updateForm, clearForm, formState } = props;

    const { 
        setStateProperty, 
        toggleStateProperty, 
        setNumber, 
        setColor, 
        setBullet, 
        setShortCut 
    } = Handlers(updateForm, formState);

    const onClose = () => {
        closeDialog();
        clearForm();
    };

    const onSaveButtonClick = () => {
        if (!isFormValid(formState)) {
            console.log(0);  //updateForm({ validationError: true });
        } else {
            console.log(1);  //saveForm(formState);
        }
    }
    
    return (
        <ThemeProvider theme={theme}>
            <NewDecDialog 
                { ...{ onClose, onSaveButtonClick, ...props} }
            />
        </ThemeProvider>
    );
};

const mapStateToProps = state => {
    return { formState: state };
};

const mapDispatchToProps = dispatch => {
    return {
        updateForm: payload => dispatch(changeDecoratorForm(payload)),
        clearForm: () => dispatch(clearDecoratorForm()),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(NewDecDialogContainer);