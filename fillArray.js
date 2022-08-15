const numbers = [1, 2, 3, 4, 5];
numbers.fill(0);
console.log(numbers);
// [ 0, 0, 0, 0, 0 ]

const numbers2 = [6, 7, 8, 9, 10];
// array.fill(value, start, end)
// includes start point but not end point
const num2 = numbers2.fill(0,1,3);
console.log(num2);
// [ 6, 0, 0, 9, 10 ]

