import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import NativeSelect from "@material-ui/core/NativeSelect";
import Fade from '@material-ui/core/Fade';

import Handlers from "../../Handlers";
import ListPreview from "../../common/Preview/ListPreview";
import CustomInput from "../../common/CustomInput";
import CustomInputShort from "../../common/CustomInputShort";
import ColorField from "../../common/ColorField";
import LabelWithAsterisk from "../../common/LabelWithAsterisk";
import FontSelectFields from "../../common/FontSelectFields";
import { listStyleTypes, bulletNamesMap, HOLDER } from "../../constants";
import { updateDecoratorForm, updateValidationError } from "../../actions";
import { 
    selectAllOnClick, 
    scrollToBottom, 
    changeAndScroll, 
    getListSectionErrorState,
    focusInput,
    unicodeNumberToChar, 
    unicodeCharToNumber 
} from "../../helpers";

import "./style.css";

class ListSection extends React.Component {
    handlers = Handlers(this.props.updateForm);
    setValue = this.handlers.setValue;
    toggleValue = this.handlers.toggleValue;
    setNumber = this.handlers.setNumber;
    setColor = this.handlers.setColor;
    setBullet = this.handlers.setBullet;

    changeListName = this.setValue("listName");
    changeOrderLevel = this.setValue("orderLevel");
    changePrefix = this.setValue("prefix");
    changeSuffix = this.setValue("suffix");
    changeSuffixDistance = this.setValue("suffixDistance");
    changeMagicTabs = this.toggleValue("magicTabs");
    changeListItem = this.setValue("listItem");
    changeNumberingStyle = this.setValue("numberingStyle");
    changeContinueNumbering = this.toggleValue("continueNumbering");
    changeAllowRestartNumbering = this.toggleValue("allowRestartNumbering");
    changeIncludePreviousFrom = this.setValue("includePreviousFrom");
    changeSideNumberFont = this.setValue("sideNumberFont");
    changeCustomSideNumberFont = this.setValue("customSideNumberFont");
    changeSideNumberAlignment = this.setValue("sideNumberAlignment");
    changeSideNumberFontSize = this.setNumber("sideNumberFontSize");
    changeSideNumberFontColor = this.setColor("sideNumberFontColor");
    changeSideNumberFillingColor = this.setColor("sideNumberFillingColor");
    changeSideNumberWidth = this.setNumber("sideNumberWidth");
    changeSideNumberRadius = this.setNumber("sideNumberRadius");

    changeIsList = listName => e => {
        if (e.target.checked) {
            if (listName === HOLDER) {
                this.changeListName(null, "");
            }
        } else if (listName === ""){
            setTimeout(() => this.changeListName(null, HOLDER), 200);
        }
        this.toggleValue("isList")(e);
    };

    changeListType = suffix => e => {
        const { value } = e.target;
        this.setValue("listType")(null, value);
        if (value === "ordered" && suffix === "") {
            this.setValue("suffix")(null, ".");
        } else if (value === "unordered" && suffix === ".") {
            this.setValue("suffix")(null, "");
        }
    };

    changeUnicodeNumber = prevUnicodeNumber => e => {
        const newUnicodeNumber = this.setColor("unicodeNumber")(prevUnicodeNumber)(e);
        const newUnicodeChar = newUnicodeNumber !== "" ? unicodeNumberToChar(newUnicodeNumber) : "";
        this.setValue("unicodeChar")(null, newUnicodeChar);
    };
    
    changeUnicodeChar = e => {
        const newUnicodeChar = this.setBullet("unicodeChar")(e);
        const newUnicodeNumber = newUnicodeChar !== "" ? unicodeCharToNumber(newUnicodeChar) : "";
        this.setValue("unicodeNumber")(null, newUnicodeNumber);
    };

    changeSideNumber = suffix => e => {
        this.toggleValue("sideNumber")(e);
        if (e.target.checked && suffix === ".") {
            this.setValue("suffix")(null, "");
        } else if (!e.target.checked && suffix === "") {
            this.setValue("suffix")(null, ".");
        }
    };

    listNameInputRef = React.createRef();
    unicodeCharInputRef = React.createRef();

    onIsListChange = listName => e => {
        changeAndScroll(this.changeIsList(listName))(e);
        if (e.target.checked && listName === HOLDER) {
            focusInput(this.listNameInputRef);
        }
    };

