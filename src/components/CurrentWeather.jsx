import React from 'react';
import {UtsConverter} from '../functions/UtsConverter'

export const CurrentWeather = ({weather, location}) => {
    return (
        <div className="currentWeather">
            <h2>{location.name}</h2>
            <p>{UtsConverter(weather.current.dt)}</p>
            <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="weather icon"/>
            <h4>Temp: {Math.round(weather.current.temp)}°</h4>
            <p>{weather.current.weather[0].description}</p>
        </div>
    )
}