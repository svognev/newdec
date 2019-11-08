import React from "react";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import NativeSelect from "@material-ui/core/NativeSelect";

import ListPreview from "../common/Preview/ListPreview";
import CustomInput from "../common/CustomInput";
import CustomInputShort from "../common/CustomInputShort";
import ColorField from "../common/ColorField";
import LabelWithAsterisk from "../common/LabelWithAsterisk";
import FontSelect from "../common/FontSelect";
import { listStyleTypes, bulletNamesMap } from "../constants"
import { selectAllOnClick, scrollToBottom } from "../helpers";

const ListSection = (props) => {
    const {
        listPreviewProps,
        isList, changeIsList, 
        listName, changeListName,
        orderLevel, changeOrderLevel,
        prefix, changePrefix,
        suffix, changeSuffix,
        suffixDistance, changeSuffixDistance,
        magicTabs, changeMagicTabs,
        listType, changeListType, 
        listItem, changeListItem,
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
        validationError,
    } = props;

    const onListTypeChange = (...args) => {
        changeListType(...args);
        scrollToBottom("content-rightSide");
    };

    const onSideNumberChange = (...args) => {
        changeSideNumber(...args);
        scrollToBottom("content-rightSide");
    };
    
    return (
        <>
            <div className="dialogGrid dialogGrid_2cols">
                <div>
                    <div className="dialogGrid dialogGrid_2cols dialogGrid_mediumWidth">
                    <div className="listSection-firstSpan">
                        <span>Is it a list?</span>
                    </div>
                    <div>
                        <Checkbox 
                            color="primary" 
                            checked={isList} 
                            onChange={changeIsList} 
                        />
                    </div>
                    { isList && (
                        <>
                            <LabelWithAsterisk>List name</LabelWithAsterisk>
                            <TextField
                                value={listName}
                                onChange={changeListName} 
                                error={validationError && !listName}
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
                                    onChange={onListTypeChange} 
                                    input={ <CustomInput /> }
                                >
                                    <option value={"unordered"}>Unordered</option>
                                    <option value={"ordered"}>Ordered</option>
                                </NativeSelect>
                            </div>
                        </>
                    ) }
                </div>
                    { isList && listType === "ordered" && (
                        <div className="listSection-typeSettings">
                            <div className="dialogGrid dialogGrid_2cols">
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
                                        onChange={onSideNumberChange}
                                        color="primary" 
                                    />
                                </div>
                            </div> 

                            { sideNumber && (
                                <div className="fontSettingsGrid listSection-typeSettings">
                                    <FontSelect 
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
                            ) }
                        </div>
                    ) }
                </div>
                { isList && <div className="listPreviewBox"><ListPreview {...listPreviewProps} /></div> }
            </div>
            { isList && listType === "unordered" && (
                <div className="listSection-typeSettings">
                    <div className="dialogGrid dialogGrid_2cols">
                        <div className="dialogGrid dialogGrid_2cols">
                            <span className="listSection-firstSpan">List item</span>
                            <div className="listItemSelect">
                                <NativeSelect 
                                    value={listItem} 
                                    onChange={changeListItem} 
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
                        {   listItem === "custom" && (
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
                                            variant="outlined" 
                                            margin="dense" 
                                            className="bulletInput" 
                                        />
                                    </div>
                                </div>
                            </div> 
                        ) }
                    </div> 
                </div> 
            ) }
        </>
    );
};

export default ListSection;