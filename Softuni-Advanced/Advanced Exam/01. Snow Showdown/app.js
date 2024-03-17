window.addEventListener("load", solve);

function solve() {
  const inputFields = Array.from(document.querySelectorAll('input'))
  const specialAttribute = document.querySelector('select')

  const addBtn = document.querySelector('button')
  const snowmanPreviewSection = document.querySelector('.snowman-preview')

  let savedValues = []
  addBtn.addEventListener('click', onClickAdd)

  function onClickAdd(ev) {
    ev.preventDefault()
    
    inputFields.push(specialAttribute)

    if (inputFields.some(x => x.value == '')){
      return
    }
    
    inputFields.map(x => savedValues.push(x.value))

    const listElement = createList()
    const buttonDiv = createElement('div', null, 'btn-container')
    const editBtn = createElement('button', 'Edit', 'edit-btn')
    const nextBtn = createElement('button', 'Next', 'next-btn')

    editBtn.addEventListener('click', onClickEdit)
    nextBtn.addEventListener('click', onClickNext)
    
    buttonDiv.appendChild(editBtn)
    buttonDiv.appendChild(nextBtn)

    listElement.appendChild(buttonDiv)
    snowmanPreviewSection.appendChild(listElement)
    
    addBtn.disabled = true
    document.querySelector('form').reset()
  }

  function onClickEdit () {
    inputFields.map((x, i) => x.value = savedValues[i])
    addBtn.disabled = false
    snowmanPreviewSection.textContent = ''
    savedValues = []
  }
  function onClickNext () {
    const listElement = createList()
    const sendBtn = createElement('button', 'Send', 'send-btn')

    sendBtn.addEventListener('click', onSendClick)

    listElement.children[0].appendChild(sendBtn)

    snowmanPreviewSection.textContent = ''
    let mySnowmanSection = document.querySelector('.snow-list')
    mySnowmanSection.appendChild(listElement)
  }

  function onSendClick () {
    const backBtn = createElement('button', 'Back', 'back-btn')
    const imgElement = document.querySelector('#back-img')

    backBtn.addEventListener('click', () => {
      window.location.reload();
    })
    
    imgElement.removeAttribute('hidden')
    document.querySelector('main').remove()
    document.querySelector('body').appendChild(backBtn)
  }

  function createList() {
    const listElement = createElement('li', null, 'snowman-content')
    const article = createElement('article')

    article.appendChild(createElement('p', `Name: ${savedValues[0]}`))
    article.appendChild(createElement('p', `Height: ${savedValues[1]}`))
    article.appendChild(createElement('p', `Location: ${savedValues[2]}`))
    article.appendChild(createElement('p', `Creator: ${savedValues[3]}`))
    article.appendChild(createElement('p', `Attribute: ${savedValues[4]}`))

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
