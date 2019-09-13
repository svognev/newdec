import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import NativeSelect from '@material-ui/core/NativeSelect';

import CustomInput from '../../common/CustomInput';
import { getCorrectColor } from '../../../utils';

const FramesSection = (props) => {
    const { 
        leftBorder, 
        rightBorder, 
        topBorder, 
        bottomBorder, 
        changeLeftBorder,
        changeRightBorder,
        changeTopBorder,
        changeBottomBorder,
        borderColor,
        changeBorderColor,
        borderThickness,
        changeBorderThickness,
        borderType,
        changeBorderType,
     } = props;

     const correctColor = getCorrectColor(borderColor);
     const colorSampleStyle = {
         backgroundColor: `#${correctColor}`,
     };
     const previewBorderColor = correctColor !== "FFF" ? `#${correctColor}` : "red";
     const previewBorderWidth = borderThickness && !isNaN(parseFloat(borderThickness)) && parseFloat(borderThickness) <= 15
                                ? `${borderThickness}pt`
                                : "2pt";

     const previewStyle = {
         borderLeft: leftBorder ? `${previewBorderWidth} ${borderType} ${previewBorderColor}` : "none",
         marginLeft: leftBorder ? "0" : previewBorderWidth, 
         borderRight: rightBorder ? `${previewBorderWidth} ${borderType} ${previewBorderColor}` : "none",
         marginRight: rightBorder ? "0" : previewBorderWidth, 
         borderTop: topBorder ? `${previewBorderWidth} ${borderType} ${previewBorderColor}` : "none",
         marginTop: topBorder ? "0" : previewBorderWidth, 
         borderBottom: bottomBorder ? `${previewBorderWidth} ${borderType} ${previewBorderColor}` : "none",
         marginBottom: bottomBorder ? "0" : previewBorderWidth, 
     }

    return (
        <div className="dialogGrid dialogGrid_2cols">
            <div className="directionControlsContainer">
                <div className="directionsControls" style={previewStyle}>
                    <span className="directionLabel">Left</span>
                    <div className="centralColumn">
                        <span className="directionLabel">Top</span>
                        <div className="checkboxesKit crossGrid">
                            <div id="r1" className="gridCell">
                                <Checkbox 
                                    color="primary"
                                    checked={topBorder}  
                                    onChange={changeTopBorder}
                                />
                            </div>
                            <div id="r2c1" className="gridCell">
                                <Checkbox 
                                    color="primary" 
                                    checked={leftBorder}  
                                    onChange={changeLeftBorder}
                                />
                            </div>
                            <div id="r2c2" className="gridCell">
                            </div>
                            <div id="r2c3" className="gridCell">
                                <Checkbox 
                                    color="primary" 
                                    checked={rightBorder}  
                                    onChange={changeRightBorder}
                                />
                            </div>
                            <div id="r3" className="gridCell">
                                <Checkbox 
                                    color="primary"
                                    checked={bottomBorder}  
                                    onChange={changeBottomBorder}
                                />
                            </div>
                        </div>
                        <span className="directionLabel">Bottom</span>
                    </div>
                    <span className="directionLabel">Right</span>
                </div>
            </div>
            <div className="dialogGrid dialogGrid_2cols">
                <span>Frame color name</span>
                <TextField variant="outlined" margin="dense" />

                <span>Frame color HEX</span>
                <div className="colorField">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput" 
                        InputProps={{
                           startAdornment: <InputAdornment position="start">#</InputAdornment>
                        }}
                        value={borderColor}
                        onChange={changeBorderColor}
                    />
                    <div className="colorSample" style={colorSampleStyle}></div>
                </div>
                

                <span>Frame thickness</span>
                <div className="inputWithAdornment">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput"
                        value={borderThickness}
                        onChange={changeBorderThickness}
                     />                                            
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </div>                        

                <span>Type of frame</span>
                <div>
                    <NativeSelect 
                        input={ <CustomInput /> } 
                        value={borderType}
                        onChange={changeBorderType}
                    >
                        <option value="solid">Solid</option>
                        <option value="dotted">Dotted</option>
                        <option value="dashed">Dashed</option>
                        <option value="double">Double</option>
                    </NativeSelect>
                </div>

                <span>Connect to previous</span>
                <div>
                    <Checkbox color="primary" />
                </div>
            </div>
        </div>
    );
};

export default FramesSection;