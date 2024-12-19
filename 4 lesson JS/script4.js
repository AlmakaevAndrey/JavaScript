// 8 типов данных
// number, bigIn, string, boolean, undefined, null, object, symbol

// Number
const age = 25;
console.log(typeof age);

// String
const firstName = "Almakaev";
console.log(typeof firstName);

// bigint
const bigNumber = 1231321321321321321321n;
console.log(typeof bigNumber);

// boolean
const isActive = true;
const isConfirmed = false;
console.log(typeof isActive);

// null
const city = null;
console.log(typeof city);

// undefined 
let isLoading;
console.log(isLoading);
console.log(typeof isLoading);
// isLoading = undefined;
isLoading = false;
console.log(isLoading);

// symbol
const id = Symbol('123');
console.log(typeof id);

// Ссылочные типы
// object
const person = {
    name: "Sasha",
    age: 20,
    id: id,
    isActive: isActive
}

console.log(typeof person);
console.log(person);

// Array
const numArr = [1,2,3,4,5];
console.log(numArr);
console.log(typeof numArr);

// function
function info() {
    return "Hello world!";
}

console.log(typeof info);

// ------
console.log(Number.prototype);
console.log(Object.getOwnPropertyNames(Number.prototype));
