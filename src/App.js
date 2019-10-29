import React from "react";
import { connect } from "react-redux";

import NewDecDialog from "./components/NewDecDialog";
import { openDialog, closeDialog } from "./components/NewDecDialog/actions";
import DecDataParser from "./components/NewDecDialog/helpers/DecDataParser";

import "./App.css";

const App = props => {
    const { isOpen, openDialog, closeDialog } = props;

    const openEditDialog = () => {
        openDialog(DecDataParser.parseToEdit({ decKey: "hello", active: true}));
    };

    return (
        <div className="App">
            <button onClick={() => openDialog()}>Create new</button>
            <button onClick={() => openEditDialog()}>Edit saved</button>
            <NewDecDialog { ...{isOpen, closeDialog}} />
        </div>
    );
};

const mapStateToProps = ({ isOpen }) => {
    return { isOpen };
};

const mapDispatchToProps = dispatch => {
    return {
        openDialog: openDialog(dispatch),
        closeDialog: closeDialog(dispatch),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(App);