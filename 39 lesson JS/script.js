const log = console.log;

const pow = (x, n) => {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

log(pow(2, 3));




const pow1 = (x, n) => {
    if (n === 1) {
        return x;
    } else {
        return x * pow1(x, n - 1);
    }
}

log(pow1(2, 3)); // 8

// -------------------

const sum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

log(sum(5)) // 1+2+3+4+5


const sum1 = (n) => {
    if (n === 1) return 1;
    return sum1(n - 1) + n;
}

log(sum(5)) // 1+2+3+4+5


const sum3 = (n) => {
    return n * (n + 1) / 2;
}

const factorial = (n) => {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

log(factorial(125));