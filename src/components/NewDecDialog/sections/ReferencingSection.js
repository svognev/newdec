import React from 'react';

import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import Button from '@material-ui/core/Button';

import NewGroupDialog from '../../common/NewGroupDialog';
import withNewGroupControl from "../../common/withNewGroupControl";

const ReferencingSection = (props) => {
    const newGroupName = props.newGroup.nameEN;
    const isEditMode = !!newGroupName;
    const { groupSelect, newGroup, isOpen, hideDialog, handleClick, onSave, changeGroupSelect } = props;

    return (
        <div className="dialogGrid dialogGrid_2cols">
            <span>Reference group</span>
            <div>
                <NativeSelect 
                    input={ <CustomInput /> } 
                    value={groupSelect} 
                    onChange={(e) => {
                        changeGroupSelect(e.target.value)
                    }} 
                >
                    { isEditMode && <option className="highlightedOption" value={newGroupName}>{newGroupName}</option> }
                    <option value="">none</option>
                    <option value="0">Reference group 1</option>
                    <option value="1">Reference group 2</option>
                </NativeSelect>
                {
                    !(isEditMode && groupSelect !== newGroupName) &&
                    <Button color="primary" className="textButton" onClick={handleClick}>
                        { isEditMode ? "Edit new group" : "+New" }
                    </Button>
                 }
            </div>
            <NewGroupDialog 
                isOpen={isOpen}
                hideDialog={hideDialog}
                onSave={onSave}
                isEditMode={isEditMode}
                currentGroup={newGroup}
                changeGroupSelect={changeGroupSelect}
                groupType="xref"
            />
        </div>
    );
}

export default withNewGroupControl(ReferencingSection);