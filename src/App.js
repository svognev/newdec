import React from "react";
import NewDecDialog from "./components/NewDecDialog";

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

    closeDialog = () => {
      this.setState({ isOpen: false });
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>Open</button>
                <NewDecDialog 
                    isOpen={this.state.isOpen}
                    closeDialog={this.closeDialog}
                />
            </div>
        );
    }
}

export default App;
