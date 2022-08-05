 // find'a çok benzer ama index'ini döndürür.

const numbers = [1, 2, 3, 4, 5];

const res = numbers.findIndex(findThree);

function findThree(value) {
    return value === 3;
}

console.log(res)

//2