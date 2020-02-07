import React from "react";

import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";

import CustomInput from "./CustomInput";
import { focusInput, changeAndScroll } from "../helpers";
import fontsSet from "../constants/fontsSet";

class FontSelectFields extends React.PureComponent {
    customFontInputRef = React.createRef();

    onFontChange = e => {
        this.props.changeFont(e);
        if (e.target.value === "custom") {
            focusInput(this.customFontInputRef);
        }
    };

    render() {
        const { font, customFont, changeCustomFont } = this.props;
        const optionalFieldState = font === "custom" ? "optionalField_shown" : "optionalField_hidden";
        return (
            <>
                <span >Font</span>
                <NativeSelect 
                    input={ <CustomInput /> }
                    value={font}
                    onChange={changeAndScroll(this.onFontChange, 500)}
                >
                    { fontsSet.map(fontName => <option value={fontName} key={fontName}>{fontName}</option>) }
                    <option value="custom" className="highlightedOption">Custom</option>
                </NativeSelect>
    
                <div className={`optionalField ${optionalFieldState}`}>
                    <span></span>
                </div>
                <div className={`optionalField ${optionalFieldState}`}>
                    <TextField 
                        value={customFont}
                        onChange={changeCustomFont}
                        variant="outlined" 
                        margin="dense"
                        fullWidth
                        placeholder="Enter the font name"
                        inputRef={this.customFontInputRef}
                    />
                </div>
            </>
        );
    }
}

export default FontSelectFields;