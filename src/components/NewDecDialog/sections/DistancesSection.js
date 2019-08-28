import React from 'react';

import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInputShort from '../../common/CustomInputShort';
import InputAdornment from '@material-ui/core/InputAdornment';

const DistancesSection = (props) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Margin top</span></li>
                    <li><span>Margin bottom</span></li>
                    <li><span>1st row indent</span></li>
                    <li><span>Other rows indent</span></li>
                    <li><span>Line spacing</span></li>
                </div>
                <div className="paragraphDecorators-dialog__col">
                <li>
                    <NativeSelect input={ <CustomInputShort /> }>
                        <option value={"6"}>6</option>
                        <option value={"8"}>8</option>
                        <option value={"10"}>10</option>
                    </NativeSelect>
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </li>
                <li>
                    <NativeSelect input={ <CustomInputShort /> }>
                        <option value={"6"}>6</option>
                        <option value={"8"}>8</option>
                        <option value={"10"}>10</option>
                    </NativeSelect>
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </li>
                <li>
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="paragraphDecorators-dialog__number-input" 
                     />                                            
                    <InputAdornment variant="filled" position="end">cm</InputAdornment>
                </li>
                <li>
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="paragraphDecorators-dialog__number-input" 
                     />                                            
                    <InputAdornment variant="filled" position="end">cm</InputAdornment>
                </li>
                <li>
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="paragraphDecorators-dialog__number-input" 
                     />                                            
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </li>
                </div>
                <div className="paragraphDecorators-dialog__col ">
                </div>
            </ul>
                
        </form>
    );
}

export default DistancesSection;