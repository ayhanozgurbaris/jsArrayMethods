const names = ['Florin', 'Liam', 'Jai', 'Ivan'];
names.sort();
console.log(names);
// [ 'Florin', 'Ivan', 'Jai', 'Liam' ]


const numbers = [2, 5, 10, 7, 9, 4, 105];
numbers.sort();
console.log(numbers);
//kelime zannettiği için hatalı sıralama yapar
// [10, 105, 2, 4 ,5, 7, 9]


const numbers2 = [24, 5, 10, 7, 9, 4, 105, 1];
numbers2.sort(compareFunctions);

function compareFunctions(a, b) {
    return a - b;
}
console.log(numbers2);
