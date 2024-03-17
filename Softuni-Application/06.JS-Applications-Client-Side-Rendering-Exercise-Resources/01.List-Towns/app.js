import {html, render} from './node_modules/lit-html/lit-html.js'
const form = document.querySelector('.content')

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
    const root = document.getElementById('root')
    const formData = new FormData(event.target)
    const towns = formData.get('towns').split(', ')

    render(townsTemplate(towns), root)
}

function townsTemplate(towns){
    return html`
    <ul>
        ${towns.map(t => html`<li>${t}</li>`)}
    </ul>
    `
}