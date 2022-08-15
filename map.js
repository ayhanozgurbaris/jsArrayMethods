//dizi içerisindeki tüm elemanları bir işlemden geçirir

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
// [ 2, 4, 6, 8, 10 ]


console.log(multipled);
// [ 0, 2, 6, 12, 20 ]

const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },
    {
        name: 'desktop',
        price: 1500,
        count: 6
    },
    {
        name: 'phone',
        price: '500',
        count: 7
    }
]

const totalProductsValue = products.map(item => item.price * item.count);

console.log(totalProductsValue);
// [ 5000, 9000, 3500 ]