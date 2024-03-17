function addItem() {
    const inputText = document.querySelector('#newItemText')
    const inputValue = document.querySelector('#newItemValue')
    
    let newOption = document.createElement('option')
    newOption.value = inputValue.value
    newOption.textContent = inputText.value
    
    document.querySelector('#menu').appendChild(newOption)
    inputText.value = ''
    inputValue.value = ''
    
}