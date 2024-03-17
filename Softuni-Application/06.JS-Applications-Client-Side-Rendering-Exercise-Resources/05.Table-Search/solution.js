import {html, render} from './node_modules/lit-html/lit-html.js'

const tableRoot = document.querySelector('tbody')
const inputField = document.getElementById('searchField')

solve()

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   loadStudents()

   function onClick() {
      loadStudents()
   }
   
   async function loadStudents() {
      const response = await fetch('http://localhost:3030/jsonstore/advanced/table')
      const resData = await response.json()
      const template = Object.values(resData).map(student => createStudent(student))
      
      render(template, tableRoot) 
      inputField.value = ''
   }

   function createStudent(student) {
      const inputValue = inputField.value
      let isActive = false

      if (inputValue) {
         Object.values(student).map(st => {
            if (st.toLowerCase().includes(inputValue.toLowerCase())) {
               isActive=true
            }
         }) 
      }

      let studentTemplate = html`
      <tr class="${isActive ? 'select' : ''}">
          <td>${student.firstName} ${student.lastName}</td>
          <td>${student.email}</td>
          <td>${student.course}</td>
      </tr>
   `
   return studentTemplate
   }
}