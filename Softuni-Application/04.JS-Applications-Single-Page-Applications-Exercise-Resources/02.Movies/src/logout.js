export function logoutUser() {
    logoutRequest()
    localStorage.clear()
}

async function logoutRequest() {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const url = 'http://localhost:3030/users/logout'

    await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'X-Authorization' : userData.accessToken },
    })
}