import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
    message = (
        <h1>Hey, check out this alcoholic beverage!</h1>
    );
} else {
    message = (
        <h1>Hey, check out these earrings I got at Claire's!</h1>
    );
}


const underage = `Hey, check out these earrings I got at Claire's!`;
const adult = `Hey, check out this alcoholic beverage!`;
const message2 = user.age >= drinkingAge ? <h1>{adult}</h1> : <h1>{underage}</h1>;



ReactDOM.render(
    message2,
    document.getElementById('app')
);