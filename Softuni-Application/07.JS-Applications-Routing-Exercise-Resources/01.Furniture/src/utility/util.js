import { render } from "../../node_modules/lit-html/lit-html.js";

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function  setUserData(data) {
    sessionStorage.setItem("userData", JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}

export function formValues(event, callback, ctx) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(Array.from(formData).map(([k,v]) => [k, v.trim()]))

    callback(data, ctx)
}

export async function myRender(template) {
    const root = document.querySelector('.container')
    render(template, root)
}