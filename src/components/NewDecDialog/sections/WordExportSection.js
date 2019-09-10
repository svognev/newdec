import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const WordExportSection = (props) => {
    return (
        <div className="dialogGrid dialogGrid_2cols">
            <span>Style name in WORD</span>
            <TextField variant="outlined" margin="dense" />
            
            <span>Soft return</span>
            <div>
                <Checkbox color="primary" />
            </div>
        </div>
    );
}

export default WordExportSection;