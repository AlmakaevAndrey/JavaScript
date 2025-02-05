const createCounter = (start) => {
    let count = start;

    return () => {
        count += 1;
        return count;
    };
}

// const counter = createCounter(5);

// console.log(counter()); // 6
// console.log(counter()); // 7
// console.log(counter()); // 8



const createStore = (item) => {
    let count = 0;

    return {
        add: () => {
            count += 1;
        },
        getCount: () => {
            return count;
        }
    }
}



// const store = createStore('Apples');

// store.add();
// store.add();
// console.log(store.getCount()); // 2
// store.add();
// console.log(store.getCount()); // 3\






// Калькулятор с памятью
// Создай функцию `createCalculator`, которая возвращает объект с четырьмя методами:

//  - add(value): добавляет value к текущему значению.
//  - subtract(value): вычитает value из текущего значения.
//  - multiply(value): умножает текущее значение на value.
//  - getValue(): возвращает текущее значение.

// При создании калькулятора его значение должно быть равно 0.

const createCalculator = (value) => {
    let count = value;
    count = 0;

    return {
        add: (num) => {
            count += num;
        },
        subtract: (num) => {
            count -= num;
        },
        multiply: (num) => {
            count *= num;
        },
        getValue: () => {
            return count;
        }
    }

}


const calculator = createCalculator();

calculator.add(10);
console.log(calculator.getValue()); // 10.

calculator.subtract(3);
console.log(calculator.getValue()); // 7.

calculator.multiply(2);
console.log(calculator.getValue()); // 14.