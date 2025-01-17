const car = {
    year: new Date(2024, 3, 1),
    brand: "audi",
    color: "blue",
    power: 3.2,
    isFast: true,
}

const carJSON = JSON.stringify(car);

console.log(carJSON);

// const carObject = JSON.parse(carJSON);
const carObject = JSON.parse(carJSON, (key, value) => {
    if (key === "year") {
        return new Date(value);
    }
    return value;
});

console.log(carObject);

const clients = [
    {id: 1, level: 3, name: "Lucy", status: "online"},
    {id: 2, level: 1, name: "Rick", status: "offline"},
    {id: 3, level: 3, name: "Jack", status: "online"},
    {id: 4, level: 2, name: "Helen", status: "online"},
    {id: 5, level: 1, name: "Alice", status: "offline"},
    {id: 6, level: 1, name: "Derek", status: "offline"},
    {id: 7, level: 3, name: "Megan", status: "online"},
];

const setItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
 }

const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

const getItemFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

console.log(removeItemFromLocalStorage);