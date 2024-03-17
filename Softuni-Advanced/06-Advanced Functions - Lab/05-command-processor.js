function solution() {
  let test = {
    output: '',
    append: function(word) { this.output += word; },
    removeStart: function (count) { this.output = this.output.slice(count); },
    removeEnd: function (count) { this.output = this.output.slice(0, -count); },
    print: function() { console.log(this.output); }
  };
  return test;
}
let firstZeroTest = solution();
let secondZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

secondZeroTest.append('Aoki')
secondZeroTest.append('Nayo')
secondZeroTest.print()