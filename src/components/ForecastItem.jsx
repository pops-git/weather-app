import React from 'react';
import {UtsConverter} from '../functions/UtsConverter'

export const ForecastItem = ({item}) => {
    return (
        <>
            <div className="block">
                <p>{UtsConverter(item.dt)}</p>
                <p>Min: {Math.round(item.temp.min)}°</p>
                <p>Max: {Math.round(item.temp.max)}°</p>
            </div>            
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon"/>
        </>
    )
}