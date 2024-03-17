import { getUserData } from '../util.js'

export function displayNav() {
    const userData = getUserData()
    if (userData) {
        document.getElementById('welcome-msg').textContent = `Welcome, ${userData.email}`
        document.querySelectorAll('.user').forEach(x => x.style.display = 'block')
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'none')
    } else {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'none')
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'block')
    }
}