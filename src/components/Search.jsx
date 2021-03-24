import React, { useState, useRef } from 'react';
import {CurrentWeather} from './CurrentWeather'
import {ForecastWeather} from './ForecastWeather'
import {CityExist} from '../functions/CityExist'
import {ApiWeather} from '../functions/ApiWeather'
import {ApiOneCall} from '../functions/ApiOneCall'

export const Search = () => {

    const searchLocation = useRef()
    const[location, setLocation] = useState()
    const[weather, setWeather] = useState()

    const canShowWeather = weather !== undefined && location !== undefined && location.coord !== undefined

    const callApi = async () => {
        const locationResult = await ApiWeather(searchLocation.current.value)
        setLocation(locationResult)

        if(locationResult.coord !== undefined){
            const weatherResult = await ApiOneCall(locationResult.coord.lon, locationResult.coord.lat)
            setWeather(weatherResult)
        }
    }

    const autoSearchWeather = () => {
        if(CityExist(searchLocation.current.value)){
            callApi()
        }
    }

    const manualSearchWeather = () => {
        callApi()
    }

    let weatherData
    if(canShowWeather){
        weatherData = (
            <>
                <CurrentWeather location = {location} weather = {weather} />
                <ForecastWeather weather = {weather} />
            </>
        )
    }
    
    return (
        <>
            <label>Search city</label><br/>
            <input type="text" ref={searchLocation} onKeyUp={autoSearchWeather}/>
            <button onClick={manualSearchWeather}>Manual Search</button>
            {weatherData}
        </>
    )
}