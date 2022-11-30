// A. 1
const arr = ["HUNG", "MY", "TAN", "THANH", "PHUOC"];
let newArr = [];

for (let i = 1; i < arr.length; i++) {
  let result = arr[0];
  if (result.length < arr[i].length) {
    result = arr[i];
    newArr.push(result);
  }
}

console.log(newArr);
