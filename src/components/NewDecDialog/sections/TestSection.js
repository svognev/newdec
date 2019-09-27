import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import NativeSelect from '@material-ui/core/NativeSelect';

import CustomInput from 'components/common/CustomInput';
import CustomInputShort from 'components/common/CustomInputShort';
import { listStyleType } from 'constants.js'
import { selectAllOnClick } from 'utils';
import { unicodeNumberToChar, unicodeCharToNumber } from 'utils.js';


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
    } = props;
    
    console.log(unicodeCharToNumber(unicodeChar));
    return (
        <>
            <div className="dialogGrid dialogGrid_2cols">
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
                                onChange={changeListType} 
                                input={ <CustomInput /> }
                            >
                                <option value={"unordered"}>Unordered</option>
                                <option value={"ordered"}>Ordered</option>
                                <option value={"sideNumber"}>Side number</option>
                            </NativeSelect>
                        </div>
                    </>
                ) }
            </div>
            {
                isList && listType === "unordered" && (
                    <>
                        <div className="dialogGrid dialogGrid_2cols">
                            <div className="dialogGrid dialogGrid_2cols">
                                <span className="listSection-firstSpan">List item</span>
                                <div className="listItemSelect">
                                    <NativeSelect 
                                        value={listItem} 
                                        onChange={changeListItem} 
                                        input={ <CustomInput /> }
                                    >
                                        <option  value={"bulletpoint"}>• Bullet Point</option>
                                        <option value={"dash"}>– Long Dash</option>
                                        <option value={"star"}>* Star</option>
                                        <option value={"individual"}>… Individual Unicode</option>
                                    </NativeSelect>
                                </div>
                            </div>
                            {   listItem === "individual" && (
                                <div className="dialogGrid dialogGrid_2cols dialogGrid_leftIndented">
                                    <div className="dialogGrid dialogGrid_2cols dialogGrid_leftIndented">
                                        <span>Number</span>
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
                                </div> )
                            }
                        </div>
                        
                        
                    </>
                ) 
            } 
        </>
    );
};

export default TestSection;