import React from "react";
import { ChromePicker } from "react-color";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { getCorrectColor, selectAllOnClick } from "utils";

import "./style.css";

class ColorField extends React.Component {
    state = {
        isOpen: this.props.isOpen,
    };

    hideColorPicker = () => {
        this.setState({ isOpen: false });
    };

    showColorPicker = () => {
        this.setState({ isOpen: true });
    };

    colorPickerHandler = changeColor => ({ hex }) => {
        changeColor(null, hex);
    };

    render() {
        const { colorCode, changeColorCode, required } = this.props;
        const { showColorPicker, hideColorPicker, colorPickerHandler } = this;
        const correctColor = getCorrectColor(colorCode);
        const colorError = correctColor !== colorCode;
        const inputError = colorError && (required || !!colorCode);
        const pickerColor = colorError ? "" : `#${correctColor}`;
        const colorSampleStyle = {
            backgroundColor: `#${correctColor}`,
        };

        return (
            <div className="colorField">
                <TextField 
                    variant="outlined" 
                    margin="dense" 
                    className="numberInput" 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">#</InputAdornment>
                    }}
                    value={colorCode}
                    onChange={changeColorCode}
                    onClick={e => { 
                        selectAllOnClick("000")(e); 
                        // this.showColorPicker(); 
                    }}
                    error={inputError}
                />
                <div
                    onClick={showColorPicker}
                    className="colorSample" 
                    style={colorSampleStyle}
                />
                {this.state.isOpen && (
                    <div className="colorPicker-outerBox">
                        <div className="colorPicker-innerBox">
                            <ChromePicker
                                onChangeComplete={colorPickerHandler(changeColorCode)}
                                color={pickerColor}
                                disableAlpha
                            />
                        </div>
                        <div className="colorPicker-popOver"  onClick={hideColorPicker}></div>
                    </div>
                ) }
            </div>
        );
    }
}

export default ColorField;