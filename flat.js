const arr = [1, [2, [3, [4,[5]]]]];
// tek bir diziye çevirmek istiyorum

const res = arr.flat(3)

console.log(res)
//  [ 1, 2, 3, 4, [ 5 ] ]

