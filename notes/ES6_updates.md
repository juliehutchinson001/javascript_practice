# Syntax

## Hoisting

>- Hoisting is a result of how JavaScript is interpreted by your browser. Essentially, before any JavaScript code is executed, all variables are "hoisted", which means they're raised to the top of the function scope. So at run-time, the `getClothing()` function actually looks more like this…

```javascript
function getClothing(isCold) {
    var freezing, hot;
    if (isCold) {
        freezing = "Grab a jacket!";
    } else {
        hot = "It's a shorts kind of day.";
        console.log(freezing);
    }
}
```

## Let and Const

>- Hello