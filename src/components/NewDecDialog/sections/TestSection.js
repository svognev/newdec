import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import NativeSelect from '@material-ui/core/NativeSelect';

import ListPreview from 'components/common/Preview/ListPreview';
import CustomInput from 'components/common/CustomInput';
import CustomInputShort from 'components/common/CustomInputShort';
import { listStyleType } from 'constants.js'
import { getCorrectColor, selectAllOnClick, scrollToBottom } from 'utils.js';

const TestSection = (props) => {
    const {
        isList, changeIsList, 
        listType, changeListType, 
        listName, changeListName,
        prefix, changePrefix,
        suffix, changeSuffix,
        orderLevel, changeOrderLevel,
        suffixDistance, changeSuffixDistance,
        magicTabs, changeMagicTabs,
        listItem, changeListItem,
        unicodeNumber, changeUnicodeNumber,
        unicodeChar, changeUnicodeChar,
        numberingStyle, changeNumberingStyle,
        continueNumbering, changeContinueNumbering,
        allowRestartNumbering, changeAllowRestartNumbering,
        includePreviousFrom, changencludePreviousFrom,
        sideNumberFont, changeSideNumberFont,
        sideNumberAlignment, changeSideNumberAlignment,
        sideNumberFontSize, changeSideNumberFontSize,
        sideNumberFontColor, changeSideNumberFontColor,
        sideNumberFillingColor, changeSideNumberFillingColor,
        sideNumberWidth, changeSideNumberWidth,
        sideNumberRadius, changeSideNumberRadius,
    } = props;

    const onListTypeChange = (...args) => {
        changeListType(...args);
        scrollToBottom("content-rightSide");
    };

    const onSideNumberChange = (...args) => {
        changeContinueNumbering(...args);
        scrollToBottom("content-rightSide");
    };

    const fontColorSampleStyle = {
        backgroundColor: `#${getCorrectColor(sideNumberFontColor)}`,
    };

    const fillingColorSampleStyle = {
        backgroundColor: `#${getCorrectColor(sideNumberFillingColor)}`,
    };
    
    return (
        <>
            <div className="dialogGrid dialogGrid_2cols">
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
                            <span>List name</span>
                            <TextField
                                value={listName}
                                onChange={changeListName} 
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
                <ListPreview numberingStyle={numberingStyle} />
            </div>

            <div className="listSection-typeSettings">
                { isList && listType === "unordered" && (
                    <div className="dialogGrid dialogGrid_2cols">
                        <div className="dialogGrid dialogGrid_2cols">
                            <span className="listSection-firstSpan">List item</span>
                            <div className="listItemSelect">
                                <NativeSelect 
                                    value={listItem} 
                                    onChange={changeListItem} 
                                    input={ <CustomInputShort /> }
                                >
                                    <option  value={"bulletpoint"}>•</option>
                                    <option value={"dash"}>—</option>
                                    <option value={"star"}>★</option>
                                    <option value={"individual"}>Custom</option>
                                </NativeSelect>
                            </div>
                        </div>
                        {   listItem === "individual" && (
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
                ) }

                { isList && (listType === "ordered" || listType === "sideNumber") && (
                    <div className="dialogGrid dialogGrid_2cols">
                        <span>Numbering style</span>
                        <div>
                            <NativeSelect
                                value={numberingStyle}
                                onChange={changeNumberingStyle}
                                input={ <CustomInputShort /> }
                            >
                                {listStyleType.map(style => (
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
                                onChange={changencludePreviousFrom}
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
                                checked={continueNumbering}
                                onChange={onSideNumberChange}
                                color="primary" 
                            />
                        </div>
                    </div> 
                ) }

                { isList && listType === "sideNumber" && (
                    <div className="dialogGrid dialogGrid_2cols">
                        <span>Side number</span>
                    </div> 
                ) }

                { isList && listType === "ordered" && continueNumbering && (
                    <div className="dialogGrid dialogGrid_2minCols listSection-typeSettings">
                        <span>Font</span>
                        <NativeSelect 
                            value={sideNumberFont}
                            onChange={changeSideNumberFont}
                            input={ <CustomInput /> }
                        >
                            <option value={"Roboto, slab-serif"}>Roboto</option>
                            <option value={"'Source Serif Pro', serif"}>Source Serif</option>
                        </NativeSelect>

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
                        <div className="colorField">
                            <TextField 
                                value={sideNumberFontColor}
                                onChange={changeSideNumberFontColor}
                                onClick={selectAllOnClick("FFF")}
                                variant="outlined" 
                                margin="dense" 
                                className="numberInput" 
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">#</InputAdornment>
                                }}
                            />
                            <div className="colorSample" style={fontColorSampleStyle}></div>
                        </div>

                        <span>Filling color</span>
                        <div className="colorField">
                            <TextField 
                                value={sideNumberFillingColor}
                                onChange={changeSideNumberFillingColor}
                                onClick={selectAllOnClick("1E88E5")}
                                variant="outlined" 
                                margin="dense" 
                                className="numberInput" 
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">#</InputAdornment>
                                }}
                            />
                            <div className="colorSample" style={fillingColorSampleStyle}></div>
                        </div>

                        <span>Width</span>
                        <div className="inputWithAdornment">
                            <TextField 
                                value={sideNumberWidth}
                                onChange={changeSideNumberWidth}
                                onClick={selectAllOnClick("12")}
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
                                onClick={selectAllOnClick("5")}
                                variant="outlined" 
                                margin="dense" 
                                className="numberInput"
                            />                                            
                            <InputAdornment variant="filled" position="end">pt</InputAdornment>
                        </div>    
                    </div> 
                ) }
            </div>
             
        </>
    );
};

export default TestSection;