import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state={
      disabled: false,
      inputVal: '',
    }
  }

  handleValueChange(event) {

    const isSecretWord = event.target.value === 'Julie';
    
    if (isSecretWord) {
      this.setState({ disabled: true, inputVal: 'Bingo!!!' })
      
    } else {
      this.setState({ disabled: false, inputVal: event.target.value })
      
    }
  }
  
  render() {
    return (
      <div className="App">
          <label>Enter a new entry: 
            <input 
              onChange={ (event) => this.handleValueChange(event) }
              value={ this.state.inputVal }
              placeholder="Guess the secret word"
              disabled={ this.state.disabled ? "disabled" : "" }
              style={{ marginLeft: '20px' }}
            />
          </label>
      </div>
    );
  }
}

export default App;
