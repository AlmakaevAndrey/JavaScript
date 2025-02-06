// prototypes

const animal = {
    eats: true
}

const rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;

console.log(rabbit)

// --------------

const animal1 = {
    eat () {
        console.log("I`m eating")
    },
};

const dog = Object.create(animal1);

dog.eat();

dog.bark = function () {
    console.log("Whoff!")
}

dog.bark();

// -----------------------------
// Функция конструктор

function Person(name) {
    this.name = name;
}

const john = new Person("John");
const alex = new Person("Alex");

Person.prototype.sayHello = function() {
    console.log(`Hi, my name is ${this.name}`)
}


john.sayHello()
alex.sayHello()

console.log(john instanceof Person);
console.log(john.__proto__ === Person.prototype);

// -----------------------

Array.prototype.printElements = function() {
    this.forEach((element, index) => {
        console.log(`Element ${index + 1}: ${element}`)
    })
}

const myArray = [10, 20, 30, 40, 50];
myArray.printElements();