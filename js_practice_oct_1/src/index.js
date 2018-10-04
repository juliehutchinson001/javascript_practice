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

class VisibilityContainer extends React.Component {

    constructor(props) {

        super(props);

        this.state = { 
            detailsText: '', 
            buttonText: "Show Details"
        };

    }

    getDetailsText() {

        const text = !this.state.detailsText ? "these details ..." : "";
        return text;

    }

    getButtonText() {

        const buttonText = this.state.buttonText === "Show Details" 
                            ? "Hide Details" 
                            : "Show Details";
        return buttonText;

    }

    handleClick() {

        this.setState(
            {
                detailsText: this.getDetailsText(),
                buttonText: this.getButtonText()
            }
        )

    }

    render() {
        return (
            
        );
    }
};




ReactDOM.render(<VisibilityContainer />, document.getElementById('app'));