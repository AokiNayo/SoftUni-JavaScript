function solve(numArray, sortType) {
  let sort = {
    asc: () => numArray.sort((a,b) => a - b),
    desc: () => numArray.sort((a,b) => b - a)
  }
  return sort[sortType]()
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))