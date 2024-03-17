class Stringer {
  constructor(string, initialLength) {
    this.innerString = string;
    this.innerLength = initialLength;
  }

  increase(length) {
    this.innerLength += length;
  }
  decrease(length) {
    if (this.innerLength < length) {
      this.innerLength = 0;
    } else {
      this.innerLength -= length;
    }
  }
  toString() {
    if (this.innerString.length > this.innerLength) {
      let diff = this.innerString.length - this.innerLength;
      let truncString = this.innerString.slice(0, -diff) + "...";
      return truncString;
    }
    return this.innerString;
  }
}
debugger
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
