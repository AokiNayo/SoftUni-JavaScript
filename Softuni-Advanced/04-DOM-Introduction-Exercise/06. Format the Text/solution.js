function solve() {
  const sentenceArrayRef = document.querySelector("#input").value.split(".");
  const sentenceArray = sentenceArrayRef.filter(x => x.trim())
  debugger
  document.querySelector('#output').innerHTML = ''

  if (sentenceArray.length <= 3) {
    document.querySelector('#output').innerHTML += `<p>${sentenceArray.join(". ")}${'.'}</p>`
    return
  }

  while (sentenceArray.length > 0) {
    let currentSentence = sentenceArray.length > 3 ? sentenceArray.splice(0,3) : sentenceArray.splice(0, sentenceArray.length)
    document.querySelector('#output').innerHTML += `<p>${currentSentence.join(". ")}${'.'}</p>`
  }
}
