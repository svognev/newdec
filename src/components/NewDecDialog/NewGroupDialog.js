import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import "./style.css";

class NewGroupDialog extends React.Component {

    state = {
        nameEN: "",
        nameDE: "",
        nameRU: "",
        nameFR: "",
    };
    
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

    onSave = () => {
        const { onSave, changeGroupSelect, hideDialog } = this.props;
        if (this.state.nameEN.trim().length) {
            onSave(
                {
                    nameEN: this.state.nameEN.trim(),
                    nameDE: this.state.nameDE.trim(),
                    nameRU: this.state.nameRU.trim(),
                    nameFR: this.state.nameFR.trim(),
                });
            changeGroupSelect(this.state.nameEN.trim());
            hideDialog();
        }
    };

    render() {
        const { isOpen, isEditMode } = this.props;
        const { onInputChange, onSave, onClose } = this;
        const titleText = `${isEditMode ? "Edit" : "Create"} new group`
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
                        <span>Name EN</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameEN")}
                            value={this.state.nameEN}
                        />
                        <span>Name DE</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameDE")} 
                            value={this.state.nameDE}
                        />                        
                        <span>Name RU</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameRU")} 
                            value={this.state.nameRU}
                        />                        
                        <span>Name FR</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameFR")} 
                            value={this.state.nameFR}
                        />                    
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="default">
                        Cancel
                    </Button>
                    <Button onClick={onSave} color="primary">
                        {buttonText}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
};

export default NewGroupDialog;