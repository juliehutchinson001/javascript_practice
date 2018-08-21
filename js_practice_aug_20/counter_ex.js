/*
 * To run babel in the command line, follow the command:
 * 
 * babel src/playground/counter-up.js --out-file=public/scripts/app.js 
    --presets=env,react --watch

*/


/* ------------------------------------------------ */ 

let counter = 0;

const addOne = () => {
    // console.log('addOne');
    counter += 1;
    renderCounterUp();
};

const subOne = () => {
    // console.log('minusOne');
    counter -= 1;
    renderCounterUp();
    
};

const reset = () => {
    // console.log('Reset');
    counter = 0;
    renderCounterUp();

};

const appRoot = document.getElementById('app');

const renderCounterUp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={addOne} id="my-id" className="button">+1</button>
            <button onClick={subOne} id="my-id" className="button">-1</button>
            <button onClick={reset} id="my-id" className="button">Reset</button>
        </div>    
    );    

    // console.log(templateTwo);

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterUp();