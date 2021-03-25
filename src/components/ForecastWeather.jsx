import React from 'react';
import {ForecastItem} from './ForecastItem'

export const ForecastWeather = ({weather}) => {
    let forecast = weather.daily.slice(1, 6).map(w => {
        return (
            <div className="forecastWeather">
                <ForecastItem item = {w} />
            </div>
        )
    })
    return (
        <>
            {forecast}
        </>
    )
}