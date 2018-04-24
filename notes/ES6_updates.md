# Syntax

## Hoisting

>- Hoisting is a result of how JavaScript is interpreted by your browser. Essentially, before any JavaScript code is executed, all variables are "hoisted", which means they're raised to the top of the __function scope__. So at run-time, the `getClothing()` function actually looks more like this…

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

>- Variables declared with let and const eliminate this specific issue of hoisting because they’re __block-scoped__, not to the function. Previously, when you used var, variables were either scoped globally or locally to an entire function scope.
>- If a variable is declared using let or const inside a block of code (denoted by curly braces { }), then the variable is stuck in what is known as the temporal dead zone until the variable’s declaration is processed. This behavior prevents variables from being accessed only until after they’ve been declared.

### Rules for using let and const

>- Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
>- Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.
>- use let when you plan to reassign new values to a variable, and
>- use const when you don’t plan on reassigning new values to a variable.
>- Since const is the strictest way to declare a variable, the identifiers won't change throughout the lifetime of your program. If you need to update a variable or change it, then go with let.

### What about var?\

>- var is used in situations where you want to globally define variables, but this is often considered bad practice and should be avoided.