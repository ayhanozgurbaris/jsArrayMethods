const names = [
    {
        name: 'baris',
        age: 24
    },
    {
        name: 'ozgur',
        age: 25,
    },
    {
        name: 'ayhan',
        age: 23
    }
];

const res = names.find(findBaris)

function findBaris(person) {
    return person.name ==='baris'
}

console.log(res);
// { name: 'baris', age: 24 }

