// functions - callback, life, arrow functions

const log = console.log;

function greeting() {
    // log("Hello my friends!")
}

function showGreeting(callback) {
    callback();
}

showGreeting(greeting);

// ------------

function getInfo(name, age) {
    return `Name: ${name}; Age: ${age}`;
}

function getInfoWithCurrentDate(cb) {
    const now = new Date();

    // log(`Today: ${now.toISOString()}; \n ${cb("Andrey", 25)}`); 
}

getInfoWithCurrentDate(getInfo);

// --------------------

function survey(question, agreedFn, disagreeFn) {
    if (confirm(question)) {
        agreedFn();
    } else {
        disagreeFn();
    }
}

// survey(
//     "Ты мой друг?",
//     function () { log("Ты согласился что ты мой друг!")},
//     function () { log("Ты согласился что не ты мой друг!")},
// )

// ------ Стрелочные функции (arrow functions) -------

const sum = (a, b) => {
    return a + b;
}

log(sum(10, 20));

const multiplacation = (a, b) => a * b;

log(multiplacation(10, 100));

const showName = name => `Name: ${name}`;

log(showName("Anton"));

// ------------ IIFE --------------

// Immediately-invoked function expressions

// function () {
//     log("...")
// }

(function () {
    var message = "Hello";
    log(message);
})();

// log(massage);

(function (name) {
    var message = "Hello";
    log(message, name);
})("Anna");
