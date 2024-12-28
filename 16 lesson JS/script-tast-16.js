function getRandomValue() {
    return Math.ceil(Math.random() * 100);
}

console.log(getRandomValue())


function getMaxValue(num1, num2, num3, num4, num5) {
    return Math.max(num1, num2, num3, num4, num5);
}

console.log(getMaxValue(2, 5, 99, 23, 101))


function getCurrentDayOfWeek(currentDate) {
    const day = currentDate.getDay();
    switch (day) {
        case 0:
            console.log("Воскресенье");
            break;
        case 1:
            console.log("Понедельник")
            break;
        case 2:
            console.log("Вторник");
            break;
        case 3:
            console.log("Среда");
            break;
        case 4:
            console.log("Четврг");
            break;
        case 5:
            console.log("Пятница");
            break;
        case 6:
            console.log("Суббота");
            break;
        default:
            console.log("Некорректный ввод");
            break;
        }
}
