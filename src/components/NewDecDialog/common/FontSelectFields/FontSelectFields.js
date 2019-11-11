import React from "react";

import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";

import CustomInput from "../CustomInput";
import { fontSet, DEFAULT_FONT } from "../../constants";
import { isFontAvailable } from "../../helpers";

import "./style.css";

class FontSelectFields extends React.Component {
    textInput = React.createRef();

    focusTextInput = () => {
        this.textInput.current.focus();
    };

    onFontChange = e => {
        this.props.changeFont(e);
        if (e.target.value === "custom") {
            this.focusTextInput();
            if (typeof this.props.extraFunction === "function") {
                setTimeout(this.props.extraFunction, 500);
            }
        }
    };

    render() {
        const { font, customFont, changeCustomFont } = this.props;
        const availableFonts = fontSet.filter(fontName => fontName === font || isFontAvailable(fontName));
        const customFontFieldState = font === "custom" ? "customFontField_shown" : "customFontField_hidden";
        return (
            <>
                <span >Font</span>
                <NativeSelect 
                    input={ <CustomInput /> }
                    value={font}
                    onChange={this.onFontChange}
                >
                    <option value={DEFAULT_FONT}>Helvetica</option>
                    { availableFonts.map(fontName => <option value={fontName} key={fontName}>{fontName}</option>) }
                    <option value="custom" className="highlightedOption">Custom</option>
                </NativeSelect>
    
                <div className={`customFontField ${customFontFieldState}`}>
                    <span></span>
                </div>
                <div className={`customFontField ${customFontFieldState}`}>
                    <TextField 
                        value={customFont}
                        onChange={changeCustomFont}
                        variant="outlined" 
                        margin="dense"
                        fullWidth
                        placeholder="Enter the font name"
                        inputRef={this.textInput}
                    />
                </div>
            </>
        );
    }
}

export default FontSelectFields;