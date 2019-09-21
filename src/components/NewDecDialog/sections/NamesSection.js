import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';

import CustomInput from '../../common/CustomInput';
import NewGroupDialog from '../../common/NewGroupDialog';
import withNewGroupControl from '../../common/withNewGroupControl';

const NamesSection = (props) => {
    const newGroupName = props.newGroup.nameEN;
    const isEditMode = !!newGroupName;
    const { groupSelect, newGroup, isOpen, hideDialog, handleClick, onSave, changeGroupSelect } = props;

    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
            <span>Key</span>
            <TextField variant="outlined" margin="dense" />

            <span>Group</span>
            <div>
                <NativeSelect 
                    input={ <CustomInput /> } 
                    value={groupSelect} 
                    onChange={(e) => {
                        changeGroupSelect(e.target.value)
                    }} 
                >
                    <option value="">...</option>
                    { isEditMode && <option className="highlightedOption" value={newGroupName}>{newGroupName}</option> }
                    <option value="0">Text</option>
                    <option value="1">Heading</option>
                    <option value="2">Heading Heading Heading Heading</option>
                </NativeSelect>
                {
                    !(isEditMode && groupSelect !== newGroupName) &&
                    <Button color="primary" className="textButton" onClick={handleClick}>
                        { isEditMode ? "Edit new group" : "+New" }
                    </Button>
                 }
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

            <NewGroupDialog 
                isOpen={isOpen}
                hideDialog={hideDialog}
                onSave={onSave}
                isEditMode={isEditMode}
                currentGroup={newGroup}
                changeGroupSelect={changeGroupSelect}
                groupType="decorators"
            />
        </div>
    );
}

export default withNewGroupControl(NamesSection);