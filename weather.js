const emo = document.querySelector("img");
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "214d2e9a8d20a2e32847d30107375909";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        emo.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        weather.innerText = `${data.main.temp}°C (체감 ${data.main.feels_like}°C)`;
        city.innerText = `in ${data.name}`;
    });
}

function onGeoError() {
    alert("위치 확인 실패!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);