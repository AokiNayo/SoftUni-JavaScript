import { get } from '../api/request.js'
import { getUserData } from '../util.js'

function _homeSection() {
    const homePage = document.getElementById('home-page')
    const addMovieBtn = document.getElementById('add-movie-button')
    const movieList = document.getElementById('movie')

    const userData = getUserData()

    homePage.style.display = 'block'
    movieList.style.display = 'block'

    if (userData) {
        addMovieBtn.style.display = 'block'
    }
}

export async function showHomeView() {
    const homePage = document.getElementById('home-page')
    const addMovieBtn = document.getElementById('add-movie-button')
    const movieList = document.getElementById('movie')

    const userData = getUserData()

    homePage.style.display = 'block'
    movieList.style.display = 'block'

    if (userData) {
        addMovieBtn.style.display = 'block'
    }

    const allMovies = await get('http://localhost:3030/data/movies')

    const movies = allMovies.map(movie => {
        const li = document.createElement('li')
        li.dataset.id = movie._id
        li.innerHTML = `
        <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400"/>
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
            <a href="#"></a>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-info">Details</button>
        </div>
        `
        return li
    })

    document.getElementById('movies-list').replaceChildren(...movies)
}