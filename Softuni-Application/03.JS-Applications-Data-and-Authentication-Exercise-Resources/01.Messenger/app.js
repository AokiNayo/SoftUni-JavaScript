const textArea = document.getElementById('messages')
const [author, message, sendBtn, refreshBtn] = document.querySelectorAll('input')
const url = 'http://localhost:3030/jsonstore/messenger'

function attachEvents() {
    sendBtn.addEventListener('click', sendData)
    refreshBtn.addEventListener('click', loadMessages)
}

async function sendData() {
    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author: author.value, content: message.value })
    })
}
async function loadMessages() {
    const res = await fetch(url)
    const data = await res.json()

    const curr = Object.values(data).map(({author, content}) => `${author}: ${content}`).join('\n')
    textArea.textContent = curr
}

attachEvents();