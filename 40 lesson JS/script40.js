console.log(window);

// --------------
const person = {
    name: "Alex",
    sayHello: function () {
        console.log(`Hello, ${this.name}`)
    }
}

// person.sayHello();

// -------------

const person1 = {
    age: 25,
    sayAge: () => {
        console.log(`Age: ${this.age}`);
    },
    sayAgeWithContext: function () {
        console.log(`Age: ${this.age}`);
    }
}

person1.sayAge();
person1.sayAgeWithContext();

// -----------------------

function greet (greeting, emoji) {
    console.log(`${greeting}, ${this.name} - ${emoji}`);
}

const person2 = {name:"Andrey"};

greet.call(person, "Hello", "🤓");
greet.apply(person2, ["Hello", "🤓"]);

const say = greet.bind(person);
say("Hay", "123");
// greet("Hello", "🤓");

// ----------

const sayAge = person1.sayAgeWithContext;
sayAge();

const person3 = {age: 99};

const boundSayAge = person1.sayAgeWithContext.bind(person3);
boundSayAge();