const btn = document.querySelector("#submit");
const div = document.querySelector("#stopName");
const ul = document.querySelector("#buses");

btn.addEventListener('click', getInfo)

async function getInfo() {
  const busStop = document.querySelector("#stopId").value;
  const url = `http://localhost:3030/jsonstore/bus/businfo/${busStop}`;

  try {
    const response = await fetch(url);
    if (response.status != 200) {
      throw `Error`
    }
    const data = await response.json();
    const currObjects = Object.entries(data.buses).map((currentBus) => {
      let [busNumber, busArrival] = currentBus;
      const li = document.createElement("li");
      li.textContent = `Bus ${busNumber} arrives in ${busArrival}`;
      return li;
    });
    div.textContent = data.name;
    ul.replaceChildren(...currObjects);

  } catch (err) {
    div.textContent = err
    ul.textContent = ''
  }
}
