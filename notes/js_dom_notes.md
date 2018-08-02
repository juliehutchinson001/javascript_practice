# JavaScript and the DOM #

## Overview ##
To make an interactive page with JavaScript, it is necessary:

1. Selecting elements on the page.
2. Manipulating elements.
3. Listening for user actions.

This steps are developed in the **Document Object Model** or **DOM**, with JavaScript.

## Thinking Globally ##

<p>JavaScript's global environment is full of controls your code can use to make things happen. These controls come in the form of JavaScript objects and functions. Global variables are actually part of the ``window object``.</p>

>__Command + L__: Clearing the console in google developer tools.

<code><p>alert('I made the browser message me');</p></code>
>* The alert() method displays an alert box with a specified message and an OK button.
>* An alert box is often used if you want to make sure information comes through to the user.

<code><p>location.href;</p></code>
>* The href property sets or returns the entire URL of the current page.
>* The resulting URL in the developer's console matches the URL in the address bar.

```document.body.innerHTML = 'some text';```

>* Predefined document object in JavaScript, which can be used to access all elements on the DOM.
>* The document acts as the owner (or root) of all objects in a webpage.
>* The ``innerHTML`` property can be used on almost all HTML elements to change its content.

The __document object__ can be used to select and control elements of the currently loaded web page.

<p>`document.getElementById()` __Method;__</p>

>* This method returns the element that has the ID attribute with the specified value.
>* It is used almost every time you want to manipulate, or get info from, an element on your document.
>* Returns null if no elements with the specified ID exists.

<p>```document.getElementById('h1').style.backgroundColor;```</p>

>* Return the backgroundColor property `object.style.backgroundColor;`
>* Set the backgroundColor property ```object.style.backgroundColor = "color";```

<p>`document.getElementById('h2').style.color;`</p>

>* The color property, when ```object.style.color = "color";``` sets the color of the text.
>* when ```object.style.color;``` returns the color represented in a string.

## A Simple Example 

#### index.html 

```html
<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript and the DOM</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1 id="myHeading">JavaScript and the DOM</h1>
        <p>Making a web page interactive</p>
        <script src="app.js"></script>
    </body>
</html>
```

On the index.html file, right before the closing `</body>` tag, add a `<script></script>` tag that links the html template to the app.js file.

Let's change the heading element to red when you click it. So we start by taking hold of the element, selecting it.

```javascript

const myHeading = document.getElementById('myHeading');

myHeading.addEventListener('click', () => {
    myHeading.style.color = 'red';
});

```

`addEventListener();`

>* This method attaches an event handler to the document.
>* This method tells myHeading to start listening for browser events, such as scrolling, keypresses, a click, mouse moves, input, scrolling and so on.
>* So we ask the event listener to listen for clicks (passing the string click), then we tell it what to do when it hears a click, we do that with a function.
>* Tip: Use the __``document.removeEventListener();``__ method to remove an event handler that has been attached with the addEventListener() method.
>* Tip: Use the __``element.addEventListener();``__ method to attach an event handler to a specified element.

## Select a Page Element By Its ID

>- Changing the headline color in response to clicking a button. Selection is a way to identify an element for a browser, so the browser can find it and make it available for us to do something with it using JavaScript. Remember ___Document_ is a global variable representing a webpage__. So now, a button is added to the html document, as well as an input element (so we can input text to affect the document):

```html
<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript and the DOM</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1 id="myHeading">JavaScript and the DOM</h1>
        <p>Making a web page interactive</p>
        <input type="text" id="myTextInput">
        <button id="myButton">Changing header color</button>
        <script src="app.js"></script>
    </body>
</html>
```

>- Let's change the heading element to red when you click the button. So now the constant, myTextInput, holds a reference to the text input element

```javascript

const myHeading = document.getElementById('myHeading');
const aButton = document.getElementById('myButton');
const myTxIn = document.getElementById('myTextInput');

aButton.addEventListener('click', () => {
    myHeading.style.color = myTxIn.value;
});
```

>- There is a variable named button in app.js. Set its value to contain a reference to the button element in index.html with the ID of sayPhrase.

```javascript

let button = document.getElementById('sayPhrase');
let input = document.getElementById('phraseText');

button.addEventListener('click', () => {
    alert(input.value);
});
```

