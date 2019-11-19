import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import FrameTypeInput from "../../sections/FramesSection/FrameTypeInput";
import ColorField from "../../common/ColorField";
import {  setValue, toggleValue, setNumber, setColor } from "../../actions";
import { selectAllOnClick, getBorderPreviewStyle } from "../../helpers";

import "./style.css";

class FramesSection extends React.Component {
    onBorderTypeChange = e => {
        this.props.changeBorderType(e);
        if (e.target.value === "double" && this.props.borderThickness === "2") {
            this.props.changeBorderThickness(null, "3");
        } else if (e.target.value !== "double" && this.props.borderThickness === "3") {
            this.props.changeBorderThickness(null, "2");
        }
    };

    render() {
        const { 
            formState,
            leftBorder, changeLeftBorder, 
            rightBorder, changeRightBorder,
            topBorder, changeTopBorder, 
            bottomBorder, changeBottomBorder, 
            borderColorName, changeBorderColorName,
            borderColor, changeBorderColor,
            borderThickness, changeBorderThickness,
            borderType,
            borderConnectToPrevious, changeBorderConnectToPrevious,
         } = this.props;

        const previewStyle = getBorderPreviewStyle(formState)
    
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
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        value={borderColorName}
                        onChange={changeBorderColorName}
                        onClick={selectAllOnClick("Red")}
                    />
    
                    <span>Frame color HEX</span>
                    <ColorField 
                        colorCode={borderColor} 
                        changeColorCode={changeBorderColor}
                        required
                    />
    
                    <span>Frame thickness</span>
                    <div className="inputWithAdornment">
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="numberInput"
                            value={borderThickness}
                            onChange={changeBorderThickness}
                            onClick={selectAllOnClick("2")}
                         />                                            
                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                    </div>                        
    
                    <span>Type of frame</span>
                    <div >
                        <Select
                          input={<FrameTypeInput />}
                          value={borderType}
                          onChange={this.onBorderTypeChange}
                        >
                            <MenuItem value="solid"><b>━━━━</b></MenuItem>
                            <MenuItem value="dotted">• • • • • • •</MenuItem>
                            <MenuItem value="dashed"><b>– – – – –</b></MenuItem>
                            <MenuItem value="double">══════</MenuItem>              
                        </Select>
                    </div>
    
                    <span>Connect to previous</span>
                    <div>
                        <Checkbox 
                            checked={borderConnectToPrevious}
                            onChange={changeBorderConnectToPrevious}
                            color="primary" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        formState: form,
        leftBorder: form.leftBorder,
        rightBorder: form.rightBorder,
        topBorder: form.topBorder,
        bottomBorder: form.bottomBorder,
        borderColorName: form.borderColorName,
        borderColor: form.borderColor,
        borderThickness: form.borderThickness,
        borderType: form.borderType,
        borderConnectToPrevious: form.borderConnectToPrevious,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLeftBorder: toggleValue(dispatch)("leftBorder"),
        changeRightBorder: toggleValue(dispatch)("rightBorder"),
        changeTopBorder: toggleValue(dispatch)("topBorder"),
        changeBottomBorder: toggleValue(dispatch)("bottomBorder"),
        changeBorderColorName: setValue(dispatch)("borderColorName"),
        changeBorderColor: setColor(dispatch)("borderColor"),
        changeBorderThickness: setNumber(dispatch)("borderThickness"),
        changeBorderType: setValue(dispatch)("borderType"),
        changeBorderConnectToPrevious: toggleValue(dispatch)("borderConnectToPrevious"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(FramesSection));