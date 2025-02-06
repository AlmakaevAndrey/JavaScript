const log = console.log;

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    #products = [];

    constructor() {}

    addProduct(...product) {
        this.#products.push(...product);

        product.forEach(product => log(`Продукт ${product.name} добавлен!`))
    }

    removeProduct(productName) {
        this.#products = this.#products.filter((product) => product.name !== productName);

        return productName;
    }

    getTotalPrice() {
        const totalPrice = this.#products.reduce((total, product) => total + product.price, 0);

        return totalPrice;
    }

    get listOfProducts() {
        return this.#products;
    }
}

const cart = new Cart();

const bread = new Product("хлеб", 30);
const apple = new Product("яблоко", 50);
const milk = new Product("молоко", 60);


cart.addProduct(bread, apple, milk);

// cart.addProduct(apple);
// cart.addProduct(milk);

const removeProduct = cart.removeProduct("молоко")

log(`Продукт ${removeProduct} удален!`);

log(`Общая сумма товаров: ${cart.getTotalPrice()}`);

log(cart.listOfProducts);

// --------------------------------------

class Employee {
    constructor(name, position, salary, employmentDate) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.employmentDate = employmentDate;
    }
}

class Company {
    #employee = [];

    constructor() {}

    addEmployee(...employee) {
        this.#employee.push(...employee)

        employee.forEach(employee => log(`Приветствуем нового сотрудника - ${employee.name}!`));
    }

    fireEmployee(employeeName) {
        this.#employee = this.#employee.filter((employee) => employee.name !== employeeName);

        return employeeName;
    }

    listOfEmployees() {
        return this.#employee;
    }

    filterEmployeesBySalary(limitSalary) {
        return this.#employee.forEach((employee) => )
    }
}

const alex = new Employee("Alex", "developer", "150000", new Date(2022, 2, 5));
const elena = new Employee("Elena", "qa", "90000", new Date(2023, 3, 7));
const ivan = new Employee("Ivan", "PM", "190000", new Date(2021, 2, 2));

const company = new Company();

company.addEmployee(alex, elena, ivan);

const removeEmployee = company.fireEmployee("Elena");

log(`Сотрудник ${removeEmployee} уволен!`);

log(company.listOfEmployees());