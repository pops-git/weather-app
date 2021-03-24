export async function ApiOneCall (longitud, latitud) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;
    const response = await fetch(url)
    return response.json();
}