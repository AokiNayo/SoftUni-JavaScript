function create(words) {
  for (const word of words) {
    let pElement = document.createElement("p");
    let divElement = document.createElement("div");

    pElement.textContent = word;
    pElement.style.display = "none";

    divElement.appendChild(pElement);
    document.querySelector("#content").appendChild(divElement);

    divElement.addEventListener("click", () => {
      pElement.style.display = "";
    });
  }
}
