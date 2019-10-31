import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";

import NewDecDialog from "./components/NewDecDialog";
import { openDialog, closeDialog } from "./components/NewDecDialog/actions";
import { clearSavedDecoratorForm } from "./actions";
import DecDataParser from "./components/NewDecDialog/helpers/DecDataParser";
import theme from "./components/NewDecDialog/theme";

import "./App.css";

const App = props => {
    const { isOpen, openDialog, closeDialog, savedForm, clearSavedForm } = props;

    const openEditDialog = () => {
        openDialog(DecDataParser.parseToEdit(savedForm || {}));
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="startButtons">
                    { !savedForm ? (
                        <Button 
                            onClick={() => openDialog()}
                            color="primary"
                        >Create new</Button>
                    ) : (
                        <>
                            <Button 
                                onClick={() => openEditDialog()}
                            >Edit saved</Button>
                            <Button 
                                onClick={clearSavedForm}
                                color="secondary"
                            >Delete saved</Button>
                        </>
                    )}
                </div>
                <NewDecDialog { ...{isOpen, closeDialog}} />
            </div>
        </ThemeProvider>
    );
};

const mapStateToProps = ({ savedForm, decoratorDialog: { isOpen }}) => {
    return { isOpen, savedForm };
};

const mapDispatchToProps = dispatch => {
    return {
        openDialog: openDialog(dispatch),
        closeDialog: closeDialog(dispatch),
        clearSavedForm: () => dispatch(clearSavedDecoratorForm()),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(App);