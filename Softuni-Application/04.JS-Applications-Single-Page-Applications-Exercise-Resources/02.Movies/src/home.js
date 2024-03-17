const url = "http://localhost:3030/data/movies";

export function homeLoad() {
    document.getElementById("home-page").style.display = "block";
    document.getElementById('add-movie-button').style.display = 'block'
    document.getElementById('movie').style.display = 'block'
    renderHomePage();
}

function renderHomePage() {
    createMovie()
}

async function createMovie() {
    const movies = await getMovies()
    let movieList = []

    movies.forEach(movie => {
        let currMovie = document.createElement('li')
        currMovie.dataset.id = movie._id

        // detailsBtn.addEventListener('click', onDetailsClick)

        currMovie.classList.add('md-4', 'card')


        // TODO Details ID 
        currMovie.innerHTML = `
                <img src="${movie.img}" alt="moviePoster" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">${movie.title}</h4>
                </div>
                <div class="card-footer">
                    <a href="/details/id"> 
                        <button data-id=${'DATA'} type="button" class="btn btn-info">Details</button>
                    </a>
                </div>
        `
        movieList.push(currMovie)
    })
    document.getElementById('movies-list').replaceChildren(...movieList)
}

async function getMovies() {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message);
        }

        return await res.json();

    } catch (err) {
        alert(err.message);
        throw err;
    }
}