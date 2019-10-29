import React from "react";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

const WordExportSection = ({ wordStyleName, changeWordStyleName, softReturn, changeSoftReturn, validationError, }) => {
    return (
        <div className="dialogGrid dialogGrid_2cols">
            <span>Style name in WORD</span>
            <TextField 
                value={wordStyleName}
                onChange={changeWordStyleName}
                error={validationError && !wordStyleName}
                variant="outlined" 
                margin="dense" 
            />
            
            <span>Soft return</span>
            <div>
                <Checkbox 
                    checked={softReturn}
                    onChange={changeSoftReturn}
                    color="primary" 
                />
            </div>
        </div>
    );
}

export default WordExportSection;