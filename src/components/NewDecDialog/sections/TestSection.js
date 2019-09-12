import React from 'react';

import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import CustomInputShort from '../../common/CustomInputShort';

import { backSpaceActions, returnOnEmptySectionActions, decoratorsList } from '../../../constants'

const TestSection = (props) => {
    return (
        <div className="dialogGrid dialogGrid_positioning">
            <span id="r1c1">Identational level</span>
            <NativeSelect id="r1c2" input={ <CustomInputShort /> }>
                <option value={null}>...</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </NativeSelect>
            
            <div id="r2" className="sectionTitle">
                <span>BACKSPACE</span>
            </div>
            <span id="r3c1">At the beginning of a section with content</span>
            <NativeSelect id="r3c2" input={ <CustomInput /> }>
                {backSpaceActions.map(action => (
                    <option value={action.key} key={`backSpace ${action.key}`}>{action.value}</option>
                ))}
            </NativeSelect>
            <span id="r4c1">At the beginning of a section WITHOUT content</span>
            <NativeSelect id="r4c2" input={ <CustomInput /> }>
                {returnOnEmptySectionActions.map(action => (
                    <option value={action.key} key={`backSpace ${action.key}`}>{action.value}</option>
                ))}
            </NativeSelect>

            <div id="r5" className="sectionTitle">
                <span>RETURN</span>
            </div>
            <span id="r6c1">Style of next section</span>
            <NativeSelect id="r6c2" input={ <CustomInput /> }>
                { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
            </NativeSelect>
            <span id="r7c1">In empty section change current style to</span>
            <NativeSelect  id="r7c2" input={ <CustomInput /> }>
                { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
            </NativeSelect>
        </div>
    );
}

export default TestSection;