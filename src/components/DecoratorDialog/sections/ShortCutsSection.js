import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

import { setShortCut } from "../actions";

const ShortCutSection = ({ shortCutWinView, shortCutMacView, changeShortCutWin, changeShortCutMac }) => {
    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
            <span>Mac</span>
            <div className="largeTextField">
                <TextField
                    value={shortCutMacView}
                    onKeyDown={changeShortCutMac}
                    variant="outlined"
                    margin="dense"
                />
            </div>

            <span>Windows</span>
            <div className="largeTextField">
                <TextField
                    value={shortCutWinView}
                    onKeyDown={changeShortCutWin}
                    variant="outlined"
                    margin="dense"
                />
            </div>
        </div>
    );
};

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        shortCutWinView: form.shortCutWinView,
        shortCutMacView: form.shortCutMacView,
    };
};

const mapDispatchToProps = dispatch => {
    return {       
        changeShortCutWin: setShortCut(dispatch)("shortCutWin", "shortCutWinView"),
        changeShortCutMac: setShortCut(dispatch)("shortCutMac", "shortCutMacView"),
    };
};

export default (connect(mapStateToProps, mapDispatchToProps)(ShortCutSection));