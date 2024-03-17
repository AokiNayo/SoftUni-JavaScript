import { createSubmitHandler}  from '../util.js'
import {post }  from '../api/request.js'
import { showView } from './showView.js'
import { showHomeView } from './home.js'

document.getElementById('add-movie-form').addEventListener('submit', createSubmitHandler(onSubmit))

export function showAddMovie() {
    document.getElementById('add-movie').style.display = 'block'
}

function onSubmit(data) {
    post('http://localhost:3030/data/movies', data)
    document.getElementById('add-movie-form').reset()
    showView(showHomeView)
}