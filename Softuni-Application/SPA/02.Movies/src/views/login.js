import { post } from '../api/request.js';
import { createSubmitHandler, saveUserData } from '../util.js';
import { showHomeView } from './home.js';
import { showView } from './showView.js';

const form = document.getElementById('login-form')
form.addEventListener('submit', createSubmitHandler(onLoginClick))


export function showLoginView() {
    document.getElementById('form-login').style.display = 'block'
}
async function onLoginClick({email, password}) {
    const url = 'http://localhost:3030/users/login'
    try {
        const userData = await post(url, { email, password })
        if (!userData) {
            return
        }
        saveUserData(userData)
    } catch (error) {
        alert(error.message)
        return
    }

    document.getElementById('login-form').reset()
    showView(showHomeView)
}