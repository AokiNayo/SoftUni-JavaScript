function sumTable() {
  const elements = document.getElementsByTagName("td");
  let sum = 0
  for (let i = 1; i < elements.length - 1; i+=2) {
    sum += Number(elements[i].textContent)
  }
  document.getElementById('sum').textContent = sum
}
