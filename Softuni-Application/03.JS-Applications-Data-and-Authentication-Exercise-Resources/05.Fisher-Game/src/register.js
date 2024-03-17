document.querySelector("#register-view form").addEventListener("submit", onSubmitClick);
document.getElementById("logout").style.display = "none";

const url = "http://localhost:3030/users/register";

async function onSubmitClick(ev) {
    ev.preventDefault();

    const notificationField = document.querySelector("#register-view .notification");

    try {
        const [email, password, confirmPassword] = document.querySelectorAll("input");

        if (!email.value || !password.value || !confirmPassword.value) {
            throw new Error("Please fill out all fields");
        }

        if (password.value != confirmPassword.value) {
            throw new Error("Passwords do not match");
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.value, password: password.value }),
        });
        
        const data = await response.json();

        if (response.status != 200) {
            throw data;
        }

        localStorage.setItem("userData", JSON.stringify(data));

    } catch (error) {
        return notificationField.textContent = error.message;
    }
    window.location = "index.html";
}

// async function registerUser(email, password) {
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: email, password: password }),
//     });
//     console.log(response);
//     const data = await response.json();
//     localStorage.setItem("userData", JSON.stringify(data));
// }
