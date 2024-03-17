function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  document.querySelector("#searchField").addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        onClick()
      }
    });

  function onClick() {
    const elements = document.querySelectorAll("tbody tr");
    const searchText = document
      .getElementById("searchField")
      .value.toLowerCase();
    for (const element of elements) {
      document.getElementById("searchField").value = "";
      element.classList.remove("select");
      if (
        Array.from(element.textContent)
          .filter((x) => x.trim())
          .join("")
          .includes(searchText)
      ) {
        element.classList.add("select");
      }
    }
  }
}
