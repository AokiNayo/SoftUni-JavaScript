import { homeLoad } from './home.js'

export function addMovie() {
    document.querySelector("#add-movie-form").addEventListener("submit", onSubmit);
}

async function onSubmit(ev) {
    ev.preventDefault();

    const url = 'http://localhost:3030/data/movies'
    const form = document.getElementById("add-movie-form")
    const formData = new FormData(form);

    const title = formData.get('title')
    const description = formData.get('description')
    const img = formData.get('img')

    const accessToken = JSON.parse(localStorage.getItem('userData')).accessToken

    try {
        if (!title ||  !description || !img){
            return
        }
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json',
                'X-Authorization' : accessToken
            },
            body: JSON.stringify({ title, description, img})
        })

        homeLoad()
        form.reset()
        document.getElementById("add-movie").style.display = "none";
        console.log(await response.json())

    } catch (error) {
        alert(error.message)
    }
}