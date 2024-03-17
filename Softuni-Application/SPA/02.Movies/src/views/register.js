import { post } from '../api/request.js';
import { createSubmitHandler, saveUserData } from '../util.js';
import { showHomeView } from './home.js';
import { showView } from './showView.js';

const form = document.getElementById('register-form')
form.addEventListener('submit', createSubmitHandler(onRegisterClick))

export function showRegisterView() {
    document.getElementById('form-sign-up').style.display = 'block'
}

async function onRegisterClick({ email, password, repeatPassword }) {
    const url = 'http://localhost:3030/users/register'
    
    if (!email  || !password || password != repeatPassword) {
        return alert('wrong register inputs')
    }
    
    const userData = await post(url, { email, password })
    
    saveUserData(userData)

    document.getElementById('register-form').reset()
    showView(showHomeView)
}