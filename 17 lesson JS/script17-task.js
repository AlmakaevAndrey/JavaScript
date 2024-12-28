function greet(name,greet = "Hello") {
    return `${greet}, ${name}!`;
}
console.log(greet("Alice", "asdasd")); // Вывод: "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // Вывод: "Good morning, Bob!"






const multiplyExpression = function(a, b) {
    return a * b;
};

function multiplyDeclaration(a, b) {
    return a * b;
}

console.log(multiplyExpression(2, 3)); // Вывод: 6
console.log(multiplyDeclaration(4, 5)); // Вывод: 20





function outerFunction() {
    const innerVar = "I am inside!";
    
    function innerFunction() {
        console.log(innerVar);
    }
    
    innerFunction();
    
}
console.log(innerVar); // Что будет выведено? JS не видит переменную unnerVar,
// так как мы ее положили внутри