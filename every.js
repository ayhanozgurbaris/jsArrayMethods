// tüm değerler sağlanıyorsa true, bir yanlış bulsa bile false

const numbers = [1, 2,-7, 3, 4, 5];
const res = numbers.every(isPositive)

function isPositive(item) {

    return item > 0;
}

console.log(res)

//false