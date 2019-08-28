import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { getCorrectColor } from '../../../utils';

const FillingSection = ({ fillingColor, changeFillingColor }) => {

    const correctColor = getCorrectColor(fillingColor);
    const colorSampleStyle = {
        backgroundColor: `#${correctColor}`,
    };

    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Background color name</span></li>
                    <li><span>Background color HEX</span></li>
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
                            value={fillingColor}
                            onChange={changeFillingColor}
                         />     
                        <div className="paragraphDecorators-dialog__color-sample" style={colorSampleStyle}></div>                                                                                   
                    </li>                
                </div>
                <div className="paragraphDecorators-dialog__col ">
                </div>
            </ul>
                
        </form>
    );
}

export default FillingSection;