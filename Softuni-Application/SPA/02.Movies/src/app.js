import { displayNav } from './views/navBar.js'
import { showView } from './views/showView.js'
import { showHomeView } from './views/home.js'
import { showLoginView } from './views/login.js'
import { showRegisterView } from './views/register.js'
import { showAddMovie } from './views/addMovie.js'
import { showDetailsView } from './views/details.js'
import { logoutUser } from './views/logout.js'

document.querySelectorAll('section').forEach(s => {
    s.style.display = 'none'
})
displayNav()
showHomeView()

const views = {
    '/': showHomeView,
    '/home': showHomeView,
    '/login': showLoginView,
    '/register': showRegisterView,
    '/logout': logoutUser,
    '/addmovie': showAddMovie
}

const viewBtns = [document.querySelector('nav'), document.querySelector("a[href='/addmovie']")]

document.getElementById('movies-list').addEventListener('click', (ev) => {
    if (ev.target.tagName == 'BUTTON') {
        showDetailsView(ev)
    }
})


viewBtns.forEach(x => x.addEventListener('click', (event)  => {
    if (event.target.tagName == "A"){
        event.preventDefault()
        if (event.target.id == 'welcome-msg') {
            return
        }
        const route = event.target.getAttribute("href")
        showView(views[route])
    } else if (event.target.tagName == 'BUTTON') {
        console.log('in')
    }
}));