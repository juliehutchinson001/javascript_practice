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

<p>```document.getElementById()``` __Method;__</p>

>* This method returns the element that has the ID attribute with the specified value.
>* It is used almost every time you want to manipulate, or get info from, an element on your document.
>* Returns null if no elements with the specified ID exists.

<p>```document.getElementById('h1').style.backgroundColor;```</p>

>* Return the backgroundColor property ``object.style.backgroundColor;``
>* Set the backgroundColor property ```object.style.backgroundColor = "color";```

<p>```document.getElementById('h2').style.color;```</p>

>* The color property, when ```object.style.color = "color";``` sets the color of the text.
>* when ```object.style.color;``` returns the color represented in a string.

## A Simple Example ##

#### index.html ####

`<!DOCTYPE html>`
>`<html>`
>>`<head>`

>>><p>`<title>JavaScript and the DOM</title>`</p>
>>><p>```<link rel="stylesheet" href="css/style.css">```</p>

>><p>`</head>`</p>
>><p>`<body>`</p>

>>>```<h1 id="myHeading">JavaScript and the DOM</h1>```<br>
>>>`<p>Making a web page interactive</p>`<br>
>>>```<p><script src="app.js"></script></p>```

>><p>`</body>`</p>

><p>`</html>`</p>

On the index.html file, right before the closing `</body>` tag, add a `<script></script>` tag that links the html template to the app.js file.

><p>```<script src="app.js"></script>```</p>

Let's change the heading element to red when you click it. So we start by taking hold of the element, selecting it.

><p>```const myHeading = document.getElementById('myHeading');```</p>
><p>myHeading.addEventListener('click', () => {</p>

>><p>myHeading.style.color = 'red';</p>

><p>});</p><br>

<p>`addEventListener();`</p>

>* This method attaches an event handler to the document.
>* This method tells myHeading to start listening for browser events, such as scrolling, keypresses, a click, mouse moves, input, scrolling and so on.
>* So we ask the event listener to listen for clicks (passing the string click), then we tell it what to do when it hears a click, we do that with a function.
>* Tip: Use the __``document.removeEventListener();``__ method to remove an event handler that has been attached with the addEventListener() method.
>* Tip: Use the __``element.addEventListener();``__ method to attach an event handler to a specified element.

## Select a Page Element By Its ID ##
<p>Changing the headline color in response to clicking a button. Selection is a way to identify an element for a browser, so the browser can find it and make it available for us to do something with it using JavaScript. Remember ___Document_ is a global variable representing a webpage__. So now, a button is added to the html document, as well as an input element (so we can input text to affect the document):</p>

><p><!DOCTYPE html></p>
><p><html></p>

>><p><head></p>

>>><p><title>JavaScript and the DOM</title></p>
>>><p><link rel="stylesheet" href="css/style.css"></p>

>><p></head></p>
>><p><body></p>

>>><p><h1 id="myHeading">JavaScript and the DOM</h1></p>
>>><p><p>Making a web page interactive</p></p>
>>><p><input type="text" id="myTextInput"></p>
>>><p><button id="myButton">Changing header color</button></p>
>>><p><script src="app.js"></script></p>

>><p></body></p>

><p></html></p>

Let's change the heading element to red when you click the button. So now the constant, myTextInput, holds a reference to the text input element

><p>const myHeading = document.getElementById('myHeading');</p>
><p>const aButton = document.getElementById('myButton');</p>
><p>const myTxIn = document.getElementById('myTextInput');</p>
><p>aButton.addEventListener('click', () => {</p>

>><p>myHeading.style.color = myTxIn.value;</p>

><p>});</p>

<p>There is a variable named button in app.js. Set its value to contain a reference to the button element in index.html with the ID of sayPhrase.</p>

><p>let button = document.getElementById('sayPhrase');</p>
><p>let input = document.getElementById('phraseText');</p>
><p>button.addEventListener('click', () => {</p>

>><p>alert(input.value);</p>

><p>});</p>

