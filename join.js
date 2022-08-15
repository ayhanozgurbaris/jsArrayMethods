//array'den string üretmeyi sağlar

const countries = ['Romania', 'USA', 'Turkey'];

const noSpace = countries.join('');
console.log(noSpace);
// RomaniaUSATurkey

const comma = countries.join(',');
console.log(comma);
// Romania,USA,Turkey
console.log(typeof (comma));
//string


//from ile tekrar array'e çeviriyorum
const arr = Array.from(comma);
console.log(arr)
// ['R', 'o', 'm', 'a', 'n','i', 'a', ',', 'U', 'S','A', ',', 'T', 'u', 'r','k', 'e', 'y']

console.log(typeof (arr))
//object