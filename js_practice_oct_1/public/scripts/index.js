"use strict";

var toggleMessage = false;

var app = {
    name: "Visibility App"
};

var toggle = function toggle() {

    toggleMessage = !toggleMessage;
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
        toggleMessage && React.createElement(
            "p",
            null,
            "This details can be seen now"
        )
    );

    ReactDOM.render(sample, appRoot);
};

render();
