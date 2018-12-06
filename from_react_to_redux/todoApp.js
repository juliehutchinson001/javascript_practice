class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			todos: [],
		}
	}

	updateInputValue(event) {
		const newInputValue = event.target.value;
		this.setState({inputValue: newInputValue});
	}

	enterNewInput(event) {
		const newTodo = this.state.inputValue;
		let newTodoList = [];
	    const key = event.key || event.keyCode;

		if (key === 'Enter' || key === 13) {
            this.setState = (oldState => {
				newTodoList = [...oldState.todos, newTodo];

				return {todos: newTodoList};
			})
		}
	}

  render() {
	  const {todos} = this.state;
	  const todosArr = todos.map(todoName => <div key={todoName} >{todoName}</div>)
    return (
	    <div>
			<input
				type='text'
				onChange={event => this.updateInputValue(event)}
				onKeyPress={event => this.enterNewInput(event)}
			/>
			{this.todosArr}
		</div>
	);
  }
}
ReactDOM.render(<App/>, window.root);



/*





const createStore = reducer => {
    let state;

    const getState = () => state;
    const listeners = [];

    const subscribe = listener => {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    return { getState, subscribe, dispatch };
};

const addTodoAction = {
	type: 'ADD TODO',
	todo: {
		name: 'blah'
	},
};

const addTodoReducer = (state=[], addTodoAction) => {
    if (addTodoAction.type === 'ADD TODO') {
		state = [...state, addTodoAction.todo];
	}

	return state;
};

const todoApp =


*/



