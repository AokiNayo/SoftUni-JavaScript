function sortNumbers(arr) {
  arr.sort((a, b) => a - b);

  let resultArray = [];

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    resultArray.push(arr[i]);
    resultArray.push(arr[arr.length - (i + 1)]);
  }
  if (arr.length % 2 != 0) {
    resultArray.push(arr[Math.floor(arr.length / 2)])
  }
  return resultArray;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortNumbers([11, 91, 18]));
console.log(sortNumbers([11, 91, 18, 31, 43]));
