import React from "react";

const withNewGroupControl = (ViewComponent) => {
    return class extends React.Component {
        state = {
            isOpen: false,
            groupSelect: "",
            newGroup: this.props.savedNewGroup || "",
        }
        
        handleClick = () => {
            this.setState(({ isOpen }) => {
                return {
                    isOpen: !isOpen
                };
            });
        }
    
        onSave = newGroup => {
            this.setState({ newGroup });
        }
    
        changeGroupSelect = (newValue) => {
            this.setState({
                groupSelect: newValue,
            });
        }

        hideDialog = () => {
            this.setState({ isOpen: false });
        }
        
        render() {
            const { handleClick, onSave, changeGroupSelect, hideDialog } = this; 
            return ( <ViewComponent {...this.props} {...this.state} {...{ handleClick, onSave, changeGroupSelect, hideDialog }} /> );
        }
    }
};

export default withNewGroupControl;