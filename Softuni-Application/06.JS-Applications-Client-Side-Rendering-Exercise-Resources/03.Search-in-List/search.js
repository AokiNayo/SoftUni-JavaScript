import { towns } from './towns.js'
import {html, render} from './node_modules/lit-html/lit-html.js'

const rootDiv = document.getElementById('towns')
const resultRoot = document.getElementById('result')
const searchBtn = document.querySelector('button')

updateCities()


searchBtn.addEventListener('click', search)

let matchCount = 0

function updateCities() {
   render(ulTemplate(liTemplate), rootDiv)
}

function ulTemplate(liTemplate) {
   const townList =  html`
      <ul>
         ${towns.map(town => liTemplate(town))}
      </ul>
   `
   document.getElementById('searchText').value = ''
   return townList
}

function liTemplate(town) {
   let inputValue = document.getElementById('searchText').value
   let currTown = ''
   
   if (inputValue && town.includes(inputValue)) {
      currTown = html`<li class="active">${town}</li>`
      matchCount++
   } else {
      currTown = html`<li>${town}</li>`
   }

   return currTown
}

function search() {
   updateCities()
   resultRoot.textContent = `${matchCount} matches found`
   matchCount = 0
}
