import React from "react";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

import Preview from "../common/Preview";
import ColorField from "../common/ColorField";

const  FillingSection = (props) => {
    const { 
        previewProps,
        fillingColorName, changeFillingColorName,
        fillingColor, changeFillingColor,
        fillingConnectToPrevious, changefillingConnectToPrevious,
     } = props;

    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_flexStartAligned">
            <div className="dialogGrid dialogGrid_2minCols">
                <span>Filling color name</span>
                <div>
                    <TextField 
                        variant="outlined" 
                        margin="dense"
                        className="mediumTextField" 
                        value={fillingColorName}
                        onChange={changeFillingColorName}
                    />
                </div>

                <span>Filling color HEX</span>
                <ColorField 
                    colorCode={fillingColor} 
                    changeColorCode={changeFillingColor}
                />

                <span>Connect to previous</span>
                <div>
                    <Checkbox 
                        color="primary" 
                        checked={fillingConnectToPrevious} 
                        onChange={changefillingConnectToPrevious} 
                    />
                </div>
            </div>
            <div className="previewSide">
                <Preview {...previewProps} />
            </div>
            
        </div>
    );
};

export default FillingSection;