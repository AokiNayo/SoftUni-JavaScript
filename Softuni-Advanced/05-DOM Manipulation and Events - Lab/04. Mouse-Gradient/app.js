function attachGradientEvents() {
  let gradient = document.querySelector("#gradient");
  gradient.addEventListener("mousemove", mousePosition)

  function mousePosition(event) {
    let width = gradient.clientWidth
    let result = Math.round((event.offsetX - 1) / width  * 100)
    document.querySelector('#result').textContent = result + '%'
    console.log(event.offsetX)
  }
}
