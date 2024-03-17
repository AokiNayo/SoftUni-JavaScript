function search() {
  const elements = document.getElementsByTagName("li");
  const searchText = document.getElementById("searchText").value;
  const regex = new RegExp(`\\b\\w*${searchText}\\w*\\b`, "gi");

  let matches = 0;

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.textDecoration = "";
    elements[i].style.fontWeight = "";

    if (elements[i].textContent.match(regex)) {
      elements[i].style.textDecoration = "underline";
      elements[i].style.fontWeight = "bold";
      matches++;
    }
  }
    document.getElementById("result").textContent = matches > 0 ? `${matches} matches found` : ''
}