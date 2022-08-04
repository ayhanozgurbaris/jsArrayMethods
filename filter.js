const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(isEven)

function isEven(value) {
    return value % 2 === 0;
}

console.log(even)

console.log("----")



const nextNumbers = [1, 2, 2, 4, 5, 2, 1, 3, 3, 7, 8, 7]
const nums = nextNumbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
})
console.log(nums)