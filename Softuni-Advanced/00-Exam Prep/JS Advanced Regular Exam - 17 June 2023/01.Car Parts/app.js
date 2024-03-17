window.addEventListener("load", solve);

function solve() {
  nextBtn = document.querySelector("#next-btn");
  let inputValues = {};
  let [carModel, carYear, partName, partNumber] = document.querySelectorAll('input')
  let condition = document.querySelector('#condition')

  nextBtn.addEventListener("click", (ev) => {
    ev.preventDefault()
    
    if(!carModel.value || !carYear.value || !partName.value || !partNumber.value || !condition.value 
      || (carYear.value < 1980 || carYear.value > 2023)) {
      return
    }

    setValues(carModel, carYear, partName, partNumber, condition)

    let listElement = createElement('li', null, 'part-content')
    
    const editBtn = createElement('button', 'Edit', 'edit-btn')
    const continueBtn = createElement('button', 'Continue', 'continue-btn')

    const partInfo = document.querySelector('.info-list')

    editBtn.addEventListener('click', () => {
      carModel.value = inputValues.carModel
      carYear.value = inputValues.carYear
      partName.value = inputValues.partName
      partNumber.value = inputValues.partNumber
      condition.value = inputValues.condition

      nextBtn.disabled = false
      partInfo.textContent = ''
    })
    continueBtn.addEventListener('click', () => {
      partInfo.textContent = ''
      const confirmList = document.querySelector('.confirm-list')
      let listElement = createElement('li', null, 'part-content')
      const confirmBtn = createElement('button', 'Confirm', 'confirm-btn')
      const cancelBtn = createElement('button', 'Cancel', 'cancel-btn')

      confirmBtn.addEventListener('click', () => {
        const confirmMsg = document.querySelector('#complete-img')
        confirmMsg.style.visibility = 'visible'
        confirmMsg.nextElementSibling.textContent = "Part is Ordered!"
        confirmList.textContent = ''
        nextBtn.disabled = false
      })
      cancelBtn.addEventListener('click', () => {
        confirmList.textContent = ''
        nextBtn.disabled = false
      })

      listElement.appendChild(createFilledArticle())
      listElement.appendChild(confirmBtn)
      listElement.appendChild(cancelBtn)

      confirmList.appendChild(listElement)
    })
    
    listElement.appendChild(createFilledArticle())
    listElement.appendChild(editBtn)
    listElement.appendChild(continueBtn)
    partInfo.appendChild(listElement)
    
    document.querySelector('form').reset()
    nextBtn.disabled = true

  });
  function createFilledArticle() {
    let article = createElement("article");
    article.appendChild(createElement("p", `Car Model: ${inputValues.carModel}`));
    article.appendChild(createElement("p", `Car Year: ${inputValues.carYear}`));
    article.appendChild(createElement("p", `Part Name: ${inputValues.partName}`));
    article.appendChild(createElement("p", `Part Number: ${inputValues.partNumber}`));
    article.appendChild(createElement("p", `Condition: ${inputValues.condition}`));
    return article
  }

  function createElement(type, textContent, className) {
    let currEl = document.createElement(type);

    if (textContent) {
      currEl.textContent = textContent;
    }
    if (className) {
      currEl.className = className
    }
    return currEl;
  }

  function setValues(carModel, carYear, partName, partNumber, condition) {
    inputValues.carModel = carModel.value
    inputValues.carYear = carYear.value
    inputValues.partName = partName.value
    inputValues.partNumber = partNumber.value
    inputValues.condition = condition.value
  }
}
