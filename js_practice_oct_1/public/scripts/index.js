"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var VisibilityContainer = function (_React$Component) {
    _inherits(VisibilityContainer, _React$Component);

    function VisibilityContainer(props) {
        _classCallCheck(this, VisibilityContainer);

        var _this = _possibleConstructorReturn(this, (VisibilityContainer.__proto__ || Object.getPrototypeOf(VisibilityContainer)).call(this, props));

        _this.state = {
            detailsText: '',
            buttonText: "Show Details"
        };

        return _this;
    }

    _createClass(VisibilityContainer, [{
        key: "getDetailsText",
        value: function getDetailsText() {

            var text = !this.state.detailsText ? "these details ..." : "";
            return text;
        }
    }, {
        key: "getButtonText",
        value: function getButtonText() {

            var buttonText = this.state.buttonText === "Show Details" ? "Hide Details" : "Show Details";
            return buttonText;
        }
    }, {
        key: "handleClick",
        value: function handleClick() {

            this.setState({
                detailsText: this.getDetailsText(),
                buttonText: this.getButtonText()
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(Visibility, {
                detailsText: this.state.detailsText,
                buttonText: this.state.buttonText,
                clickHandler: function clickHandler() {
                    return _this2.handleClick();
                }
            });
        }
    }]);

    return VisibilityContainer;
}(React.Component);

;

var Visibility = function Visibility(_ref) {
    var detailsText = _ref.detailsText,
        buttonText = _ref.buttonText,
        clickHandler = _ref.clickHandler;
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility App"
        ),
        React.createElement(
            "p",
            null,
            detailsText
        ),
        React.createElement(
            "button",
            { onClick: clickHandler },
            buttonText
        )
    );
};

ReactDOM.render(React.createElement(VisibilityContainer, null), document.getElementById('app'));
