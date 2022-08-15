 // find'a çok benzer ama index'ini döndürür.

const numbers = [10, 20, 30, 40, 50];

const resValue = numbers.find(findThree);
const res = numbers.findIndex(findThree);

function findThree(value) {
    return value === 30;
}

console.log(resValue)
//30

console.log(res)
//2