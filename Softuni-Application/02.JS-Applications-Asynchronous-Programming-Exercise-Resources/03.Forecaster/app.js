const getWeatherBtn = document.querySelector("#submit");

const locationURL = `http://localhost:3030/jsonstore/forecaster/locations`;
const todayWeatherURL = `http://localhost:3030/jsonstore/forecaster/today`;
const upcomingWeatherURL = `http://localhost:3030/jsonstore/forecaster/upcoming`;

let locationInput = document.getElementById("location");

function attachEvents() {
    getWeatherBtn.addEventListener("click", onClickHandler);
}

function onClickHandler() {
    fetch(locationURL)
        .then((res) => res.json())
        .then(getLocation)
        .catch(errorHandler);
}
function getLocation(data) {
    let { code } = Object.values(data).find((x) => x.name == locationInput.value);

    fetch(`${todayWeatherURL}/${code}`)
        .then((res) => res.json())
        .then(displayToday)
        .catch(errorHandler);

    fetch(`${upcomingWeatherURL}/${code}`)
        .then((res) => res.json())
        .then(displayUpcomming)
        .catch(errorHandler);
}
function displayToday({ forecast: { condition, high, low }, name }) {
    const currentRef = document.getElementById("current");
    const upcomingRef = document.getElementById("upcoming");

    currentRef.innerHTML = `<div class="label">Current conditions</div>`;
    upcomingRef.innerHTML = `<div class="label">Three-day forecast</div>`;

    document.querySelector("#forecast").style.display = "block";

    const currentContainer = document.getElementById("current");
    const todayContainer = createElement("div", "forecasts");

    const spanSymbol = createElement("span", "condition symbol");
    const spanContainer = createElement("span", "condition");

    const locationName = createElement("span", "forecast-data");
    const locationTemp = createElement("span", "forecast-data");
    const locationCondition = createElement("span", "forecast-data");

    spanSymbol.innerHTML = createSymbol(condition);

    locationName.textContent = name;
    locationTemp.innerHTML = `${low}&#176;/${high}&#176;`;
    locationCondition.textContent = condition;

    spanContainer.appendChild(locationName);
    spanContainer.appendChild(locationTemp);
    spanContainer.appendChild(locationCondition);

    todayContainer.appendChild(spanSymbol);
    todayContainer.appendChild(spanContainer);

    currentContainer.appendChild(todayContainer);
}
function displayUpcomming({ forecast }) {
    const upcomingContainer = document.querySelector("#upcoming");
    const forecastInfoContainer = createElement("div", "forecast-info");

    for (const curr of forecast) {
        const spanContainer = createElement("span", "upcoming");
        const spanSymbol = createElement("span", "symbol");

        const locationTemp = createElement("span", "forecast-data");
        const locationCondition = createElement("span", "forecast-data");

        spanSymbol.innerHTML = createSymbol(curr.condition);
        locationTemp.innerHTML = `${curr.low}&#176;/${curr.high}&#176;`;
        locationCondition.textContent = curr.condition;

        spanContainer.appendChild(spanSymbol);
        spanContainer.appendChild(locationTemp);
        spanContainer.appendChild(locationCondition);

        forecastInfoContainer.appendChild(spanContainer);
    }
    upcomingContainer.appendChild(forecastInfoContainer);
}
function errorHandler() {
    const forecast = document.getElementById("forecast");
    forecast.style.display = "block";
    forecast.textContent = "Error";
}
function createSymbol(condition) {
    switch (condition) {
        case "Sunny":
            return "&#x2600";
        case "Partly sunny":
            return "&#x26C5";
        case "Overcast":
            return "&#x2601";
        case "Rain":
            return "&#x2614";
    }
}
function createElement(tag, className) {
    const currElement = document.createElement(tag);
    currElement.className = className;
    return currElement;
}
attachEvents();
