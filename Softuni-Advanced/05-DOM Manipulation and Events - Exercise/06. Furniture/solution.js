function solve() {
  let resultField = document.querySelector("[rows='4']");
  let tableBody = document.querySelector("tbody");

  let generateButton = document.querySelectorAll('button')[0];
  let buyButton = document.querySelectorAll('button')[1]

  let purchase = {
    furniture: [],
    totalPrice: 0,
    avgDecorationFactor: 0
  }

  generateButton.addEventListener("click", () => {
    let data = JSON.parse(document.querySelector("[rows='5']").value);

    for (const current of data) {
      let tableRow = document.createElement("tr");

      tableRow.appendChild(createProduct("img", current.img));
      tableRow.appendChild(createProduct("p", current.name));
      tableRow.appendChild(createProduct("p", current.price));
      tableRow.appendChild(createProduct("p", current.decFactor));
      tableRow.appendChild(createProduct("input", null));

      tableBody.appendChild(tableRow);
    }
  });

  buyButton.addEventListener('click', () => {
    let tableRows = document.querySelectorAll("tbody tr")
    
    for (const currRow of tableRows) {
      
      if (currRow.children[4].children[0].checked) {
        purchase.furniture.push(currRow.children[1].children[0].textContent)
        purchase.totalPrice += Number(currRow.children[2].children[0].textContent)
        purchase.avgDecorationFactor += Number(currRow.children[3].children[0].textContent)
      }
    }
    purchase.avgDecorationFactor = purchase.avgDecorationFactor / purchase.furniture.length
    resultField.value = 
    `Bought furniture: ${purchase.furniture.join(', ')}
    \nTotal price: ${purchase.totalPrice.toFixed(2)}
    \nAverage decoration factor: ${purchase.avgDecorationFactor}`

  })


  const createProduct = (type, text) => {
    let tableData = document.createElement("td");

    if (type === "img") {
      let imgElement = document.createElement(type);
      imgElement.src = text;
      tableData.appendChild(imgElement);
    } else if (type == "p") {
      let pElement = document.createElement(type);
      pElement.textContent = text;
      tableData.appendChild(pElement);
    } else if (type == "input") {
      let inputCheckbox = document.createElement(type);
      inputCheckbox.type = "checkbox";
      tableData.appendChild(inputCheckbox);
    }
    return tableData;
  };
}
