function getFibonator() {
  let firstNum = 0
  let secondNum = 1
  function fib() {
    let sum = firstNum + secondNum
    secondNum = firstNum
    firstNum = sum
    return firstNum
  }
  return fib
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

// first = 0, first = 1, first = 2, first = 3, first = 5, first = 8,
// second = 1, second = 1, second = 1, second = 2, second = 3, second = 5