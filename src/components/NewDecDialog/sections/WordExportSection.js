import React from "react";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import LabelWithAsterisk from "../common/LabelWithAsterisk";

const WordExportSection = props => {
    const { 
        wordStyleName, changeWordStyleName, 
        softReturn, changeSoftReturn, 
        validationError: { wordExportSection: validationError },
    } = props;
    return (
        <div className="dialogGrid dialogGrid_2cols">
            <LabelWithAsterisk>Style name in WORD</LabelWithAsterisk>
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