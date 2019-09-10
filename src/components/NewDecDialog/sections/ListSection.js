import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import CustomInputShort from '../../common/CustomInputShort';
import InputAdornment from '@material-ui/core/InputAdornment';

import { listStyleType } from '../../../constants'

const ListSection = ({ isList, listType, changeIsList, changeListType, bulletField, setBulletField }) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Is it a list?</span></li>
                    { isList && (
                        <React.Fragment>
                            <li><span>List name</span></li>
                            <li><span>Order level</span></li>
                            <li><span>Prefix</span></li>
                            <li><span>Suffix</span></li>
                            <li><span>Suffix distance</span></li>
                            <li><span>Magic Tabs</span></li>
                            <li><span>Type of list</span></li>
                        </React.Fragment>
                    ) }
                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li><Checkbox color="primary" checked={isList} onChange={changeIsList} /></li>
                    { isList && (
                        <React.Fragment>
                            <li><TextField variant="outlined" margin="dense" /></li>
                            <li>
                                <NativeSelect input={ <CustomInputShort /> }>
                                    <option value={null}>...</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </NativeSelect>
                            </li>
                            <li><TextField variant="outlined" margin="dense" /></li>
                            <li><TextField variant="outlined" margin="dense" /></li>
                            <li>
                                <NativeSelect input={ <CustomInputShort /> }>
                                    <option value="0.5">0.25</option>
                                    <option value="0.5">0.5</option>
                                    <option value="0.75">0.75</option>
                                    <option value="1">1</option>
                                    <option value="1.25">1.25</option>
                                    <option value="1.5">1.5</option>
                                    <option value="1.75">1.75</option>
                                    <option value="2">2</option>
                                </NativeSelect>
                                <InputAdornment variant="filled" position="end">cm</InputAdornment>
                            </li>
                            <li><Checkbox color="primary" /></li>
                            <li>
                                <NativeSelect value={listType} onChange={changeListType} input={ <CustomInput /> }>
                                    <option value={"unordered"}>Unordered</option>
                                    <option value={"ordered"}>Ordered</option>
                                </NativeSelect>
                            </li>
                            { listType === "unordered" ? (
                                <React.Fragment>
                                    <li className="paragraphDecorators-dialog__fraction-title"><span>Bullet character</span></li>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <li className="paragraphDecorators-dialog__fraction-title"><span>Numbering style</span></li>
                                    <li><span>Continue numbering after interruption</span></li>
                                    <li><span>Allow restart numbering</span></li>
                                    <li><span>Include previous levels from</span></li>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    ) }
                </div>
                <div className="paragraphDecorators-dialog__col ">
                <li></li>
                    { isList && (
                        <React.Fragment>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            { listType === "unordered" ? (
                                <React.Fragment>
                                    <li className="paragraphDecorators-dialog__fraction-title">
                                        <TextField 
                                            variant="outlined" 
                                            margin="dense" 
                                            className="paragraphDecorators-dialog__bullet-input" 
                                            onChange={setBulletField}
                                            value={bulletField}
                                         />                                            
                                        <span className="paragraphDecorators-dialog__grey-text">
                                            { bulletField ? `Unicode: ${bulletField.charCodeAt(0).toString(16)}` : ""}
                                        </span>
                                    </li>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <li className="paragraphDecorators-dialog__fraction-title">
                                        <NativeSelect input={ <CustomInputShort /> }>
                                            {listStyleType.map(style => (
                                              <option value={style.value} key={style.value}>{style.name}</option>
                                            ))}                                    
                                        </NativeSelect>
                                    </li>
                                    <li><Checkbox color="primary" /></li>
                                    <li><Checkbox color="primary" checked={true} /></li>
                                    <li>
                                        <NativeSelect input={ <CustomInputShort /> }>
                                            <option value={null}>...</option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </NativeSelect>
                                        <span className="paragraphDecorators-dialog__grey-text">
                                            Preview: А.1.1
                                        </span>
                                    </li>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    ) }
                </div>
            </ul>
                
        </form>
    );
}

export default ListSection;