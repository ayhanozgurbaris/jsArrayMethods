const numbers = [1, 2, 3, 4, 5, 6, 7];

const deleted = numbers.splice(2, 3)
//2. element'ten itibaren 3 eleman silmek için

console.log(deleted);
// [ 3, 4, 5 ]

console.log(numbers)
// [ 1, 2 ]