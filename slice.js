//kopyasını döndürür orjinali bozmaz

const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.slice(1, 4);

console.log(numbers2);
// [ 2, 3, 4 ]

console.log(numbers);
// [ 1, 2, 3, 4, 5 ]


const numbers3 = numbers.slice(-2);
console.log(numbers3);
// son iki parametre dönüyor
// [ 4, 5 ]

const numbers4 = numbers.slice(3);
console.log(numbers4);
// 3.parametreden sonrasını dönüyor
// [ 4, 5 ]