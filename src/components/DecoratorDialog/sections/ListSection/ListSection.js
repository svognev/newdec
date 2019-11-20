import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import NativeSelect from "@material-ui/core/NativeSelect";
import Fade from '@material-ui/core/Fade';

import ListPreview from "../../common/Preview/ListPreview";
import CustomInput from "../../common/CustomInput";
import CustomInputShort from "../../common/CustomInputShort";
import ColorField from "../../common/ColorField";
import LabelWithAsterisk from "../../common/LabelWithAsterisk";
import FontSelectFields from "../../common/FontSelectFields";
import { 
    listStyleTypes, 
    bulletNamesMap, 
    HOLDER, 
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
    getListSectionErrorState,
    focusInput,
    unicodeNumberToChar, 
    unicodeCharToNumber, 
} from "../../helpers";

import "./style.css";

class ListSection extends React.Component {
    listNameInputRef = React.createRef();
    unicodeCharInputRef = React.createRef();

    onIsListChange = listName => e => {
        if (e.target.checked) {
            if (listName === HOLDER) {
                this.props.changeListName(null, "");
            }
        } else if (listName === "") {
            setTimeout(() => this.props.changeListName(null, HOLDER), 200);
        }
        this.props.changeIsList(e);

        if (e.target.checked && listName === HOLDER) {
            focusInput(this.listNameInputRef);
        }       
    };

    onListTypeChange = suffix => e => {
        const { value } = e.target;
        this.props.changeListType(null, value);
        if (value === "ordered" && suffix === "") {
            this.props.changeSuffix(null, ".");
        } else if (value === "unordered" && suffix === ".") {
            this.props.changeSuffix(null, "");
        }
    };

