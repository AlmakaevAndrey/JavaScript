// Object - обьекты
/*
Свойства - это пара "ключ": значение, где ключ - это строка (также
нызываемая именем свойства), а значение может быть чем угодно.
*/

const log = console.log

const hobby = "hobby";
const id = "123#sad1";

// const p = new Object{}
const person = {
    name: "Andrey",
    age: 25,
    isDeveloper: true,
    address: {
        country: "Poland",
        city: "Gdansk",
        street: "Main street 10s"
    },
    0: "just 0",
    "last name": "Miracle",
    greet: function(){
        log("Hello i am Andrey")
    },
    greetSecond: () => log("Hello, I am Andrey [2]"),
    [hobby]: "skiing, codding",
    // id: id,
    id,
};

log(person);
log(person.age);
log(person.name);
log(person["name"]);

log(person.isDeveloper);
// log(person.isPoor.qwerty); // error
// log(person.isPoor?.qwerty); // undefined

log(person.address);
log(person.address.city, person.address.country, person.address.street);

// --------
//log(person.0)
log(person[0], person["0"]);
log(person["last name"]);

delete person[0];
log(person[0]);

// ---------

person.greet();
person.greetSecond();

const prevName = person.name;
log(prevName);

person.name = ("Alex");
log(person.name, prevName);
 
// ------------
log(person.isHappy);
person.isHappy = true;
log(person.isHappy);

log(person.hobby);
log(person);
log(person.id);

// ----------

log("age" in person);
log("qwerty" in person);

// ----------

const newPerson = person;
log(newPerson === person);

newPerson.age = 20;
log(newPerson === person);
log(newPerson.age, person.age);

