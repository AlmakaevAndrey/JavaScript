// Arrays - Массивы
/*
Если необходима упорядоченная коллекция данных, в который присутсвует 1-й,
2-й, 3-й элементы и т.д. Наприимер, для хранения списка пользователей,
товаров, элементов и т.п.

В это случае использовать объект неудобно , так как он не представляет
методов управления порядком элементов. Нельзя вствить новое свойство 
"между" уже существующими. Объекиы просто не предназначены для этих целей.

Для хранения упорядоченых коллекций существет особая структура данных,
которая называется массивю
*/

const log = console.log;

// const arr = [];
// const arr = new Array();

const numbers = [1, 10, 33, 45, 99, 130];
const arrayMix = [1, 2, "hello", true, undefined, null, {}, {}];

log(numbers);
log(numbers[0]);
log(numbers[1]);
log(numbers[2]);

log(arrayMix);
log(typeof numbers);

// ------------

let x = numbers[5];
log(x);
x = numbers[5] + numbers[1];

log(x);

// -----------

numbers[5] = 1000;
log(numbers[5]);
log(numbers.length);

// -

const newArray = new Array(1, 2,3, 4, "HELLO");
log(newArray);

// ----------------
const copiedArray = numbers;
log(copiedArray === numbers);

copiedArray[0] = 999;
log(copiedArray === numbers);
log(copiedArray[0], numbers[0]);

// --------------------

numbers.unshift(1111);
numbers.push(777);
numbers.push(888);
log(numbers);

numbers.shift();
log(numbers);
numbers.pop();
log(numbers);


const lastValue =  numbers.pop();
log(numbers);
log(lastValue);