## Select All Elements of a Particular Type

>- Select an element that doesn't have an ID, or select multiple elements on a page, using``getElementsByTagName``. While a get element by ID returns a single element that can be accessed directly, get elements by tag name returns a collection of elements.

```javascript

const el = document.getElementById('a'); => <ul id="a">
```

>- A collection is like an array, you can access an element directly using its index or loop over the whole collection to access all of them.


`Document.getElementsByTagName();`

>* Returns an HTMLCollection of elements with the given tag name.
>* The complete document is searched, including the root node.
>* The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call``document.getElementsByTagName()``again.

<br>

`HTMLCollection`

>* interface that represents a generic collection (array-like object similar to arguments) of elements (in document order).
>* It offers methods and properties for selecting from the list.``HTMLCollection.length;``returns the number of items in the collection.
>* Method.``HTMLCollection.item();``returns the specific node at the given zero-based index into the list. Returns null if the index is out of range.
>* The __item()__ method returns a numbered element from an HTMLCollection. In JS, it is easier to treat the collection as an array and to index it using array notation.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript and the DOM</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1 id="myHeading">JavaScript and the DOM</h1>
        <p>Making a web page interactive</p>
        <p>Things that are purple:</p>
        <ul>
            <li>grapes</li>
            <li>amethyst</li>
            <li>lavender</li>
            <li>plums</li>
        </ul>
        <input type="text" id="myTextInput">
        <button id="myButton">Changing header color</button>
        <script src="app.js"></script>
    </body>
</html>
```

>- So then, to change the color of the elements of a collection, we use indexing:

```javascript 
const els = document.getElementsByTagName('li');

els[2].style.color = 'purple'; 

//(lavender purple now)

```

>- or to change the entire collection, you do a for loop:

```javascript
for(let i = 0, i < els.length, i++){
    els[i].style.color = 'purple';
}
```

## Selecting Elements with the Same Class Name

>- When working with HTML, you'll use classes to give elements a particular style with CSS. Select elements with the same class, using `document.getElementsByClassName`.


## Using CSS Queries to Select Page Elements ##

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors
CSS selectors

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
MDN for querySelector

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
MDN page for querySelectorAll


## Working with DOM

>* ``element.childNodes`` returns an array of an element's child nodes.
>* ``element.firstChild`` returns the first child node of an element.
>* ``element.lastChild`` returns the last child node of an element.
>* ``element.hasChildNodes`` returns true if an element has any child nodes, otherwise false.
>* ``element.nextSibling``returns the next node at the same tree level.
>* ``element.previousSibling`` returns the previous node at the same tree level.
>* ``element.parentNode`` returns the parent node of an element.

To select all child nodes of an element and change their content:

```html

<html>
<body>

    <div id ="demo">
        <p>some text</p>
        <p>some other text</p>
    </div>
    <script>
    
        let a = document.getElementById("demo");
        let arr = a.childNodes;
        
        for(let x=0;x<arr.length;x++) {
            arr[x].innerHTML = "new text";
        }

    </script>

</body>

</html>
```

## Using parentNode to Traverse Up the DOM

>- Traversal is similar to selection in that you're obtaining a reference to an element. By referencing an element, you can get a hold of the parent element or to an upper part element. Traversal is a way to move one part of the DOM to another, and select an element based on its relationship to the other element.

```javascript
let paragraph = document.querySele('.remove_me');
let parent = removeMe.parentNode;
parent.removeChild(removeMe);
```

1. First you need to fetch the element to be removed.
2. You get the paragraph's parentNode and assign it to a variable parent.
3. You need to call removeChild on the paragraph's parent.

## Getting All Children of a Node with children

>* ``Node.children`` is a property that returns an HTMLCollection
of the child element of the Node.
>* Add the buttons entirely from javaScript, including each
property of the buttons, and finally append each button to
the list item element:

```javascript
function attachListItemButtons(li) {

    let up = document.createElement('button');
    up.className = 'up';up.textContent = 'Up';li.appendChild(up);

    let down = document.createElement;(buttodown.className ) = 'down'
    down.textContent = 'Down'
    li.appendChild(down)

    let remove = document.createEle('button');remove.className = 'remove';remove.textContent = 'Remove';
    li.appendChild(remove);

}
```

>- Now, below in the event handler, the function can be called for the new items:

```javascript

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li);

    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = '';
});
```

>- To store the buttons on the existent list, the children property can be used for the list and it can be looped through each of the values of the collection:

```javascript

listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const lis = listUl.children;

for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
}
```

## Getting the First and Last Child

__<p>`ParentNode.firstElementChild`</p> __

>- It gives you the first DOM child element of a selected element.

```javascript

listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const firstListItem = listUl.firstElementChild;

```

__<p>``ParentNode.lastElementChild</p> __
It gives you the last DOM element child of a selected element.

```javascript

const lastListItem = listUl.lastElementChild;lastListItem.style.backgroundColor = 'lightSkyBlue';

```

__`ParentNode.firstChild`__

>- It gives you the first element child of a selected element (no guaranty of returning a DOM element since it could return white space or preceding element of selected one.)

__`ParentNode.lastChild`__

>- It returns the subsequent element of the selected element. A delegated click event listener has been attached to the selected ul element, which is stored in the variable list. The handler is targeting each button in the list.

>- When any one of the buttons is clicked, a class of highlight should be added to the paragraph element immediately preceding that button inside the parent list item element.

```javascript

const list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {

    if (e.target.tagName === 'BUTTON') {
        if(e.target.textContent.toLowerCase() 'highlight') {
            let li = e.target.parentNode; // Canremoved; not needed
            let p = e.target.previousElementSibling;
            let ul = li.parentNode; // Can be removed not needed
            if (p.tagName === 'P') { //to asshighlighting of a paragraph tag
                p.classList.add('highlight');
            }

        }

    }

});

```

_ _ _

```html
<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript and the DOM</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        
        <section>
            <h1 id="myHeading">JavaScript and the DOM</h1>
            <p>Making a web page interactive</p>
            <p>Things to Learn</p>
            <input type="text" id="myTextInput">
            <button id="myButton">Changing header color</button>

            <ul>
                <li>ElemSelection<button>Highlight</button></li>
                <li><p>Events</p><button>Highlight</button></li>
                <li><p>EvListening</p><button>Highlight</button></li>
                <li><p>Traversal</p><button>Highlight</button></li>
            </ul>
        </section>
        <script src="app.js"></script>
    </body>
</html>
```

## Creating, Removing and Replacing Elements

Use the following methods to create new nodes:

>* ``element.cloneNode()`` clones an element and returns the resulting node.
>* ``document.createElement(element)`` creates a new element node.
>* ``document.createTextNode(text)`` creates a new text node.

```javascript
let node = document.createTextNode("Some text");

```

>- This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods:

>>* ``element.appendChild(newNode)`` adds a new child node to an element as the last child node.
>>* ``element.insertBefore(node1, node2)`` inserts node1 as a child before node2.

```html

<div id ="demo">some content</div>
<script> 
    // <!--creating a new paragraph -->

    let p = document.createElement("p");
    let node = document.createTextNode("Somtext");
    p.appendChild(node); //adding the text of the paragraph
    let div = document.getElementById("demo");
    div.appendChild(p); //adding the paragraph to the div

</script>
```

>- To remove an HTML element, you must select the parent of the element and use the `removeChild(node)` method.

```html

<div id="demo">

    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>

</div>

<script>

    let parent = document.getElementById("demo");
    let child = document.getElementById("p");
    parent.removeChild(child);

</script>
```

>- This removes the paragraph with `id="p1"` from the page. An alternative way of achieving the same result would be the use of the `parentNode` property to get the parent of the element we want to remove:

```javascript

let child = document.getElementById("p1");
child.parentNode.removeChild(child);
```

>- To replace an HTML element, the `element.replaceChild(newNode, oldNode)` method is used.

```html
<div id="demo">

    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>

</div>
<script>

    let p = document.createElement("p");
    let node = document.createTextNode("Thisnew");
    p.appendChild(node);

    let parent = document.getElementById("demo");
    let child = document.getElementById("parent");
    parent.replaceChild(p, child);

</script>
```

>- The code above creates a new paragraph element that replaces the existing p1 paragraph.

## Animations ##
>- To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this by using the `setInterval()` method. This allows us to create a timer and call a function to change properties repeatedly at defined intervals (in milliseconds).

```javascript
    let t = setInterval(move, 500);
