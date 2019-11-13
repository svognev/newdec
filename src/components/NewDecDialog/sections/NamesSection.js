import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

import Handlers from "../Handlers";
import CustomInput from "../common/CustomInput";
import NewGroupDialog from "../common/NewGroupDialog";
import LabelWithAsterisk from "../common/LabelWithAsterisk";
import withNewGroupControl from "../hoc/withNewGroupControl";
import { getNamesSectionErrorState, focusInput } from "../helpers";
import { changeDecoratorForm, updateValidationError } from "../actions";

class NamesSection extends React.Component {
    handlers = Handlers(this.props.updateForm);
    setStateProperty = this.handlers.setStateProperty;
    toggleStateProperty = this.handlers.toggleStateProperty;

    changeDecKey = this.setStateProperty("decKey");
    changeGroup = this.setStateProperty("group");
    changeGroupToCreate = this.setStateProperty("groupToCreate");
    changeActive = this.toggleStateProperty("active");
    changeDecNameEn = this.setStateProperty("decNameEn");
    changeDecNameDe = this.setStateProperty("decNameDe");
    changeDecNameRu = this.setStateProperty("decNameRu");
    changeDecNameFr = this.setStateProperty("decNameFr");
    changeDecNameFrCa = this.setStateProperty("decNameFrCa");
    changeDecNameEs = this.setStateProperty("decNameEs");

    onGroupChange = group => (...args) => {
        const value = args[0] ? args[0].target.value : args[1];
        if (group.nameEn && value === group.nameEn) {
            this.changeGroupToCreate(null, group);
        } else {
            this.changeGroupToCreate(null, "");
        }
        this.changeGroup(...args);
    };

    decKeyInputRef = React.createRef();
    decNameEnInputRef = React.createRef();

    focusOnEmptyField = () => {
        if (!this.props.formState.decKey) {
            focusInput(this.decKeyInputRef);
        } else if (!this.props.formState.decNameEn) {
            focusInput(this.decNameEnInputRef);
        }
    }

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
            formState,
            validationError,
            onSave,
            newGroup, 
            isOpen, 
            hideDialog, 
            handleClick, 
        } = this.props;

        const {
            decKey,
            group,
            active,
            decNameEn,
            decNameDe,
            decNameRu,
            decNameFr,
            decNameFrCa,
            decNameEs,
        } = formState;

        const newGroupName = newGroup.nameEn;
        const isEditMode = !!newGroupName;

        return (
            <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
                <LabelWithAsterisk>Key</LabelWithAsterisk>
                <TextField 
                    value={decKey}
                    onChange={this.changeDecKey}
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
                <div>
                    <Checkbox
                        checked={active}
                        onChange={this.changeActive} 
                        color="primary" 
                    />
                </div>

                <LabelWithAsterisk>Name EN</LabelWithAsterisk>
                <TextField 
                    value={decNameEn}
                    onChange={this.changeDecNameEn}
                    error={validationError && !decNameEn}
                    inputRef={this.decNameEnInputRef}
                    variant="outlined" 
                    margin="dense" 
                />

                <span>Name DE</span>
                <TextField 
                    value={decNameDe}
                    onChange={this.changeDecNameDe}
                    variant="outlined" 
                    margin="dense" 
                />

                <span>Name RU</span>
                <TextField 
                    value={decNameRu}
                    onChange={this.changeDecNameRu}
                    variant="outlined" 
                    margin="dense" 
                />

                <span>Name FR<br/><span className="smallText">France</span></span>
                <TextField 
                    value={decNameFr}
                    onChange={this.changeDecNameFr}
                    variant="outlined" 
                    margin="dense" 
                />

                <span>Name FR<br/><span className="smallText">Canada</span></span>
                <TextField 
                    value={decNameFrCa}
                    onChange={this.changeDecNameFrCa}
                    variant="outlined" 
                    margin="dense" 
                />

                <span>Name ES</span>
                <TextField 
                    value={decNameEs}
                    onChange={this.changeDecNameEs}
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
        formState: form,
        savedNewGroup: form.groupToCreate,
        validationError: validationError.namesSection,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateForm: payload => dispatch(changeDecoratorForm(payload)),
        updateValidationError: payload => dispatch(updateValidationError(payload)),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(withNewGroupControl(NamesSection)));