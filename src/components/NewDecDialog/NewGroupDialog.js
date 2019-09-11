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

    onSaveButtonClick = () => {
        const { onSave, onClose } = this.props;
        if (this.state.nameEN.trim().length) {
            onSave(this.state.nameEN.trim());
            this.setState({
                nameEN: "",
                nameDE: "",
                nameRU: "",
                nameFR: "",
            });
            onClose();
        }
    }

    render() {
        const { isOpen, onClose } = this.props;
        const { onInputChange, onSaveButtonClick } = this;
        
        return (
            <Dialog
                className="paragraphDecorators-dialog"
                open={isOpen}
                onClose={onClose}
                fullWidth={true}
                maxWidth="md"
            >
                <DialogTitle>Create new group</DialogTitle>
                <DialogContent>
                    <div className="dialogGrid dialogGrid_2cols">
                        <span>Name EN</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameEN")} 
                        />
                        <span>Name DE</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameDE")} 
                        />                        
                        <span>Name RU</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameRU")} 
                        />                        
                        <span>Name FR</span>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            onChange={onInputChange("nameFR")} 
                        />                    
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="default">
                        Cancel
                    </Button>
                    <Button onClick={onSaveButtonClick} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
};

export default NewGroupDialog;