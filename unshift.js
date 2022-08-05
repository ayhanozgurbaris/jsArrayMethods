//başa element ekler. push'un tam tersi

const numbers = [1, 2, 3];
numbers.unshift(4);
console.log(numbers);
// [ 4, 1, 2, 3 ]

numbers.unshift(5, 6);
console.log(numbers);
// [ 5, 6, 4, 1, 2, 3 ]