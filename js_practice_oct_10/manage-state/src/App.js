import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state={
      input:'',
      secret: 'Julie'
    }
  }

  handleChange(event) {

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>Enter a new entry: <input value={(event) => this.handleChange(event)}/></label>
        </header>
      </div>
    );
  }
}

export default App;
