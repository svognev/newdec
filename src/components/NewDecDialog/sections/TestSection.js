import React from "react";
import TextField from "@material-ui/core/TextField";

const ShortCutSection = (props) => {
    const {
        shortCutWinView, changeShortCutWin, 
        shortCutMacView, changeShortCutMac,
    } = props;

    return (
        <div className="dialogGrid dialogGrid_2cols">
            <span>Windows</span>
            <div className="largeTextField">
                <TextField 
                    value={shortCutWinView}
                    onKeyDown={changeShortCutWin} 
                    variant="outlined" 
                    margin="dense"
                />
            </div>

            <span>Mac</span>
            <div className="largeTextField">
                <TextField 
                    value={shortCutMacView}
                    onKeyDown={changeShortCutMac} 
                    variant="outlined" 
                    margin="dense" 
                />     
            </div>          
        </div>
    );
}

export default ShortCutSection;