## Select All Elements of a Particular Type ##
<p>Select an element that doesn't have an ID, or select multiple elements on a page, using``getElementsByTagName``. While a get element by ID returns a single element that can be accessed directly, get elements by tag name returns a collection of elements.</p>

><p>const el = document.getElementById('a');``=>``<ul id="a"></p>

<p>A collection is like an array, you can access an element directly using its index or loop over the whole collection to access all of them.</p>

><p>const els = document.getElementsByTagName('p'); <p>``=>``[<p>, <p>, <p>]</p>
><p>let el = els[0];</p>
><p>el.style.color = 'blue'``
to change the index 0 of collection of paragraphs to blue color.</p>

<br>
__<p>``Document.getElementsByTagName();</p> __
>* Returns an HTMLCollection of elements with the given tag name.
>* The complete document is searched, including the root node.
>* The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call``document.getElementsByTagName()``again.

<br>
__HTMLCollection__
>* interface that represents a generic collection (array-like object similar to arguments) of elements (in document order).
>* It offers methods and properties for selecting from the list.``HTMLCollection.length;``returns the number of items in the collection.
>* Method.``HTMLCollection.item();``returns the specific node at the given zero-based index into the list. Returns null if the index is out of range.
>* The __item()__ method returns a numbered element from an HTMLCollection. In JS, it is easier to treat the collection as an array and to index it using array notation.

>><p><!DOCTYPE html></p>
>><p><html></p>

>>><p><head></p>

>>>><p><title>JavaScript and the DOM</title></p>
>>>><p><link rel="stylesheet" href="css/style.css"></p>

>>><p></head></p>
>>><p><body></p>

>>>><p><h1 id="myHeading">JavaScript and the DOM</h1></p>
>>>><p><p>Making a web page interactive</p></p>
>>>><p><p>Things that are purple:</p></p>
>>>><p><ul></p>

>>>>><p><li>grapes</li></p>
><p><li>amethyst</li></p>
><p><li>lavender</li></p>
><p><li>plums</li></p>

>>>><p></ul></p>
><p><script src="app.js"></script></p>

>>><p></body></p>

>><p></html></p>

<p>So then, to change the color of the elements of a collection, we use indexing:</p>

><p>const els = document.getElementsByTagName('li');</p>
><p>els[2].style.color = 'purple'; <p>``(lavender purple now)

or to change the entire collection, you do a for loop:

><p>for(let i = 0, i < els.length, i++){</p>

>><p>els[i].style.color = 'purple';</p>

><p>}</p>

## Selecting Elements with the Same Class Name ##
<p>When working with HTML, you'll use classes to give elements a particular style with CSS. Select elements with the same class, using ``document.getElementsByClassName``.</p>


## Using CSS Queries to Select Page Elements ##

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors
CSS selectors

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
MDN for querySelector

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
MDN page for querySelectorAll


## Working with DOM ##
>* ``element.childNodes`` returns an array of an element's child nodes.
>* ``element.firstChild`` returns the first child node of an element.
>* ``element.lastChild`` returns the last child node of an element.
>* ``element.hasChildNodes`` returns true if an element has any child nodes, otherwise false.
>* ``element.nextSibling``returns the next node at the same tree level.
>* ``element.previousSibling`` returns the previous node at the same tree level.
>* ``element.parentNode`` returns the parent node of an element.

To select all child nodes of an element and change their content:
><p><html></p>

>><p><body></p>

>>><p><div id ="demo"></p>

>>>><p><p>some text</p></p>
>>>><p><p>some other text</p></p>

>>><p></div></p>
>>><p><script></p>

>>>><p>let a = document.getElementById("demo");</p>
>>>><p>let arr = a.childNodes;</p>
>>>><p>for(let x=0;x<arr.length;x++) {</p>

>>>>><p>arr[x].innerHTML = "new text";</p>

>>>><p>}</p>

>>><p></script></p>

>><p></body></p>

><p></html></p>


