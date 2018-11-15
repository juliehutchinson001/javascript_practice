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
                'Non-Urgent': []
            },
            todo: {
                active: null
            },
        };

        this.getObjectSize = this.getObjectSize.bind(this);
    }

    updateInputValue(event) {
        const notEmpty = event.target.value !== '';
        notEmpty && this.setState({ input: { value: event.target.value } });
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

    updateListOnEnter(event) {
        //onKeyPress tracks the 'enter' key to update the general list
        const userSearchTerm = this.state.input.value;
        const enterKeyWasPressed = event.key === 'Enter' || event.keyCode === 13;
        const notEmpty = event.target.value !== '';

        if(notEmpty && enterKeyWasPressed) {
            this.addItemToList(userSearchTerm, 'General')
        }
    }

    getObjectSize() {
        Object.objSize = anObject => {
            const oSize = 0;
            for (const key in anObject) {
                if (anObject.hasOwnProperty(key)) oSize++;
            }
            return oSize;
        };

        let objSize = Object.objSize(this.state.lists);
        return objSize;
    }

    moveTodo (event, direction) {
        const buttonPressed = event.target.dataset;

        if(direction === 'left') {
            this.setState({ todo: { active: parseInt(buttonPressed.idleft, 10) } });

            this.addItemToList()

        } else if (direction === 'right') {
            this.setState({ todo: { active: parseInt(buttonPressed.idright, 10) }});
            this.addItemToList()

        }

    }

    render() {
        return (
            <main className="app" >
                <input
                    className="app__input"
                    onKeyPress={ event => this.updateListOnEnter(event) }
                    onInput={ event => this.updateInputValue(event) }
                    placeholder='Enter a new TO-DO'
                    value={ this.state.input.value }
                />
                <ListsContainer
                    lists={ this.state.lists }
                    moveTodo={ this.moveTodo }
                    addItemToList={ (item, list) => this.addItemToList(item, list) }
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
