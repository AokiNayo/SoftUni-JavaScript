function solve() {
  let convertedText = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;

  switch (namingConvention) {
    case "Camel Case":
      convertedText = convertedText.split(" ").map((word, index) => {
        if (index != 0) {
          return word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
          return word[0].toLowerCase() + word.slice(1).toLowerCase();
        }
      }).join('');
      break;
    case "Pascal Case":
      convertedText = convertedText.split(" ").map((word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }).join('');
      break;
    default: convertedText = 'Error!'
      break;
  }
  document.getElementById('result').textContent = convertedText
}
