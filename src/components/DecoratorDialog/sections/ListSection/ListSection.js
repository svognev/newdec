import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Switch from "@material-ui/core/Switch";

import ListPreview from "../../common/Preview/ListPreview";
import CustomInput from "../../common/CustomInput";
import CustomInputShort from "../../common/CustomInputShort";
import ColorField from "../../common/ColorField";
import LabelWithAsterisk from "../../common/LabelWithAsterisk";
import FontSelectFields from "../../common/FontSelectFields";
import { 
    orderedListStylesMap, 
    bulletNamesMap, 
    DEFAULT_FONT_SIZE,
    DEFAULT_SIDE_NUMBER_FONT_COLOR,
    DEFAULT_SIDE_NUMBER_FILLING_COLOR,
    DEFAULT_SIDE_NUMBER_WIDTH,
    DEFAULT_SIDE_NUMBER_RADIUS,
 } from "../../constants";
import { 
    updateValidationError,
    setValue,
    toggleValue,
    setNumber,
    setColor,
    setBullet,
} from "../../actions";
import { 
    selectAllOnClick, 
    changeAndScroll,
    scrollToBottom,
    focusInput,
    unicodeNumberToChar, 
    unicodeCharToNumber, 
} from "../../helpers";

import "./style.css";

class ListSection extends React.Component {
    listNameInputRef = React.createRef();
    unicodeCharInputRef = React.createRef();

    onIsListChange = e => {
        const { listName } = this.props;
        this.props.changeIsList(e);

        if (e.target.checked && !listName) {
            focusInput(this.listNameInputRef);
        }       
    };

    onListTypeChange = e => {
        const { suffix, listName, orderLevel } = this.props;
        const { value } = e.target;

        if (value === "ordered" && !orderLevel) {
            this.props.changeOrderLevel(null, "0")
        }

        this.props.changeListType(null, value);

        if (value === "ordered" && !listName) {
            focusInput(this.listNameInputRef);
        } else {
            scrollToBottom("content-rightSide");
        }
        if (value === "ordered" && suffix === "") {
            this.props.changeSuffix(null, ".");
        } else if (value === "unordered" && suffix === ".") {
            this.props.changeSuffix(null, "");
        }
    };

    onListItemChange = e => {
        this.props.changeListItem(e);
        if (e.target.value === "custom" && !this.props.unicodeChar) {
            focusInput(this.unicodeCharInputRef);
        }
    };

    onUnicodeNumberChange = e => {
        const newUnicodeNumber = this.props.changeUnicodeNumber(e);
        const newUnicodeChar = newUnicodeNumber !== "" ? unicodeNumberToChar(newUnicodeNumber) : "";
        this.props.changeUnicodeChar(null, newUnicodeChar);
    };
    
    onUnicodeCharChange = e => {
        const newUnicodeChar = this.props.changeUnicodeChar(e);
        const newUnicodeNumber = newUnicodeChar !== "" ? unicodeCharToNumber(newUnicodeChar) : "";
        this.props.changeUnicodeNumber(null, newUnicodeNumber);
    };

    onSideNumberChange = e => {
        const { suffix } = this.props;
        this.props.changeSideNumber(e);
        if (e.target.checked && suffix === ".") {
            this.props.changeSuffix(null, "");
        } else if (!e.target.checked && suffix === "") {
            this.props.changeSuffix(null, ".");
        }
    };

    componentDidMount() {
        if (this.props.validationErrorInSection) {
            focusInput(this.listNameInputRef);
        }
    }

    componentDidUpdate(prevprops) {
        const { isList, listType, listName } = this.props;
        if (this.props.validationErrorInSection && !prevprops.validationErrorInSection) {
            focusInput(this.listNameInputRef);
        }
        if (this.props.validationErrorInSection && (!isList || listType === "unordered" || listName)) {
            this.props.updateValidationError({ listSection: false });
        }
    }

