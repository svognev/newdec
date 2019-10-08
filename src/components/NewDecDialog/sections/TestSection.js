import React from "react";

import TextField from '@material-ui/core/TextField';
import { detectOS } from "utils";
const ShortCutSection = (props) => {
    const {
        shortCutWinView, changeShortCutWin, 
        shortCutMacView, changeShortCutMac,
    } = props;
    const currentOS = detectOS();
    console.log(shortCutWinView, shortCutMacView,)
    return (
        <div className="dialogGrid dialogGrid_2cols">
            <span>Windows</span>
            <div>
                <TextField 
                    value={shortCutWinView}
                    onKeyDown={changeShortCutWin} 
                    variant="outlined" 
                    margin="dense"
                    disabled={currentOS !== "Windows"}
                />
            </div>

            <span>Mac</span>
            <div>
                <TextField 
                    value={shortCutMacView}
                    onKeyDown={changeShortCutMac} 
                    variant="outlined" 
                    margin="dense" 
                    disabled={currentOS !== "MacOS"}
                />     
            </div>          
        </div>
    );
}

export default ShortCutSection;