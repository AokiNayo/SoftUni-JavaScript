import { homeLoad } from './home.js'

export function loginUser() {
    document.querySelector("#login-form button").addEventListener("click", onLoginClick);
}
async function onLoginClick(e) {
    e.preventDefault()

    const formData = new FormData(document.getElementById("login-form"));
    const url = "http://localhost:3030/users/login";

    const email = formData.get("email");
    const password = formData.get("password");

    try {
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
