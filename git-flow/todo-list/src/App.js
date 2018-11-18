import React, { Component } from "react";
import ListsContainer from './Components/lists';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
                value: '',
            },
            lists: {
                General: [],
                'In-Progress': [],
                Urgent: [],
                Pasts: [],
                'Non-Urgent': [],
            }
        };

        this.addItemToList = this.addItemToList.bind(this);
    }

    updateInputValue(event) {
        this.setState({ input: { value: event.target.value } });
    }

    addItemToList(itemToInsert, newLocation, currentLocation=undefined) {
        this.setState(oldState => {
            const newList = {};
            const isItemBeingMoved = currentLocation !== undefined;

            if (isItemBeingMoved) {
                // Remove item from current location
                const currentList = oldState.lists[currentLocation];
                newList[currentLocation] = currentList.filter(item => item !== itemToInsert);
            }

            newList[newLocation] = [...oldState.lists[newLocation], itemToInsert];

            const newState = Object.assign({}, oldState.lists, newList);
            // const newState = {...oldState.lists, ...newList};

            return {
                input: { value: '' },
                lists: newState,
            };
        });
    }

    createItem(event) {
        //onKeyPress tracks the 'enter' key to create a new item
        const itemToInsert = this.state.input.value;
        const itemIsNotEmpty = itemToInsert !== '';

        const enterKeyWasPressed = event.key === 'Enter' || event.keyCode === 13;

        if (itemIsNotEmpty && enterKeyWasPressed) {
            this.addItemToList(itemToInsert, 'General');
        }
    }

    render() {
        return (
            <main className="app" >
                <input
                    className="app__input"
                    onKeyPress={ event => this.createItem(event) }
                    onChange={ event => this.updateInputValue(event) }
                    placeholder='Enter a new TO-DO'
                    value={ this.state.input.value }
                />
                <ListsContainer
                    lists={ this.state.lists }
                    addItemToList={ this.addItemToList }
                />
            </main>
        );
    }
}

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
