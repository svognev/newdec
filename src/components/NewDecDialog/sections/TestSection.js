import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import CustomInputShort from '../../common/CustomInputShort';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import { getCorrectColor, selectAllOnClick } from 'utils.js';
import Preview from "components/common/Preview";
import { fontFamily } from '@material-ui/system';

const TestSection = (props) => {
    const { previewProps, fontSize, changeFontSize, fontColor, changeFontColor, fontColorName,
        changeFontColorName,
        font, 
        changeFont,
        alignment, changeAlignment, } = props;

        const correctColor = getCorrectColor(fontColor);

        const colorSampleStyle = {
            backgroundColor: `#${correctColor}`,
        };

    return (
        <>
        <div className="dialogGrid dialogGrid_2cols">
            <div className="dialogGrid dialogGrid_2minCols">
                <span>Font</span>
                <NativeSelect 
                    input={ <CustomInput /> }
                    value={font}
                    onChange={changeFont}
                >
                    <option value={"Roboto, slab-serif"}>Roboto</option>
                    <option value={"'Source Serif Pro', serif"}>Source Serif</option>
                </NativeSelect>

                <span>Alignment</span>
                <NativeSelect input={ <CustomInput /> }>
                    <option value={"left"}>Left</option>
                    <option value={"center"}>Center</option>
                    <option value={"right"}>Right</option>
                </NativeSelect>

                <span>Font size</span>
                <div className="inputWithAdornment">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput"
                        value={fontSize}
                        onChange={changeFontSize}
                        onClick={selectAllOnClick("12")}
                    />                                            
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </div>      

                <span>Font color name</span>
                <TextField 
                    variant="outlined" 
                    margin="dense"
                    value={fontColorName}
                    onChange={changeFontColorName}
                    onClick={selectAllOnClick("Black")}
                />

                <span>Font color HEX</span>
                <div className="colorField">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="paragraphDecorators-dialog__number-input" 
                        InputProps={{
                            startAdornment: <InputAdornment position="start">#</InputAdornment>,
                        }}
                        value={fontColor}
                        onChange={changeFontColor}
                        onClick={selectAllOnClick("000")}
                    />
                    <div className="colorSample" style={colorSampleStyle}></div>
                </div>
            </div>
            <div className="previewSide">
                <Preview {...previewProps} />
            </div>
        </div>
        </>
    );
};

export default TestSection;