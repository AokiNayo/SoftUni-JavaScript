import { get } from '../api/request.js'
import { clearUserData } from '../util.js'
import { showLoginView } from './login.js'
import { showView } from './showView.js'

export async function logoutUser() {
    const url = 'http://localhost:3030/users/logout'
    get(url)
    clearUserData()
    showView(showLoginView)
}