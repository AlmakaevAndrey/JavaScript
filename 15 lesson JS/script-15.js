// const number = Number(prompt('Введите число между 0 и 3', ''));

// if (number === 0) {
//  console.log('Вы ввели число 0');
// }

// if (number === 1) {
//  console.log('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//  console.log(' Вы ввели число 2, а может и 3');
// }

// switch (number) {
//     case 0:
//         console.log('Вы ввели число 0');
//         break;
//     case 1:
//         console.log('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         console.log( 'Вы ввели число 2, а может и 3');
//         break;
//     default:
//         console.log('Ничего не подходит');
// }

const day = new Date().getDay();

switch (day) {
    case 0:
        console.log("Воскресене");
        break;
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    default:
        console.log("Некорректный ввод")
        break;
}
console.log(day);


const age = 13;
switch (true) {
    case (age >= 0 && age <= 12):
        console.log("Ребёнок");
        break;
    case (age >= 13 && age <= 17):
        console.log("Подросток");
        break;
    case (age >= 18 && age <= 64 ):
        console.log("Взрослый");
        break;
    case (age >= 65):
        console.log("Пожилой человек");
        break;
    default:
        console.log("Некорректный ввод");
        break;
}