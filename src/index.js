let currentTime = new Date();

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = weekdays[currentTime.getDay()];
let currentHour = currentTime.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinutes = currentTime.getMinutes();
let dateToday = document.querySelector("h3");

dateToday.innerHTML = `${currentDay} ${currentHour}: ${currentMinutes}`;

function showWeather(response) {
  document.querySelector(".location").innerHTML = response.data.name;
  document.querySelector("h1").innerHTML = Math.round(response.data.main.temp);
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);
