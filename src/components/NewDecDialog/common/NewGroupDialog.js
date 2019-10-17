import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class NewGroupDialog extends React.Component {

    state = this.props.currentGroup 
          ? this.props.currentGroup 
          : this.props.groupType !== "xref" 
          ? { nameEn: "", nameDe: "", nameRu: "", nameFr: "", nameFrCa: "", nameEs: "", }
          : { nameEn: "", nameDe: "", nameRu: "", nameFr: "", nameFrCa: "", nameEs: "", groupKey: "", };
    
    onInputChange = inputName => e => {
        this.setState({ 
            [inputName]: e.target.value 
        });
    };

    onClose = () => {
        const {currentGroup, hideDialog } = this.props;
        this.setState({ ...currentGroup });
        hideDialog()
    };

    onGroupSave = () => {
        const { onSave, changeGroupSelect, hideDialog, groupType } = this.props;
        if (this.state.nameEn.trim().length && (groupType !== "xref" || this.state.groupKey.trim().length)) {
            const groupToSave = {
                nameEn: this.state.nameEn.trim(),
                nameDe: this.state.nameDe.trim(),
                nameRu: this.state.nameRu.trim(),
                nameFr: this.state.nameFr.trim(),
                nameFrCa: this.state.nameFrCa.trim(),
                nameEs: this.state.nameEs.trim(),
            };
            if (groupType === "xref") {
                groupToSave.groupKey = this.state.groupKey.trim();
            }
            onSave(groupToSave);
            changeGroupSelect(groupToSave)(null, this.state.nameEn.trim());
            hideDialog();
        }
    };

    render() {
        const { isOpen, isEditMode } = this.props;
        const { onInputChange, onGroupSave, onClose } = this;
        const titleText = `${isEditMode ? "Edit" : "Create"} new ${this.props.groupType === "xref" ? "reference " : ""}group`
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
                        {
                            this.props.groupType === "xref" 
                            &&
                            <>
                                <span>Group Key</span>
                                <TextField 
                                    variant="outlined" 
                                    margin="dense" 
                                    onChange={onInputChange("groupKey")}
                                    value={this.state.groupKey}
                                />
                            </>
                        }
                        <span>Name EN</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameEn")}
                            value={this.state.nameEn}
                        />
                        <span>Name DE</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameDe")} 
                            value={this.state.nameDe}
                        />                        
                        <span>Name RU</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameRu")} 
                            value={this.state.nameRu}
                        />                        
                        <span>Name FR<br/><span className="span_smallText">France</span></span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameFr")} 
                            value={this.state.nameFr}
                        />
                        <span>Name FR<br/><span className="span_smallText">Canada</span></span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameFrCa")} 
                            value={this.state.nameFrCa}
                        />
                        <span>Name ES</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameEs")} 
                            value={this.state.nameEs}
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
};

export default NewGroupDialog;