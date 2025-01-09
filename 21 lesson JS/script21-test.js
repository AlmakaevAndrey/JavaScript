const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// --------------------------------

const fruits = ['apple', 'banana', 'cherry', 'date'];

let i = fruits.length - 1;

while (i >= 0) {
  console.log(fruits[i]);
  i--;
}

// --------------------------------

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = 0;

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
        evenCount++;
    }
}
console.log(evenCount);

// --------------------------------
// У вас есть массив объектов, где каждый объект представляет собой товар с полями
// `name` и `price`. Напишите цикл `for`, который выводит только те товары, цена 
// которых больше 100.

const products = [
    { name: 'Laptop', price: 1500 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 200 },
]

for (let i = 0; i < products.length; i++) {
    if (products[i].price > 100) {
        console.log(products[i].name);
    }
}
//---------------------

// Напишите цикл `while`, который ищет элемент в массиве и выводит его индекс, 
// если он найден. Если элемент не найден, выведите сообщение "Элемент не найден".

// const colors = ['red', 'green', 'blue', 'yellow'];
// const targetColor = 'blue';

// let j = 0;
// let foundColor = false;
// while (j < colors.length) {
//     if (colors[j] === targetColor) {
//         console.log(j);
//     foundColor = true;
//     break;
//     }
//     j++;
// }

// if (found) {
//     console.log('Элемент не найден');
// }

// НЕ ПОЛУЧИЛОСЬ ДАЖЕ СПИСАТЬ(

// -----------------------------------

// Напишите цикл `for`, который находит максимальное значение в массиве чисел и 
// выводит его в консоль.

const numbers2 = [3, 5, 7, 2, 8, 10, 6];

let max = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
}

console.log(max);

// -----------------------------------

const array = [4, 33, 2, 1];

for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - loop[1]`);
    
    for (let j = 0; j < array.length - 1 - i; j++){
        console.log(`${j + 1} - loop[1]; ${array[j]} > ${array[j + 1]}`);

        if (array[j] < array[j + 1]) {
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array);

const array2 = [4, 33, 2, 1];

console.log(array);
console.log(array2.sort((a,b) => a - b));
console.log(array2.sort((a,b) => a - b).reverse());