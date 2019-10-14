import React from "react";
import { connect } from "react-redux";

import NewDecDialog from "./components/NewDecDialog";
import { clearDecoratorForm } from "./components/NewDecDialog/actions";

import "./App.css";

class App extends React.Component {
    state = {
        isOpen: true,
    };

    handleClick = () => {
        this.setState(({ isOpen }) => {
            return {
                isOpen: !isOpen
            };
        });
    };

    onClose = () => {
      this.setState({ isOpen: false });
      this.props.clearForm();
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>Open</button>
                <NewDecDialog 
                    isOpen={this.state.isOpen}
                    onClose={this.onClose}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearForm: () => dispatch(clearDecoratorForm()),
    };
};

export default connect(null, mapDispatchToProps)(App);
