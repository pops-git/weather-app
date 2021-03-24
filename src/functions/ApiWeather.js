export async function ApiWeather (location) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&lang=sv&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`;
    const response = await fetch(url);
    return await response.json();
}