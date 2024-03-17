import { html, render } from './node_modules/lit-html/lit-html.js'
import { cats } from './catSeeder.js'

const root = document.getElementById('allCats')

render(createCatTemplate(cats), root)

function createCatTemplate(cats) {
    return html`
        <ul>
            ${cats.map(cat => currentCat(cat))}
        </ul>
    `
}
function currentCat(cat) {
    return html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button @click=${onClick} class="showBtn">Show status code</button>
                <div class="status" style="display: none" id="${cat.id}">
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>
    `
}

function onClick(event) {
    const status = event.target.parentElement.querySelector('.status')
    const currentState = status.style.display
    
    if (currentState === 'none'){
        status.style.display = 'block';
        event.target.textContent = 'Hide status code'
    } else {
        status.style.display = 'none';
        event.target.textContent = 'Show status code'

    }
}