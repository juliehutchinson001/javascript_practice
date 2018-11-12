import React, { Component } from "react";
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

  updateInputValue(event) {
      this.setState({ input: { value: event.target.value } });
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

  render() {
      return (
          <Fragment>
              <input
                  onInput={ event => this.updateInputValue(event) }
                  value={ this.state.input.value }
              />
              <button
                  onClick={ () => this.addItemToList(this.state.input.value, 'general') }
              >
                  Enter Item
              </button>
              <ListsContainer
                  lists={ this.state.lists }
                  addItemToList={ (item, list) => this.addItemToList(item, list) }
              />
          </Fragment>
      );
  }
}

const ListsContainer = ({ lists, addItemToList }) => {

  const buckets = Object.keys(lists).map((listName, i) => (
      <Fragment>
          <h1 key={ i }>{ listName }</h1>
          <ul key={ i }>
              <Bucket
                  items={ lists[listName] }
                  addItemToList={ addItemToList }
              />
          </ul>
      </Fragment>
  ));

  return buckets;
};

const Bucket = ({ items, addItemToList }) => {

  const itemsLis = items.map((item, i) => (
      <li key={ i }>
          <span>{ item }</span>
          <select onChange={ event => addItemToList(item, event.target.value) } >
              <option value='general'>General</option>
              <option value='list1'>List1</option>
              <option value='list2'>List2</option>
          </select>
      </li>
  ));

  return itemsLis;
};

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
