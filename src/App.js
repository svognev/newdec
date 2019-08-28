import React from 'react';
import './App.css';

import NewDecDialog from './components/NewDecDialog';

class App extends React.Component {
  state = {
    isOpen: true,
  }

  handleClick = () => {
    this.setState(({ isOpen }) => {
      return {
        isOpen: !isOpen
      };
    })
  }

  render() {

    return (
      <div className="App">
        <button onClick={this.handleClick}>Open</button>
        <NewDecDialog 
          isOpen={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
        />
      </div>
    );
  }
}

export default App;