    onListItemChange = unicodeChar => e => {
        this.props.changeListItem(e);
        if (e.target.value === "custom" && !unicodeChar) {
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

    onSideNumberChange = suffix => e => {
        this.props.changeSideNumber(e);
        if (e.target.checked && suffix === ".") {
            this.props.changeSuffix(null, "");
        } else if (!e.target.checked && suffix === "") {
            this.props.changeSuffix(null, ".");
        }
    };

    componentDidMount() {
        if (this.props.validationError) {
            focusInput(this.listNameInputRef);
        }
    }

    componentDidUpdate(prevprops) {
        if (this.props.validationError && !prevprops.validationError) {
            focusInput(this.listNameInputRef);
        }
        if (this.props.validationError && !getListSectionErrorState(this.props.formState)) {
            this.props.updateValidationError({ listSection: false });
        }
    }

    render() {
        const {
            validationError,
            listPreviewProps,
            isList,
            listName, changeListName,
            orderLevel, changeOrderLevel,
            prefix, changePrefix,
            suffix, changeSuffix,
            suffixDistance, changeSuffixDistance,
            magicTabs, changeMagicTabs,
            listType,
            listItem,
            unicodeNumber,
            unicodeChar,
            numberingStyle, changeNumberingStyle,
            continueNumbering, changeContinueNumbering,
            allowRestartNumbering, changeAllowRestartNumbering,
            includePreviousFrom, changeIncludePreviousFrom,
            sideNumber,
            sideNumberFont, changeSideNumberFont,
            customSideNumberFont, changeCustomSideNumberFont,
            sideNumberAlignment, changeSideNumberAlignment,
            sideNumberFontSize, changeSideNumberFontSize,
            sideNumberFontColor, changeSideNumberFontColor,
            sideNumberFillingColor, changeSideNumberFillingColor,
            sideNumberWidth, changeSideNumberWidth,
            sideNumberRadius, changeSideNumberRadius,
        } = this.props;
        
        const mainListSettingsState = isList ? "shown" : "hidden";
        const unorderedListSettingsState = (isList && listType === "unordered") ? "shown" : "hidden";
        const orderedListSettingsState = (isList && listType === "ordered") ? "shown" : "hidden";
        const sideNumberSettingsState = (isList && listType === "ordered" && sideNumber) ? "shown" : "hidden";
    
        return (
            <>
                <div className="dialogGrid dialogGrid_2cols">
                    <div>
                        <div>
                            <div className="dialogGrid dialogGrid_2cols dialogGrid_mediumWidth">
                                <div className="listSection-firstSpan">
                                    <span>Is it a list?</span>
                                </div>
                                <div>
                                    <Checkbox 
                                        color="primary" 
                                        checked={isList} 
                                        onChange={changeAndScroll(this.onIsListChange(listName))} 
                                    />
                                </div>
                            </div>
                            <div className={`optionalSettings optionalSettings_main optionalSettings_${mainListSettingsState}`}>
                                <div className="dialogGrid dialogGrid_2cols dialogGrid_mediumWidth optionalSettings">
                                    <LabelWithAsterisk>List name</LabelWithAsterisk>
                                    <TextField
                                        value={listName}
                                        onChange={changeListName} 
                                        error={validationError && !listName}
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
                                            <option value="">...</option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </NativeSelect>
                                    </div>
    
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
                                    <div>
                                        <Checkbox 
                                            color="primary" 
                                            checked={magicTabs} 
                                            onChange={changeMagicTabs} 
                                        />
                                    </div>
    
                                    <span>Type of list</span>
                                    <div>
                                        <NativeSelect 
                                            value={listType} 
                                            onChange={changeAndScroll(this.onListTypeChange(suffix))} 
                                            input={ <CustomInput /> }
                                        >
                                            <option value={"unordered"}>Unordered</option>
                                            <option value={"ordered"}>Ordered</option>
                                        </NativeSelect>
                                    </div>
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
                                        {listStyleTypes.map(style => (
                                            <option value={style.value} key={style.value}>{style.name}</option>
                                        ))}                                    
                                    </NativeSelect>
                                </div>
                                        
                                <span>Continue numbering after interruption</span>
                                <div>
                                    <Checkbox
                                        checked={continueNumbering}
                                        onChange={changeContinueNumbering}
                                        color="primary" 
                                    />
                                </div>
                                        
                                <span>Allow restart numbering</span>
                                <div>
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
                                        
                                <span>Side number</span>
                                <div>
                                    <Checkbox
                                        checked={sideNumber}
                                        onChange={changeAndScroll(this.onSideNumberChange(suffix))}
                                        color="primary" 
                                    />
                                </div>
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
                            <span className="listSection-firstSpan">List item</span>
                            <div className="listItemSelect">
                                <NativeSelect 
                                    value={listItem} 
                                    onChange={this.onListItemChange(unicodeChar)} 
                                    input={ <CustomInputShort /> }
                                >
                                    { 
                                        Object.entries(bulletNamesMap).map(([key, value]) => {
                                            return (<option key={key} value={key}>{value}</option>) 
                                        })
                                    }
                                    <option value={"custom"} className="highlightedOption">Custom</option>
                                </NativeSelect>
                            </div>
                        </div>
                        <Fade in={listItem === "custom"}>
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
                                    <span>Char</span>
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
                        </Fade>
                    </div> 
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form, validationError }}) => {
    return { 
        formState: form,
        validationError: validationError.listSection,
        isList: form.isList,
        listName: form.listName, 
        orderLevel: form.orderLevel,
        prefix: form.prefix,
        suffix: form.suffix,
        suffixDistance: form.suffixDistance,
        magicTabs: form.magicTabs,
        listType: form.listType,
        listItem: form.listItem,
        unicodeNumber: form.unicodeNumber,
        unicodeChar: form.unicodeChar,
        numberingStyle: form.numberingStyle,
        continueNumbering: form.continueNumbering,
        allowRestartNumbering: form.allowRestartNumbering,
        includePreviousFrom: form.includePreviousFrom,
        sideNumber: form.sideNumber,
        sideNumberFont: form.sideNumberFont,
        customSideNumberFont: form.customSideNumberFont,
        sideNumberAlignment: form.sideNumberAlignment,
        sideNumberFontSize: form.sideNumberFontSize,
        sideNumberFontColor: form.sideNumberFontColor,
        sideNumberFillingColor: form.sideNumberFillingColor,
        sideNumberWidth: form.sideNumberWidth,
        sideNumberRadius: form.sideNumberRadius,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValidationError: payload => dispatch(updateValidationError(payload)),
        changeListName: setValue(dispatch)("listName"),
        changeIsList: toggleValue(dispatch)("isList"),
        changeOrderLevel: setValue(dispatch)("orderLevel"),
        changePrefix: setValue(dispatch)("prefix"),
        changeSuffix: setValue(dispatch)("suffix"),
        changeSuffixDistance: setValue(dispatch)("suffixDistance"),
        changeMagicTabs: toggleValue(dispatch)("magicTabs"),
        changeListType: setValue(dispatch)("listType"),
        changeListItem: setValue(dispatch)("listItem"),
        changeUnicodeNumber: setColor(dispatch)("unicodeNumber"),
        changeUnicodeChar: setBullet(dispatch)("unicodeChar"),
        changeNumberingStyle: setValue(dispatch)("numberingStyle"),
        changeContinueNumbering: toggleValue(dispatch)("continueNumbering"),
        changeAllowRestartNumbering: toggleValue(dispatch)("allowRestartNumbering"),
        changeIncludePreviousFrom: setValue(dispatch)("includePreviousFrom"),
        changeSideNumber: toggleValue(dispatch)("sideNumber"),
        changeSideNumberFont: setValue(dispatch)("sideNumberFont"),
        changeCustomSideNumberFont: setValue(dispatch)("customSideNumberFont"),
        changeSideNumberAlignment: setValue(dispatch)("sideNumberAlignment"),
        changeSideNumberFontSize: setNumber(dispatch)("sideNumberFontSize"),
        changeSideNumberFontColor: setColor(dispatch)("sideNumberFontColor"),
        changeSideNumberFillingColor: setColor(dispatch)("sideNumberFillingColor"),
        changeSideNumberWidth: setNumber(dispatch)("sideNumberWidth"),
        changeSideNumberRadius: setNumber(dispatch)("sideNumberRadius"),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ListSection);