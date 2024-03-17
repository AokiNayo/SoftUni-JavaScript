function add(num) {
  let sum = num;

  function innerAdd(nextNum) {
    sum += nextNum;
    return innerAdd;
  }

  innerAdd.toString = () => sum;
  return innerAdd;
}
console.log(add(1).toString()); // Вывод: 1
console.log(add(1)(2).toString()); // Вывод: 3
console.log(add(1)(2)(3).toString()); // Вывод: 6
