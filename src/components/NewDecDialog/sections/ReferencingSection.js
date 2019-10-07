import React from "react";

import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

import CustomInput from "components/common/CustomInput";
import NewGroupDialog from "components/common/NewGroupDialog";
import withNewGroupControl from "components/common/withNewGroupControl";

const ReferencingSection = (props) => {
    const { 
        newGroup, 
        isOpen, 
        hideDialog, 
        handleClick, 
        onSave,
        referenceGroup, changeReferenceGroup,
        changeXrefToCreate,
    } = props;
    
    const newGroupName = newGroup.nameEN;
    const isEditMode = !!newGroupName;

    const onXrefChange = xref => (...args) => {
        const value = args[0] ? args[0].target.value : args[1];
        if (xref.groupKey && xref.nameEN && value === xref.nameEN) {
            changeXrefToCreate(null, xref);
        } else {
            changeXrefToCreate(null, "");
        }
        changeReferenceGroup(...args);
    };

    return (
        <div className="dialogGrid dialogGrid_2cols">
            <span>Reference group</span>
            <div>
                <NativeSelect 
                    input={ <CustomInput /> } 
                    value={referenceGroup} 
                    onChange={onXrefChange(newGroup)} 
                >
                    { isEditMode && <option className="highlightedOption" value={newGroupName}>{newGroupName}</option> }
                    <option value="">none</option>
                    <option value="0">Reference group 1</option>
                    <option value="1">Reference group 2</option>
                </NativeSelect>
                {
                    !(isEditMode && referenceGroup !== newGroupName) &&
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
                changeGroupSelect={onXrefChange}
                groupType="xref"
            />
        </div>
    );
}

export default withNewGroupControl(ReferencingSection);