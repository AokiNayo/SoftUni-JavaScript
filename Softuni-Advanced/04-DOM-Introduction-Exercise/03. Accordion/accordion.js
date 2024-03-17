function toggle() {
  let textElement = document.getElementById("extra");
  let buttonElement = document.querySelector(".button");

  if (textElement.style.display === "none") {
    textElement.style.display = "block";
    buttonElement.textContent = "Less";
  } else {
    textElement.style.display = "none";
    buttonElement.textContent = "More";
  }
}
