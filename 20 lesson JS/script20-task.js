const fruits = ["Apple", "Banana", "Orange", "Grape"];

console.log(fruits[0]);
console.log(fruits[3]);

// У вас есть массив `colors`, который содержит названия нескольких цветов.
//  Добавьте в конец массива новый цвет и удалите первый элемент массива. 
//  Выведите обновленный массив в консоль.

const colors = ["Red", "Green", "Blue"];
colors.push("White");
colors.shift();
console.log(colors); // ["Green", "Blue", "Yellow"]


const statuses = [
    {id: 1, status: "Active" },
    {id: 2, status: "Pending" },
    {id: 3, status: "Decline" },
];
statuses[0].message = "Активен" ;
statuses[1].message = "Ожидается ответ";
statuses[2].message = "Отказано";

statuses.push({
id: 4,
status: "Complete",
message: "Завершено"
})

console.log(statuses)