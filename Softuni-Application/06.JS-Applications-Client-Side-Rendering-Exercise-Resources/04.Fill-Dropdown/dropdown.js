import { render, html } from './node_modules/lit-html/lit-html.js'

const selectRoot = document.getElementById('menu')
const form = document.querySelector('form')

form.addEventListener('submit', addItem)

loadDropdown()

async function loadDropdown() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown')
        const data = await response.json()
        const renderObj = Object.values(data).map(option => createOption(option))
        render(renderObj, selectRoot)

    } catch (error) {
        
    }
}
async function addItem(event) {
    event.preventDefault();

    const input = document.getElementById('itemText').value

    await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text:input})
    })
    form.reset()
    loadDropdown()
}

function createOption(curr) {
    return  html`<option value=${curr._id}>${curr.text}</option>`;
}