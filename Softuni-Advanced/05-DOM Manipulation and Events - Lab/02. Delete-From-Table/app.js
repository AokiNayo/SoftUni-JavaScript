function deleteByEmail() {
  let tableRows = Array.from(document.querySelectorAll("tbody tr"));
  let tbody = document.querySelector("tbody")
  
  let input = document.querySelector("[name=email]");
  let inputValue = input.value;

  let result = document.querySelector('#result')
  result.textContent = 'Not found.'

  tableRows.forEach((currentRow) => {
    let currentEmailRow = currentRow.children[1].textContent;

    if (currentEmailRow === inputValue) {
        tbody.removeChild(currentRow)
        result.textContent = 'Deleted.'
        input.value = ''
    }
  });
}
