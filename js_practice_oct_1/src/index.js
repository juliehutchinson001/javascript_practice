/*

let toggleMessage = false;

const app = {
    name: "Visibility App"
};

const toggle = () => {

    toggleMessage = !toggleMessage; 
    render();

}

const appRoot = document.getElementById('app');

const render = () => {

    const sample = (

        <div>
            <h1>{ app.name }</h1>
            <button onClick={ toggle } >
            { toggleMessage ? "Hide Details" : "Show Details" }
            </button>
            {toggleMessage && (<p>This details can be seen now</p>)}
        </div>    

    );

    ReactDOM.render(sample, appRoot);

};

render();

*/

/* ***** The New Way ***** */

class Visibility extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            message: '', 
            button: "Show Details"
        };
    }

    handleClick() {

        this.setState(
            {
                message: "This details can be seen now",
                button: "Hide Details"
            }
        )

    }

    render() {
        return(
            <div>
                <h1>Visibility App</h1>
                <p>{this.state.message}</p>
                <button onClick={() => this.handleClick()}>{this.state.button}</button>
            </div>
        );
    }
}