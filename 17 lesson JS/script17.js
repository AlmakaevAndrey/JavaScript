// Functions - scope, default values, declaration vs expression

const log = console.log;

// ------------- Function Declaration vs Function expression -------------

// greeting();

// function greeting() {
//     log("Hello friends!")
// }

// greeting();

// greetingFn();

// const greeningFn = function greeting(){
//     log("Hello friends!(2)")
// }
// greetingFn();

// -------- Scope (облость видимости) -------------

// Глобальная область видимости (global scope)
const num1 = 10;

{
    const num2 = 20;
    log(num1);
    log(num2);
    var num3 = 100; // var - error
}

// log(num1);
// log(num2); // error
log(num3);

function showScopeExample() {
    const num4 = 1000;
    log("showScopeExample", num1, num4);

    function nestedFn() {
        const num5 = 3000;
        log("nestedFn", num4, num5);
    }

    nestedFn();
}
showScopeExample();

// ---------- Default values - Значения по умолчанию -----------

// function formatGreeting (name, emoji = "") {
//     log(`Hello ${name} ${emoji}`);
// }

function formatGreeting (name, emoji = "🐺") {
    return`Hello ${name} ${emoji}`;
}

log(formatGreeting("Andrey", "🚀"));
log(formatGreeting("Andrey",));

// const formattedGreeting = formatGreeting("Andrey","🦇");
const formattedGreeting = formatGreeting;

log(formattedGreeting("Andrey","🦇"));

function  greet(name, greet = "Hello"){
    return`Hello ${name} ${greet}`;
}
 
console.log(greet("Alice")); // Вывод: "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // Вывод: "Good morning, Bob!"
