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
```
my-attribute-name="my-attribute-value"
Here are some JSX elements with attributes:

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




---

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
