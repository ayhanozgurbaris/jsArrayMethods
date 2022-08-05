// bir true bulursa true

const numbers = [1, 2,-7, 3, 4, 5];
const res = numbers.some(isPositive)

function isPositive(item) {

    return item > 0;
}

console.log(res)

//true