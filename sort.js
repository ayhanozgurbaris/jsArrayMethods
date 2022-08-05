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
//sayı sıralamak için doğrusu:
//[ 1, 4, 5, 7, 9, 10, 24, 105]


const products = [
    {
        name: 'laptop',
        price: 1000
    },
    {
        name: 'phone',
        price: 500
    },
    {
        name: 'desktop',
        price: 1500
    }
]


products.sort((a,b)=> {
    return a.price - b.price
})

console.log(products)
