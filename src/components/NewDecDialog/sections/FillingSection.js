import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { getCorrectColor, selectAllOnClick } from 'utils.js';
import Preview from "components/common/Preview";

const  FillingSection = (props) => {
    const { previewProps, fillingColor, changeFillingColor, fillingColorName, changeFillingColorName, } = props;
        const correctColor = getCorrectColor(fillingColor);
        const colorSampleStyle = {
            backgroundColor: `#${correctColor}`,
        };

    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_flexStartAligned">
            <div className="dialogGrid dialogGrid_2minCols">
                <span>Filling color name</span>
                <div>
                    <TextField 
                        variant="outlined" 
                        margin="dense"
                        className="middleSizeTextInput" 
                        value={fillingColorName}
                        onChange={changeFillingColorName}
                    />
                </div>
                <span>Filling color HEX</span>
                <div className="colorField">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput" 
                        InputProps={{
                            startAdornment: <InputAdornment position="start">#</InputAdornment>
                        }}
                        value={fillingColor}
                        onChange={changeFillingColor}
                        onClick={selectAllOnClick()}
                    />
                    <div className="colorSample" style={colorSampleStyle}></div>
                </div>
            </div>
            <div className="previewSide">
                <Preview {...previewProps} />
            </div>
        </div>
    );
};

export default FillingSection;