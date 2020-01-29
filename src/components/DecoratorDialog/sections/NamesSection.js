import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CustomInput from "../common/CustomInput";
import NewGroupDialog from "../common/NewGroupDialog";
import LabelWithAsterisk from "../common/LabelWithAsterisk";
import withNewGroupControl from "../hoc/withNewGroupControl";
import { hasErrorInSection, focusOnEmptyField } from "../helpers";
import { setValue, toggleValue, updateValidationError } from "../actions";
import { MAIN_LANG_KEY, ADDITIONAL_LANGS, sectionTypesMap } from "../constants";

class NamesSection extends React.Component {
    decKeyInputRef = React.createRef();
    decNameEnInputRef = React.createRef();
    inputRefs = [this.decKeyInputRef, this.decNameEnInputRef];

    onGroupChange = (e, groupName, group) => {
        if (group) {
            this.props.changeGroupToCreate(null, group);
        }
        this.props.changeGroup(e, groupName);
    };

    onNameChange = langKey => e => {
        const newValue = {
            ...this.props.name,
            [langKey]: e.target.value,
        };
        this.props.changeName(null, newValue);
    };

    onSectionTypesChange = typeName => e => {
        const newValue = {
            ...this.props.sectionTypes,
            [typeName]: e.target.checked,
        };
        this.props.changeSectionTypes(null, newValue);
    };

    componentDidMount() {
        if (this.props.validationErrorInSection) {
            focusOnEmptyField(this.inputRefs);
        }
    }

    componentDidUpdate(prevprops) {
        if (this.props.validationErrorInSection && !prevprops.validationErrorInSection) {
            focusOnEmptyField(this.inputRefs);
        }
        if (this.props.validationErrorInSection && !hasErrorInSection(this.inputRefs)) {
            this.props.updateValidationError({ namesSection: false });
        }
    }

    render() {
        const { 
            groupToCreate, 
            isGroupDialogOpen,
            hasGroupDialogValidationError,
            openGroupDialog, 
            closeGroupDialog, 
            showGroupDialogValidationError, 
            hideGroupDialogValidationError,
            validationErrorInSection,
            decKey, changeDecKey,
            sectionTypes,
            group,
            active, changeActive,
            name,
        } = this.props;

        const newGroupName = groupToCreate[MAIN_LANG_KEY];
        const isEditMode = !!newGroupName;

        return (
            <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
                <LabelWithAsterisk>Key</LabelWithAsterisk>
                <TextField 
                    value={decKey}
                    onChange={changeDecKey}
                    error={validationErrorInSection && !decKey}
                    inputRef={this.decKeyInputRef}
                    variant="outlined" 
                    margin="dense" 
                />

                <span>Section types</span>
                <div className="checkBoxesSet">
                    { sectionTypesMap.map(({ key, value }) => (
                        <div className="labeledCheckbox">
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label={value}
                                labelPlacement="end"
                                checked={sectionTypes[key]}
                                onChange={this.onSectionTypesChange(key)}
                            />
                        </div>
                    ))}
                </div>

                <span>Group</span>
                <div>
                    <NativeSelect 
                        value={group} 
                        onChange={this.onGroupChange}
                        input={ <CustomInput /> }  
                    >
                        <option value="">...</option>
                        { isEditMode && <option className="highlightedOption" value={newGroupName}>{newGroupName}</option> }
                        <option value="0">Text</option>
                        <option value="1">Heading</option>
                        <option value="2">Heading Heading Heading Heading</option>
                    </NativeSelect>
                    { !(isEditMode && group !== newGroupName) && (
                        <Button color="primary" className="textButton" onClick={openGroupDialog}>
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
                    value={name[MAIN_LANG_KEY]}
                    onChange={this.onNameChange(MAIN_LANG_KEY)}
                    error={validationErrorInSection && !name[MAIN_LANG_KEY]}
                    inputRef={this.decNameEnInputRef}
                    variant="outlined" 
                    margin="dense" 
                />

                { ADDITIONAL_LANGS.map(({ langKey, langName, regionFullName }) => (
                  <React.Fragment key={langKey}>
                    <span>Name {langName}{regionFullName && <span className="smallText"><br/>{regionFullName}</span>}</span>
                    <TextField 
                        value={name[langKey]}
                        onChange={this.onNameChange(langKey)}
                        variant="outlined" 
                        margin="dense" 
                    />
                  </React.Fragment>  
                )) }

                <NewGroupDialog 
                    isOpen={isGroupDialogOpen}
                    saveGroup={this.onGroupChange}
                    savedGroup={groupToCreate}
                    groupType="decorators"
                    { ...{ 
                        isGroupDialogOpen,
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

const mapStateToProps = ({ decoratorDialog: { form, validationError }}) => {
    return { 
        validationErrorInSection: validationError.namesSection,
        formState: form,
        decKey: form.decKey,
        group: form.group,
        active: form.active,
        name: form.name,
        groupToCreate: form.groupToCreate,
        sectionTypes: form.sectionTypes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateValidationError: payload => dispatch(updateValidationError(payload)),
        changeDecKey: setValue(dispatch)("decKey"),
        changeGroup: setValue(dispatch)("group"),
        changeGroupToCreate: setValue(dispatch)("groupToCreate"),
        changeActive: toggleValue(dispatch)("active"),
        changeName: setValue(dispatch)("name"),
        changeSectionTypes: setValue(dispatch)("sectionTypes"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(withNewGroupControl(NamesSection)));