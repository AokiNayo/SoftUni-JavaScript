function solve(instructions) {
  let stack = [];

  for (let current of instructions) {
    if (typeof current === 'number') {
      stack.push(current);
    } else if (typeof current === 'string') {
      if (stack.length < 2) {
        return 'Error: not enough operands!';
      }

      let num2 = stack.pop();
      let num1 = stack.pop();

      switch (current) {
        case '+':
          stack.push(num1 + num2);
          break;
        case '-':
          stack.push(num1 - num2);
          break;
        case '*':
          stack.push(num1 * num2);
          break;
        case '/':
          stack.push(num1 / num2);
          break;
        default:
          return 'Error: invalid operator!';
      }
    }
  }

  if (stack.length === 1) {
    return stack[0];
  } else {
    return 'Error: too many operands!';
  }
}

console.log(solve([3, 4, '+']));
console.log(solve([5, 3, 4, '*', '-']));
console.log(solve([7, 33, 8, '-']));
console.log(solve([15, '/']));

console.log(solve([31, 2, "+", 11, "/"]));
console.log(solve([-1, 1, "+", 101, "*", 18, "+", 3, "/"]));
