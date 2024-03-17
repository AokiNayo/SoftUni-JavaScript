import { homeLoad } from './home.js'
export function registerUser() {
    document.querySelector("#form-sign-up button").addEventListener("click", onRegisterClick);
}
async function onRegisterClick(e) {
    e.preventDefault()

    const formData = new FormData(document.getElementById("register-form"));
    const url = "http://localhost:3030/users/register";

    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("repeatPassword");

    try {
        if (!email || password.length < 6 || password != confirmPassword) {
            throw Error('Please fill all fields correctly!')
        }
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
        });
        const data = await response.json()
        localStorage.setItem('userData', JSON.stringify(data))
        homeLoad()
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}
