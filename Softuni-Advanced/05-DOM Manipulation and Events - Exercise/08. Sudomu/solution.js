function solve() {
  let buttons = document.querySelectorAll("button");

  let table = document.querySelector("table");
  let pElement = document.querySelector("#check p");

  let sudokuGrid = [];

  buttons[0].addEventListener("click", checkSudoku);

  buttons[1].addEventListener("click", resetSudoku);

  function checkSudoku() {
    let inputArr = Array.from(document.querySelectorAll("input"));
    sudokuGrid = [];

    while (inputArr.length > 0) {
      let sudokuRowCells = inputArr.splice(0, 3).map((input) => input.value);
      sudokuGrid.push(sudokuRowCells);
    }

    let isSudoku = true;

    for (let i = 0; i < sudokuGrid.length; i++) {
      let row = sudokuGrid[i];
      let col = sudokuGrid.map((row) => row[i]);

      if (new Set(col).size !== col.length || new Set(row).size !== row.length) {
        isSudoku = false;
        break;
      }
    }
    updateResult(isSudoku);
  }

  function updateResult(isSudoku) {
    table.style.border = isSudoku ? "2px solid green" : "2px solid red";
    pElement.textContent = isSudoku? "You solved it! Congratulations!" : "Nope! You are not done yet...";
    pElement.style.color = isSudoku ? "green" : "red";
  }

  function resetSudoku() {
    pElement.textContent = "";
    table.style.border = "";
    Array.from(document.querySelectorAll("input")).forEach((input) => (input.value = ""));
  }
}

