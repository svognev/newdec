import React from "react";

import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import CustomInput from "./CustomInput";
import { fontSet, DEFAULT_FONT } from "../constants";
import { isFontAvailable } from "../helpers";

const FontSelect = ({ font, changeFont, customFont, changeCustomFont }) => {
    const availableFonts = fontSet.filter(fontName => fontName === font || isFontAvailable(fontName));
    return (
        <>
            <span >Font</span>
            <NativeSelect 
                input={ <CustomInput /> }
                value={font}
                onChange={(e) => {
                    changeFont(e);
                }}
            >
                <option value={DEFAULT_FONT}>Helvetica</option>
                { availableFonts.map(fontName => <option value={fontName} key={fontName}>{fontName}</option>) }
                <option value="custom" className="highlightedOption">Custom</option>
            </NativeSelect>

            { font === "custom" && (
                <>
                    <span>Custom font</span>
                    <TextField 
                        variant="outlined" 
                        margin="dense"
                        value={customFont}
                        onChange={changeCustomFont}
                        placeholder="Enter the font name"
                    />
                </>
            )}
        </>
    );
};

export default FontSelect;