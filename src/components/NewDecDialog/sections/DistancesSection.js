import React from "react";

import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputAdornment from "@material-ui/core/InputAdornment";

import CustomInputShort from "../common/CustomInputShort";
import Preview from "../common/Preview";
import { selectAllOnClick } from "../utils";

const DistancesSection = (props) => {
    const {
        previewProps,
        marginTop, changeMarginTop,
        marginBottom, changeMarginBottom,
        firstRowIndent, changeFirstRowIndent,
        otherRowsIndent, changeOtherRowsIndent,
        lineSpacing, changeLineSpacing,
        customLineSpacing, changeCustomLineSpacing,
        wordSpacing, changeWordSpacing,
    } = props;
    
    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_flexStartAligned">
            <div className="dialogGrid dialogGrid_2minCols">
                <span>Margin top</span>
                <div className="inputWithAdornment">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput"
                        value={marginTop}
                        onChange={changeMarginTop}
                        onClick={selectAllOnClick("6")}
                    />                                            
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </div> 

                <span>Margin bottom</span>
                <div className="inputWithAdornment">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput"
                        value={marginBottom}
                        onChange={changeMarginBottom}
                        onClick={selectAllOnClick("6")}
                    />                                            
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </div> 

                <span>1st row indent</span>
                <div className="inputWithAdornment">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput"
                        value={firstRowIndent}
                        onChange={changeFirstRowIndent}
                    />                                            
                    <InputAdornment variant="filled" position="end">cm</InputAdornment>
                </div>

                <span>Other rows indent</span>
                <div className="inputWithAdornment">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput"
                        value={otherRowsIndent}
                        onChange={changeOtherRowsIndent}
                    />                                            
                    <InputAdornment variant="filled" position="end">cm</InputAdornment>
                </div>

                <span>Line spacing</span>
                <div>
                    <NativeSelect 
                        input={ <CustomInputShort /> } 
                        value={lineSpacing} 
                        onChange={changeLineSpacing} 
                    >
                        <option value="1.0">1.0</option>
                        <option className="highlightedOption" value="1.15">1.15</option>
                        <option value="1.5">1.5</option>
                        <option value="2.0">2.0</option>
                        <option value="2.5">2.5</option>
                        <option value="3.0">3.0</option>
                        <option value="custom">Custom</option>
                    </NativeSelect> 
                    {
                    lineSpacing === "custom" && 
                    (
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="numberInput"
                            value={customLineSpacing}
                            onChange={changeCustomLineSpacing}
                        />                                            
                    )
                }
                </div>
                   
                    
                <span>Word spacing</span>
                <div className="inputWithAdornment">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput"
                        value={wordSpacing}
                        onChange={changeWordSpacing}
                        onClick={selectAllOnClick("0")}
                    />                                            
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </div> 
            </div>
            <div className="previewSide">
                <Preview {...previewProps} />
            </div>
        </div>
    );
};

export default DistancesSection;