/*
Arrays - Methods
forEach, indexOf, lastIndexOf, find, findIndex,
some, every, slice, splice, toSpliced,
filter, map, reduce
*/

const log = console.log;

const skills = ["html", "css", "scss", "js", "git", "ts", "react", "css"];


// ----- Перебор массива ------

// --- forEach (перебирает массив как for, for of) ---

// skills.forEach((value) => log(value));
// skills.forEach((value, index) => log(value, index));
// skills.forEach((value, index, thisArr) => log(value, index, thisArr));

const logValues = (value) => log(value);

function logValuesFn(value) {
    log(value)
}

// skills.forEach(logValuesFn);

// --- Поиск в массиве ----

// indexOf, lastIndexOf (возвращает индекс элемента)

// log(skills.indexOf("js"));
// log(skills.indexOf("js", 2));
// log(skills.indexOf("js", 4)); // -1

// log(skills.indexOf("css"));
// log(skills.lastIndexOf("css"));

// log(skills.indexOf("git"));
// log(skills.lastIndexOf("git"));

// -- some, every (возвращение true/false усли по условию 
// элемент/элементы = найдены/не найдены)

const isJs = skills.some((value) => value === "js");
// log(isJs);

const phones = [{
        id: 1,
        title: "samsungA50"
    },
    {
        id: 2,
        title: "iphone10"
    },
    {
        id: 3,
        title: "nokia3310"
    },
    {
        id: 4,
        title: "xiaomi"
    },
]

const everyHasTitles = phones.every((phone) => "title" in phone);
const someHasTitles = phones.some((phone) => "title" in phone);

// log(everyHasTitles);
// log(someHasTitles);

// -- Find -- возвращиет первый найденый элемент по условию (findIndex)

const nokia = phones.find((phone) => phone.title === "nokia3310");

// log(nokia);

const nokiaIndex = phones.findIndex((phone) => phone.title === "nokia3310");
// log(nokiaIndex);

// -- filter -- похож на Find, только возвращает все элементы подходящие по условию.

const filteredSkills = skills.filter((skill) => skill.includes("c"));
// log(filteredSkills);

const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num % 2 === 0);
// log(evenNumbers);

const clients = [{
        id: 1,
        level: 3,
        name: "Lucy",
        status: "online"
    },
    {
        id: 2,
        level: 1,
        name: "Rick",
        status: "offline"
    },
    {
        id: 3,
        level: 3,
        name: "Jack",
        status: "online"
    },
    {
        id: 4,
        level: 2,
        name: "Helen",
        status: "online"
    },
    {
        id: 5,
        level: 1,
        name: "Alice",
        status: "offline"
    },
    {
        id: 6,
        level: 1,
        name: "Derek",
        status: "offline"
    },
    {
        id: 7,
        level: 3,
        name: "Megan",
        status: "online"
    },
];

const clientsWithHightLevel = clients.filter(clients => clients.level === 3);

// --- Добавление элементов ---

// Slice - возвращает новый массив , в который копирует все элемиенты с индекса
// start до end

const newPhones = phones.slice(0, 2);
// log(newPhones);

delete phones[nokiaIndex];
// log(phones);

/*
splice - изменяет массив, умеет добавлять, удалять и заменить элементы
*/

// log(phones.splice(nokiaIndex, 1));
// log(phones);
// log(phones.splice(1, 0, {id:5, title: "iphone16"}));
// log(phones);

// const phones2025 = phones.toSpliced();
const phones2025 = phones.toSpliced(2, 1, {
    id: 5,
    title: "iphone16"
});

// log(phones2025);

// --- Преобразование элементов ---

const str = "hello";
// log(str.split("").reverse().join(""));

// map

// const clientNames = clients.map(client => client.name);
const clientNames = clients.map(client => {
    return client.name;
});
log(clientNames);

const clientNameAndStatuses = clients.map(client => {
    return {
        name: client.name,
        status: client.status
    }
}).map(client => {
    if (client.status === "online") {
        client.status = "Online";
    } else {
        client.status = "offline";
    }

    return client;
}).filter(c => c.status.startsWith("on"));

// log(clientNameAndStatuses);

/* reduce
используется для вычисления единого значения на основе всего массива

arr.reduce((accumulator, item, index, array) =>) {
    // ...
}, [intial]);
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumAllNumbers = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0)

// const sumAllNumbers = numbers.reduce((s, v) => s + v, 0);

// log(sumAllNumbers);

const books = [
    {id: 1, title: "Гарри Поттер", price: 59, category: "fantacy"},
    {id: 2, title: "Чистый код", price: 189, category: "science"},
    {id: 3, title: "Темная башня", price: 149, category: "fantacy"},
    {id: 4, title: "Грокаем алгоритмы", price: 173, category: "science"},
    {id: 5, title: "Мернрпоточный JavaScript", price: 79, category: "science"},
];

const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

log(totalPrice);

// {
//     fatacy: 2,
//     science: 3,
// }

const categoryMap = books.reduce((res, book) => {
    if (book.category in res) {
        res[book.category]++;
    } else {
        res[book.category] = 1;
    }
    return res;
}, {});
log(categoryMap);