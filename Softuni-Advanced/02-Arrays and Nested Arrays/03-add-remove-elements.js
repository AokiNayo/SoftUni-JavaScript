function addAndRemove(commands) {
  let arr = commands.reduce((result, curr, index) => (
        curr === 'add' ? result.push(index + 1) : result.pop(), result
    ), []);

  return arr.length ? arr.join('\n') : 'Empty';
}

console.log(addAndRemove(['add', 'add', 'add', 'add']));
console.log(addAndRemove(['add', 'add', 'remove', 'add', 'add']))
console.log(addAndRemove(['remove', 'remove', 'remove']))