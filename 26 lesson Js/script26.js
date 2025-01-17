// JSON, local & session storage

const log = console.log;

const car = {
    year: new Date(2024, 3, 3),
    brand: "audi",
    color: "blue",
    power: 3.2,
    isFast: true,
    getInfo: () => log("car info"),
    isExpensive: undefined,
}

log(car);

const carJSON = JSON.stringify(car);

log(carJSON);

// const carObject = JSON.parse(carJSON);
const carObject = JSON.parse(carJSON, (key, value) => {
    if (key === "year") {
        return new Date(value);
    }
    return value;
});

log(carObject);
// log(carObject.year.getFullyear());
// log(car.year.getFullyear());

// ----------------------------------

// localStorage.setItem("test", 123);
// localStorage.removeItem("test");
// localStorage.clear();
// log(localStorage.length);
// log(localStorage.key(1));

const clients = [
    {id: 1, level: 3, name: "Lucy", status: "online"},
    {id: 2, level: 1, name: "Rick", status: "offline"},
    {id: 3, level: 3, name: "Jack", status: "online"},
    {id: 4, level: 2, name: "Helen", status: "online"},
    {id: 5, level: 1, name: "ALice", status: "offline"},
    {id: 6, level: 1, name: "Derek", status: "offline"},
    {id: 7, level: 3, name: "MEgan", status: "online"},
];

// localStorage.setItem("clients", clients);
localStorage.setItem("clients", JSON.stringify(clients));

// const clientsFromStorage = localStorage.getItem("client");
// const clientsFromStorage = JSON.parse(localStorage.getItem("clients1"));
const clientsFromStorage = JSON.parse(localStorage.getItem("clients"));
// const clientsFromStorage = JSON.parse(localStorage.getItem("clients") ?? "{}");

log(clientsFromStorage);

// ------------------------

sessionStorage.setItem("test", 123)