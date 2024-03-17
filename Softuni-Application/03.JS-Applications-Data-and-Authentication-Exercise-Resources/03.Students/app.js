const baseURL = 'http://localhost:3030/jsonstore/collections/students'
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', addStudent)

async function addStudent(ev) {
    ev.preventDefault()

    let [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('input')
    
    if(!firstName.value || !lastName.value || !facultyNumber.value || !grade.value) {
        return
    }

    const res = await fetch(baseURL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value
        })
    })
    displayData()
}
async function getData() {
    let response = await fetch(baseURL)
    let data = await response.json() 
    return data;
}

async function displayData() {
    const tableBody = document.querySelector('#results tbody')
    tableBody.innerHTML = Object.values(await getData()).map(parseData).join('\n')
}

function parseData({firstName, lastName, facultyNumber, grade}) {
    const currStudent = `<tr><td>${firstName}</td><td>${lastName}</td><td>${facultyNumber}</td><td>${grade}</td></tr>`
    return currStudent
}

displayData()
