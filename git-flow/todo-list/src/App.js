import React, { Component } from "react";
import Options from "./Components/options";
import Lists from "./Components/lists";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input: {
            value: '',
        },
        lists: {
            general: [],
            list1: [],
            list2: [],
        },
    };
  }



  handleUpdateOfInputValue(event) {
    const addedItem = event.target.value;
    addedItem !== '' && this.setState({ addedItem });
  }

  addItemToList(itemToInsert, list) {
    const newList = {};
    newList[list] = [...this.state.lists[list], itemToInsert];

    this.setState(oldState => {
        const newState = Object.assign({}, oldState.lists, newList);

        return {
            input: { value: '' },
            lists: newState,
        }
    });
  }

  newTodoOnEnter(event) {
    const FIRST_ITEM = 0;
    const { lists } = this.state
    const addedItem = lists[FIRST_ITEM].listedItems.length === FIRST_ITEM
      ? this.updateListsStateArray('start')
      : this.updateListsStateArray('end');

    if ( event.key === "Enter" ) {
        this.setState({ lists: addedItem });
    }
  }

  handleDelete(event) {
    const { listedItems } = this.state;
    const itemToErase = parseInt(event.target.dataset.idelete, 10);
    const newList = listedItems.filter(
      (item, idx) => idx !== itemToErase
    );

    this.setState({ listedItems: newList });
  }

  wrapFirstItem(itemToGoUp) {
    const { listedItems } = this.state;
    const newList = listedItems.filter(
      (item, idx) => idx !== itemToGoUp
    );
    newList.push(listedItems[itemToGoUp]);
    this.setState({ listedItems: newList });
  }

  moveItemUp(itemToGoUp) {
    const { listedItems } = this.state;
    const newList = [...listedItems];
    const itemToJumpUp = newList[itemToGoUp];
    const itemToGoDown = newList[itemToGoUp - 1];

    newList[itemToGoUp] = itemToGoDown;
    newList[itemToGoUp - 1] = itemToJumpUp;

    this.setState({ listedItems: newList });
  }

  handleGoUp(event) {
    const FIRST_ITEM = 0;
    const itemToGoUp = parseInt(event.target.dataset.idup, 10);
    const isItemToGoUpFirstInList = itemToGoUp === FIRST_ITEM;

    if (isItemToGoUpFirstInList) {
      this.wrapFirstItem(itemToGoUp);
    } else {
      this.moveItemUp(itemToGoUp);
    }
  }

  newTodoAtBeginning(event) {
    const addedItem = this.updateListsStateArray('start');
    if (event.key === "Enter") {
      this.setState(oldState => ({
        listedItems: [addedItem, ...oldState.listedItems]
      }));
    }
  }


  render() {

    return (
      <AppPresentation
        listTodos={listTodos}
        newTodoOnEnter={event => this.newTodoOnEnter(event)}
        newTodoAtBeginning={event => this.newTodoAtBeginning(event)}
        handleUpdateOfInputValue={event => this.handleUpdateOfInputValue(event)}
      />
    );
  }
}

const AppPresentation = ({
  listTodos,
  newTodoOnEnter,
  handleUpdateOfInputValue,
  newTodoAtBeginning
}) => (
  <div className="app__inputs--multiple">
    <input
      className="app__input--primary"
      type="text"
      onKeyPress={newTodoOnEnter}
      onChange={handleUpdateOfInputValue}
      />
      <input
      className="app__input--secondary"
      type="text"
      onKeyPress={newTodoAtBeginning}
      onChange={handleUpdateOfInputValue}
    />
    <h1 className="app__title" >Hello</h1>
    <ul className="app__todos" >{listTodos}</ul>
    <Lists />
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
