let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

function solution(num1) {
  return (num2) => num1 + num2;
}