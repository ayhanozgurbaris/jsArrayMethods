//array'den string üretmeyi sağlar

const countries = ['Romania', 'USA', 'Turkey'];

const noSpace = countries.join('');
console.log(noSpace);
// RomaniaUSATurkey

const comma = countries.join(',');
console.log(comma);
// Romania,USA,Turkey
