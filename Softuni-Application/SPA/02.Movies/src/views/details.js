import { del, get, post, put } from '../api/request.js';
import { getUserData } from '../util.js';
import { showHomeView } from './home.js';
import { showView } from './showView.js';

let movieID = ''

export function showDetailsView(ev) {
    movieID = ev.target.parentElement.parentElement.dataset.id;

    document.querySelectorAll('section').forEach(s => {
        s.style.display = 'none'
    })
    document.getElementById('movie-example').style.display = 'block'
    showMovie(movieID)
}
async function showMovie(movieID) {
    const data = await get(`http://localhost:3030/data/movies/${movieID}`)
    const movieDisplayRef = document.getElementById('movie-example')
    const movie = await _createMovie(data)

    movieDisplayRef.replaceChildren(movie)
}
function onDeleteClick(movieID) {
    del(`http://localhost:3030/data/movies/${movieID}`)
    showView(showHomeView)
}

function onEditClick({title, description, img}) {
    const editSection = document.getElementById('edit-movie')
    const editForm = editSection.querySelector('form')

    editForm.title.value = title
    editForm.description.value = description
    editForm.img.value = img

    showView(showEditSection)
}

async function onEditSubmit(ev, {_id}) {
    ev.preventDefault()

    const formData = new FormData(ev.target)
    const data = Object.fromEntries([...formData.entries()].map(([k, v]) => [k, v.trim()]))
    
    const resData = await put(`http://localhost:3030/data/movies/${_id}`, data)
    const movie = _createMovie(resData)

    const movieDisplayRef = document.getElementById('movie-example')
    movieDisplayRef.replaceChildren(movie)

    document.querySelectorAll('section').forEach(s => {
        s.style.display = 'none'
    })
    document.getElementById('movie-example').style.display = 'block'
    showMovie(movieID)
}

function onLikeClick(movieID) {
    post(`http://localhost:3030/data/likes`, {movieId: movieID})

}
function showEditSection() {
    document.getElementById('edit-movie').style.display = 'block'
}

async function _createMovie(data) {
    const userData = getUserData()
    
    const container = document.createElement('div')
    container.className = 'container'

    const innerContainer = document.createElement('div')
    innerContainer.className = 'row bg-light text-dark'

    const h1 = document.createElement('h1')
    h1.textContent = `Movie title: ${data.title}`

    const imgContainer = document.createElement('div')
    imgContainer.className = 'col-md-8'

    const imgElement = document.createElement('img')
    imgElement.className = 'img-thumbnail'
    imgElement.src = data.img
    imgElement.alt = 'Movie'

    const descriptionContainer = document.createElement('div')
    descriptionContainer.className = 'col-md-4 text-center'
    descriptionContainer.innerHTML = `
    <h3 class="my-3">Movie Description</h3>
    <p>${data.description}</p>
    `

    const deleteBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    const likeBtn = document.createElement('button')

    const span = document.createElement('span')
    const likesCount = await get(`http://localhost:3030/data/likes?where=movieId%3D%22${data._id}%22&distinct=_ownerId&count`)
    span.className = 'enrolled-span'
    span.textContent = `Liked ${likesCount}`

    
    if (userData) {
        if (userData._id != data._ownerId) {
            deleteBtn.style.display = 'none'
            editBtn.style.display = 'none'
            
            let userLike = await get(`http://localhost:3030/data/likes?where=movieId%3D%22${data._id}%22%20and%20_ownerId%3D%22${userData._id}%22`)
            
            if (userLike.length) {
                likeBtn.style.display = 'none'
                span.style.display = 'inline-block'
            } else {
                likeBtn.style.display = 'inline-block'
                span.style.display = 'none'
            }
        } else {
            likeBtn.style.display = 'none'
        }
    } else {
        deleteBtn.style.display = 'none'
        editBtn.style.display = 'none'
    }
    deleteBtn.className = 'btn btn-danger'
    editBtn.className = 'btn btn-warning'
    likeBtn.className = 'btn btn-primary'

    deleteBtn.textContent = 'Delete'
    editBtn.textContent = 'Edit'
    likeBtn.textContent = 'Like'

    deleteBtn.addEventListener('click', () => onDeleteClick(data._id))
    editBtn.addEventListener('click', () => {
        onEditClick(data)
        document.querySelector('#edit-movie form').addEventListener('submit', (ev) => {onEditSubmit(ev, data)})
    })
    likeBtn.addEventListener('click', async () => {
        onLikeClick(data._id)
        likeBtn.style.display = 'none'
        span.style.display = 'inline-block'
        const likes = await get(`http://localhost:3030/data/likes?where=movieId%3D%22${data._id}%22&distinct=_ownerId&count`)
        span.textContent = `Liked ${likes}`
    })

    container.appendChild(innerContainer)

    innerContainer.appendChild(h1)
    innerContainer.appendChild(imgContainer)
    innerContainer.appendChild(descriptionContainer)

    imgContainer.appendChild(imgElement)

    descriptionContainer.appendChild(deleteBtn)
    descriptionContainer.appendChild(editBtn)
    descriptionContainer.appendChild(likeBtn)
    descriptionContainer.appendChild(span)

    return container
}