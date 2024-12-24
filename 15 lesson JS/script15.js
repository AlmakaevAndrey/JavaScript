/*
 Конструкция switch заменяет собой сразу несколько if.

 Это более наглядный способ сравнить выражение сразу с несколькими вариантами.
 */

 const log = console.log;

 const x = 5 + 5;

 switch(x) {
    case 3:
        log("Мимо!");
        break;
    case 6:
        log("Еще нет!");
        break;
    case 10:
        log("Правильно!");
        break;
    default:
        log("Нет ответа!");
}

// ----------------

// const num = prompt("Введите число от  1 до 10!");
const num = (0);

switch(num) {
    case "0":
    case "1":
    case "2":
        log("Числа:0 / 1 / 2 ");
        break;
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
        log("Числа: 3 - 7");
        break;
    case 7:
        log("Мы сюда не попадем, так как число");
        break;
    default:
        log("Нет ответа!")
}

// ------------------

const today = new Date();
// const today = new Date(2024, 0, 1);
const month = today.getMonth();

switch(month) {
    case 0:
        log("Январь");
        break;
    case 1:
        log("Февраль");
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        log("Март - Июль");
        break;
    case 7:
        log("Август");
        break;
    case 8:
    case 9:
    case 10:
    case 11:
        log("Сентябрь - Декабрь");
        break;
    default:
        log("Без даты!");
}

const hour = today.getHours();

log(hour);

switch(true){
    case hour < 12:
        log("Доброе утро!");
        break;
    case hour < 18:
        log("Доброе день!");
        break;
    case hour < 22:
        log("Доброе вечер!");
        break;
    default:
        log("Доброй ночи!");
}

const age = 13;
switch (true) {
case (age > 0 && age <= 12):
    console.log("Ребёнок");
    break;
case (age >= 13 && age <= 17):
    console.log("Подросток");
    break;
case (age >= 18 && age <= 64):
    console.log("Взрослый");
    break;
case (age >= 65):
    console.log("Пожилой человек");
    break;
default:
    console.log("Некорректный ввод");
    break;
}
