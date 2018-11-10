import React, { Component } from "react";
import Options from "./Components/options";
import Lists from "./Components/lists";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: {
        'general': {
          listedItems: []
        },
        'list1': {
          listedItems: []
        },
        'list2': {
          listedItems: []
        }
      },
      addedItem: ""
    };

    this.getNewTodo = this.getNewTodo.bind(this);
    this.wrapFirstItem = this.wrapFirstItem.bind(this);
    this.moveItemUp = this.moveItemUp.bind(this);
    this.updateListsStateArray = this.updateListsStateArray.bind(this);
  }

  getNewTodo(item, index) {
    const { value } = this.state.lists[0];

    return (
      <li key={ index } data-id={ value }>
        { item }
        <button
          type="button"
          data-idup={index}
          onClick={event => this.handleGoUp(event)}
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
        <Options
          handleOptionChange={ event => this.handleOptionChange(event) }
          valueSelection={ value }
        />
      </li>
    );
  }

  newInputOnChange(event) {
    const addedItem = event.target.value;
    addedItem !== '' && this.setState({ addedItem });
  }

  updateListsStateArray(location) {
    const { addedItem, lists } = this.state;
    const copyOfLists = {...lists}; // {g: {0}, l1:{1}, l2:{2}}
    const FIRST_ITEM = 0;
    const COUNT_POSITIONS = 1;
    const newTodoAdded = { ...copyOfLists.general }; // general: {0-> listedItems:[...]}
    const LAST_ITEM = newTodoAdded.listedItems.length; // listedItems: [_, _, _].length

    if (location === 'end') {
      newTodoAdded.listedItems[LAST_ITEM - COUNT_POSITIONS] = addedItem; // {0-> true, [..., addedItem]}
    } else if (location === 'start') {
      newTodoAdded.listedItems[FIRST_ITEM] = addedItem; // {0-> true, [..., addedItem]}
    }
    copyOfLists.splice(FIRST_ITEM, COUNT_POSITIONS, newTodoAdded); // [{0-> true, [addedItem]}, {1}, {2}]
    return copyOfLists;
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

  handleOptionChange(event) {
    const newListCategory = event.target.value;
    this.setState(oldState => {

    });
  }

  render() {
    const FIRST_ITEM = 0;
    const { lists } = this.state;
    const listTodos = lists[FIRST_ITEM].listedItems.map((item, i) =>
      this.getNewTodo(item, i)
    );

    return (
      <AppPresentation
        listTodos={listTodos}
        newTodoOnEnter={event => this.newTodoOnEnter(event)}
        newTodoAtBeginning={event => this.newTodoAtBeginning(event)}
        newInputOnChange={event => this.newInputOnChange(event)}
      />
    );
  }
}

const AppPresentation = ({
  listTodos,
  newTodoOnEnter,
  newInputOnChange,
  newTodoAtBeginning
}) => (
  <div className="app__inputs--multiple">
    <input
      className="app__input--primary"
      type="text"
      onKeyPress={newTodoOnEnter}
      onChange={newInputOnChange}
      />
      <input
      className="app__input--secondary"
      type="text"
      onKeyPress={newTodoAtBeginning}
      onChange={newInputOnChange}
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
