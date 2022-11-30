//A. 2
const arr = [60, 40, 55, 75, 64];
const newArr = [];
const result = 0;

const evenArr = arr.filter((x, index) => index % 2 === 0);
const oddArr = arr.filter((x, index) => index % 2 !== 0);

const evenSum = evenArr.reduce((acc, current) => acc + current, result);
const oddSum = oddArr.reduce((acc, current) => acc + current, result);

newArr.push(evenSum, oddSum);

console.log(newArr);
