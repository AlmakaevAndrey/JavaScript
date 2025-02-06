// Shop

const log = console.log;

/*� Задача: Магазин и корзина товаров 🧲
Создайте класс Product, который будет представлять товар в магазине, и класс Cart, 
который будет управлять корзиной покупок. Реализуйте следующие функции:
Frontender[1.0] JavaScript - КЛАССЫ - Наглядный пример, решение задачи. Часть 2 2
Класс Product должен иметь свойства:
1) name (название товара),
2) price (цена товара).
Класс Cart должен предоставлять методы:
1) addProduct(product) — добавить товар в корзину.
2) removeProduct(productName) — удалить товар из корзины по названию.
3) getTotalPrice() — вернуть общую стоимость всех товаров в корзине.
4) listProducts() — вывести список товаров в корзине.
*/
// --------------------------- Решение --------------------------------

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
