function increasingSubset(arr) {
  return arr.reduce((resultArray, el) => {
      if (el >= Math.max(...resultArray)) {
          resultArray.push(el);
      }
      return resultArray;
  }, []);
}

console.log(increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(increasingSubset([1, 2, 3, 4]));
console.log(increasingSubset([20, 3, 2, 15, 6, 1]));