## Using parentNode to Traverse Up the DOM ##
<p>Traversal is similar to selection in that you're obtaining a reference to an element. By referencing an element, you can get a hold of the parent element or to an upper part element. Traversal is a way to move one part of the DOM to another, and select an element based on its relationship to the other element.</p>

>><p>let paragraph = document.querySelector('.remove_me');</p>
>><p>let parent = removeMe.parentNode;</p>
>><p>parent.removeChild(removeMe);</p>

1. First you need to fetch the element to be removed.
2. You get the paragraph's parentNode and assign it to a variable parent.
3. You need to call removeChild on the paragraph's parent.

## Getting All Children of a Node with children ##

>* ``Node.children`` is a property that returns an HTMLCollection
of the child element of the Node.
>* Add the buttons entirely from javaScript, including each
property of the buttons, and finally append each button to
the list item element:

>><p>function attachListItemButtons(li) {</p>

>>><p>let up = document.createElement('button');</p>
>><p>up.className = 'up';</p>
>><p>up.textContent = 'Up';</p>
>><p>li.appendChild(up);</p>
<br>
>>><p>let down = document.createElement('button');</p>
>><p>down.className = 'down';</p>
>><p>down.textContent = 'Down';</p>
>><p>li.appendChild(down);</p>
<br>
>>><p>let remove = document.createElement('button');</p>
>><p>remove.className = 'remove';</p>
>><p>remove.textContent = 'Remove';</p>
>><p>li.appendChild(remove);</p>

>>``}</p>

