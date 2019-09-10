import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import CustomInputShort from '../../common/CustomInputShort';

import { backSpaceActions, returnOnEmptySectionActions, decoratorsList } from '../../../constants'

const TestSection = (props) => {
    return (
        <div className="dialogGrid dialogGrid_positioning">
            <span id="span1">Identational level</span>
            <NativeSelect input={ <CustomInputShort /> } id="select1">
                <option value={null}>...</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </NativeSelect>
            
            <div id="title1" className="sectionTitle">
                <span>BACKSPACE</span>
            </div>
            <span id="span2">At the beginning of a section with content</span>
            <NativeSelect input={ <CustomInput /> } id="select2">
                {backSpaceActions.map(action => (
                    <option value={action.key} key={`backSpace ${action.key}`}>{action.value}</option>
                ))}
            </NativeSelect>
            <span id="span3">At the beginning of a section WITHOUT content</span>
            <NativeSelect input={ <CustomInput /> } id="select3">
                {returnOnEmptySectionActions.map(action => (
                    <option value={action.key} key={`backSpace ${action.key}`}>{action.value}</option>
                ))}
            </NativeSelect>

            <div className="sectionTitle" id="title2">
                <span>RETURN</span>
            </div>
            <span id="span4">Style of next section</span>
            <NativeSelect input={ <CustomInput /> } id="select4">
                { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
            </NativeSelect>
            <span id="span5">In empty section change current style to</span>
            <NativeSelect input={ <CustomInput /> } id="select5">
                { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
            </NativeSelect>
        </div>
    );
}

export default TestSection;