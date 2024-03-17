function subSum(inputArr, start, end) {
  if (!Array.isArray(inputArr)) {
    return NaN;
  }
  let arr = inputArr.splice(start, end);
  let result = arr.reduce((acc, curr) => {
    if (typeof(curr) != "number"){
      return NaN
    }
    return acc + curr
  }, 0);
  return result
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([10, 'twenty', 30, 40], 0, 2))
console.log(subSum([], 1, 2))

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))


//Operator Mono Light