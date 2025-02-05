
// debugger;
const chanel = "Youtube";
function multiplyBy (factor) {
    console.log(chanel);

    return (number) => {
        return number * factor;
    }
}

const double = multiplyBy(2);
const triple = multiplyBy(2);
debugger;
console.log(double(5));
console.log(triple(10));