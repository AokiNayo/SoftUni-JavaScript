//
//
//

function wordsUppercase(input) {
  return input
    .split(/[^A-Za-z0-9]/)
    .filter((e) => e)
    .map((x) => x.toUpperCase())
    .join(", ");
}

console.log(wordsUppercase("Hi, how are you?"));
