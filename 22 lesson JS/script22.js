// arrays (массивы) - for of, методы, декструктизация, spread, rest
const styles = `background: lightsalmon;`
const log = console.log;

const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];

const users = [
    { id: 1, name:"Alex", age: 35, position: "manager"},
    { id: 2, name:"Kate", age: 25, position: "qa"},
    { id: 3, name:"Nikita", age: 20, position: "developer"},
];

// for of (цикл по массиву)

for (const car of cars) {
    // log(`Car -> ${car}`);
}

for (const user of users) {
    // log(`user -> ${user.name} ${user.name} ${user.position}`);
}

// ---------- Методы -----------


const numbers1 = [4, 33, 2, 1];

// log(numbers1.sort());
// log(numbers1.sort((a,b) => a - b));

// log("reverse", numbers1.reverse());
// log(numbers1);

const numbers2 = [4, 33, 2, 1]

// log(numbers2.toSorted((a,b) => a - b));
// log(numbers2);

const newNumbers2 = numbers2.toSorted((a,b) => a - b);
// log(newNumbers2);

// log(numbers2.toSorted((a,b) => a - b).toReversed())

// -----------------------------

const newCars = ["nissan", "volvo"];

const allCars = cars.concat(newCars);


// log(allCars);
// log(allCars.toString());
// log(allCars.join());
// log(allCars.join(", "));

// ----------------------------

const nestedArrays = [1, 2, [3,4], [5,6], [7, [8,9], 10]];

// log(nestedArrays[1]);
// log(nestedArrays[2][0]);
// log(nestedArrays[3][1]);
// log(nestedArrays[4][1][0]);

// log(nestedArrays.flat());
// log(nestedArrays.flat(2));
// log(nestedArrays.flat(Infinity));

// -------------------------

log(cars.includes("audi"));
log(cars.includes("lada"));

log("Hello world!".includes("lo"));

log(cars.at(1));
log(cars.at(-1));

// ------- static methods (статические методы обёекта.класса Array) ---------
const num = 123;

log(Array.isArray(num));
log(Array.isArray(cars));

const arrayOf = Array.of(1, 2, "hello");
log(arrayOf);

const arrayFrom = Array.from("12345");
log(arrayFrom);

// ------- Деструктизация ---------

const names = ["Alex", "Mike", "Angelina"];
const names2 = ["Kate"];

// const nameAlex = names[0];
// const nameMike = names[1];

const [nameAlex, nameMike] = names;
const [nameKate, nameOlga = "Olga"] = names2;

log(nameAlex, nameMike);
log(nameKate, nameOlga);

// const [counter, setCounter] = useState(0);

// ------ spread (оператор расширения)------------------
const allNames = [...names, "Nik", ...names2];
log(allNames);

const strHello = "Hello";
log([...strHello])
const allNumbers = [1, 55, 9, 33, 123, 765, 0, 3, 4];

log(Math.max(...allNumbers));

// ---------- rest (Остаточные параметры) ----------------

const sum = (...numbers) => {
    let sum = 0;

    for (const value of numbers) {
        sum += value;
    }

    return sum;
}

log(sum(1, 2, 3, 4, 5, 6, 7));

const [firstName, ...restNames] = names;

log(firstName, restNames);

// const fn = (arg1, ...rest, arg2) +> {
    // error
// }

const getTitleAndDescription = (title, ... description) => {
    log(`%c${title}, styles`);

    for (const value of description) {
        log(`- ${value}📢`)
    }
}

getTitleAndDescription("JavaScript", "Язык програмирования",
"На нем иожно кодить фронт и бэк, моб. приложенияб игрыб декстопные программыб",
"Гибкий и очень популярный");