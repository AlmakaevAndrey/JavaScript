function greet(name, callback) {
    return callback(name);
}

function sayHello(name) {
    return `Hello,${name}!`;
}

console.log(greet("Ekaterina", sayHello)); // "Hello, Ekaterina!"






const double = (num, callback) => {
    return callback(num * 2);
}
const displayResult = (result) => {
    return`Result is ${result}`;
}

console.log(double(14, displayResult)); // "Result is 10"


const processString = (str, callback) => callback(str);

const makeUpperCase = str => str.toUpperCase();
console.log(processString("hello", makeUpperCase)); // "HELLO"
