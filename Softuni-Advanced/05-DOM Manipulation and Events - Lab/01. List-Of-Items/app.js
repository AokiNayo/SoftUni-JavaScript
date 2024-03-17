function addItem() {
    let input = document.querySelector('#newItemText')
    let inputValue = input.value

    let liElement = document.createElement('li')
    liElement.textContent = inputValue

    document.querySelector('#items').appendChild(liElement)

    input.value = ''
}