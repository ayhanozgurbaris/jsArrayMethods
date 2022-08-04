const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(double)
const multipled = numbers.map(multiply)


function double(value, index, arr) {
    return value * 2;
}

function multiply(value, index, arr) {
    return value * index ;
}

console.log(doubled);
console.log(multipled);