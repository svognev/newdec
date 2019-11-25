import React from "react";
import { connect } from "react-redux";

import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

import CustomInput from "../common/CustomInput";
import NewGroupDialog from "../common/NewGroupDialog";
import withNewGroupControl from "../hoc/withNewGroupControl";
import { setValue } from "../actions";

class ReferencingSection extends React.Component {
    onXrefChange = (e, xrefName, xref) => {
        if (xref) {
            this.props.changeReferenceGroupToCreate(null, xref);
        }
        this.props.changeReferenceGroup(e, xrefName);
    };

    render() {
        const { 
            referenceGroupToCreate, 
            isGroupDialogOpen,
            hasGroupDialogValidationError,  
            openGroupDialog, 
            closeGroupDialog, 
            showGroupDialogValidationError, 
            hideGroupDialogValidationError,
            referenceGroup,
        } = this.props;
        
        const newGroupName = referenceGroupToCreate.nameEn || referenceGroupToCreate.groupKey;
        const isEditMode = !!newGroupName;
    
        return (
            <div className="dialogGrid dialogGrid_2cols">
                <span>Reference group</span>
                <div>
                    <NativeSelect 
                        input={ <CustomInput /> } 
                        value={referenceGroup} 
                        onChange={this.onXrefChange} 
                    >
                        { isEditMode && <option className="highlightedOption" value={newGroupName}>{newGroupName}</option> }
                        <option value="">none</option>
                        <option value="0">Reference group 1</option>
                        <option value="1">Reference group 2</option>
                    </NativeSelect>
                    {
                        !(isEditMode && referenceGroup !== newGroupName) &&
                        <Button color="primary" className="textButton" onClick={openGroupDialog}>
                            { isEditMode ? "Edit new group" : "+New" }
                        </Button>
                     }
                </div>
                <NewGroupDialog
                    isOpen={isGroupDialogOpen}
                    saveGroup={this.onXrefChange}
                    savedGroup={referenceGroupToCreate}
                    groupType="xref" 
                    { ...{ 
                        isEditMode,
                        hasGroupDialogValidationError,
                        closeGroupDialog, 
                        showGroupDialogValidationError, 
                        hideGroupDialogValidationError, 
                    } }
                />
            </div>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        referenceGroup: form.referenceGroup,
        referenceGroupToCreate: form.referenceGroupToCreate,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeReferenceGroup: setValue(dispatch)("referenceGroup"),
        changeReferenceGroupToCreate: setValue(dispatch)("referenceGroupToCreate"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(withNewGroupControl(ReferencingSection)));