document.querySelector("#login-view form").addEventListener("submit", onSubmitClick);
document.getElementById('logout').style.display = 'none'

const url = "http://localhost:3030/users/login";

async function onSubmitClick(ev) {
    ev.preventDefault();
    
    const formData = new FormData(ev.target);
    const userEmail = formData.get("email");
    const userPass = formData.get("password");

    if (!userEmail || !userPass) {
        throw new Error("Please fill out all fields");
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: userEmail, password: userPass }),
        });
        if (response.status != 200) {
            throw await response.json();
        }
        const data = await response.json()
        localStorage.setItem("userData", JSON.stringify(data));
    } catch (err) {
        return document.querySelector("#login-view .notification").textContent = err.message;
    }

    window.location = "index.html";
}
