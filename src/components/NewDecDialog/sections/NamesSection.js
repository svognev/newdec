import React from "react";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

import CustomInput from "../common/CustomInput";
import NewGroupDialog from "../common/NewGroupDialog";
import LabelWithAsterisk from "../common/LabelWithAsterisk";
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
        decNameEn, changeDecNameEn,
        decNameDe, changeDecNameDe,
        decNameRu, changeDecNameRu,
        decNameFr, changeDecNameFr,
        decNameFrCa, changeDecNameFrCa,
        decNameEs, changeDecNameEs,
        changeGroupToCreate,
        validationError,
    } = props;
    
    const newGroupName = newGroup.nameEn;
    const isEditMode = !!newGroupName;

    const onGroupChange = group => (...args) => {
        const value = args[0] ? args[0].target.value : args[1];
        if (group.nameEn && value === group.nameEn) {
            changeGroupToCreate(null, group);
        } else {
            changeGroupToCreate(null, "");
        }
        changeGroup(...args);
    };

    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
            <LabelWithAsterisk>Key</LabelWithAsterisk>
            <TextField 
                value={decKey}
                onChange={changeDecKey}
                error={validationError && !decKey}
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

            <LabelWithAsterisk>Name EN</LabelWithAsterisk>
            <TextField 
                value={decNameEn}
                onChange={changeDecNameEn}
                error={validationError && !decNameEn}
                variant="outlined" 
                margin="dense" 
            />

            <span>Name DE</span>
            <TextField 
                value={decNameDe}
                onChange={changeDecNameDe}
                variant="outlined" 
                margin="dense" 
            />

            <span>Name RU</span>
            <TextField 
                value={decNameRu}
                onChange={changeDecNameRu}
                variant="outlined" 
                margin="dense" 
            />

            <span>Name FR<br/><span className="span_smallText">France</span></span>
            <TextField 
                value={decNameFr}
                onChange={changeDecNameFr}
                variant="outlined" 
                margin="dense" 
            />

            <span>Name FR<br/><span className="span_smallText">Canada</span></span>
            <TextField 
                value={decNameFrCa}
                onChange={changeDecNameFrCa}
                variant="outlined" 
                margin="dense" 
            />

            <span>Name ES</span>
            <TextField 
                value={decNameEs}
                onChange={changeDecNameEs}
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