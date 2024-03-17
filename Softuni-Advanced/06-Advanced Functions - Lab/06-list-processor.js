function solve(arrayOfCommands) {
  const commandCollection = {
    arrayOfWords: [],
    add: function (value) {
      this.arrayOfWords.push(value);
    },
    remove: function (value) {
      this.arrayOfWords.forEach((x, i) => {
        if (x == value) {
          this.arrayOfWords.splice(i, 1);
        }
      });
    },
    print: function () {
      console.log(this.arrayOfWords.join(","));
    },
  };

  [...arrayOfCommands].forEach((x) => {
    let [key, value] = x.split(" ");
    commandCollection[key](value);
  });
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
solve(["add hello", "add again", "remove hello", "add asdqwdqe", "print"]);