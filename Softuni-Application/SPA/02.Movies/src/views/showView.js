import { displayNav } from './navBar.js'

export function showView(view) {
    document.querySelectorAll('section').forEach(s => {
        s.style.display = 'none'
    })
    view()
    displayNav()
}