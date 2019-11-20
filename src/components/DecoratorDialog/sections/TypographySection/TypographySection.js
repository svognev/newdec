import React from "react";
import { connect } from "react-redux";

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
import FontSelectFields from "../../common/FontSelectFields";
import {  setValue, toggleValue, setNumber, setColor } from "../../actions";
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_COLOR, DEFAULT_FONT_COLOR_NAME } from "../../constants";
import { selectAllOnClick } from "../../helpers";

import "./style.css";

const TypographySection = props => {
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
            <div className="flexibleGrid">
                <FontSelectFields { ...{ font, changeFont, customFont, changeCustomFont }} />
                
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
                        onClick={selectAllOnClick(DEFAULT_FONT_SIZE)}
                    />                                            
                    <InputAdornment variant="filled" position="end">pt</InputAdornment>
                </div>      

                <span>Font color name</span>
                <TextField 
                    variant="outlined" 
                    margin="dense"
                    value={fontColorName}
                    onChange={changeFontColorName}
                    onClick={selectAllOnClick(DEFAULT_FONT_COLOR_NAME)}
                />

                <span>Font color HEX</span>
                <ColorField 
                    colorCode={fontColor} 
                    changeColorCode={changeFontColor}
                    defaultColorCode={DEFAULT_FONT_COLOR}
                    required
                />
            </div>
            <div className="previewSide">
                <Preview {...previewProps} />
            </div>
        </div>
        <div className="dialogGrid dialogGrid_2cols dialogGrid_topIndented">
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
                <div className="labeledCheckbox">
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

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        font: form.font,
        customFont: form.customFont,
        alignment: form.alignment,
        fontSize: form.fontSize,
        fontColorName: form.fontColorName,
        fontColor: form.fontColor,
        bold: form.bold,
        italic: form.italic,
        underlined: form.underlined,
        stroke: form.stroke,
        textTransform: form.textTransform,
        verticalAlign: form.verticalAlign,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeFont: setValue(dispatch)("font"),
        changeCustomFont: setValue(dispatch)("customFont"),
        changeAlignment: setValue(dispatch)("alignment"),
        changeFontSize: setNumber(dispatch)("fontSize"),
        changeFontColorName: setValue(dispatch)("fontColorName"),
        changeFontColor: setColor(dispatch)("fontColor"),
        changeBold: toggleValue(dispatch)("bold"),
        changeItalic: toggleValue(dispatch)("italic"),
        changeUnderlined: toggleValue(dispatch)("underlined"),
        changeStroke: toggleValue(dispatch)("stroke"),
        changeTextTransform: setValue(dispatch)("textTransform"),
        changeVerticalAlign: setValue(dispatch)("verticalAlign"),
        changeMarginTop: setNumber(dispatch)("marginTop"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(TypographySection));