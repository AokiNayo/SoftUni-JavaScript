function extract(content) {
  let text = document.getElementById(content).textContent;
  let result = [];
  let regex = /\(([^)]+)\)/g

  let match = regex.exec(text);

  while (match) {
    result.push(match[1]);
    match = regex.exec(text);
  }
  return console.log(result.join('; '))
}
