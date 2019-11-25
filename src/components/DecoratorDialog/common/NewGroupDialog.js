import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import LabelWithAsterisk from "./LabelWithAsterisk";
import { focusInput } from "../helpers";

class NewGroupDialog extends React.Component {
    isXref = this.props.groupType === "xref";

    emptyGroup = {
        nameEn: "",
        nameDe: "",
        nameRu: "",
        nameFr: "",
        nameFrCa: "",
        nameEs: "",
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
        if ((!this.isXref && this.state.nameEn.trim().length) || (this.isXref && this.state.groupKey.trim().length)) {
            const groupToSave = {
                nameEn: this.state.nameEn.trim(),
                nameDe: this.state.nameDe.trim(),
                nameRu: this.state.nameRu.trim(),
                nameFr: this.state.nameFr.trim(),
                nameFrCa: this.state.nameFrCa.trim(),
                nameEs: this.state.nameEs.trim(),
            };
            if (this.isXref) {
                groupToSave.groupKey = this.state.groupKey.trim();
            }
            this.props.hideGroupDialogValidationError();
            this.props.saveGroup(null, (groupToSave.nameEn || groupToSave.groupKey), groupToSave);
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
                                    value={this.state.nameEn}
                                    onChange={onInputChange("nameEn")}
                                    variant="outlined" 
                                    margin="dense" 
                                />
                            </>
                        ) : (
                            <>
                                <LabelWithAsterisk>Name EN</LabelWithAsterisk>
                                <TextField
                                    value={this.state.nameEn}
                                    onChange={onInputChange("nameEn")}
                                    inputRef={this.requiredFieldRef}
                                    error={hasGroupDialogValidationError && !this.state.nameEn}
                                    variant="outlined" 
                                    margin="dense" 
                                />
                            </>
                        ) }
                        <span>Name DE</span>
                        <TextField
                            value={this.state.nameDe}
                            onChange={onInputChange("nameDe")} 
                            variant="outlined" 
                            margin="dense" 
                        />                        
                        <span>Name RU</span>
                        <TextField
                            value={this.state.nameRu}
                            onChange={onInputChange("nameRu")} 
                            variant="outlined" 
                            margin="dense"
                        />                        
                        <span>Name FR<br/><span className="smallText">France</span></span>
                        <TextField
                            value={this.state.nameFr}
                            onChange={onInputChange("nameFr")} 
                            variant="outlined" 
                            margin="dense" 
                        />
                        <span>Name FR<br/><span className="smallText">Canada</span></span>
                        <TextField 
                            value={this.state.nameFrCa}
                            onChange={onInputChange("nameFrCa")} 
                            variant="outlined" 
                            margin="dense"
                        />
                        <span>Name ES</span>
                        <TextField
                            value={this.state.nameEs}
                            onChange={onInputChange("nameEs")} 
                            variant="outlined" 
                            margin="dense"
                        />                  
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