let userData = JSON.parse(localStorage.getItem('userData'))

let logoutBtn = document.getElementById('logout')
let loginBtn = document.getElementById('login')
let registerBtn = document.getElementById('register')

if (!userData) {
    logoutBtn.style.display = 'none'
} else {
    logoutBtn.style.display = 'inline-block'
    loginBtn.style.display = 'none'
    registerBtn.style.display = 'none'

    document.querySelector('.email span').textContent = userData.email
}

logoutBtn.addEventListener('click', () => {
    localStorage.clear()
    window.location.reload()
})