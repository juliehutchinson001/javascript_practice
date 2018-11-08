import React, { Component } from 'react';
import './App.css';

class App extends Component {
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

  newListAtEnd(event) {
    if (event.key === "Enter") {
      this.setState(oldState => {
          return { listedItems: [this.state.addedItem, ...oldState.listedItems] };
      });
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
        newListAtEnd={event => this.newListAtEnd(event)}
        newInputOnChange={event => this.newInputOnChange(event)}
      />
    );
  }
}

const AppPresentation = ({ newListOnEnter, newInputOnChange, listArray, newListAtEnd }) => (
  <div>
      <input type="text" onKeyPress={ newListOnEnter } onChange={ newInputOnChange } />
      <input type="text" onKeyPress={ newListAtEnd } onChange={ newInputOnChange } />
      <ul>{listArray}</ul>
</div>
);

// New challenge:
// There are five lists INCLUDING a list called default:
// list1, list2, list3..., default
// An input will place item that you type into default list
// Inside of default list, EVERY item will have a way to place 
//        that item in a certain list 
// So if in default list, I have "item 1". I should be able to place it in any list I want
// Meaning "item 1" should go from "default" to "list I selected"
// By list I mean, a div, ul, ol, whatever you choose. It WILL be shown in the browser.
// Like I should be able to see empty list, or what items are in what list.
// Questions?


export default App;
