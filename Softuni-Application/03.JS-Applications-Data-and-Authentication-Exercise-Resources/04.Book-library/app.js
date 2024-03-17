const loadBtn = document.getElementById('loadBooks')
const tableBody = document.querySelector('tbody')
const formElement = document.querySelector('form')

const url = 'http://localhost:3030/jsonstore/collections/books'

loadBtn.addEventListener('click', loadBooks)
formElement.addEventListener('submit', addBook)

async function getData() {
    const res = await fetch(url)
    const data = await res.json()
    return data
}
async function loadBooks() {
    const data = await getData()

    tableBody.innerHTML = Object.values(data).map(parsedData).join('\n')

    const allEditBtns = Array.from(document.querySelectorAll('button')).filter(x => x.textContent == 'Edit')
    const allDeleteBtns = Array.from(document.querySelectorAll('button')).filter(x => x.textContent == 'Delete')

    allEditBtns.map(x => x.addEventListener('click', onEditClick))
    allDeleteBtns.map(x => x.addEventListener('click', deleteBook))
}
async function addBook(ev) {
    ev.preventDefault()

    const [title, author] = document.querySelectorAll('input')

    if(!title.value || !author.value) {
        return
    }

    await fetch(url, {
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify({author: author.value, title: title.value})
    })

    title.value = ''
    author.value = ''

    loadBooks()
}

async function onEditClick(ev) {
    const [titleInputField, authorInputField] = document.querySelectorAll('input')
    
    const data = await getBook(ev)
    
    titleInputField.value = data.title
    authorInputField.value = data.author
    
    formElement.removeEventListener('submit', addBook)

    formElement.addEventListener('click', async () => {
        await fetch(`${url}/${data._id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                author: authorInputField.value, title: titleInputField.value, _id : data._id
            })
        })
    })

    toggleForm()
}

async function deleteBook(ev) {
    const currBook = await getBook(ev)
    
    await fetch(`${url}/${currBook._id}`, {
        method: 'DELETE',
        headers:  {'Content-Type': 'application/json'},
    })

    loadBooks()
}
async function getBook(ev) {
    const [title, author] = ev.target.parentElement.parentElement.querySelectorAll('td')
    return Object.values(await getData()).filter(x => x.author == author.textContent && x.title == title.textContent)[0]
}
function parsedData({author, title}) {
    return `<tr><td>${title}</td><td>${author}</td><td><button>Edit</button><button>Delete</button></td></tr>`
}
function toggleForm() {
    formElement.querySelector('h3').textContent = 'FORM' ? 'Edit FORM' : 'FORM'
    formElement.querySelector('button').textContent = 'Submit' ? 'Save' : 'Submit'
}