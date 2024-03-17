import { html, render } from './node_modules/lit-html/lit-html.js'

const bodyRoot = document.querySelector('body')

render(initialLoad(), bodyRoot)

async function onEditSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const title = formData.get('title').trim()
    const author = formData.get('author').trim()
    const bookID = formData.get('id').trim()
    
    await fetch(`http://localhost:3030/jsonstore/collections/books/${bookID}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, author})
    })
    
    render(initialLoad(), bodyRoot)
    onLoadClick()
}

async function onAddSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const title = formData.get('title').trim()
    const author = formData.get('author').trim()

    await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify({title: title, author: author})
    })
    onLoadClick()
}

function onEditClick(event) {
    const id = event.target.parentElement.parentElement.dataset.id
    const [title, author] = Array.from(event.target.parentElement.parentElement.children).map(x => x.textContent)
    document.getElementById('add-form')?.remove()

    const editTemplate = html`
        <button @click=${onLoadClick} id="loadBooks">LOAD ALL BOOKS</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        <form @submit=${onEditSubmit} id="edit-form">
            <input type="hidden" name="id">
            <h3>Edit book</h3>
            <label>TITLE</label>
            <input type="text" name="title" placeholder="Title...">
            <label>AUTHOR</label>
            <input type="text" name="author" placeholder="Author...">
            <input type="submit" value="Save">
        </form>
    `
    
    render(editTemplate, bodyRoot)
    onLoadClick()

    document.querySelector('[name=id').value = id
    document.querySelector('[name=title').value = title
    document.querySelector('[name=author').value = author
}

async function onDeleteClick(event) {
    const bookID = event.target.parentElement.parentElement.dataset.id
    
    await fetch(`http://localhost:3030/jsonstore/collections/books/${bookID}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })

    onLoadClick()
}
async function onLoadClick() {
    const tableBodyRoot = document.querySelector('tbody')
    const response = await fetch('http://localhost:3030/jsonstore/collections/books')
    const resData = Object.entries(await response.json())
    
    const allBooksTemplate = html`
        ${resData.map(([id, book]) => {
            return html`
            <tr data-id=${id}>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button @click=${onEditClick}>Edit</button>
                    <button @click=${onDeleteClick}>Delete</button>
                </td>
             </tr>
            `
        })}
    `
    render(allBooksTemplate, tableBodyRoot)
}

function initialLoad() {
    return html`
    <button @click=${onLoadClick} id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>

    <form @submit=${onAddSubmit} id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
    `
}