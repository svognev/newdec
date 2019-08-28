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

import { getCorrectColor } from '../../../utils';

const TypographySection = (props) => {
    const { 
        verticalAlign, 
        textTransform, 
        changeVerticalAlign, 
        changeTextTransform,
        fontColor,
        changeFontColor,
    } = props;

    const correctColor = getCorrectColor(fontColor);

    const colorSampleStyle = {
        backgroundColor: `#${correctColor}`,
    };
    
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Font</span></li>
                    <li><span>Alignment</span></li>
                    <li><span>Font size</span></li>
                    <li><span>Font color name</span></li>
                    <li><span>Font color HEX</span></li>
                    <li className="paragraphDecorators-dialog__fraction-title">
                        <span>Stylings</span>
                    </li>
                    <li><span>Sub/Superscript</span></li>
                    <li><span>Text transform</span></li>
                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                            <option value={"Helvetica New"}>Helvetica New</option>
                            <option value={"Georgia"}>Georgia</option>
                            <option value={"Roboto"}>Roboto</option>
                            <option value={"Open Sans"}>Open Sans</option>
                        </NativeSelect>
                    </li>
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                            <option value={"left"}>Left</option>
                            <option value={"center"}>Center</option>
                            <option value={"right"}>Right</option>
                        </NativeSelect>
                    </li>
                    <li>
                        <NativeSelect input={ <CustomInputShort /> }>
                            <option value={"12"}>12</option>
                            <option value={"14"}>14</option>
                            <option value={"16"}>16</option>
                        </NativeSelect>
                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                    </li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="paragraphDecorators-dialog__number-input" 
                            InputProps={{
                                startAdornment: <InputAdornment position="start">#</InputAdornment>,
                              }}
                            value={fontColor}
                            onChange={changeFontColor}
                         />
                         <div className="paragraphDecorators-dialog__color-sample" style={colorSampleStyle}></div>                                            
                    </li>
                    <li className="paragraphDecorators-dialog__fraction-title">
                        <div className="paragraphDecorators-dialog__labeled-checkbox">
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Bold"
                                labelPlacement="end"
                            />
                        </div>
                        <div className="paragraphDecorators-dialog__labeled-checkbox">
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Italic"
                                labelPlacement="end"
                            />
                        </div>
                        <div className="paragraphDecorators-dialog__labeled-checkbox">
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Underlined"
                                labelPlacement="end"
                            />
                        </div>
                        <div className="paragraphDecorators-dialog__labeled-checkbox">
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Stroke"
                                labelPlacement="end"
                            />
                        </div>
                    </li>
                    <li>
                        <RadioGroup 
                            aria-label="verticalAlign" 
                            name="verticalAlign" 
                            value={verticalAlign} 
                            onChange={changeVerticalAlign} 
                            row
                        >
                            <div className="paragraphDecorators-dialog__labeled-checkbox">
                                <FormControlLabel
                                    value=""
                                    control={<Radio color="primary" />}
                                    label="No"
                                    labelPlacement="end"
                                />
                            </div>
                            <div className="paragraphDecorators-dialog__labeled-checkbox">
                                <FormControlLabel
                                    value="subscript"
                                    control={<Radio color="primary" />}
                                    label="Subscript"
                                    labelPlacement="end"
                                />
                            </div>
                            <div className="paragraphDecorators-dialog__labeled-checkbox">
                                <FormControlLabel
                                    value="superscript"
                                    control={<Radio color="primary" />}
                                    label="Superscript"
                                    labelPlacement="end"
                                />
                            </div>
                        </RadioGroup>
                    </li>
                    <li>
                        <RadioGroup 
                            aria-label="textTransform" 
                            name="textTransform" 
                            value={textTransform} 
                            onChange={changeTextTransform} 
                            row
                        >
                            <div className="paragraphDecorators-dialog__labeled-checkbox">
                                <FormControlLabel
                                    value=""
                                    control={<Radio color="primary" />}
                                    label="No"
                                    labelPlacement="end"
                                />
                            </div>
                            <div className="paragraphDecorators-dialog__labeled-checkbox">
                                <FormControlLabel
                                    value="lowercase"
                                    control={<Radio color="primary" />}
                                    label="Lowercase"
                                    labelPlacement="end"
                                />
                            </div>
                            <div className="paragraphDecorators-dialog__labeled-checkbox">
                                <FormControlLabel
                                    value="uppercase"
                                    control={<Radio color="primary" />}
                                    label="Uppercase"
                                    labelPlacement="end"
                                />
                            </div>
                        </RadioGroup>
                    </li>

                </div>
                <div className="paragraphDecorators-dialog__col ">
                </div>
            </ul>
                
        </form>
    );
}

export default TypographySection;