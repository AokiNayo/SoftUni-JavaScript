function validate() {
  let emailField = document.querySelector("#email");
  let regex = /[a-z]+@[a-z]+.[a-z]+/gm;

  emailField.addEventListener("change", () => {
    regex.test(emailField.value) ? emailField.classList.remove("error") : emailField.classList.add("error")
  });
}
