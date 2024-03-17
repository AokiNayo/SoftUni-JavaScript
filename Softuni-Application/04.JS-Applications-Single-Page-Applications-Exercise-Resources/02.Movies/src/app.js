import { registerUser } from "./register.js";
import { loginUser } from "./login.js";
import { logoutUser } from "./logout.js";
import { homeLoad } from "./home.js";
import { addMovie } from './add-movie.js'

start();

function start() {
    hideSections();
    homeLoad()

    const [welcomeMessage, logoutBtn, loginBtn, registerBtn] = document.querySelectorAll(".nav-link"); // TODO change anchor element to li element
    const addMovieBtn = document.querySelector('#add-movie-button a')

    checkUserData(welcomeMessage, logoutBtn, loginBtn, registerBtn, addMovieBtn);

    registerBtn.addEventListener("click", () => {
        registerUser();
        hideSections();
        document.getElementById("form-sign-up").style.display = "block";
    });

    loginBtn.addEventListener("click", () => {
        loginUser();
        hideSections();
        document.getElementById("form-login").style.display = "block";
    });

    logoutBtn.addEventListener("click", () => {
        logoutUser();
        checkUserData(welcomeMessage, logoutBtn, loginBtn, registerBtn);

        hideSections();
        document.getElementById("form-login").style.display = "block";
    });

    addMovieBtn.addEventListener('click', () => {
        addMovie()
        hideSections();
        document.getElementById("add-movie").style.display = "block";
    })
}

function hideSections() {
    document.querySelectorAll("section").forEach((section) => {
        section.style.display = "none";
    });
}
function checkUserData(welcomeMessage, logout, login, register, addMovieBtn) {
    // TODO change anchor element to li element
    const userData = localStorage.getItem("userData");

    if (!userData) {
        welcomeMessage.style.display = "none";
        logout.style.display = "none";
        login.style.display = "block";
        register.style.display = "block";
        addMovieBtn.style.display = 'none'

    } else {
        welcomeMessage.textContent = `Welcome, ${JSON.parse(userData).email}`;
        login.style.display = "none";
        register.style.display = "none";
        addMovieBtn.style.display = 'inline-block'
    }
}
