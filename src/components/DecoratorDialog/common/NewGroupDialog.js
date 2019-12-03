import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import LabelWithAsterisk from "./LabelWithAsterisk";
import { focusInput } from "../helpers";
import { LANGS, MAIN_LANG_KEY, ADDITIONAL_LANGS } from "../constants";

class NewGroupDialog extends React.PureComponent {
    isXref = this.props.groupType === "xref";

    emptyGroup = {
        ...LANGS.reduce((acc, { langKey }) => ({ ...acc, [langKey]: "" }), {}),
        ...this.isXref && { groupKey: "" },
    };

    getInitialState = () => ({ ...this.emptyGroup, ...this.props.savedGroup });

    state = this.getInitialState();

    requiredFieldRef = React.createRef();

    onInputChange = inputName => e => {
        this.setState({ [inputName]: e.target.value });
    };

    onClose = () => {
        this.setState(this.getInitialState());
        this.props.hideGroupDialogValidationError();
        this.props.closeGroupDialog();
    };

    onGroupSave = () => {
        if ((!this.isXref && this.state[MAIN_LANG_KEY].trim().length) || (this.isXref && this.state.groupKey.trim().length)) {
            const groupToSave = {
                ...LANGS.reduce((acc, { langKey }) => ({ ...acc, [langKey]: this.state[langKey].trim() }), {}),
            };
            if (this.isXref) {
                groupToSave.groupKey = this.state.groupKey.trim();
            }
            this.props.hideGroupDialogValidationError();
            this.props.saveGroup(null, (groupToSave[MAIN_LANG_KEY] || groupToSave.groupKey), groupToSave);
            this.props.closeGroupDialog();
        } else {
            this.props.showGroupDialogValidationError();
            focusInput(this.requiredFieldRef);
        }
    };

    render() {
        const { isOpen, isEditMode, hasGroupDialogValidationError } = this.props;
        const { onInputChange, onGroupSave, onClose, isXref } = this;
        const titleText = `${isEditMode ? "Edit" : "Create"} new ${isXref ? "reference " : ""}group`
        const buttonText = isEditMode ? "Save" : "Create";

        return (
            <Dialog
                className="paragraphDecorators-dialog"
                open={isOpen}
                onClose={onClose}
                fullWidth={true}
                maxWidth="md"
            >
                <DialogTitle>{titleText}</DialogTitle>
                <DialogContent>
                    <div className="dialogGrid dialogGrid_2cols">
                        { isXref && (
                            <>
                                <LabelWithAsterisk>Group Key</LabelWithAsterisk>
                                <TextField
                                    value={this.state.groupKey}
                                    onChange={onInputChange("groupKey")}
                                    inputRef={this.requiredFieldRef}
                                    error={hasGroupDialogValidationError && !this.state.groupKey}
                                    variant="outlined" 
                                    margin="dense" 
                                />
                            </>
                        ) }
                        { isXref ? (
                            <>
                                <span>Name EN</span>
                                <TextField
                                    value={this.state[MAIN_LANG_KEY]}
                                    onChange={onInputChange(MAIN_LANG_KEY)}
                                    variant="outlined" 
                                    margin="dense" 
                                />
                            </>
                        ) : (
                            <>
                                <LabelWithAsterisk>Name EN</LabelWithAsterisk>
                                <TextField
                                    value={this.state[MAIN_LANG_KEY]}
                                    onChange={onInputChange(MAIN_LANG_KEY)}
                                    inputRef={this.requiredFieldRef}
                                    error={hasGroupDialogValidationError && !this.state[MAIN_LANG_KEY]}
                                    variant="outlined" 
                                    margin="dense" 
                                />
                            </>
                        ) }
                        { ADDITIONAL_LANGS.map(({ langKey, langName, regionFullName }) => (
                            <React.Fragment key={langKey}>
                                <span>Name {langName}{regionFullName && <span className="smallText"><br/>{regionFullName}</span>}</span>
                                <TextField
                                    value={this.state[langKey]}
                                    onChange={onInputChange(langKey)} 
                                    variant="outlined" 
                                    margin="dense" 
                                />
                            </React.Fragment>
                        )) }                 
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="default">
                        Cancel
                    </Button>
                    <Button onClick={onGroupSave} color="primary">
                        {buttonText}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default NewGroupDialog;