    render() {
        const {
            validationErrorInSection,
            listPreviewProps,
            isList,
            listName, changeListName,
            orderLevel, changeOrderLevel,
            patternMode, changePatternMode,
            listPattern, changeListPattern,
            prefix, changePrefix,
            suffix, changeSuffix,
            suffixDistance, changeSuffixDistance,
            magicTabs, changeMagicTabs,
            listType,
            listItem,
            unicodeNumber,
            unicodeChar,
            listItemString, changeListItemString,
            numberingStyle, changeNumberingStyle,
            continueNumbering, changeContinueNumbering,
            allowRestartNumbering, changeAllowRestartNumbering,
            includePreviousFrom, changeIncludePreviousFrom,
            softReturn, changeSoftReturn,
            sideNumber,
            sideNumberFont, changeSideNumberFont,
            customSideNumberFont, changeCustomSideNumberFont,
            sideNumberAlignment, changeSideNumberAlignment,
            sideNumberFontSize, changeSideNumberFontSize,
            sideNumberFontColor, changeSideNumberFontColor,
            sideNumberFillingColor, changeSideNumberFillingColor,
            sideNumberWidth, changeSideNumberWidth,
            sideNumberRadius, changeSideNumberRadius,
            sideNumberBold, changeSideNumberBold,
            sideNumberItalic, changeSideNumberItalic,
            sideNumberUnderlined, changeSideNumberUnderlined,
            sideNumberLineHeight, changeSideNumberLineHeight,
        } = this.props;
        
        const mainListSettingsState = isList ? "shown" : "hidden";
        const unorderedListSettingsState = (isList && listType === "unordered") ? "shown" : "hidden";
        const customListItemSettingsState = (isList && listType === "unordered" && listItem === "custom") ? "shown" : "hidden";
        const customListItemSettingsState2 = (isList && listType === "unordered" && listItem === "string") ? "shown" : "hidden";
        const orderedListSettingsState = (isList && listType === "ordered") ? "shown" : "hidden";
        const sideNumberSettingsState = (isList && listType === "ordered" && sideNumber) ? "shown" : "hidden";
    
        return (
            <>
                <div className="dialogGrid dialogGrid_2cols">
                    <div>
                        <div>
                            <div className="dialogGrid dialogGrid_2cols dialogGrid_mediumWidth">
                                <div className="listItemSpan">
                                    <span>Is it a list?</span>
                                </div>
                                <div className="unlabeledCheckbox">
                                    <Checkbox 
                                        color="primary" 
                                        checked={isList} 
                                        onChange={this.onIsListChange} 
                                    />
                                </div>
                            </div>
                            <div className={`optionalSettings optionalSettings_main optionalSettings_${mainListSettingsState}`}>
                                <div className="dialogGrid dialogGrid_2cols dialogGrid_mediumWidth optionalSettings">
                                    { listType === "unordered" ? (
                                        <span>List name</span>
                                    ) : (
                                        <LabelWithAsterisk>List name</LabelWithAsterisk>
                                    )}
                                    <TextField
                                        value={listName}
                                        onChange={changeListName} 
                                        error={validationErrorInSection && !listName}
                                        inputRef={this.listNameInputRef}
                                        variant="outlined" 
                                        margin="dense" 
                                    />
    
                                    <span>Order level</span>
                                    <div>
                                        <NativeSelect
                                            value={orderLevel}
                                            onChange={changeOrderLevel}
                                            input={ <CustomInputShort /> }
                                        >
                                            { listType !== "ordered" && (<option value="">...</option>)}
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </NativeSelect>
                                    </div>

                                    <span>Suffix distance</span>
                                    <div className="inputWithAdornment">
                                        <NativeSelect
                                            value={suffixDistance}
                                            onChange={changeSuffixDistance} 
                                            input={ <CustomInputShort /> }
                                        >
                                            <option value="0.25">0.25</option>
                                            <option value="0.5">0.5</option>
                                            <option value="0.75">0.75</option>
                                            <option value="1">1</option>
                                            <option value="1.25">1.25</option>
                                            <option value="1.5">1.5</option>
                                            <option value="1.75">1.75</option>
                                            <option value="2">2</option>
                                        </NativeSelect>
                                        <InputAdornment variant="filled" position="end">cm</InputAdornment>
                                    </div>
    
                                    <span>Magic Tabs</span>
                                    <div className="unlabeledCheckbox">
                                        <Checkbox 
                                            color="primary" 
                                            checked={magicTabs} 
                                            onChange={changeMagicTabs} 
                                        />
                                    </div>
    
                                    <span>Type of list</span>
                                    <RadioGroup 
                                        value={listType} 
                                        onChange={this.onListTypeChange}
                                        row
                                    >
                                        <div className="labeledCheckbox">
                                            <FormControlLabel
                                                value="unordered"
                                                control={<Radio color="primary" />}
                                                label="Unordered"
                                                labelPlacement="end"
                                            />
                                        </div>
                                        <div className="labeledCheckbox">
                                            <FormControlLabel
                                                value="ordered"
                                                control={<Radio color="primary" />}
                                                label="Ordered"
                                                labelPlacement="end"
                                            />
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                        <div className={`optionalSettings optionalSettings_${orderedListSettingsState}`}>
                            <div className="dialogGrid dialogGrid_2cols listTypeSettings">
                                <span>Numbering style</span>
                                <div>
                                    <NativeSelect
                                        value={numberingStyle}
                                        onChange={changeNumberingStyle}
                                        input={ <CustomInputShort /> }
                                    >
                                        {Array.from(orderedListStylesMap).map(([key, value]) => (
                                            <option value={key} key={key}>{value}</option>
                                        ))}                                    
                                    </NativeSelect>
                                </div>

                                <span>Soft return</span>
                                <div className="unlabeledCheckbox">
                                    <Checkbox 
                                        checked={softReturn}
                                        onChange={changeSoftReturn}
                                        color="primary" 
                                    />
                                </div>
                                        
                                <span>Continue numbering after interruption</span>
                                <div className="unlabeledCheckbox">
                                    <Checkbox
                                        checked={continueNumbering}
                                        onChange={changeContinueNumbering}
                                        color="primary" 
                                    />
                                </div>
                                        
                                <span>Allow restart numbering</span>
                                <div className="unlabeledCheckbox">
                                    <Checkbox
                                        checked={allowRestartNumbering} 
                                        onChange={changeAllowRestartNumbering}
                                        color="primary" 
                                    />
                                </div>
                                        
                                <span>Include previous levels from</span>
                                <div>
                                    <NativeSelect
                                        value={includePreviousFrom} 
                                        onChange={changeIncludePreviousFrom}
                                        input={ <CustomInputShort /> }
                                    >
                                        <option value="">...</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </NativeSelect>
                                </div>
                                
                                <span>Advanced list pattern settings</span>
                                <div className="unlabeledCheckbox">
                                    <Switch
                                        checked={patternMode}
                                        onChange={changePatternMode}
                                        color="primary" 
                                    />
                                </div>
                                { !patternMode ? (
                                    <>
                                        <span>Prefix</span>
                                        <TextField
                                            value={prefix}
                                            onChange={changePrefix} 
                                            variant="outlined" 
                                            margin="dense" 
                                        />
        
                                        <span>Suffix</span>
                                        <TextField
                                            value={suffix}
                                            onChange={changeSuffix} 
                                            variant="outlined" 
                                            margin="dense" 
                                            onClick={selectAllOnClick(".")}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <span>Ordered list pattern</span>
                                        <TextField
                                            value={listPattern}
                                            onChange={changeListPattern} 
                                            variant="outlined" 
                                            margin="dense" 
                                            onClick={selectAllOnClick(".")}
                                        />
                                    </>
                                )}
                                
                                        
                                <span>Side number</span>
                                <div className="unlabeledCheckbox">
                                    <Checkbox
                                        checked={sideNumber}
                                        onChange={changeAndScroll(this.onSideNumberChange)}
                                        color="primary" 
                                    />
                                </div>
                                { (patternMode && !sideNumber) && (<div />)}
                            </div> 
    
                            <div className={`optionalSettings optionalSettings_main optionalSettings_${sideNumberSettingsState}`}>
                                <div className="flexibleGrid listTypeSettings">
                                    <FontSelectFields 
                                        font={sideNumberFont}
                                        changeFont={changeSideNumberFont}
                                        customFont={customSideNumberFont}
                                        changeCustomFont={changeCustomSideNumberFont}
                                    />
                            
                                    <span>Alignment</span>
                                    <NativeSelect 
                                        value={sideNumberAlignment}
                                        onChange={changeSideNumberAlignment}
                                        input={ <CustomInput /> }
                                    >
                                        <option value={"left"}>Left</option>
                                        <option value={"center"}>Center</option>
                                        <option value={"right"}>Right</option>
                                    </NativeSelect>
                            
                                    <span>Font size</span>
                                    <div className="inputWithAdornment">
                                        <TextField 
                                            value={sideNumberFontSize}
                                            onChange={changeSideNumberFontSize}
                                            onClick={selectAllOnClick(DEFAULT_FONT_SIZE)}
                                            variant="outlined" 
                                            margin="dense" 
                                            className="numberInput"
                                        />                                            
                                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                                    </div>      
                            
                                    <span>Font color</span>
                                    <ColorField 
                                        colorCode={sideNumberFontColor} 
                                        changeColorCode={changeSideNumberFontColor}
                                        defaultColorCode={DEFAULT_SIDE_NUMBER_FONT_COLOR}
                                        bottomAligned
                                    />
                                        
                                    <span>Filling color</span>
                                    <ColorField 
                                        colorCode={sideNumberFillingColor} 
                                        changeColorCode={changeSideNumberFillingColor}
                                        defaultColorCode={DEFAULT_SIDE_NUMBER_FILLING_COLOR}
                                        bottomAligned
                                    />
    
                                    <span>Width</span>
                                    <div className="inputWithAdornment">
                                        <TextField 
                                            value={sideNumberWidth}
                                            onChange={changeSideNumberWidth}
                                            onClick={selectAllOnClick(DEFAULT_SIDE_NUMBER_WIDTH)}
                                            variant="outlined" 
                                            margin="dense" 
                                            className="numberInput"
                                        />                                            
                                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                                    </div>

                                    <span>Line height</span>
                                    <div className="inputWithAdornment">
                                        <TextField 
                                            value={sideNumberLineHeight}
                                            onChange={changeSideNumberLineHeight}
                                            variant="outlined" 
                                            margin="dense" 
                                            className="numberInput"
                                        />                                            
                                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                                    </div>  
                                        
                                    <span>Radius</span>
                                    <div className="inputWithAdornment">
                                        <TextField 
                                            value={sideNumberRadius}
                                            onChange={changeSideNumberRadius}
                                            onClick={selectAllOnClick(DEFAULT_SIDE_NUMBER_RADIUS)}
                                            variant="outlined" 
                                            margin="dense" 
                                            className="numberInput"
                                        />                                            
                                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                                    </div>

                                    <span className="stylingsSpan">Stylings</span>
                                    <div className="checkBoxesSet">
                                        <div className="labeledCheckbox labeledCheckbox_bold">
                                            <FormControlLabel
                                                checked={sideNumberBold}
                                                onChange={changeSideNumberBold}
                                                label="Bold"
                                                control={<Checkbox color="primary" />}
                                                labelPlacement="end"
                                            />
                                        </div>
                                        <div className="labeledCheckbox labeledCheckbox_italic">
                                            <FormControlLabel
                                                checked={sideNumberItalic}
                                                onChange={changeSideNumberItalic}
                                                label="Italic"
                                                control={<Checkbox color="primary" />}
                                                labelPlacement="end"
                                            />
                                        </div>
                                        <div className="labeledCheckbox labeledCheckbox_underlined">
                                            <FormControlLabel
                                                control={<Checkbox color="primary" />}
                                                label="Underlined"
                                                labelPlacement="end"
                                                checked={sideNumberUnderlined}
                                                onChange={changeSideNumberUnderlined}
                                            />
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className={`listPreviewBox optionalSettings optionalSettings_${mainListSettingsState}`}>
                        <ListPreview {...listPreviewProps} />
                    </div>
                </div>
                <div className={`optionalSettings optionalSettings_${unorderedListSettingsState}`}>
                    <div className="dialogGrid dialogGrid_2cols listTypeSettings">
                        <div className="dialogGrid dialogGrid_2cols">
                            <span className="listItemSpan">List item</span>
                            <div className="listItemSelect">
                                <NativeSelect 
                                    value={listItem} 
                                    onChange={this.onListItemChange} 
                                    input={ <CustomInputShort /> }
                                >
                                    { 
                                        Array.from(bulletNamesMap).map(([key, value]) => {
                                            return (<option key={key} value={key}>{value}</option>) 
                                        })
                                    }
                                    <option value={"custom"} className="highlightedOption">Custom bullet</option>
                                    <option value={"string"} className="highlightedOption">Custom string</option>
                                </NativeSelect>
                            </div>
                        </div>
                        <div>
                            <div className={`optionalSettings optionalSettings_${customListItemSettingsState}`}>
                                <div className="dialogGrid dialogGrid_2cols dialogGrid_leftIndented">
                                    <div className="dialogGrid dialogGrid_2cols dialogGrid_leftIndented">
                                        <span>Unicode number</span>
                                        <div>
                                            <TextField  
                                                value={unicodeNumber}
                                                onChange={this.onUnicodeNumberChange}
                                                variant="outlined" 
                                                margin="dense" 
                                                className="unicodeInput" 
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">u+</InputAdornment>
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dialogGrid dialogGrid_2cols dialogGrid_leftIndented">
                                        <span>Symbol</span>
                                        <div>
                                            <TextField 
                                                value={unicodeChar}
                                                onChange={this.onUnicodeCharChange}
                                                onClick={selectAllOnClick()}
                                                inputRef={this.unicodeCharInputRef}
                                                variant="outlined" 
                                                margin="dense" 
                                                className="bulletInput" 
                                            />
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className={`optionalSettings optionalSettings_${customListItemSettingsState2}`}>
                                <div className="listItemCustomString">
                                    <div className="dialogGrid dialogGrid_1col dialogGrid_leftIndented">
                                        <TextField
                                            value={listItemString}
                                            onChange={changeListItemString}
                                            variant="outlined" 
                                            margin="dense" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form, validationError }}) => {
    return {
        validationErrorInSection: validationError.listSection,
        formState: form,
        isList: form.isList,
        listName: form.listName, 
        orderLevel: form.orderLevel,
        suffixDistance: form.suffixDistance,
        magicTabs: form.magicTabs,
        listType: form.listType,
        listItem: form.listItem,
        unicodeNumber: form.unicodeNumber,
        unicodeChar: form.unicodeChar,
        listItemString: form.listItemString,
        numberingStyle: form.numberingStyle,
        continueNumbering: form.continueNumbering,
        allowRestartNumbering: form.allowRestartNumbering,
        includePreviousFrom: form.includePreviousFrom,
        patternMode: form.patternMode,
        listPattern: form.listPattern,
        prefix: form.prefix,
        suffix: form.suffix,
        softReturn: form.softReturn,
        sideNumber: form.sideNumber,
        sideNumberFont: form.sideNumberFont,
        customSideNumberFont: form.customSideNumberFont,
        sideNumberAlignment: form.sideNumberAlignment,
        sideNumberFontSize: form.sideNumberFontSize,
        sideNumberFontColor: form.sideNumberFontColor,
        sideNumberFillingColor: form.sideNumberFillingColor,
        sideNumberWidth: form.sideNumberWidth,
        sideNumberRadius: form.sideNumberRadius,
        sideNumberBold: form.sideNumberBold,
        sideNumberItalic: form.sideNumberItalic,
        sideNumberUnderlined: form.sideNumberUnderlined,
        sideNumberLineHeight: form.sideNumberLineHeight,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValidationError: payload => dispatch(updateValidationError(payload)),
        changeListName: setValue(dispatch)("listName"),
        changeIsList: toggleValue(dispatch)("isList"),
        changeOrderLevel: setValue(dispatch)("orderLevel"),
        changeSuffixDistance: setValue(dispatch)("suffixDistance"),
        changeMagicTabs: toggleValue(dispatch)("magicTabs"),
        changeListType: setValue(dispatch)("listType"),
        changeListItem: setValue(dispatch)("listItem"),
        changeUnicodeNumber: setColor(dispatch)("unicodeNumber"),
        changeUnicodeChar: setBullet(dispatch)("unicodeChar"),
        changeListItemString: setValue(dispatch)("listItemString"),
        changeNumberingStyle: setValue(dispatch)("numberingStyle"),
        changeContinueNumbering: toggleValue(dispatch)("continueNumbering"),
        changeAllowRestartNumbering: toggleValue(dispatch)("allowRestartNumbering"),
        changeIncludePreviousFrom: setValue(dispatch)("includePreviousFrom"),
        changeListPattern: setValue(dispatch)("listPattern"),
        changePrefix: setValue(dispatch)("prefix"),
        changeSuffix: setValue(dispatch)("suffix"),
        changePatternMode: toggleValue(dispatch)("patternMode"),
        changeSoftReturn: toggleValue(dispatch)("softReturn"),
        changeSideNumber: toggleValue(dispatch)("sideNumber"),
        changeSideNumberFont: setValue(dispatch)("sideNumberFont"),
        changeCustomSideNumberFont: setValue(dispatch)("customSideNumberFont"),
        changeSideNumberAlignment: setValue(dispatch)("sideNumberAlignment"),
        changeSideNumberFontSize: setNumber(dispatch)("sideNumberFontSize"),
        changeSideNumberFontColor: setColor(dispatch)("sideNumberFontColor"),
        changeSideNumberFillingColor: setColor(dispatch)("sideNumberFillingColor"),
        changeSideNumberWidth: setNumber(dispatch)("sideNumberWidth"),
        changeSideNumberRadius: setNumber(dispatch)("sideNumberRadius"),
        changeSideNumberBold: toggleValue(dispatch)("sideNumberBold"),
        changeSideNumberItalic: toggleValue(dispatch)("sideNumberItalic"),
        changeSideNumberUnderlined: toggleValue(dispatch)("sideNumberUnderlined"),
        changeSideNumberLineHeight: setNumber(dispatch)("sideNumberLineHeight"),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ListSection);