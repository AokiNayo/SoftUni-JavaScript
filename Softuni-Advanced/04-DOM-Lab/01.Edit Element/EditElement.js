function editElement(element, toReplace, replacement) {
    const regex = new RegExp(toReplace, 'g')
    const edited = element.textContent.replace(regex, replacement)
    element.textContent = edited
}