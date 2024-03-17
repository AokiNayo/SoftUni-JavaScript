function rotateArray(arr, count) {
  for (let i = 0; i < count; i++) {
    arr.unshift(arr.pop());
  }
  return arr.join(' ');
}

console.log(rotateArray(["1", "2", "3", "4"], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));