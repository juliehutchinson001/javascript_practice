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
