window.addEventListener("load", solve);

function solve() {
  const inputFields = Array.from(document.querySelectorAll('input'))
  inputFields.pop()
  const genre = document.querySelector('select')
  const textarea = document.querySelector('textarea')
  const publishBtn = document.querySelector('#form-btn')
  const preview = document.querySelector('#preview-list')
  const formElement = document.querySelector('form')

  let savedValues = []

  publishBtn.addEventListener('click', onClickPublish)
  
  
  function onClickPublish(ev) {
    ev.preventDefault()

    inputFields.map(x => savedValues.push(x.value))
    savedValues.push(genre.value)
    savedValues.push(textarea.value)
    
    if (savedValues.some(x => x == '')) {
      savedValues = []
      return
    }

    const listElement = createList()
    const saveBtn = createElement('button', 'Save Story', 'save-btn')
    const editBtn = createElement('button', 'Edit Story', 'edit-btn')
    const deleteBtn = createElement('button', 'Delete Story', 'delete-btn')

    saveBtn.addEventListener('click', onClickSave)
    editBtn.addEventListener('click', onClickEdit)
    deleteBtn.addEventListener('click', onClickDelete)

    listElement.appendChild(saveBtn)
    listElement.appendChild(editBtn)
    listElement.appendChild(deleteBtn)

    preview.appendChild(listElement)

    inputFields.map(x => x.value = '')
    textarea.value = ''
    publishBtn.disabled = true
    formElement.reset()
  }
  function onClickEdit() {
    inputFields.map((x, i) => x.value = savedValues[i])
    textarea.value = savedValues[5]
    publishBtn.disabled = false
    preview.innerHTML = `<h3>Preview</h3>`
  }

  function onClickSave() {
    document.querySelector('#main').innerHTML = `<h1>Your scary story is saved!</h1>`
  }

  function onClickDelete() {
    preview.innerHTML = `<h3>Preview</h3>`
    publishBtn.disabled = false
  }

  function createList() {
    const listElement = createElement('li', null, 'story-info')
    const article = createElement('article')

    article.appendChild(createElement('h4', `Name: ${savedValues[0]} ${savedValues[1]}`))
    article.appendChild(createElement('p', `Age: ${savedValues[2]}`))
    article.appendChild(createElement('p', `Title: ${savedValues[3]}`))
    article.appendChild(createElement('p', `Genre: ${savedValues[4]}`))
    article.appendChild(createElement('p', `${savedValues[5]}`))

    listElement.appendChild(article)
    return listElement
  }

  function createElement(tag, textContent, className) {
    const currElement = document.createElement(tag)

    if(textContent) {
      currElement.textContent = textContent
    }
    if (className) {
      currElement.className = className
    }

    return currElement
  } 
}
