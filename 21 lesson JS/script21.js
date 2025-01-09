// Циклы, for, while
const styles = `background: lightsalmon`;
const log = console.log;

// ---------- For --------------

const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];

log("1: ", cars[0]);
log("2: ", cars[1]);
log("3: ", cars[2]);
log("4: ", cars[3]);
log("5: ", cars[4]);

/*
 for (стартовое выражерние (начало); условное выражения (условие);
 инкремент или декремент (на каждом шаге (итерация))) {
     // Логика на каждом шаге(итерация)
 }
*/

//  for (let i = 0; i <= 5; i++) {
//     log("-->", i);
//  }


// let i = 0;
// for (; i < 5; i++) {
//     log("-->", i);
// }


// let i = 0;
// for (; i < 5;) {
//     log("-->", i++);
// }

// let i = 0;
// for (;;) {
//     log("Вечный цикл");
// }

// ---------------

// for (let i = 0; i < cars.length; i++) {
//     log(`${i+1} ${cars[i]}`);
// }

// for (let i = cars.length - 1; i >= 0; i--) {
//     log(`${i+1} ${cars[i]}`);
// }

// -----------------------

// for (let i = 0; i < cars.length; i++){
//     if (cars[i] === "mercedes") continue;
//     log(`${i+1} ${cars[i]}`);
// }

// for (let i = 0; i < cars.length; i++){
//     if (cars[i] === "mercedes") break;
//     log(`${i+1} ${cars[i]}`);
// }

// ---------------
const users = [
    { id: 1, name:"Alex", age: 35, position: "manager"},
    { id: 2, name:"Elena", age: 25, position: "qa"},
    { id: 3, name:"Jack", age: 20, position: "developer"},
]

for(let x = 0; x < users.length; x++) {
    console.group(`Employee ${x + 1}`);
    log(`Name: ${users[x].name}`);
    log(`Age: ${users[x].age}`);
    log(`Position: ${users[x].position}`);
    console.groupEnd();
}
// ---------------
// 1) Вычислить сумму всех чисел

const numbers1 = [1, 2, 3, 4, 5];

let sum = 0;
// sum = numbers1[0] + numbers1(1);
for (let i = 0; i < numbers1.length; i++) {
    // sum = sum + numbers1[i];
    sum += numbers1[i];
}
log(sum);

// ---------------
// 2) Посчитать коллю четных чисел в массиве

// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenCount = 0;

// for (let i = 0; i < numbers2.length; i++) {
//     if (numbers2[i] % 2 === 0) {
//         evenCount++;
//     }
// }
// log(evenCount);

// // ---------------
// for (let i = 0; i < 3; i++) {
//     log(`%c${i + 1} - loop[1]`, styles);

//     for (let j = 0; j < 3; j++){
//         log(`${j + 1} - loop[1]`,);
    
//     }
// }
// // -------------------
// let i = 0;
// while (i < cars.length) {
//     log(`while - ${i + 1}`);
//     i++;
// }

// while (true) {
//     break;
// }

// let i = 0;

// while (true) {
//     log("while(true");
//     if ( i >= 10) {
//         log(`i = ${i}`);
//         break
//     }
//     i++;
// }

// --------------------------
// do - while

let i = 0;
do {
    log(`do-while - ${i + 1}`);
    i++;
} while(i < cars.length);
// --------------------------

// 3) Отсортируйте массив пузырькововй сортировкой

const array = [4, 33, 2, 1];

for (let i = 0; i < array.length; i++) {
    log(`%c${i + 1} - loop[1]`, styles);
    
    for (let j = 0; j < array.length - 1 - i; j++){
    log(`${j + 1} - loop[1]; ${array[j]} > ${array[j + 1]}`);

        if (array[j] < array[j + 1]) {
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

log(array);

const array2 = [4, 33, 2, 1];

log(array);
log(array2.sort((a,b) => a - b));
log(array2.sort((a,b) => a - b).reverse());
