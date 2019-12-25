import React from "react";
import { connect } from "react-redux";

import Checkbox from "@material-ui/core/Checkbox";

import { toggleValue } from "../actions";

const ConnectToPreviousField = ({ connectToPrevious, changeConnectToPrevious }) => (
    <>
        <span>Merge sections</span>
        <div className="unlabeledCheckbox">
            <Checkbox 
                checked={connectToPrevious}
                onChange={changeConnectToPrevious}
                color="primary" 
            />
        </div>
    </>
);

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        connectToPrevious: form.connectToPrevious,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeConnectToPrevious: toggleValue(dispatch)("connectToPrevious"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(ConnectToPreviousField));