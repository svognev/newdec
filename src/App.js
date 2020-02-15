import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";

import DecoratorDialog from "./components/DecoratorDialog";
import { openDialog } from "./components/DecoratorDialog/actions";
import { clearSavedDecoratorForm,  saveDecoratorForm } from "./actions";
import { DecDataConverter } from "./components/DecoratorDialog/helpers";
import theme from "./components/DecoratorDialog/theme";

import "./App.css";

const App = props => {
    const { openDialog, saveForm, clearSavedForm, savedForm } = props;

    const openEditDialog = () => {
        openDialog(DecDataConverter.convertToEdit(savedForm || {}));
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
                                onClick={openEditDialog}
                            >Edit saved</Button>
                            <Button 
                                onClick={clearSavedForm}
                                color="secondary"
                            >Delete saved</Button>
                        </>
                    )}
                </div>
                <DecoratorDialog sendForm={saveForm} />
            </div>
        </ThemeProvider>
    );
};

const mapStateToProps = ({ savedForm }) => {
    return { savedForm };
};

const mapDispatchToProps = dispatch => {
    return {
        openDialog: openDialog(dispatch),
        saveForm: payload => dispatch(saveDecoratorForm(payload)),
        clearSavedForm: () => dispatch(clearSavedDecoratorForm()),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(App);