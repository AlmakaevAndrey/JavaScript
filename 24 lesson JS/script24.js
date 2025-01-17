// Обьекты, методы, декструктуризация, for in , строгий режим (strict mode)
"use strict"

const log = console.log;

// --------------------------
// for in (цикл по объекту)
const user = {
    id: 4,
    name: "Alena",
    age: 25,
    position: "Developer",
    address: {
        country: "Australia",
        city: "Sydney"
    }
}

for (const key in user) {
    // log(`New user -> ${key}: ${user[key]}`);
}

// log(Object.keys(user));

for (const key of Object.keys(user)) {
    // log(`New user -> ${key}: ${user[key]}`);
}

// ------------- деструктизая, деструктурируемые присваивание -------------

const { name, age, ...restProps } = user;

// log(name, age, restProps);

const newUser = {
    ...user
}

// log(newUser);
// log(newUser === user);
newUser.name = "Alex";

newUser.address.city = "Melbourne";


// log(newUser, user);

const obj1 = { a: 10, b: 20};
const obj2 = { c: 30, d: 40};

const obj3 = {
    ...obj1,
    ...obj2,
    a: 100,
    e: 50
}

// log(obj3);

const obj4 = Object.assign({}, obj1, obj2);

// log(obj4)

// ------ Методы -------

let x = Object.keys(user);

x = Object.values(user);
x = Object.values(user.address);

x = Object.entries(user);

x = Object.hasOwn(user, "address");
x = Object.hasOwn(user, "skills");

x = "address" in user;

log(x);

Object.freeze(user);

user.name = "Olga";
delete user.name;

log(user);

function example (a, a) {
    return a;
}