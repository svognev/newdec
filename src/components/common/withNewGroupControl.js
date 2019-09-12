import React from "react";

const withNewGroupControl = (View) => {
    return class extends React.Component {
        state = {
            isOpen: false,
            groupSelect: "",
            newGroup: {},
        }
        
        handleClick = () => {
            this.setState(({ isOpen }) => {
                return {
                    isOpen: !isOpen
                };
            })
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
            return <View 
                {...this.props} 
                {...this.state}
                {...{ handleClick, onSave, changeGroupSelect, hideDialog }}
                />
        }
    }
};

export default withNewGroupControl;