    onListItemChange = unicodeChar => e => {
        this.changeListItem(e);
        if (e.target.value === "custom" && !unicodeChar) {
            focusInput(this.unicodeCharInputRef);
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
            listPreviewProps,
            validationError,
            formState,
        } = this.props;

        const {
            isList,
            listName, 
            orderLevel,
            prefix,
            suffix,
            suffixDistance,
            magicTabs,
            listType,
            listItem,
            unicodeNumber,
            unicodeChar,
            numberingStyle,
            continueNumbering,
            allowRestartNumbering,
            includePreviousFrom,
            sideNumber,
            sideNumberFont,
            customSideNumberFont,
            sideNumberAlignment,
            sideNumberFontSize,
            sideNumberFontColor,
            sideNumberFillingColor,
            sideNumberWidth,
            sideNumberRadius,
        } = formState;
        
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
                                        onChange={this.onIsListChange(listName)} 
                                    />
                                </div>
                            </div>
                            <div className={`optionalSettings optionalSettings_main optionalSettings_${mainListSettingsState}`}>
                                <div className="dialogGrid dialogGrid_2cols dialogGrid_mediumWidth optionalSettings">
                                    <LabelWithAsterisk>List name</LabelWithAsterisk>
                                    <TextField
                                        value={listName}
                                        onChange={this.changeListName} 
                                        error={validationError && !listName}
                                        inputRef={this.listNameInputRef}
                                        variant="outlined" 
                                        margin="dense" 
                                    />
    
                                    <span>Order level</span>
                                    <div>
                                        <NativeSelect
                                            value={orderLevel}
                                            onChange={this.changeOrderLevel}
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
                                        onChange={this.changePrefix} 
                                        variant="outlined" 
                                        margin="dense" 
                                    />
    
                                    <span>Suffix</span>
                                    <TextField
                                        value={suffix}
                                        onChange={this.changeSuffix} 
                                        variant="outlined" 
                                        margin="dense" 
                                        onClick={selectAllOnClick(".")}
                                    />
    
                                    <span>Suffix distance</span>
                                    <div className="inputWithAdornment">
                                        <NativeSelect
                                            value={suffixDistance}
                                            onChange={this.changeSuffixDistance} 
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
                                            onChange={this.changeMagicTabs} 
                                        />
                                    </div>
    
                                    <span>Type of list</span>
                                    <div>
                                        <NativeSelect 
                                            value={listType} 
                                            onChange={changeAndScroll(this.changeListType(suffix))} 
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
                                        onChange={this.changeNumberingStyle}
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
                                        onChange={this.changeContinueNumbering}
                                        color="primary" 
                                    />
                                </div>
                                        
                                <span>Allow restart numbering</span>
                                <div>
                                    <Checkbox
                                        checked={allowRestartNumbering} 
                                        onChange={this.changeAllowRestartNumbering}
                                        color="primary" 
                                    />
                                </div>
                                        
                                <span>Include previous levels from</span>
                                <div>
                                    <NativeSelect
                                        value={includePreviousFrom} 
                                        onChange={this.changeIncludePreviousFrom}
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
                                        onChange={changeAndScroll(this.changeSideNumber(suffix))}
                                        color="primary" 
                                    />
                                </div>
                            </div> 
    
                            <div className={`optionalSettings optionalSettings_main optionalSettings_${sideNumberSettingsState}`}>
                                <div className="fontSettingsGrid listTypeSettings">
                                    <FontSelectFields 
                                        font={sideNumberFont}
                                        changeFont={this.changeSideNumberFont}
                                        customFont={customSideNumberFont}
                                        changeCustomFont={this.changeCustomSideNumberFont}
                                        extraFunction={() => { scrollToBottom("content-rightSide"); }}
                                    />
                            
                                    <span>Alignment</span>
                                    <NativeSelect 
                                        value={sideNumberAlignment}
                                        onChange={this.changeSideNumberAlignment}
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
                                            onChange={this.changeSideNumberFontSize(sideNumberFontSize)}
                                            onClick={selectAllOnClick("12")}
                                            variant="outlined" 
                                            margin="dense" 
                                            className="numberInput"
                                        />                                            
                                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                                    </div>      
                            
                                    <span>Font color</span>
                                    <ColorField 
                                        colorCode={sideNumberFontColor} 
                                        changeColorCode={this.changeSideNumberFontColor(sideNumberFontColor)}
                                        defaultColorCode={"FFF"}
                                        bottomAligned
                                    />
                                        
                                    <span>Filling color</span>
                                    <ColorField 
                                        colorCode={sideNumberFillingColor} 
                                        changeColorCode={this.changeSideNumberFillingColor(sideNumberFillingColor)}
                                        defaultColorCode={"1E88E5"}
                                        bottomAligned
                                    />
    
                                    <span>Width</span>
                                    <div className="inputWithAdornment">
                                        <TextField 
                                            value={sideNumberWidth}
                                            onChange={this.changeSideNumberWidth(sideNumberWidth)}
                                            onClick={selectAllOnClick("20")}
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
                                            onChange={this.changeSideNumberRadius(sideNumberRadius)}
                                            onClick={selectAllOnClick("10")}
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
                                            onChange={this.changeUnicodeNumber(unicodeNumber)}
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
                                            onChange={this.changeUnicodeChar}
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateForm: payload => dispatch(updateDecoratorForm(payload)),
        updateValidationError: payload => dispatch(updateValidationError(payload)),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ListSection);