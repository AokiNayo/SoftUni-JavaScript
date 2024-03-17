function encodeAndDecodeMessages() {
  let buttons = Array.from(document.querySelectorAll("button"));
  let lastRecievedMessage = buttons[1].previousElementSibling;

  buttons[0].addEventListener("click", encode);
  buttons[1].addEventListener("click", decode);

  function encode() {
    let textArea = buttons[0].previousElementSibling;
    let encodedMessage = textArea.value;

    encodedMessage = [...encodedMessage]
      .map((x) => x.charCodeAt() + 1)
      .map((x) => String.fromCharCode(x));

    lastRecievedMessage.value = encodedMessage.join("");
    textArea.value = "";
  }

  function decode() {
    let decodeMessage = lastRecievedMessage.value;

    decodeMessage = [...decodeMessage]
      .map((x) => x.charCodeAt() - 1)
      .map((x) => String.fromCharCode(x));
    lastRecievedMessage.value = decodeMessage.join("");
  }
}
// 65 66 67
