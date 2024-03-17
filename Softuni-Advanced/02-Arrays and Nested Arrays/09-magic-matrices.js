function magicMatrices(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let colOne = arr.reduce((acc, value) => acc += value[i], 0);
    let colTwo = arr.reduce((acc, value) => acc += value[i + 1], 0);
    let rowOne = arr[i].reduce((acc, value) => acc += value, 0);
    let rowTwo = arr[i + 1].reduce((acc, value) => acc += value, 0);

    if (rowOne !== rowTwo || colOne !== colTwo) {
      return false
    }
  }
  return true
}

console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
console.log(
  magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);

// console.log(magicMatrices([[1, 0, 0],[0, 0, 1],[0, 1, 0],]));
// console.log(magicMatrices([ [1, 0 ,0], [0 ,0 ,1]]));
