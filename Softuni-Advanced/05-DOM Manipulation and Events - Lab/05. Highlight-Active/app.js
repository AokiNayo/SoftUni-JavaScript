// function focused() {
//   let divElement = document.querySelector("div");
//   divElement.addEventListener("focusin", (event) => {
//     let parentEl = event.target.parentElement;
//     parentEl.classList.add("focused");
//   });
//   divElement.addEventListener("focusout", (event) => {
//     let parentEl = event.target.parentElement;
//     parentEl.classList.remove("focused");
//   });
// }

let divElement = document.querySelector("div"); // div > div*4 > input

divElement.addEventListener("focus", (event) => {
  let parentEl = event.target.parentElement;
  parentEl.classList.add("focused");
}, true);

divElement.addEventListener("blur", (event) => {
  let parentEl = event.target.parentElement;
  parentEl.classList.remove("focused");
}, true);
