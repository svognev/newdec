import React from "react";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

import CustomInput from "../common/CustomInput";
import NewGroupDialog from "../common/NewGroupDialog";
import withNewGroupControl from "../hoc/withNewGroupControl";

const NamesSection = (props) => {
    const { 
        newGroup, 
        isOpen, 
        hideDialog, 
        handleClick, 
        onSave, 
        decKey, changeDecKey,
        group, changeGroup,
        active, changeActive,
        styleNameEn, changeStyleNameEn,
        styleNameDe, changeStyleNameDe,
        styleNameRu, changeStyleNameRu,
        styleNameFr, changeStyleNameFr,
        changeGroupToCreate,
    } = props;
    
    const newGroupName = newGroup.nameEN;
    const isEditMode = !!newGroupName;

    const onGroupChange = group => (...args) => {
        const value = args[0] ? args[0].target.value : args[1];
        if (group.nameEN && value === group.nameEN) {
            changeGroupToCreate(null, group);
        } else {
            changeGroupToCreate(null, "");
        }
        changeGroup(...args);
    };

    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
            <span>Key</span>
            <TextField 
                value={decKey}
                onChange={changeDecKey}
                variant="outlined" 
                margin="dense" 
            />

            <span>Group</span>
            <div>
                <NativeSelect 
                    value={group} 
                    onChange={onGroupChange(newGroup)}
                    input={ <CustomInput /> }  
                >
                    <option value="">...</option>
                    { isEditMode && <option className="highlightedOption" value={newGroupName}>{newGroupName}</option> }
                    <option value="0">Text</option>
                    <option value="1">Heading</option>
                    <option value="2">Heading Heading Heading Heading</option>
                </NativeSelect>
                { !(isEditMode && group !== newGroupName) && (
                    <Button color="primary" className="textButton" onClick={handleClick}>
                        { isEditMode ? "Edit new group" : "+New" }
                    </Button>
                ) }
            </div>

            <span>Active</span>
            <div>
                <Checkbox
                    checked={active}
                    onChange={changeActive} 
                    color="primary" 
                />
            </div>

            <span>Style name (English)</span>
            <TextField 
                value={styleNameEn}
                onChange={changeStyleNameEn}
                variant="outlined" 
                margin="dense" 
            />

            <span>Style name (German)</span>
            <TextField 
                value={styleNameDe}
                onChange={changeStyleNameDe}
                variant="outlined" 
                margin="dense" 
            />

            <span>Style name (Russian)</span>
            <TextField 
                value={styleNameRu}
                onChange={changeStyleNameRu}
                variant="outlined" 
                margin="dense" 
            />

            <span>Style name (French)</span>
            <TextField 
                value={styleNameFr}
                onChange={changeStyleNameFr}
                variant="outlined" 
                margin="dense" 
            />

            <NewGroupDialog 
                isOpen={isOpen}
                hideDialog={hideDialog}
                onSave={onSave}
                isEditMode={isEditMode}
                currentGroup={newGroup}
                changeGroupSelect={onGroupChange}
                groupType="decorators"
            />
        </div>
    );
}

export default withNewGroupControl(NamesSection);