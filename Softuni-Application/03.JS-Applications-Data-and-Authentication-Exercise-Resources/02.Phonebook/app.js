const [person, phone] = document.querySelectorAll('input')
const createBtn = document.getElementById('btnCreate')
const loadBtn = document.getElementById('btnLoad')

const phoneBook = document.getElementById('phonebook')

const baseURL = `http://localhost:3030/jsonstore/phonebook`

function attachEvents() {
    createBtn.addEventListener('click', createNewPerson)
    loadBtn.addEventListener('click', showPhoneBook)
}
async function createNewPerson() {
    const res = await fetch(baseURL, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({person: person.value, phone: phone.value})
    })
}
async function getPhoneBook() {
    const res  = await fetch(baseURL)
    const data = await res.json()
    return data;
}
async function showPhoneBook() {

    const data = await getPhoneBook()

    const phoneBookList = Object.values(data).map(loadPhoneBook)

    phoneBook.replaceChildren(...phoneBookList)

}
function loadPhoneBook({person, phone}) {
    let li  = document.createElement('li')
    let btn  = document.createElement('button')

    btn.addEventListener('click', deleteFromPhoneBook)

    li.textContent = `${person}: ${phone}`
    btn.textContent = 'Delete'

    li.appendChild(btn)
    return li
}
async function deleteFromPhoneBook(ev) {
    const data = await getPhoneBook()

    const [person] = ev.target.parentElement.textContent.split(':')
    const id = Object.values(data).find(user => user.person == person)._id

    const res = fetch(`${baseURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id : id })
    })
}
attachEvents();