import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

import CustomInput from "../common/CustomInput";
import NewGroupDialog from "../common/NewGroupDialog";
import LabelWithAsterisk from "../common/LabelWithAsterisk";
import withNewGroupControl from "../hoc/withNewGroupControl";
import { getNamesSectionErrorState, focusInput } from "../helpers";
import { setValue, toggleValue, updateValidationError } from "../actions";

class NamesSection extends React.Component {
    decKeyInputRef = React.createRef();
    decNameEnInputRef = React.createRef();

    focusOnEmptyField = () => {
        if (!this.props.decKey) {
            focusInput(this.decKeyInputRef);
        } else if (!this.props.decNameEn) {
            focusInput(this.decNameEnInputRef);
        }
    };

    onGroupChange = group => (e, secondArg) => {
        const value = e ? e.target.value : secondArg;
        if (group.nameEn && value === group.nameEn) {
            this.props.changeGroupToCreate(null, group);
        } else {
            this.props.changeGroupToCreate(null, "");
        }
        this.props.changeGroup(e, secondArg);
    };

    componentDidMount() {
        if (this.props.validationError) {
            this.focusOnEmptyField();
        }
    }

    componentDidUpdate(prevprops) {
        if (this.props.validationError && !prevprops.validationError) {
            this.focusOnEmptyField();
        }
        if (this.props.validationError && !getNamesSectionErrorState(this.props.formState)) {
            this.props.updateValidationError({ namesSection: false });
        }
    }

    render() {
        const { 
            validationError,
            onSave,
            newGroup, 
            isOpen, 
            hideDialog, 
            handleClick, 
            decKey, changeDecKey,
            group,
            active, changeActive,
            decNameEn, changeDecNameEn,
            decNameDe, changeDecNameDe,
            decNameRu, changeDecNameRu,
            decNameFr, changeDecNameFr,
            decNameFrCa, changeDecNameFrCa,
            decNameEs, changeDecNameEs,
        } = this.props;

        const newGroupName = newGroup.nameEn;
        const isEditMode = !!newGroupName;

        return (
            <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
                <LabelWithAsterisk>Key</LabelWithAsterisk>
                <TextField 
                    value={decKey}
                    onChange={changeDecKey}
                    error={validationError && !decKey}
                    inputRef={this.decKeyInputRef}
                    variant="outlined" 
                    margin="dense" 
                />

                <span>Group</span>
                <div>
                    <NativeSelect 
                        value={group} 
                        onChange={this.onGroupChange(newGroup)}
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
                <div className="unlabeledCheckbox">
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
                    inputRef={this.decNameEnInputRef}
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

                <span>Name FR<br/><span className="smallText">France</span></span>
                <TextField 
                    value={decNameFr}
                    onChange={changeDecNameFr}
                    variant="outlined" 
                    margin="dense" 
                />

                <span>Name FR<br/><span className="smallText">Canada</span></span>
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
                    changeGroupSelect={this.onGroupChange}
                    groupType="decorators"
                />
            </div>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form, validationError }}) => {
    return { 
        validationError: validationError.namesSection,
        formState: form,
        decKey: form.decKey,
        group: form.group,
        active: form.active,
        decNameEn: form.decNameEn,
        decNameDe: form.decNameDe,
        decNameRu: form.decNameRu,
        decNameFr: form.decNameFr,
        decNameFrCa: form.decNameFrCa,
        decNameEs: form.decNameEs,
        savedNewGroup: form.groupToCreate,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValidationError: payload => dispatch(updateValidationError(payload)),
        changeDecKey: setValue(dispatch)("decKey"),
        changeGroup: setValue(dispatch)("group"),
        changeGroupToCreate: setValue(dispatch)("groupToCreate"),
        changeActive: toggleValue(dispatch)("active"),
        changeDecNameEn: setValue(dispatch)("decNameEn"),
        changeDecNameDe: setValue(dispatch)("decNameDe"),
        changeDecNameRu: setValue(dispatch)("decNameRu"),
        changeDecNameFr: setValue(dispatch)("decNameFr"),
        changeDecNameFrCa: setValue(dispatch)("decNameFrCa"),
        changeDecNameEs: setValue(dispatch)("decNameEs"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(withNewGroupControl(NamesSection)));