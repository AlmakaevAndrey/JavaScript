// Date & Time
// обьект Date - содержит дату и время, также методы управления ими.

const log = console.log;

let d = new Date();

d = new Date(0);

d = Date.now();

/* Объект Date с временем равным колличеству
миллисекунд (тысяча доля секунды),
прошедших с 1 января 1970 года UTC+0
Целое число, представляющее собой 
колличество миллисекунд, прошедших с начала 1970 года
называется таймстамп (timestamp).*/

d = new Date(2024, 0, 15, 9, 30, 33);

d = new Date("2024-12-24");
d = new Date("2024-12-24 20:30");
d = new Date("2024-12-24 20:30");

d = new Date("12-24-2024");
d = new Date("2024-12-24T00:00:00")

d = d.getTime();

d = Math.round(Date.now() / 1000 / 60 / 60 / 24 / 365); // прошло лет с
// 1.01.1970 года

// ------------ Методы --------------

d = Date.parse("2024-12-24T00:00:00");

d = new Date();

// Сеттеры (установщики)

// d.setDate(1);
// d.setDate(31);
// d.setDate(0);
// d.setDate(-3);

d.setHours(0);
d.setMinutes(0);
d.setSeconds(0);
d.setFullYear(2025);
d.setFullYear(2024, 10);

d1 = new Date();

// log(d1, "", d);
// log(d1.getTime());
// log(d.getTime());
// log((d.getTime() - d1.getTime()) / 1000 / 60 / 60 / 24);

// геттеры (получатели)

d = new Date();

// log(d.getDate());
// log(d.valueOf());
// log(d.getFullYear());
// log(d.getMonth());
// log(d.getMonth() + 1);
// log(d.getDay());
// log(d.getHours());

// представление даты

d = new Date();

let date = Intl.DateTimeFormat("default").format(d);
date = Intl.DateTimeFormat("en-GB").format(d);
date = Intl.DateTimeFormat("ru-RU").format(d);

date = Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    // year: "numeric",
    year: "2-digit"
}).format(d);

date = d.toLocaleString("ru-RU", {
    minute: "2-digit",
    hour: "numeric",
    day: "numeric",
    month: "long",
    year: "2-digit",
    // timeZone: "Europe/Moscow",
    // timeZone: "Australia/Sydney",
    timeZone: "Europe/Minsk",
})

log(date);

// ------------- UTC vs ISO --------------
// UTC (Coordinated Universal Time)
/*
UTC (координальнное универсальное время) - это стандарт времени, который
используеться по всему миру.

--> UTC: Подходит для отображения даты и времени в текстовом виде, когда 
вожна читаемость.
*/

/*
ISO (International Organization for Standardization)
ISO 8601 - это международный стандарт для представления дат и времени.

--> ISO: Предпочтительно использовать для хранения данных и передачи 
между системами,так как формат строгий и однозначный.
*/

const now = new Date();

console.group("UTC & ISO");
log(now.toUTCString());
log(now.toISOString());
console.groupEnd();