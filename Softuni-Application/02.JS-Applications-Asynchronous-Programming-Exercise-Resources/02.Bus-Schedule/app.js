const departBtn = document.getElementById('depart')
const arriveBtn = document.getElementById('arrive')
const info = document.querySelector('.info')
let currentID = 'depot'

function solve() {

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentID}`)
            .then(res => res.json())
            .then(onDepartHandler)
            .catch(err => console.log(err))
    }

    function arrive() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentID}`)
            .then(res => res.json())
            .then(onArriveHandler)
            .catch(err => console.log(err))
    }

    return {
        depart,
        arrive,
    };
}
function onDepartHandler({name}) {    
    info.textContent = `Next Stop ${name}`
    departBtn.disabled = true
    arriveBtn.disabled = false
}

function onArriveHandler ({name, next}) {
    currentID = next

    info.textContent = `Arriving at ${name}`
    departBtn.disabled = false
    arriveBtn.disabled = true
}
let result = solve();
