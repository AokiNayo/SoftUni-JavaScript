export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function saveUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    localStorage.removeItem('userData')
}

export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()])
        
        callback(Object.fromEntries(entries))
    }
}