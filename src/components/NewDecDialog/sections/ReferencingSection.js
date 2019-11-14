import React from "react";
import { connect } from "react-redux";

import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

import Handlers from "../Handlers";
import CustomInput from "../common/CustomInput";
import NewGroupDialog from "../common/NewGroupDialog";
import withNewGroupControl from "../hoc/withNewGroupControl";
import { changeDecoratorForm } from "../actions";


class ReferencingSection extends React.Component {
    handlers = Handlers(this.props.updateForm);
    setStateProperty = this.handlers.setStateProperty;

    changeReferenceGroup = this.setStateProperty("referenceGroup");
    changeReferenceGroupToCreate = this.setStateProperty("referenceGroupToCreate");

    onXrefChange = xref => (e, secondArg) => {
        const value = e ? e.target.value : secondArg;
        if (xref.groupKey && xref.nameEn && value === xref.nameEn) {
            this.changeReferenceGroupToCreate(null, xref);
        } else {
            this.changeReferenceGroupToCreate(null, "");
        }
        this.changeReferenceGroup(e, secondArg);
    };

    render() {
        const { 
            newGroup, 
            isOpen, 
            hideDialog, 
            handleClick, 
            onSave,
            referenceGroup, 
        } = this.props;
        
        const newGroupName = newGroup.nameEn;
        const isEditMode = !!newGroupName;
    
        return (
            <div className="dialogGrid dialogGrid_2cols">
                <span>Reference group</span>
                <div>
                    <NativeSelect 
                        input={ <CustomInput /> } 
                        value={referenceGroup} 
                        onChange={this.onXrefChange(newGroup)} 
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
                    changeGroupSelect={this.onXrefChange}
                    groupType="xref"
                />
            </div>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        referenceGroup: form.referenceGroup,
        savedNewGroup: form.referenceGroupToCreate,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateForm: payload => dispatch(changeDecoratorForm(payload)),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(withNewGroupControl(ReferencingSection)));