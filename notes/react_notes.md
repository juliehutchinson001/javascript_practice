# What is JSX?

>- JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

```
const h1 = <h1>Hello world</h1>;
```

>- "syntax extension" means that JSX is not valid JavaScript. Web browsers can't read it!
>- If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.
>- A basic unit of JSX is called a JSX element.

```
<h1>Hello world</h1>
```

>- JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go.
>- That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array...

```
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```

## Attributes In JSX
>- JSX elements can have attributes, just like HTML elements can.

>- A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes, like this:

`my-attribute-name="my-attribute-value"`

>- Here are some JSX elements with attributes:

```
<a href="http://www.example.com">Welcome to the Web</a>;

const title = <h1 id="title">Introduction to React.js: Part I</h1>;
```

>- A single JSX element can have many attributes, just like in HTML:

```
const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;
```

## Nested JSX
>- You can nest JSX elements inside of other JSX elements, just like in HTML.

>- Here's an example of a JSX `<h1>` element, nested inside of a JSX `<a>` element:

```
<a href="https://www.example.com"><h1>Click me!</h1></a>
```

>- To make this more readable, you can use HTML-style line breaks and indentation:

```
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>
```

>- If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it:

```
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)
```

>- Nested JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can! Here's an example of a nested JSX expression being saved as a variable:

```
 const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
```

## JSX Outer Elements
>- There's a rule that we haven't mentioned: a JSX expression must have exactly one outermost element. In other words, this code will work:

```
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```

>- But this code will not work:

```
const paragraphs = (
  <p>I am a paragraph.</p>
  <p>I, too, am a paragraph.</p>
);
```

>- The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element! (Must wrap code in div tags)

## Render a JSX expressions

>- To render a JSX expression means to make it appear onscreen.

## ReactDOM.render() I

>- ReactDOM is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.

>- `ReactDOM.render()` is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.

>- Move and you come to this expression:

<center>`<h1>Hello world</h1>`</center>

>- This is the first argument being passed to `ReactDOM.render()`. `ReactDOM.render()'s` first argument should be a JSX expression, and it will be rendered to the screen.

>- app.js

```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));)
```

>- index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <span id="container"></span>
	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>
```


## ReactDOM.render() II

>- The first argument is appended to whatever element is selected by the second argument.

```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
```

>- That element acted as a container for `ReactDOM.render()'s` first argument:

```
<main id="app">
  <h1>Render me!</h1>
</main>
```

## Passing a Variable to `ReactDOM.render()`

>- `ReactDOM.render()'s` first argument should evaluate to a JSX expression, it doesn't have to literally be a JSX expression.

>- The first argument could also be a variable, so long as that variable evaluates to a JSX expression.

>- In this example, we save a JSX expression as a variable named toDoList. We then pass toDoList as the first argument to `ReactDOM.render()`:

```
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList,
  document.getElementById('app')
);
```

## The Virtual DOM

>- One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.

>- That means that if you render the exact same thing twice in a row, the second render will do nothing:

```
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:

ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(hello, document.getElementById('app'));
```

>- Only updating the necessary DOM elements is a large part of what makes React so successful.

<center> ADVANCED JSX </center>

## class vs className
>- In HTML, it's common to use class as an attribute name:

`<h1 class="big">Hey</h1>`

>- In JSX, you can't use the word class! You have to use className instead:

`<h1 className="big">Hey</h1>`

>- This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

>- When JSX is rendered, JSX className attributes are automatically rendered as class attributes.

## Self-Closing Tags

>- Most HTML elements use two tags: an opening tag (`<div>`), and a closing tag (`</div>`). However, some HTML elements such as `<img>` and `<input>` use only one tag. The tag that belongs to a single-tag element isn't an opening tag nor a closing tag; it's a self-closing tag.

>- When you write a self-closing tag in HTML, it is optional to include a forward-slash immediately before the final angle-bracket:

>>- Fine in HTML with a slash:

  `<br />`

>>- Also fine, without the slash:

  `<br>`

>- In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:

>>- Fine in JSX:

  `<br />`

>>- __NOT FINE AT ALL in JSX:__

  `<br>`

## Curly Braces in JSX

>- Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn't add numbers - it reads them as text, just like HTML.

```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<h1>{2 + 3}</h1>, document.getElementById('app')
);
```

>- You can treat code located in between JSX tags like ordinary JavaScript by wrapping your code in curly braces.

>- The curly braces won't be treated as JSX nor as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.

## Variables in JSX

>- When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

>- That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.

