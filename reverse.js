const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);
//gerçek diziyi bozuyor
// [ 5, 4, 3, 2, 1 ]



const newArr = numbers.concat().reverse();
console.log(newArr)
// gerçek diziyi bozmuyor
// [ 5, 4, 3, 2, 1 ]


const str = 'ozgur baris ayhan';
const res = str.split('').reverse().join('');
console.log(res);
// nahya sirab rugzo