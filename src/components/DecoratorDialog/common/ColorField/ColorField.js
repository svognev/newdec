import React from "react";
import { ChromePicker } from "react-color";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { getCorrectColor, selectAllOnClick } from "../../helpers";

import "./style.css";

class ColorField extends React.PureComponent {
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
        const { colorCode, changeColorCode, defaultColorCode, required, bottomAligned } = this.props;
        const correctColor = getCorrectColor(colorCode);
        const colorError = correctColor !== colorCode;
        const inputError = colorError && (required || !!colorCode);
        const pickerColor = colorError ? "" : `#${correctColor}`;
        const colorSampleStyle = {
            backgroundColor: `#${correctColor}`,
        };
        const colorPickerClassName = `colorPicker${ bottomAligned ? " colorPicker_bottomAligned" : ""}`;

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
                        if (defaultColorCode) {
                            selectAllOnClick(defaultColorCode)(e);
                        }
                        // this.showColorPicker(); 
                    }}
                    error={inputError}
                />
                <div
                    onClick={this.showColorPicker}
                    className="colorSample" 
                    style={colorSampleStyle}
                />
                {this.state.isOpen && (
                    <div className={colorPickerClassName}>
                        <div className="colorPicker-chromeBox">
                            <ChromePicker
                                onChangeComplete={this.colorPickerHandler(changeColorCode)}
                                color={pickerColor}
                                disableAlpha
                            />
                        </div>
                        <div className="colorPicker-popOver"  onClick={this.hideColorPicker}></div>
                    </div>
                ) }
            </div>
        );
    }
}

export default ColorField;