```
// Declare a variable:
const name = 'Gerdo';

// Access your variable
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```

## Variable Attributes in JSX

>- When writing JSX, it's common to use variables to set attributes:

```
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img
    src="images/panda.jpg"
    alt="panda"
    height={sideLength}
    width={sideLength} />
);
```

>- Notice how in this example, the `<img />'s` attributes each get their own line. This can make your code more readable if you have a lot of attributes on one element.

>- Object properties are also often used to set attributes:

```
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
};

const panda = (
  <img
    src={pics.panda}
    alt="Lazy Panda" />
);

const owl = (
  <img
    src={pics.owl}
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img
    src={pics.owlCat}
    alt="Ghastly Abomination" />
);

```

## Event Listeners in JSX

>- JSX elements can have event listeners, just like HTML elements can. Programming in React means constantly working with event listeners.

>- You create an event listener by giving a JSX element a special attribute:

`<img onClick={myFunc} />`

>- An event listener attribute's name should be something like onClick or onMouseOver:
>>- the word on,
>>- plus the type of event that you're listening for.

>- You can see a list of valid event names [here](https://reactjs.org/docs/events.html#supported-events).

>- An event listener attribute's value should be a function. The above example would only work if myFunc were a valid function that had been defined elsewhere:

```
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />
```

>- Note that __in HTML, event listener names are written in all lowercase__, such as onclick or onmouseover.

>- In __JSX, event listener names are written in camelCase__, such as onClick or onMouseOver.

__Example:__ Add an onClick attribute to the `<img />` element. Set onClick's value equal to the makeDoggy function. Since attributes are a part of JSX expressions, you will need to inject JavaScript in order to use makeDoggy.

```
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));
```

__Solution:__

```
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"
		alt="kitty" onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));
```

## JSX Conditionals: If Statements That Don't Work
>- you can not inject an if statement into a JSX expression.

## JSX Conditionals: If Statements That Do Work
>- write an if statement, and not inject it into JSX.

```
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = (
  	<img src={pics.kitty} />
  );
} else {
  img = (
  	<img src={pics.doggy} />
  );
}

ReactDOM.render(img, document.getElementById('app'));
```

>- the following code works, because the words if and else are not injected in between JSX tags. The if statement is on the outside, and no JavaScript injection is necessary.

```
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message,
  document.getElementById('app')
);
```

## JSX Conditionals: The Ternary Operator
>- The ternary operator works the same way in React as it does in regular JavaScript. However, it shows up in React surprisingly often.

>- you write x ? y : z, where x, y, and z are all JavaScript expressions. When your code is executed, x is evaluated as either "truthy" or "falsy."

>>- If x is truthy, then the entire ternary operator returns y.
>>- If x is falsy, then the entire ternary operator returns z. Here's a nice explanation if you need a refresher.

```
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

In the above example, if age is greater than or equal to drinkingAge, then headline will equal `<h1>Buy Drink</h1>`. Otherwise, headline will equal `<h1>Do Teen Stuff</h1>`.

## JSX Conditionals: &&
>- && works best in conditionals that will sometimes do an action, but other times do nothing at all. Here's an example:

```
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

>- Every time that you see && in this example, either some code will run, or else no code will run.














---
## React Facebook Documentation

>- Functional components don't have state, they only have props --they are sent as a parameter in the function and gotten in the class in the constructor (immutable) and they have a return statement --.
>- Class based components have a state --mutable, --, they have a render method.
>- props:
>>- object
>>- a change triggers an update
>>- a component should not change it's props
>>- a component should provide props to its children
>>- props come from outside
>>- props usually configure or provide data

>- State
>>- Object
>>- a change triggers an update
>>- a component should set its state
>>- a component should set default values for state
>>- state should not be shared
>>- state is internal or private
>>- state determines the 'state' of a component
>>-
>>-
>>-








## What is React?
>- React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

```
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```

Here, ShoppingList is a __React component class__, or
__React component type__. A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.

The render method returns a description of what you want to render, and then React takes that description and renders it to the screen. In particular, render returns a __React element__, which is a lightweight description of what to render.

The `<div />` syntax is transformed at build time to `React.createElement('div')`. The example above is equivalent to:

```
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```
### createElement

```
React.createElement(
  type,
  [props],
  [...children]
)
```
>- Create and return a new React element of the given type. The type argument can be either a tag name string (such as 'div' or 'span'), a React component type (a class or a function), or a React fragment type.

>- Code written with JSX will be converted to use `React.createElement()`.
