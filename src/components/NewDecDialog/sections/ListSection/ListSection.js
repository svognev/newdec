import React from "react";

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
import { listStyleTypes, bulletNamesMap, HOLDER } from "../../constants"
import { selectAllOnClick, scrollToBottom, getListSectionErrorState,focusInput } from "../../helpers";

import "./style.css";

class ListSection extends React.Component {
    listNameInputRef = React.createRef();
    unicodeCharInputRef = React.createRef();

    changeAndScroll = changeFunction => e => {
        changeFunction(e);
        scrollToBottom("content-rightSide");
    };

    onIsListChange = e => {
        this.changeAndScroll(this.props.changeIsList)(e);
        if (e.target.checked && this.props.listName === HOLDER) {
            focusInput(this.listNameInputRef);
        }
    };

    onListItemChange = e => {
        this.props.changeListItem(e);
        if (e.target.value === "custom" && !this.props.unicodeChar) {
            focusInput(this.unicodeCharInputRef);
        }
    };

    render() {
        const {
            listPreviewProps,
            isList,
            listName, changeListName,
            orderLevel, changeOrderLevel,
            prefix, changePrefix,
            suffix, changeSuffix,
            suffixDistance, changeSuffixDistance,
            magicTabs, changeMagicTabs,
            listType, changeListType, 
            listItem,
            unicodeNumber, changeUnicodeNumber,
            unicodeChar, changeUnicodeChar,
            numberingStyle, changeNumberingStyle,
            continueNumbering, changeContinueNumbering,
            allowRestartNumbering, changeAllowRestartNumbering,
            includePreviousFrom, changeIncludePreviousFrom,
            sideNumber, changeSideNumber,
            sideNumberFont, changeSideNumberFont,
            customSideNumberFont, changeCustomSideNumberFont,
            sideNumberAlignment, changeSideNumberAlignment,
            sideNumberFontSize, changeSideNumberFontSize,
            sideNumberFontColor, changeSideNumberFontColor,
            sideNumberFillingColor, changeSideNumberFillingColor,
            sideNumberWidth, changeSideNumberWidth,
            sideNumberRadius, changeSideNumberRadius,
            validationError: { listSection: validationError },
            updateValidationError,
            formState,
        } = this.props;

        const { changeAndScroll, onIsListChange, onListItemChange } = this;

        if (validationError && !getListSectionErrorState(formState)) {
            updateValidationError({ listSection: false });
        }
        
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
                                        onChange={onIsListChange} 
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
                                            onChange={changeAndScroll(changeListType)} 
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
                                        onChange={changeAndScroll(changeSideNumber)}
                                        color="primary" 
                                    />
                                </div>
                            </div> 
    
                            <div className={`optionalSettings optionalSettings_main optionalSettings_${sideNumberSettingsState}`}>
                                <div className="fontSettingsGrid listTypeSettings">
                                    <FontSelectFields 
                                        font={sideNumberFont}
                                        changeFont={changeSideNumberFont}
                                        customFont={customSideNumberFont}
                                        changeCustomFont={changeCustomSideNumberFont}
                                        extraFunction={() => { scrollToBottom("content-rightSide"); }}
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
                                        changeColorCode={changeSideNumberFontColor}
                                        defaultColorCode={"FFF"}
                                        bottomAligned
                                    />
                                        
                                    <span>Filling color</span>
                                    <ColorField 
                                        colorCode={sideNumberFillingColor} 
                                        changeColorCode={changeSideNumberFillingColor}
                                        defaultColorCode={"1E88E5"}
                                        bottomAligned
                                    />
    
                                    <span>Width</span>
                                    <div className="inputWithAdornment">
                                        <TextField 
                                            value={sideNumberWidth}
                                            onChange={changeSideNumberWidth}
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
                                            onChange={changeSideNumberRadius}
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
                                    onChange={onListItemChange} 
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
                                            onChange={changeUnicodeNumber}
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
                                            onChange={changeUnicodeChar}
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

export default ListSection;