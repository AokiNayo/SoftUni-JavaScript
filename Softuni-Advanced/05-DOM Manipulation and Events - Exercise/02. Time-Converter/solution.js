function attachEventsListeners() {
  let days = document.querySelector("#days");
  let hours = document.querySelector("#hours");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  
  document.querySelector('#daysBtn').addEventListener('click', convertDays)
  document.querySelector('#hoursBtn').addEventListener('click', convertHours)
  document.querySelector('#minutesBtn').addEventListener('click', convertMinutes)
  document.querySelector('#secondsBtn').addEventListener('click', convertSeconds)

  function convertDays() {
    hours.value = days.value * 24;
    minutes.value = days.value * 1440;
    seconds.value = days.value * 86400;
  }
  function convertHours() {
    days.value = hours.value / 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  }
  function convertMinutes() {
    days.value = minutes.value / 1440;
    hours.value = minutes.value / 60;
    seconds.value = minutes.value * 60;
  }
  function convertSeconds() {
    days.value = seconds.value / 86400;
    hours.value = seconds.value / 3600;
    minutes.value = seconds.value / 60;
  }
}
