function addItem() {
    let input = document.querySelector('#newItemText')
    let inputValue = input.value

    let aElement = document.createElement('a')
    let liElement = document.createElement('li')
    let ulElement = document.querySelector('#items')
    
    aElement.textContent = '[Delete]'
    aElement.href = '#'

    liElement.textContent = inputValue
    liElement.appendChild(aElement)

    ulElement.appendChild(liElement)

    input.value = ''

    aElement.addEventListener('click', deleteElement)

    function deleteElement(event) {
        ulElement.removeChild(event.target.parentElement)
    }
}