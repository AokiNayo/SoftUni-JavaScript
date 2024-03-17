function sortArray(arr) {
  return arr.sort((a,b) => {
    if (a.length > b.length){
      return 1
    } else if (a.length == b.length) {
      return a.localeCompare(b)
    } else {
      return -1
    }
  }).join('\n');
}

console.log(sortArray(["alpha", "beta", "gamma"]));
console.log('---');
console.log(sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]));
console.log('---');
console.log(sortArray(["test", "Deny", "omen", "Default"]));
