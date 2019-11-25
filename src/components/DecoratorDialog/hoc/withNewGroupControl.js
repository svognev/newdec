import React from "react";

const withNewGroupControl = (ViewComponent) => {
    return class extends React.Component {
        state = {
            isGroupDialogOpen: false,
            hasGroupDialogValidationError: false,
        };
        
        openGroupDialog = () => {
            this.setState({ isGroupDialogOpen: true });
        };

        closeGroupDialog = () => {
            this.setState({ isGroupDialogOpen: false });
        };

        showGroupDialogValidationError = () => {
            this.setState({ hasGroupDialogValidationError: true });
        };

        hideGroupDialogValidationError = () => {
            this.setState({ hasGroupDialogValidationError: false });
        };

        render() {
            const { 
                openGroupDialog, 
                closeGroupDialog, 
                showGroupDialogValidationError, 
                hideGroupDialogValidationError 
            } = this; 

            return ( 
                <ViewComponent 
                    {...this.props} 
                    {...this.state} 
                    {...{ openGroupDialog, closeGroupDialog, showGroupDialogValidationError, hideGroupDialogValidationError }} 
                /> 
            );
        }
    }
};

export default withNewGroupControl;