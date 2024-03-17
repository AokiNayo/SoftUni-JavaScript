function extractText() {
  const elements = Array.from(document.getElementsByTagName("li"));
  for (const el of elements) {
    document.getElementById("result").textContent += el.textContent + '\n'
  }
}
