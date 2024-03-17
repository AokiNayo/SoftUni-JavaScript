function validate() {
  document.querySelector("#email").addEventListener("change", (e) => {
    let regex = RegExp("[a-z]+@[a-z]+.[a-z]+");
    if (!e.target.value.match(regex)) {
        console.log('error');
      e.target.classList.add("error");
    } else {
        e.target.classList.remove("error")
    }
  });
}
