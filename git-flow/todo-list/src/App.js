import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedItem: '',
      listedItems: [],
    };

    this.getNewItem = this.getNewItem.bind(this);
    this.wrapFirstItem = this.wrapFirstItem.bind(this);
    this.moveItemUp = this.moveItemUp.bind(this);
  }

  newInputOnChange(event) {
    this.setState({ addedItem: event.target.value });
  }

  newListOnEnter(event) {
    if (event.key === "Enter") {
      this.setState(oldState => {
          return { listedItems: [...oldState.listedItems, this.state.addedItem] };
      });
    }
  }

  handleDelete(event) {
    const itemToErase = parseInt(event.target.dataset.idelete, 10);
    const newList = this.state.listedItems.filter((item, idx) => idx !== itemToErase);
    
    this.setState({listedItems: newList})
  }

  wrapFirstItem(itemToGoUp) {
    const newList = this.state.listedItems.filter((item, idx) => idx !== itemToGoUp);
    newList.push(this.state.listedItems[itemToGoUp]);
  }
  
  moveItemUp(itemToGoUp) {
    const newList = [...this.state.listedItems];
    const itemToJumpUp = newList[itemToGoUp];
    const itemToGoDown = newList[itemToGoUp - 1];

    newList[itemToGoUp] = itemToGoDown;
    newList[itemToGoUp - 1] = itemToJumpUp;
  }

  handleGoUp(event) {
    const FIRST_ITEM = 0;
    const isItemToGoUpFirstInList = itemToGoUp === FIRST_ITEM;
    const itemToGoUp = parseInt(event.target.dataset.idup, 10);

    if (isItemToGoUpFirstInList) {			
      wrapFirstItem(itemToGoUp);
    } else {
      moveItemUp(itemToGoUp);
      this.setState({listedItems: newList});
    }
}

  getNewItem(item, index) {

      return (
          <li key={ index }>
              { item }
              <button
                  type="button"
                  data-idup={ index }
                  onClick={ event => this.handleGoUp(event) }
              >
                  Up
              </button>
              <button
                  type="button"
                  data-idelete={ index }
                  onClick={ event => this.handleDelete(event) }
              >
                  Delete
              </button>
    </li>
      );
  }

  render() {
    const listArray = this.state.listedItems.map((item, i) => this.getNewItem(item, i));
  
    return (
      <AppPresentation
        listArray={ listArray }
        newListOnEnter={event => this.newListOnEnter(event)}
        newInputOnChange={event => this.newInputOnChange(event)}
      />
    );
  }
}

const AppPresentation = ({ newListOnEnter, newInputOnChange, listArray, newListAtEnd }) => (
  <div>
      <input type="text" onKeyPress={ newListOnEnter } onChange={ newInputOnChange } />
      <ul>{listArray}</ul>
</div>
);



export default App;
