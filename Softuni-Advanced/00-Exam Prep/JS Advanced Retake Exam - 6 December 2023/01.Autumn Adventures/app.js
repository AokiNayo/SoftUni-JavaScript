window.addEventListener('load', solve);

function solve() {
  
  let inputFields = Array.from(document.querySelectorAll('input'))
  let addBtn = document.querySelector('#add-btn')
  let checkList = document.querySelector('#check-list')
  let savedValues = []


  addBtn.addEventListener('click', onClickAdd)

  function onClickAdd(ev) {
    ev.preventDefault()

    if (inputFields.some(x => x.value == '')){
      return
    }

    inputFields.map(x => savedValues.push(x.value))
    
    const listElement = createList()

    const editBtn = createElement('button', 'Edit', 'edit-btn')
    const continueBtn = createElement('button', 'Continue', 'continue-btn')

    editBtn.addEventListener('click', onClickEdit)
    continueBtn.addEventListener('click', onClickContinue)

    listElement.appendChild(editBtn)
    listElement.appendChild(continueBtn)

    checkList.appendChild(listElement)

    addBtn.disabled = true
    document.querySelector('form').reset()
  }

  function onClickEdit() {
    inputFields.map((x, i) => x.value = savedValues[i])

    addBtn.disabled = false
    checkList.textContent = ''
  }

  function onClickContinue() {
    const listElement = createList()
    const finishedBtn = createElement('button', 'Move to Finished', 'finished-btn')

    finishedBtn.addEventListener('click', onClickFinished)

    listElement.appendChild(finishedBtn)

    checkList.textContent = ''
    document.querySelector('#upcoming-list').appendChild(listElement)
  }

  function onClickFinished() {
    const listElement = createList()

    let finished = document.querySelector('#finished-list')
    finished.appendChild(listElement)

    document.querySelector('#upcoming-list').textContent = ''

    document.querySelector('#clear').addEventListener('click', () => {
      finished.remove()
      addBtn.disabled = false
    })
  }

  function createList() {
    let listElement = createElement('li', null, 'event-content')
    let articleElement = createElement('article')

    articleElement.appendChild(createElement('p', `Begins: ${savedValues[1]} at: ${savedValues[0]}` ))
    articleElement.appendChild(createElement('p', `In: ${savedValues[2]}` ))
    articleElement.appendChild(createElement('p', `Event: ${savedValues[3]}` ))
    articleElement.appendChild(createElement('p', `Contact: ${savedValues[4]}` ))
    
    listElement.appendChild(articleElement)

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