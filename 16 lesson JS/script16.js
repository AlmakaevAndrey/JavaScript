// functions - base

const log = console.log;

// Объявление функции
function sayHello(){
    log("Hello my friends!!!")
}

sayHello();
sayHello();
sayHello();

// ---------------------------
function sum(num1, num2) {
    log(num1 + num2);
}

sum(10, 20);
sum(100, 200);

// ------------
function doNothing() {}

// Возвращение числа
function add(num1, num2) {
    return num1 + num2;
    log("После return не вызовется!");
}

// log (add(50, 100));
const result = add(50, 100);

log("Результат:", result);

function getRandomValue() {
    return Math.ceil(Math.random() * 100);
}

    console.log(getRandomValue())