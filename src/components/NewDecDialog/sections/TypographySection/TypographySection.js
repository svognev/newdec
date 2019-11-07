import React from "react";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import Preview from "../../common/Preview";
import CustomInput from "../../common/CustomInput";
import ColorField from "../../common/ColorField";
import FontSelect from "../../common/FontSelect";
import { selectAllOnClick } from "../../helpers";

import "./style.css";

const TypographySection = (props) => {
    const { 
        previewProps,
        font, changeFont,
        customFont, changeCustomFont,
        alignment, changeAlignment,
        fontSize, changeFontSize,
        fontColorName, changeFontColorName,
        fontColor, changeFontColor,
        bold, changeBold,
        italic, changeItalic,
        underlined, changeUnderlined,         
        stroke, changeStroke,
        textTransform, changeTextTransform,
        verticalAlign, changeVerticalAlign, 
    } = props;

    return (
        <>
        <div className="dialogGrid dialogGrid_2cols">
            <div className="dialogGrid dialogGrid_2minCols">
                <FontSelect { ...{ font, changeFont, customFont, changeCustomFont }} />
                <span>Alignment</span>
                <NativeSelect 
                    input={ <CustomInput /> }
                    value={alignment}
                    onChange={changeAlignment}
                >
                    <option value={"left"}>Left</option>
                    <option value={"center"}>Center</option>
                    <option value={"right"}>Right</option>
                    <option value={"justify"}>Justified</option>
                </NativeSelect>

                <span>Font size</span>
                <div className="inputWithAdornment">
                    <TextField 
                        variant="outlined" 
                        margin="dense" 
                        className="numberInput"
                        value={fontSize}
                        onChange={changeFontSize}
                        onClick={selectAllOnClick("12")}
                    />                                            
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </div>      

                <span>Font color name</span>
                <TextField 
                    variant="outlined" 
                    margin="dense"
                    value={fontColorName}
                    onChange={changeFontColorName}
                    onClick={selectAllOnClick("Black")}
                />

                <span>Font color HEX</span>
                <ColorField 
                    colorCode={fontColor} 
                    changeColorCode={changeFontColor}
                    required
                />
            </div>
            <div className="previewSide">
                <Preview {...previewProps} />
            </div>
        </div>
        <div className="dialogGrid dialogGrid_2cols dialogGrid_indented">
            <span>Stylings</span>
            <div className="checkBoxesSet">
                <div className="labeledCheckbox labeledCheckbox_bold">
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Bold"
                        labelPlacement="end"
                        checked={bold}
                        onChange={changeBold}
                    />
                </div>
                <div className="labeledCheckbox labeledCheckbox_italic">
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Italic"
                        labelPlacement="end"
                        checked={italic}
                        onChange={changeItalic}
                    />
                </div>
                <div className="labeledCheckbox labeledCheckbox_underlined">
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Underlined"
                        labelPlacement="end"
                        checked={underlined}
                        onChange={changeUnderlined}
                    />
                </div>
                <div className="labeledCheckbox labeledCheckbox_stroke">
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Stroke"
                        labelPlacement="end"
                        checked={stroke}
                        onChange={changeStroke}
                    />
                </div>
            </div>

            <span>Text transform</span>
            <RadioGroup 
                value={textTransform} 
                onChange={changeTextTransform} 
                row
            >
                <div className="labeledCheckbox labeledCheckbox_topIndented">
                    <FormControlLabel
                        value="none"
                        control={<Radio color="primary" />}
                        label="None"
                        labelPlacement="end"
                    />
                </div>
                <div className="labeledCheckbox labeledCheckbox_uppercase">
                    <FormControlLabel
                        value="uppercase"
                        control={<Radio color="primary" />}
                        label="Uppercase"
                        labelPlacement="end"
                    />
                </div>
                <div className="labeledCheckbox labeledCheckbox_lowercase">
                    <FormControlLabel
                        value="lowercase"
                        control={<Radio color="primary" />}
                        label="Lowercase"
                        labelPlacement="end"
                    />
                </div>
                <div className="labeledCheckbox labeledCheckbox_smallCaps">
                    <FormControlLabel
                        value="small-caps"
                        control={<Radio color="primary" />}
                        label="Small caps"
                        labelPlacement="end"
                    />
                </div>
            </RadioGroup>

            <span>Sub/Superscript</span>
            <div>
                <NativeSelect 
                value={verticalAlign} 
                onChange={changeVerticalAlign}
                    input={ <CustomInput /> } 
                >
                    <option value="baseline">None</option>
                    <option value="sub">Subscript</option>
                    <option value="super">Superscript</option>
                </NativeSelect>
            </div>
        </div>
        </>
    );
};

export default TypographySection;