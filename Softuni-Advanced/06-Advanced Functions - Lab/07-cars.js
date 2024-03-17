function solve(arrayOfCommands) {
  let cars = {};
  let process = {
    create: (name, inherits = false, parentName) => {
      if (inherits) {
        cars[name] = Object.create(cars[parentName]);
      } else {
        cars[name] = {};
      }
    },
    set: (name, key, value) => {
      cars[name][key] = value;
    },
    print: (name) => {
      let string = [];
      for (const key in cars[name]) {
        string.push(`${key}:${cars[name][key]}`);
      }
      console.log(string.join(","));
    },
  };
  debugger
  [...arrayOfCommands].forEach((x) => {
    let [commandName, ...currentCommand] = x.split(" ");
    process[commandName](...currentCommand);
  });
}
solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
