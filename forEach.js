const letters = [1, 2, 3, 4, 5];

//letters.forEach(consoleItem);

// function consoleItem(item) {
//     console.log(item)
// }


// function consoleItem(item, index) {
//     console.log('a[' + index + '] = ' + item);
// }

// letters.forEach((item, index, arr) => {
//     console.log(arr);
// });


let sum = 0;
letters.forEach(item => {
    sum += item;
});
console.log(sum);