Now, below in the event handler, the function can be called for the new items:
><p>addItemButton.addEventListener('click', () => {</p>

>><p>let ul = document.getElementsByTagName('ul')[0];</p>
>><p>let li = document.createElement('li);</p>
<br>
>><p>li.textContent = addItemInput.value;</p>
>><p>attachListItemButtons(li);</p>
>><p>ul.appendChild(li);</p>
>><p>addItemInput.value = '';</p>

><p>});</p>

To store the buttons on the existent list, the children property can be used for the list and it can be looped through each of the values of the collection:
><p>listDiv = document.querySelector('.list');</p>
><p>const listUl = listDiv.querySelector('ul');</p>
><p>const lis = listUl.children;</p>
<br>
><p>for (let i = 0; i < lis.length; i += 1) {</p>

>><p>attachListItemButtons(lis[i]);</p>

><p>}</p>

## Getting the First and Last Child ##

__<p>``ParentNode.firstElementChild</p> __
It gives you the first DOM child element of a selected element.

><p>listDiv = document.querySelector('.list');</p>
><p>const listUl = listDiv.querySelector('ul');</p>
><p>const firstListItem = listUl.firstElementChild;</p>

__<p>``ParentNode.lastElementChild</p> __
It gives you the last DOM element child of a selected element.
><p>const lastListItem = listUl.lastElementChild;</p>
><p>lastListItem.style.backgroundColor = 'lightSkyBlue';</p>

__``ParentNode.firstChild``__
><p>It gives you the first element child of a selected element (no guaranty of returning a DOM element since it could return white space or preceding element of selected one.)</p>

__`ParentNode.lastChild`__
><p>It returns the subsequent element of the selected element.</p>

<p>A delegated click event listener has been attached to the selected ul element, which is stored in the variable list. The handler is targeting each button in the list.</p>

<p>When any one of the buttons is clicked, a class of highlight should be added to the paragraph element immediately preceding that button inside the parent list item element.</p>

><p>const list = document.getElementsByTagName('ul')[0];</p>
<br>
><p>list.addEventListener('click', function(e) {</p>

>><p>if (e.target.tagName === 'BUTTON') {</p>

>>><p>if(e.target.textContent.toLowerCase() === 'highlight') {</p>

>>>><p>let li = e.target.parentNode; // Can be removed; not needed</p>
>>>><p>let p = e.target.previousElementSibling;</p>
>>>><p>let ul = li.parentNode; // Can be removed; not needed</p>

>>>><p>if (p.tagName === 'P') { //to assure highlighting of a paragraph tag</p>

>>>>><p>p.classList.add('highlight');</p>

>>>><p>}</p>

>>><p>}</p>

>><p>}</p>

><p>});</p>

_ _ _

<p>``<!DOCTYPE html></p>
<p>``<html></p>

><p><head>`</p>

>><p><title>JavaScript and the DOM</title>`

><p></head></p>

>><p><link rel="stylesheet" href="style.css" /></p>

><p><body></p>

>><p><section></p>

>>><p><h1>Making a Webpage Interactive</h1></p>
>>><p><p>Things to Learn</p></p>
>>><p><ul></p>

>>>><p><li><p>Element Selection</p><button>Highlight</button></li></p>
>>>><p><li><p>Events</p><button>Highlight</button></li></p>
>>>><p><li><p>Event Listening</p><button>Highlight</button></li></p>
>>>><p><li><p>DOM Traversal</p><button>Highlight</button></li></p>

>>><p></ul></p>

>><p></section></p>
>><p><script src="app.js"></script></p>

><p></body></p>

<p>``</html></p>

## Creating, Removing and Replacing Elements ##
Use the following methods to create new nodes:
>* ``element.cloneNode()`` clones an element and returns the resulting node.
>* ``document.createElement(element)`` creates a new element node.
>* ``document.createTextNode(text)`` creates a new text node.

>>`let node = document.createTextNode("Some new text");`

This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods:
>* ``element.appendChild(newNode)`` adds a new child node to an element as the last child node.
>* ``element.insertBefore(node1, node2)`` inserts node1 as a child before node2.

>><p><div id ="demo">some content</div></p>
>><p><script> //creating a new paragraph</p>

>>><p>let p = document.createElement("p");</p>
>><p>let node = document.createTextNode("Some n text");</p><br>
>><p>p.appendChild(node); //adding the text to the paragraph</p><br>
>><p>let div = document.getElementById("demo");</p><br>
>><p>div.appendChild(p); //adding the paragraph to the div</p>

>><p></script></p>

To remove an HTML element, you must select the parent of the element and use the ``removeChild(node)`` method.
><p><div id="demo"></p>

>><p><p id="p1">This is a paragraph.</p></p>
>><p><p id="p2">This is another paragraph.</p></p>

><p></div></p>

><p><script></p>

>><p>let parent = document.getElementById("demo");</p>
>><p>let child = document.getElementById("p1");</p><br>
>><p>parent.removeChild(child);</p>

><p></script></p>

This removes the paragraph with __id="p1"__ from the page.

An alternative way of achieving the same result would be the use of the __parentNode__ property to get the parent of the element we want to remove:
><p>let child = document.getElementById("p1");</p>
><p>child.parentNode.removeChild(child);</p>

To replace an HTML element, the ``element.replaceChild(newNode, oldNode)`` method is used.
><p><div id="demo"></p>

>><p><p id="p1">This is a paragraph.</p></p>
>><p><p id="p2">This is another paragraph.</p></p>

><p></div></p>
><p><script></p>

>><p>let p = document.createElement("p");</p>
>><p>let node = document.createTextNode("This is new");</p><br>
>><p>p.appendChild(node);</p><br>

>><p>let parent = document.getElementById("demo");</p>
>><p>let child = document.getElementById("p1");</p><br>
>><p>parent.replaceChild(p, child);</p>

><p></script></p>

The code above creates a new paragraph element that replaces the existing p1 paragraph.

## Animations ##
<p>To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this by using the</p> setInterval()<p>`` method. This allows us to create a timer and call a function to change properties repeatedly at defined intervals (in milliseconds).
<p>``let t = setInterval(move, 500);</p><br>

<p>This code creates a timer that calls a __move()__ function every 500 milliseconds. Now we need to define the __move()__ function, that changes the position of the box.</p>

><p>let pos = 0; //starting position</p>
><p>let box = document.getElementById("box"); //our box element</p><br>
><p>function move() {</p>

>><p>pos += 1;</p>
>><p>box.style.left = pos+"px"; //px = pixels</p>

><p>}</p>

The __move()__ function increments the left property of the box element by one each time it is called. The following code defines a timer that calls the __move()__ function every 10 milliseconds:

><p>let t = setInterval(move, 10);</p>

However, this makes our box move to the right forever. To stop the animation when the box reaches the end of the container, we add a simple check to the __move()__ function and use the __clearInterval()__ method to stop the timer.
><p>function move() {</p>

>><p>if(pos >= 150) {</p>

>>><p>clearInterval(t);</p>

>><p>} else {</p>

>>><p>pos += 1;</p>
>>><p>box.style.left = pos+"px";</p>

>><p>}</p>

><p>}</p>

When the left attribute of the box reaches the value of 150, the box reaches the end of the container, based on a container width of 200 and a box width of 50. The final code:
><p>let pos = 0;</p>
><p>let box = document.getElementById("box"); //our box element</p>
><p>let t = setInterval(move, 10);</p><br>
><p>function move() {</p>

>><p>if(pos >= 150) {</p>

>>><p>clearInterval(t);</p>

>><p>} else {</p>

>>><p>pos += 1;</p>
>>><p>box.style.left = pos+"px";</p>

>><p>}</p>

><p>}</p>

## Handling Events ##

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

Corresponding events can be added to HTML elements as attributes.
><p><p click="someFunc()">some text</p></p>

an alert popup will show up when the user clicks a specified button:
><p><button onclick="show()">Click Me</button></p>
><p><script></p>

>><p>function show() {</p>

>>><p>alert("Hi there");</p>

>><p>}</p>

><p></script></p><br>

Event handlers can be assigned to elements as well.
><p>let x = document.getElementById("demo");</p><br>
><p>x.click = function () {</p>

>><p>document.body.innerHTML = Date();</p>

><p>}</p>

The load and unload events are triggered when the user enters or leaves the page. These can be useful when performing actions after the page is loaded.

><p><body load="doSomething()"></p>

Similarly, the window.load event can be used to run code after the whole page is loaded.
><p>window.load = function() {</p>

>><p>//some code</p>

><p>}</p>

The change event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.
><p><input type="text" id="name" change="change()"></p>
><p><script></p>

>><p>function change() {</p>

>>><p>let x = document.getElementById("name");</p><br>
>>><p>x.value= x.value.toUpperCase();</p>

>><p>}</p>

><p></script></p>

## So, when to use .on or click? ##

It is preferred __.on__ over __.click__ because the former can use less memory and work for dynamically added elements. Consider the following html:

><p><html></p>

>><p><button id="add">Add new</button></p>
>><p><div id="container"></p>

>>><p><button class="alert">alert!</button></p>

>><p></div></p>

><p></html></p>

where we add new buttons via:

>``$("button#add").click(function() {</p>

>><p>let html = "<button class='alert'>Alert!</button>";</p>
>><p>$("button.alert:last").parent().append(html);</p>

>``});</p>

and want "Alert!" to show an alert. We can use either "click" or "on" for that. When we use click:

><p>$("button.alert").click(function() {</p>

>><p>alert(1);</p>

><p>});</p>

with the above, a separate handler gets created for every single element that matches the selector. That means many matching elements would create many identical handlers and thus increase memory footprint
dynamically added items won't have the handler - ie, in the above html the newly added "Alert!" buttons won't work unless you rebind the handler.

When we use __.on__

><p>$("div#container").on('click', 'button.alert', function() {</p>
>><p>alert(1);</p>
><p>});</p>

with the above, a single handler for all elements that match your selector, including the ones created dynamically.

If you add a handler with ``.on("click", handler)`` you normally remove it with ``.off("click", handler)`` which will remove that very handler. Obviously this works only if you have a reference to the function, so what if you don't? You use namespaces:

><p>$("#element").on("click.someNamespace", function() {</p>

>><p>console.log("anonymous!");</p>

><p>});</p>

with unbinding via:

><p>$("#element").off("click.someNamespace");</p>
