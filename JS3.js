function checkWeather() {
    
    let city = document.getElementById('cityName').value.toLowerCase();

    let result;

    if (city === 'lahore') {
        result = 'Today Lahore Temp is 42C Sunny';
    } else if (city === 'karachi') {
        result = 'Today Karachi Temp is 35C Cloudy';
    } else if (city === 'islamabad' || city === 'isb') {
        result = 'Today Islamabad Temp is 30C Clear';
    } else {
        result = 'Weather data not available';
    }
    document.getElementById('weatherResult').innerText = result;
}