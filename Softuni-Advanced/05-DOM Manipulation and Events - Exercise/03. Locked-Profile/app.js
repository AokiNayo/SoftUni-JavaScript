function lockedProfile() {
  let buttons = document.querySelectorAll("button");

  for (const currButton of buttons) {
    currButton.addEventListener("click", (e) => {
      if (!e.target.parentElement.children[2].checked) {
        let elStyle = e.target.parentElement.children[9].style;
        let elContent = e.target;

        elStyle.display == "inline-block"
          ? (elStyle.display = "")
          : (elStyle.display = "inline-block");
        elContent.textContent == "Show more"
          ? (elContent.textContent = "Hide it")
          : (elContent.textContent = "Show more");
      }
    });
  }
}
