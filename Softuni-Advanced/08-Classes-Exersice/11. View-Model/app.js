class Textbox {
  constructor(selector, regex) {
    this._elements = document.querySelectorAll(selector);
    this._invalidSymbols = regex;
    this.onType();
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;

    for (let curr of this._elements) {
      curr.value = value;
    }
  }
  get elements() {
    return this._elements;
  }

  isValid() {
    return !this._invalidSymbols.test(this.value);
  }
  onType() {
    for (const curr of this._elements) {
      curr.addEventListener("input", () => {
        this.value = curr.value;
      });
    }
  }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName(".textbox");

inputs.addEventListener("click", () => {
  console.log(textbox.value);
});
