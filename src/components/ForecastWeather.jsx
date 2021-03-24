import React from 'react';
import {UtsConverter} from '../functions/UtsConverter'

export const ForecastWeather = ({weather}) => {
    let forecast = weather.daily.slice(1, 6).map(w => {
        return (
            <div className="forecastWeather">
                <div className="block">
                    <p>{UtsConverter(w.dt)}</p>
                    <p>Min: {Math.round(w.temp.min)}°</p>
                    <p>Max: {Math.round(w.temp.max)}°</p>
                </div>            
                <img src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} alt="weather icon"/>
            </div>
        )
    })
    return (
        <>
            {forecast}
        </>
    )
}