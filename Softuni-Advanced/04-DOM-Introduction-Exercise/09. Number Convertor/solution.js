function solve() {
  let convertToRef = document.querySelector("#selectMenuTo");
  let hexadecimal = document.createElement("option");

  convertToRef.firstElementChild.value = "binary";
  convertToRef.firstElementChild.textContent = "Binary";

  hexadecimal.value = "hexadecimal";
  hexadecimal.textContent = "Hexadecimal";
  convertToRef.appendChild(hexadecimal);

  let convertButton = document.querySelector("button");
  let output = document.querySelector("#result");

  convertButton.addEventListener("click", () => {
    let binarySelected = document.querySelector("#selectMenuTo option");
    if (binarySelected.selected) {
      binaryConverter();
    } else {
      hexaConverter();
    }
  });

  function binaryConverter() {
    let currentNum = Number(document.getElementById("input").value);
    let binaryNum = "";

    while (currentNum != 0) {
      binaryNum = (currentNum % 2) + binaryNum;
      currentNum = Math.floor(currentNum / 2);
    }
    output.value = binaryNum;
    // output.value = currentNum.toString(2)
  }
  function hexaConverter() {
    let currentNum = Number(document.getElementById("input").value);
    output.value = currentNum.toString(16).toUpperCase();
  }
}
