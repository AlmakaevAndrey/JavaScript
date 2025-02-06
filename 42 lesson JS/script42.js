// Classes

const log = console.log;

// ------------
/* 
    class MyClass {
    // методы класса
    constructor( {...})
    method1() {...}
    method2() {...}
    method3() {...}
    ...
    }

    - Вызов myClass() создает новый объект со всеми перечисленными методами;
    - При этом автоматически вызывается метод constructor(), в нем можно инициализировать объект;
*/

class User {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        log(`Hello, I am ${this.name}`);
    }

    greet = () => {
        log(`Hello, I am ${this.name}`);
    }
}

const userAlex = new User("Alex");

// log(userAlex);
// userAlex.greeting();
// userAlex.greet();

const userOlga = new User("Olga");
// userOlga.greeting();

// log(typeof User);

// ----- new Function ------

function UserFnClass(name) {
    this.name = name;

    this.greeting = function () {
        log(`Hello, I am ${this.name}`);
    }
}

// UserFnClass.prototype.greet = function () {
//     log(`Hello, I am ${this.name}`)
// }
UserFnClass.prototype.greet = () => {
    log(`Hello, I am ${this.name}`)
}

const userVlad = new UserFnClass("Vlad");

// log(userVlad);
// userVlad.greeting();
// userVlad.greet();

// ------- Геттер и соетттер --------

class User1 {
    profession = "software engineer"
    #skills = "";
    constructor(name) {
        this.name = name;
    }

    get skills() {
        return this.#skills;
    }

    set skills(newSkills) {
        if (typeof newSkills !== "string") return;
        this.#skills = newSkills;
    }
}

const userAnna = new User1("Anna");

userAnna.name = "Anna Viktorovna";
userAnna.profession = "manager";

// log(userAnna.skills);
// userAnna.skills = "html, css, js";
// log(userAnna.skills);


// log(userAnna);

// ----- Класс со статическими методами и свойствами ------

class User2 {
    static #instanceCount = 0;

    constructor(name) {
        this.name = name;
        User2.#instanceCount++;
    }

    greeting() {
        log(`Hello, I am ${this.name}`);
    }

    static getInstanceCount() {
        log(`We have: ${User2.#instanceCount} quantity of count`);
    }
}

const userKen = new User2("Ken");
const userNatalia = new User2("Natalia");

User2.getInstanceCount();
log(userKen);