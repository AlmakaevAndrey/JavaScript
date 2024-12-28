const car = {
    brand:"Toyota",
    model:"Camry",
    year:2020,
    isNew:false
};
car.year = 2024;
delete car.isNew;
console.log(car);




const calculator = {
    addition: (num1, num2) => {
        return num1 + num2;
    },
    multiplication: (num1, num2) => {
        return num1 * num2;
    },
    division: (num1, num2) => {
        return num1 / num2;
    },
    subtraction: (num1, num2) => {
        return num1 - num2;
    }
}

console.log(calculator.addition(10, 10));
console.log(calculator.multiplication(10, 10));
console.log(calculator.division(10, 10));
console.log(calculator.subtraction(10, 10));







const firstName = "Andrey";
const age = 25;
const address = {
    country: "England",
    city: "london"
};

const student ={
    firstName,
    age,
    address
};

console.log(student);
console.log(student.firstName, student.age, student.address);

const checkIsActive = "isActive" in student;

console.log("Проверка isActive!", checkIsActive);