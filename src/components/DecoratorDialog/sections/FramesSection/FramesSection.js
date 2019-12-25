import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import FrameTypeInput from "../../sections/FramesSection/FrameTypeInput";
import Preview from "../../common/Preview";
import ColorField from "../../common/ColorField";
import ConnectToPreviousField from "../../common/ConnectToPreviousField";
import generateBorderPreviewStyle from "./generateBorderPreviewStyle";
import { setValue, toggleValue, setNumber, setColor } from "../../actions";
import { selectAllOnClick } from "../../helpers";
import { DEFAULT_BORDER_COLOR, DEFAULT_BORDER_THICKNESS } from "../../constants";

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
            previewProps,
            formState,
            borderLeft, changeBorderLeft, 
            borderRight, changeBorderRight,
            borderTop, changeBorderTop, 
            borderBottom, changeBorderBottom, 
            borderColor, changeBorderColor,
            borderThickness, changeBorderThickness,
            borderType,
         } = this.props;

        const previewStyle = generateBorderPreviewStyle(formState)
    
        return (
            <div className="dialogGrid dialogGrid_2cols dialogGrid_flexStartAligned">
                <div>
                    <div className="directionControlsContainer">
                        <div className="directionsControls" style={previewStyle}>
                            <span className="directionLabel">Left</span>
                            <div className="centralColumn">
                                <span className="directionLabel">Top</span>
                                <div className="checkboxesKit crossGrid">
                                    <div id="r1" className="gridCell">
                                        <Checkbox 
                                            color="primary"
                                            checked={borderTop}  
                                            onChange={changeBorderTop}
                                        />
                                    </div>
                                    <div id="r2c1" className="gridCell">
                                        <Checkbox 
                                            color="primary" 
                                            checked={borderLeft}  
                                            onChange={changeBorderLeft}
                                        />
                                    </div>
                                    <div id="r2c2" className="gridCell">
                                    </div>
                                    <div id="r2c3" className="gridCell">
                                        <Checkbox 
                                            color="primary" 
                                            checked={borderRight}  
                                            onChange={changeBorderRight}
                                        />
                                    </div>
                                    <div id="r3" className="gridCell">
                                        <Checkbox 
                                            color="primary"
                                            checked={borderBottom}  
                                            onChange={changeBorderBottom}
                                        />
                                    </div>
                                </div>
                                <span className="directionLabel">Bottom</span>
                            </div>
                            <span className="directionLabel">Right</span>
                        </div>
                    </div>
                    <div className="dialogGrid dialogGrid_2cols">
                        <span>Frame color</span>
                        <ColorField 
                            colorCode={borderColor} 
                            changeColorCode={changeBorderColor}
                            defaultColorCode={DEFAULT_BORDER_COLOR}
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
                                onClick={selectAllOnClick(DEFAULT_BORDER_THICKNESS)}
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

                        <ConnectToPreviousField />
                    </div>
                </div>
                <div className="previewSide">
                    <Preview {...previewProps} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        formState: form,
        borderLeft: form.borderLeft,
        borderRight: form.borderRight,
        borderTop: form.borderTop,
        borderBottom: form.borderBottom,
        borderColor: form.borderColor,
        borderThickness: form.borderThickness,
        borderType: form.borderType,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBorderLeft: toggleValue(dispatch)("borderLeft"),
        changeBorderRight: toggleValue(dispatch)("borderRight"),
        changeBorderTop: toggleValue(dispatch)("borderTop"),
        changeBorderBottom: toggleValue(dispatch)("borderBottom"),
        changeBorderColor: setColor(dispatch)("borderColor"),
        changeBorderThickness: setNumber(dispatch)("borderThickness"),
        changeBorderType: setValue(dispatch)("borderType"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(FramesSection));