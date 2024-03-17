import { clearUserData, getUserData } from "../util.js"

async function request(method, url, data) {
    let options = {
        method: method,
        headers: {'Content-Type' : 'application/json'}
    }
    const userData = getUserData()
    
    if (data != undefined) {
        options.body = JSON.stringify(data)
    }
    
    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken
    }

    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            const err = await response.json()
            if (userData && err.code == 403) {
                clearUserData()
            }
            throw new Error(err.message)
        }
        const responseResult = await response.json()
        return responseResult
    } catch (err) {
        throw new Error(err)
    }
}

const get = (url) =>  request('get', url)
const post = (url, data) =>  request('post', url, data)
const put = (url, data) =>  request('put', url, data)
const del = (url) =>  request('delete', url)

export { get, post, put, del }