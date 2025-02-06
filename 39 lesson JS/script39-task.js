// Напишите функцию `sumTo`, которая принимает входное число `n` и возвращает сумму все чисел до входного числа. 


function sumTo1(n) {
    let sum = 0;
    for (i = 0; i < n; i++) {
        sum = sum - i + n;
    }
    return sum;
}

function sumTo(n) {
    if (n === 0) return n
    return sumTo(n - 1) + n;
}


const sum1 = sumTo(5); // 1 + 2 + 3 + 4 + 5
const sum2 = sumTo(6); // 1 + 2 + 3 + 4 + 5 + 6
const sum3 = sumTo(100);

console.log(sum1); // 15
console.log(sum2); // 21
console.log(sum3);



const factorial = (e) => {
    return (e !== 1) ? e * factorial(e - 1) : 1;
}



const result = factorial(5);

// console.log(result) // 120






function fib(n) { 
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
 }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757