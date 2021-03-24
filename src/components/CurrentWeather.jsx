import React from 'react';

export const CurrentWeather = ({weather, location}) => {
    return (
        <>
            <h3>{location.name}</h3>
            <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="weather icon"/>
            <p>Temperature: {weather.current.temp}°</p>
            <p>{weather.current.weather[0].description}</p>
        </>
    )
}