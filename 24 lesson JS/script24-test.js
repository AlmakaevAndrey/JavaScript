const user = {
    years: 33,
    name: "Alex",
  };

const { years: age, name, isDeveloper = false } = user;

const newUser = {
    ...user
}
// console.log(user === newUser);
// console.log(newUser);


const employees = {
    alex: 1000,
    elena: 500,
    olga: 800,
    nicolas: 1300,
    anton: 2400,
    oleg: 3000,
    kate: 5000
}

let sum = 0;

for (const value of Object.values(employees)) {
    sum += value;
}

console.log(sum);

const oldCar = {
    year: 2015,
    name: "Ford",
    model: "escape 3",
    "engine capacity": 1.5,
   }

   const newCar = {
    ...oldCar,
    year: 2023,
    model: "escape 4"
   }