let d;
d = new Date(2028, 1, 13, 13, 23);
console.log(d); // Thu Jan 13 2028 13:23:00

// ---------

const years = Math.round(Date.now() / 1000 / 60 / 60 / 24 / 365);

console.log(years); // 54 в 2024 году

// -----------

const d1 = new Date();
const todayEN = d1.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    weekday: "long",
    day:"numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Minsk",
})
const todayRU = d1.toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    weekday: "long",
    day:"numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Minsk",
});

console.log(todayEN); // Wednesday, August 14, 2024 at 8:34 PM
console.log(todayRU); // среда, 14 августа 2024 г. в 20:34

// ------------------

const now = new Date();
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 1);
const diff = tomorrow - now;
const minutesBeforeTomorrow = Math.round(1000 /12);

console.log(minutesBeforeTomorrow); // ??

//  --------

const lastNumberOfMonth = new Date(2024, 2, 0);
console.log(lastNumberOfMonth);
