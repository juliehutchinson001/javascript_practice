let unique = ['George', 'Washington', 'John', 'Adams'];

function transformFirstAndLast(array) {
    let first = array[0];
    let last = array.slice(-1)[0];
    const newObject = {
        [first]: last
    };
    return newObject;
}

console.log(transformFirstAndLast(unique));