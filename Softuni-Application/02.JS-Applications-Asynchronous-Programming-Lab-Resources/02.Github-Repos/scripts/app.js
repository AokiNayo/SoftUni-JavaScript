const repos = document.querySelector("#repos");

async function loadRepos() {
  const username = document.querySelector("#username").value;
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw `Error: ${response.status} (Not Found)`;
    }
    const data = await response.json();
    const currObjects = data.map(createAnchor);
    repos.replaceChildren(...currObjects);
  } catch (err) {
    const liElement = document.createElement("li");
		liElement.textContent = err;
    repos.replaceChildren(liElement);
  }
}

function createAnchor({ full_name, html_url }) {
  const liElement = document.createElement("li");
  const anchor = document.createElement("a");

  liElement.appendChild(anchor);
  anchor.href = html_url;
  anchor.textContent = full_name;

  return liElement;
}