```

>- This code creates a timer that calls a `move()` function every 500 milliseconds. Now we need to define the `move()` function, that changes the position of the box.

```javascript
let pos = 0; //starting position
let box = document.getElementById("box"); //our box element
function move() {
    pos += 1;
    box.style.left = pos+"px"; //px = pixels
}

```

The `move()` function increments the left property of the box element by one each time it is called. The following code defines a timer that calls the `move()` function every 10 milliseconds:

```let t = setInterval(move, 10);```

>- However, this makes our box move to the right forever. To stop the animation when the box reaches the end of the container, we add a simple check to the `move()` function and use the `clearInterval()` method to stop the timer.

```javascript

function move() {
    if(pos >= 150) {
        clearInterval(t);
    } else {
        pos += 1;
        box.style.left = pos+"px";
    }
}
```

>- When the left attribute of the box reaches the value of 150, the box reaches the end of the container, based on a container width of 200 and a box width of 50. The final code:

```javascript

let pos = 0;
let box = document.getElementById("box"); //our box element
let t = setInterval(move, 10);

function move() {
    if(pos >= 150) {
        clearInterval(t);
    } else {
        pos += 1;
        box.style.left = pos+"px";
    }

}
```

## Handling Events

| Event | Description |
|:----------:|:-------------------------------------------------------------------------------------------------------------------------------------------|
| onclick | the user clicks on an element |
| onload | the page has loaded |
| onunload | once the page has unloaded (for <body>) |
| onchange | the content of a form element, the seletion, or the checked state have changed ``(<input>, <keygen>, <select>, <textarea>)`` |
|onmouseover| the pointer is moved onto an element or onto one of its children |
| onmouseout| user moves the mouse pointer out of an element, or out of its children |
|onmousedown| user presses a mouse button over an element |
| onmouseup | user releases a mouse button over an element |
| onblur | an element loses focus |
| onfocus | an element gets focus |

>- Corresponding events can be added to HTML elements as attributes.

`<p click="someFunc()">some text</p>`

>- an alert popup will show up when the user clicks a specified button:

```html
<button onclick="show()">Click Me</button>

<script>
    function show() {
        alert("Hi there");
    }
</script>

```

>- Event handlers can be assigned to elements as well.

```javascript

let x = document.getElementById("demo");
x.click = function () {
    document.body.innerHTML = Date();
}
```

>- The load and unload events are triggered when the user enters or leaves the page. These can be useful when performing actions after the page is loaded.

`<body load="doSomething()">`

>- Similarly, the window.load event can be used to run code after the whole page is loaded.

```javascript

window.load = function() {
    //some code
}
```

>- The change event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.

```html
<input type="text" id="name" change="change()">
<script>
    function change() {
        let x = document.getElementById("name");x.value= x.value.toUpperCase();
    }
</script>
```

## So, when to use .on or click?

>- It is preferred __.on__ over __.click__ because the former can use less memory and work for dynamically added elements. Consider the following html:

```html
<html>

    <button id="add">Add new</button>
    <div id="container">

        <button class="alert">alert!</button>

    </div>

</html>

```

>- where we add new buttons via:

```javascript
$("button#add").click(function() {
    let html = "<butclass='alert'>Alert!</button>";
    $("button.alert:last").parent().append(html);
});
```

>- and want "Alert!" to show an alert. We can use either "click" or "on" for that. When we use click:

```javascript
$("button.alert").click(function() {
    alert(1);
});
```

>- with the above, a separate handler gets created for every single element that matches the selector. That means many matching elements would create many identical handlers and thus increase memory footprint dynamically added items won't have the handler - ie, in the above html the newly added "Alert!" buttons won't work unless you rebind the handler. When we use `.on`

```javascript
$("div#container").on('click', 'button.alert', function() {
    alert(1);
});
```

>- with the above, a single handler for all elements that match your selector, including the ones created dynamically.

>- If you add a handler with `.on("click", handler)` you normally remove it with `.off("click", handler)` which will remove that very handler. Obviously this works only if you have a reference to the function, so what if you don't? You use namespaces:

```javascript

$("#element").on("click.someNamespace", function() {
    console.log("anonymous!");
});

```

>- with unbinding via:

```javascript
$("#element").off("click.someNamespace");
```
