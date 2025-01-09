const users = [{
        id: 1,
        name: "Alex",
        age: 35,
        position: "manager"
    },
    {
        id: 2,
        name: "Kate",
        age: 22,
        position: "qa"
    },
    {
        id: 3,
        name: "Nikita",
        age: 29,
        position: "developer"
    },
];

for (const user of users) {
    console.log(`user -> ${user.id} ${user.name} ${user.name} ${user.position}`);
}

// --------------------------

const numbers = [3, 5, 77, 81, 99, 12, 90, 119, 4];

console.log(numbers.sort((a, b) => a - b));

console.log("reverse", numbers.reverse());

// ----------------------

const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];

const transformIntoString = (separator = ",") => {
    return cars.join(separator);
}

const newCars = transformIntoString("--");
console.log(newCars);

// ----------------

const cars1 = ["audi", "ford", "mercedes", "mazda", "tesla"];

const addNewCar = (car) => {
    if (!cars1.includes(car)) {
        cars1.push(car);
    }
}
addNewCar("volvo");
addNewCar("audi");

console.log(cars1);

// -------------------------------
const calcSum = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(calcSum(1)); // 1
console.log(calcSum(1, 2, 3, 4, 5)); // 15
console.log(calcSum(1, 2, 3)); // 6
console.log(calcSum(1, 2, 3, 100, 200, 500, 0)); // 806

// ------------------------
const combineArrays = (...arrays) => {
    const newArray = [];

    for (let i = 0; i < arrays.length; i++) {
        newArray.push(...arrays[i]);
    }

    return newArray.join();
}
combineArrays([1], [2, 3], [4, 5, 6]);
combineArrays(["Hello"], ["friends", "!"], [4, 5, 6], [99, "=)"]);

// -------------------

const usePerson = (initialValue = {}) => {
    const person = initialValue;

    const changePerson = (newPerson = {}) => {
        if ("name" in newPerson) {
            person.name = newPerson.name;
        } else {
            person.name = undefined;
        }

        if ("age" in newPerson) {
            person.age = newPerson.age;
        } else {
            person.age = undefined;
        }
    };

    return [person, changePerson];
}

const [person, setPerson] = usePerson({
    name: "Alex",
    age: 23
});
console.log(person); // { name: "Alex", age: 23 }

setPerson({
    name: "Marina",
    age: 25
});
console.log(person); // { name: "Marina", age: 25 }

setPerson({
    name: "Kate",
    age: 28
});
console.log(person); // { name: "Kate", age: 28 }

setPerson({
    name: "Nik"
});
console.log(person); // { name: "Nik", age: undefined }

setPerson({});
console.log(person); // { name: undefined, age: undefined }