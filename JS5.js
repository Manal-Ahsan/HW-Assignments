
const btn = document.querySelector(".btn");
const weather = document.querySelector("#weather");

let getWeather = async () => {
  const input = document.querySelector("#cityName").value;
  const URL = `https://p2pclouds.up.railway.app/v1/learn/weather?city=${input}`;

  try {
    let response = await fetch(URL);

    if (!response.ok) {
      weather.innerText = "City not found";
      return;
    }

    let data = await response.json();
    console.log(data);

    if (data && data.current) {
      const tempC = data.current.temp_c;
      weather.innerText = `Temperature: ${tempC}°C`;
    } else {
      weather.innerText = "City does not exist";
    }
  } catch (error) {
    weather.innerText = "Error Occurred";
  }
};
btn.addEventListener("click", getWeather);




