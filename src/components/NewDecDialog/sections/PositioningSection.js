import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import CustomInputShort from '../../common/CustomInputShort';

import { backSpaceActions, returnOnEmptySectionActions, decoratorsList } from '../../../constants'

const WordExportSection = (props) => {

    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Identational level</span></li>
                    <li className="paragraphDecorators-dialog__fraction-title"><h4>BACKSPACE</h4></li>
                    <li><span>At the beginning of a section with content</span></li>
                    <li><span>At the beginning of a section WITHOUT content</span></li>
                    <li className="paragraphDecorators-dialog__fraction-title"><h4>RETURN</h4></li>
                    <li><span>Create new section below</span></li>
                    <li><span>Style of next section</span></li>
                    <li><span>In empty section change current style to</span></li>
                    <li className="paragraphDecorators-dialog__fraction-title"><h4>TAB / SHIFT+TAB</h4></li>
                    <li><span>TAB – change current style to</span></li>
                    <li><span>SHIFT+TAB – change current style to</span></li>
                </div>
                <div className="paragraphDecorators-dialog__col">
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
                    <li className="paragraphDecorators-dialog__fraction-title"></li>
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                            {backSpaceActions.map(action => (
                                <option value={action.key} key={`backSpace ${action.key}`}>{action.value}</option>
                            ))}
                        </NativeSelect>
                    </li>
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                            {returnOnEmptySectionActions.map(action => (
                                <option value={action.key} key={`backSpace ${action.key}`}>{action.value}</option>
                            ))}
                        </NativeSelect>
                    </li>
                    <li className="paragraphDecorators-dialog__fraction-title"></li>
                    <li><Checkbox color="primary" /></li>
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                        { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                        </NativeSelect>
                    </li>                    
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                        { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                        </NativeSelect>
                    </li>
                    <li className="paragraphDecorators-dialog__fraction-title"></li>
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                        { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                        </NativeSelect>
                    </li>
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                        { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                        </NativeSelect>
                    </li>
                </div>
            </ul>
                
        </form>
    );
}

export default WordExportSection;