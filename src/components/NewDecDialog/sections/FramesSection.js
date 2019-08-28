import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';

const FramesSection = (props) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Frame color name</span></li>
                    <li><span>Frame color HEX</span></li>
                    <li><span>Frame thickness</span></li>
                    <li><span>Connect to previous</span></li>
                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="paragraphDecorators-dialog__number-input" 
                            InputProps={{
                                startAdornment: <InputAdornment position="start">#</InputAdornment>,
                              }}
                         />                                            
                    </li>
                    <li>
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="paragraphDecorators-dialog__number-input" 
                     />                                            
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </li>
                <li><Checkbox color="primary" /></li>
                </div>
                <div className="paragraphDecorators-dialog__col ">
                </div>
            </ul>
                
        </form>
    );
}

export default FramesSection;