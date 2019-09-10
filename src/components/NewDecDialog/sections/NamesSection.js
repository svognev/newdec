import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import Button from '@material-ui/core/Button';

const NamesSection = (props) => {
    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
            <span>Key</span>
            <TextField variant="outlined" margin="dense" />

            <span>Group</span>
            <div>
                <NativeSelect input={ <CustomInput /> }>
                    <option value={null}>...</option>
                    <option value="0">Text</option>
                    <option value="1">Heading</option>
                    <option value="2">Heading Heading Heading Heading</option>
                </NativeSelect>
                <Button color="primary" className="textButton">+New</Button>
            </div>

            <span>Active</span>
            <div>
                <Checkbox color="primary" />
            </div>
            <span>Style name (English)</span>
            <TextField variant="outlined" margin="dense" />

            <span>Style name (German)</span>
            <TextField variant="outlined" margin="dense" />

            <span>Style name (Russian)</span>
            <TextField variant="outlined" margin="dense" />

            <span>Style name (French)</span>
            <TextField variant="outlined" margin="dense" />
        </div>
    );
}

export default NamesSection;