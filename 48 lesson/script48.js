// ----------promise------

// const promise = new Promise ((resolve, reject) => resolve("Hello"));
// promise.then((message) => console.log(message))

// const promise = new Promise ((resolve, reject) => reject("Error!!"));
// promise.then(
//     (message) => console.log(message),
//     (error) => console.log(error)
// );

// const promise = new Promise ((resolve, reject) => reject(new Error("Error!!")));
// promise.then(
//     (message) => console.log(message),
//     (error) => console.error(error.message)
// );

//----------then, catch, finally ---

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const success = true;

//         if(success) {
//             resolve("Операция выполнена успешно")
//         } else {
//             reject("Произошла ошибка")
//         }
//     }, 2000)
// })

// myPromise
// .then((res) => console.log(res))
// .catch((error) => console.error(error))
// .finally(() => console.log("Завершение операции"));

// ------------- Ассинхронный запрос ------------------

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id:1, name: "Andrey"};
//             reject(data)
//         },1000)
//     })
// }

// fetchData()
//     .then((data) => {
//         console.log("Получение данных:", data);
//     })
//     .catch((error) => console.error(error))

// ------------ Цепочка промиссов ------------

const step1 = new Promise((res) => setTimeout(() => res("шаг 1 выполнен"), 1000));
const step2 = new Promise((res) => setTimeout(() => res("шаг 2 выполнен"), 2000));
const step3 = new Promise((res) => setTimeout(() => res("шаг 3 выполнен"), 3000));


// step1
// .then((result) => {
//     console.log(result);
//     return step2;
// })
// .then((result) => {
//     console.log(result);
//     return step3;
// })
// .then((result) => {
//     console.log(result);
//     console.log("Все шаги выполнены");
// })
// .catch((error) => console.error(error))

// ------- методы ------

// const step4 = new Promise((_, rej) => setTimeout(() => rej("шаг 4 сломался"), 1000));

// Promise.all([step1, step2, step3, ])
//     .then((result) => {
//         console.log("[Promisee.all]", result);
//     })
//     .catch((error) => console.error(error))

// -------- Promise.allSettled -----------

const step4 = new Promise((_, rej) => setTimeout(() => rej("шаг 4 сломался"), 800));

Promise.allSettled([step1, step2, step3, step4])
    .then((result) => {
        console.log("[Promisee.allSettled]", result);
    })
    .catch((error) => console.error(error))

// -------- Promise.any -----------

Promise.any([step1, step2, step3, step4])
    .then((result) => {
        console.log("[Promisee.any] Выполнен первый:", result);
    })
    .catch((err) => {
        console.error("[Promisee.any] Ошибка в одном из обещаний:", err)
    })

// -------- Promise.race -----------

Promise.race([step1, step2, step3, step4])
    .then((result) => {
        console.log("[Promisee.race] Выполнен первый:", result);
    })
    .catch((err) => {
        console.error("[Promisee.race] Ошибка в одном из обещаний:", err)
    })