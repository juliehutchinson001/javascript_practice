"use strict";

var toggleMessage = false;

var app = {
    name: "Visibility App",
    details: ""
};

var toggle = function toggle() {

    toggleMessage = !toggleMessage;

    app.details = app.details === '' ? "This details can be seen now" : '';
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {

    var sample = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.name
        ),
        React.createElement(
            "button",
            { onClick: toggle },
            toggleMessage ? "Hide Details" : "Show Details"
        ),
        React.createElement(
            "p",
            null,
            app.details
        )
    );

    ReactDOM.render(sample, appRoot);
};

render();
