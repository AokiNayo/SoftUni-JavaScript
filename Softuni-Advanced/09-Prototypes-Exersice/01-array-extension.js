(function () {
  
  Array.prototype.last = function () {
    return this[this.length - 1]
  }

  Array.prototype.skip = function (num) {
    return this.slice(num)
  }

  Array.prototype.take = function (num) {
    return this.slice(0, num)
  }
  
  Array.prototype.sum = function () {
    return this.reduce((accumulator, currElement) => accumulator + currElement, 0)
  }

  Array.prototype.average = function () {
    return this.sum() / this.length
  }
})()